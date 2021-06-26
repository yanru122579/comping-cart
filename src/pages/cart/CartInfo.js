import React from 'react'
import '../../styles/cart.scss'
import CartTitle from './CartTitle'
import CartItem from './CartItem'

const CartInfo = () => {
  return (
    <>
      <div className="container">
        <CartTitle />
      </div>
      <h5>1.購物明細</h5>
      <div className="cartMain">
        <div className="cartItemTitle">
          <h4>商品名稱</h4>
          <h4>單價</h4>
          <h4>數量</h4>
        </div>
        <CartItem />
      </div>
      <div className="cartPiceDetil">
        <div className="cartPiceDetilItem1">
          <p>品項:</p>
          <p>總計金額:</p>
        </div>
        <div className="cartPiceDetilItem2">
          <p>共 3 項</p> <p>NT $ 1130</p>
        </div>
      </div>
      <h5>2.收貨人資料</h5>
      <div className="cartMain">
        <form action="" className="cartInfoMenber">
          <label htmlFor="">訂購人姓名:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">訂購人手機:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">訂購人信箱:</label>
          <br />
          <input type="text" />
          <br />
          <input type="checkbox" />
          <label htmlFor="">同訂購人</label>
          <br />
          <label htmlFor="">收件人姓名:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">收件人手機:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">收件人信箱:</label>
          <br />
          <input type="text" />
          <br />
          <label htmlFor="">收件人地址:</label>
          <br />
          <div>
            <select name="" id="">
              <option value="">選擇郵遞區號</option>
            </select>
            <select name="" id="">
              <option value="">選擇縣市</option>
            </select>
            <select name="" id="">
              <option value="">選擇區域</option>
            </select>
          </div>
          <br />
          <input type="text" value="請輸入地址" />
          <br />
          <label htmlFor="">發票資訊</label>
          <br />
          <select name="" id="">
            <option value="">捐贈發票</option>
          </select>
        </form>
      </div>
      <h5>3.付款方式</h5>
      <div className="cartMain">
        <form action="" className="cartInfoMenber">
          <label htmlFor="">選擇付款方式:</label>
          <input type="text" />
          <div>
            <img src="http://fakeimg.pl/440x320/282828/EAE0D0/" alt="" />
          </div>
          <label htmlFor="">卡號:</label>
          <input type="text" />
          <br />
          <label htmlFor="">持卡人:</label>
          <input type="text" />
          <br />
          <label htmlFor="">選到期日:</label>
          <input type="text" />
          <br />
          <label htmlFor="">驗證碼:</label>
          <input type="text" />
          <br />
        </form>
      </div>
      <div className="cartPiceBtn">
        <button>上一頁</button>
        <button>確認結帳</button>
      </div>
    </>
  )
}

export default CartInfo
