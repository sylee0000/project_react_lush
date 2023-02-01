//data
import spaproducts from './spaData'
//scss
import './Style/spa.scss'

export default function Spa(){
  return(
    <>
      <div className="spa_title_img">
        <img src={process.env.PUBLIC_URL+'/images/spa_img.jpg'} alt="스파타이틀이미지"/>
      </div>

      <div className="spa_title_txt">
        <h1>spa</h1>
        <p>
          영국의 전통과 아름다운 자연에서 영감을 받은 영국 전통스파<br/>
          오감을 깨워 몸과 마음에 휴식을 선사해 보세요.
        </p>
      </div>
      
      <section className="spa_box">
        {
          spaproducts.map((spaproduct)=>{
            return(
              <div>
                <img src={spaproduct.image} alt="스파상품이미지"/>
                <p style={{fontWeight:'bold', fontSize:20}}>{spaproduct.name}</p>
                <p>{spaproduct.title}</p>
                <p>{spaproduct.price}</p>
              </div>
            )
          })
        }
      </section>
    </>
  )
}