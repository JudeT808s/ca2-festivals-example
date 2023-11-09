import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/festivals">Show All Festival</Link>
        </>
    )
}
export default Navbar
