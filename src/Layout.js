import { NavLink, Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <header>
            <nav>
                <ul className="flex justify-between">
                <li><NavLink to="/react-project">Top</NavLink></li>
                <li><NavLink to="/book-list">Books</NavLink></li>
                {/* <li><NavLink to="/contact">Author</NavLink></li> */}
                <li><NavLink to="/others">Others</NavLink></li>
                {/* <li><button>Color Change</button></li> */}
                </ul>
            </nav>
        </header>
        <main>
        <Outlet/>
        </main>
        <footer>
            <nav>
                <ul className="flex justify-between">
                <li><NavLink to="/react-project">Top</NavLink></li>
                <li><NavLink to="/book-list">Books</NavLink></li>
                {/* <li><NavLink to="/contact">Author</NavLink></li> */}
                <li><NavLink to="/others">Others</NavLink></li>
                </ul>
            </nav>
        </footer>
        </>
        )
}
export default Layout