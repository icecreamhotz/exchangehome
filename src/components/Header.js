import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { NavLink , withRouter } from "react-router-dom";


class Header extends React.Component {
    render() {
      const { match, location, history } = this.props
      let classHeader = "ui navbartop inverted secondary pointing menu "
      const bgNavbar = (location.pathname === '/' ? classHeader + 'fixed-top home' : classHeader + 'fixed-top article')
      const fontColorNavbar = (location.pathname === '/' ? 'black' : 'white')
      return (
        <div>
          <div className={bgNavbar} style={{borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
            <a class="item">
              <img src={logo} alt={logo} />
            </a>
            <NavLink exact to="/" className={"item"} activeClassname='active'>Home</NavLink>
            <NavLink to="/rent" className={"item"} activeClassname='active'>Rent</NavLink>
            <NavLink to="/property" className={"item"} activeClassname='active'>List your Property</NavLink>
            <NavLink to="/article" className={"item"} activeClassname='active'>New & Articles</NavLink>
            <NavLink to="/webboard" className={"item"} activeClassname='active'>Webboard</NavLink>
            <NavLink to="/about" className={"item"} activeClassname='active'>About & Services</NavLink>
            <NavLink to="/contact" className={"item"} activeClassname='active'>Contact us</NavLink>
            <div class="right menu">
              <a class="item">
                Call.<span class="tel-navbar"> 05.555.5555</span>
              </a>
              <a class="launch icon item sidebar-toggle">
                <i class="sidebar icon"></i>
              </a>
              <a class="item">
                Thai
              </a>
            </div>
          </div>
          <div class="ui sidebar inverted vertical menu">
            <NavLink exact to="/" className={"item"} activeClassname='active'>Home</NavLink>
            <NavLink to="/rent" className={"item"} activeClassname='active'>Rent</NavLink>
            <NavLink to="/property" className={"item"} activeClassname='active'>List your Property</NavLink>
            <NavLink to="/article" className={"item"} activeClassname='active'>New & Articles</NavLink>
            <NavLink to="/webboard" className={"item"} activeClassname='active'>Webboard</NavLink>
            <NavLink to="/about" className={"item"} activeClassname='active'>About & Services</NavLink>
            <NavLink to="/contact" className={"item"} activeClassname='active'>Contact us</NavLink>
            <div class="ui selection dropdown language-choose">
              <i class="dropdown icon"></i>
              <div class="default text">Language</div>
              <div class="menu">
                <div class="item" data-value="1">English</div>
                <div class="item" data-value="0">Thai</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default withRouter(Header);