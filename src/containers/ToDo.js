import React from 'react'

import TextField from '../components/TextField'
import { Box, Typography } from '@material-ui/core'

import Button from '../components/Button'
import List from './List'

const styles = {
  box: {
    alignItems: 'center',
    borderRadius: '5px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    width: '80%'
  },
  div: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '80%'
  },
  textField: {
    borderColor: 'orange',
    margin: '10px',
    width: '100%'
  },
  span: {
    fontSize: 60,
    color: 'orange'
  },
  listDiv: {
    width: '80%',
    marginTop: 50
  }
}

class ToDo extends React.Component {
  state = {
    tasks: [],
    task: ''
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  handleOnClick = () => {
    const { tasks, task } = this.state
    if (task.trim()) {
      const date = new Date()
      this.setState({
        tasks: tasks.concat({
          text: task,
          timeStamp: `${date.toDateString()} ${date.toTimeString().substring(0, 8)}`,
          done: false
        }),
        task: ''
      })
    }
  }

  onTaskCheck = () => {
    const { tasks } = this.state
  }

  render() {
    const { task, tasks } = this.state
    const { box, div, textField, span, listDiv } = styles
    console.log(this.state)
    return (
      <Box style={box} boxShadow={3}>
        <Typography variant='h4'>
          Your
        <span style={span}>
            To-Do
        </span>
          List
        </Typography>
        <div style={div}>
          <TextField
            handleChange={this.handleChange}
            style={textField}
            value={task}
          />
          <Button handleOnClick={this.handleOnClick} />
        </div>
        <div style={listDiv}>
          <List
            tasks={tasks}
            onTaskCheck={this.onTaskCheck}
          />
        </div>
      </Box>
    )
  }
}

export default ToDo
