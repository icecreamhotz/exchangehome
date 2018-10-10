import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div class="ui">
                <div class="ui fluid bg-blackpale pt-40 pb-80">
                <div class="ui container left aligned grid">
                    <div class="row">
                        <div class="five wide column text-gray">
                            <h5>Currency</h5>
                            <select class="ui dropdown">
                                <option value="">Gender</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                            <h5>Measurement area</h5>
                            <select class="ui dropdown">
                                <option value="">Gender</option>
                                <option value="1">Male</option>
                                <option value="0">Female</option>
                            </select>
                        </div>
                        <div class="three wide column border-top-container mr-30 pt-30">
                            <h5 class="text-gray">Property Search</h5>
                            <div class="ui list text-white pt-20">
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                            </div>
                        </div>
                        <div class="three wide column left aligned border-top-container mr-30 pt-30">
                            <h5 class="text-gray">Property Search</h5>
                            <div class="ui list text-white pt-20">
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                                <div class="item">Rent Condo in Laos</div>
                            </div>
                        </div>
                        <div class="two wide column left aligned border-top-container pt-30">
                            <h5 class="text-gray">Other</h5>
                            <div class="ui list text-white pt-20">
                                <div class="item">New & Articles</div>
                                <div class="item">Contact Us</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="ui fluid bg-black">
                    <div class="ui container grid left aligned pt-10 pb-10">
                        <div class="five wide column text-white pt-0 pb-0">
                            <div class="row pt-0 pb-0">
                                <div class="red column">
                                    Follow us
                                </div>
                            </div>
                            <div class="row pt-5 pb-5">
                                <div class="column">
                                <div class="ui horizontal list">
                                    <a class="item">
                                        <i class="facebook icon text-white"></i>
                                    </a>
                                    <a class="item">
                                        <i class="instagram icon"></i>
                                    </a>
                                    <a class="item">
                                        <i class="twitter icon"></i>
                                    </a>
                                    <a class="item">
                                        <i class="linkedin icon"></i>
                                    </a>
                                    <a class="item">
                                        <i class="youtube icon"></i>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="eleven wide column text-white pt-0 pb-0">
                            <div class="row pt-0 pb-0">
                                <div class="column">
                                    Copyright © 2015 Plus Property Co., Ltd. All rights reserved.
                                </div>
                            </div>
                            <div class="row pt-5 pb-5">
                                <div class="column">
                                <div class="ui horizontal list">
                                    <div class="item">
                                        Terms and Conditions
                                    </div>
                                    <div class="item">
                                        |
                                    </div>
                                    <div class="item">
                                        Privacy Policy
                                    </div>
                                    <div class="item">
                                        |
                                    </div>
                                    <div class="item">
                                        Contact Us
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

export default Footer