import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
//引入jq
import $ from 'jquery'
import moment from 'moment'
//我的頁面
import Cart from './pages/cart/Cart'
import CartInfo from './pages/cart/CartInfo'
import CartDetail from './pages/cart/CartDetail'
import CartOrder from './pages/cart/CartOrder'
import CartCheck from './pages/cart/CartCheck'
import CartCheckOrder from './pages/cart/CartCheckOrder'
//測試商品頁
import ProductList from './pages/ProductList/ProductList'
//組合用元件
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

// 載入個別頁面
import Index from './pages/Index.js'
import Product from './pages/Product'
import ProductData from './pages/ProductData.js'
import SrNavBar from './components/SrNavBar.js'
//購物車狀態使用
function App() {
  const [getSession, setGetSession] = useState('')
  //node的接收商品
  const sessionServer = async () => {
    const url = `http://localhost:4000/cart`
    const request = new Request(url, {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    setGetSession(data)
  }
  //一進入頁面就讀取購物車內有無東西
  useEffect(() => {
    sessionServer()
  }, [])
  //設定基本日期
  const StartDay = moment().add(1, 'days').format('YYYY-MM-DD')
  const EndDay = moment(StartDay).add(1, 'days').format('YYYY-MM-DD')
  const [startTime, setStartTime] = useState(StartDay)
  const [endTime, setEndTime] = useState(EndDay)
  //設定日期handle

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <NavBar getSession={getSession} setGetSession={setGetSession} />
        {/* 主內容區 */}
        {/* <MainContent> */}
        <ScrollToTop>
          <Switch>
            <Route exact path="/product">
              {/* <SrNavBar
                  startTime={startTime}
                  endTime={endTime}
                  setstart={setStartTime}
                  setend={setEndTime}
                  today={StartDay}
                  nextday={EndDay}
                /> */}
              <Product sessionServer={sessionServer} />
              <Footer ver="full" />
            </Route>
            <Route exact path="/product/:pid">
              {/* <SrNavBar
                  startTime={startTime}
                  endTime={endTime}
                  setstart={setStartTime}
                  setend={setEndTime}
                  today={StartDay}
                  nextday={EndDay}
                /> */}
              <ProductData />
              <Footer ver="full" />
            </Route>
            {/* 首頁 */}
            <Route exact path="/">
              <NavBar />
              <Index
                startTime={startTime}
                endTime={endTime}
                setstart={setStartTime}
                setend={setEndTime}
                today={StartDay}
                nextday={EndDay}
              />
              <Footer ver="full" />
            </Route>

            {/* 以下購物車用 */}
            {/* <Route path="/ProductList">
                <ProductList sessionServer={sessionServer} />
              </Route> */}
            <MainContent>
              <Route path="/cartcheckorder">
                <CartCheckOrder />
              </Route>
              <Route path="/cartcheck">
                <CartCheck />
              </Route>
              <Route path="/cartorder">
                <CartOrder />
              </Route>
              <Route path="/cartdetail">
                <CartDetail />
              </Route>
              <Route path="/cartinfo">
                <CartInfo />
              </Route>
              <Route path="/cart">
                <Cart
                  startTime={startTime}
                  endTime={endTime}
                  getSession={getSession}
                  setGetSession={setGetSession}
                  sessionServer={sessionServer}
                />
              </Route>
            </MainContent>
          </Switch>
        </ScrollToTop>
        {/* </MainContent> */}
        <Footer ver="full" />
      </>
    </Router>
  )
}

export default App
