import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
// import Home from './pages/home/Home'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import './App.css'

import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'

function App() {
  const { authIsReady, user } = useAuthContext()
  const {mode} = useTheme()

  return (
    <div className={`App ${mode}`}>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <ThemeSelector />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login"> 
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {user && user.displayName && <Redirect to="/" />}
              {!user && <Signup />}
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/recipes/:id">
              <Recipe />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App