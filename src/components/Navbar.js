import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { useLogout } from '../hooks/useLogout'
import { useTheme } from "../hooks/useTheme"

// styles
import styles from './Navbar.module.css'
import Searchbar from './Searchbar'
import './Navbar.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { color } = useTheme() 

  return (
    <nav className="navbar" style={{background: color}}>
    <ul>
      <Link to="/" className="brand">
          <h1>Food Recipes</h1>
      </Link>

      {!user && (
          <>
              <Link to="/login" className="btn">Login</Link>
              <Link to="/signup">Signup</Link>
          </>
      )}

      {user && (
        <>
          <h4 style={{margin: 30}}>hello, {user.displayName}</h4>
          <Searchbar />
          <Link to="/create"><button>Create Recipe</button></Link>
          <button onClick={logout}>Logout</button>
        </>
      )}
      </ul>
    </nav>
  )
}
