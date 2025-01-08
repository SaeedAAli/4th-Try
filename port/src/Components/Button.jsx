import React from 'react'

function Button() {
    const ButtonHandler  = () =>{
        window.location.href = "Https://Github.com/SaeedAAli";
    };
  return (
    <div>
      <button onClick={ButtonHandler}></button>
    </div>
  )
}

export default Button
