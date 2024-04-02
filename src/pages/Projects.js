import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import ReactIcon from '../icons/ReactIcon'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import JsIcon from '../icons/JsIcon'
import mealkit_mobile from '../imgs/mealkit_mobile.PNG'
import academy_uiux_page from '../imgs/academy_uiux_page.PNG'
import music_play from '../imgs/music_play.PNG'
import first_portfolio from '../imgs/first_portfolio.PNG'
import second_portfolio from '../imgs/second_portfolio.PNG'
import Cyworld from '../imgs/Cyworld.PNG'
import TodoList from '../imgs/react_todolist.PNG'
import emotionDiary from '../imgs/react_emotiondiary.PNG'
import emotionDiary2 from '../imgs/react_emotiondiary_ver2.PNG'
import adererror from '../imgs/react_adererror.PNG'
import netflix from '../imgs/react_netflix.PNG'
import teamproject from '../imgs/teamproject.PNG'
import react_portfolio from '../imgs/react_portfolio.PNG'
import sollink from '../imgs/sollink.JPG'
import { VscGithubInverted, VscGlobe } from 'react-icons/vsc'
import { Icons, Overlay, Project, Project_num, Project_title, SkillSec, Wrapper } from './styles'


const project_arr = [
  {
    id: 14,
    projectName: '솔링크',
    date: '24/03/18 ~ 24/03/22',
    HtmlIcon: 'x',
    CssIcon: 'x',
    JsIcon: 'x',
    ReactIcon: ReactIcon,
    domain: 'https://sollink.ai/',
    github: '',
    thumbnail: sollink,
    read: ``
  },
  {
    id: 13,
    projectName: '리액트로 만든 포트폴리오',
    date: '23/07/01 ~ 23/08/29',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/Portfolio_react',
    thumbnail: react_portfolio,
    read: `- node.js를 통한 react제작
    - react-router-dom의 BrowserRouter를 사용해 각 페이지와 컴포넌트를 분기
    - 배열과 map함수를 사용, 같은 배열을 사용할 경우 props전달로 파일 분기
    - scss와 syled-components를 사용한 css와 테마구성
    - emailJS의 API를 가져와 활용함과 .env를 사용해 개인 API값을 관리
    - useState()를 중심기능으로 state 값 변경시 스타일 변화되도록 프로젝트 구성`
  },
  {
    id: 12,
    projectName: '리액트로 만든 넷플릭스',
    date: '23/07/13 ~ 23/07/14',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-netflix.netlify.app/',
    github: 'https://github.com/OhKeonHee/Netflix',
    thumbnail: netflix,
    read: `- react-router-dom의 BrowserRouter를 사용해 각 페이지와 컴포넌트를 분기
    - TMDB의 API를 가져와 활용함과 .env를 사용해 개인 API값을 관리
    - redux와 reducer를 사용해 각 코드에 맞는 api를 가져오거나 에러표시
    - react-router-dom으로 useSelector, useLocation, useNavigate로 각 사이트마다  주소를 불러와 표시할 값을 달리함
    - state대신 redux를 사용해 Action, Reducers, Store간 연계방법을 이해함`
  },
  {
    id: 11,
    projectName: '리액트로 만든 쇼핑몰',
    date: '23/07/06 ~ 23/07/10',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-adererror.netlify.app/',
    github: 'https://github.com/OhKeonHee/React_ShoppingMall',
    thumbnail: adererror,
    read: `- react-router-dom의 BrowserRouter를 사용해 각 페이지와 컴포넌트를 분기
    - 외부 json파일을 aync와 await를 사용해 읽을 수 있는 json형태로 저장
    - json-server를 통해 json파일을 배포용으로 전환
    - react-router-dom과 react-redux의 useSelector, useLocation, useNavigate로 각 사이트마다  주소를 불러와 표시할 값을 달리함
    - useState를 이용해 로그인 여부를 통해 보여줄 사이트와 보여주지 않을 사이트를 나눔`
    
  },
  {
    id: 10,
    projectName: '리액트로 만든 감정다이어리2',
    date: '23/07/13 ~ 23/07/14',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-emotiondiary-ver2.netlify.app/',
    github: 'https://github.com/OhKeonHee/emotionDiary_ver2_react',
    thumbnail: emotionDiary2,
    read: `- node.js를 통한 react제작
    - 배열과 map함수를 사용
    - 삼항조건식으로 조건부 렌더링`
  },
  {
    id: 9,
    projectName: '리액트로 만든 감정다이어리',
    date: '23/07/12',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-emotiondiary.netlify.app/',
    github: 'https://github.com/OhKeonHee/emotionDiary_react',
    thumbnail: emotionDiary,
    read: `- node.js를 통한 react제작
    - 배열과 map함수를 사용
    - syled-components를 사용한 css와 테마구성
    - react-router-dom의 BrowserRouter를 사용해 각 페이지와 컴포넌트를 분기
    - react-router-dom과 react-redux의 useSelector, useLocation, useNavigate로 각 사이트마다  주소를 불러와 표시할 값을 달리함
    - reducer사용
    - localstorage와 JSON.stingify( )로 json을 문자열로 변환`
  },
  {
    id: 8,
    projectName: '리액트로 만든 TodoList',
    date: '23/07/11',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: ReactIcon,
    domain: 'https://ogh-react-todolist.netlify.app/',
    github: 'https://github.com/OhKeonHee/react_todolist',
    thumbnail: TodoList,
    read: `- node.js를 통한 react제작
    - 배열과 map함수를 사용
    - syled-components를 사용한 css와 테마구성
    - reducer사용`
  },
  
  {
    id: 7,
    projectName: '팀프로젝트 모바일, 지역 맛집 어플',
    date: '23/05/05 ~ 23/06/30',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://teamproject-2c38f.firebaseapp.com/',
    github: 'https://github.com/OhKeonHee/TeamProject_mobileApp',
    thumbnail: teamproject,
    read: `- PM 
    - WBS제작, 프로젝트 초기설계, 사이트맵 제작 
    - 각 팀원 결과 종합 및 수정
    - 어플소개용 웹사이트 제작
    - localstorage를 통해 로그인여부에 따라 보이는 화면 전환
    - js로 게시판, 댓글, 마이페이지, 홈 닉네임을 localstorage에 저장된 값으로 변경
    - 카카오api를 사용해 맵을 가져오고 이를 커스텀`
  },
  {
    id: 6,
    projectName: '싸이월드, JS를 활용한 끝말잇기',
    date: '23/05/11 ~ 23/05/12',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-cyworld.netlify.app/',
    github: 'https://github.com/OhKeonHee/Cyworld_Page',
    thumbnail: Cyworld,
    read: `- if문을 써서 끝말잇기의 마지막 단어와 첫번째 단어 가져와 비교하기
    - 각 id값을 가져와 두 단어의 비교, if문을 사용해 새로운 단어의 오답유무와 정답이라면 새 단어로 교체하기`
  },
  {
    id: 5,
    projectName: '두 번째 포트폴리오 연습',
    date: '23/04/04 ~ 23/05/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-2nd-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/2nd_portfolio',
    thumbnail: second_portfolio,
    read: `- slick slider 외부 플러그인을 사용해 프로젝트 슬라이드 기능 구현
    - 반응형을 위해 모바일용 css파일로 장치별 css적용
    - 포트폴리오 느낌을 다르게 주기 위해 js로 여러개의 색테마와 비디오테마 적용
    - a태그의 download기능을 처음 활용해 이력서를 올려두어 이력서를 다운받을수 있게함`
  },
  {
    id: 4,
    projectName: '첫 번째 포트폴리오 연습',
    date: '23/03/20 ~ 23/03/31',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-1st-portfolio.netlify.app/',
    github: 'https://github.com/OhKeonHee/1st_portfolio',
    thumbnail: first_portfolio,
    read: `- slick slider 외부 플러그인을 사용해 프로젝트 슬라이드 기능 구현
    - jQuery를 이용해 scroll effect를 사용 ( featherlight 외부 플러그인 )
    - featherlight 플러그인의 존재를 알고 scroll effect를 적용해 프로젝트가 역동적으로 변화.
    - 페이지 접속시 나타나는 애니메이션의 여러 기능을 접목시키고 각자 다른 속도를 내는법을 익힘.`
  },
  {
    id: 3,
    projectName: '음악 재생 페이지',
    date: '23/04/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-music-play.netlify.app/',
    github: 'https://github.com/OhKeonHee/music_play_page',
    thumbnail: music_play,
    read: `- JS를 활용해 플레이 버튼을 클릭하면 음악 앨범 이미지 rotate값과 traslate값 바꾸기
    - 그에 따른 배경 이미지를 증감연산자를 이용해 이미지 파일명을 index값으로 i + 1로 바꾸기
    - 플레이버튼과 일시정지 버튼 마다 onClickListener를 부여해서 재생과 사진에 class 부여
    - 이전 다음 버튼마다 클릭리스너를 사용해 음악 리스트 프레임을 rotate로 회전시키기`
  },
  {
    id: 2,
    projectName: 'UI/UX 학습용 페이지',
    date: '23/03/28 ~ 23/04/04',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: 'x',
    ReactIcon: 'x',
    domain: 'https://ogh-academy-uiux-page.netlify.app/',
    github: 'https://github.com/OhKeonHee/Academy_Page_UIUX',
    thumbnail: academy_uiux_page,
    read: `- CSS의 심화내용학습
    - 파일을 분할하여 import
    - 전후선택자, grid학습
    `
  },
  {
    id: 1,
    projectName: '모바일로 만든 밀키트페이지',
    date: '23/03/14 ~ 23/03/22',
    HtmlIcon: HtmlIcon,
    CssIcon: CssIcon,
    JsIcon: JsIcon,
    ReactIcon: 'x',
    domain: 'https://ogh-mealkit-mobile.netlify.app/',
    github: 'https://github.com/OhKeonHee/Mobile_MealKit_Page',
    thumbnail: mealkit_mobile,
    read: `- include 활용하여 겹치는 Header와 footer를 사용
    - figma를 사용해 프로젝트 디자인
    - Slick slider 플러그인을 사용해 슬라이드 기능을 구현
    - Jquery사용`
  },
]

const Projects = () => {
  return (
    <div className='Projects'>
      <Title>💻 It's My Projects</Title>
      <Wrapper>
        {project_arr.map((it) => (
          <Project key={it.id}>
            <Project_num>{it.id}</Project_num>
              <Overlay whileHover={{ opacity: 1 }}>
                <h4>{it.read}</h4>
                <div>
                  <a href={it.domain} target='_blank'>
                    <VscGlobe style={{transform: 'translateY(2px)'}} /> 프로젝트 보기
                  </a>
                  <a href={it.github} target='_blank'>
                    <VscGithubInverted style={{transform: 'translateY(2px)'}} /> 깃허브 보기
                  </a>
                </div>
              </Overlay>
              <Img src={it.thumbnail} />
            <Project_title>{it.projectName}</Project_title>
            <SkillSec>
              <Icons>
                <it.HtmlIcon />
                <it.CssIcon />
                <it.JsIcon />
                <it.TsIcon />
                <it.ReactIcon />
              </Icons>
              {it.date}
            </SkillSec>
            {/* <Project_read>
              프로젝트 공부내용 : <br />
              {it.read}
            </Project_read> */}
          </Project>
        ))}
      </Wrapper>
    </div>
  )
}

export default Projects
