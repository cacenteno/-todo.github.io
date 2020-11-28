import React from 'react'
// import axios from "axios"
import { Formik, Form, } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const signUpSchema = Yup.object({
  first_name: Yup.string().required("First name is required."),
  last_name: Yup.string().required("Last name is required."),
  email: Yup.string().email("Email must be valid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password is too short.")
})

class SignUp extends React.Component {
  render() {
    return (
      <Formik initialValues={
        { first_name: '', 
          last_name: '',
          email: "",
          password: "" }} 
          validationSchema={signUpSchema}
          onSubmit={async(values, {setSubmitting, resetForm})=>{
            setSubmitting(true);
            const {data} = await axios.post("https://centenoacademy.org/api/signup", values, {headers:{"Content-Type": "application/json"}}).then(data=>{
              console.log(data.status)
              this.props.history.push("/login")
            })
          }}
          >
        {
          props => (
            <form className="col-sm-5 mx-auto mt-4" method="post" onSubmit={props.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first_name">First name<span className="text-danger">*</span></label>
                <input className="form-control" type="text" name="first_name" placeholder="First Name" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.first_name} />
                <span className="text-danger">{(props.touched.first_name && props.errors.first_name) ? props.errors.first_name : null}</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Last name<span className="text-danger">*</span></label>
                <input className="form-control" type="text" name="last_name" placeholder="Doe" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.last_name} />
                <span className="text-danger">{(props.touched.last_name && props.errors.last_name) ? props.errors.last_name : null}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email<span className="text-danger">*</span></label>
                <input className="form-control" type="text" name="email" placeholder="example@example.com" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} autoComplete="new-password"/>
                <span className="text-danger">{props.touched.email &&  props.errors.email ? props.errors.email : null}</span>
              </div>
              <div className="form-group">
                <label htmlFor="">Password<span className="text-danger">*</span></label>
                <input className="form-control" type="password" name="password" placeholder="Password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password} autoComplete="new-password"/>
                <span className="text-danger">{props.touched.password &&  props.errors.password ? props.errors.password : null}</span>
              </div>
              <div className="text-center mt-4">
                <button className="btn btn-info btn-lg text-white" disabled={props.isSubmitting}>Sign Up</button>
              </div>
              {/* {JSON.stringify( props.errors)} */}
            </form>)
        }
      </Formik>
    )
  }
}

export default SignUp
