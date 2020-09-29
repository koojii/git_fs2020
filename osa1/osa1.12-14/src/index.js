import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const anecInitVotes = props.anecdotes.map(x => 0)

  
  const randomInt = (max) => {
    return (
      Math.floor(Math.random() * Math.floor(max))
    )
  }

  const [votes, setVotes] = useState(anecInitVotes)
  const [actAnecNum, setActAnecNum] = useState(randomInt(anecdotes.length))

  const anecSelector = () => setActAnecNum(randomInt(anecdotes.length))
  const anecVoteUpdater = () => {
    const copyOfArr = [...votes]
    copyOfArr[actAnecNum] += 1 
    setVotes(copyOfArr)
  }
  
  return (

    <div>
      {props.anecdotes[actAnecNum]}
      <br />
      <p>has {votes[actAnecNum]} votes</p>
      <Button f={anecVoteUpdater} text='vote' />
      <Button f={anecSelector} text='next anectode' />
    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = (props) => {
  return (
    <button onClick={props.f}>{props.text}</button>
  )

}


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)