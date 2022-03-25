import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1em;
  border-bottom: 2px solid #1DAE9D;
`

export const Img = styled.img`
  width: 10%;

`
export const DivSacola = styled.div`
margin-left: 1em;
font-size: 2.3em;
position: relative;

.contador{
  height: 20px;
  width: 20px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: red;
  font-size: 14px;
  font-weight: 600;
  color: white;
  position: absolute;
  top: 20px;
  left:20px;

}


`

export const DivNav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`


export const Botao = styled.button ` 
    border-radius: 0.3em;
    border: 1px solid #1DAE9D;
    background-color: white;
    color: #625555;
    transition: 0.2s ease;
    align-self: center;
    width:100px;
    height: 40px;
    padding: 0.5em;
    font-size: 0.8em;
    margin-left: 1.5em;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.5s;
        :hover{
        background-color: #1DAE9D;
        color:white;
        transform: scale(1.1);
      }
      :active{
        background-color: #1DAE9D;
        color: white;
      }
`

