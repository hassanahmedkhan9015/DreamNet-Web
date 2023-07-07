import React from 'react'
import '../Content-Main/FifthMain.css'
import RoundImage from '../../assets/Images/Round3.png'




function FifthMain() {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">


                    <div className="col mx-4 main-right my-auto">
                        <div className='text-start mx-5'>
                            <p className='tag-line'>ABOUT US</p>
                            <h1 className='heading2'>Who We Are</h1>
                            <p className='text-secondary'>We started with cable television services more than a decade ago. Now we are bringing you much more. To make access to all the latest communication and entertainment technology that is affordable, useful and entertaining counts in our style of working. We're Dreamnet TV & Internet service provider. When we began as a small company in 1996, our only product was an analog video channel. Today we're a company, bringing you the cutting edge in digital entertainment and Internet communications for the home. Dreamnet is a broadband communications company providing a full range of advanced broadband entertainment services to your way.</p>
                            </div>

                    </div>

                    <div className=" col-lg-5 col-md-18  ">
                        <img src={RoundImage} alt="" srcset="" className='  round-img' />
                    </div>




                </div>
            </div>









        </>
    )
}

export default FifthMain
