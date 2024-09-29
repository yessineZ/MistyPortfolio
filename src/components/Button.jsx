import React from 'react'

const Button = ({name,isBeam=false,className}) => {
  return (
    <button className={`btn ${className}`}>
        {isBeam && (
            <span className='relative flex h-3 w-3'>
                <span className='btn-ping'></span>
                <span className='btn-ping_dot'></span>
            </span>
        ) }
        {name}

    </button>
  )
}

export default Button