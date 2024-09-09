

import { NavLink } from "react-router-dom"
const Navbar = () =>{

   const activeStyle = 'underline underline-offset-4'
   
    return(
        <nav className="flex justify-between items-center fixed z-10 w-full top-0 py-5 px-8 text-sm font-light ">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to='/' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            PresuViaje
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/destinos' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            Destinos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/hoteles' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            Hoteles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/parques' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            Parques
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    presuviaje@gmail.com
                    
                </li>
                <li>
                    <NavLink
                        to='/destinos' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            Destination
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to='/sing-in' className={({isActive})=>
                            isActive ? activeStyle : undefined
                        }>
                            Sign In
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )

}

export default Navbar