import React from 'react'
import '../../styles/cart.scss'

import CartTitle from './CartTitle'
import CartItemNav from './CartItemNav'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <>
      <div className="container ">
        <CartTitle />
      </div>
      <CartItemNav />
      <div className="cartMain">
        {/* <div className="cartItemTitle">
          <h4>商品名稱</h4>
          <h4>單價</h4>
          <h4>數量</h4>
        </div> */}
        <CartItem />
      </div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>小計:</p>
          <p>
            選擇折價券: <input type="text" value="週年慶折50" />
          </p>
          <p>
            選擇運送方式: <input type="text" value="宅配 100/件" />
          </p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共2項</p>
          <p>NT $ 1130</p>
          <p>-NT $ 1130</p>
          <p>NT $ 300</p>
        </div>
      </div>
      <div className="cartPiceDetil">
        <h4>總計金額:&emsp;</h4>
        <h3>NT $ 11000</h3>
      </div>
      <div className="cartPiceBtn">
        <button>繼續選購</button>
        <button>下一步</button>
      </div>
      <div className="cartCards">
        <div className="cartCard">
          <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
          <div className="cartCardBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dolorum fugiat a doloremque ducimus? Adipisci doloremque tempore,
              ad unde facere, porro repudiandae alias harum, rem expedita velit
              aperiam iusto esse?
            </p>
          </div>
        </div>
        <div className="cartCard">
          <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
          <div className="cartCardBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dolorum fugiat a doloremque ducimus? Adipisci doloremque tempore,
              ad unde facere, porro repudiandae alias harum, rem expedita velit
              aperiam iusto esse?
            </p>
          </div>
        </div>
        <div className="cartCard">
          <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
          <div className="cartCardBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dolorum fugiat a doloremque ducimus? Adipisci doloremque tempore,
              ad unde facere, porro repudiandae alias harum, rem expedita velit
              aperiam iusto esse?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
