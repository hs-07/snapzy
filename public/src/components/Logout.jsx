import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {BiPowerOff} from 'react-icons/bi';


export default function Logout() {
    const navigate = useNavigate();

    const handleClick = async() => {
        localStorage.clear();
        navigate("/login");
    }

  return (
    <Button className='btn' onClick={handleClick}>
        <BiPowerOff/>
    </Button>
  );
}

const Button = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
height: 2.3rem;
border-radius: 0.5rem;
background-color: #9a86f3;
transition: 0.3s ease-in-out;
border: none;
cursor: pointer;
svg{
    font-size:1.3rem;
    color: #ebe7ff;
}
&:hover {
    background-color: #c300ff;
}
`;
