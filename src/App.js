import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Import Components
import Navbar from './components/Navbar'
//Import Pages
import Home from './pages/Home'
import FestivalsIndex from './pages/festivals/Index'
import FestivalsShow from './pages/festivals/Show'
function App() {
  return (
    <Router>
          <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/festivals' element={<FestivalsIndex />}></Route>
        <Route path='/festivals/:id' element={<FestivalsShow />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
