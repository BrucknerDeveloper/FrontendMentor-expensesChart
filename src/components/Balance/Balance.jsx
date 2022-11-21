import React, {useState, useContext} from "react"
import logo from "../../assets/logo.svg"

import useCurrencyFormat from "../../customHooks/useCurrencyFormat"

function Balance() {
    const [balance, setBalance] = useState(921.48)

    const formatCurrency = useCurrencyFormat()

    return (
        <div className="balance">
            <p className="balance__heading">My balance</p>
            <h3 className="balance__value">{formatCurrency(balance)}</h3>
            <img className="balance__logo" src={logo} />
        </div>
    )
}

export default Balance
