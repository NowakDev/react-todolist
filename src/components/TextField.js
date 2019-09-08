import React from 'react'

import MUITextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'orange',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderRadius: 30,
        margin: 5
      },
      '&:hover fieldset': {
        borderColor: 'orange',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'orange',
      },
    },
  },
})(MUITextField);

const TextField = props => {
  const { value, handleChange, style } = props
  return (
    <CssTextField
      style={style}
      autoFocus={true}
      label="Type your task here..."
      value={value}
      multiline
      onChange={handleChange}
      variant="outlined"
    />
  )
}

export default TextField
