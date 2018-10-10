import React, { Component } from 'react';
import logo from '../img/logo.svg';
import { NavLink } from "react-router-dom";
 import {withRouter} from 'react-router-dom';


class Header extends React.Component {
    render() {
      const { match, location, history } = this.props;
      const bgNavbar = (this.props.location !== '/' ? 'black' : 'transparent')
      const fontColorNavbar = (this.props.location === '/' ? 'black' : 'white')
      return (
        <div>
          <div class="ui inverted navbartop secondary pointing menu fixed-top" style={{backgroundColor:bgNavbar, color:fontColorNavbar, borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
            <a class="item">
              <img src={logo} alt={logo} />
            </a>
            <a class="active item">
              <NavLink to="/">Home</NavLink>
            </a>
            <a class="item">
              <NavLink to="/rent">Rent</NavLink>
            </a>
            <a class="item">
              <NavLink to="/property">List your Property</NavLink>
            </a>
            <a class="item">
              <NavLink to="/news">New & Articles</NavLink>
            </a>
            <a class="item">
              <NavLink to="/webboard">Webboard</NavLink>
            </a>
            <a class="item">
              <NavLink to="/about">About & Services</NavLink>
            </a>
            <a class="item">
              <NavLink to="/contract">Contact us</NavLink>
            </a>
            <div class="right menu">
              <a class="item">
                Call.<span class="tel-navbar" style={{color:fontColorNavbar}}> 05.555.5555</span>
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
            <a class="item">
              Home
            </a>
            <a class="item">
              Rent
            </a>
            <a class="item">
              List your Property
            </a>
            <a class="item">
              New & Articles
            </a>
            <a class="item">
              Webboard
            </a>
            <a class="item">
              About & Services
            </a>
            <a class="item">
              Contact us
            </a>
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

  

const ShowTheLocationWithRouter = withRouter(Header);


export default Header;