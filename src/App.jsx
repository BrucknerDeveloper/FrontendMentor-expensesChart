import { useState } from 'react'

//components
import Balance from "./components/Balance/Balance"
import Spendings  from './components/Spendings/Spendings'

function App() {

  return (
    <div className="App">
      <Balance />
      <Spendings />
    </div>
  )
}

export default App
