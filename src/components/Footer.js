import React from 'react';

// The 'Footer' component displays a footer section at the bottom of the page.
export default function Footer() {
    return (
        <div className='bg-dark bg-gradient-primary'>
            <div className="container">
                <footer className="py-3 my-4">
                    {/* Navigation Links */}
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Home</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Features</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Pricing</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-white">FAQs</a></li>
                        <li className="nav-item"><a href="/" className="nav-link px-2 text-white">About</a></li>
                    </ul>
                    {/* Company Information */}
                    <p className="text-center text-white">© 2023 Company, Inc</p>
                </footer>
            </div>
        </div>
    );
}
