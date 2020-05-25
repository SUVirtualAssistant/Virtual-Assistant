import React from "react";
import styled from "styled-components";

const Icon = styled.div`
    width: 100px;
    height: 100px;
    background-color: black;
    
    margin: auto;
    position: relative;
    
    border-radius: 50%;
    animation: spin 1s linear infinite;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #aa0000;
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`

const Loader = ({}) =>
{
    return <Icon/>;
}

export default Loader;