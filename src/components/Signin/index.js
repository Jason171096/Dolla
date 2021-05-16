import React from 'react'
import {  } from './SigninElements'
import { useForm } from 'react-hook-form';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'


const Signin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        alert(data);
        console.log(data);
    }

    return (    
        <Container>
            <FormWrap>
                <Icon to='/'>
                    dolla
                </Icon>
                <FormContent>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel className="form-control" htmlFor='for'>Email</FormLabel>
                        <FormInput name="email" type='email' placeholder='E-mail'></FormInput>
                        <FormLabel className="form-control" htmlFor='for'>Password</FormLabel>
                        <FormInput name="password" type='password' placeholder='Password'></FormInput>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin;
