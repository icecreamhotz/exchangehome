import React, { Component } from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div class="ui fluid background-footer pt-30 pb-30" >
                <div class="ui container four column stackable grid">
                    <div class="five wide computer column left aligned">
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
                    <div class="two wide computer column left aligned border-top-container pt-30">
                        <h5>Property Search</h5>
                        <h6 class="pt-20">Buy Condo in Laos</h6>
                        <h6>Buy Condo in Laos</h6>
                        <h6>Buy Condo in Laos</h6>
                        <h6>Buy Condo in Laos</h6>
                        <h6>Buy Condo in Laos</h6>
                        <h6>Buy Condo in Laos</h6>
                    </div>
                    <div class="one wide computer column"></div>
                    <div class="two wide computer column left aligned border-top-container pt-30">
                        <h5>Property Search</h5>
                        <h6 class="pt-20">Buy Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                    </div>
                    <div class="one wide computer column"></div>
                    <div class="two wide computer column left aligned border-top-container pt-30">
                        <h5>Other</h5>
                        <h6 class="pt-20">Buy Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                        <h6>Rent Condo in Laos</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer