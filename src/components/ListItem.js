import React from 'react'

import MUIListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider'

const styles = {
  divider: {
    height: 28,
    margin: '4px 10px',
  }
}

const ListItem = props => {
  const { handleToggle, onChange, task } = props
  return (
    <MUIListItem style={{ border: '1px solid black', width: '100%', margin: '5px' }} onClick={handleToggle}>
      <ListItemIcon>
        <IconButton aria-label="comments">
          <EditIcon />
        </IconButton>
      </ListItemIcon>
      <Divider style={styles.divider} orientation='vertical' />
      <ListItemText primary={task.text} secondary={task.timeStamp} />
      <Divider style={styles.divider} orientation='vertical' />
      <ListItemIcon>
        <Checkbox
          onChange={onChange}
        />
      </ListItemIcon>
    </MUIListItem>
  )
}

export default ListItem
