import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [goodAmount, setGood] = useState(0)
  const [neutralAmount, setNeutral] = useState(0)
  const [badAmount, setBad] = useState(0)

  const goodHandler = () => setGood(goodAmount + 1)
  const neutralHandler = () => setNeutral(neutralAmount + 1)
  const badHandler = () => setBad(badAmount + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handler={goodHandler} text='good' />
      <Button handler={neutralHandler} text='neutral' />
      <Button handler={badHandler} text='bad' />
      <h1>statistics</h1>
      <StatReport
        goodAmount={goodAmount}
        neutralAmount={neutralAmount}
        badAmount={badAmount} />
    </div>
  )
}

const Button = (props) => {
  return (<button onClick={props.handler}>{props.text}</button>)
}
const StatReport = ({ goodAmount, neutralAmount, badAmount }) => {
  return (
    <>
      <StatRow name='good' amount={goodAmount} />
      <StatRow name='neutral' amount={neutralAmount} />
      <StatRow name='bad' amount={badAmount} />
      <div>all {goodAmount + neutralAmount + badAmount}</div>
      <Average goodAmount={goodAmount} neutralAmount={neutralAmount} badAmount={badAmount} />
      <Percents goodAmount={goodAmount} neutralAmount={neutralAmount} badAmount={badAmount} />
    </>
  )
}
const StatRow = (props) => {
  return (<div>{props.name} {props.amount}</div>)
}

const Average = ({ goodAmount, neutralAmount, badAmount }) => {
  let value = goodAmount * 1 + badAmount * -1
  return (<div>average {value / (goodAmount + neutralAmount + badAmount)}</div>)
}
const Percents = ({ goodAmount, neutralAmount, badAmount }) => {
  return (<div>positive {100* (goodAmount / (goodAmount + neutralAmount + badAmount))} %</div>)
}

ReactDOM.render(<App />, document.getElementById('root'));