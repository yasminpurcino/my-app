import React, { Component } from 'react';
import Emoji from './Emoji';

class Calculator2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstNumb: 0, secondNumb: 0,
            result: 0
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
    }




    Add = () => {

        // // criei uma variavel para pegar um elemento em html e transformar para utilizar em js /value pq soh quero o valor  
        // // esse eh o jeito q faz em js 
        // let number1 = parseInt(document.getElementById("num1").value)
        // let number2 = parseInt(document.getElementById("num2").value)
        // let result = number1 + number2
        // document.getElementById("result").value = result

        this.setState({
            result: parseInt(this.state.firstNumb) + parseInt(this.state.secondNumb)
        });

    }
    Sub = () => {
        this.setState({
            result: parseInt(this.state.firstNumb) - parseInt(this.state.secondNumb)
        });

    }

    Div = () => {
        this.setState({
            result: parseInt(this.state.firstNumb) / parseInt(this.state.secondNumb)
        });

    }

    Mul = () => {
        this.setState({
            result: parseInt(this.state.firstNumb) * parseInt(this.state.secondNumb)
        });

    }

    Clear = () => {
        this.setState({
            firstNumb: 0, secondNumb: 0,
            result: 0
        }
        );
    }


    render() {
        return (

            <div>
                <Emoji />
                <br></br>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="firstNumb" value={this.state.firstNumb} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="secondNumb" value={this.state.secondNumb} onChange={this.changeHandler} />
                    </div>
                    <button onClick={this.Add}>Add</button>
                    <button onClick={this.Sub}>Sub</button>
                    <button onClick={this.Div}>Div</button>
                    <button onClick={this.Mul}>Mul</button>
                    <button onClick={this.Clear} > Clear</button>
                    <br></br>
                    <input type="text" name="result" value={this.state.result} readOnly />
                </form>

            </div >
        );
    }
}

export default Calculator2;