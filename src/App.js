import logo from './logo.svg';
import './App.css';
import React,{ Component } from "react";
import MyApp from "./components/myApp";
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
        <MyApp/>
        <Form/>
       
    </>
  );
}

export default App;
