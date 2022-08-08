import React from 'react';
//import './Emoji';
import './App.css';
import Emoji from './Emoji';
//import './PortalDemo';
//import PortalDemo from './PortalDemo';
//import ComponentC from './ComponentC';
//import { UserProvider } from './UserContext';
import Calculator2 from './Calculator2';

// class App extends React.Component {
//     constructor(props) {
  
//       super(props);
      
  
//     }
  
    
//     render() {
//         return (
//         <div className='App'>
//         <UserProvider value="Yasmin">
      
//        <ComponentC />
//        </UserProvider>
//      </div>
//      )
//     }
  
//   }
//   export default App;




//------------------------------------------------

class App extends React.Component {
  constructor(props) {

    super(props);
    //this.emoji = new Emoji(props)

  }

  // render gera o html display na tela 
  render() {
    // eu quero a funcao render q pertence ao objeto emoji (q foi definida na classe Emoji) que pertence a OBJETO App
    //render both components here
    return (
      <>
        <Emoji /><Calculator2 /> 
      </>
    )
  }

}
export default App;

//------------------------------------------------



// class ClickCounter extends React.Component{

//   constructor(props)
//   {
//     super(props)

//     this.state={
//       count:0
//     }
//   }

//   incrementCount=()=>{
//     this.setState(prevState =>{
//       return {count:prevState.count+1}
//     })
//   }

//   render(){
//     const {count}=this.state
//   return (
//     <div>
//       <button onClick={this.incrementCount} > clicked {count} times</button>
//     </div>
  
//   )
// }
// }

// class App extends React.Component{
//   render(){
//   return (
//     <div>
//       <ClickCounter/>
//     </div>
  
//   )
// }
// }
   

// export default App;
//-----------------------------------------------------------
// class PureComp extends React.PureComponent {
//   render() {
//     console.log("PURE")
//     return (
//       <div>
//         Pure Component
//       </div>
//     )
//   }
// }


// class RegularComponent extends React.Component {
//   render() {
//     console.log("REGULAR")
//     return (
//       <div>
//         Regular Component
//       </div>
//     )
//   }
// }



// class ParentCompo extends React.PureComponent {
// constructor(props) {
//   super(props)
  
//   this.state={
//     name:"Bharath"
//   }
  
// }

// componentDidMount()
// {
//   setInterval(()=>{
//     this.setState({
//       name:"Bharath"
//     })
//   },2000)
// }


//   render() {
//     console.log("PARENT")
//     return (
//       <div>
//               Parent Component
//         <RegularComponent name={this.state.name}> </RegularComponent>
//         <PureComp name={this.state.name}> </PureComp>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <ParentCompo/>
//       </div>
//     )
//   }
// }

// export default App;

// export default React.memo(MemoComp)


//---------------------------------------------------------

// function App(props) {
//   return (

//     <h1>Hello, {props.name}</h1>
//   );
// }


// class ComponentOne extends React.Component {

//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert('The component is going to be unmounted');
//   }

//   componentDidMount() {
//     alert('Inside component');
//   }

//    shouldComponentUpdate() {
//     console.log("shouldComponentUpdate")
//    }


//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }

// class App extends React.Component {
//   state = { display: true };
//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>
//           Delete the component
//         </button>
//       </div>
//     );
//   }
// }

// export default function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     console.log(name);
//     event.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }






