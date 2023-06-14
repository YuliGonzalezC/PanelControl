import {useState, useEffect} from 'react'
import axios from 'axios'


export default function Product (){
    const [loading, setLoading] = useState(false);
    const[data, setData]= useState([]);

    useEffect(()=>{
        setLoading(true)
       axios(
        {
            method:"GET",
            url:"https://fakestoreapi.com/products"
        }).then(res=>{
            console.log(res.data)
            setData(res.data)
        }).catch(e=>console.log(e))
        .finally(()=>setLoading(false));
    },[]);



    return(
        <div className ="products-Container">
            {loading && (
                <div>
                    {""}
                    <h1>Loading...</h1>
                </div>
            )}
     
       {data.map((product)=>(
        <div key={product.id}>
            <div><img src={product.image} alt="#"/> </div>
            <div className="card-description">  </div>
           <h6>{product.title}</h6>
           <h6>{`Precio:${product.price}`}</h6>
           <h6>{`Categoria:${product.category}`}</h6>
        </div>
       )
        )}
    </div>
    );
}