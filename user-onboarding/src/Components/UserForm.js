import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form onSubmit={onSubmit}>
      <div >
        <h2>Add a User</h2>

        {/* initial disable */}
        <button disabled={disabled}>submit</button>

        <div >
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.agreed}</div>
        </div>
      </div>

      <div >
        <h4>Enter Info</h4>

     
        <label>First Name&nbsp;
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>

        <label>Last Name&nbsp;
          <input
            value={values.last_name}
            onChange={onChange}
            name='last_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

      <div>
        <label>Accept Terms of Service
          <input
            type="checkbox"
            name="agreed"
            onChange={onChange}
            checked={values.tos}
          />
        </label>


        
    </div>

      </div>
    </form>
  )
}

