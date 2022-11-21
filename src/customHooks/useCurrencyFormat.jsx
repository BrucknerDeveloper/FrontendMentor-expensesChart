import {useState} from "react"

function useCurrencyFormat() {
    const [format, setFormat] = useState({locale: "en-US", currency: "USD"})

    function formatCurrency(value) {
        return Intl.NumberFormat(format.locale, {style: 'currency',currency: format.currency,}).format(value) 
    }

    return formatCurrency
}

export default useCurrencyFormat