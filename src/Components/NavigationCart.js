import React, { useState } from 'react';
//import {useTransition} from 'react-spring'
import logobien from '../IMG/logobien.jpeg'


const NavigationCart = () => {

    const [showCart, setShowCart] = useState(false);
    
/*
    const maskTransitions = useTransition(showCart, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        })
    
    const transitions = useTransition(showCart, null, {
        from: { opacity: 0, transform: 'translateY(-100%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-100%)' },
        })
*/

    return ( 
        <>
            <span className="text-xl absolute right-0 pr-3">
                
                <span 
                    className="cursor-pointer"
                    onClick={() => setShowCart(!showCart)}
                >
                    
                    <img 
                        src={logobien} 
                        alt="Logo" 
                        className="w-40 md:w-40 xl:w-40 pr-3 pt-20"
                    ></img>
                </span>
                
            </span>

            
        </>
     );
}
 
export default NavigationCart;

/*  
<ul>
    <li className="text-blue-500 py-3 border-t border-b block">
        Iniciar Sesion
    </li>
    <li className="text-blue-500 py-3 border-b block">
        Categorias
    </li>
    <li className="text-blue-500 py-3 border-b block">
        Crea tu vela
    </li>
</ul> 



{
                maskTransitions.map(({ item, key, props }) =>
                    item && 
                    <animated.div 
                    key={key} 
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowCart(false)}
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
                    className="fixed bg-white top-0 right-0 w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 h-full z-50 shadow pl-5 pt-3 overflow-y-scroll scrolling-touch"
                    >
                        <div>
                            <span className="font-bold py-3 block border-b">
                                Carrito
                            </span>

                            <div className="pt-4 pb-4 flex flex-row justify-between items-center border-b block pr-1">
                                <div>
                                    <img src={logo512} alt="sample" className="w-16"></img>
                                    <span className="">Velaneitor</span>
                                </div>
                                
                                <span className="">$500.00</span>

                                <div className="space-x-4">
                                    
                                    <input type="number" min="1" max="9" defaultValue="1" className="w-8 sm:w-10 bg-gray-200 border-black rounded-lg"></input>
                                    
                                    <button className="text-white bg-red-600 rounded-lg h-10 w-16 sm:w-20">Eliminar</button>
                                </div>
                            </div>
                            
                            
                            
                            
                            
                            <div className="flex flex-row justify-between items-center block pr-3">
                                <button className="text-white bg-red-600 rounded-lg pl-5 pr-5 pt-1 pb-1">Proceder al pago</button>
                                <span className="">Total: 500$</span>
                            </div>
                            
                        </div>
                        
                    </animated.div>
                )
            }
*/