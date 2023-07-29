import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Footer from '../components/Footer';
// import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom';

export default function Home() {
    // State variables to hold data from the API
    const [fooditem, setfooditem] = useState([]);   // Array to store food items data
    const [foodcat, setfoodcat] = useState([]);      // Array to store food categories data

    // State variable to store search input
    const [search, setsearch] = useState('');

    // Function to fetch data from the API
    const loaddata = async () => {
        let res = await fetch("https://foodies-wr25.onrender.com/api/fooddata", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Parse the response into JSON format
        res = await res.json();
        // Update the state variables with the fetched data
        setfooditem(res[0]);
        setfoodcat(res[1]);
        console.log(res);
    };

    // Load data from the API on component mount
    useEffect(() => {
        loaddata();
    }, []);

    // Function to handle search button click
    const submit = () => {
        // Get the input value and update the search state variable
        const inputValue = document.querySelector('input[type="search"]').value;
        setsearch(inputValue);
    };

    return (
        <div>
            <Navbar />
            <div>
                {/* Carousel with search bar */}
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{ objectFit: "contain !important" }}>
                    {/* Carousel inner content */}
                    <div className="carousel-inner" id='carousel'>
                        {/* Search bar in the carousel caption */}
                        <div className='carousel-caption' style={{ zIndex: "10" }}>
                            <div className="form-inline d-flex justify-content-center">
                                {/* Input for search */}
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
                                {/* Search button */}
                                <button className="btn btn-outline bg-dark" onClick={submit} type="button">Search</button>
                            </div>
                        </div>
                        {/* Carousel items */}
                        {/* Images are fetched randomly from Unsplash with different food categories */}
                        <div className="carousel-item active">
                            <img className="d-block w-100" id='carousel-img' src="https://source.unsplash.com/random/900×700/?burger" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" id='carousel-img' src="https://source.unsplash.com/random/900×700/?pizza" alt="Second slide" />
                        </div>
                        {/* ... (similarly, there are more carousel items for other food categories) */}
                    </div>
                    {/* Carousel control links */}
                    {/* Allows navigation between carousel items */}
                    <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </Link>
                    <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </Link>
                </div>
            </div>

            {/* Display food items based on selected category and search query */}
            {foodcat !== [] ?
                foodcat.map((data) => {
                    return (
                        <>
                            {/* Display each food category */}
                            <div className='mb-3 row'>
                                <div key={data._id} className='m-3 fs-4 row'>
                                    {data.CategoryName}
                                </div>
                                <hr></hr>
                                {
                                    fooditem !== [] ?
                                        // Filter food items based on category and search query
                                        fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (search === "" || item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                                            .map((itemwise) => {
                                                // Display individual food item cards
                                                return (
                                                    <div key={itemwise._id} className='col-12 col-md-6 col-lg-3' >
                                                        <div>
                                                            {/* Rendering the Card component with specific food item data */}
                                                            <Card
                                                                allfooditem={itemwise}
                                                                options={itemwise.options}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        : ""
                                }
                            </div>
                        </>
                    )
                })
                : ""
            }

            {/* Display a single Card component (seems like an error as it's not being used with any data) */}
            <Card />

            <Footer />
        </div>
    )
}
