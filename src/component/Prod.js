import React from "react"
import products from "./Products"

function Product(props){
    return ( <><div className="col"><div className="col"><div className="card shadow-sm"><img className="bd-placeholder-img card-img-top" src={`./pictures/${props.thumbnail}`} alt=""/><div className="card-body"><p className="card-title">{props.title}</p><p className="card-text">{props.price}</p><div className="d-flex justify-content-between align-items-center"><div className="btn-group"><button type="button"className="btn btn-sm btn-outline-secondary">Ajouter au panier</button></div></div></div></div></div>

    <div className ="row">
    
        {
            products.map((product) =>
            (
                <Product key={product.id}
                title={product.title}
                price={product.price} 
                thumbnail={product.thumbnail}/>
                ))
            }             
    </div>
    </div></>
    )
    }; 
    export default Product