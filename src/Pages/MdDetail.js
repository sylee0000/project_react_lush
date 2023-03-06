//scss
import './Style/detail.scss'
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
import Count from './Count'
import {useState} from 'react' //카운트



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

export default function MdDetail(props){

  const {mdChoice} = props //내가 만든 초기값을 객체화로 한걸 상속받겠다.
  const {id} = useParams() //가져올걸 사용하려면 useParams필요하다.
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [count,setCount] = useState(1)


  return(
    <section className="detail">
    
      <div className="detail_box">

        <div>
          <img src={mdChoice[id].detailimage} alt="엠디썸네일이미지" style={{width:554, height:554}}/>
        </div>

        <div className="detail_info">
          <img src={mdChoice[id].image} alt="엠디상품이미지" style={{width:288}}/>
          <Name>{mdChoice[id].name}</Name>
          <p>{mdChoice[id].title}</p>
          <hr/>
          <Price>
            ￦ {mdChoice[id].price}
            <span>
              <Count
                count={count}
                plusClick={()=>setCount((prev)=>prev+1)}
                minusClick={()=>setCount((prev)=>prev-1)}
              />
            </span>
          </Price>
          <hr/>
          <Total>총 합계 금액 {(mdChoice[id].price * count)}</Total>
          <Button style={{marginRight:10}}>
            <FontAwesomeIcon icon={faHeart}/>
          </Button>
          <Button onClick={()=>{dispatch(addItems({id:mdChoice[id].id, name: mdChoice[id].name, quantity:count, price: mdChoice[id].price * count}))
          alert('장바구니에 추가 되었습니다.')
          navigate('/cart')
          }}
        ><FontAwesomeIcon icon={faCartShopping}/>
        </Button>
        <GetButton>
          바로구매
        </GetButton>
      </div>

      </div>

      <div>
        <img src={mdChoice[id].descimageTop} alt="상품설명이미지01" style={{width:1240}}/>
      </div>
      <div>
        <img src={mdChoice[id].descimageMid} alt="상품설명이미지02" style={{width:1240}}/>
      </div>
      <div>
        <img src={mdChoice[id].descimageBottom} alt="상품설명이미지03" style={{width:1240}}/>
      </div>
    </section>
  )
}

