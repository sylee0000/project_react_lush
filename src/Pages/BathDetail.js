//router
import {useParams, Routes, Route, Link, useNavigate} from "react-router-dom" //eslint-disable-line no-unused-vars
//reducx
import {addItems} from './store' //상태관리하는 리덕스파일
import {useDispatch} from 'react-redux'
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
//styled-components
import styled from 'styled-components'
//수량컴포넌트
import {useState} from 'react'
import Count from './Count'


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
  text-align: right;
  font-weight: bold;
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


export default function BathDetail(props){
  
  const {bathPro} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [count,setCount] = useState(1)

  
  return(
  
    <section className="detail">    
    <div className="detail_box">

      <div>
        <img src={bathPro[id].detailimage} alt="배쓰썸네일이미지" style={{width:554, height:554}}/>
      </div>

      <div className="detail_info">
        <img src={bathPro[id].image} alt="배쓰상품이미지" style={{width:288}}/>
        <Name>{bathPro[id].name}</Name>
        <p>{bathPro[id].title}</p>
        <hr/>
        <Price>
          ￦ {bathPro[id].price}
          <span>
            <Count 
              count={count}
              plusClick={()=>setCount((prev)=>prev+1)}
              minusClick={()=>setCount((prev)=>prev-1)}
            />
          </span>
        </Price>
        <hr/>
        <Total>총 합계 금액 {bathPro[id].price * count}</Total>
        <Button style={{marginRight:10}}>
          <FontAwesomeIcon icon={faHeart}/>
        </Button>
        <Button onClick={()=>{
          dispatch(addItems({id: bathPro[id].id, name: bathPro[id].name, quantity:count, price: bathPro[id].price * count}))
          alert('장바구니에 추가 되었습니다.')
          navigate('/cart')
        }}><FontAwesomeIcon icon={faCartShopping}/>
      </Button>
      <GetButton>
        바로구매
      </GetButton>
    </div>

    </div>


    <div>
      <img src={bathPro[id].descimageTop} alt="상품설명이미지01" style={{width:1240}}/>
    </div>
    <div>
      <img src={bathPro[id].descimageMid} alt="상품설명이미지02" style={{width:1240}}/>
    </div>
    <div>
      <img src={bathPro[id].descimageBottom} alt="상품설명이미지03" style={{width:1240}}/>
    </div>
  </section>
  )
}
