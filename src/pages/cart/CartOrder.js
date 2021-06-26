import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
import CartItem from './CartItem'

const CartOrder = () => {
  return (
    <>
      <div className="container">
        <div className="cartOrderTitle">
          <h5>
            <FaSearch />
            查詢訂單
          </h5>
          <select name="" id="">
            <option value="">全部</option>
            <option value="">商品租借</option>
            <option value="">場地租借</option>
            <option value="">活動預約</option>
          </select>
        </div>
        <table className="cartOrderItemHeard">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單日期</th>
              <th>訂單狀態</th>
              <th>付款方式</th>
              <th>訂單金額</th>
              <th>服務項目</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20201000</td>
              <td>2021/05/29</td>
              <td>準備中</td>
              <td>信用卡支付</td>
              <td>NT$ 5,000</td>
              <td>商品租借</td>
              <td>
                <button>
                  購買清單
                  <IoIosArrowDown />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cartMain cartOrderItemBody">
          <div className="col-9">
            <CartItem />
          </div>
          <div className="col-2 cartOrderItemBox">
            <p>預定日期:</p>
            <p>字串字串字串</p>
            <button>取消訂單</button>
          </div>
        </div>
        <div className="cartOrderDetail">
          <div className="item1 ">
            <ul>
              <li>收件人姓名</li>
              <li>收件人地址</li>
            </ul>
          </div>
          <div className="item2 ">
            <ul>
              <li>皮卡丘</li>
              <li>台北市大安區大安路一段18號</li>
            </ul>
          </div>
          <div className="item1 ">
            <ul>
              <li>收件人手機</li>
              <li>運送方式</li>
            </ul>
          </div>
          <div className="item2 ">
            <ul>
              <li>0911111111</li>
              <li>宅配</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartOrder
