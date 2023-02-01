//scss
import './Style/location.scss'


export default function Location(){
  return(
    <>
      <div className="location_title_img">
        <img src={process.env.PUBLIC_URL+'/images/location_img.jpg'} alt="로케이션타이틀이미지"/>
      </div>

      <div className="location_title_txt">
        <h1>매장안내</h1>
        <p>
          전국에 있는 러쉬매장을 확인해보세요!
        </p>
      </div>

      <section className="location_box">
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img01.jpg'} alt="로케이션이미지01"/>
          <p>롯데백화점 강남점</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img02.jpg'} alt="로케이션이미지02"/>
          <p>스타필드 안성점</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img03.jpg'} alt="로케이션이미지03"/>
          <p>신세계백화점 안성점</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img04.jpg'} alt="로케이션이미지04"/>
          <p>롯데백화점 동탄점</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img05.jpg'} alt="로케이션이미지05"/>
          <p>현대백화점 압구점 본점</p>
        </div>
        <div>
          <img src={process.env.PUBLIC_URL+'/images/location_img06.jpg'} alt="로케이션이미지06"/>
          <p>롯데백화점 영등포점</p>
        </div>
      </section>
    </>
  )
}