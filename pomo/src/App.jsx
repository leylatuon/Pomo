import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import StudyPage from './pages/study';
import Login from './pages/login';
import SignUp from './pages/signup';
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
      <div className="App">
        <NavBar/>
        <div className="container">
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/signup' element={<SignUp/>}></Route>
                <Route path='/study' element={<StudyPage/>}></Route>
            </Routes>
        </div>
      </div>
    );
  }
  
export default App;
