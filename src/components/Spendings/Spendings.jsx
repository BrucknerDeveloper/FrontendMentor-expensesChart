import React from "react"

import Chart from "./Chart/Chart"
import Summary from "./Summary/Summary"

export default function Spendings() {

    return (
        <div className="spendings">
            <h2 className="spendings__heading">Spending - Last 7 days</h2>
            <Chart />
            <Summary />
        </div>
    )
}