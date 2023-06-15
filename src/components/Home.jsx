import "../style.css";
import LineChat from "./LineChat";
import PieChart from "./PieChart";
import  { useEffect, useState } from "react";

export default function Home() {
  const [productos, setProductos] = useState([]);
  const [orders, setOrders] = useState([]);
  const [promedioPrecios, setPromedioPrecios] = useState(0);
  const [productoMasVendido, setProductoMasVendido] = useState(null);
  const [ingresosTotales, setIngresosTotales] = useState(0);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProductos(data);
        console.log(productos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/carts");
        const data = await response.json();
        setOrders(data);
        console.log(productos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductos();
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      const sumaPrecios = productos.reduce(
        (total, producto) => total + producto.price,
        0
      );
      const promedio = sumaPrecios / productos.length;
      setPromedioPrecios(promedio);
    }
  }, [productos]);

  useEffect(() => {
    let ventasTotales = 0;
    if (productos.length > 0 && orders.length > 0) {
      orders.map((ordenes) => {
        let ventasPorProducto = 0;
        ordenes.products.map((productOrden) => {
          productos.map((product) => {
            if (product.id === productOrden.productId) {
              ventasPorProducto += product.price * productOrden.quantity;
            }
          });
        });
        ventasTotales += ventasPorProducto;
      });
      setIngresosTotales(ventasTotales);
    }
  }, [productos, orders]);

  useEffect(() => {
    let listaIdProductoCantidad = [];
    if (productos.length > 0 && orders.length > 0) {
      orders.map((ordenes) => {
        ordenes.products.map((productOrden) => {
          listaIdProductoCantidad.push({
            id: productOrden.productId,
            cantidad: productOrden.quantity,
          });
        });
      });
    }
    const cantidadesPorId = {};

    for (const item of listaIdProductoCantidad) {
      const { id, cantidad } = item;
      if (cantidadesPorId.hasOwnProperty(id)) {
        cantidadesPorId[id] += cantidad;
      } else {
        cantidadesPorId[id] = cantidad;
      }
    }

    console.log("Cantidades por id:", cantidadesPorId);

    let parametroMayorValor = null;
    let mayorValor = 0;

    for (const parametro in cantidadesPorId) {
      if (cantidadesPorId[parametro] > mayorValor) {
        mayorValor = cantidadesPorId[parametro];
        parametroMayorValor = parametro;
      }
    }

    console.log(
      "The parameter with the highest value is :",
      parametroMayorValor
    );

    const productoEncontrado = productos.find(
      (producto) => producto.id == parametroMayorValor
    );
    setProductoMasVendido(productoEncontrado);
  }, [productos, orders]);

  return (
    <div className='container-fluid contenedorPadre'>
      <div className='row mt-3'>
        <div class='d-flex gap-1 flex-row flex-wrap flex-md-nowrap d-flex justify-content-between'>
          <div class='d-flex gap-1 justify-content-around  p-2 col-12 col-md-4 col-lg-4 p-2 bg-white border border-secondary shadow-sm '>
            <i className='bi bi-currency-dollar fs-1 text-success  '></i>
            <div>
              <span>
                <h2>Total Income</h2>
              </span>
              <h2>{ingresosTotales.toFixed(2)}</h2>
            </div>
          </div>
          <div class='d-flex gap-1 justify-content-around col-12 col-md-4 col-lg-4 p-2 bg-white border border-secondary shadow-sm'>
            <i className='bi bi-truck fs-1 text-primary'></i>
            <div>
              <span>
                <h2>Number of Products in Store</h2>
              </span>
              <h2>{productos.length}</h2>
            </div>
          </div>
          <div class='d-flex gap-1 justify-content-around col-12 col-md-4 col-lg-4 p-2 bg-white border border-secondary shadow-sm'>
            <i className='bi bi-currency-dollar fs-1 text-success'></i>
            <div>
              <span>
                <h2>Average Products Price</h2>
              </span>
              <h2>{promedioPrecios.toFixed(2)}</h2>
            </div>
            
          </div>
          {/* Second section */}
        </div>
      </div>
      <div className='row mt-3'>
        <div class='d-flex gap-1 flex-wrap flex-md-nowrap flex-row d-flex justify-content-between'>
          <div class='d-flex  justify-content-around col-12 col-md-6 col-lg-6  bg-white border border-secondary shadow-sm'>
            <i className='bi bi-truck fs-1 text-success text-warming'></i>
            <div>
              <span>
                <h2>Total Order {orders.length}</h2>
              </span>
            </div>
          </div>
          
          <div class='d-flex gap-3 justify-content-around col-12 col-md-6 col-lg-6 p-2 bg-white border border-secondary shadow-sm'>
            <i className='bi bi-truck fs-1 text-success text-warming'></i>
            <div>
              <span>
                <h2>Top Selling Product</h2>
              </span>
              <h4>{productoMasVendido ? productoMasVendido.title : ""}</h4>
              
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div class='d-flex gap-1 flex-row flex-wrap flex-md-nowrap d-flex justify-content-between'>
          <div className='d-flex gap-3 justify-content-center col-12 col-md-6 col-lg-6 p-2'>
            <LineChat  />
          </div>
          <div className='d-flex gap-3 justify-content-center col-12 col-md-6 col-lg-6 p-2'>
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}
