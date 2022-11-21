import React from "react"
import Bar from "./Bar"

import data from "../../../data/data.json"

export default function Chart() {
    let max =  highestExpenditure();

    function highestExpenditure() {
        let max = 0;
        data.map(data => {
            if(data.amount > max)
                max = data.amount
        })
        return max
    }
   

    const Bars = data.map((data, i) => {
        return (
            <Bar key={i} day={data.day} amount={data.amount} max={max}/>
        )
    })

    return (
        <div className="chart">
            <div className="chart__container">
                {Bars}
            </div>
            
            <hr className="chart__divider"/>
        </div>
    )
}