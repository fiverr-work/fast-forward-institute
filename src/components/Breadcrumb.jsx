import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import BBreadcrumb from "react-bootstrap/Breadcrumb";

import { ReactComponent as LeftArrowIcon } from "../img/icons/leftArrow.svg";

const Breadcrumb = ({prevLink, prevPages, active}) => {

    return (
        <StyleBreadcrumb>
            {prevLink && 
            <Link className="left-arrow" to={prevLink}>
                <LeftArrowIcon />
            </Link>}
            {prevPages?.map((page, index)=>(
                <BBreadcrumb.Item key={index}>
                    {page}
                </BBreadcrumb.Item>
            ))}
            {active && <BBreadcrumb.Item active>{active}</BBreadcrumb.Item>}
        </StyleBreadcrumb>
    )
}

export default Breadcrumb

const StyleBreadcrumb = styled(BBreadcrumb)`
    .left-arrow{
        margin-right: 20px;
        position: relative;
        bottom: 1px;
    }
    a, li, li::before{
        font-weight: bold;
        font-size: 14px;
        text-transform: uppercase;
        color: #00C896 !important;
    }
    a{
        :hover{
            color: #000 !important;
        }
    }
`