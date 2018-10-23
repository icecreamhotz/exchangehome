import React, { Component } from 'react';
import listproperty1 from '../../img/listproperty1.png';
import { dropdown } from '../settings/Dropdown.js';

class Property extends React.Component {
    componentDidMount(){
        dropdown()
    }
    render() {
    return(
        <div class="ui container pt-100 pb-100">
                <div class="ui center aligned text container">
                    <h1>List your property</h1>
                </div>
                <div class="ui grid">
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img src={listproperty1} alt={listproperty1} />
                            </div>
                        </div>
                         <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Professional property consultant by your side</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img src={listproperty1} alt={listproperty1} />
                            </div>
                        </div>
                         <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Integrated with the efficient marketing tools both online and offline</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img src={listproperty1} alt={listproperty1} />
                            </div>
                        </div>
                         <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Global affiliate for the potential investors</div>
                            </h1>
                        </div>
                    </div>
                    <div class="four wide computer eight wide tablet sixteen wide mobile column mt-40">
                        <div class="row">
                            <div class="property-icon">
                                <img src={listproperty1} alt={listproperty1} />
                            </div>
                        </div>
                         <div class="row">
                            <h1 class="ui center aligned header">
                                <div class="sub header">Provide accurate pricing for the fastest sale or rent </div>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="ui center aligned container pt-30">
                    <h1>Please send email to info@witrealty.co or call 0985288637</h1>
                {/* <div class="ui form grid pt-30">
                     <div class="two column row">
                        <div class="left aligned column">
                            <h4>Personnal information</h4>
                        </div>
                        <div class="right aligned column">
                            <h4 class="text-gray">* Please fill in the form below.</h4>
                        </div>
                    </div>
                    <div class="three column row">
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <select class="ui dropdown">
                                        <option value="1" selected>Mr.</option>
                                        <option value="0">Mrs.</option>
                                        <option value="0">Miss.</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Name *" />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Surname *" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="two column row">
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Phone *" />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Email *" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui divider"></div>
                    <div class="row">
                        <div class="left aligned one column">
                            <h4>Details about Real estate.</h4>
                            <h4 class="text-gray">Types for publishing.</h4>
                        </div>
                    </div>
                    <div class="row pl-15">
                        <div class="ui form">
                            <div class="inline fields">
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden" />
                                    <label>Sell</label>
                                </div>
                                </div>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden" />
                                    <label>Rent</label>
                                </div>
                                </div>
                                <div class="field">
                                <div class="ui radio checkbox">
                                    <input type="radio" name="fruit" tabindex="0" class="hidden" />
                                    <label>Sell & Rent</label>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="two column row">
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <select class="ui dropdown">
                                        <option value="1" selected>Mr.</option>
                                        <option value="0">Mrs.</option>
                                        <option value="0">Miss.</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Name *" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="two column row">
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Name *" />
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="ui form">
                                <div class="field">
                                    <input type="text" placeholder="Name *" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui fluid action input">
                                <input type="text" placeholder="Search..." />
                                <div class="ui button"><i class="search icon"></i> Search</div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <h4 class="text-gray">Number of bedrooms</h4>
                        </div>
                    </div>
                    <div class="three column row">
                        <div class="column">
                            <button class="ui active button">
                                Studio
                            </button>
                        </div>
                        <div class="column">
                            <div class="ui buttons">
                                <button class="ui button">1</button>
                                <button class="ui button">2</button>
                                <button class="ui button">3</button>
                                <button class="ui button">4</button>
                                <button class="ui button">5</button>
                            </div>
                        </div>
                        <div class="right aligned column">
                            <button class="ui active button">
                                Penthouse
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <h4 class="text-gray">Number of bathrooms</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="column">
                            <div class="ui buttons">
                                <button class="ui button">1</button>
                                <button class="ui button">2</button>
                                <button class="ui button">3</button>
                                <button class="ui button">4</button>
                                <button class="ui button">5</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="seven wide column">
                            <div class="ui form">
                                <div class="ui right labeled input">
                                    <input type="text" placeholder="Enter weight.." />
                                    <div class="ui basic label" style={{borderLeft:'none',}}>
                                        bath
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="ui fluid input">
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div class="center aligned row">
                        <div class="column">
                            <button class="ui yellow button">Send</button>
                        </div>
                    </div>
                </div>  */}
            </div>
        </div>
    )
    }

}
export default Property