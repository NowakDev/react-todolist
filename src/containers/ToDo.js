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
    paddingTop: 5,
    minHeight: '97vh',
    width: '96%',
    maxWidth: 1000
  },
  div: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: document.body.clientWidth < 500 ? 'wrap' : '',
    justifyContent: 'center',
    width: '90%'
  },
  textField: {
    borderColor: 'orange',
    margin: '10px',
    width: '100%'
  },
  span: {
    fontSize: 50,
    color: 'orange'
  },
  listDiv: {
    width: '90%',
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

  toggleDoneTask = (task, index) => {
    const { tasks } = this.state
    const checked = tasks.filter(elem => elem === task)
    checked[0].done = !checked[0].done
    this.setState({
      tasks: [...tasks]
    }, () => console.log(this.state)
    )
  }

  render() {

    const { task, tasks } = this.state
    const { box, div, textField, span, listDiv } = styles

    return (
      <Box style={box} boxShadow={3}>
        <Typography variant='h4'>
          Your
        <span style={span}>
            <strong>To-Do</strong>
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
            toggleDoneTask={this.toggleDoneTask}
          />
        </div>
      </Box>
    )
  }
}

export default ToDo
