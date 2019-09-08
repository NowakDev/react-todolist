import React from 'react'

import MUIListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'


const ListItem = props => {
  const { index, onChange, task } = props
  const styles = {
    listItem: {
      margin: '5px 0px',
      borderRadius: 5,
      backgroundColor: task.done ? '#c8df99' : '#eeeeee',
    }
  }

  return (
    <MUIListItem
      dense
      style={styles.listItem}
    >
      <ListItemText
        primary={task.text}
        secondary={task.timeStamp}
      />
      <div
        style={{ alignItems: 'center', display: 'flex', flexFlow: 'column', width: 48 }}
      >
        <ListItemIcon
          style={{ minWidth: 48 }}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemIcon
          style={{ minWidth: 42 }}
        >
          <Checkbox
            onChange={() => onChange(task, index)}
            checked={task.done}
          />
        </ListItemIcon>
      </div>
    </MUIListItem>
  )
}

export default ListItem
