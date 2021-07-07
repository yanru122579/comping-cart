import React from 'react'
//load carousel &css
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const index = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  return (
    <>
      <div className="in-carousel" autoPlay>
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <div className="in-cimg">
            <img alt="" src="http://localhost:3000/images/index/01.jpg" />
          </div>
          <div className="in-cimg">
            <img alt="" src="http://localhost:3000/images/index/02.jpg" />
          </div>
        </Carousel>
        <div className="in-middle">
          <p className="in.toptitle">
            體驗露營的樂趣
            <br />
            自由選擇，輕鬆出發
          </p>
          <div className="in-form">
            {/* datepicker */}

            <label for="starttime" class="placeholder">
              出發時間
            </label>
            <input
              id="starttime"
              class="input in-time"
              type="text"
              placeholder=" "
            />
            <label for="backtime" class="placeholder">
              出發時間
            </label>
            <input
              id="backtime"
              class="input in-time"
              type="text"
              placeholder=" "
            />
            <label for="keyword" class="placeholder">
              輸入您想找的
            </label>
            <input
              id="keyword"
              class="input in-key"
              type="text"
              placeholder="天幕帳,夏天..."
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
