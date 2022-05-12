import './App.css';
import {Routes ,Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home';
import Invalid from './components/Invalid'

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='home' element={<Home />}/>
        <Route path='*' element={<Invalid />}/>
      </Routes>
      
    </div>
  );
}

export default App;
