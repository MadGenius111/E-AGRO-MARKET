import React from 'react';


export default function ProductCard({ product }){
return (
<div className="product-card">
<img src={product.image} alt={product.name} style={{width:'100%', borderRadius:'6px'}} />
<h4>{product.name}</h4>
<div>{product.type} • {product.location}</div>
<div>₦{product.price}</div>
<p>{product.description}</p>
<button>Buy Now</button>
</div>
);
}