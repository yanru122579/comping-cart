import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/cart.scss'
import { countries, townships, postcodes } from '../../json/townships'

// import CartTitle from './CartTitle'
// import CartItem from './CartItem'
// import Item from 'antd/lib/list/Item'

function CartInfo(props) {
  console.log(countries, townships, postcodes)
  const history = useHistory()
  const { setTotal, getSession, sessionClear, pTotal, sum } = props
  //記錄陣列的索引值,預設值是-1,相當於'請選擇xxx'
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  const [inputs, setInputs] = useState({
    nNN: '玄彬',
    nAA: '台北市大安區大安路一段',
    nCC: '0919999999',
    nEE: 'eaag@gmail.com',
    cartPayId: '1',
    cartLogisticsId: '1',
    mid: '1',
    cartTotal: '1',
    cartDescription: '1',
    cartStatus: '待出貨',
    orderclass: '1',
  })

  //寫入訂單
  async function addCartToSever(e) {
    e.preventDefault()
    const orderid = +new Date()
    let data = {
      orderItem: [],
    }
    for (let item of getSession) {
      const tempObj = {
        product_id: item.product_id,
        cartName: item.product_name,
        cartBuyQty: item.quantity,
        cartBuyP: item.product_price,
        cartOrderId: orderid,
      }
      data.orderItem.push(tempObj)
    }
    data.orderInfo = {
      nNN: inputs.nNN,
      nAA: inputs.nAA,
      nCC: inputs.nCC,
      nEE: inputs.nEE,
      cartPayId: inputs.cartPayId,
      cartLogisticsId: inputs.cartLogisticsId,
      mid: inputs.mid,
      cartTotal: inputs.cartTotal,
      cartDescription: inputs.cartDescription,
      cartStatus: inputs.cartStatus,
      cartOrderId: orderid,
      orderclass: inputs.orderclass,
      created_at: new Date(),
    }
    console.log('一開始收到的資料', data)
    //寫入的網址
    const url = 'http://localhost:4000/cartorder/add/'

    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    console.log('JSON字串', JSON.stringify(data))
    const response = await fetch(request)
    const dataRes = await response.json()

    console.log('伺服器回傳的json資料', dataRes)

    // 送出資料後跳轉頁面
    history.push('/cartdetail', { cartId: data })
  }
  //處理每個欄位的變動
  const handelChange = (e) => {
    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    }
    setInputs(newInputs)
  }
  return (
    <>
      {/* <div className="container">
        <CartTitle />
      </div> */}
      {/* <h5>1.購物明細</h5> */}
      <div className="cartMain">{/* <CartItem /> */}</div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>總計金額:</p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共 {pTotal(getSession)} 項</p>{' '}
          <p>NT $ {sum(getSession) - 1130 + pTotal(getSession) * 100}</p>
        </div>
      </div>
      <h5>2.收貨人資料</h5>
      <div className="cartMain">
        <form
          action=""
          className="cartInfoMenber"
          onSubmit={addCartToSever}
          onChange={handelChange}
        >
          <label htmlFor="">訂購人姓名:</label>
          <br />
          <input type="text" disabled />
          <br />
          <label htmlFor="">訂購人手機:</label>
          <br />
          <input type="text" disabled />
          <br />
          <label htmlFor="">訂購人信箱:</label>
          <br />
          <input type="text" disabled />
          <br />
          <input type="checkbox" style={{ width: '20px' }} />
          <label htmlFor="">同訂購人</label>
          <br />
          <label htmlFor="">收件人姓名:</label>
          <br />
          <input
            type="text"
            name="nNN"
            value={inputs.nNN}
            onChange={handelChange}
            placeholder="請輸入收件人姓名"
          />
          <br />
          <label htmlFor="">收件人手機:</label>
          <br />
          <input
            type="text"
            name="nCC"
            value={inputs.nCC}
            onChange={handelChange}
            placeholder="請輸入手機"
          />
          <br />
          {/* 商品加入區測試用 */}
          <input
            type="text"
            hidden
            name={inputs.cartName}
            onChange={handelChange}
          />
          <label htmlFor="">收件人信箱:</label>
          <br />
          <input
            type="email"
            name="nEE"
            value={inputs.nEE}
            onChange={handelChange}
            placeholder="請輸入信箱"
          />
          <br />
          <label htmlFor="">收件人地址:</label>
          <br />
          <div>
            <select
              value={country}
              onChange={(e) => {
                // 將字串轉成數字
                setCountry(+e.target.value)
                // 重置township的值
                setTownship(-1)
              }}
            >
              <option value="-1">選擇縣市</option>
              {countries.map((value, index) => (
                <option key={index} value={index}>
                  {value}
                </option>
              ))}
            </select>
            <select
              value={township}
              onChange={(e) => {
                // 將字串轉成數字
                setTownship(+e.target.value)
              }}
            >
              <option value="-1">選擇區域</option>
              {country > -1 &&
                townships[country].map((value, index) => (
                  <option key={index} value={index}>
                    {value}
                  </option>
                ))}
            </select>
            {/* 如果country與township的索引值均大於-1時(也就是都有選的情況下)，呈現postcode */}
            {/* `條件 && 呈現` 是 `if(條件){呈現}` 的簡寫法，只在React JSX中可以使用 */}

            {/* ------------ */}
            <select
              name=""
              id=""
              value={country > -1 && township > -1 && postcodes[township]}
            >
              <option>
                郵遞區號:
                {country > -1 && township > -1 && postcodes[country][township]}
              </option>
            </select>
          </div>
          <br />
          <input
            type="text"
            name="nAA"
            value={inputs.nAA}
            onChange={handelChange}
            placeholder="請輸入地址"
          />
          <br />
          <label htmlFor="">發票資訊</label>
          <br />
          <select name="" id="">
            <option value="">捐贈發票</option>
          </select>
        </form>
      </div>
      <br />
      <h5>3.付款方式</h5>

      <div className="cartMain">
        <form
          action=""
          className="cartInfoMenber"
          onSubmit={addCartToSever}
          onChange={handelChange}
        >
          <label htmlFor="">選擇付款方式:</label>
          <select name="" id="">
            <option value="">信用卡支付</option>
            <option value="">貨到付款</option>
          </select>
          <div>
            <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
          </div>
          <label htmlFor="">卡號:</label>
          <input type="text" placeholder="卡號" />
          <br />
          <label htmlFor="">持卡人:</label>
          <input type="text" placeholder="持卡人姓名" />
          <br />
          <label htmlFor="">有效日期:</label>
          <br />
          <input type="text" style={{ width: '180px' }} placeholder="MM/YY" />

          <br />
          <label htmlFor="">驗證碼:</label>
          <br />
          <input type="text" style={{ width: '180px' }} placeholder="XXX" />
          <br />
        </form>
      </div>
      <div className="cartPiceBtn">
        <button
          onClick={() => {
            setTotal(false)
          }}
        >
          上一頁
        </button>
        <form action="" onSubmit={addCartToSever} onChange={handelChange}>
          <button
            type="submit"
            onSubmit={addCartToSever}
            onClick={() => {
              sessionClear()
            }}
          >
            確認結帳
          </button>
        </form>
      </div>
    </>
  )
}

export default CartInfo
