import "../style.css";
import {useState, useEffect} from 'react'
import axios from 'axios'



export default function Product (){

    const[data, setData]= useState([]);

    useEffect(()=>{
 
     axios(
        {
            method:"GET",
            url:"https://fakestoreapi.com/products"
        }).then(res=>{
            console.log(res.data)
            setData(res.data)
        }).catch(e=>console.log(e))
       
    },[]);



    return(
        <div className ="products-container">
         
       {data.map((product)=>(
        <div key={product.id}>
            <div><img src={product.image}  alt="#" className="productoImagen"/> </div>
            <div className="card-description">  </div>
           <h6>{product.title}</h6>
           <h6>{`Precio:${product.price}`}</h6>
           
        </div>
       )
        )}
    </div>
    );
}