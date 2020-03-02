import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Hobbies from "./hobbies/Hobbies";
import Projects from './projects/Projects'
import Contact from "./contact/Contact";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <Hobbies/>
        <Projects/>
        <Contact />
      </div>
    );
  }
}
