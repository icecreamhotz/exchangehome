import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Header extends React.Component {
    render() {
      return (
        <div>
          <div class="ui inverted navbartop secondary pointing menu fixed-top" style={{ borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
            <a class="item">
              <img src={logo} alt={logo} />
            </a>
            <a class="active item">
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

export default Header;