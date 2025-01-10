import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return (
        <div className="navigation">
            <NavLink to ="/" className={({isActive})=> isActive? "nav-active" :""}>
                Accueil
            </NavLink>
            <NavLink to ="/About" className={({isActive}) => isActive? "nav-active":""}>
                A propos
            </NavLink>
            <NavLink to ="/News" className={({isActive}) => isActive? "nav-active":""}>
                News
            </NavLink >
        </div>
    )
}

export default NavBar;