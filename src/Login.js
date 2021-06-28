import React from 'react'
import styled from 'styled-components'
import { auth, provider } from './firebase'


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            let user = result.user;
            console.log(user);
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <Container>
            <Content>
            <AmazonLogo src="https://i.imgur.com/lO6NPLi.png" />
            <h1>Sign into Almazon!</h1>
            <LoginButton
            onClick={signIn}>
                Sign in with Google
            </LoginButton>

            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8; 
    display: grid;
    place-items: center;
   
`

const Content = styled.div`
    padding:100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center;

`

const AmazonLogo = styled.img`
    height: 280px;
    margin-bottom: -50px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    height: 40px;
    border: 2px solid #a88734;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
`