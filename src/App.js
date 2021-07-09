import React from 'react'
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
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {
  return (
    <Router>
      <>
        {/* LOGO+標題+導覽列+上方選單 */}
        <NavBar />
        {/* 主內容區 */}
        <MainContent>
          <ScrollToTop>
            <Switch>
              <Route path="/ProductList">
                <ProductList />
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
                <Cart />
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
