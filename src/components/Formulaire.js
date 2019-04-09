import React, { Component } from 'react'

export default class Formulaire extends Component {

  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    const { addMessage, pseudo, length } = this.props

    const message = {
      pseudo,
      message: this.state.message
    }

    addMessage(message)

    //Reset
    this.setState({ message: '', length })
  }

  handleChange = event => {
    const message = event.target.value
    const length = this.props.length - message.length
    this.setState({ message, length })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.createMessage()
  }

  handleKeyUp = event => {
    if(event.key === 'Enter'){
      this.createMessage()
    }
  }

  render() {
    return (
        
        <form className="form" onSubmit={this.handleSubmit}>
        
            <textarea 
              onChange={this.handleChange}
              onKeyUp={this.handleKeyUp} 
              value={this.state.message}
              required 
              maxLength={this.props.length} />
            <div className="info">
                {this.state.length}
            </div>
            <button type="submit">Envoyer</button>

        </form>
    )
  }
}
