import React from 'react'
import '../Content-Main/SecMain.css'
import Package from '../../assets/Images/Packages.png'


function SecMain() {
    return (
        <>
            <div className="container ">
                <h2 className='heading text-center my-5'> Packages</h2>
                <div className="row my-5">

                    {/* 1st-Col  */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">4GB</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                    {/* 2nd-Col  */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">6GB</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>



                    {/* 3rd-Card */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">8GB</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


              {/* SECOND-COLUMN-PART  */}
              <div className="container ">
                
                <div className="row my-5">

                    {/* 1st-Col  */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">12GB</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                    {/* 2nd-Col  */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Deal-1</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>



                    {/* 3rd-Card */}
                    <div className="col">
                        <div className="card">
                            <img src={Package} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Deal-2</h4>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>





        </>
    )
}

export default SecMain
