import React from 'react'
import { useSelector } from 'react-redux';


const FormSuccess = () => {
    const user = useSelector((state) => state.reducer.users)
    const index = user.length - 1;
    return (
        <div>
            <h1>Welcome { user[index].user.values.firstName}</h1>
            
        </div>
    )
}

export default FormSuccess;
