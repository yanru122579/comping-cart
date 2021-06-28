import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import './App.css'
//我的頁面
import Cart from './pages/cart/Cart'
import CartInfo from './pages/cart/CartInfo'
import CartDetail from './pages/cart/CartDetail'
import CartOrder from './pages/cart/CartOrder'

//組合用元件
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'

function App() {
  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <MyNavbar />
        {/* 主內容區 */}
        <MainContent>
          <ScrollToTop>
            <Switch>
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
                <Cart />
              </Route>
            </Switch>
          </ScrollToTop>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
