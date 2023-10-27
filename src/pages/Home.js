import React, { useEffect, useState } from 'react'
import { VscAdd, VscChevronDown, VscEllipsis, VscChevronUp, VscChromeClose, VscChromeMinimize, VscChromeMaximize, VscArrowLeft, VscArrowRight, VscRefresh, VscInfo, VscAccount, VscKebabVertical } from 'react-icons/vsc'
import { FcGoogle } from "react-icons/fc";
import { TfiShare, TfiStar } from "react-icons/tfi";
import { Modal } from '../Components/Modal';

const Home = () => {
  const [view, setView] = useState('none');
  const [failView, setFailView] = useState('none');
  const [modalView, setModalView] = useState('none');
  const [code, setCode] = useState('')
  const [blink, setBlink] = useState('none')
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      codeInput();
      e.target.value = "";
    }
  }
  useEffect(() => {})
  const codeInput = () => {
    if(code === "npm start") {
      setView('block');
      setFailView('none');
      setTimeout(() => {
        setModalView('block');
      },1000)
    } else {
      setFailView('block');
      setView('none');
      setModalView('none');
    }
  }
  return (
    <div>
      <div className='Home'>
        <div className='code'>
          <div className='code-side'>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
            <h1>5</h1>
            <h1>6</h1>
            <h1>7</h1>
          </div>
          <div className='main'>
            <div className='title'>
              <h1 className='code-import'>
                <span style={{color: '#BB77D9'}}>import </span>
                <span style={{color: '#9CBF78'}}>'./css/App.css'</span>
                <span style={{color: 'var(--font-color)'}}>;</span>
              </h1>
              <h1 className='code-import' style={{marginBottom: '80px'}}>
                <span style={{color: '#BB77D9'}}>import </span>
                <span style={{color: '#E06C75', marginRight: '5px'}}>React</span>
                <span style={{color: '#BB77D9'}}>from</span>
                <span style={{color: '#9CBF78'}}>'react'</span>
              </h1>
              <h1 className='code-first'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>div </span>
                <span style={{color: '#D99F6C'}}>className</span>
                <span style={{color: '#56B6C2'}}>=</span>
                <span style={{color: '#9CBF78'}}>'title'</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-second'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>h1 </span>
                <span className='right-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>Thanks For Your Visit!</span>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>h1</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-third'>
                <span className='left-chevron'></span>
                <span style={{color: '#E06C75'}}>p </span>
                <span className='right-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>
                  OH KEON HEE's Portfolio
                </span>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>p</span>
                <span className='right-chevron'></span>
              </h1>
              <h1 className='code-fourth'>
                <span className='left-chevron'></span>
                <span style={{color: 'var(--font-color)'}}>/</span>
                <span style={{color: '#E06C75'}}>div</span>
                <span className='right-chevron'></span>
              </h1>
            </div>
          </div>
        </div>
        <div className='terminal-info'>
          <h3 className='left-bracket'></h3>
          <h3 style={{fontStyle: 'normal', transform: 'translateY(-3px)'}}>/ *</h3>
          <h3>터미널에 '<span>npm start</span>'를 입력하시면 해당 포트폴리오 설명창이 뜹니다.</h3>
          <h3 style={{fontStyle: 'normal', transform: 'translateY(-3px)'}}>* /</h3>
          <h3 className='right-bracket'></h3>
        </div>
        <div className='terminal'>
          <div className='terminal-nav'>
            <ul className='left'>
              <li>문제</li>
              <li>출력</li>
              <li>터미널</li>
              <li>디버그 콘솔</li>
            </ul>
            <ul className='right'>
              <li><VscAdd /><VscChevronDown style={{scale: '.8', marginLeft: '2px'}}/></li>
              <li><VscEllipsis /></li>
              <li><VscChevronUp /></li>
              <li><VscChromeClose /></li>
            </ul>
          </div>
          <div className='terminal-main'>
            PS C:\Users\Administrator\Documents\front_end_academy\portfolio_react> 
            <div className='blink' style={{display: `${blink}`}}></div>
            <input 
                type='text' 
                id='terminal_code' 
                onKeyDown={(e) => activeEnter(e)}
                onChange={(e) => setCode(e.target.value)}
                onFocus={(e) => setBlink('inline-block')}
              />
            <div className='terminal-success' style={{display: `${view}`}}>
              <h4 style={{color: '#63B865'}}>Compiled successfully!</h4><br />
              <h4>You can now view <span style={{color: 'var(--title)'}}>Portfolio</span> in the browser.</h4><br />
              <h4><b style={{color: 'var(--title)', marginRight: '170px'}}>Local:</b> http://localhost:<b style={{color: 'var(--title)'}}>3000</b></h4>
              <h4><b style={{color: 'var(--title)', marginRight: '24px'}}>On Your Network:</b>  http://192.168.110.180:<b style={{color: 'var(--title)'}}>3000</b></h4><br />
              <h4>Note that the development build is not optimized.</h4>
              <h4>To create a production build, use <b style={{color: '#42B3C2'}}>npm run build.</b></h4><br />
              <h4>webpack compiled <b style={{color: '#A5E075'}}>successfully</b></h4>
            </div>
            <div className='terminal-false' style={{display: `${failView}`}}>
              <h4 style={{color: '#F1443D'}}>Failed to compile.</h4>
              <h4>unknown command: "<b style={{color: '#F1443D'}}>{code}</b>"</h4>
              <h4 style={{color: '#F1443D'}}>{code} : '{code}' 용어가 cmdlet, 함수, 스크립트 파일 또는 실행할 수 있는 프로그램으로 인식되지 않습니다.<br /> 이름이 정확한지 확인하고 경로가 포함된 경우 경로가 올바른지 검증한 다음 다시 시도하십시오.</h4>
            </div>
          </div>
        </div>
        <Modal modalView={modalView} setModalView={setModalView} />
      </div>
    </div>
    
  )
}

export default Home
