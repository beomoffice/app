import React, { useRef } from 'react';
import datas from '../common/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import styled from "styled-components";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";


const ContentsBlock = styled.div`
  padding : 30px 240px;
  color : gray;
  
  .swiper-slide{
    display : flex;
    flex-direction : column;
    width : 285px;
  }
  .swiper-slide:hover .thumbnail::after{
    height : 100%;
    background : rgba(0,0,0,0.4);
  }
  .swiper-slide .thumbnail{
    width : 100%;
    height : 360px;
    position : relative;
    overflow : hidden;
    border-radius : 4px;
    margin-bottom : 8px;
  }
  .swiper-slide .thumbnail::after{
    display:block;
    content : '';
    width : 100%;
    height : 0;
    background : rgba(0,0,0,0);
    position : absolute;
    top : 0;
    left : 0;
    transition: background ease-in-out .2s;
  }
  .swiper-slide .thumbnail img{
    border-radius : 4px;
    height : 100%;
    margin : 0 auto;
    position : absolute;
    top : 0;
    left : 50%;
    transform : translateX(-50%);
  }
  .swiper-slide .thumbnail .no-img{
    width : 100%;
    height : 100%;
    background : #fff;
    display : flex;
    align-items : center;
    justify-content : center;
    color : #000;
    font-size : 16px;
  }
  .swiper-slide h2{
    font-size : 18px;
    color : white;
  }
  .swiper-slide a{
    font-size : 16px;
  }

  .btn{
    position : absolute;
    z-index : 9999;
    transform : translateY(-50%);
    background : white;
    width : 50px;
    height : 50px;
    display : flex;
    align-items : center;
    justify-content : center;
    top : 50%;
    border-radius : 50%;
    box-shadow : 2px 2px 2px 2px gray;
    cursor : pointer;
    font-size : 26px;
    color : skyblue;
    margin-top : -25px;
  }
  .prev{
    left : 16px;
  }
  .next{
    right : 16px;
  }

  .allViews{
    width : 100%;
    display : flex;
    flex-wrap : wrap;
  }
  .allViews .swiper-slide{
    margin : 0;
    padding : 0 12px 24px;
    width : calc(25% - 24px);
  }
  .allViews .swiper-slide .thumbnail{
    height : 240px;
  }
  .allViews .swiper-slide .thumbnail img{
    height : auto;
    width : 100%;
  }
`
export default function Home(){
  SwiperCore.use([Navigation]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <ContentsBlock>
      
      <div className="section">
        <h1>모아보기</h1>
        <Swiper
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          spaceBetween={32}
          slidesPerView={'auto'}
        >
          {datas.map((data)=>{
            return(
              <SwiperSlide key={data.name}>
                  <div className="thumbnail">
                    {data.img != null ? <img src={data.img} alt={data.name}/> : <div className="no-img">이미지가 없습니다.</div>}
                  </div>
                  <h2>{data.name}</h2>
                  {data.url != null ? <a href={data.url} target="_blank" rel="noopener noreferrer">바로가기</a> : null}
              </SwiperSlide>
            )
          })}
          <div ref={prevRef} className="prev btn"><AiOutlineArrowLeft/></div>
          <div ref={nextRef} className="next btn"><AiOutlineArrowRight/></div>
        </Swiper>
      </div>

      <div className="section">
        <h1>펼쳐보기</h1>
        <ul className="allViews">
          {datas.map((data)=>{
            return(
              <li key={data.name} className="swiper-slide">
                  <div className="thumbnail">
                    {data.img != null ? <img src={data.img} alt={data.name}/> : <div className="no-img">이미지가 없습니다.</div>}
                  </div>
                  <h2>{data.name}</h2>
                  {data.url != null ? <a href={data.url} target="_blank" rel="noopener noreferrer">바로가기</a> : null}
              </li>
            )
          })}
        </ul>
      </div>
    </ContentsBlock>
  );
};
