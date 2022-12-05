import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./Button";

const Portfolio = () => {
    const [myData, setMyData] = useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos/?page=30&query=office&client_id=7gPBrDt4JPrZygl0qBkjaec4jODLkWS5uo2X4rNuWDM")
        .then((res)=> setMyData(res.data)) 
    },[])
    return (
        <div className="myfolio-right-panel">
            <div className="myfolio-image-container">
                {
                    myData.map((post: { id: any; created_at:any; updated_at:any; urls: any; }) => {
                        const {id,created_at,updated_at,urls} = post
                            return (
                                <div className="myfolio-image-card" key={id}>
                                    <p>{created_at}&nbsp;&nbsp;{updated_at}</p>
                                    <div className="myfolio-port-image" style={{backgroundImage: `url(${urls.thumb})`}}>
                                        <Button name="View Page" cssClass="myfolio-image-button"></Button>
                                    </div>                                
                                </div>
                            )
                        }
                    )
                }
            </div>
        </div>
    ) 
}

export default Portfolio;