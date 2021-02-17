import React from 'react';
import github from '../IMG/github.png'
import bases from '../IMG/basesdatos.png'
import opengl from '../IMG/opengl.png'
import reactimg from '../IMG/reactimg.png'
import battleship from '../IMG/battleship.png'

const Trabajo = () => {


    return (
        <div>
           <div class="justify-center">
                <div>
                    <p className="text-center font-sans font-light text-3xl text-gray-300 pt-32">Conocimientos de reactJS</p>
                    <img
                        src={reactimg}
                        alt="Reactimg"
                        className="pt-5"
                    ></img>
                    
                </div><br />
                

                <div>
                    <p className="text-center font-sans font-light text-3xl text-gray-300 pt-32">Conocimiento de bases de datos</p>
                    <img
                        src={bases}
                        alt="Bases"
                        className="pt-5"
                    ></img>
                    
                </div><br />

                <div>
                    <p className="text-center font-sans font-light text-3xl text-gray-300 pt-32">Lo basico de OpenGL</p>
                    <img
                        src={opengl}
                        alt="Opengl"
                        className="pt-5"
                    ></img>
                    
                </div><br />

                <div>
                    <p className="text-center font-sans font-light text-3xl text-gray-300 pt-20">Buen manejo de github</p>
                    <img
                        src={github}
                        alt="Github"
                        className="pt-5"
                    ></img>
                    
                </div> <br />

                <div>
                    <p className="text-center font-sans font-light text-3xl text-gray-300 pt-20">Un battleship escrito en c++ 100% jugable de dos jugadores</p>
                    <img
                        src={battleship}
                        alt="Battleship"
                        className="pt-5"
                    ></img>
                    
                </div> <br />
                
                
            </div><br />
        </div>
    );
}

export default Trabajo;