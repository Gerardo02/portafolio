import React from 'react';

const Request = () => {
    
    const texto = 'enviado desde react jotos';
    const datas = { texto }
    let postInfo = async () =>{
        const response = await fetch(`https://essenza-test.herokuapp.com/send`, 
        {
            method:'POST', 
            body: JSON.stringify(datas),
            headers: { 'Content-type': 'application/json' }
        });
    }

    return ( 
        <div>

        </div>
     );
}
 
export default Request;