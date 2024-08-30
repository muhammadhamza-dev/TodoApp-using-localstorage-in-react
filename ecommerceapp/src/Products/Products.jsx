import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';




function Products() {
    
    const { id } = useParams();
    // const {data , setdata } = useState();

    
   const productCard = [
    {
        id : 1,
        title : "Product 1",
        Description : "50% off"
    },
    {
        id : 2,
        title : "Product 1",
        Description : "50% off"
    },
    {
        id : 3,
        title : "Product 1",
        Description : "50% off"
    }
   ]


    

  return (
    
    <>
        <div>
                
            {
               productCard && productCard?.map(value=>(
                    <div key={value.id}>
                          <Link to={`/products/${value.id}`}>  
                            <div>
                                
                            </div>
                          </Link>  
                    </div>
                
                
               ))
            }
            
            
        </div>
    </>
  )
}

export default Products