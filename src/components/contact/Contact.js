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
            <div class="ui fluid container pb-100">
                <div class="ui container center aligned">
                    <h1>CONTACT US</h1> 
                    <h1 class="ui header">
                        <div class="sub header">Wit Realy Co.,LTD - Bangkok Branch</div>
                    </h1>
                    <div class="ui grid pt-50">
                        <div class="ui black one item menu">
                            <a class="item active">Editorials</a>
                        </div>
                    </div>
                    <div class="ui center aligned column grid pt-30">
                        <div class="ui form column">
                            <div class="field">
                                <h3 class="ui header">
                                    WRITE TO US
                                    <div class="sub header">*Please fill in the information</div>
                                </h3>
                            </div>
                            <div class="field">
                                    <input type="text" placeholder="Your name*"/>
                            </div>
                            <div class="field">
                                    <input type="text" placeholder="Your email*"/>
                            </div>
                            <div class="field">
                                    <input type="text" placeholder="Subject"/>
                            </div>
                            <div class="field">
                                    <textarea placeholder="Your message"></textarea>
                            </div>
                            <button class="ui secondary button">
                                SEND
                            </button>
                        </div>
                    </div>
                    <h1>ADDRESS</h1>
                    <div class="ui two column grid pt-50">
                        <div class="column noteleft feedtextcontent bg-olive">
                            <div class="ui items">
                                <div class="item">
                                    <div class="content">
                                    <a class="header">Bangkok</a>
                                    <div class="contract description">
                                        <p>Wit Realty Co.,LTD – Bangkok Branch</p>
                                        <p>3/12, Chai-Sanguan Building 1575/1, New Petchburi Rd., Mukkasan, Ratchathevi, Bangkok, 10400</p>
                                        <h5>Tel: +66 985 288 637</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                         <div class="column noteright feedtextcontent bg-wit">
                            <div class="ui items">
                                <div class="item">
                                    <div class="content">
                                    <a class="header">Chiang Mai</a>
                                    <div class="contract description">
                                        <p>Wit Realty Co.,LTD – Chiangmai Branch</p>
                                        <p>169/48, Star Avenue 5, Chiangmai-Hangdong Rd., Hangdong, Chiangmai 50230</p>
                                        <h5>Tel: +66 989 019 658</h5>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Contact