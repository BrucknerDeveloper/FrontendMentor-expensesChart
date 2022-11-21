import React, {useState} from "react"
import useCurrencyFormat from "../../../customHooks/useCurrencyFormat"

export default function Summary() {
    const [totalSpendings, setTotalSpendings] = useState("478.33")

    const formatCurrency = useCurrencyFormat()

    return (
        <div className="summary">
            <p className="summary__heading medium-brown">Total this month</p>
            <div className="summary__container">
                <h1 className="summary__total dark-brown bold">{formatCurrency(totalSpendings)}</h1>
                <h3 className="summary__percent dark-brown bold">+2.4%</h3>
                <p className="summary__lastMonth medium-brown">from last month</p>
            </div>
        </div>
    )
}