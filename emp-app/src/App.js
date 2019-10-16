import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Table from './table';
import Form from './Form';

class App extends Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }


    /**
    * Add Character 
    * */
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

     /**
     * Remove Character 
     * */
    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    /**
     * Update Character 
     * */
    updateCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        console.log('In side App')
        return (

            <div className="App">
                <p> Demo app </p>
                <Table characterData={this.state.characters}
                    removeCharacter={this.removeCharacter}
                    updateCharacter={this.updateCharacter}> This is example of children props
                </Table>
                <br/>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App;
