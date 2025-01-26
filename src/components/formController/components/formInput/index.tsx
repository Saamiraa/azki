import React from 'react'

import { Input } from './types'

const FormInput: React.FC<Input> = ({ type, name, id, value, error, onChange, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error[name] && <p>{error[name]}</p>}
    </div>
  )
}

export default FormInput