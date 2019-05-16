import React, { Component } from 'react';
// Your web app's Firebase configuration

class AddCommand extends Component {
    constructor() {
        super();
        this.state = {
            command: []
        }
    }

    // componentWillMount () {
    //     const nameRef = firebase.database().ref().child('object').child('name')
    //     nameRef.on('value', (snapshot => {
    //         this.setState({
    //             name:snapshot.val()
    //         })
    //     }))
    // }
    AddCommand = () => {
        let id = Date.now();
        this.setState({
            command: this.state.command.push({
                waiter: document.getElementsByClassName('theWaiter').value[{
                    client: document.getElementsByClassName('clientName')[0].value[{
                    //     id: id[{
                    //          description: menuObject.description,
                    //         price: menuObject.price,
                    //          type: menuObject.type  
                    //  }]
                    }]
                }]
            })
        })

console.log(this.state.command)
    }

    render() {
        return (
           <div>
                <label>
                    Client Name:
        <input type="text" name="clientName" />
                </label>
                <button onClick={this.AddCommand}>Send command to the chef</button>
                </div>
        )
    }
}


export default AddCommand