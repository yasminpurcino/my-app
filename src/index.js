import React from 'react';
import ReactDOM from 'react-dom/client';
//import Calculator2 from './Calculator2';
import './index.css';
import PostForm from './PostForm';
//import Emoji from './Emoji';
import App from './App';
//import ComponentC from './ComponentC';
//import PostList from './PostList';

//import ClickCounter from './ClickCounter';
//import HouverCounter from './HouverCounter';
//import Calculator from './Calculator';
//import App1 from './App1';
//import GreetButton from './greetButton';
//import reportWebVitals from './reportWebVitals';


//reportWebVitals();

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />)

//-------------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// root.render(
//     <React.StrictMode>
//         <ComponentC/>
//     </React.StrictMode>
// )


//--------------------------------------------------------------------



//--------------------------------------------------------------------



// function FragmentDemo() {
//     return (
//         <>
//             <h1> Fragement Demo </h1>
//             <p> It is about Fragment demo </p>
//         </>
//     )
// }

// function Table() {
//     return (
//         <table>
//             <tbody>
//                 <tr>
//                     <Columns />
//                 </tr>
//             </tbody>
//         </table>
//     )
// }

// function Columns() {
//     return (
//         <React.Fragment>
//             <td> Yasmin</td>
//             <td> Purcino </td>
//         </React.Fragment>
//     )
// }

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Table />
//             </div>
//         )
//     }
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);


//----------------------------------------------------

// const element =

//   <div>
//     <h>Hello World!</h>

//     <App1 name="Yasmin" />

//     <App name="Carol" />


// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//   // boolean my_bool=false
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// // Try changing to isLoggedIn={true}:
// //root.render(<Greeting isLoggedIn={false} />);
// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = { isLoggedIn: false };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     // let button;
//     // if (isLoggedIn) {
//     //   button = <LogoutButton onClick={this.handleLogoutClick} />;
//     // } else {
//     //   button = <LoginButton onClick={this.handleLoginClick} />;
//     // }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {isLoggedIn
//           ? <LogoutButton onClick={this.handleLogoutClick} />
//           : <LoginButton onClick={this.handleLoginClick} />
//         }

//       </div>
//     );
//   }
// }

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// //root.render(<LoginControl />);

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showWarning: true}
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState(prevState => ({
//       showWarning: !prevState.showWarning
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     );
//   }
// }

// const root = ReactDOM.createRoot(document.getElementById('root')); 
// root.render(<Page />);





//root.render(<Toggle />);

//   </div>
//root.render(<App />);


// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <FullCommentInfo propitem1={props} />

//   );
// }
// function FullCommentInfo(props) {
//   return <div>
//     <UserInfo propitem={props}></UserInfo>
//   </div>
// }

// function UserInfo(props) {
//   return
//   <div>
//     <Avatar user={props.propitem} />
//     <UserInfoName user={props.author} />
//     <CommentText text1={props.text} />
//     <CommentDate date1={props.date} />
//   </div>
// }

// function Avatar(props) {
//   console.log(props.user.avatarUrl)
//   return <img src={props.user.avatarUrl} alt={props.user.name} />
// }

// function UserInfoName(props) {
//   return <div> {props.user.name} </div>
// }

// function CommentText(props) {
//   return <div> {props.text1} </div>
// }
// function CommentDate(props) {
//   return <div> {formatDate(props.date1)} </div>
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64'
//   }
// };

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author} />
// );


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString}>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList numbers={numbers} />);




// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//   { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ];

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Blog posts={posts} />);


