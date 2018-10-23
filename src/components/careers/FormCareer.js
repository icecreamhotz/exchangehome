import React, {Component } from 'react';
import bangkok from '../../img/bangkok.png';
import chiangmai from '../../img/chiangmai.png';

class FormCareer extends React.Component {

    render() {
        return(
            <div class="ui fluid container pt-80 pb-80">
                <div class="ui text container">
                    <h1>Please contact us using the information below.</h1>
                    <div class="ui very padded raised segments">
                        <div class="ui very padded green segment">
                            <h2 class="ui header">Wit Realty Co., Ltd.
                                <div class="sub header">info@witrealty.co</div>
                            </h2>
                            <div class="ui middle aligned animated list">
                                <div class="item pt-20">
                                    <img class="ui avatar image" src={bangkok} alt={bangkok} />
                                    <div class="content">
                                        <div class="header">Bangkok
                                            <div class="sub header">+66 985 288 637</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item pt-20">
                                    <img class="ui avatar image" src={chiangmai} alt={chiangmai} />
                                    <div class="content">
                                        <div class="header">Chiang Mai
                                            <div class="sub header">+66 989 019 658</div>
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

export default FormCareer