import React from 'react'

const CartHover = (props) => {
  const { getSession } = props
  return (
    <div className="cartHover w-50">
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
  )
}

export default CartHover
