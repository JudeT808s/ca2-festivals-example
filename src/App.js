import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//Import Components
import Navbar from './components/Navbar'
//Import Pages
import Home from './pages/Home'
import FestivalsIndex from './pages/festivals/Index'
import FestivalsShow from './pages/festivals/Show'
import FestivalsCreate from './pages/festivals/Create'
import FestivalsEdit from './pages/festivals/Edit'

const App = () => {
  let protectedRoutes;

  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setAuthenticated(true);
    }
  }, [])
  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth);

    if (auth) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  };
  if (authenticated) {
    protectedRoutes = (
      <>
        <Route path='/festivals/create' element={<FestivalsCreate />} />
        <Route path='/festivals/:id/edit' element={<FestivalsEdit />} />
        <Route path='/festivals/:id' element={<FestivalsShow />} />
      </>
    );
  }
  // else {
  //   protectedRoutes = (
  //     <>
  //       <Route path='/festivals/create' element={<FestivalsCreate />} />
  //       <Route path='/festivals/:id/edit' element={<FestivalsEdit />} />
  //       <Route path='/festivals/:id' element={<FestivalsShow />} />
  //     </>
  //   )
  // }
  return (
    <Router>
      <Navbar authenticated={authenticated} onAuthenticated={onAuthenticated} />
      <Routes>
        <Route path='/' element={<Home authenticated={authenticated} onAuthenticated={onAuthenticated} />}></Route>
        <Route path='/festivals' element={<FestivalsIndex />}></Route>
      {protectedRoutes}
        {/* <Route path='/festivals/:id' element={(authenticated)?<FestivalsShow/> : (<Navigate to="/" />)}/>
        <Route path='/festivals/create' element={(authenticated)?<FestivalsCreate/> : (<Navigate to="/" />)}/>
     <Route path='/festivals/:id/edit' element={(authenticated)?<FestivalsEdit/> : (<Navigate to="/" />)}/> */}

      </Routes>
    </Router>
  );
}

export default App;
