import React, { useState, useEffect } from 'react'
import MainLogo from '../images/logo.svg' //logo檔案
import Profile from '../images/profile.png' //profile檔案
import { Navbar, Nav, Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navnfooter.css'
// import '../styles/cart.scss'
import NavIcon from './NavIcon.js' //icon SVG路徑檔案
import { Link } from 'react-router-dom'
import $ from 'jquery'
//購物車下拉用
import CartHover123 from './CartHover123'
//
const NavBar = (props) => {
  const { getSession } = props
  //設定Navbar-icon
  // 可以在各自的link中修改
  const items = [
    { item: '找用品', link: '/product', icon: 'product' },
    { item: '找場地', link: '/Cartorder', icon: 'event' },
    { item: '找活動', link: '/cartcheck', icon: 'place' },
    { item: '找靈感', link: '/discover', icon: 'idea' },
  ]
  let lastScorll = 0

  $(window).scroll(function () {
    const scrollNow = $(this).scrollTop() //120

    if (lastScorll < scrollNow) {
      $('.nav-bg').addClass('hide')
    } else {
      $('.nav-bg').removeClass('hide')
    }

    lastScorll = scrollNow // 100
  })

  //  TODO:
  //  1.JQ 設定NAV效果
  //  2.購物車?
  // href="javascript:void(0)"
  // eventKey={li.link}

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fluid
        className="nav-bg"
        variant="dark"
        sticky="top"
      >
        {/* 漢堡 */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="order-0"
        />
        {/* Logo */}
        <Navbar.Brand className="mx-auto order-0" as={Link} to="/">
          <img className="nav-logo" src={MainLogo} alt="" />
        </Navbar.Brand>
        {/* 購物車Button */}
        <Nav className="order-lg-3 order-0">
          <Nav.Link as={Link} to="/cart" className="nav-cart hovertest1">
            <NavIcon className="cartico" item="cart" iconstyle="navcart" />
            {getSession?.length > 0 && (
              <div class="nav-counter nav-counter-blue">
                {getSession.length}
              </div>
            )}
            <CartHover123 className="hovertest" getSession={getSession} />
          </Nav.Link>
        </Nav>
        {/* 開合選單 */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* 會員區域 */}
          <Nav className="ml-auto order-lg-2">
            <div className="member">
              <Image
                className="nav-profile-default"
                src={Profile}
                alt=""
                roundedCircle
              />
              <div className="d-flex flex-sm-row flex-lg-column">
                {sessionStorage.getItem('email') ? (
                  <>
                    <Link to="/menber">
                      您好，
                      {sessionStorage.getItem('email')}
                    </Link>
                    <Link to="/logout">登出</Link>
                  </>
                ) : (
                  <div>
                    <Link to="/login">
                      <span>登入 / 註冊</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </Nav>
          {/* 主要選單 */}
          <Nav className="">
            {items.map((li, i) => {
              return (
                <Nav.Link
                  as={Link}
                  to={li.link}
                  key={li.id}
                  className="nav-item"
                >
                  <NavIcon item={li.icon} iconstyle="nav" />
                  <span className="navon">{li.item}</span>
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBar
