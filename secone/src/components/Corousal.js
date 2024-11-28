import React from 'react'

export default function Corousal() {
    return (
        <div>
            <div>
                <div
                    id="carouselExampleInterval"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg" className="d-block w-100" alt="First Slide" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://wallpapercave.com/wp/wp2777295.jpg" className="d-block w-100" alt="Second Slide" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_1280.jpg" className="d-block w-100" alt="Third Slide" />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
