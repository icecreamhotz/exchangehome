import React , { Component } from 'react';
import axios from 'axios';
import bedroom from '../../img/bed.png';
import bathroom from '../../img/bathroom.png';
import condo from '../../img/condo.png';
import logo from '../../img/logo.svg';
import ImageGallery from 'react-image-gallery';
import Loading from '../settings/Loading.js';


class Infoarticle extends React.Component {

    constructor(props) {
      super(props)
      this.state = {
        imgna: [],
        articledata: [],
        loaded: false,
      }

      this.fetchCondoData = this.fetchCondoData.bind(this)
    }


    async componentDidMount() {
        await this.fetchCondoData()
    }

    fetchCondoData = () => {
        axios.get(`http://www.witrealty.co/api/forums/${this.props.match.params.id}`).then((response) => {
            this.setState({articledata: response.data[0], loaded:true}, () => this.setState({imgna: this.state.articledata[0].imgs}))
        })
    }

    render() {
        const { loaded } = this.state
        const sendLoaded = (loaded ? true : false)
        return(
            <div class="ui fluid pt-80 pb-30">
                <Loading loaded={sendLoaded} />
                <div class="ui container one column grid">
                    <div class="column">
                        <h1 class="ui header">
                            Title
                            <div class="sub header">{this.state.articledata.forum_title}</div>
                        </h1>
                    </div>
                    <div class="column">
                         {
                             this.state.imgna.map(item => <img src={atob(item.img_base)} alt={this.state.articledata.forum_title}/>)
                         }
                    </div>
                    <div class="column">
                        <h1 class="ui header">
                            Content
                        </h1>
                         <div dangerouslySetInnerHTML={{ __html: this.state.articledata.forum_content }} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Infoarticle