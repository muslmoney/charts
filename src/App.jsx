import React from 'react'
import { LineCharts } from './components/line'
import { PieCharts } from './components/pie'
import { CandleCharts } from './components/candle'

const App = () => {
  return (
    <div>
      <LineCharts/>
      <hr />
       <PieCharts/>
       <hr />
      <CandleCharts/>
    </div>
  )
}

export default App