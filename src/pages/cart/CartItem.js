import React from 'react'
import { FaTrashAlt, FaMinus } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'
import { useHistory } from 'react-router-dom'
import CartInfo from './CartInfo'

const CartItem = (props) => {
  const {
    mid,
    pTotal,
    sum,
    total,
    setTotal,
    getSession,
    sessionUpdate,
    sessionDelete,
    sessionClear,
    handeleClass,
    handleMin,
  } = props
  const history = useHistory()
  // const [price, setPrice] = useState()
  return (
    <>
      <div className="cartMain">
        <div className=" cartTable">
          {getSession.length > 0 ? (
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

              {getSession?.map((item, index) => {
                return (
                  <tbody className="" key={index}>
                    <tr>
                      <td>{index + 1}.</td>
                      <td>
                        <img src="./img/冰桶.jpeg" alt="" />
                      </td>

                      <td>{item.product_name}</td>
                      <td>{item.quantity * item.product_price}</td>
                      {!total ? (
                        <>
                          <td>
                            {/* <div className="tableItem"> */}
                            <button
                              onClick={() => {
                                sessionUpdate(item.product_id, item.quantity++)
                              }}
                            >
                              <BiPlusMedical color="#FFBB00" />
                            </button>
                            {item.quantity}
                            <button
                              onClick={() => {
                                if (item.quantity === 1) return
                                sessionUpdate(item.product_id, item.quantity--)
                              }}
                            >
                              <FaMinus color="#FFBB00" />
                            </button>
                            {/* </div> */}
                          </td>
                          <td>
                            <button
                              onClick={() => {
                                sessionDelete(item.product_id)
                              }}
                            >
                              <FaTrashAlt color="#000" size="20px" />
                            </button>
                            {/* {setPrice(item.amount * item.price)} */}
                          </td>
                        </>
                      ) : (
                        <td>{item.quantity}</td>
                      )}
                    </tr>
                  </tbody>
                )
              })}
            </table>
          ) : (
            <div className="container">
              <h3>目前購物車內尚無東西</h3>
              <button
                onClick={() => {
                  history.push('/productlist')
                }}
              >
                點我立即選購去
              </button>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          )}
        </div>
      </div>
      {!total && (
        <>
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
              <p>選擇運送方式: 100/件</p>
              <h4>總計金額:&emsp;</h4>
            </div>
            <div className="cartPiceDetilItem2">
              <p>共{pTotal(getSession)}項</p>
              <p>NT $ {sum(getSession)}</p>
              <p>-NT $ 1130</p>
              <p>NT $ +{pTotal(getSession) * 100}</p>
              <h3>NT $ {sum(getSession) - 1130 + pTotal(getSession) * 100}</h3>
            </div>
          </div>

          <div className="cartPiceBtn">
            <button>繼續選購</button>
            <button
              onClick={() => {
                handleMin()
                getSession.length && setTotal(true)
                getSession.length && handeleClass(1)
              }}
            >
              下一步
            </button>
          </div>
        </>
      )}
      {total && (
        <CartInfo
          mid={mid}
          handeleClass={handeleClass}
          pTotal={pTotal}
          sum={sum}
          total={total}
          setTotal={setTotal}
          getSession={getSession}
          sessionClear={sessionClear}
        />
      )}
    </>
  )
}

export default CartItem
