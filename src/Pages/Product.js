//component 받아서 route
import Shower from './Shower'
import Bath from './Bath'
//scss
import './Style/product.scss'
//router
import {Routes, Route, Link} from 'react-router-dom'


export default function Product(){
  return(
    <>
      <div className="product_img">
        <img src={process.env.PUBLIC_URL+'/images/product_title.jpg'} alt="상품타이틀이미지"/>
      </div>

      <div className="pro_menu"> 
        <div className="btn_pro_menu">
          <button><Link to='product'>Home</Link></button>
          <button><Link to='produce_bath'>배쓰</Link></button>
          <button><Link to='produce_shower'>샤워</Link></button>
        </div>
      </div>

      <p className="more_txt">해당 상품을 보시려면 버튼을 눌러주세요!</p>

      <Routes>
        <Route path='produce_bath' element={<Bath/>}></Route>
        <Route path='produce_shower' element={<Shower/>}></Route>
      </Routes>
    </>
  )
}