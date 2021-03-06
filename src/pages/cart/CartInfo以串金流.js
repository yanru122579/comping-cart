import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import '../../styles/cart.scss'
import { countries, townships, postcodes } from '../../json/townships'
// import { ImCreditCard } from 'react-icons/im'
//reactBootstrap用
import PaymentForm from './PaymentForm'
// import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { date } from 'yup'
// var nodeEnv = process.env.NODE_ENV
// require('dotenv').config()
// const dotenv = require('dotenv')
// const Dotenv = require('dotenv-webpack')
// import { withFormik, Form, Field, ErrorMessage } from 'formik'
// import * as yup from 'yup'

// import CartTitle from './CartTitle'
// import CartItem from './CartItem'
// import Item from 'antd/lib/list/Item'
// const MERCHANTID = process.env.REACT_APP_MERCHANTID
//導入藍星用 sha256編碼
// 78f1a7911c20106903a2be6255fc42348ef84e8bd83988b7280788ccaa500165a140e0ddc8f5f8ba923ae4e66ea4dd49fd5cbd0b6482104e10d0ef91f739dcb6368d03fc8fcfd08a39ea58ab0bcd03f14cec6856cf78578e34c3f8bea6dec241da6ebbbc2c96b87cd940c9dac9c7b080caf285499ebb821370c7c5f5530092f438f5902311b3f4c0f0832e5edaee66cc1970f886cd4bc80a6b529a46b3fdb6c6
import aes from 'crypto-js/aes'
import sha2566 from 'sha256'
import crypto from 'crypto'
function CartInfo(props) {
  //藍新用
  const spgateway = {
    HashKey: process.env.REACT_APP_HASHKEY,
    HashIV: process.env.REACT_APP_HASHIV,
    MerchantID: process.env.REACT_APP_MERCHANTID,
  }
  let parameter = `MerchantID=MS121481874&RespondType=JSON&TimeStamp=1846666662&Version=1.5&MerchantOrderNo=1846666662&Amt=49&ItemDesc=TEST&Email=eagle20064%40icloud.com`

  function creat_mpg_aes_encrypt() {
    let encrypt = crypto.createCipheriv(
      'aes256',
      spgateway.HashKey,
      spgateway.HashIV
    )
    const enc = encrypt.update(parameter, 'utf8', 'hex')
    // parameter = `HashKey=${spgateway.HashKey}&${parameter}&$HashIV=${spgateway.HashIV}`

    // console.log('函式內呼叫', enc + encrypt.final('hex'))
    return enc + encrypt.final('hex')
  }
  // console.log('函式外呼叫', creat_mpg_aes_encrypt())

  function create_mpg_sha_encrypt() {
    // let sha = crypto.createHash('sha256')
    let plainText = `HashKey=${
      spgateway.HashKey
    }&${creat_mpg_aes_encrypt()}&HashIV=${spgateway.HashIV}`
    // let eee = sha.update(plainText).digest('hex').toUpperCase()
    const shaa = sha2566(plainText).toUpperCase()
    // console.log('key', shaa)
    return shaa
  }
  console.log(creat_mpg_aes_encrypt())
  console.log(create_mpg_sha_encrypt())

  // console.log('這段看有無東西', aesstest)
  // console.log('123', parameter)
  // console.log(spgateway.MerchantID)
  // console.log(spgateway)
  const { cartLogistics } = props
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
  const [orderer, setOrderer] = useState(false)
  //用來存放會員帶進來的使用者名稱
  const [userName, setUserName] = useState('')
  const [userCell, setUserCell] = useState('')
  const [userEmail, setUserEmail] = useState('')
  // console.log(country)
  // console.log(township)
  const [countError, setCountError] = useState({
    country: '',
    township: '',
    nNN: '',
    nAA: '',
    nCC: '',
    nEE: '',
  })
  //定義foucs
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const nNNRef = useRef()
  const nCCRef = useRef()
  const nEERef = useRef()
  const nAARef = useRef()

  // console.log(countries[country])
  // console.log(townships[country][township])
  // console.log(township)

  const [inputs, setInputs] = useState({
    nNN: '',
    nAA: '大安路一段',
    nCC: '0919999999',
    nEE: 'eaag@gmail.com',
    cartPayId: '1',
    cartLogisticsId: cartLogistics,
    mid: mid,
    cartTotal:
      sum(getSession) >= 10000
        ? (sum(getSession) -
            1130 +
            (cartLogistics == 1 ? +(pTotal(getSession) * 100) : 0)) *
          0.9
        : sum(getSession) -
          1130 +
          (cartLogistics == 1 ? +(pTotal(getSession) * 100) : 0),
    cartDescription: '1',
    cartStatus: '待出貨',
    orderclass: '1',
  })
  //如果資料傳進來的是value該怎麼處理
  // console.log(countries)
  // console.log(countries[3])
  // console.log(townships[3][2])
  //寫入訂單
  // async function addCartToSever(e) {
  //   e.preventDefault()

  //   console.log(countries[country])
  //   //對地址做表單驗證
  //   if (country >= 0 && township >= 0) {
  //     const orderid = +new Date()
  //     let data = {
  //       orderItem: [],
  //     }
  //     for (let item of getSession) {
  //       const tempObj = {
  //         product_id: item.product_id,
  //         cartName: item.product_name,
  //         cartBuyQty: item.quantity,
  //         cartBuyP: item.product_price,
  //         cartOrderId: orderid,
  //       }
  //       data.orderItem.push(tempObj)
  //     }

  //     data.orderInfo = {
  //       nNN: orderer ? userName : inputs.nNN,
  //       countries: country,
  //       townships: township,
  //       nAA: inputs.nAA,
  //       nCC: orderer ? userCell : inputs.nCC,
  //       nEE: orderer ? userEmail : inputs.nEE,
  //       cartPayId: inputs.cartPayId,
  //       cartLogisticsId: inputs.cartLogisticsId,
  //       mid: inputs.mid,
  //       cartTotal: inputs.cartTotal,
  //       cartDescription: inputs.cartDescription,
  //       cartStatus: inputs.cartStatus,
  //       cartOrderId: orderid,
  //       orderclass: inputs.orderclass,
  //       created_at: new Date(),
  //     }
  //     console.log('一開始收到的資料', data)
  //     //寫入的網址
  //     const url = 'http://localhost:4000/cartorder/add/'

  //     const request = new Request(url, {
  //       method: 'POST',
  //       body: JSON.stringify(data),
  //       headers: new Headers({
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       }),
  //     })
  //     console.log('JSON字串', JSON.stringify(data))
  //     const response = await fetch(request)
  //     const dataRes = await response.json()

  //     console.log('伺服器回傳的json資料', dataRes)
  //     //送出資料後清除session
  //     // 送出資料後跳轉頁面
  //     setTimeout(() => {
  //       sessionClear()
  //       // setSubmitting(false)

  //       history.push('/cartdetail', { cartId: data })
  //       Swal.fire('結帳成功!', '感謝您的購買!', 'success')
  //     }, 500)
  //   } else {
  //     const NewCountError = {}
  //     if (country == -1 && township == -1) {
  //       NewCountError.country = '請填寫收件人欄位'
  //     }

  //     setCountError(NewCountError)
  //   }
  // }
  /////測試金流區域
  //寫入訂單
  // async function addCartToSever(e) {
  //   const data = {
  //     nNN: orderer ? userName : inputs.nNN,
  //     countries: country,
  //     townships: township,
  //     nAA: inputs.nAA,
  //     nCC: orderer ? userCell : inputs.nCC,
  //     nEE: orderer ? userEmail : inputs.nEE,
  //     cartPayId: inputs.cartPayId,
  //     cartLogisticsId: inputs.cartLogisticsId,
  //     mid: inputs.mid,
  //     cartTotal: inputs.cartTotal,
  //     cartDescription: inputs.cartDescription,
  //     cartStatus: inputs.cartStatus,
  //     cartOrderId: inputs.orderid,
  //     orderclass: inputs.orderclass,
  //     created_at: new Date(),
  //   }
  //   console.log('一開始收到的資料', data)
  //   //寫入的網址
  //   const url = 'https://ccore.newebpay.com/MPG/mpg_gateway'

  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       HashKey: 'q2fPeTSjRTKpZKMXlQ6cKtFqPsuf9Czb',
  //       HashIV: 'HashIV',
  //       MerchantID: 'MS121481874',
  //     }),
  //   })
  //   console.log('JSON字串', JSON.stringify(data))
  //   const response = await fetch(request)
  //   const dataRes = await response.json()

  //   console.log('伺服器回傳的json資料', dataRes)
  //送出資料後清除session
  // 送出資料後跳轉頁面
  // }
  /////測試金流區域
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

    const fields = [
      {
        name: 'nAA',
        value: inputs.nAA,
        message: '請輸入地址',
      },
      { name: 'nEE', value: inputs.nEE, message: '請輸入信箱' },
      { name: 'nCC', value: inputs.nCC, message: '請輸入電話' },
      {
        name: 'nNN',
        value: inputs.nNN,
        message: '請輸入文字',
      },
    ]
    const isNotFilled = fields.forEach((field) => {
      if (!field.value.trim()) {
        setErrorMsg(field.message)

        // switch (field.name) {
        //   case 'nEE':
        //     nEERef.current.focus()
        //     break
        //   case 'nCC':
        //     nCCRef.current.focus()
        //     break
        //   case 'nAA':
        //     nAARef.current.focus()
        //     break
        //   case 'nNN':
        //     nNNRef.current.focus()
        //     break
        //   default:
        //     break
        // }
        if (field.name === 'nNN') {
          nNNRef.current.focus()
          return
        }
        if (field.name === 'nAA') {
          nAARef.current.focus()
          return
        }
        if (field.name === 'nCC') {
          nCCRef.current.focus()
          return
        }
        if (field.name === 'nEE') {
          nEERef.current.focus()
          return
        }
      }
      setErrorMsg('')
      return false
    })
    // return isNotFilled

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
          <p>
            NT $
            {sum(getSession) >= 10000
              ? (sum(getSession) -
                  1130 +
                  (cartLogistics == 1 ? +(pTotal(getSession) * 100) : 0)) *
                0.9
              : sum(getSession) -
                1130 +
                (cartLogistics == 1 ? +(pTotal(getSession) * 100) : 0)}
          </p>
        </div>
      </div>
      <h5>2.收貨人資料</h5>
      <div className="cartMain">
        <form
          name="Newebpay"
          method="post"
          action="https://ccore.newebpay.com/MPG/mpg_gateway"
          className="cartInfoMenber"
          // onSubmit={addCartToSever}
          onChange={handleChangeInput}
          onInvalid={handleInvalid}
        >
          {/* 這邊丟入測試金流 */}

          <input type="text" name="MerchantID" value="MS121481874" />
          <input type="text" name="RespondType" value="JSON" />
          <input type="text" name="TradeSha" value={create_mpg_sha_encrypt()} />
          <input type="text" name="TimeStamp" value="1846666662" />
          <input type="text" name="Version" value="1.5" />
          <input type="text" name="MerchantOrderNo" value="1846666662" />
          <input type="text" name="Amt" value="49" />
          <input type="text" name="ItemDesc" value="TEST" />
          <input type="email" name="Email" value="eagle20064@icloud.com" />
          <input type="text" name="LoginType" value="0" />
          <input type="text" name="TradeInfo" value={creat_mpg_aes_encrypt()} />
          {/* 這邊丟入測試金流 */}
          <br />
          <label htmlFor="">訂購人姓名:</label>
          {/* <br /> */}
          <input
            name="userName"
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <br />
          <label htmlFor="">訂購人手機:</label>
          <br />
          <input
            name="userCell"
            type="text"
            value={userCell}
            onChange={(e) => {
              setUserCell(e.target.value)
            }}
          />
          <br />
          <label htmlFor="">訂購人信箱:</label>
          <br />
          <input
            name="userEmail"
            type="email"
            value={userEmail}
            onChange={(e) => {
              setUserEmail(e.target.value)
            }}
          />
          <br />
          <input
            type="checkbox"
            checked={orderer}
            style={{ width: '20px' }}
            onClick={(e) => {
              setOrderer(e.target.checked)
            }}
          />
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
            ref={nNNRef}
            value={orderer ? userName : inputs.nNN}
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
            ref={nCCRef}
            value={orderer ? userCell : inputs.nCC}
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
            ref={nEERef}
            value={orderer ? userEmail : inputs.nEE}
            onChange={handelChange}
            placeholder="請輸入信箱"
            required
          />
          <br />
          <label htmlFor="">收件人地址:</label>
          {countError.country && (
            <small className="text-danger">{countError.country}</small>
          )}
          {fieldErrors.nAA && (
            <small className="text-danger ">{fieldErrors.nAA}</small>
          )}
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
            ref={nAARef}
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
              value="Sbumit"
              type="submit"
              // onSubmit={() => addCartToSever()}

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
