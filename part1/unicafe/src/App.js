import { useState } from "react";

const Header = (props) => <h2>{props.name}</h2>

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}
const Positive = ({total, good}) => {
    return (
      <tr><td>positive {(good / total) * 100} %</td></tr>
    )
  
}

const Average = ({good, bad, total}) => {
  return (
    <tr><td>average {(good - bad) / total}</td></tr>
  )
}
const Statisticline = ({text, value}) => {
  return (
    <tr><td>{text} {value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total > 0) {
    return (
      <div>
        <table>
          <tbody>
              <Statisticline text="good" value={good} />
              <Statisticline text="neutral" value={neutral} />
              <Statisticline text="bad" value={bad} />
              <Statisticline text="all" value={total} />
              <Average good={good} bad={bad} total={total} />
              <Positive total={total} good={good} />
          </tbody>
        </table>
      </div>
    )
  }
  return <div>No feedback given</div>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  
  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setTotal(updatedGood + neutral + bad)
    // setPositive((updatedGood / total) * 100)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(updatedNeutral + good + bad)
    
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(updatedBad + good + neutral)
  }

  return (
    <div>
      <Header name="give feedback" />
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />
      <Header name="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App
