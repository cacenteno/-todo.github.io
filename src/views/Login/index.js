import axios from 'axios';
import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
//Add validation for sign up 
function Login(props) {
    //Handle Submit
    const loginSchema = Yup.object({
        email: Yup.string().email("Email must be valid").required("Email is required"),
        password: Yup.string().required("Missing password")
    })
    return (
        <Formik initialValues={
            {
                email: "",
                password: ""
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                setSubmitting(true);
                const { data } = await axios.post("https://centenoacademy.org/api/login", values, { headers: { "Content-Type": "application/json" } })
                const todos = await axios.get("https://centenoacademy.org/api/todos", {
                    headers: {
                        "Content-Type": "application/json",
                        "secret-token": data.token
                    }
                })
                props.saveToken(data.token)
                props.setTodos(todos.data.todos)
                props.history.push("/profile")
            }}
        >{props => (
            <form onSubmit={props.handleSubmit}>
                <div className="col-sm-5 mx-auto py-5 px-4">
                    <h2 className="text-center mb-3">Log In</h2>
                    <div className="form-group">
                        <input type="text" name="email" className="form-control mb-1" placeholder="Email" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.email} />
                        <span className="text-danger">{(props.touched.email && props.errors.email) ? props.errors.email : null}</span>
                    </div>
                    <div className="form-group">
                    <input type="password" name="password" className="form-control mb-1" placeholder="Password" onChange={props.handleChange} onBlur={props.handleBlur} value={props.values.password}/>
                    <span className="text-danger">{(props.touched.password && props.errors.password) ? props.errors.password : null}</span>
                    </div>
                    <div className="mx-auto px-4">
                        <button className="btn btl-lg btn-info">Log In</button>
                    </div>
                </div>
                <code>
                    <pre>{JSON.stringify(props.values)}</pre>
                </code>
            </form>
        )}
       </Formik>)
}

export default Login
