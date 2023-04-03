
const Header = (props) => {
  // render the name of the course
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise}</p>
  )
}

const Content = (props) => {
  // render the part and number of exercise
  return (
    <div>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercise} />
      <Part part={props.parts[1].part} exercise={props.parts[1].exercise} />
      <Part part={props.parts[2].part} exercise={props.parts[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  return (
      <p>
        Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}
      </p>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        part: 'Fundamentals of React',
        exercise: 10
      },
  
      {
        part: 'Using props to pass data',
        exercise: 7
      },
      {
        part: 'State of a component',
        exercise: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
