import React from 'react';
import ReactDOM from 'react-dom';
console.log('app.js is running');

// JSX - Javascript XML
var template = <p>this is JSX from app.js</p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);