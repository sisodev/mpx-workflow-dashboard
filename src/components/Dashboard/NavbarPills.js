import React from 'react';
import styled from "styled-components";

const NavbarPills = (props) => {
    return (
    <Pills>{props.text.toUpperCase()}</Pills>
    )
}

export default NavbarPills;

const Pills = styled.button`
border-radius:5px;
color: white;
background-color: #ffa931;
border-color: transparent;
line-height:0em;
text-align: center;
padding:15px;
margin-top: 20px;
`