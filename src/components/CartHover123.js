import React, { useState, useEffect, useRef } from 'react'

const CartHover123 = () => {
  // const { getSession } = props
  const loadingRef = useRef(true)
  const [getSession, setGetSession] = useState('')
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
    loadingRef.current = false
    setGetSession(data)
  }
  // console.log('hove', getSession)
  // useEffect(() => {
  //   sessionServer()
  // }, [getSession])
  return (
    <>
      {!loadingRef.current && (
        <div className="cartHover w-25 hovertest ">
          {getSession.map((v, i) => {
            return (
              <>
                <div className="d-flex row mt-2 ">
                  <div className="col  col12">{v.product_name}</div>
                  <div className="col col-12 d-flex mt-1">
                    <div className="col col6">
                      <img className=" w-50" src="./img/冰桶.jpeg" alt="" />
                    </div>
                    <div className="col col6 price">${v.product_price}</div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      )}
    </>
  )
}

export default CartHover123
