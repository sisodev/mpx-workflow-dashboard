import React from 'react'
import styled from "styled-components";

import avatar_m from "../../assets/avatar_m.png";

const Avatar = ({name, logout}) => {
    return (
     <Card>
        <Image src={avatar_m} alt="avatar" />&nbsp;
        <Text>{name}</Text>
        <Button onClick={logout}>Logout</Button>
      </Card>
    )
  }
  
  export default Avatar
  
  const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%
  `;

  const Card = styled.div`
     display: flex;
     justify-content: space-around;
     align-items: center;
  `

  const Button = styled.button`
        color: palevioletred;
        background-color: rgba(0,0,0,0.1);
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 5px;
        border: 0px palevioletred;
  `

  const Text = styled.h3`
    color:white;
  `