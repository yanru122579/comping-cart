import React from 'react'
import CartTitle from './CartTitle'
import CartItem from './CartItem'

const CartDetail = () => {
  return (
    <>
      <div className="container">
        <CartTitle />
      </div>
      <div className="CartDetailText">
        <h4>
          已完成訂單
          <br />
          感謝您的購買
        </h4>
      </div>
      <h5>購物明細:</h5>
      <div className="cartMain">
        <CartItem />
      </div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>總共消費金額:</p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共 3 項</p> <p>NT $ 1130</p>
        </div>
      </div>
      <h5>訂單明細:</h5>
      <div className="containet CartDetail">
        <div className="CartDetail item1">
          <ul>
            <li>訂單編號</li>
            <li>訂單日期</li>
            <li>訂單狀態</li>
            <li>運送方式</li>
            <li>訂購人姓名</li>
            <li>訂購人手機</li>
            <li>訂購人信箱</li>
          </ul>
        </div>
        <div className="CartDetail item2">
          <ul>
            <li>20201000</li>
            <li>2021/05/29</li>
            <li>準備中</li>
            <li>宅配</li>
            <li>皮卡丘</li>
            <li>0978978978</li>
            <li>a123@gmail.com</li>
          </ul>
        </div>
        <div className="CartDetail item3">
          <ul>
            <li>收件人姓名</li>
            <li>收件人手機</li>
            <li>收件人信箱</li>
            <li>收件人地址</li>
            <li>付款方式</li>
            <li>付款狀態</li>
          </ul>
        </div>
        <div className="CartDetail item4">
          <ul>
            <li>皮丘</li>
            <li>0911111111</li>
            <li>def@gmail.com</li>
            <li>台北市大安區大安路一段１號</li>
            <li>信用卡支付</li>
            <li>已付清</li>
          </ul>
        </div>
      </div>
      <div className="cartPiceBtn">
        <button>回到商品頁面</button>
        <button>回到訂單頁面</button>
      </div>
    </>
  )
}

export default CartDetail
