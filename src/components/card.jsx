import React from 'react'
import { Bookmark, Timeline } from 'lucide-react'

const card = (props) => {
    return (
        <div className="card">
            <div className="top">
                <img src={props.brandLogo} alt="" />
                <button>save<Bookmark height={20} width={20} /></button>
            </div>
            <div className="center">
                <h3>{props.companyName} <span>{props.datePosted}</span></h3>
                <h2>{props.specialization}</h2>
                <div>
                    <h4>{props.tag1}</h4>
                    <h4>{props.tag2}</h4>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h1>
                    {props.hourlyPay}
                    </h1>
                    <address>{props.location}</address>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default card