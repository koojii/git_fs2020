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
      <Statistics
        goodAmount={goodAmount}
        neutralAmount={neutralAmount}
        badAmount={badAmount} />
    </div>
  )
}

const Button = (props) => {
  return (<button onClick={props.handler}>{props.text}</button>)
}
const Statistics = ({ goodAmount, neutralAmount, badAmount }) => {
  let interacted = !(goodAmount === 0 && neutralAmount === 0 && badAmount === 0)

  if (!interacted) { return (<div>No feedback given</div>) }

  return (

    <table>
      <tbody>
        <StatisticLine name='good' amount={goodAmount} />
        <StatisticLine name='neutral' amount={neutralAmount} />
        <StatisticLine name='bad' amount={badAmount} />
        <StatisticLine name='all' amount={goodAmount + neutralAmount + badAmount} />
        <StatisticLine name={'average'} amount={average(goodAmount, neutralAmount, badAmount)} />
        <StatisticLine name={'positive'} amount={percents(goodAmount, neutralAmount, badAmount)} />
      </tbody>
    </table>
  )
}
const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.amount}</td>
    </tr>)
}

const average = (goodAmount, neutralAmount, badAmount) => {
  let value = goodAmount * 1 + badAmount * -1
  return (value / (goodAmount + neutralAmount + badAmount))
}
const percents = (goodAmount, neutralAmount, badAmount) => {
  return (100 * (goodAmount / (goodAmount + neutralAmount + badAmount)) + '%')
}

ReactDOM.render(<App />, document.getElementById('root'));