import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.section`
    background: #01BF71;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const FormWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    max-height: 900px;
`

export const Icon = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    width: 100%;
`

export const FormContent = styled.div`
    align-self: center;
    max-width: 500px;
    height: 450px;
    margin-top: 100px;
    background: #010606;
    border-radius: 5px;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    margin: 50px;
`

export const FormH1 = styled.h1`
    color #fff;
    text-aling: center;
    font-size: 1.2rem;
    font-weight: 100;
`

export const FormLabel = styled.label`
    color #fff;
    margin-top: 20px;
    font-size: 1rem;
    align-self: start;
    font-weight: 100;
`

export const FormInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
    
`

export const FormButton = styled.button`
    margin: 20px 0;
    padding: 10px 0;
    width: 100%;
    font-size: 1rem;
    color: #fff;
    background: #01BF71;
    border-radius: 5px;
    cursor: pointer;
`
export const Text = styled(LinkR)`
    text-decoration: none;
    color: #fff;
    font-weight: 100;
`
