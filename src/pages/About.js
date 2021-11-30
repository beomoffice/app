import React from 'react';
import styled from "styled-components";
import { FiMail, FiPhoneCall } from "react-icons/fi";
const ContentBlock = styled.div`
  padding : 60px 240px;
  text-align : center;
  color : gray;
  h1{
    letter-spacing : 3px;
  }

  dl {
    margin-bottom : 32px;
  }
  dl:last-child{
    margin-bottom : 0;
  }
  dt {
    margin-bottom : 24px;
    font-size: 24px;
    letter-spacing : 2px;
  }

  dd img{
    height : 80px;
    margin : 0 12px;
  }

  li{
    font-size : 18px;
    padding : 4px 0;
  }
`
const About = () => {
  return (
    <div>
      <ContentBlock>
        <div  className="section" style={{ display : 'flex', justifyContent : 'space-between', alignItems : 'end'}}>
          <div style={{ borderRadius : '50%', overflow : 'hidden', width : 360, height : 360, position : 'relative', background : 'white'}}>
            <img src="./testimg/myprofile.jpg" style={{ position : 'absolute', top : '50%', left : '50%', transform : 'translate(-50%, -50%)'}}/>
          </div>
          <h1 style={{ textAlign : 'right', wordBreak : 'keep-all', lineHeight : 1.6}}>
            반갑습니다!<br/>
            저는 <span style={{color : '#4FFBDF'}}>깔끔한 UI</span>와<br/>
            <span style={{color : '#845EC2'}}>다양한 느낌의 UX</span>를 만드는<br/>
            웹 퍼블리셔 입니다.
          </h1>
        </div>
        <div  className="section" style={{ textAlign : 'left', wordBreak : 'keep-all', lineHeight : 1.6, fontSize : 20,}}>
            저는 2년차 웹 퍼블리셔 박상범입니다. <br/>
            빡세게 일하고 시원하게 노는것이 삶의 모토입니다.<br/><br/>

            탄탄한 코드를 기반으로 하는 UI / UX를 추구하며, 어떻게 하면 더 간결하고 편하게 작업할 수 있는지에 관심이 많습니다.<br/>
            작업자의 입장에서, 사용자의 입장에서의 의견차이를 어떠한 방식으로 줄여나가야야 할지 생각도 많이 합니다.<br/>
            서로가 만족할만한 작업물을 만들어 내는 것이 어렵겠지만 만족할 수 있도록 해가는것이 저의 일이라고 생각합니다.<br/><br/>

            저는 제 일이 흥미롭고 즐겁습니다. 즐거우니 더 하고싶고, 더 잘하고싶습니다.<br/>
            좋아하는일을 프로페셔널하게 해내는 것,<br/><br/>
            그것이 저의 꿈입니다.
        </div>

        <div className="section">
          <h1>Stack</h1>
          <dl>
            <dt>Strong</dt>
            <dd>
              <img src="./testimg/html.png"/>
              <img src="./testimg/css.png"/>
              <img src="./testimg/js.png"/>
              <img src="./testimg/jquery.png"/>
            </dd>
          </dl>
          <dl>
            <dt>Experienced</dt>
            <dd>
              <img src="./testimg/php.png"/>
              <img src="./testimg/react.png"/>
            </dd>
          </dl>
        </div>

        <div className="section">
          <h1>Career</h1>
          <ul>
            <li>2018 ~ 2019 / 하이미디어종로점 UI/UX 수료(7개월)</li>
            <li>2019 / 에이블 인턴 (3개월)</li>
            <li>2019 ~ 2020 / 신비웹 사원 (7개월)</li>
            <li>2020 ~ 2021 / 어솔루션 사원 (9개월)</li>
          </ul>
        </div>

        <div className="section">
          <h1>CONTACT</h1>
          <ul>
            <li><FiMail style={{ marginRight : '8px', fontSize : 20, verticalAlign : 'bottom'}}/>beomoffice@gmail.com</li>
            <li><FiPhoneCall style={{ marginRight : '8px', fontSize : 20, verticalAlign : 'bottom'}}/>010-2797-7412</li>
          </ul>
        </div>
        
      </ContentBlock>
    </div>
  );
};

export default About;
