import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 350px;
padding: 30px;
outline: 1px solid black;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
margin-bottom: 15px;
`
export const BtnSubmit = styled.button`
width: 100px;
margin: 20px auto 0px auto;
padding: 5px;
cursor: pointer;
border: 1px solid green;
border-radius: 10px;
:hover {
    background: blueviolet;
    color: white;
}
`
