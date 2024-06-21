import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import TsIcon from '../icons/TsIcon'
import { VscGithubInverted, VscGlobe } from 'react-icons/vsc'
import { ProjectList } from '../Components/ProjectList'
import { Icons, Img, Overlay, Project, Project_num, Project_title, SkillSec, Title, Wrapper } from '../Styles/ProjectsStyle.tsx'

const Projects = () => {
  const { project_arr } = ProjectList();
  return (
    <div className='Projects'>
      <Title>💻 It's My Projects</Title>
      <Wrapper>
        {project_arr.map((it) => (
          <Project key={it.id}>
            <Project_num>{it.id}</Project_num>
              <Overlay whileHover={{ opacity: 1 }}>
                <h4 style={{paddingBottom: 40}}>{it.read}</h4>
                <div style={{position: 'absolute', zIndex: 99, bottom: 0}}>
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
                <it.ReactIcon />
                {it?.TsIcon == TsIcon && <it.TsIcon />}
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
