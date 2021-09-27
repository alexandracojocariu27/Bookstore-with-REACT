import React from 'react'
 

function Card({children}) {
    return (
    <div className="d-flex justify-content-center align-items-center mt-5">
     <div id="card" className="col-11 col-md-8 bg-dark p-3 mb-2"> 
         
        {children}
         
     </div>  

    </div>
    )
}

export default Card;
