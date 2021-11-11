import React, {useState} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"
import Dropdown from "react-bootstrap/Dropdown"

import { ReactComponent as MenuIcon } from "../img/icons/menu.svg"
import { ReactComponent as CloseIcon } from "../img/icons/close.svg"

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    return (
        <NavbarStyle>
            <div className="container">
                <Link className="brand" to="/">Fast Forward Institute</Link>
                <div className={menu ? "nav-links show" : "nav-links"}>
                    {menu && <CloseIcon onClick={()=>setMenu(false)}/>}
                    <Link to="/" onClick={()=>setMenu(false)}>Home</Link>
                    <Link to="/books" onClick={()=>setMenu(false)}>Books</Link>
                    <Link to="/contact">Contact</Link>
                    <Dropdown>
                    <Dropdown.Toggle>
                        En
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>setMenu(false)}>English</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setMenu(false)}>German</Dropdown.Item>
                        <Dropdown.Item onClick={()=>setMenu(false)}>Spanish</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                </div>
                <MenuIcon className="toggle-sidebar" onClick={()=>setMenu(true)}/>
            </div>
        </NavbarStyle>
    )
}

export default Navbar

const NavbarStyle = styled.nav`
    z-index: 10;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
    padding-top: 28px;
    padding-bottom: 28px;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .brand{
        font-family: "OpenSans Bold";
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
    }
    a{
        color: black;
    }
    svg{
        cursor: pointer;
        padding: 10px;
        box-sizing: content-box;
    }
    .nav-links{
        display: flex;
        align-items: center;
        transition: left 200ms;
        &.show{
            left: 0;
            right: 0;
            transition: left 200ms, right 200ms;
        }
        >svg{
            position: fixed;
            top: 5vh;
            right: 10vw;
        }
        >a{
            font-family: "OpenSans Regular";
            font-weight: normal;
            font-size: 18px;
            line-height: 25px;
            margin-right: 25px;
            :hover{
                color: #00C896;
            }
        }
    }
    .dropdown{
        button{
            background: none !important;
            box-shadow: none !important;
            border: none !important;
            color: #000 !important;
            text-transform: uppercase;
        }
        .dropdown-item:active{
            background-color: #00C896;
        }
    }
    .toggle-sidebar{
        display: none;
    }
    @media (max-width: 768px){
        .toggle-sidebar{
            display: block;
        }
        .nav-links{
            position: fixed;
            top:0;
            bottom: 0;
            right: auto;
            left: -100%;
            transition: left 200ms, right 200ms;
            background: #fff;
            flex-direction: column;
            justify-content: center;
            >a{
                margin-right: 0;
                margin-bottom: 15px;
                padding: 15px 0;
            }
        }
    }
    @media (max-width: 576px){
        .brand{
            font-size: 18px;
            line-height: 25px;
        }
    }
`