import React, { Component } from 'react';

//<input type="text" value={this.state.a} onChange={this.handleChangeA} />
//handleChangeA(event) {
 //event.preventDefault();
 //this.setState({ result: parseInt(this.state.a) + parseInt(this.state.b) });




//import React, { useState, useEffect } from 'react';


class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNumb: 0, secondNumb: 0, result: 0

    }
  }

  Add() {
    // // criei uma variavel para pegar um elemento em html e transformar para utilizar em js /value pq soh quero o valor  
    // // esse eh o jeito q faz em js 
    // let number1 = parseInt(document.getElementById("num1").value)
    // let number2 = parseInt(document.getElementById("num2").value)
    // let result = number1 + number2
    // document.getElementById("result").value = result

    this.setState(prevState => {
      prevState["result"] = 10
      return prevState

    });
  }
  // this.state.result = this.state.firstNumb + this.state.secondNumb


  render() {
    return (


      <div>
        <h1> Calculator</h1>
        <form>
          <input type="text" id="num1" value={this.state.firstNumb}  />
          <input type="text" id="num2" value={this.state.secondNumb}  />
          <button onClick={this.Add}>Add</button>
          {/* <button onClick={Sub}>Sub</button>
            <button onClick={Div}>Div</button>
            <button onClick={Mul}>Mul</button>
        utton onClick={Clear}>Clear</button> */}
          <p  type="text" id="result" value={this.state.result} />
        </form>
      </div>
    )
  }
}

export default Calculator;

