import styled from "styled-components";
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  width: calc(100vw - 300px);
  color: var(--font-color);
  padding: 10px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 8px;
`
export const Title = styled.h1`
  font-family: Consolas, 'Courier New', monospace;
  padding: 10px 20px;
  color: var(--font-color);
`
export const Project = styled.div`
  width: 32.7%;
  /* border: 1px solid red; */
  background-color: var(--explorer-bg-color);
  position: relative;
  margin-bottom: 20px;
`
export const Project_num = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: var(--footer-btn);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-weight: bold;
  color: white;
  top: 5px;
  left: 5px;
`
export const SkillSec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`
export const Icons = styled.div`
  display: flex;
  gap: 5px;
  svg {
    width: 30px;
  }
`
export const Img = styled(motion.img)`
  width: 100%;
`
export const Overlay = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  white-space: pre-line;
  > h4 {
    color: lightgray;
    letter-spacing: 1px;
    line-height: 2;
    z-index: 9;
    padding: 0 10px;
    overflow-y: scroll;
    padding: 5px;
    a {
      color: #4D78ff;
      font-size: 14px;
    }
  }
  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    > a {
      color: #fff;
      width: 50%;
      margin: 0 3px;
      text-align: center;
      display: block;
      background-color: var(--footer-btn);
      border: 3px solid var(--footer-btn);
      padding: 7px;
      font-weight: bold;
      font-size: 14px;
      &:hover {
        background-color: transparent;
        border: 3px solid var(--footer-btn);
      }
    }
  }
  
`
export const Project_title = styled.h3`
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--font-color);
`
export const Project_read = styled.h3`
  font-weight: 300;
  padding: 10px 5px;
  line-height: 1.8;
  white-space: pre-line;
`