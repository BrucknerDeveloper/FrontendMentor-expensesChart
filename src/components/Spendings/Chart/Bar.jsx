import React, {useState, useEffect} from "react"

import useCurrencyFormat from "../../../customHooks/useCurrencyFormat"

export default function Bar(props) {
    const [hovered, setHovered] = useState(false)
    
    const formatCurrency = useCurrencyFormat()

    function barHeight(max, current) {
        return 150 * (current/max) + "px"
    }

    let styles = {
        height: barHeight(props.max, props.amount),
        backgroundColor: props.max === props.amount ? "hsl(186, 34%, 60%" : "hsl(10, 79%, 65%)",
    }

    return (
        <div className="bar">
            {hovered && <div className="bar__hover">{formatCurrency(props.amount)}</div>}
            <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="bar__box" style={styles}></div>
            <p className="bar__day medium-brown">{props.day}</p>
        </div>
    )
}