import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { withFormik, Form, Field, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import Swal from 'sweetalert2'

const CartModalForm = (props) => {
  const { setModalShow } = props
  const errMsg = {
    color: 'red',
    fontSize: '12px',
    paddingLeft: '5px',
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          請填寫信用卡資訊
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          //先預設表格為空值
          initialValues={{
            cardNum: '',
            cardName: '',
            cardDate: '',
            cardCheck: '',
          }}
          validationSchema={Yup.object({
            cardNum: Yup.number()
              .typeError('內容必為數字')

              .required('必填'),
            cardName: Yup.string().required('必填'),
            cardDate: Yup.number()
              .typeError('內容必為數字')

              .required('必填'),
            cardCheck: Yup.number()
              .typeError('內容必為數字')

              .required('必填'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setSubmitting(false)
              setModalShow(false)
              Swal.fire('認證成功!', '您的信用卡成功付款!', 'success')
            }, 400)
          }}
        >
          {({ isSubmitting }) => (
            <div className="cartMain">
              <Form className="cartInfoMenber ">
                <label>卡號:</label>
                <ErrorMessage name="cardNum" style={{ color: 'red' }} />
                <Field type="text" name="cardNum" maxlength="16" />
                <br />

                <label>持卡人:</label>
                <ErrorMessage name="cardName" />
                <Field type="text" name="cardName" />
                <br />
                <label>有效日期:</label>
                <ErrorMessage name="cardDate" />
                <Field type="text" name="cardDate" maxlength="4" />
                <br />
                <label>驗證碼:</label>
                <ErrorMessage name="cardCheck" />
                <Field type="text" name="cardCheck" maxlength="3" />
                <br />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
                <br />
              </Form>
            </div>
          )}
        </Formik>
        {/* <div className="cartMain col-12">
          <form action="">
            <div>
              <img src="http://fakeimg.pl/300x200/282828/EAE0D0/" alt="" />
            </div>
            <label htmlFor="">卡號:</label>
            <br />
            <input type="text" placeholder="卡號" />
            <br />
            <label htmlFor="">持卡人姓名:</label>
            <br />
            <input type="text" placeholder="持卡人姓名" />
            <br />
            <label htmlFor="">有效日期:</label>
            <br />
            <input type="text" style={{ width: '180px' }} placeholder="MM/YY" />
            <br />
            <label htmlFor="">驗證碼:</label>
            <br />
            <input type="text" style={{ width: '180px' }} placeholder="XXX" />
            <br />
          </form>
        </div> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>關閉</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CartModalForm
