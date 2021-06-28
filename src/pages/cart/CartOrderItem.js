import React from 'react'

import { IoIosArrowDown } from 'react-icons/io'

const CartOrderItem = (props) => {
  const { item, select, setSelect, dataItem } = props

  const handleOrderClass = (value) => {
    let str = ''
    switch (value) {
      case 1:
        str = '商品租借'
        break
      case 2:
        str = '活動預約'
        break
      case 3:
        str = '場地預約'
        break
      default:
        break
    }
    return str
  }

  return (
    <>
      <table className="cartOrderItemHeard">
        <tbody>
          <tr>
            <td>{item.cartOrderId}</td>
            <td>{item.created_at}</td>
            <td>{item.cartStatus}</td>
            <td>{item.cartPayName}</td>
            <td>{item.cartTotal}</td>
            <td>{handleOrderClass(item.orderclass)}</td>
            {/* <td>{item.orderclass}</td> */}
            <td>
              <button
                onClick={() => {
                  select === item.cartOrderId
                    ? setSelect(null)
                    : setSelect(item.cartOrderId)
                }}
              >
                購買清單
                <IoIosArrowDown />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {item.cartOrderId === select && (
        <div id="itemDetail" className="itemDetail">
          <div className="cartMain cartOrderItemBody">
            <div className="col-9">
              <div className=" cartTable">
                <table className="table ">
                  <thead>
                    <tr>
                      <th></th>
                      <th></th>
                      <th>商品名稱</th>
                      <th>單價</th>
                      <th>數量</th>
                      <th></th>
                    </tr>
                  </thead>
                  {dataItem.map((v, i) => {
                    return (
                      <tbody className="">
                        <tr>
                          <th>{i + 1}</th>
                          <td>
                            <img
                              src="http://fakeimg.pl/440x320/282828/EAE0D0/"
                              alt=""
                            />
                          </td>
                          <td>{v.cartName}</td>
                          <td>{v.cartBuyP}</td>
                          <td>{v.cartBuyQty}</td>
                        </tr>
                      </tbody>
                    )
                  })}
                </table>
              </div>
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
                <li>{item.nNN}</li>
                <li>{item.nAA}</li>
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
                <li>{item.nCC}</li>
                <li>{item.cartLogisticsName}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CartOrderItem
