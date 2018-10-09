import React, { Component } from 'react';
import logo from '../img/logo.svg';
import condo1 from '../img/condo1.jpg';
import condo2 from '../img/condo2.jpg';
import './App.css';
import OwlCarousel from 'react-owl-carousel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <ArticleSelection />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="ui inverted navbartop secondary pointing menu fixed-top" style={{ borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
          <a class="item">
            <img src={logo} alt={logo} />
          </a>
          <a class="active item">
            Buy
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
            Buy
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

class Content extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
      classDropdown: 'dropdown-content'
    }

    this.showDropdown = this.clickShowDropdown.bind(this)
  }

  clickShowDropdown() {
    this.setState({ show: !this.state.show })
  }

  render() {
    const showIsOn = this.state.show ? ' show' : ''
    const classNameDropdown = this.state.classDropdown + showIsOn
    return (
      <header class="hero">
        <div class="center-content">
          <h3>A door to your perfect home</h3>
          <h5>We are the expertise in finding the right house for buyers and rental with our outstanding search system.</h5>
          <div class="flex-row">
            <div class="ui buttons">
              <button class="ui button">Buy</button>
              <div class="or"></div>
              <button class="ui positive button">Rent</button>
            </div>
          </div>
          <div class="ui grid centered mt-20">
            <div class="two wide computer fourteen wide tablet fourteen wide mobile column">
              <select name="country" class="ui search selection dropdown">
                <option value="" selected>Condominium</option>
                <option>Townhouse</option>
                <option>All</option>
                <option>Singlehouse</option>
                <option>Land</option>
              </select>
            </div>
            <div class="two wide computer fourteen wide tablet fourteen wide mobile column">
              <button class="ui search selection dropdown icon" onClick={this.showDropdown}>Price<i class="dropdown icon"></i></button>
              <div className={classNameDropdown}>
                <div class="ui form">
                  <div class="ui action fluid input">
                    <div class="column-left-in-dropdown">
                      <span class="text-in-column-dropdown">MIN</span>
                    </div>
                    <input type="text" name="first-name" placeholder="ANY" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}} />
                    <div class="column-left-in-dropdown">
                      <span class="text-in-column-dropdown">THB</span>
                    </div>
                  </div>
                </div>
                <div class="ui form pt-10">
                  <div class="ui action fluid input">
                    <div class="column-left-in-dropdown">
                      <span class="text-in-column-dropdown">MIN</span>
                    </div>
                    <input type="text" name="first-name" placeholder="ANY" style={{borderTopLeftRadius:'0',borderBottomLeftRadius:'0'}} />
                    <div class="column-left-in-dropdown">
                      <span class="text-in-column-dropdown">THB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="five wide computer fourteen wide tablet fourteen wide mobile column">
              <div class="ui action input">
                <input type="text" id="postalCode05" placeholder="Area, BTS & MRT station or Property name" />
                <button class="ui button icon">
                  <i class="search icon"></i>
                  Search
                  </button>
              </div>
            </div>
          </div>
        </div>
      </header>

    )
  }
}

class ArticleSelection extends React.Component {
  render() {
    return (
      <div class="ui">
        <div class="ui text">
          <div class="ui mt-50">
            <div class="ui"><h1>We meticulously select the best property especially for you</h1></div>
            <div class="ui mt-25">Get updated news about all property types including condo, townhouse, apartment, service apartment, and estate</div>
          </div>
        </div>
        <div class="ui grid mt-25 centered">
          <div class="five wide computer five wide tablet sixteen wide mobile column left">
            <div class="ui card centered aligned">
              <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
              >
                <div class="item"><img src={condo1} alt={condo1} /></div>
                <div class="item"><img src={condo2} alt={condo2} /></div>
              </OwlCarousel>
              <div class="content">
                <div class="row">
                  <h3 class="header">Chaing Mai Super Condo</h3>
                </div>
                <div class="row mt-10">
                  <div class="meta">
                    <span class="date">PYNE by Sansiri</span>
                  </div>
                </div>
                <div class="row">
                  <div class="meta">
                    <span class="date">Pathumwan-Phayathai</span>
                  </div>
                </div>
                <div class="row mt-10">
                  ฿ 24,000/mo
                </div>
                <div class="row mt-10">
                  <div class="ui grid">
                    <div class="four wide column">1 BD</div>
                    <div class="four wide column">1 BA</div>
                    <div class="five wide column">39.5 SQM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="five wide computer five wide tablet sixteen wide mobile column left">
            <div class="ui card centered aligned">
              <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
              >
                <div class="item"><img src={condo2} alt={condo2} /></div>
                <div class="item"><img src={condo1} alt={condo1} /></div>
              </OwlCarousel>
              <div class="content">
                <div class="row">
                  <h3 class="header">Chaing Mai Super Condo</h3>
                </div>
                <div class="row mt-10">
                  <div class="meta">
                    <span class="date">PYNE by Sansiri</span>
                  </div>
                </div>
                <div class="row">
                  <div class="meta">
                    <span class="date">Pathumwan-Phayathai</span>
                  </div>
                </div>
                <div class="row mt-10">
                  ฿ 24,000/mo
                </div>
                <div class="row mt-10">
                  <div class="ui grid">
                    <div class="four wide column">1 BD</div>
                    <div class="four wide column">1 BA</div>
                    <div class="five wide column">39.5 SQM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="five wide computer five wide tablet sixteen wide mobile column left">
            <div class="ui card centered aligned">
              <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
              >
                <div class="item"><img src={condo1} alt={condo1} /></div>
                <div class="item"><img src={condo2} alt={condo2} /></div>
              </OwlCarousel>
              <div class="content">
                <div class="row">
                  <h3 class="header">Chaing Mai Super Condo</h3>
                </div>
                <div class="row mt-10">
                  <div class="meta">
                    <span class="date">PYNE by Sansiri</span>
                  </div>
                </div>
                <div class="row">
                  <div class="meta">
                    <span class="date">Pathumwan-Phayathai</span>
                  </div>
                </div>
                <div class="row mt-10">
                  ฿ 24,000/mo
                </div>
                <div class="row mt-10">
                  <div class="ui grid">
                    <div class="four wide column">1 BD</div>
                    <div class="four wide column">1 BA</div>
                    <div class="five wide column">39.5 SQM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui text">
          <div class="ui mt-50">
            <div class="ui inverted">
              <button class="ui inverted secondary button">View All Hot Deal</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
