import React from 'react'
import { styled } from 'styled-components'

const Div = styled.span`
  color: #E06C75;
`
const Class = styled.span`
  color: #D99F6C;
`
const Equal = styled.span`
  color: #56B6C2;
`
const ClassName = styled.span`
  color: #9CBF78;
  font-family: 'Noto Sans KR', sans-serif;
`
const Text = styled.span`
  color: var(--font-color);
  font-family: 'Noto Sans KR', sans-serif;
`

const about = () => {
  return (
    <div className='About'>
      <div className='code'>
        <div className='main'>
          <div className='introduce'>
            <h1 className='code-first'>
              <span className='code-num'>1</span>
              <span className='left-chevron'>! </span>
              <Div>DOCTYPE </Div>
              <Class>html </Class>
              <span className='right-chevron'></span>
              <br />
              <span className='code-num'>2</span>
              <span className='left-chevron'> </span>
              <Div>html </Div>
              <Class>lang </Class>
              <Equal>=</Equal>
              <ClassName> "ko" </ClassName>
              <span className='right-chevron'></span>
              <br />
              <span className='code-num'>3</span>
              <span className='left-chevron'> </span>
              <Div>head </Div>
              <span className='right-chevron'></span>
              <br />
              <span className='code-num' style={{marginRight: '60px'}}>4</span>
              <span className='left-chevron'> </span>
              <Div>title </Div>
              <span className='right-chevron'></span>
              <Text> 프론트엔드 개발자 오건희입니다. </Text>
              <span className='left-chevron'>/ </span>
              <Div>title </Div>
              <span className='right-chevron'></span>
              <br />
              <span className='code-num'>5</span>
              <span className='left-chevron'>/ </span>
              <Div>head </Div>
              <span className='right-chevron'></span>
              <br />
            </h1>
            <h1 className='code-second'>
              <span className='code-num'>6</span>
              <span className='left-chevron'></span>
              <Div>div </Div>
              <Class>class </Class>
              <Equal>=</Equal>
              <ClassName> " 자기소개 " </ClassName>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-third' style={{paddingLeft: '40px'}}>
              <span className='code-num' style={{marginLeft: '-40px'}}>7</span>
              <span className='left-chevron'></span>
              <Div>p</Div>
              <span className='right-chevron'></span><br />
              <span className='code-num' style={{marginLeft: '-40px'}}>8</span>
              <Text>
              신입이지만 전공인 백엔드부터 국비교육인 프론트까지 다양한 기술 스택을 경험하고 프로젝트를 진행함으로써,<br /> 문제 해결능력과 창의적 사고를 길렀습니다. <br /> 빠르게 적응하고 성장하여 조직의 목표를 이루는 데 기여하겠습니다.
              </Text><br />
              <div style={{width: '100%', height: 20}}></div>
              <Text>
              내 새로운 도전에 열정을 가지고 끊임없이 성장하는 모습으로 팀의 역량을 향상시키는 것을 목표로 삼고 있습니다. <br />  다양한 프로젝트 경험을 통해 문제를 해결하는 능력을 기를 것이며, 항상 새로운 기술과 트렌드에 대해 관심을 가지고 자기계발을 위해 노력할 것입니다.
              </Text><br />
              <div style={{width: '100%', height: 20}}></div>
              <Text>
              또한 대학 전공과 외부교육으로 인해 다양한 언어의 배움에 있어 부담감이 없으며  <br /> SI업체에서 길러온 프로젝트 수행능력으로 책임감있게 프로젝트를 완성시킬 수 있습니다.
              </Text><br />
              <span className='code-num' style={{marginLeft: '-40px'}}>9</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>p</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-fourth'>
              <span className='code-num'>10</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>div</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-second'>
              <span className='code-num'>11</span>
              <span className='left-chevron'></span>
              <Div>div </Div>
              <Class>class </Class>
              <Equal>=</Equal>
              <ClassName> " 개발자로서의 첫 희열 " </ClassName>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-third' style={{paddingLeft: '40px'}}>
              <span className='code-num' style={{marginLeft: '-40px'}}>12</span>
              <span className='left-chevron'></span>
              <Div>p</Div>
              <span className='right-chevron'></span><br />
              <Text>
                <span className='code-num' style={{marginLeft: '-40px'}}>13</span>
                졸업작품으로 학교 챗봇 프로젝트를 진행했습니다.<br />
                캡스톤 수업으로 경험했던 프론트엔드와 JAVA, tomcat, MariaDB를 이용한 백엔드를 담당했습니다.<br /> 정해진 기한 내에 프로젝트를 완성하기 위해 코드 하나 하나를 찾아보며 완성시킨 챗봇을 사람들 앞에 선보였을 때 편리성과 완성도에 대한 호평을 들으며 희열과 성취감을 느낄 수 있었습니다.<br />
                개발자로서 열정을 담아 확실한 결과물을 만들며 성취감과 함께 발전해 나가겠습니다. 
              </Text><br />
              <span className='code-num' style={{marginLeft: '-40px'}}>14</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>p</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-fourth'>
              <span className='code-num'>15</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>div</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-second'>
              <span className='code-num'>16</span>
              <span className='left-chevron'></span>
              <Div>div </Div>
              <Class>class</Class>
              <Equal>=</Equal>
              <ClassName> " 성격의 장점 " </ClassName>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-third' style={{paddingLeft: '40px'}}>
              <span className='code-num' style={{marginLeft: '-40px'}}>17</span>
              <span className='left-chevron'></span>
              <Div>p </Div>
              <Class> class</Class>
              <Equal>=</Equal>
              <ClassName> " 쉽게 포기하지 않는 끈기, 몰입력을 가지고 있습니다. " </ClassName>
              <span className='right-chevron'></span><br />
              <Text>
                <span className='code-num' style={{marginLeft: '-40px'}}>18</span>
                그림과 디자인을 좋아해 디자인 특허 출원에 도전해 본 경험도 있고, 기계를 좋아해 국제로봇대회에서 3등을 한 경험이 있습니다.<br /> 이처럼 저는 한번 빠지면 시간 가는 줄 모를 정도로 몰입하곤 합니다.<br /> 각 활동엔 창작의 고통이 따랐지만, 강한 끈기와 해내고 싶다는 생각 하나로 매일 매일 고민하며 결국에는 결과물을 만들어 냈습니다.<br />
                이러한 끈기와 몰입력은 입사하여 부딪히게 될 많은 어려움 또한 빠르게 극복하고 잘 해결해 나갈 힘이 되어 줄 것이라 확신합니다.<br />
              </Text>
              <span className='code-num' style={{marginLeft: '-40px'}}>19</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>p</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-fourth'>
              <span className='code-num'>20</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>div</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-second'>
              <span className='code-num'>21</span>
              <span className='left-chevron'></span>
              <Div>div </Div>
              <Class>class</Class>
              <Equal>=</Equal>
              <ClassName> " 입사 후 포부 " </ClassName>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-third' style={{paddingLeft: '40px'}}>
              <span className='code-num' style={{marginLeft: '-40px'}}>22</span>
              <span className='left-chevron'></span>
              <Div>p</Div>
              <Class> class</Class>
              <Equal>=</Equal>
              <ClassName> " 도전 = 공부 " </ClassName>
              <span className='right-chevron'></span><br />
              <Text>
                <span className='code-num' style={{marginLeft: '-40px'}}>23</span>
                개발 분야는 각 파트별로 원활한 소통이 중요하다고 생각합니다.<br /> 유연한 커뮤니케이션 능력을 보여드리는 소통하는 개발자가 되겠습니다.<br /> 입사 후 다양한 프로젝트를 경험하며 저 자신을 성장시키는 것을 목표로 삼겠습니다.<br /> 새로운 경험이나 배움을 두려워하지 않겠습니다.<br /> 또한 프론트엔드 분야의 업무 프로세스를 경험하며 선배들의 축적된 노하우를 빠른 습득력을 바탕으로 확실한 제 몫으로 소화해내겠습니다.<br /> 이러한 노력을 바탕으로 실력으로 보여드리는 집념있는 개발자가 되겠습니다.<br /> 
              </Text>
              <span className='code-num' style={{marginLeft: '-40px'}}>24</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>p</Div>
              <span className='right-chevron'></span>
            </h1>
            <h1 className='code-fourth'>
              <span className='code-num'>25</span>
              <span className='left-chevron'></span>
              <Text>/</Text>
              <Div>div</Div>
              <span className='right-chevron'></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
