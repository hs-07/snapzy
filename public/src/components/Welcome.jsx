import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Robot from '../assets/robot.gif';

export default function Welcome({ currentUser }) {

    // const [currentUserName, setCurrentUserName] = useState(undefined);

    // useEffect(() => {
    //     if (currentUser) {
    //         setCurrentUserName(currentUser.username);
    //     }
    // }, [currentUser]);

    return (
        <Container>
            <img src={Robot} alt="Robot" />
            <h1>
                Welcome, <span>{currentUser.username}!</span>
            </h1>
            <h3>
                Please select a chat to Start Messaging.
            </h3>
        </Container>
    );
}

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e00ff;
}
`;
