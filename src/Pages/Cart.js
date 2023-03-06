//react bootstrap사용
import Table from 'react-bootstrap/Table'
//scss파일
import './Style/cart.scss'
//redux로 상태관리
import { useDispatch, useSelector } from 'react-redux'
import { addCount,subCount,deleteItems} from './store' //리덕스파일로 부터 받아왔다.
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faMinus} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan} from '@fortawesome/free-solid-svg-icons'





export default function Cart(){

  const state = useSelector((state)=>{return state})

  const dispatch = useDispatch() //store에 state의 변경을 요청하는게 useDispatch이다.

  return(
    <section>
      <h1>장바구니</h1>
      <Table striped>
        <thead>
          <tr>
            <th>상품명</th>
            <th>갯수</th>
            <th>가격</th>
            <th>수량</th>
            <th></th>
            <th>총 수량</th>
          </tr>
        </thead>
        <tbody>
          { //map은 항상 키값을 가지고 있다.
            state.cart.map((item,i)=>{
              return(
                <tr key={i}>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].quantity}</td>
                  <td>￦ {state.cart[i].price}</td>
                  <td>
                    <button onClick={()=>{dispatch(addCount(state.cart[i].id))}} style={{border:0, marginRight:10}}><FontAwesomeIcon icon={faPlus}/></button>
                    <button onClick={()=>{dispatch(subCount(state.cart[i].id))}} style={{border:0}}><FontAwesomeIcon icon={faMinus}/></button>
                  </td>
                  <td><button onClick={()=>{dispatch(deleteItems(state.cart[i].id))}} style={{border:0}}><FontAwesomeIcon icon={faTrashCan}/></button></td>
                  <td>{state.cart[i].price}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </section>
  )
}

 //onclick이벤트를 누르면 state에서 변경되는 값을 불러와주는 dispatch가 수행한다.