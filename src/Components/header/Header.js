import { Link } from "react-router-dom"
import "./Header.css"
import Search from "./Search"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header-left">
                    <Link to="/"><img className="img-icon" alt="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"></img></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/popular"><span>Popular</span></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/top_rated"><span>Top rated</span></Link>
                    <Link style={{textDecoration:"none"}} to="/movies/upcoming"><span>Upcoming</span></Link>
                    <Search/>
                    {/* <span className="search"><Search/></span> */}
                </div>
            </div>
        </>
    )
}

export default Header