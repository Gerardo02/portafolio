import React, { useState } from 'react';
import {useTransition, animated} from 'react-spring'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {

    

    const [showMenu, setShowMenu] = useState(false);
    

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })
    
    const transitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    /*
    <div className="text-xl pl-1">
                
                    <FontAwesomeIcon 
                        className="cursor-pointer"
                        icon={faBars}
                        onClick={() => setShowMenu(!showMenu)}
                    />
            </div>*/

    return ( 
        <>
            
            
            {
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50 "
                    onClick={() => setShowMenu(false)}
                    >
                        
                    </animated.div>
                )
            }

           {
                transitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="fixed bg-white top-0 left-0 w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 h-full z-50 shadow pl-5 pt-3"
                    >
                        <span className="font-bold py-3 block">
                            Menu
                        </span>
                        <ul>
                            <li>
                                <Link to="/" className="text-blue-500 py-3 border-t border-b block" onClick={() => setShowMenu(false)}>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-blue-500 py-3 border-b block" onClick={() => setShowMenu(false)}>
                                    Estudio
                                </Link>
                            </li>
                            <li>
                                <Link to="/trabajo" className="text-blue-500 py-3 border-b block" onClick={() => setShowMenu(false)}>
                                    Trabajo
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="text-blue-500 py-3 border-b block" onClick={() => setShowMenu(false)}>
                                    Contacto
                                </Link>
                            </li>
                            <li className="text-blue-500 py-3 border-b block" onClick={() => setShowMenu(false)}>
                                Crea tu vela
                            </li>
                        </ul>
                    </animated.div>
                )
            }
            
            <div className="pl-5">
                <Link to="/" >
                    <p className="font-sans font-semibold text-2xl text-gray-50">Gerardo Jerez Castro IPM</p>
                    <p className="font-sans font-light text-xl text-gray-300">Programador</p>
                </Link>
                
            </div>
            
        </>
     );
}
 
/* *** Logo acomdado en la navbar ***


*/


export default NavigationMenu;