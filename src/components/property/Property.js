import React, { Component } from 'react';
 import {withRouter} from 'react-router-dom';


 const SomeComponent = withRouter(props => <Property {...props}/>);

class Property extends React.Component {
    render() {
           const { match, location, history } = this.props;

    return(
        <div class="ui text container pt-100 pb-50">
            <h1>You are now at {location.pathname}</h1>
            <div class="ui grid pt-50">
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
                <div class="row">
                    <div class="column">
                        <div class="ui form">
                            <div class="field">
                                <textarea placeholder="More details"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="center aligned row">
                    <div class="column">
                        <button class="ui yellow button">Negative Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
    }

}

const ShowTheLocationWithRouter = withRouter(Property);

export default Property