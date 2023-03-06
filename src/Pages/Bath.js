//여기서 사용되는 data파일
import productsBath from "./bathData"
//styleComponents사용
import styled from 'styled-components'
//router
import {Routes, Route, Link} from 'react-router-dom' //eslint-disable-line no-unused-vars


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

export default function Bath(){

  return(
    <section className="bathbam">
      {
        productsBath.map((productBath,i)=>{
          return(
            <div className="bathbam_box">
              <Link to={`/bathdetail/${i}`}>
                <img src={productBath.image} alt="배쓰이미지"/>
                <p>
                  <Material>{productBath.material}</Material>
                </p>
                <Name>{productBath.name}</Name>
                <p>{productBath.title}</p>
                <p>{productBath.price}</p>
              </Link>
            </div>
          )
        })
      }
    </section>
  )
}