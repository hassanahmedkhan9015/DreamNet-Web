import React from 'react'
import '../Content-Main/FourthMain.css'
import Rightimage from '../../assets/Images/Right-column.png'
import Optical from '../../assets/Images/FiberOptic.png'
// import Optical from '../../assets/Images/Fiber.png'




function FourthMain() {
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row text-center">

                    <div className="col">
                        {/* Text-Part  */}
                        <div className='text-start mx-5'>
                            <p className='mx-5'>OUR SERVICES</p>
                            <h1 className='mx-5'>What We Do</h1>
                        </div>

                        {/* Column-1  */}
                       
                        <div className="container d-flex my-4 row ">
                            <div className="col-xl-6 col-md-6 col-sm-6 ">
                            <img src={Optical} className='w-50' alt="" srcset="" />
                            </div>
                            <div className='d-block col-xl-6 col-md-6 col-sm-6'>
                            <h3 className='text-start'>FIBER OPTIC SOLUTION</h3> <br />
                            <p className='text-start'>Fiber connectivity deals with amazingly faster data transmission over remarkably longer distance without data loss. Ebone guarantees 100% fiber optic up time and first class installation by our team of experts.</p>
                            </div>
                        
                        </div>


                    </div>









                    <div className="col">
                        <img src={Rightimage} className='w-75' alt="" srcset="" />
                    </div>


                </div>
            </div>





        </>
    )
}

export default FourthMain
