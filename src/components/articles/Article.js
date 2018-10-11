import React , { Component } from 'react';
import condo1 from '../../img/condo1.jpg';
import condo2 from '../../img/condo2.jpg';
import condo3 from '../../img/condo3.jpg';
import condo4 from '../../img/condo4.jpg';
import person from '../../img/person.jpg';
import OwlCarousel from 'react-owl-carousel';

class Article extends React.Component {
    render() {
        return(
            <div class="ui fluid pt-100 pb-100">
                <div class="ui segments grid pl-20 pr-20">
                    <div class="middle aligned eight wide computer fifteen wide tablet column">
                        <div class="ui breadcrumb">
                            <a class="section">Home</a>
                            <i class="right chevron icon divider"></i>
                            <a class="section">Registration</a>
                        </div>
                    </div>
                    <div class="middle aligned eight wide computer fifteen wide tablet column">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="inverted circular search link icon"></i>
                        </div>
                    </div>  
                </div>
                <div class="ui center aligned container pt-50">
                    <div class="ui text container">
                        <h1 class="ui header">
                            News & Article
                        </h1>
                    </div>
                    <h4 class="ui header">
                        <div class="sub header">Here you can find latest updated News & Article related to real estate provide by experts who have high experience in Thailand property. News update, Real estate article , Infrastruce news , Economic & Finance news , Decorate Guide are waiting for you to explore.</div>
                    </h4>
                </div>
                <div class="ui container pt-30">
                    <OwlCarousel
                        className="owl-carousel owl-theme full-width-img-carousel "
                        loop
                        items={1}
                    >
                        <div class="item"><img src={condo1} alt={condo1} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo1} alt={condo1} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo2} alt={condo2} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo3} alt={condo3} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                        <div class="item"><img src={condo4} alt={condo4} style={{ maxHeight: '450px', maxWidth: '100%' }} /></div>
                    </OwlCarousel>
                </div>
                <div class="ui container grid pt-30">
                    <div class="middle aligned one wide computer sixteen wide tablet column">
                        <h3 class="ui header">
                            <div class="sub header">Category</div>
                        </h3>
                    </div>
                    <div class="two wide computer sixteen wide tablet column">
                        <select class="ui fluid dropdown">
                            <option value="">Gender</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                         </select>
                    </div>
                    <div class="middle aligned one wide computer sixteen wide tablet column">
                        <h3 class="ui header">
                            <div class="sub header">Category</div>
                        </h3>
                    </div>
                    <div class="two wide computer sixteen wide tablet column">
                        <select class="ui fluid dropdown">
                            <option value="">Gender</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                         </select>
                    </div>
                    <div class="middle aligned one wide computer sixteen wide tablet column">
                        <h3 class="ui header">
                            <div class="sub header">Category</div>
                        </h3>
                    </div>
                    <div class="two wide computer sixteen wide tablet column">
                        <select class="ui fluid dropdown">
                            <option value="">Gender</option>
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                         </select>
                    </div>
                    <div class="right aligned seven wide computer sixteen wide tablet column">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="inverted circular search link icon"></i>
                        </div>
                    </div>
                </div>
                <div class="ui pt-30">
                    <div class="ui centered left aligned grid column mt-20">
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo3} alt={condo3} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        <a>Something is wrong :(</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo3} alt={condo3} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo3} alt={condo3} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo4} alt={condo4} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo4} alt={condo4} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer seven wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo4} alt={condo4} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ui center aligned text container pt-30"> 
                    <button class="ui black button">Positive Button</button>
                </div>
                <div class="ui center aligned text container pt-50"> 
                    <h2 class="ui header">
                        <div class="sub header">Hot Story</div>
                    </h2>
                </div>
                <div class="ui pt-30">
                    <div class="ui centered left aligned grid column mt-20">
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        <a>Something is wrong :(</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="five wide computer five wide tablet fifteen wide mobile column">
                            <div class="ui card fluid ">
                                <a class="image" href="#">
                                    <img src={condo2} alt={condo2} />
                                </a>
                                <div class="content">
                                    <h4>Condo is awesome !!</h4>
                                    <div class="meta">
                                        Something is wrong :(
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

export default Article