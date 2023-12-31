import styled from "styled-components";
import { Link } from "react-router-dom";
import image from '../../images/backgrounds.jpg'

export const FormContainer= styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background-image:url(${image});
    background-size: cover;
    background-repeat:no-repeat;
`;

export const FormWrap=styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon =styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color:#fff;
    font-weight: 700;
    font-size: 32px;
    @media screen and (max-width:480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;
export const FormContent=styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width:480px) {
        padding: 10px;
    }
`;
export const Form =styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    opacity: 0.9;
    padding: 60px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width:480px) {
        padding: 32px 32px;
    }
`;

export const FormH1=styled.h1`
 margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;
export const FormLabel=styled.label`
    margin-bottom:8px;
    font-size: 14px;
    color: #fff;
`;
export const FormInput=styled.input`
    padding: 10px 10px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton=styled.button`
background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;
export const TextContainer=styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
`;
export const Text=styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
`;
export const Text2=styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
`;
export const ErrorMessage=styled.span`
    color: red;
    margin-top: -30px;
    font-size: 10px;
   
   &:hover{
    font-size: 12px;
    transition: 0.3s ease-in;
   }
   &:active{
    opacity: 0;
   }
`;