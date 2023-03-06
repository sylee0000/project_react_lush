//css
import './App.css';
//router
import {Routes, Route, useNavigate} from 'react-router-dom'
//react bootstrap
import {Container,Nav,Navbar} from 'react-bootstrap';
//fontawesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFaceSmile} from '@fortawesome/free-solid-svg-icons'
//components
import Home from './Pages/Home'
import Product from './Pages/Product'
import Introduce from './Pages/Introduce'
import Location from './Pages/Location'
import Spa from './Pages/Spa'
import Detail from './Pages/Detail'
import MdDetail from './Pages/MdDetail'
import Cart from './Pages/Cart'
import bests from './Pages/bestData'
import mds from './Pages/mdData' 
import productsBath from './Pages/bathData';
import BathDetail from './Pages/BathDetail'
import ShowerDetail from './Pages/ShowerDetail'
import productsShower from './Pages/showerData'

import {useState} from 'react'; //훅을 사용해서 사이트를 넘기겠다.


function App() {

  const navigate = useNavigate(); 
  const [bestPro] = useState(bests); //초기값을 내가 만든 데이터의 값으로 받고 bestPro 라는 객체로 하겠다. 
  const [mdChoice] = useState(mds); //초기값을 내가 만든 데이터의 값으로 받고 mdChoice 라는 객체로 하겠다.
  const [bathPro] = useState(productsBath)
  const [showerPro] = useState(productsShower)
  

  return(
    <div className='App'>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/project_react_lush')}}>
            <img src={process.env.PUBLIC_URL+'/images/main_logo.gif'} alt="러쉬메인로고" className="main_logo"/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/introduce')}}>러쉬소개</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/product/bath')}}>제품보기</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/location')}}>매장안내</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/spa')}}>스파</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
 
          </Nav>
          <ul className='gnb'>
            <li><img src={process.env.PUBLIC_URL+'/images/logo_live.png'} alt="로고라이브이미지" style={{width:60, height:40}}/></li>
            <li><FontAwesomeIcon icon={faFaceSmile} style={{fontSize: 25}}/></li>
          </ul>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/project_react_lush' element={<Home/>}></Route>
        <Route path='product/*' element={<Product/>}></Route>
        <Route path='introduce' element={<Introduce/>}></Route> 
        <Route path='location' element={<Location/>}></Route>
        <Route path='spa' element={<Spa/>}></Route>
        <Route path='detail/:id' element={<Detail bestPro={bestPro}/>}></Route>
        <Route path='mddetail/:id' element={<MdDetail mdChoice={mdChoice}/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='bathdetail/:id' element={<BathDetail bathPro={bathPro}/>}></Route>
        <Route path='showerdetail/:id' element={<ShowerDetail showerPro={showerPro}/>}></Route>
      </Routes>

      <div className="footer_icon">
        <div className="footer_icon_box">
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i01.png'} alt="푸터아이콘01"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i02.png'} alt="푸터아이콘02"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i03.png'} alt="푸터아이콘03"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i04.png'} alt="푸터아이콘04"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i05.png'} alt="푸터아이콘05"/>
          </div>
          <div>
            <img src={process.env.PUBLIC_URL+'/images/i06.png'} alt="푸터아이콘06"/>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer_box">
          <div className="footer_top">
            <div>
              <input type="text"></input>
              <span>구독</span>
              <p>
                매주 월요일 오후, 구독자님들을 위한 제품과 브랜드 이야기를 전해드립니다.<br/>
                구독은 언제든지 해지하실 수 있습니다.
              </p>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="#!">러쉬소개</a>
                </li>
                <li>
                  <a href="#!">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#!">커뮤니티</a>
                </li>
                <li>
                  <a href="#!">영상정보관리지침</a>
                </li>
                <li>
                  <a href="#!">1:1문의</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#!">채용안내</a>
                </li>
                <li>
                  <a href="#!">이용약관</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer_bottom">

            <div className="footer_contact">
              <div>
                <p>고객센터</p>
                <p>1644-2350</p>
                <p>webmaster@lush.co.kr</p>
                <p>상담전화 13:00 ~ 16:00(평일)</p>
                <p>상담톡 10:00 ~ 14:00(평일)</p>
              </div>

              <div>
                <p>기업선물</p>
                <p>070-4713-8543</p>
                <p>order@lush.co.kr</p>
              </div>
            </div>

            <div className="footer_info">
              <p>
                서울 강남구 학동로 336(메이트리 빌딩(matree B/D))1층 주식회사 러쉬코리아
                사이트 운영자 : 주식회사 러쉬코리아 | 대표이사 : 우미령
                사업자 등록번호 : 201-81-77964 사업자정보확인
                통신판매업 신고번호 : 2022-서울강남-02857 | 개인정보보호책임자 : 신성훈<br/>
                <span style={{fontSize:13}}>COPYRIGHT c LUSHKOREA.CO.LTD.ALL RIGHTS RESERVED</span>
              </p>
            </div>

          </div>
        </div>
      </footer>
      
    </div>
  )
}



export default App;
