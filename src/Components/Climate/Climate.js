import React, {useState,useEffect} from 'react';
import classNames from 'classnames';
import './Climate.css';

const climateConfig = {
    summer: {
        text: "Oh my god its so hot here",
        iconClassName: 'sun'
    },
    winter: {
        text: "Its freezing cold here",
        iconClassName: 'snowflake'
    }
}

function Climate({lat,lng}){
    const [climate,setClimate] = useState();
    useEffect(() => {
        if((lat > 0)){
            setClimate("summer")
        }else{
            setClimate("winter")
        }
    }, [])
    if(!climate) { return <div></div> }
    const wrapperClassName = classNames('climate-section-wrapper',{summer:climate == "summer"},{winter:climate == "winter"});
    const iconClassName = classNames('fas',{'fa-sun':climate == "summer"},{'fa-snowflake':climate == "winter"});
    return(
        <React.Fragment>
            <div className={wrapperClassName}>
                <i className={`${iconClassName} iconLeft`}></i> 
                <i className={`${iconClassName} iconRight`}></i>
                <h1> {climateConfig[climate].text} </h1> 
            </div>
        </React.Fragment>
    )
}

export default Climate;