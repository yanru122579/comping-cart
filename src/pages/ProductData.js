import React, { useState, useEffect, useParams } from 'react'
import { withRouter } from 'react-router-dom'

function ProductData(props) {
  const id = props.match.params.pid
  return <div>商品頁{id}</div>
}

export default withRouter(ProductData) //需要使用useRouuter
