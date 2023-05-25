import './App.css'
import Workspace from './components/Workspace';
import Toolbar from './components/Toolbar';

function App() {

  return (
    <div>
      <Toolbar />
      <div>
        <Workspace/>
      </div>
    </div>
  );
}

export default App;
