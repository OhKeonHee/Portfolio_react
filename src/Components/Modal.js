import React from 'react'
import { VscChromeClose, VscChromeMinimize, VscChromeMaximize, VscArrowLeft, VscArrowRight, VscRefresh, VscInfo, VscAccount, VscKebabVertical, VscTriangleDown } from 'react-icons/vsc'
import { FcGoogle } from "react-icons/fc";
import { TfiShare, TfiStar, TfiLayoutGrid3Alt } from "react-icons/tfi";
import Profile_img from '../imgs/Profile.jpg'
import styled from 'styled-components';
import resume1 from '../imgs/ogh_resume1.png';
import resume2 from '../imgs/ogh_resume2.png';
import resume3 from '../imgs/ogh_resume3.png';
import resume4 from '../imgs/ogh_resume4.png';
import resume5 from '../imgs/ogh_resume5.png';
import resume6 from '../imgs/ogh_resume6.png';
import resume7 from '../imgs/ogh_resume7.png';
import resume8 from '../imgs/ogh_resume8.png';
import blog from '../imgs/blogIcon.JPG';

const Ul = styled.ul`
  position: fixed;
  right: 10px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  border: 1px solid skyblue;
  padding: 5px 20px;
  border-radius: 10px;
  margin-right: 20px;
`
const Li = styled.li`
  float: left;
  margin-right: 10px;
  border-right: 1px solid gray;
  padding-right: 10px;
  &:nth-child(4) {
    border-right: none;
  }
`
const Title = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 300px;
  margin-top: 50px;
  padding: 20px 0;
  h1, p {
    text-align: center;
  }
  h1 {
    margin-top: 50px;
  }
`
const Article = styled.article`
  display: flex;
  padding: 0 20px;
  gap: 10px;
  margin-top: -70px;
  margin-bottom: 10px;
  height: auto;
`
const Profile = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 20%;
  padding: 10px;
  height: 100%;
  padding-bottom: 40px;
  border-radius: 10px;
`
const Main = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 80%;
  height: 100%;
  border-radius: 10px;
`
const A = styled.a`
  text-decoration: underline;
  color: blue;
`
const Introduce = styled.h4`
  font-weight: normal;
  margin-top: 10px;
`
const IntroBtn = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 10px 20px;
  background-color: white;
  border: 1px solid gray;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  span {
    color: #2DB400;
    font-size: 20px;
  }
`

export const Modal = ({modalView, setModalView}) => {
  return (
    // <div className='modal'>
    <div className='modal' style={{display: `${modalView}`}}>
      <div className='modal_top'>
        <div className='modal-nav'>
          <div className='modal-window'>
            <img src={blog} width={25} height={25} style={{transform: 'translateY(3px)', marginRight: '8px'}} />
            <div>오건희의 이력서 : 네이버블로그</div>
            <span onClick={() => {setModalView('none')}}><VscChromeClose style={{transform: 'translateX(2px)'}} /></span>
          </div>
          <div className='modal-btns'>
            <span><VscChromeMinimize /></span>
            <span><VscChromeMaximize /></span>
            <span onClick={() => {setModalView('none')}}><VscChromeClose /></span>
          </div>
        </div>
        <div className='modal-address'>
          <span><VscArrowLeft /></span>
          <span><VscArrowRight /></span>
          <span><VscRefresh /></span>
          <div className='address'>
            <div className='left'>
              <span id='icon'><VscInfo /></span>
              <span>blog.naver.com</span>
              <span style={{color: 'gray'}}>오건희의 이력서 : 네이버블로그</span>
            </div>
            <div className='right'>
              <span><FcGoogle /></span>
              <span><TfiShare /></span>
              <span><TfiStar /></span>
            </div>
          </div>
          <span><VscAccount /></span>
          <span style={{transform: 'translateY(1px)'}}><VscKebabVertical /></span>
        </div>
      </div>
      <div className='modal-view'>
        <div className='inModal_nav'>
          <Ul>
            <Li>내 블로그</Li>
            <Li>이웃 블로그</Li>
            <Li>블로그 홈</Li>
            <Li><b><a href='#resume'>이력서</a></b></Li>
          </Ul>
        </div>
        <Title>
          <h1>이력서</h1>
          <p>OH KEON HEE's Resume</p>
        </Title>
        <Article>
          <Profile>
            <img src={Profile_img} alt="" width={`100%`}/>
            <h3>오건희</h3>
            <A href='mailto:98ogh@naver.com'>98ogh@naver.com</A>
            <Introduce>
              소프트웨어공학 전공자이며 신입 프론트엔드 개발자인 오건희입니다!
              <IntroBtn>
                <span>+</span>이웃추가
              </IntroBtn>
            </Introduce>
          </Profile>
          <Main>
            <img src={resume1} alt="" width={`100%`}/>
            <img src={resume2} alt="" width={`100%`} style={{marginTop: '-60px'}}/>
            <img src={resume3} alt="" width={`100%`} style={{marginTop: '-50px'}}/>
            <img src={resume4} alt="" width={`100%`} style={{marginTop: '-162px'}}/>
            <img src={resume5} alt="" width={`100%`} style={{marginTop: '-160px'}}/>
            <img src={resume6} alt="" width={`100%`} style={{marginTop: '-134px'}}/>
            <img src={resume7} alt="" width={`100%`} style={{marginTop: '-170px'}}/>
            <img src={resume8} alt="" width={`100%`} style={{marginTop: '-50px', marginBottom: '-70px'}}/>
          </Main>
        </Article>
      </div>
    </div>
  )
}
