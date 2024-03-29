import React from 'react'

import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  background: 'orange',
  minWidth: 50,
  width: 50,
  height: 50,
  boxShadow: 'none'
}

const Button = props => {
  const { handleOnClick } = props
  return (
    <Fab
      style={styles}
      onClick={handleOnClick}
    >
      <AddIcon />
    </Fab>
  )
}

export default Button
