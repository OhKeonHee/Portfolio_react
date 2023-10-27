import React from 'react'
import { VscChromeClose, VscChromeMinimize, VscChromeMaximize, VscArrowLeft, VscArrowRight, VscRefresh, VscInfo, VscAccount, VscKebabVertical, VscTriangleDown } from 'react-icons/vsc'
import { FcGoogle } from "react-icons/fc";
import { TfiShare, TfiStar, TfiLayoutGrid3Alt } from "react-icons/tfi";
import Profile_img from '../imgs/Profile.jpg'
import styled from 'styled-components';

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
`
const Profile = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 200px;
  padding: 10px;
  height: 500px;
`
const Main = styled.div`
  background-color: white;
  border: 1px solid black;
  flex: 3;
  height: 100vh;
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
            <svg fill='#00bcd4'>
            <path d='m12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85s-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89m-4.63 9.89c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47-.54-.03-1.11-.03-1.71-.03s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47l-.81 1.5.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47m-2.62-6.72c-.19.22-.39.45-.59.72h.59.59c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-.59-.59c.2.27.4.5.59.72m4.62-13.22c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95m-.29 9.31c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26m-10.16 0c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9m-4.95-8.56l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04c-1.59-1.5-2.97-2.08-3.6-1.7-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z' />
            </svg>
            <div>React App</div>
            <span onClick={() => {setModalView('none')}}><VscChromeClose /></span>
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
              <span>localhost:3000</span>
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
          <h1>포트폴리오 설명</h1>
          <p>OH KEON HEE's Portfolio</p>
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
            <h1>포트폴리오 설명</h1>
            <p>OH KEON HEE's Portfolio</p>
          </Main>
        </Article>
      </div>
    </div>
  )
}
