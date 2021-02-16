import React from 'react';
import github from '../IMG/github.png'
import bases from '../IMG/basesdatos.png'
import opengl from '../IMG/opengl.png'
import reactimg from '../IMG/reactimg.png'
import battleship from '../IMG/battleship.png'

const BodyHome = () => {
    return ( 
        <div class="justify-center">
            <div>
                <img
                    src={reactimg}
                    alt="Reactimg"
                    className="pt-32"
                ></img>
                <p className="text-center font-sans font-light text-3xl text-gray-300">Conocimientos de reactJS</p>
            </div><br />
            

            <div>
                <img
                    src={bases}
                    alt="Bases"
                    className="pt-32"
                ></img>
                <p className="text-center font-sans font-light text-3xl text-gray-300">Conocimiento de bases de datos</p>
            </div><br />

            <div>
                <img
                    src={opengl}
                    alt="Opengl"
                    className="pt-32"
                ></img>
                <p className="text-center font-sans font-light text-3xl text-gray-300">Lo basico de OpenGL</p>
            </div><br />
            <div>
                <img
                    src={github}
                    alt="Github"
                    className="pt-20"
                ></img>
                <p className="text-center font-sans font-light text-3xl text-gray-300">Buen manejo de github</p>
            </div> <br />
            <div>
                <img
                    src={battleship}
                    alt="Battleship"
                    className="pt-20"
                ></img>
                <p className="text-center font-sans font-light text-3xl text-gray-300">Un battleship escrito en c++ 100% jugable de dos jugadores</p>
            </div> <br />
            
            <div>6</div><br />
            <div>7</div><br />
            <div>8</div><br />
            <div>9</div><br />
        </div>
     );
}
 
export default BodyHome;