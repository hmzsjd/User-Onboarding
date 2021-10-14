
import './App.css';
import React, { useState, useEffect } from 'react'
import UserForm from './Components/UserForm'
import User from './Components/User'
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema'; 


const initialFormValues = {
  // text
  first_name: '',
  last_name: '',  
  email: '',

  // password
  password: '',

  // check
  agreed: false,
}
const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  agreed: false
}

const initialUsers = []
const initialDisabled = true





function App() {

  const [user, setUser] = useState(initialUsers)          // user arrays
  const [formValues, setFormValues] = useState(initialFormValues) // form data
  const [formErrors, setFormErrors] = useState(initialFormErrors) // error messages
  const [disabled, setDisabled] = useState(initialDisabled)       // submit button

  


  const postNewUser = newUser => {
  
  
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUser([res.data, ...user]);
        console.log(res);
      }).catch(err => {
        console.error(err);
      }).finally(() => {
        setFormValues(initialFormValues);
      })
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
 
    console.log(newUser);
    postNewUser(newUser);
  }

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUser(res.data.data);
      }).catch(err => console.error(err))
  }, [])


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className="App">

      <h1>User Onboarding App</h1>
      
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {user.map(user => (
        <User user={user} key={user.id} />
      ))}
      

    </div>
  );
}

export default App;
