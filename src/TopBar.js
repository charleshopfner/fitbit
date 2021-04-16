import classes from './Topbar.module.css'
import logo from "./images/amazon_logo.png"

const TopBar = () => {
    return (
        <header>
            <nav className={classes.topbar}>
                <img className={classes.logo} src={logo} alt="amazon logo" />
            </nav>
        </header>
    )
}

export default TopBar;