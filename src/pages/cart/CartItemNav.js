import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

const CartItemNav = (props) => {
  const { setType, type } = props
  // 控制點亮css狀態用
  const [status, setStatus] = useState([true, false, false])
  const handeleClass = (index) => {
    // debugger
    //先弄一個全暗的陣列
    const newStatus = [false, false, false]
    // 只點亮被按的按鈕
    newStatus[index] = true
    // 設定回狀態
    setStatus(newStatus)
  }

  return (
    <>
      <div className="cartNavItem">
        <button
          className={`navClass ${
            status[0] ? 'cartNavItemBoxBk' : 'cartNavItemBoxGy'
          }`}
          onClick={() => {
            setType('product')
            handeleClass(0)
          }}
        >
          商品租借
        </button>

        <button
          className={`navClass ${
            status[1] ? 'cartNavItemBoxBk' : 'cartNavItemBoxGy'
          }`}
          onClick={() => {
            setType('activity')
            handeleClass(1)
          }}
        >
          活動預約
        </button>

        <button
          className={`navClass ${
            status[2] ? 'cartNavItemBoxBk' : 'cartNavItemBoxGy'
          }`}
          onClick={() => {
            handeleClass(2)
            setType('place')
          }}
        >
          場地租借
        </button>
      </div>
    </>
  )
}
export default withRouter(CartItemNav)
