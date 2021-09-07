import { useState, useEffect } from 'react';
import store from '../store';
import * as actionTypes from '../action/actionTypes'
import {useDispatch} from 'react-redux'


const useForm = (callback, validate) => {

//     store.subscribe(()=>{
//     console.log("Store Changed!", store.getState());
// }
// );

  

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
      email: '',
      phone: '',
    password:'',
      password2: '',
    country:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
      //console.log(name, value);
  };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit button is clicked");
        setErrors(validate(values));
        setIsSubmitting(true);
        console.log("handleSubmit Store",store.getState());
        console.log("values in useForm", values);
        
        
    }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
       store.dispatch({
                type: actionTypes.SIGN_UP,
          payload: {
            id: new Date().getTime().toString(),
                    user: { values }
                }
            });
            console.log("Store",store.getState());
           callback();   
        };
         
      
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;