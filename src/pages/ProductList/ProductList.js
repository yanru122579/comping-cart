import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

function ProductList(props) {
  const { sessionServer } = props
  const setMycart = useState([])[1]
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  // const setSdata = useState()[1]

  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  //自制增加session
  const sessionServer1 = async (sid) => {
    // const newData = new Request()
    const url = `http://localhost:4000/cart/add?sid=${sid}&quantity=1`
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
    // setSdata(data)
    //增加商品後記得刷新購物車讀取頁面
    setTimeout(() => {
      sessionServer()
    }, 500)
  }
  // useEffect(() => {
  //   sessionServer()
  // }, [Sdata])
  useEffect(() => {
    sessionServer1()
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    console.log(currentCart)

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.id === item.id)

    // found: index! == -1
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('這個商品已經加過了')
      handleShow()
      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.history.push('/cart')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const display = (
    <>
      <div className="card-deck">
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">iphone XS</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text text-danger">NTD 15000元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 1,
                  name: 'iphone xs',
                  amount: 1,
                  price: 15000,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Book</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text text-danger">NTD 200元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 3,
                  name: 'book',
                  amount: 1,
                  price: 200,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://via.placeholder.com/250x150"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">iPad</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text text-danger">NTD 21000元</p>
          </div>
          <div className="card-footer">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                updateCartToLocalStorage({
                  id: 2,
                  name: 'ipad',
                  amount: 1,
                  price: 21000,
                })
              }}
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
      {num.map((v, i) => {
        return (
          <>
            <li>{v}</li>
            <button
              onClick={() => {
                console.log(i)
                sessionServer1(v)
              }}
            >
              點我增加商品
            </button>
          </>
        )
      })}
    </>
  )

  return (
    <>
      {messageModal}
      {display}
    </>
  )
}

export default withRouter(ProductList)
