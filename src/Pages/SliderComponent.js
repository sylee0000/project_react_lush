//data
import mds from './mdData'
import React, { Component } from "react";
//router
import {Link} from 'react-router-dom'
//scss
import './Style/sliderComponent.scss'
//slick
import Slider from 'react-slick';
//slick_css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
//styled-components
import styled from 'styled-components';


const Material = styled.span`
  border: 1px solid green;
  border-radius: 20px;
  color: green;
  padding: 5px 5px;
` 

const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div className="md_choice">
        <h1>Md Choice</h1>
        <Slider {...settings}>
          {
            mds.map((md,i)=>{ 
              return(
                <div className="md_choice_box">
                  <Link to={`/mddetail/${i}`}>
                    <img src={md.image} alt="엠디상품이미지" style={{width:288}}/>
                    <p>
                      <Material>
                        {md.material}
                      </Material>
                    </p>
                    <Name>{md.name}</Name>
                    <p>{md.title}</p>
                    <p>{md.price}</p>
                  </Link>
                </div>
              )
            })
          } 
        </Slider>
      </div>
    );
  }
}

