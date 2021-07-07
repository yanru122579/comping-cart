import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { IoIosArrowDown } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'
// import CartItem from './CartItem'
import CartOrderItem from './CartOrderItem'
import { Pagination } from 'react-bootstrap'

const CartOrder = () => {
  const [data, setData] = useState([])
  const [select, setSelect] = useState(null)
  const [dataItem, setDataItem] = useState([])
  const [page, setPage] = useState('')
  const [orderClass, setOrderClass] = useState('')

  console.log('paggg', data.totalPages)
  //資料載入

  const addUserToSever = async () => {
    // 開啟載入指示
    // setDataLoading(true)

    // const newData = {}

    // 連接的伺服器資料網址
    let url = `http://localhost:4000/cartorder/api/?page=${page}&orderClass=${orderClass}`
    // url = orderClass ? `${url}&orderClass=${orderClass}` : url
    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setData(data)
    // console.log('伺服器回傳的json資料', data.rows)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    // setTimeout(() => {
    //   setDataLoading(false)
    //   alert('儲存完成')
    //   props.history.push('/')
    // }, 500)
  }

  const itemSever = async () => {
    // const newData = {}
    const url = `http://localhost:4000/cartorder/item/${select}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    // console.log(data)
    setDataItem(data)
  }

  useEffect(() => {
    if (select) {
      itemSever()
    }
  }, [select])
  useEffect(() => {
    if (page) {
      addUserToSever()
    }
  }, [page])
  useEffect(() => {
    if (orderClass || orderClass == '') {
      addUserToSever()
      setPage(1)
    }
  }, [orderClass])

  useEffect(() => {
    addUserToSever()
  }, [])

  //判斷頁數
  // const totalPages = () => {
  //   let p = document.getElementById('pages').innerHTML
  //   for (let i = 0; i < data.totalPages; i++) {
  //     p += `<li className="page-item">
  //         <button
  //           className="page-link"
  //           value={i}
  //           onClick={() => {
  //             setPage(i + 1)
  //           }}
  //         >
  //           ${i + 1}
  //         </button>
  //       </li>`
  //   }
  // }
  // console.log('page', data.totoPages)

  // let active = 2
  let items = []
  for (let number = 1; number <= data.totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={(e) => {
          setPage(number)
        }}
        active={number === page}
      >
        {number}
      </Pagination.Item>
    )
  }

  return (
    <>
      <div className="container">
        <div className="cartOrderTitle">
          <h5>
            <FaSearch />
            查詢訂單
          </h5>
          <select
            name=""
            id=""
            onChange={(v) => {
              setOrderClass(v.target.value)
            }}
          >
            <option value="">全部</option>
            <option value="1">商品租借</option>
            <option value="2">活動預約</option>
            <option value="3">場地租借</option>
          </select>
        </div>
        <table className="cartOrderItemHeard">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單日期</th>
              <th>訂單狀態</th>
              <th>付款方式</th>
              <th>訂單金額</th>
              <th>服務項目</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {data?.rows?.map((item, i) => {
          return (
            <CartOrderItem
              key={i}
              item={item}
              select={select}
              setSelect={setSelect}
              dataItem={dataItem}
            />
          )
        })}

        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button
                class="page-link"
                id="prev"
                onClick={() => {
                  if (page == 1) return
                  setPage(page - 1)
                }}
              >
                Previous
              </button>
            </li>
            {/* {totalPages()} */}
            <div>
              <Pagination>{items}</Pagination>
              <br />
            </div>
            {/* {data?.rows.map((item, i) => {
              return (
                <li className="page-item">
                  <button
                    className="page-link"
                    value={i}
                    onClick={() => {
                      setPage(i + 1)
                    }}
                  >
                    {item.totalPages}
                  </button>
                </li>
              )
            })} */}
            <li class="page-item">
              <button
                class="page-link"
                href=""
                onClick={() => {
                  if (page === data.totalPages) return
                  setPage(page + 1)
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default CartOrder
