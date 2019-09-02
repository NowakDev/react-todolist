import React from 'react'

import TextField from '../components/TextField'
import { Box } from '@material-ui/core'

import Button from '../components/Button'

const styles = {
  box: {
    alignItems: 'center',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    width: '80%'
  },
  textField: {
    width: '80%',
    margin: '10px'
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

  render() {
    console.log(this.state)
    return (
      <Box style={styles.box}>
        <TextField
          handleChange={this.handleChange}
          style={styles.textField}
          value={this.state.task}
        />
        <Button />
      </Box>
    )
  }
}

export default ToDo
