import React, { useState } from 'react'
import { FaTrashAlt, FaMinus } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'

const CartItemActivity = (props) => {
  const { mycartDisplay, updateCartToLocalStorage, handleDelete, sum } = props

  return (
    <>
      <div className="cartMain">
        <div className=" cartTable">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>商品名稱</th>
                <th>價格</th>
                <th>數量</th>
                <th></th>
              </tr>
            </thead>
            {mycartDisplay.map((item, index) => {
              return (
                <tbody className="" key={index}>
                  <tr>
                    <td>{index + 1}.</td>
                    <td>
                      <img src="./img/冰桶.jpeg" alt="" />
                    </td>

                    <td>{item.name}</td>
                    <td>{item.amount * item.price}</td>
                    <td>
                      <div className="tableItem">
                        <button
                          onClick={() => updateCartToLocalStorage(item, true)}
                        >
                          <BiPlusMedical color="#FFBB00" />
                        </button>
                        {item.amount}
                        <button
                          onClick={() => {
                            if (item.amount === 1) return
                            updateCartToLocalStorage(item, false)
                          }}
                        >
                          <FaMinus color="#FFBB00" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}>
                        <FaTrashAlt color="#000" />
                      </button>
                      {/* {setPrice(item.amount * item.price)} */}
                    </td>
                  </tr>
                </tbody>
              )
            })}
          </table>
        </div>
      </div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>小計:</p>
          <p>
            選擇折價券:
            <select name="" id="" style={{ width: '150px' }}>
              <option value="">請選擇折價券</option>
            </select>
          </p>
          <p>
            選擇運送方式:
            <select name="" id="" style={{ width: '150px' }}>
              <option value="">請選擇運送方式</option>
            </select>
          </p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共2項</p>
          <p>NT $ {sum(mycartDisplay)}</p>
          <p>-NT $ 1130</p>
          <p>NT $ 300</p>
        </div>
      </div>
      <div className="cartPiceDetil">
        <h4>總計金額:&emsp;</h4>
        <h3>NT $ {sum(mycartDisplay) - 1130 - 300}</h3>
      </div>
      <div className="cartPiceBtn">
        <button>繼續選購</button>
        <button>下一步</button>
      </div>
    </>
  )
}

export default CartItemActivity
