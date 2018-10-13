import React, {Component } from 'react';
import condo1 from '../../img/condo1.jpg';
import * as $ from 'jquery';

window.$ = window.jQuery = require('jquery')

require('semantic-ui/js/semantic.min.js')

class Contact extends React.Component {
    componentDidMount(){       
        $('.ui.menu a.item').on('click', function() {   
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active'); 
        })
    }
    render() {
        return(
            <div class="ui container pb-100">
                <div class="ui center aligned text container">
                    <h1>CONTACT US</h1> 
                    <h1 class="ui header">
                        <div class="sub header">COMPANY NAME</div>
                    </h1>
                </div>
                <div class="ui grid pt-50">
                    <div class="ui black three item menu">
                        <a class="item active">Editorials</a>
                        <a class="item">Reviews</a>
                        <a class="item">Upcoming Events</a>
                    </div>
                </div>
                <div class="ui column grid pt-30">
                    <div class="ui six wide computer column">
                        <div class="row">
                            <h4>Call : (66)2-688-7555</h4>
                            <h4>Call : (66)2-688-7555</h4>
                            <h4>Call : (66)2-688-7555</h4>
                            <h4>Call : (66)2-688-7555</h4>
                            <h4>Call : (66)2-688-7555</h4>
                            <h4>Call : (66)2-688-7555</h4>
                        </div>
                          <div class="row pt-20">
                            <h4>location map</h4>
                            <img src={condo1} alt={condo1} style={{ maxWidth: '100%' }} />
                        </div>
                    </div>
                    <div class="ui centered aligned eight wide computer column grid">
                        <div class="row">
                            <h3 class="ui header">
                                To contact us please use the form below
                                <div class="sub header">*Please fill in the information</div>
                            </h3>
                        </div>
                        <div class="row">
                            <div class="ui form">
                            <div class="field">
                                <input type="text" placeholder="placeholder"/>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="ui form">
                            <div class="field">
                                <input type="text" placeholder="placeholder"/>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="ui form">
                            <div class="field">
                                <input type="text" placeholder="placeholder"/>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="ui form">
                            <div class="field">
                                <input type="text" placeholder="placeholder"/>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="ui form">
                            <div class="field">
                                 <textarea ></textarea>
                            </div>
                            </div>
                        </div>
                        <button class="ui secondary button">
                            Sbumit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact