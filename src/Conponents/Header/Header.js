import React from "react";
import "./header.scss";
import Bars from "./Bars";
import Logo from "./Logo";
import OuthLink from "./OuthLink";
import Contact from "./Contact";

export default function Header(){
  return(
    <header>
      <Bars/>
      <Logo/>
      <OuthLink/>
      <Contact/>
    </header>
  )
}