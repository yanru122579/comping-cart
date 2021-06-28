import React from 'react'
import { Route, withRouter, NavLink, Switch, matchPath } from 'react-router-dom'

const CartItemNav = () => {
  return (
    <>
      <div className="cartNavItem">
        <div className="cartNavItemBoxBk">商品租借</div>

        <div className="cartNavItemBoxGy">活動預約</div>

        <div className="cartNavItemBoxGy">場地租借</div>
      </div>

      <Switch>
        <Route exact path={path}>
          <h3>請選擇子分類</h3>
        </Route>
        <Route path={`${path}/:type?/:id?`}>
          <Product />
        </Route>
      </Switch>
    </>
  )
}

export default withRouter(CartItemNav)
