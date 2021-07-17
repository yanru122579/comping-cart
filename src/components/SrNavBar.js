// 未完成勿使用
import React, { useState, useEffect } from 'react'
import MainLogo from '../images/logo.svg' //logo檔案
import Profile from '../images/profile.png' //profile檔案
import { Navbar, Nav, Image, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navnfooter.css'
import NavIcon from './NavIcon.js' //icon SVG路徑檔案
import { Link } from 'react-router-dom'
import moment from 'moment'
import $ from 'jquery'
//時間修正

const SrNavBar = (props) => {
  let StartDay = props.today
  let EndDay = props.nextday
  const [navStartTime, setNavStartTime] = useState(props.startTime)
  const [navEndTime, setNavEndTime] = useState(props.endTime)
  //日期判斷
  function resetEndTime() {
    if (!moment(navStartTime).isBefore(navEndTime)) {
      setNavEndTime(moment(navStartTime).add(1, 'days').format('YYYY-MM-DD'))
    }
  }
  //日期自動糾錯
  useEffect(() => {
    resetEndTime() //先做日期確認再設定父層
    props.setstart(navStartTime)
    props.setend(navEndTime)
  }, [navStartTime])

  useEffect(() => {
    if (!moment(EndDay).isBefore(navEndTime)) {
      setNavStartTime(StartDay)
      setNavEndTime(EndDay)
    } else {
      if (!moment(navStartTime).isBefore(navEndTime)) {
        setNavStartTime(
          moment(navEndTime).subtract(1, 'days').format('YYYY-MM-DD')
        )
      }
    }
    // resetStartTime()
    props.setstart(navStartTime)
    props.setend(navEndTime)
  }, [navEndTime])

  //設定Navbar-icon
  // 可以在各自的link中修改
  const items = [
    { item: '找用品', link: '/product', icon: 'product' },
    { item: '找場地', link: '/place', icon: 'event' },
    { item: '找活動', link: '/event', icon: 'place' },
    { item: '找靈感', link: '/discover', icon: 'idea' },
  ]

  let lastScroll = 0

  $(window).scroll(function () {
    const scrollNow = $(this).scrollTop()

    if (lastScroll < scrollNow) {
      $('.nav-bg').addClass('hide')
      $('.search-bar').addClass('hide')
    } else {
      $('.nav-bg').removeClass('hide')
      $('.search-bar').removeClass('hide')
    }
    lastScroll = scrollNow
  })
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        fluid="true"
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
          <Nav.Item className="nav-cart">
            <NavIcon className="cartico" item="cart" iconstyle="navcart" />
          </Nav.Item>
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
                    <Link to="/member">
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
                <Nav.Link as={Link} to={li.link} key={i} className="nav-item">
                  <NavIcon item={li.icon} iconstyle="nav" />
                  <span className="navon">{li.item}</span>
                </Nav.Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="search-bar sticky-top" fluid>
        <Row className="search-area">
          <Col md={3} mx-0 px-0>
            <div className="search-bar-title mx-0">
              <input
                id="keyword"
                className="input in-key"
                type="text"
                placeholder="天幕帳,夏天..."
              />
            </div>
          </Col>
          <Col className="mx-0 px-1" md={2}>
            <input
              id="backtime"
              className="input in-time form-control"
              type="date"
              value={navStartTime}
              min={StartDay}
              placeholder=" "
              onChange={(event) => {
                setNavStartTime(event.target.value)
              }}
            />
          </Col>
          <Col className="mx-0 px-1" md={2}>
            <input
              id="backtime"
              className="input in-time form-control"
              type="date"
              value={navEndTime}
              min={StartDay}
              placeholder=" "
              onChange={(event) => {
                setNavEndTime(event.target.value)
              }}
            />
          </Col>
          <Col md={1}>
            <button className="search-btn">立即搜尋</button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SrNavBar
