import { NavLink, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <header>
            <nav>
                <ul className="flex justify-between">
                <li><NavLink to="/">Top</NavLink></li>
                <li><NavLink to="/information">Books</NavLink></li>
                <li><NavLink to="/contact">Author</NavLink></li>
                <li><NavLink to="/contact">Others</NavLink></li>
                <li><button>Color Change</button></li>
                </ul>
            </nav>
        </header>
        <Outlet/>
        <footer>
            <nav>
                <ul className="flex justify-between">
                <li><NavLink to="/">Top</NavLink></li>
                <li><NavLink to="/information">Books</NavLink></li>
                <li><NavLink to="/contact">Author</NavLink></li>
                <li><NavLink to="/contact">Others</NavLink></li>
                </ul>
            </nav>
        </footer>
        </>
        )
}
export default Layout