export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name is required';
  }
  else if (!/^[A-Z]*$/.test(values.firstName)) {
        errors.firstName = 'First Name should contain only capital letters';

  }
  else if (values.firstName.length < 6) {
        errors.firstName = 'Numbers of letters in first Name should be atleast 6';

  }
    
    if (!values.lastName.trim()) {
    errors.lastName = 'Last Name is required';
  }
  

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
    }

    if (!values.phone) {
    errors.phone = 'Mobile Number is required';
    } else if (!/^\d{10}$/.test(values.phone)) {
          errors.phone = 'Mobile Number should contain exactly 10 digits [0-9]';
    }
    else if (values.phone.length !== 10) {
    errors.phone = 'Mobile Number should of exact 10 numerical Digits';
    }
    

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password needs to be 8 characters or more';
  }
  else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(values.password)) {
        errors.password = 'Password must contain minimum eight characters, at least one letter, one number and one special character:';

  }

  if (!values.password2) {
    errors.password2 = 'Confirm Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
    }
    
    if (!values.country) {
    errors.country = 'Country is required';
  } else if (values.country==='error' || values.country==='loading') {
    errors.email = 'Data for country has not been loaded yet';
    }
  return errors;
}