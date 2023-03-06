//data파일
import bests from './bestData'
//scss
import './Style/home.scss'
//Router
import {Routes, Route, Link, useNavigate} from 'react-router-dom' //eslint-disable-line no-unused-vars
//swiper
import React, {useRef, useState} from "react" //eslint-disable-line no-unused-vars
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import {Navigation,Autoplay} from "swiper"
//style
import styled from 'styled-components'
//react_slick
import MultipleItems from './SliderComponent'
//reducx
import {addItems} from './store' //상태관리하는 리덕스파일
import {useDispatch} from 'react-redux'


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

export default function Home(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return(
    <>
        <Swiper autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} navigation={true} modules={[Navigation,Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img src={process.env.PUBLIC_URL+'/images/lush_main_visual_01.png'} alt="메인비주얼이미지01" style={{width:'100%',height:800}}/>
        </SwiperSlide>
        <SwiperSlide className="main_visual">
          <img src={process.env.PUBLIC_URL+'/images/lush_main_visual_02.png'} alt="메인비주얼이미지02" style={{width:'100%',height:800}}/>
          <div className="mainvisual_txt">
            <p className="first_txt">후각의 모험</p>
            <p className="last_txt">[EVENT]러쉬 퍼퓸 컨설테이션에 여러분을 초대합니다!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main_visual">
          <img src={process.env.PUBLIC_URL+'/images/lush_main_visual_03.png'} alt="메인비주얼이미지03" style={{width:'100%',height:800}}/>
          <div className="mainvisual_txt">
            <p className="first_txt">LUSH SUPER ROOKIE!</p>
            <p className="last_txt">[EVENT]타로카드로 보는 2030 루키템</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main_visual">
          <img src={process.env.PUBLIC_URL+'/images/lush_main_visual_04.png'} alt="메인비주얼이미지04" style={{width:'100%',height:800}}/>
          <div className="mainvisual_txt">
            <p className="first_txt">마사지 바</p>
            <p className="first_txt">신제품 론칭!</p>
            <p className="last_txt">[NEW]마사지 바 신제품 11종 론칭!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="main_visual">
          <img src={process.env.PUBLIC_URL+'/images/lush_main_visual_05.png'} alt="메인비주얼이미지05" style={{width:'100%',height:800}}/>
          <div className="mainvisual_txt">
            <p className="first_txt">다운로드</p>
            <p className="first_txt">러쉬 1월</p>
            <p className="last_txt">[EVENT]어둠 속에서 빛을 밝히면</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <h1 className="title">BEST 상품</h1>
      <section className="bestpro">
        {
          bests.map((best,i)=>{ //내가 만든 데이터를 돌리겠다, 초기값을 i로 받겠다.
            return(
              <div className="bestpro_box">
                <Link to={`/detail/${i}`}>
                  <img src={best.image} alt="베스트상품이미지" style={{width:288, height:288}}/>
                  <p>
                    <Material>
                      {best.material}
                    </Material>
                  </p>
                  <Name>{best.name}</Name>
                  <p>{best.title}</p>
                  <p>{best.price}</p>
                </Link>
                <button onClick={()=>{
                    dispatch(addItems({id: best.id, name: best.name, quantity:1, price: best.price}))
                    alert('장바구니에 추가 되었습니다.')
                    navigate('/cart')
                  }}
                  >장바구니 담기
                </button>
              </div>
            )
          })
        }
      </section>

      <section className="event_banner">
        <div className="rolling_banner_box">
          <div>
            <img src={process.env.PUBLIC_URL+'/images/rolling_banner01.jpg'} alt="롤링배너이미지01"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/rolling_banner02.jpg'} alt="롤링배너이미지02"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/rolling_banner03.jpg'} alt="롤링배너이미지03"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/rolling_banner04.jpg'} alt="롤링배너이미지04"/>
          </div>
        </div>
      </section>

      <section>
        <MultipleItems/>
      </section>

    </>
  )
}



