import React from 'react';
import Header from './Components/Header.js'
import { 
  BrowserRouter as Router,
  Switch,
  Route
 } from 'react-router-dom'
import Home from './Views/Home';
import EstudioMain from './Views/Estudio.js';
import TrabajoMain from './Views/Trabajo.js';
import Contacto from './Views/Contacto.js';


const App = () =>{
  return (
    <div>
      <Router>

        <Header />
          
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/estudio">
            <EstudioMain />
          </Route>

          <Route exact path="/trabajo">
            <TrabajoMain />
          </Route>

          <Route exact path="/contacto">
            <Contacto />
          </Route>

          
        </Switch>

        

      </Router>
    </div>
  );
}

export default App;
