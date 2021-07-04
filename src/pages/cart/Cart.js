import React, { useState, useEffect } from 'react'
import '../../styles/cart.scss'

import CartTitle from './CartTitle'
import CartItemNav from './CartItemNav'
import CartItem from './CartItem'
import CartItemPlace from './CartItemPlace'
import CartItemActivity from './CartItemActivity'

const Cart = () => {
  //node 變更商品數量
  const sessionUpdate = async (sid, quantity) => {
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

  const [type, setType] = useState('product')
  const [total, setTotal] = useState(false)
  const [getSession, setGetSession] = useState([])
  const setSessionUp = useState([])[1]
  const setSessionDl = useState([])[1]
  const setSessionCl = useState([])[1]

  //node的接收商品
  const sessionServer = async () => {
    // const newData = new Request()
    const url = `http://localhost:4000/cart`
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
    // const myData = await data.credentials
    console.log('data', data)
    setGetSession(data)
  }

  useEffect(() => {
    sessionServer()
  }, [])
  // useEffect(() => {
  //   sessionServer()
  // }, [getSession])

  useEffect(() => {
    if (getSession) {
      sessionUpdate()
    }
  }, [getSession])

  //計算總價用的函示
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].product_price * items[i].quantity
    }
    return total
  }
  //計件用
  const pTotal = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += parseInt(items[i].quantity)
    }
    return total
  }

  // product acivity place
  const typeObj = {
    product: (
      <CartItem
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
        sum={sum}
        total={total}
        setTotal={setTotal}
      />
    ),
  }

  return (
    <>
      <div className="container ">
        <CartTitle />
      </div>
      {!total && <CartItemNav setType={setType} type={type} />}
      {typeObj[type]}

      {!total && (
        <>
          <div className="cartCards">
            <div className="cartCard">
              <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
              <div className="cartCardBody">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolorum fugiat a doloremque ducimus? Adipisci
                  doloremque tempore, ad unde facere, porro repudiandae alias
                  harum, rem expedita velit aperiam iusto esse?
                </p>
              </div>
            </div>
            <div className="cartCard">
              <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
              <div className="cartCardBody">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolorum fugiat a doloremque ducimus? Adipisci
                  doloremque tempore, ad unde facere, porro repudiandae alias
                  harum, rem expedita velit aperiam iusto esse?
                </p>
              </div>
            </div>
            <div className="cartCard">
              <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
              <div className="cartCardBody">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore dolorum fugiat a doloremque ducimus? Adipisci
                  doloremque tempore, ad unde facere, porro repudiandae alias
                  harum, rem expedita velit aperiam iusto esse?
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Cart
