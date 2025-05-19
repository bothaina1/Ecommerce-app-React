import { useState } from 'react'
import { useEffect } from 'react'
import { getProducts } from '../apis/products'
import { ProductCard } from '../components/ProductCard' 
import { Pagination } from '../components/pagination'

 const ProductList = () => {
   
  const[products, setProducts] = useState([])
    const [page, setPage] = useState(1);


  useEffect(()=>{
    getProducts(page)
    .then((res)=>{setProducts(res.data.products)})
    .catch((err)=>console.log(err))

   
  },[page]);
  

  useEffect(() => {
    console.log("productsss",products);
  }, [products]);



  
  return (
    <>
     <div  className="row row-cols-1 row-cols-md-3">

        {products.map((product) => (
        <div className="col" key={product.id}>
        <ProductCard data={product}/>
        
        </div>
        

    ))}
    
    </div>
    <Pagination page={page} setPage={setPage}/>
    </>
    
  )
}
export default ProductList;