import React, { useState, useEffect } from 'react'
import '../../styles/cart.scss'
import { AiFillCaretRight } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
// import CartTitle from './CartTitle'
import CartItemNav from './CartItemNav'
import CartItem from './CartItem'
import CartItemPlace from './CartItemPlace'
import CartItemActivity from './CartItemActivity'
import Swal from 'sweetalert2'

//信用卡

import 'react-credit-cards/es/styles-compiled.css'
import ArticleCarousel from '../../components/ArticleCarousel'

const Cart = (props) => {
  const { getSession, setGetSession, sessionServer, startTime, endTime } = props
  //計算日期
  const start_date = moment(startTime, 'YYYY-MM-DD')
  const end_date = moment(endTime, 'YYYY-MM-DD')
  const gameDay = end_date.diff(start_date, 'day')
  console.log(gameDay)
  //node 變更商品數量
  const sessionUpdate = async (sid, quantity, add = true) => {
    quantity = add === true ? +quantity + 1 : +quantity - 1
    if (quantity == 0) {
      return
    }
    const url = `http://localhost:4000/cart/update?sid=${sid}&quantity=${quantity}`
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log('data', data)
    setSessionUp(data)
    setTimeout(() => {
      sessionServer()
    }, 100)
  }
  //node 清空購物車
  const sessionClear = async () => {
    const url = `http://localhost:4000/cart/clear`
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setSessionCl(data)
    setTimeout(() => {
      sessionServer()
    }, 100)
  }
  //node 刪除商品
  const sessionDelete = async (sid) => {
    const url = `http://localhost:4000/cart/remove/${sid}`
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setSessionDl(data)
    setTimeout(() => {
      sessionServer()
    }, 100)
  }

  //商品購物車
  // const [mycart, setMycart] = useState([])
  // const [dataLoading, setDataLoading] = useState(false)
  //商品變動
  const history = useHistory()
  const [type, setType] = useState('product')
  const [total, setTotal] = useState(false)
  // const [getSession, setGetSession] = useState([])
  const setSessionUp = useState([])[1]
  const setSessionDl = useState([])[1]
  const setSessionCl = useState([])[1]
  // const [cartLogistics, setCartLogistics] = useState('')
  //vover滑動用

  //驗證會員有無登入
  const [mid, setMid] = useState()
  //讀取會員資料
  const [fetchmid, setFetchmid] = useState()
  //折價券用
  const [newMember, setNewMember] = useState(0)

  useEffect(() => {
    setMid(sessionStorage.getItem('mid'))
  }, [mid])

  //驗證會員登錄
  const handleMin = () => {
    if (sessionStorage.getItem('mid') === null && getSession.length > 0)
      setTimeout(() => {
        sessionClear()
        // setSubmitting(false)

        history.push('/ProductList')
        Swal.fire('未登入!', '請先登入', 'success')
      }, 100)
  }
  //抓會員資料
  const memberToSever = async () => {
    const url = `http://localhost:4000/cartorder/member/183`
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setFetchmid(data)
  }
  useEffect(() => {
    memberToSever()
  }, [])

  //node的接收商品已經移到app.js
  // const sessionServer = async () => {

  //   const url = `http://localhost:4000/cart`
  //   const request = new Request(url, {
  //     method: 'GET',
  //     credentials: 'include',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       // 'Content-Type': 'application/json',
  //     }),
  //   })
  //   const response = await fetch(request)
  //   const data = await response.json()

  //   setGetSession(data)
  // }

  useEffect(() => {
    sessionServer()
  }, [])
  // useEffect(() => {
  //   if (getSession) {
  //     sessionServer()
  //   }
  // }, [getSession])

  // useEffect(() => {
  //   sessionUpdate()
  // }, [getSession])

  //計算總價用的函示
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items?.length; i++) {
      total += items[i].product_price * items[i].quantity
    }
    return total
  }
  //計件用
  const pTotal = (items) => {
    let total = 0
    for (let i = 0; i < items?.length; i++) {
      total += parseInt(items[i].quantity)
    }
    return total
  }
  //設定title圖示
  const [title, setTitle] = useState([true, false, false])
  const handeleClass = (index) => {
    // debugger
    //先弄一個全暗的陣列
    const newStatus = [false, false, false]
    // 只點亮被按的按鈕
    newStatus[index] = true
    // 設定回狀態
    setTitle(newStatus)
  }

  // product acivity place
  const typeObj = {
    product: (
      <CartItem
        gameDay={gameDay}
        newMember={newMember}
        setNewMember={setNewMember}
        fetchmid={fetchmid}
        setFetchmid={setFetchmid}
        startTime={startTime}
        endTime={endTime}
        handleMin={handleMin}
        mid={mid}
        handeleClass={handeleClass}
        setTitle={setTitle}
        title={title}
        pTotal={pTotal}
        sum={sum}
        total={total}
        setTotal={setTotal}
        getSession={getSession}
        setGetSession={setGetSession}
        sessionUpdate={sessionUpdate}
        sessionDelete={sessionDelete}
        sessionClear={sessionClear}
      />
    ),
    activity: <CartItemActivity sum={sum} total={total} setTotal={setTotal} />,
    place: (
      <CartItemPlace
        // mycartDisplay={mycartDisplay}
        handleMin={handleMin}
        mid={mid}
        handeleClass={handeleClass}
        setTitle={setTitle}
        title={title}
        pTotal={pTotal}
        sum={sum}
        total={total}
        setTotal={setTotal}
        getSession={getSession}
        setGetSession={setGetSession}
        sessionUpdate={sessionUpdate}
        sessionDelete={sessionDelete}
        sessionClear={sessionClear}
      />
    ),
  }

  return (
    <>
      {/* <div className="hovertest1">
        123
        <p class="hovertest">
          測試觸碰滑動
          <CartHover getSession={getSession} />
        </p>
      </div> */}

      {/* <PaymentForm /> */}
      <div className="container ">
        <div className="cartTitle cartTitleWeb">
          <div className="row ">
            {/* <div className={title[0] ? 'cartTitleH1-box' : 'cartTitleH1'}> */}
            <h4 className={title[0] ? 'cartTitleH1-box' : 'cartTitleH1'}>
              購物明細
            </h4>
            {/* </div> */}

            <div>
              <h2>
                <AiFillCaretRight color="#808080" />
                <AiFillCaretRight color="#808080" />
                <AiFillCaretRight color="#808080" />
              </h2>
            </div>
            <h4 className={title[1] ? 'cartTitleH1-box' : 'cartTitleH1'}>
              訂單資訊
            </h4>
            <h2>
              <AiFillCaretRight color="#808080" />
              <AiFillCaretRight color="#808080" />
              <AiFillCaretRight color="#808080" />
            </h2>
            <h4 className={title[2] ? 'cartTitleH1-box' : 'cartTitleH1'}>
              訂單明細
            </h4>
          </div>
        </div>
        <div className="cartTitle cartTitleMobile">
          <div className="row ">
            <div className={title[0] ? 'cartTitleH1-box' : 'cartTitleH1'}>
              <h4>購物明細</h4>
            </div>
          </div>
        </div>
      </div>

      {!total && (
        <CartItemNav setType={setType} type={type} getSession={getSession} />
      )}
      {typeObj[type]}
      {!total && <ArticleCarousel />}
    </>
  )
}

export default Cart
