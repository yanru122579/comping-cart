import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import CartTitle from './CartTitle'
import moment from 'moment'


// import CartItem from './CartItem'

const CartDetail = () => {
  const history = useHistory()
  const location = useLocation()
  const cartId = location?.state?.cartId || 0
  const [order, setOrder] = useState()

  useEffect(() => {
    setOrder(location.state)
  }, [])

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
        <div className=" cartTable">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>商品名稱</th>
                <th>價格</th>
                <th>數量</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {cartId?.orderItem?.map((v, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>
                      <img src="" alt="" />
                    </td>

                    <td>{v.cartName}</td>
                    <td>{v.cartBuyP}</td>

                    <td>{v.cartBuyQty}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
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
            <li>{cartId.orderInfo.cartOrderId}</li>
            <li>{moment(cartId.orderInfo.created_at).format('YYYY-MM-DD')}</li>
            <li>{cartId.orderInfo.cartStatus}</li>
            <li>{cartId.orderInfo.cartLogisticsId}</li>
            <li>{cartId.orderInfo.nNN}</li>
            <li>{cartId.orderInfo.nCC}</li>
            <li>{cartId.orderInfo.nEE}</li>
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
            <li>{cartId.orderInfo.nNN}</li>
            <li>{cartId.orderInfo.nCC}</li>
            <li>{cartId.orderInfo.nEE}</li>
            <li>{cartId.orderInfo.nAA}</li>
            <li>{cartId.orderInfo.cartPayId}</li>
            <li>已付清</li>
          </ul>
        </div>
      </div>
      <div className="cartPiceBtn">
        <button>回到商品頁面</button>
        <button
          onClick={() => {
            history.replace('', null)
            history.push('/cartorder')
          }}
        >
          回到訂單頁面
        </button>
      </div>
    </>
  )
}

export default CartDetail
