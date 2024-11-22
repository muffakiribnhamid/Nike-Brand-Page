import React from 'react'


function Main() {
  return (
    <div className='main'>
        <div className="left">
            <h1>Your Feet Deserve The Best</h1>
            <p className='title'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="buttons">
                <button className='btnShop'>Shop Now</button>
                <button className='btnCategory'>Category</button>

            </div>

            <div className="bottom">
                <p>Also Available on</p>
                <div className="imgs">
                    <img className='amazon' src="\src\assets\amazon.png" alt="" />
                    <img className='flipkart' src="\src\assets\flipkart.png" alt="" />
                </div>
            </div>
        </div>

        <div className="right">
            <img src="src\assets\shoe_image.png" alt="" />
        </div>
    </div>
  )
}

export default Main