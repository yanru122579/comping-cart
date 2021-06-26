import React from 'react'
import { FaTrashAlt, FaMinus } from 'react-icons/fa'
import { BiPlusMedical, BiMinus } from 'react-icons/bi'

const CartItem = () => {
  return (
    <>
      <div className="cartItem ">
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
      </div>
      <div className="cartItem ">
        <h3>2.</h3>
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
      </div>
    </>
  )
}

export default CartItem
