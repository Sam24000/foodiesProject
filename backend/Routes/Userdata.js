// Importing required modules and libraries
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userSchema = require('../models/UserSchema');
const bcryptvar = require('bcrypt');
const jwt = require('jsonwebtoken');

// Secret token used for JWT authentication
const secrettoken = "IamdevendrakumarandIamFromKanp$#";

// Route for handling user registration (POST /path)
router.post("/path",
    // Validation middleware using express-validator
    [
        body('email', 'incorrect email').isEmail(),
        body('name').isLength({ min: 5 }),
        body('password', 'incorrect password').isLength({ min: 5 })
    ],
    async (req, res) => {
        // Validate incoming request data against the defined validation rules
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            // If validation errors are present, return them in the response
            return res.status(400).json({ errors: errors.array() });
        }

        // Generate a salt and hash the password for security
        const salt = await bcryptvar.genSalt(10);
        const hashpasswrd = await bcryptvar.hash(req.body.password, salt);

        try {
            // Create a new user in the database using the UserSchema model
            await userSchema.create({
                name: req.body.name,
                password: hashpasswrd,
                email: req.body.email,
                location: req.body.location
            });

            // Return a success response
            res.json({ success: true });
        } catch (err) {
            // If there's an error during user creation, log the error and return a failure response
            console.log(err);
            res.json({ success: false });
        }
    }
);

// Route for handling user login (POST /loginuser)
router.post("/loginuser", async (req, res) => {
    let email = req.body.email; // Taking the email from the request body

    try {
        // Find the user in the database using the provided email
        let fulldata = await userSchema.findOne({ email });
        if (!fulldata) {
            // If user is not found, return an error response
            return res.status(400).json({ errors: "not found account" });
        }

        // Compare the provided password with the hashed password in the database
        const cpmpass = await bcryptvar.compare(req.body.password, fulldata.password);

        if (!cpmpass) {
            // If the passwords don't match, return an error response
            return res.status(400).json({ errors: "not found account" });
        }

        // If the login is successful, create a JWT token containing user data
        const data = {
            user: {
                id: fulldata.id
            }
        }
        const authToken = jwt.sign(data, secrettoken);

        // Return a success response with the JWT token
        return res.json({ success: true, authToken: authToken });
    } catch (err) {
        // If there's an error during login, log the error and return a failure response
        console.log(err);
        res.json({ success: false });
    }
});

// Export the router to be used in other parts of the application
module.exports = router;
