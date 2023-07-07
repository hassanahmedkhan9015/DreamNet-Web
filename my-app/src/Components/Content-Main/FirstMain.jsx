import React from 'react'
import '../Content-Main/FirstMain.css'
import Logo from '../../assets/Images/logo.png';
import Third from '../../assets/Images/thirdcol.png';

function FirstMain() {
  return (
    <>
      <div className="container-fluid ">
        <div className='row '>
          
          {/* 1st Column-Left  */}
          <div className="col-xl-6 col-lg-6 col-md-6 my-auto">
            <div className='d-flex  logo'>
              <img src={Logo} className='w-50' alt="" srcset="" />
              <div className='my-auto'>
                <h1 className='heading d-flex'>
                  DreamNet
                </h1>
                <p>
                  Powered By EboneNet
                </p>
              </div>
            </div>
          </div>

         {/* 2nd Column-Right  */}
          <div className="col-xl-6 col-lg-6 col-md-6 thirdcolumn ">
            <div className=" ani-right">
              <img  src={Third} className='w-75 mx-auto my-auto d-block '  alt="" />
            </div>
          </div>



        </div>
      </div>

    </>
  )
}

export default FirstMain
