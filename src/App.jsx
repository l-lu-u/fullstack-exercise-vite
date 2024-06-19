const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you have been to the earth for {props.age} years.</p>
    </div>
  ) 
}

const Footer =() => {
  return (
    <div>
      Greetin app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: 'Utu', age: 4},
    {name: 'Ene', age: 10},
  ]

  console.log(friends)
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={friends[0].name} age={friends[0].age}/>
      <Hello name={friends[1].name} age={friends[1].age} />
      <Footer />
    </>
  )
}

// should not remove the line below!
export default App