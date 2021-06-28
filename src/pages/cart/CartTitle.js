import React from 'react'
import { AiFillCaretRight } from 'react-icons/ai'

const CartTitle = () => {
  return (
    <>
      <div className="cartTitle ">
        <div className="row ">
          <div className="cartTitleH1-box">
            <h4>購物明細</h4>
          </div>
          <div>
            <h2>
              <AiFillCaretRight color="#808080" />
              <AiFillCaretRight color="#808080" />
              <AiFillCaretRight color="#808080" />
            </h2>
          </div>
          <h4 className="cartTitleH1">訂單資訊</h4>
          <h2>
            <AiFillCaretRight color="#808080" />
            <AiFillCaretRight color="#808080" />
            <AiFillCaretRight color="#808080" />
          </h2>
          <h4 className="cartTitleH1">訂單明細</h4>
        </div>
      </div>
    </>
  )
}

export default CartTitle
