import React from 'react'
import { FaTrashAlt, FaMinus } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'

const CartItem = (props) => {
  const { v } = props
  return (
    <>
      {/* 舊的 */}
      {/* <div className="cartItem ">
        <h3>1.</h3>
        <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
        <div className="cartItemDetil">
          <p>Amenity Dome寢室帳</p>
          <p>$14.900</p>
          <div className="cartItemDetilBtn">
            <button className="btn btn-primary">
              <BiPlusMedical />
            </button>
            <input type="text" value="3" />
            <button className="btn btn-primary">
              <FaMinus />
            </button>
          </div>
          <button className="btn btn-primary">
            <FaTrashAlt />
          </button>
        </div>
      </div> */}
      {/* －－－－－－－－－－－－－－－－－－－ */}
      <div className=" cartTable">
        <table className="table ">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>商品名稱</th>
              <th>單價</th>
              <th>數量</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>1.</td>
              <td>
                <img src="./img/冰桶.jpeg" alt="" />
              </td>

              <td>Amenity Dome寢室帳</td>
              <td>$14.900</td>
              <td>
                <div className="tableItem">
                  <button>
                    <BiPlusMedical color="#FFBB00" />
                  </button>
                  <input type="text" value="3" />
                  <button>
                    <FaMinus color="#FFBB00" />
                  </button>
                </div>
              </td>
              <td>
                <button>
                  <FaTrashAlt color="#000" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CartItem
