import { NavLink } from "react-router-dom";

const Navigation = () => {
    return ( 
        <header className="flex justify-between px-10 py-7 shadow-md sticky top-0 backdrop-blur-md items-center">
            <div className="flex space-x-3 items-center">
                <img src="/assets/Animation - 1728471325858.json  " alt='logo' width={75}/>
                <h2 className="text-3xl font-grapey font-bold">Mandy <span className="text-lime-700">Institute</span></h2>
            </div>
            <nav>
                <ul className="flex space-x-5 items-center">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/SignUp">Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink>Academics</NavLink></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Navigation;