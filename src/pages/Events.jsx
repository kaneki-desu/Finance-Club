import React from 'react'

// import "../css/normalize.css"
// import "../css/main.css"
import "../css/events.css"
import { defer, Link } from 'react-router-dom'
import { useRef } from 'react';
import _4Dots from "../images/4-dots.jpg"

function Events() {

   

        

    

    return (
        <div>
            <section className="events-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Upcoming Events</h1>
                            <p>Discover the latest events, workshops, <br/>and conferences happening around the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fests-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Festivals</h1>
                            <p>Explore various festivals and celebrations.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="fest-item">
                                <h2>Festival 1</h2>
                                <p>Description for Festival 1.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fest-item">
                                <h2>Festival 2</h2>
                                <p>Description for Festival 2.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="fest-item">
                                <h2>Festival 3</h2>
                                <p>Description for Festival 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="conferences-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Conferences</h1>
                            <p>Explore various conferences and networking opportunities.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="conference-item">
                                <h2>Conference 1</h2>
                                <p>Description for Conference 1.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="conference-item">
                                <h2>Conference 2</h2>
                                <p>Description for Conference 2.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="conference-item">
                                <h2>Conference 3</h2>
                                <p>Description for Conference 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/*  Competitions */}

            <section className="competitions-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Competitions</h1>
                            <p>Explore various competitions and challenges.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="competition-item">
                                <h2>Competition 1</h2>
                                <p>Description for Competition 1.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="competition-item">
                                <h2>Competition 2</h2>
                                <p>Description for Competition 2.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="competition-item">
                                <h2>Competition 3</h2>
                                <p>Description for Competition 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/*  crypto */}

            <section className="crypto-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Crypto Events</h1>
                            <p>Explore various cryptocurrency-related events and opportunities.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="crypto-item">
                                <h2>Crypto Event 1</h2>
                                <p>Description for Crypto Event 1.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="crypto-item">
                                <h2>Crypto Event 2</h2>
                                <p>Description for Crypto Event 2.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="crypto-item">
                                <h2>Crypto Event 3</h2>
                                <p>Description for Crypto Event 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Internships */}

            <section className="intern-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Internship Events</h1>
                            <p>Explore various internship opportunities and programs.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="intern-item">
                                <h2>Internship 1</h2>
                                <p>Description for Internship 1.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intern-item">
                                <h2>Internship 2</h2>
                                <p>Description for Internship 2.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="intern-item">
                                <h2>Internship 3</h2>
                                <p>Description for Internship 3.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* BootCamps */}
            <section className="bootcamp-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Event Bootcamp</h1> {/* Common Topic Title */}
                            <p>Event Bootcamp Description</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bootcamp-item">
                                <h2>Bootcamp 1</h2>
                                <p>Bootcamp 1 Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bootcamp-item">
                                <h2>Bootcamp 2</h2>
                                <p>Bootcamp 2 Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bootcamp-item">
                                <h2>Bootcamp 3</h2>
                                <p>Bootcamp 3 Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            {/*Sessions*/}
            <section className="sessions-intro">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1>Sessions</h1> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="session-item">
                                <h2>Session 1</h2>
                                <p>Session 1 Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="session-item">
                                <h2>Session 2</h2>
                                <p>Session 2 Description</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="session-item">
                                <h2>Session 3</h2>
                                <p>Session 3 Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            
            

            



            
        
            
        </div>
    )
}

export default Events