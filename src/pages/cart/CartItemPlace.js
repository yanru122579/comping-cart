import React from 'react'
import { FaTrashAlt, FaMinus } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'

const CartItemPlace = (props) => {
  const { total, setTotal } = props
  return (
    <>
      {/* －－－－－－－－－－－－－－－－－－－ */}
      <div className="cartMain">
        <div className=" cartTable">
          <table className="table ">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>分區</th>
                <th>日期/每帳價格</th>
                <th>露營天數</th>
                <th>帳數</th>
                <th>價格</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>1.</td>
                <td>
                  <img src="./img/營地.png" alt="" />
                </td>

                <td>A區草地</td>
                <td>2021-06-02</td>
                <td>1</td>
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
                <td>$700</td>
                <td>
                  <button>
                    <FaTrashAlt color="#000" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>小計:</p>
          <p>
            選擇折價券: <input type="text" value="週年慶折50" />
          </p>
          <p>
            選擇運送方式: <input type="text" value="宅配 100/件" />
          </p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共2項</p>
          <p>NT $ 1130</p>
          <p>-NT $ 1130</p>
          <p>NT $ 300</p>
        </div>
      </div>
      <div className="cartPiceDetil">
        <h4>總計金額:&emsp;</h4>
        <h3>NT $ 11000</h3>
      </div>
      <div className="cartPiceBtn">
        <button>繼續選購</button>
        <button
          onClick={() => {
            setTotal(true)
          }}
        >
          下一步
        </button>
      </div>
    </>
  )
}

export default CartItemPlace
