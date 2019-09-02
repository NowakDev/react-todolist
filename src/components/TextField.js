import React from 'react'

import MUITextField from '@material-ui/core/TextField'

const TextField = props => {
  const { value, handleChange, style } = props
  return (
    <MUITextField
      style={style}
      label="Type your task here"
      value={value}
      onChange={handleChange}
      margin="normal"
      variant="outlined"
    />
  )
}

export default TextField
