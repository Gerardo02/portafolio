import React from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationCart from './NavigationCart';

const Navigation = () => {

    return ( 
        <nav className="p-3 flex items-center">
            <NavigationMenu />
            <NavigationCart />
        </nav>
     );
}
 
export default Navigation;