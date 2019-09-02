import React from 'react';
import logo from './logo.svg';
import './App.css';
import Humain from './Humain';


class Student extends Humain {
constructor() {
  super()
  this.name =""
  this.job =""
  this.skills =[]
}
}
  

const me = new Student();
me.getJob("Web developper");
me.learnNewSkill("React");
me.learnNewSkill("jaVa");
me.learnNewSkill("android");

me.forgetSkill("React");
me.leaveJob();



function App() {
  return ( <
    div className = "App" >
    <
    header className = "App-header" >
    <
    img src = {
      logo
    }
    className = "App-logo"
    alt = "logo" / >
    <
    p >
    Edit < code > src / App.js < /code> and save to reload. <
    /p> <
    a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React <
    /a> <
    /header> <
    /div>
  );
}

export default App;