import React from "react";
import styled from "styled-components";
import Loader from "@components/metrics/Loader";

const Card = styled.div`
    background-color: #AAAAAA;  
    h3 {
        margin-top: 50%;
        text-align: center;
        font-size: 50px;
    }
    
    h1 {
      font-size: 15px;
      text-align: center; 
    }
`

const InfoCard = ({title, value}) => {
    return (
        <Card>
            <h1> {title} </h1>
            <h3> {value} </h3>
            <Loader/>
        </Card>);

}

export default InfoCard;