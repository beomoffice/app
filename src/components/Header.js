import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from '../images/logo.svg';
import { FaUserCircle } from "react-icons/fa";
import Search from './Search';
// import iconUser from '../images/iconUser.svg';
const HeaderBlock = styled.header`
    padding : 16px;
    position : sticky;
    top : 0;
    background : #030303;
    z-index : 99999999;

    nav { 
        display : flex;
        justify-content : space-between;
        align-items : center;
    }
    .main-nav{
        display : flex;
        justify-content : space-between;
        list-style : none;
    }
    .main-nav li{
        padding : 0 8px;
        color : gray;
        cursor : pointer;
        font-size : 18px;
    }
        .main-nav li:hover{
            color : white;
        }
        .main-nav .active{
            color : white;
        }
    .profile{
        height : 30px;
        width : 30px;
    }
`

export default function Header(){
    const [ search, setSearch ] = useState(false);
    const onSearch = () => {
        setSearch(!search);
    }
    
    return (
        <HeaderBlock>
            <nav className="site-nav">
                <Link to="/" style={{fontSize : 20, letterSpacing : '8px'}}>SangBeom</Link>
                {/* <Link to="/"><img src={logo}/></Link> */}
                <ul className="main-nav">
                    <li>
                        <NavLink to="/">홈</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">둘러보기</NavLink>
                    </li>
                    <li onClick={onSearch}>
                        검색
                    </li>
                </ul>
                <div className="account">
                    <div className="profile">
                    <FaUserCircle style={{height : '100%', width : '100%', color : 'gray'}}/>
                        {/* <div className="profile-img">
                            <img src={iconUser}/>
                        </div> */}
                    </div>
                </div>
                {search && <Search onSearch={onSearch}/>}
            </nav>
        </HeaderBlock>
    );
};

