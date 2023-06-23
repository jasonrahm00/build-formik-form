import React from 'react'
// Import useFormik from formik library
import { useFormik } from 'formik'

const messages = {
  required: 'Field required',
  emailFormat: 'Username should be an email',
  success: 'Login Successful',
}

// Validate form fields
// Refactored from formik tutorial https://formik.org/docs/tutorial#validation
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = messages.required
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = messages.emailFormat
  }

  if (!values.password) errors.password = messages.required

  return errors
}

function App() {
  // Add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: () => {
      alert(messages.success)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='emailField'>Username (Email)</label>
        <input
          type='text'
          name='email'
          id='emailField'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id='emailError' className='error'>
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div>
        <label htmlFor='pswField'>Password</label>
        <input
          type='text'
          name='password'
          id='pswField'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id='pswError' className='error'>
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <button type='submit' id='submitBtn'>
        Submit
      </button>
    </form>
  )
}

export default App
