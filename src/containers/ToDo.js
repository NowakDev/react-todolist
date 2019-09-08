import React from 'react'

import TextField from '../components/TextField'
import { Box, Typography } from '@material-ui/core'

import Button from '../components/Button'
import MuiButton from '@material-ui/core/Button'
import TrashButton from '../components/TrashButton'
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
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  },
  div: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: document.body.clientWidth < 500 ? 'wrap' : '',
    justifyContent: 'center',
    width: '90%',
  },
  filters: {
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    borderColor: 'orange',
    marginRight: '10px',
    width: '100%'
  },
  span: {
    fontSize: 50,
    color: 'orange'
  },
  listDiv: {
    marginTop: 10,
    textAlign: 'center',
    width: '90%',
  }
}

class ToDo extends React.Component {
  state = {
    tasks: [],
    task: ''
  }

  componentDidMount() {
    this.getFromLocalStorage()
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value.trim() ?
        event.target.value
        :
        event.target.value.trim()
    })
  }

  handleOnClick = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const { task } = this.state
    const date = new Date()
    if (task) {
      this.setState({
        tasks: tasks.concat({
          text: task,
          timeStamp: `${date.toDateString()} ${date.toTimeString().substring(0, 8)}`,
          done: false
        }),
        task: ''
      }, () => this.saveToLocalStorage())
    }
  }

  saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  getFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    if (tasks) {
      this.setState({
        tasks: tasks
      })
    }
  }

  toggleDoneTask = (task) => {
    const { tasks } = this.state
    const checked = tasks.filter(elem => elem === task)
    checked[0].done = !checked[0].done
    this.setState({
      tasks: [...tasks]
    }, () => this.saveToLocalStorage()
    )
  }

  showDoneTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const doneTasks = tasks.filter(task => task.done === true)
    this.setState({
      tasks: doneTasks
    })
  }

  showToDoTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const toDoTasks = tasks.filter(task => task.done === false)
    this.setState({
      tasks: toDoTasks
    })
  }

  showAllTasks = () => {
    this.getFromLocalStorage()
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
          <Box
            style={styles.filters}
            boxShadow={1}
          >
            <Typography
              variant='h5'>List of your tasks:
            </Typography>
            <div style={styles.buttons}>
              <MuiButton onClick={this.showAllTasks}>All</MuiButton>
              <MuiButton onClick={this.showDoneTasks}>Done</MuiButton>
              <MuiButton onClick={this.showToDoTasks}>To-do</MuiButton>
              <TrashButton />
            </div>
          </Box>
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
