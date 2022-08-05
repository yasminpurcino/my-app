import React from 'react';



class App1 extends React.Component {
    render() {

        return <h1> Hello, {this.props.name}</h1>
    }
}




// function greetFunction() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   }


//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }

export default App1;