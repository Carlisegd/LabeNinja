import styled from 'styled-components'


export const ContainerServicos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Container = styled.div`
    margin: 50px auto;
    width: 95%;
    height: 100%;
    .container_search {
        height: 100px;
        align-items: center; 
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
        grid-gap: 20px;        
        justify-content: space-around;
    }
    .container_search input {
        border-radius: 8px;
        border: 1px solid #1DAE9D;
        padding:12px 24px;
    }
    .container_search .select {
        border-radius: 8px;
        border: 1px solid #1DAE9D;
        padding:12px 24px;
        background-color: #FFFFFF;
    }
    .container_list {
        margin-top: 5px;
        width: 90%;
        padding: 100px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 3fr));
        grid-gap: 20px;
        
    }
    .container_list ul {
        display: relative;
         list-style: none;              
    }
    .buttons_card {
        margin-top: 20px;
    }

    .buttons_card button {
        display: flex;
        flex-direction: row;
        align-content: center;
        padding: 12px 20px;
        border: 0;
        border-radius: 8px;
        margin-right: 10px;
        position: relative;
        top: 40%;
        cursor: pointer;
        background-color: transparent;
        transition: transform 0.5s;
        
        :hover{
        background-color: transparent;
        color: #1DAE9D;
        transform: scale(1.3);
      }

    }
    .detalhe {
      position: relative;
      top:10px;
      font-size: 15px;

    }

    .title {
      position: relative;
      font-size: 25px;
      font-weight: bold;

    }

    .logo {
      width: 20%;
    }

    


    .card .price {
        position: relative;
        top:50px;
        margin: 10px;
        background-color: #FFFFFF;
        width: 80%;
        color: #1DAE9D;
        /* border-radius: 8px; */
        padding: 10px;
    }
    .container_cart {
        display: flex;
        background-color: #FFFFFF;
        width: 100%;
        height:60vh;
        border-radius: 12px;
        flex-direction: column;
        justify-content: space-between;
        margin: 110px 50px;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
    .container_cartOff {
        display: none;
    }
    .header {
        border-bottom: 1px solid #1DAE9D;
        padding-left: 10px;
    }
    .header p {
        font-size: 24px;
        color: #1DAE9D;
    }
    .main {
        margin: 0 auto;
        width: 100%;
        height: 60vh;
        overflow-y:scroll;
    }
    .main ul {
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        list-style: none;
        padding: 0;
    }
    .main li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background-color: #1DAE9D;
        color: #FFFFFF;
        width: 80%;
        border-radius: 4px;
    }
    .footer {
        display: flex;
        background-color: #CCCCCC;
        padding: 10px;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-radius:0 0 12px 12px;
    }
    .footer p {
        font-weight: bold;
    }
    .footer button {
        background: #1DAE9D;
        color: #FFFFFF;
        padding:10px 30px;
        border: 0;
        border-radius: 4px;
        text-transform: uppercase;
        cursor: pointer;
    }
    .containerMainList {
        display: grid;
        grid-template-columns: 3fr 1fr;              
    }
    .containerMainListOff {
        display: grid;
        grid-template-columns: 1fr;
       
    }
    .content {
    width:100%;
    height:100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  
  .card:hover .content {
    transform: rotateY( 180deg ) ;
    transition: transform 0.5s;
    
  }
  .card {
    position: relative;
    margin: 100px 0 0 0;
    height: 400px;
    width: auto;

  }
  .front,
  .back {
    position: absolute;
    top: -100px;
    left:-40px;
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-align: center;
    border-radius: 10px;
    backface-visibility: hidden;
  }
  
  .front {
    display: flex;
    background-color: #1DAE9D;
    padding: 20px;
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    /* font-size: 20px;
    font-weight: bold; */

    flex-direction: column;
    justify-content: space-between;
    /* justify-content: flex-end; */
    align-items: center;
   
}
.front div {
    padding: 10px;
}
.back {
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    /* top: -100px; */
    left:10px;
    background-color: #1DAE9D;
    height: 100%;
    width: 100%;
    color: #FFFFFF;
    text-align: center;
    font-size: 12px;
    /* font-weight: bold; */
    padding: 20px;
    /* border-radius: 10px; */
    transform: rotateY(180deg);
}

.logo2 {
      width: 10%;
      position: relative;
      top: 5px;
      
      
}

.bandeiras{
  position: relative;
  top: 50px;
  font-size: 12px;
  border-top: 1px solid;
  border-bottom: 1px solid;
}


.typePayments {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    justify-content: center;
    margin: 5px auto;
    /* font-size: 14px; */
    flex-wrap: wrap;
}
.typePayments ul {
    display: flex;
    align-items: center;
    /* text-align: center; */
    /* background-color:#FFFFFF; */
    /* padding: 4px; */
    color:white;
    
    /* border-radius: 4px; */

}
.typePayments li {
    /* background-color:#FFFFFF; */
    padding: 1px;
    margin-left: -20px;
    margin-bottom: 10px;
    /* border-radius: 4px; */

}
  .price2 {
  position: relative;
  top: 50%;
  font-size: 20px;
  color: white;
  font-weight: bold;

`;

