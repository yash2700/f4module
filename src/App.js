import './App.css';
import Home from "../src/Pages/home"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./components/header"
import FullView from "./Pages/fullView"

function App() {
  return (
    <div className="App">
      <Header />
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}>
        </Route>
        <Route path='/item/:id' element={<FullView />}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
