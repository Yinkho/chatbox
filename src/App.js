import React, { Component, createRef } from 'react'
import './App.css'
import './animations.css'
import Formulaire from './components/Formulaire'
import Message from './components/Message';

//Firebase
import base from './base'

//Animation
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class App extends Component {

  state = {
    messages: {},
    pseudo: this.props.match.params.pseudo
  }

  messagesRef = createRef()

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }

  componentDidUpdate() {
    const ref = this.messagesRef.current
    ref.scrollTop = ref.scrollHeight
  }

  addMessage = message => {
    //Copie du state
    const messages = { ... this.state.messages }
    
    //Modification
    messages[`message-${Date.now()}`] = message

    //Suppression d'un message si + de 10 messages
    Object
      .keys(messages)
      .slice(0, -10)
      .forEach(key => {
        messages[key] = null
      })
    
    //Mise à jour du state
    this.setState({ messages })
  }

  isUser = pseudo => pseudo === this.state.pseudo

  render () {

    const messages = Object
      .keys(this.state.messages)
      .map(key => (
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={key}>
          <Message 
            isUser={this.isUser}
            message={this.state.messages[key].message}
            pseudo={this.state.messages[key].pseudo}>
          </Message>
        </CSSTransition>
      ))

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={ this.messagesRef }>
            <TransitionGroup className="message">
              { messages }
            </TransitionGroup>
          </div>
        </div>
        <Formulaire 
          length={140}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
