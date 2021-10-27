import Tasks from './Tasks'

let tasks = [
  {description: 'Clean the bathroom', id: 1},
  {description: 'Cook', id: 2}, 
  {description: 'Clean the dog', id: 3}
]

function Home() {
  return(
    <main>
      <h3>Here is the home of the app</h3>
      <Tasks tasks={tasks} />
    </main>
  )
}

export default Home;