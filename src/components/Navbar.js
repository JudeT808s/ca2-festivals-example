import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({authenticated, onAuthenticated}) => {
    const navigate = useNavigate();
    const logout = () =>{
        onAuthenticated()
    }
    return (
        
        <>
            <Link to="/">Home</Link>
            <Link to="/festivals">Show All Festival</Link>
            <Link to="/festivals/create">Create</Link>

            {(authenticated)? (<button onClick= {() => onAuthenticated(false)}>Logout</button>) : ""}
        </>
    )
}
export default Navbar
