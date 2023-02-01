//data
import productsShower from './showerData'
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

export default function Shower(){
  return(
    <section className="shower">
      {
        productsShower.map((productShower)=>{
          return(
            <div className="shower_box">
              <img src={productShower.image} alt="샤워상품이미지"/>
              <p>
                <Material>
                  {productShower.material}
                </Material>
              </p>
              <Name>{productShower.name}</Name>
              <p>{productShower.title}</p>
              <p>{productShower.price}</p>
            </div>
          )
        })
      }
    </section>
  )
}

