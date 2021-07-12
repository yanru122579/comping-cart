import React from 'react'
import Swal from 'sweetalert2'
import { countries, townships, postcodes } from '../../json/townships'

// import { IoIosArrowDown } from 'react-icons/io'
import { CgMoreO } from 'react-icons/cg'

const CartOrderItem = (props) => {
  const { item, select, setSelect, dataItem, orderEdit } = props
  //購買狀態的顏色改變
  const status = () => {
    if (item.cartStatus == '已完成') {
      return (
        <div
          className="col col-2"
          data-label="Amount"
          style={{ color: '#0E7F41' }}
        >
          {item.cartStatus}
        </div>
      )
    } else if (item.cartStatus == '已取消') {
      return (
        <div
          className="col col-2"
          data-label="Amount"
          style={{ color: '#E21441' }}
        >
          {item.cartStatus}
        </div>
      )
    } else {
      return (
        <div
          className="col col-2"
          data-label="Amount"
          style={{ color: '#0071BC' }}
        >
          {item.cartStatus}
        </div>
      )
    }
  }
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

  const product = (v) => {
    if (item.orderclass == 1) {
      return (
        <>
          <td>{v.cartName}</td>
          <td>{v.cartBuyP}</td>
          <td>{v.cartBuyQty}</td>
        </>
      )
    } else if (item.orderclass == 2) {
      return (
        <>
          <td>{v.cartName}</td>
          <td>{v.cartBuyP}</td>
          <td>{v.cartBuyQty}</td>
        </>
      )
    } else {
      return (
        <>
          <td>{v.cpAreaId}</td>
          <td>{v.cpArea}</td>
          <td>{v.cpQty}</td>
        </>
      )
    }
  }
  console.log(item.orderclass)

  return (
    <>
      {/* <table className="cartOrderItemHeard">
        <tbody>
          <tr>
            <td>{item.cartOrderId}</td>
            <td>{item.created_at}</td>
            <td>{item.cartStatus}</td>
            <td>{item.cartPayName}</td>
            <td>{item.cartTotal}</td>
            <td>{handleOrderClass(item.orderclass)}</td>
            
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
                          {product(v)}
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
      )} */}

      <div className="containerPretty ">
        <div className="cartOrderItemHeard">
          <ul className="responsive-table">
            <li className="table-row">
              <div className="col col-2" data-label="Job Id">
                {item.cartOrderId}
              </div>
              <div className="col col-2" data-label="Customer Name">
                {item.created_at}
              </div>
              {status()}
              {/* <div
                className="col col-2"
                data-label="Amount"
                style={{ color: 'red' }}
              >
                {item.cartStatus}
              </div> */}
              <div className="col col-2" data-label="Payment Status">
                {item.cartPayName}
              </div>
              <div className="col col-2" data-label="Payment Status">
                {item.cartTotal}
              </div>
              <div className="col col-1" data-label="Payment Status">
                {handleOrderClass(item.orderclass)}
              </div>
              <div className="col col-1" data-label="Payment Status">
                <button
                  onClick={() => {
                    select === item.cartOrderId
                      ? setSelect(null)
                      : setSelect(item.cartOrderId)
                  }}
                >
                  <CgMoreO />
                </button>
              </div>
            </li>
          </ul>
          <ul className="table-row">
            {item.cartOrderId === select && (
              <div id="itemDetail" className="itemDetail ">
                <div className="cartMain cartOrderItemBody ">
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
                                {product(v)}
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
                    {item.cartStatus == '待出貨' && (
                      <button
                        onClick={(e) => {
                          // console.log(item.cartOrderId)
                          // setEditOrder(item.cartOrderId)
                          Swal.fire({
                            title: '你確定要取消嗎?',
                            text: '您確定要取消嗎？!',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: '確定取消!',
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                '已取消',
                                '期待下次再購買',
                                'success',
                                orderEdit(item.cartOrderId)
                              )
                            }
                          })
                        }}
                      >
                        取消訂單
                      </button>
                    )}
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
                      <li>
                        {countries[item.countries] +
                          townships[item.countries][item.townships] +
                          item.nAA}
                      </li>
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
          </ul>
        </div>
      </div>
    </>
  )
}

export default CartOrderItem
