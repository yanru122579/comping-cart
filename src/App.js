import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
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

  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <NavBar getSession={getSession} setGetSession={setGetSession} />
        {/* 主內容區 */}
        <MainContent>
          <ScrollToTop>
            <Switch>
              <Route path="/ProductList">
                <ProductList sessionServer={sessionServer} />
              </Route>
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
              <Route path="/">
                <Cart
                  getSession={getSession}
                  setGetSession={setGetSession}
                  sessionServer={sessionServer}
                />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <Footer ver="full" />
      </>
    </Router>
  )
}

export default App
