import React from 'react'
import ConnectingButtons from './ConnectingButtons'
import "./introduction.css"
import logo from "../../../public/logo.png"

const Introduction = () => {
  return (
    <div className="introduction_page_container">
    <div className="introduction_page_panel">
      <img src={logo} className="introduction_page_image"></img>
      <ConnectingButtons />
    </div>
  </div>
  )
}

export default Introduction
