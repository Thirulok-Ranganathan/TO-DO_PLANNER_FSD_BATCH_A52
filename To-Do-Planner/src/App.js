
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className='Headlogo'>
        <h3>Mern Stack Todo App</h3>
        </div>
        
        <div className='contents'>
          <ul style={{listStyle: 'none'}}>
            <li className='home'><h3>Home</h3></li>
            <li className='addtodo'><h3>AddTodo</h3></li>
          </ul>
        </div>
      </header>
      <div>
        <h1 style={{textAlign: 'center', marginTop: '50px'}}>Todos</h1>
      </div>
      <div className='todoTable'>
        <table>
          <tr>
            <th>Todo</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>View</th>
          </tr>
          <tr>
            <td>My first todo</td>
            <td><img src='../images/edit.png' alt=''></img></td>
            <td><img src='../images/delete.png' alt=''/></td>
            <td>View Details</td>
          </tr>
          <tr>
            <td>My second todo</td>
            <td><img src='../images/edit.png' alt=''></img></td>
            <td><img src='../images/delete.png' alt=''/></td>
            <td>View Details</td>
          </tr>
          <tr>
            <td>My third todo</td>
            <td><img src='../images/edit.png' alt=''></img></td>
            <td><img src='../images/delete.png' alt=''/></td>
            <td>View Details</td>
          </tr>
          <tr>
            <td>My fourth todo</td>
            <td><img src='../images/edit.png' alt=''></img></td>
            <td><img src='../images/delete.png' alt=''/></td>
            <td>View Details</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
