import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Loader from "@components/metrics/Loader";

const load = <Loader/>
const Card = styled.div`
    background-color: #AAAAAA;  
    height: 300px;
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

export const InfoCard = ({title}) => {
    const [loaded, setLoaded] = useState(false)
    const [oldData, setOldData] = useState(null)
    const verifiedUserURL = 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/users';
    const latencyURL = 'https://ea7k8rm5oc.execute-api.us-west-2.amazonaws.com/Prod/latency';
    let url = '';

    switch(title)
    {
        case 'Verified Users': url = verifiedUserURL; break;
        case 'Anonymous Users': url = verifiedUserURL; break;
        case 'Average Latency': url = latencyURL; break;
        default: url = null
    }

    useEffect(() => {
        if (!loaded && url != null) {
            setLoaded(true);
            fetch(url)
                .then(res => res.json())
                .then(result => setOldData(result[title]));
        }
    }, [])

    if(oldData == null)
    {
        return (
            <Card>
                <h1> {title} </h1>
                {load}
            </Card>);
    }
    else
    {
        return (
            <Card>
                <h1> {title} </h1>
                <h3> {oldData}</h3>
            </Card>);
    }

}

export default InfoCard;