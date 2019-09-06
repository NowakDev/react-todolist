import React from 'react'

import MUIList from '@material-ui/core/List'

import ListItem from '../components/ListItem'

const List = props => {
  const { toggleDoneTask } = props
  return (
    <MUIList>
      {props.tasks.map((task, index) => {
        return (
          <div key={`index-${index}`}>
            <ListItem
              onChange={toggleDoneTask}
              task={task}
              index={index}
            />
          </div>
        )
      })}
    </MUIList>
  )
}

export default List
