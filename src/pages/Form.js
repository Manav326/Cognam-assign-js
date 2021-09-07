import React from 'react'

import store from "../store";
import FormFields from '../formFields/FormFields'
import Country from '../data/countryData'
import useForm from '../customHooks/useForm';
import useFetch from '../customHooks/useFetch';
import validation from '../validate/validation'
console.log(store);


const Form = (props)=> {
  
  const { data = {}, error, loading } = useFetch('https://api.first.org/data/v1/countries', { method: 'GET' });

  const { handleChange, handleSubmit, values, errors } = useForm(props.submitForm, validation);
  //console.log("values",values);
  
  //console.log("errors",errors);
  return (
    <>
      
    <div>
      <h1>Sign Up Form</h1>
      
      <form onSubmit={handleSubmit}>
        {FormFields.map((field) => <div id={field.id}>
        <label>{field.placeholder}</label>
      <input type={field.type}
            id={field.id}
            name={field.name}
            value={values[field.id]}
            onChange={ handleChange }
            placeholder={field.placeholder}
          ></input>
          {errors[field.id] && <p class="errors">{errors[field.id]}</p>}
        </div>)}
        <label>Country</label>
        {error  && !data && <select>
          <option value="error">"error"</option></select>}
        {loading && !data && <select>
          <option value="loading">loading</option></select>}
        {data && !error &&<select defaultValue='select'  placeholder="Country" id="country"  name="country" onChange= { handleChange }>
          {
            Object.entries(data.data).map(([key, value]) => (
          <option value={key}>
            {value.country}
          </option>
        ))}
        
          </select>}
           {errors['country'] && <p class="errors">{errors['country']}</p>}
        <button type="submit" >SignUp</button>
      </form>
      
    </div>
    </>
  )
}

export default Form

