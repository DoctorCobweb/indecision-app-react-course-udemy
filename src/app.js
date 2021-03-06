import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// };

// ReactDOM.render((
//   <Layout>
//     <div>
//       <h1>page title</h1>
//       <p>this is inline</p>
//     </div>
//   </Layout>
// ), document.getElementById("app"));

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));