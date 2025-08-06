'use client';
import React from 'react';
const ErrorPage = ({error,reset}) => {
  return ( 
    <div>
      <h1>
        Error : {error.message} 
      </h1>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
   );
}
 
export default ErrorPage;