import styled from 'styled-components';

export const Button = styled.button`
    width: 280px;
    height: 82px;
    background: #c1faf3;
    color: black;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    border: none;
    font-size: 20px;
    margin-bottom: 32px;
    
        :hover{
            background-color: #2d6b64;
            color:white;
            transform: scale(1.1);
      }
        :active{
            background-color: #2d6b64;
            color: white;
      }
        
`

export const ContainerPagina = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr 1fr;
    grid-column-end: 3;
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 20px;
    text-align: justify;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 2em;
    justify-items: center;
    align-items: center;
    background-color: #1DAE9D;
    color: white;

    .sectionLeft{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 20px;

    }

    .sectionRight{
        display: flex;

    }

 
`

