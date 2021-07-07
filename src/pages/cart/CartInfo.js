import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/cart.scss'
import { countries, townships, postcodes } from '../../json/townships'
// import { ImCreditCard } from 'react-icons/im'
//reactBootstrap用
import PaymentForm from './PaymentForm'
// import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

// import { withFormik, Form, Field, ErrorMessage } from 'formik'
// import * as yup from 'yup'

//錯誤訊息的style
const errMsg = {
  color: 'red',
  fontSize: '12px',
  paddingLeft: '5',
}

// import CartTitle from './CartTitle'
// import CartItem from './CartItem'
// import Item from 'antd/lib/list/Item'

function CartInfo(props) {
  // console.log(countries, townships, postcodes)
  //reactBootstrap用
  const [modalShow, setModalShow] = React.useState(false)
  const history = useHistory()
  const { setTotal, getSession, sessionClear, pTotal, sum, handeleClass, mid } =
    props
  //記錄陣列的索引值,預設值是-1,相當於'請選擇xxx'
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [pay, setPay] = useState(false)

  // console.log(countries[country])
  // console.log(townships[country][township])
  // console.log(township)

  const [inputs, setInputs] = useState({
    nNN: '',
    nAA: '大安路一段',
    nCC: '0919999999',
    nEE: 'eaag@gmail.com',
    cartPayId: '1',
    cartLogisticsId: '1',
    mid: mid,
    cartTotal: sum(getSession) - 1130 + pTotal(getSession) * 100,
    cartDescription: '1',
    cartStatus: '待出貨',
    orderclass: '1',
  })

  //寫入訂單
  async function addCartToSever(e) {
    e.preventDefault()

    //對地址做表單驗證
    if (country >= 0 && township >= 0) {
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
        nAA: countries[country] + townships[country][township] + inputs.nAA,
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
      //送出資料後清除session
      // 送出資料後跳轉頁面
      setTimeout(() => {
        sessionClear()
        // setSubmitting(false)

        history.push('/cartdetail', { cartId: data })
        Swal.fire('結帳成功!', '感謝您的購買!', 'success')
      }, 500)
    }
  }
  //處理每個欄位的變動
  const handelChange = (e) => {
    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    }
    setInputs(newInputs)
  }
  //每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    nNN: '',
    nAA: '',
    nCC: '',
    nEE: '',
    country: '',
  })
  //form有更動會觸發這個函式
  const handleChangeInput = (e) => {
    console.log('更動欄位:', e.target.name)
    //該欄位錯誤訊息清空
    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: '',
    }
    setFieldErrors(updatedFieldErrors)
  }
  //有錯誤的訊息會出觸發在這裡
  const handleInvalid = (e) => {
    e.preventDefault()

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }
    setFieldErrors(updatedFieldErrors)
  }

  const handleInputChange = (e) => {
    if (e == 2) {
      setModalShow(true)
    } else {
      setModalShow(false)
    }
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
          className="cartInfoMenber"
          onSubmit={addCartToSever}
          onChange={handleChangeInput}
          onInvalid={handleInvalid}
        >
          <br />
          <label htmlFor="">訂購人姓名:</label>
          {/* <br /> */}
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
          <label htmlFor="">
            收件人姓名:
            {fieldErrors.nNN && (
              <small className="text-danger ">{fieldErrors.nNN}</small>
            )}
          </label>
          <br />
          <input
            type="text"
            name="nNN"
            value={inputs.nNN}
            onChange={handelChange}
            placeholder="請輸入收件人姓名"
            required
          />
          <br />
          <label>
            收件人手機:
            {fieldErrors.nCC && (
              <small className="text-danger "> {fieldErrors.nCC}</small>
            )}
          </label>
          <br />
          <input
            type="text"
            name="nCC"
            value={inputs.nCC}
            onChange={handelChange}
            placeholder="請輸入手機"
            pattern="09\d{2}-?\d{3}-?\d{3}"
            maxlength="10"
            required
          />
          <br />
          <label htmlFor="">
            收件人信箱:
            {fieldErrors.nEE && (
              <small className="text-danger ">{fieldErrors.nEE}</small>
            )}
          </label>
          <br />
          <input
            type="email"
            name="nEE"
            value={inputs.nEE}
            onChange={handelChange}
            placeholder="請輸入信箱"
            required
          />
          <br />
          <label htmlFor="">
            收件人地址:
            {fieldErrors.nAA && (
              <small className="text-danger form-text">{fieldErrors.nAA}</small>
            )}
          </label>
          <br />
          <div>
            <select
              name="country"
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
            {fieldErrors.country && (
              <small className="text-danger">請選擇</small>
            )}
            <select
              name="township"
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
            <select
              disabled
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
          <br />
          <br />
          {/* <h5>3.付款方式</h5> */}
          <label htmlFor="">選擇付款方式:</label>
          <br />
          <select
            name=""
            id=""
            onChange={(e) => {
              handleInputChange(e.target.value)
            }}
          >
            <option value="1">貨到付款</option>
            <option value="2">信用卡支付</option>
          </select>
          <br />
          <>
            <PaymentForm
              show={modalShow}
              onHide={() => setModalShow(false)}
              setModalShow={setModalShow}
              setPay={setPay}
            />
            {pay && (
              <div className="cartPayImg">
                <img src="./img/pay2.png" alt="" style={{ width: '300px' }} />
                {/* <ImCreditCard /> */}
                {/* <h3>信用卡已認證成功</h3> */}
              </div>
            )}
          </>
          <div className="cartPiceBtn cartInfoBtn">
            <button
              onClick={() => {
                setTotal(false)
                handeleClass(0)
              }}
            >
              上一頁
            </button>

            <button
              type="submit"
              onSubmit={() => addCartToSever()}

              // disabled={isSubmitting}
            >
              確認結帳
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default CartInfo
