import React from 'react';
import ProductCard from './ProductCard';


const demoProducts = [
{ id:1, name:"Tomatoes", type:"Vegetable", price:2.5, location:"Kano", description:"Fresh red tomatoes", image:"https://via.placeholder.com/150" },
{ id:2, name:"Maize Seed", type:"Seed", price:5, location:"Lagos", description:"High yield maize seeds", image:"https://via.placeholder.com/150" },
{ id:3, name:"Mango", type:"Fruit", price:1.2, location:"Oyo", description:"Sweet mangoes", image:"https://via.placeholder.com/150" }
];


export default function ProductList(){
const [q,setQ]=React.useState('');
const [type,setType]=React.useState('');
const [minPrice,setMinPrice]=React.useState('');
const [maxPrice,setMaxPrice]=React.useState('');
const [location,setLocation]=React.useState('');
const [products,setProducts]=React.useState(demoProducts);


function applyFilters(){
let result = demoProducts.filter(p =>
(!q || p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase())) &&
(!type || p.type === type) &&
(!minPrice || p.price >= parseFloat(minPrice)) &&
(!maxPrice || p.price <= parseFloat(maxPrice)) &&
(!location || p.location.toLowerCase().includes(location.toLowerCase()))
);
setProducts(result);
}


return (
<div>
<div className="filters card">
<input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} />
<select value={type} onChange={e=>setType(e.target.value)}>
<option value="">All types</option>
<option value="Vegetable">Vegetable</option>
<option value="Fruit">Fruit</option>
<option value="Seed">Seed</option>
<option value="Tool">Tool</option>
</select>
<input placeholder="Min Price" value={minPrice} onChange={e=>setMinPrice(e.target.value)} />
<input placeholder="Max Price" value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} />
<input placeholder="Location" value={location} onChange={e=>setLocation(e.target.value)} />
<button onClick={applyFilters}>Apply</button>
</div>
<div className="grid">
{products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
);
}