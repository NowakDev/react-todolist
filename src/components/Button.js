import React from 'react'

import { Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const styles = {
  background: 'orange'
}

const Button = props => {
  const { handleOnClick } = props
  return (
    <Fab style={styles} onClick={handleOnClick}>
      <AddIcon />
    </Fab>
  )
}

export default Button
