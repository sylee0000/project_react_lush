//scss파일
import './Style/detail.scss'
//router
import { useParams, Routes, Route, Link } from "react-router-dom" //eslint-disable-line no-unused-vars
//useState
import { useState } from 'react'; //카운트 관리
//reducx
import { addItems } from './store'; //상태관리하는 리덕스파일
import { useDispatch } from 'react-redux';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
//style
import styled from 'styled-components';


const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: right;
`

const Total = styled.p`
  text-align: left;
`

const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 20px;
`

const GetButton = styled(Button)`
  width: 260px;
  border: none;
  background-color: black;
  color: white;
  margin-left: 10px;
`

const CountButton = styled(GetButton)`
  width: 20px;
  height: 20px;
  font-size: 18px;
  background-color: white;
  color: black;
  margin: 0 20px;
`
  
export default function Detail(props){

  const {bestPro} = props //내가 만든 초기값을 객체화로 한걸 상속받겠다.
  const {id} = useParams() //가져올걸 사용하려면 useParams필요하다.
  const dispatch = useDispatch()

  
  return(
    <section className="detail">
    
      <div className="detail_box">

        <div>
          <img src={bestPro[id].detailimage} alt="베스트디테일썸네일" style={{width:554, height:554}}/>
        </div>

        <div className="detail_info">
          <img src={bestPro[id].image} alt="베스트상품이미지" style={{width:288}}/>
          <Name>{bestPro[id].name}</Name>
          <p>{bestPro[id].title}</p>
          <hr/>
          <Price>
            ￦ {bestPro[id].price}
            <span>{<Counter/>}</span>
          </Price>
          <hr/>
          <Total>총 합계 금액</Total>
          <Button style={{marginRight:10}}>
            <FontAwesomeIcon icon={faHeart}/>
          </Button>
          <Button onClick={()=>{
            dispatch(addItems({id: bestPro[id].id, name: bestPro[id].name, quantity:1, price: bestPro[id].price}))
            alert('장바구니에 추가 되었습니다.')
            }}
          ><FontAwesomeIcon icon={faCartShopping}/>
          </Button>
          <GetButton>
            바로구매
          </GetButton>
        </div>

      </div>

      <div>
        <img src={bestPro[id].descimageTop} alt="상품설명이미지01" style={{width:1240}}/>
      </div>
      <div>
        <img src={bestPro[id].descimageMid} alt="상품설명이미지02" style={{width:1240}}/>
      </div>
      <div>
        <img src={bestPro[id].descimageBottom} alt="상품설명이미지03" style={{width:1240}}/>
      </div>
    </section>
  )
}

//카운트 컴포넌트를 하나 생성해서 안에 넣어주기

const Counter = () =>{
  const [count,setCount] = useState(0)

  return(
    <span>
      <CountButton onClick={()=>{setCount(count+1)}}>
        <FontAwesomeIcon icon={faPlus}/>
      </CountButton>
      <span>{count}</span>
      <CountButton onClick={()=>{setCount(count-1)}}>
        <FontAwesomeIcon icon={faMinus}/>
      </CountButton>
    </span>
  )
}



