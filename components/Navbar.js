import {Link} from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'

const Navbar=()=>{
    return(
        <div className="navbar">

            <nav>
            <Link to="/" className="brand">Cooking Chef</Link>
            <SearchBar/>
            </nav>

        </div>
    )
}

export default Navbar