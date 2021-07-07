import React, { useState } from 'react'
import Cards from 'react-credit-cards'

function PaymentForm() {
  const [inputs, setInputs] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })
  const [focus, setFocus] = useState('')

  //處理每個欄位的變動
  const handelChange = (e) => {
    const newInputs = {
      ...inputs,
      [e.target.name]: e.target.value,
    }
    setInputs(newInputs)
  }

  const handleInputFocus = (e) => {
    setFocus(e.target.name)
  }

  return (
    <div id="PaymentForm">
      <Cards
        cvc={inputs.cvc}
        expiry={inputs.expiry}
        focused={focus}
        name={inputs.name}
        number={inputs.number}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handelChange}
          onClick={handleInputFocus}
        />
        <input
          type="tel"
          name="name"
          placeholder="Card name"
          onChange={handelChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="expiry"
          placeholder="Card expiry"
          onChange={handelChange}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="cvc"
          placeholder="Card cvc"
          onChange={handelChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  )
}

export default PaymentForm

// export default class PaymentForm extends React.Component {
//   state = {
//     cvc: '',
//     expiry: '',
//     focus: '',
//     name: '',
//     number: '',
//   }

//   handleInputFocus = (e) => {
//     this.setState({ focus: e.target.name })
//   }

//   handleInputChange = (e) => {
//     const { name, value } = e.target

//     this.setState({ [name]: value })
//   }

//   render() {
//     return (
//       <div id="PaymentForm">
//         <Cards
//           cvc={this.state.cvc}
//           expiry={this.state.expiry}
//           focused={this.state.focus}
//           name={this.state.name}
//           number={this.state.number}
//         />
//         <form>
//           <input
//             type="tel"
//             name="number"
//             placeholder="Card Number"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="tel"
//             name="name"
//             placeholder="Card name"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="tel"
//             name="expiry"
//             placeholder="Card expiry"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           <input
//             type="tel"
//             name="cvc"
//             placeholder="Card cvc"
//             onChange={this.handleInputChange}
//             onFocus={this.handleInputFocus}
//           />
//           ...
//         </form>
//       </div>
//     )
//   }
// }
