import Pagination from './router/router';
import { BrowserRouter} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
      <Pagination />
      </BrowserRouter>
    </div>
  );
}

export default App;
