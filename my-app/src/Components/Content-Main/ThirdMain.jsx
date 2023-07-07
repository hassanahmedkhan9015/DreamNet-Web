import React from 'react'

import '../Content-Main/ThirdMain.css'
import Comment from '../../assets/Images/Comment.png'
import Star from '../../assets/Images/Star.png'
import Client from '../../assets/Images/Client.png'
import Desktop from '../../assets/Images/Desktop.png'

function ThirdMain() {
    return (
        <>
            <div className="container-fluid bg-back" >
                <div className="row text-center">

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <img src={Comment} className='w-50' alt="" />
                        <h1 className='headings'>210000+</h1>
                        <p className='subhead'>SUPORT HOURS</p>

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <img src={Star} className='w-50' alt="" />
                        <h1 className='headings'>25+</h1>
                        <p className='subhead'>YEARS IN BUSINESS</p>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <img src={Client} className='w-50' alt="" srcset="" />
                        <h1 className='headings'>800000+</h1>
                        <p className='subhead'>HAPPY CLIENTS</p>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <img src={Desktop} className='w-50' alt="" srcset="" />
                        <h1 className='headings'>180000+</h1>
                        <p className='subhead'>WORKING HOURS</p>
                    </div>
                    <div>
                        <h1></h1>
                    </div>



                </div>
            </div>


        </>
    )
}

export default ThirdMain
