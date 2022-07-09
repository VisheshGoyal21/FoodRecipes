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
            <><Link to="/login">Login</Link><Link to="/signup">Signup</Link></>
        )}

        {user && (
          <>
            <li>hello, {user.displayName}</li>
            {/* <Searchbar /> */}
            <li><Link to="/create">Create Recipe</Link></li>
            <li>
              <button className="btn" onClick={logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
