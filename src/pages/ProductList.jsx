import React from 'react'
import { useEffect } from 'react'
import { getProducts } from '../apis/products'
import { ProductCard } from '../components/ProductCard' 

 const ProductList = () => {
   
  const[products, setProducts] = React.useState([])

  useEffect(()=>{
    getProducts()
    .then((res)=>{setProducts(res.data.products)})
    .catch((err)=>console.log(err))

   
  },[]);

  useEffect(() => {
    console.log("mama",products);
  }, [products]);



  return (     
     <div  className="row row-cols-1 row-cols-md-3">

        {products.map((product) => (
        <div className="col" key={product.id}>
        <ProductCard data={product}/>
        
        </div>
        

    ))}
    </div>
    
  )
}
export default ProductList;