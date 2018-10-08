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
  constructor(props) {
    super(props)
    this.state = {
      responsive: false
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ responsive: !this.state.responsive })
  }

  render() {
    const navbartop = 'ui inverted navbartop secondary pointing menu'
    const isResponsive = this.state.responsive ? ' responsive' : ''
    let responsiveIstrue = navbartop + isResponsive
    return (
      <div class="ui inverted segment fixed-top" style={{ borderRadius: '0px', backgroundColor: 'transparent', border: 'none' }}>
        <div className={responsiveIstrue} style={{ borderLeft: '0', borderRight: '0', borderTop: '0', borderColor: 'white' }} id="navbartop">
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
              Call.<span style={{ color: 'white', marginLeft: '5px', fontSize: '1.2rem', lineHeight: '1.0' }}> 05.555.5555</span>
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
  render() {
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
              <select name="country" class="ui search selection dropdown ml-10">
                <option value="" selected>Codominium</option>
                <option>Townhouse</option>
                <option>All</option>
                <option>Singlehouse</option>
                <option>Land</option>
              </select>
            </div>
            <div class="two wide computer fourteen wide tablet fourteen wide mobile column">
              <select name="country" class="ui search selection dropdown ml-10">
                <option value="">State</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option selected>Wyoming</option>
              </select>
            </div>
            <div class="five wide computer fourteen wide tablet fourteen wide mobile column">
              <div class="ui action input ml-10">
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
      <div class="ui container">
        <div class="ui text">
          <div class="ui mt-50">
            <div class="ui"><h1>We meticulously select the best property especially for you</h1></div>
            <div class="ui mt-25">Get updated news about all property types including condo, townhouse, apartment, service apartment, and estate</div>
          </div>
        </div>
        <div class="ui three column stackable grid mt-25 left">
          <div class="column left aligned">
            <div class="ui card">
                <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
                >
                  <div class="item"><img src={condo1} alt={condo1}/></div>
                  <div class="item"><img src={condo2} alt={condo2}/></div>
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
          <div class="column left aligned">
            <div class="ui card">
            <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
                >
                  <div class="item"><img src={condo2} alt={condo2}/></div>
                  <div class="item"><img src={condo1} alt={condo1}/></div>
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
          <div class="column left aligned">
            <div class="ui card">
            <OwlCarousel
                className="owl-theme owl-carousel owl-demo"
                items={1}
                >
                  <div class="item"><img src={condo1} alt={condo1}/></div>
                  <div class="item"><img src={condo2} alt={condo2}/></div>
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
