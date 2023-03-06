//component 받아서 router
import Shower from './Shower'
import Bath from './Bath'
//router
import {Routes, Route, Link} from "react-router-dom" //eslint-disable-line no-unused-vars
//scss
import './Style/product.scss'

export default function Product(){

  return(

    <>
      <div className="product_img">
        <img src={process.env.PUBLIC_URL+'/images/product_title.jpg'} alt="상품타이틀이미지"/>
      </div>

      <div className="pro_menu"> 
        <div className="btn_pro_menu">
          <button><Link to='bath'>배쓰</Link></button>
          <button><Link to='shower'>샤워</Link></button>
        </div>
      </div>

      <Routes>
        <Route path='bath' element={<Bath/>}></Route>
        <Route path='shower' element={<Shower/>}></Route>
      </Routes>
    </>
  )
}