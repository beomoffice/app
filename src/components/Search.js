import React, { useState, useRef } from 'react';
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import datas from '../common/data';

const SearchBlock = styled.div`
    background : #212121;
    border : 1px solid gray;
    border-radius : 4px;
    padding : 0 8px;
    position : fixed;
    z-index : 99999;
    top : 6px;
    left : 50%;
    transform : translateX(-50%);
    width : 100%;
    max-width : 880px;
    @media screen and (max-width: 1100px) {
        left : 112px;
        transform : translateX(0);
        width : calc(100% - 200px);
    }

    input{ 
        width : 100%;
        background : inherit;
        border : none;
        outline : none;
        color : #fff;
        height : 40px;
        padding : 0 8px;
        font-size : 18px;
    }
    button{
        background : inherit;
        border : none;
        outline : none;
        color : gray;
        font-size : 18px;
    }
    button:hover{
        color : white;
    }

    .allViews{
        width : 100%;
        padding : 20px 0px;
        display : flex;
        flex-wrap : wrap;
        max-height : 600px;
      }
      .allViews .swiper-slide{
        margin : 0;
        padding : 0 12px 24px;
        width : calc(25% - 24px);
      }
      .allViews .swiper-slide .thumbnail{
        height : 240px;
        border-radius : 4px;
        overflow : hidden;
        margin-bottom : 4px;
      }
      .allViews .swiper-slide .thumbnail img{
        height : auto;
        width : 100%;
      }
      .swiper-slide h2 { font-size : 18px;}
      .allViews .swiper-slide a{
          color : gray;
          font-size : 14px;
      }
`



let searchData = [];

export default function Search({ onSearch }){
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearching(search);
    }

    const onSearching = (value) => {
        if(!value){
            searchData = [];
            return
        } else {
            searchData = (datas.filter(data => data.name.includes(value)))
        }
    }

    return (
        <SearchBlock onSubmit={handleSubmit}>
            <div style={{display : 'flex', alignItems : 'center', borderBottom : '1px solid gray'}}>
                <button onClick={
                    onSearch
                }><BsArrowLeft/></button>               
                <input autoFocus
                    ref = {inputRef}
                    onChange={() => {
                        setSearch(inputRef.current.value);
                        onSearching(inputRef.current.value)
                        console.log(inputRef.current.value , '인풋레프')
                    }}
                    
                />
                <button onClick={()=>{
                    setSearch(inputRef.current.value);
                    onSearching(inputRef.current.value);
                }}><BiSearch/></button>
            </div>
            <ul className="allViews">
                {searchData.length > 0 ?
                    searchData.map((data)=>{
                        return(
                            <li key={data.name} className="swiper-slide">
                                <div className="thumbnail">
                                    {data.img != null ? <img src={data.img} alt={data.name}/> : <div className="no-img">이미지가 없습니다.</div>}
                                </div>
                                <h2>{data.name}</h2>
                                {data.url != null ? <a href={data.url} target="_blank" rel="noopener noreferrer">바로가기</a> : null}
                            </li>
                        )
                    }) : <p style={{color : 'gray', paddingLeft : 24}}>검색 결과가 없습니다.</p>
                }
            </ul>
        </SearchBlock>
    );
};
