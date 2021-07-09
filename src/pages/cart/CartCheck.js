import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

const CartCheck = () => {
  const history = useHistory()
  const [state, setState] = useState({
    useOrderId: '',
    useOrderCell: '',
  })
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [checkOrder, setCheckOrder] = useState()

  const useOrderIdRef = useRef()
  const useOrderCellRef = useRef()

  //查詢訂單
  const checkOrderServer = async (e) => {
    e.preventDefault()
    const isInvalid = validateInput()
    if (!isInvalid) {
      // const newData = {}
      const url = `http://localhost:4000/cartorder/ordercheck/${state.useOrderId}/${state.useOrderCell}`
      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          // 'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      console.log(data)
      setCheckOrder(data)
      if (data == '找不到資料') {
        setTimeout(() => {
          Swal.fire('找不到資料!', '請重新確認!', 'error')
        }, 500)
        return
      }
      //跳轉到下一頁
      history.push('/cartcheckorder', {
        useOrderId: state.useOrderId,
        useOrderCell: state.useOrderCell,
      })
    }
  }

  //以下全處理訂單
  useEffect(() => {
    useOrderIdRef.current.focus()
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const validateInput = () => {
    const fields = [
      {
        name: 'useOrderId',
        value: state.useOrderId,
        message: '請輸入訂單編號',
      },
      {
        name: 'useOrderCell',
        value: state.useOrderCell,
        message: '請輸入電話',
      },
    ]
    const isNotFilled = fields.some((field) => {
      if (field.value.trim() === '') {
        setErrorMsg(field.message)
        field.name === 'useOrderId'
          ? useOrderIdRef.current.focus()
          : useOrderCellRef.current.focus()
        return true
      }
      setErrorMsg('')
      return false
    })
    return isNotFilled
  }

  //   const handleOnSubmit = (event) => {
  //     event.preventDefault()
  //     const isInvalid = validateInput()
  //     if (!isInvalid) {
  //       setSuccessMsg("You're good to go!")
  //     } else {
  //       setSuccessMsg('')
  //     }
  //   }
  return (
    <div className="container">
      <h1>廠商查詢用頁面</h1>
      <div className="col-md-6 offset-md-3">
        {successMsg && <p className="successMsg">{successMsg}</p>}
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={checkOrderServer}>
          <Form.Group controlId="email">
            <Form.Label>訂單編號</Form.Label>
            <Form.Control
              type="cel"
              name="useOrderId"
              ref={useOrderIdRef}
              value={state.useOrderId}
              placeholder="輸入訂單編號"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>電話</Form.Label>
            <Form.Control
              type="cel"
              name="useOrderCell"
              ref={useOrderCellRef}
              value={state.useOrderCell}
              placeholder="輸入電話"
              autoComplete="off"
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            查詢
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default CartCheck
