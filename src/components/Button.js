import React from 'react'

import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const Button = props => {
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  )
}

export default Button
