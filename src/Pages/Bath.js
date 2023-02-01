//여기서 사용되는 data파일
import productBath from "./bathData";
//styleComponents사용
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

export default function Bath(){
  return(
    <section className="bathbam">
      {
        productBath.map((productBath)=>{
          return(
            <div className="bathbam_box">
              <img src={productBath.image} alt="배쓰이미지"/>
              <p>
                <Material>{productBath.material}</Material>
              </p>
              <Name>{productBath.name}</Name>
              <p>{productBath.title}</p>
              <p>{productBath.price}</p>
            </div>
          )
        })
      }
    </section>
  )
}