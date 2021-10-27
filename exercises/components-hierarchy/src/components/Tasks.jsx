import Task from './Task'

function Tasks({ tasks }) {
  return(
    <div>
      <h4>Here is a list of tasks</h4>
      <ul>
        {
          tasks.map(task => (
            <Task key={task.id} taskDescription={task.description} />
          ))
        }
      </ul>
    </div>
  )
}

export default Tasks;