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

const About = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const About_H = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding-bottom: 20px;
  border-bottom: 3px solid gray;
`
const Left = styled.div`
  flex: 2;
  text-align: center;
  > h1 {
    color: skyblue;
    font-size: 48px;
    text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  }
  > h4 {
    margin-top: 10px;
    font-size: 18px;
    > a {
      color: deepskyblue;
      text-decoration: underline;
    }
  }
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    border-bottom: 1px solid gray;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
`
const About_Me = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  > h3 {
    margin: 10px 0;
  }
  > ul > li {
    margin: 10px;
  }
`
const About_Skill = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > h3 {
    border-bottom: 3px solid gray;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px;
  }
  > h5 {
    padding: 0 10px;
    margin-bottom: 10px;
  }
`
const About_Grade = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > h3 {
    border-bottom: 3px solid gray;
    padding: 10px;
    margin: 20px 0;
  }
  > span {
    margin: 10px 0;
    padding-left: 30px;
    > label {
      margin-right: 20px;
    }
  }
`
const Table = styled.table`
  width: 100%;
  > tr {
    text-align: center;
    > th {
      background-color: skyblue;
    }
    > td {
      border-bottom: 1px solid gray;
      padding: 5px;
    }
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
            <About>
              <About_H>
                <Left>
                  <h1>오건희</h1>
                  <h3>( Frontend Developer )</h3>
                  <h4>GitHub : <a href='https://github.com/OhKeonHee' target='_blank'>https://github.com/OhKeonHee</a></h4>
                  <h4>Portfolio : <a href='https://ogh-react-portfolio.netlify.app/' target='_blank'>https://ogh-react-portfolio.netlify.app/</a></h4>
                </Left>
                <Right>
                  <div>
                    <label>Birthday</label>
                    <span>1998.12.22</span>
                  </div>
                  <div>
                    <label>Email</label>
                    <span><a href='mailto:98ogh@naver.com'>98ogh@naver.com</a></span>
                  </div>
                  <div>
                    <label>Mobile</label>
                    <span>010-8980-2726</span>
                  </div>
                  <div>
                    <label>Address</label>
                    <span>고양시 일산동구 풍동</span>
                  </div>
                  <div>
                    <label>병역사항</label>
                    <span>육군 병장 전역</span>
                  </div>
                </Right>
              </About_H>
              <About_Me>
                <h3>소개 / About Me!</h3>
                <ul>
                  <li>
                    <span>▶ </span>기본스킬 HTML, CSS (SCSS), JS를 모자람없이 다뤄 개발할 수 있는 신입 개발자입니다. 
                  </li>
                  <li>
                    <span>▶ </span>팀 프로젝트이외에 다양한 개인 프로젝트와 예제를 통해 이론과 코딩감각을 쌓아가는 개발자입니다.
                  </li>
                  <li>
                    <span>▶ </span>호기심과 도전 의식, 몰입력이 강해 최근 Node.js, TypeScript를 이용한 React로 프로젝트와 예제들을 개발하며,
                    예전 프로젝트들을 TypeScript로 바꾸는 연습을 통해 코딩의 다양성을 넓히는 개발자입니다.
                  </li>
                  <li>
                    <span>▶ </span>대학 전공으론 jsp, Unity, Android Studio, C++, Java, Python, 데이터베이스, 알고리즘, 아두이노 등을 공부했으며,
                    졸업작품 팀 프로젝트로 대학 챗봇을 개발해 프론트엔드와 회원정보, 로그인, 회원가입의 백엔드, 데이터베이스를 개발했습니다.
                  </li>
                  <li></li>
                </ul>
              </About_Me>
              <About_Skill>
                <h3>기술 스택 / Skill Set</h3>
                <h5>기능 구현 등의 사용 경험이 있는 Skill Set</h5>
                <Table>
                  <tr>
                    <th>구분</th>
                    <th>Skill</th>
                  </tr>
                  <tr>
                    <td>Programing Languages</td>
                    <td>JavaScript(ES6), HTML5, CSS3, SCSS, TypeScript, Python, Java, C++</td>
                  </tr>
                  <tr>
                    <td>Framework / Library</td>
                    <td>React, JQuery, eclipse, Unity, Android Studio</td>
                  </tr>
                  <tr>
                    <td>Server</td>
                    <td>MySQL, MariaDB, Apache Tomcat</td>
                  </tr>
                  <tr>
                    <td>Tooling/ DevOps</td>
                    <td>GitHub</td>
                  </tr>
                  <tr>
                    <td>Environment</td>
                    <td>Linux</td>
                  </tr>
                  <tr>
                    <td>ETC</td>
                    <td>Firebase</td>
                  </tr>
                </Table>
              </About_Skill>
              <About_Grade>
                <h3>학력</h3>
                <span><label>-</label><label>18.03 ~ 23.02</label> 서일대학교 소프트웨어공학과 졸업</span>
                <span><label>-</label><label>14.03 ~ 17.02</label> 일산 세원고등학교 졸업</span>
              </About_Grade>
              <About_Grade>
                <h3>교육 내용</h3>
                <span><label>-</label><label>23.02 ~ 23.08</label> 종로그린컴퓨터학원 - 웹퍼블리셔&리엑트활용 프론트엔드 웹 SW개발자 과정</span>
              </About_Grade>
            </About>
          </Main>
        </Article>
      </div>
    </div>
  )
}
