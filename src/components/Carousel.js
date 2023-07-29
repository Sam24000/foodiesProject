import React from 'react'
import { Link } from 'react-router-dom'

// The 'Carousel' component renders a carousel with sliding images.
export default function Carousel() {
    return (
        <div>
            {/* Carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{objectFit:"contain !important"}}>
                {/* Carousel Inner */}
                <div className="carousel-inner" id='carousel'>
                    {/* Search Bar */}
                    <div className='carousel-caption' style={{zIndex:"10"}}>
                        <div className="form-inline d-flex justify-content-center">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline bg-dark my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                    {/* First Slide */}
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?burger" alt="First slide" />
                    </div>
                    {/* Second Slide */}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?pizza" alt="Second slide" />
                    </div>
                    {/* Third Slide */}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?barbeque" alt="Third slide" />
                    </div>
                    {/* Fourth Slide */}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?sweets" alt="Fourth slide" />
                    </div>
                </div>
                {/* Carousel Control: Previous */}
                <Link className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                {/* Carousel Control: Next */}
                <Link className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
        </div>
    )
}
// {/* <img classNameName="d-block w-100" src="https://source.unsplash.com/random/900×700/?momos" alt="Second slide" /> */} 