import React from 'react'
import '../Content-Main/FourthMain.css'
import Rightimage from '../../assets/Images/Right-column.png'
import Optical from '../../assets/Images/Fiber.png'
import Wireless from '../../assets/Images/Wireless.png'
import Data from '../../assets/Images/Data.png'





function FourthMain() {
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row text-center ">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 my-5">

                        {/* Text-Part  */}
                        <div className='text-start mx-5'>
                            <p className='mx-5 tag-line'>OUR SERVICES</p>
                            <h1 className='mx-5 heading2'>What We Do</h1>
                        </div>

                        {/* Column-1  */}

                        <div className="conatiner my-5">
                            <div className="d-flex">
                                <img src={Optical} alt="" className=' image-fiber' />
                                <div className="d-block text-start">
                                    <h3 >FIBER OPTIC SOLUTION</h3>
                                    <p className='text-secondary'>Fiber connectivity deals with amazingly faster data transmission over remarkably longer distance without data loss. Ebone guarantees 100% fiber optic up time and first class installation by our team of experts</p>
                                </div>
                            </div>
                        </div>

                        {/* Column-2  */}
                        <div className="container my-5">
                            <div className="d-flex">
                                <img src={Wireless} alt="" className=' image-fiber' />
                                <div className="d-block text-start">
                                    <h3 >WIRELESS LINK SOLUTION</h3>
                                    <p className='text-secondary'>Rather than using leased line, cable modem or standard ADSL connection, signals are transmitted to your business through a small antenna on your roof. From the rooftop, data is sent directly to the Ebone Networks Pvt. Ltd. Backbone. After all, "The shortest distance between two points is in a straight line" & we make the most efficient use of this.</p>
                                </div>
                            </div>
                        </div>


                        {/* Column-3  */}
                        <div className="conatiner my-5">
                            <div className="d-flex">
                                <img src={Data} alt="" className=' image-fiber' />
                                <div className="d-block text-start">
                                    <h3 >DATA CONNECTIVITY SOLUTION</h3>
                                    <p className='text-secondary'>Unlimited 24/7 Internet Access. A scaleable, high speed Internet connection, with speeds up to 50Mbps. A more cost effective, high performance alternative to dial-up, ISDN, ADSL, T1,T3 and Fiber Optic's. An 'Always-On' connection - eliminates time wasted dialing in, waiting for emails and web pages to load. Unlimited number of users. Fast, professional installation getting started with Ebone Wireless service is quick, easy and trouble free. A typical installation takes between one or two days.</p>
                                </div>
                            </div>
                        </div>

                    </div>









                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6   my-5">
                        <img src={Rightimage} className='w-75  m-auto' alt="" srcset="" />
                    </div>


                </div>
            </div>





        </>
    )
}

export default FourthMain
