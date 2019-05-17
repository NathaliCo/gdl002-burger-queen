import React, { Component } from 'react';
import './Command.css';
import ButtonWaiter from './ButtonWaiter';


class AddCommand extends Component {
    constructor() {
        super();
        this.state = {
            client: " ",
            command: [],
        }
        this.clientName = this.clientName.bind(this);
    }
    Eraser() {
        document.getElementsByClassName("commands")[0].innerHTML = " ";
        document.getElementsByClassName('total')[0].innerHTML = " ";
    }

    AddCommand = () => {
        let id = Date.now();
        this.setState({

        })

        console.log(this.state.command)
    }

    clientName(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state.client);
    }


    render() {
        return (
            <div>
                <div className="command">
                    <p className="order">Order</p>
                    <div className="selectWaiter">Select Waiter<ButtonWaiter /></div>
                    <p className="actualWaiter"></p>
                    <div className="commands"></div>
                    <button className="eraser btn btn-secondary" onClick={this.Eraser}>Delete</button>
                </div>
                <h2 className="total"></h2>
                <div>
                    <label>
                        Client Name:
        <input type="text" name="client" onChange={this.clientName} />
                    </label>
                </div>

            </div>
        )
    }
}


export default AddCommand


