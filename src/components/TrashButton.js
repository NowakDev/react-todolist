import React from 'react'

import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const TrashButton = props => {
  return (
    <div>
      <IconButton aria-label="delete">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  )
}

export default TrashButton

