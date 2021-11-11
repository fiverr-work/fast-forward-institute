import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterStyle className="container">
            <Link to="/terms-conditions">terms and conditions</Link>
        </FooterStyle>
    )
}

export default Footer


const FooterStyle = styled.footer`
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;

    a{
        font-family: "OpenSans bold";
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;
        color: #00C896;
        :hover{
            color: #000;
        }
    }
`