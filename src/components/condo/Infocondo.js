import React , { Component } from 'react';
import axios from 'axios';
import bedroom from '../../img/bed.png';
import bathroom from '../../img/bathroom.png';
import condo from '../../img/condo.png';
import logo from '../../img/logo.svg';
import ImageGallery from 'react-image-gallery';
import Loading from '../settings/Loading.js';


class Infocondo extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        condodata: [],
        imgna: [],
        loaded: false,
        gallaryphoto: []
      }

      this.checkTypeID = this.checkTypeID.bind(this)
      this.fetchCondoData = this.fetchCondoData.bind(this)
    }


    async componentDidMount() {
        await this.fetchCondoData()
    }

    fetchCondoData = () => {
        axios.get(`http://www.witrealty.co/api/estates/${this.props.match.params.id}`).then((response) => {
            this.setState({condodata: response.data[0]}, () => this.setState({imgna: this.state.condodata[0].imgs,loading: false}))

            let setimg = []
            for(let getimg of this.state.imgna) {
                let arrimg = {
                    original: atob(getimg.img_base),
                    thumbnail: atob(getimg.img_base)
                }
                setimg.push(arrimg)
            }
            this.setState({imgna: setimg, loaded: true})
        })
    }

    checkTypeID(type_id) {
        let typename
        if(type_id === "1") typename = "Condominium"
        if(type_id === "2") typename = "Townhouse"
        if(type_id === "3") typename = "Singlehouse"
        if(type_id === "4") typename = "Land House"
        if(type_id === "5") typename = "Detached House"
        if(type_id === "6") typename = "Commercial Building"
        if(type_id === "7") typename = "Hotel & Resort"
        return typename
    }


    render() {
        const { loaded } = this.state
        const sendLoaded = (loaded ? true : false)
        return(
            <div class="ui fluid pt-50 pb-30">
                <Loading loaded={sendLoaded} />
                <div class="ui center aligned one column grid">
                    <div class="column">
                        <ImageGallery items={this.state.imgna}  />
                    </div>
                    <div class="column">
                        <h3 class="ui header">
                            Information
                        </h3>
                    </div>
                </div>
                <div class="ui text container pt-50 pb-50">
                    <div class="ui one column grid">
                        <h1 class="ui header">
                            {this.state.condodata.estate_title}
                            <div class="sub header ml-10" style={{display:'inline'}}><i class="map marker alternate icon"></i>{this.state.condodata.estate_address}</div>
                        </h1>
                    </div>
                    <div class="ui two column grid">
                        <div class="ten wide computer sixteen wide tablet column">
                            <div class="price-condo">
                                For {(this.state.condodata.estate_sale_type === "0" ? `rent : ` : this.state.condodata.estate_price + " BUY : ")} {this.state.condodata.estate_price}
                                <span class="bath"> Bath</span>
                            </div>
                            <div class="price-condo pt-10">
                                <span class="bath">{this.state.condodata.estate_size} SQM.</span>
                            </div>
                        </div>
                        <div class="six wide computer sixteen wide tablet column">
                            <div class="ui two column grid">
                                <div class="column">
                                    <img class="utilities-img" src={bedroom} alt={bedroom} />
                                    <div class="utilitie-text">
                                        <span class="text-description1">Bedrooms</span>
                                        <span class="text-description2">{this.state.condodata.estate_bedroom}</span>
                                    </div>
                                </div>  
                                <div class="column">
                                    <img class="utilities-img" src={bathroom} alt={bathroom} />
                                    <div class="utilitie-text">
                                        <span class="text-description1">Bathroom</span>
                                        <span class="text-description2">{this.state.condodata.estate_bathroom}</span>
                                    </div>
                                </div>
                                <div class="column">
                                    <img class="utilities-img" src={condo} alt={condo} />
                                    <div class="utilitie-text">
                                        <span class="text-description1">Type</span>
                                        <span class="text-description2">{this.checkTypeID(this.state.condodata.estate_type_id)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ui green inverted segment mt-30 pt-20 pb-20 pl-30">
                        <h3>
                            Description
                        </h3>
                        <p>{this.state.condodata.estate_description}</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Infocondo