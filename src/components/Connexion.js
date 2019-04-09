import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {

    state = {
        pseudo: '',
        goToChat: false
    }

    //Modif pseudo
    handleChange = event => {
        const pseudo = event.target.value
        this.setState({ pseudo })
    }

    //Si soumission, vrai
    handleSubmit = event => {
        event.preventDefault()
        this.setState({ goToChat: true })
    }
    
    render() {

        //Redirection si soumission
        if(this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return (
            <div className="connexionBox">

            <form className="connexion" onSubmit={this.handleSubmit}>
            
                <input 
                    value={this.state.pseudo} 
                    onChange={this.handleChange} 
                    placeholder="Pseudo" 
                    type="text" 
                    required
                />
                <button type="submit">GO</button>

            </form>
            
            </div>
        )
    }
}

export default Connexion