import styled from 'styled-components'

export const Container = styled.div`
    margin: 50px auto;
    padding: 20px;
    width: 70%;
    height: 90vh;
    background-color: #1DAE9D;

    .main_cad {
        margin: 0 auto;
        color: #FFFFFF;
        height:80vh;
        width: 70%;
        text-align: center;
    }
    .form {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
    }
    .form input {

        padding: 12px;
        height: 30px;
        margin: 10px;
        border: 0;
        border-radius: 8px;

        font-size: 14px;
        font-style: normal;
        font-weight: bold;
        line-height: 146.28%;

        color: #AEB6C1;

    }
    .form select {

        padding: 12px;
        height: 50px;
        margin: 10px;
        border: 0;
        border-radius: 8px;

        font-size: 14px;
        font-style: normal;
        font-weight: bold;
        line-height: 146.28%;
        background-color: #FFFFFF;
        
        color: #AEB6C1;


    }
    .form_button button {
        
        width: 40rem;
        padding: 12px;
        height: 50px;
        margin: 10px;
        border: 0;
        border-radius: 8px;
        cursor: pointer;
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 146.28%;

        color: #AEB6C1;
    }

`