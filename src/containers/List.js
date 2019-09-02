import React from 'react'

import MUIList from '@material-ui/core/List'

import ListItem from '../components/ListItem'

const List = props => {
  const { onTaskCheck } = props
  return (
    <MUIList>
      {props.tasks.map((task, index) => {
        return (
          <ListItem
            key={`index-${index}`}
            task={task}
            onChange={onTaskCheck}
          />
        )
      })}
    </MUIList>
  )
}

export default List
