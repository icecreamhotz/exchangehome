import React, { Component } from 'react';
import condo1 from '../img/condo1.jpg';
import condo2 from '../img/condo2.jpg';
import OwlCarousel from 'react-owl-carousel';

class ArticleSelection extends React.Component {
    render() {
      return (
        <article class="ui pb-50">
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
        </article>
      )
    }
  }

export default ArticleSelection