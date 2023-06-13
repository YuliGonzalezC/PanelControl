import LineChat from "../components/LineChat";
import PieChart from "../components/PieChart";

export default function Home() {
  return (
    <div className="p-3 bg-light">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-currency-dollar fs-1 text-success"></i>
              <div>
                <span>Ingresos Totales</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-truck fs-1 text-primary"></i>
              <div>
                <span>Productos en tienda</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-currency-dollar fs-1 text-success"></i>
              <div>
                <span>Precio promedio de productos</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>          
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-truck fs-1 text-success text-warming"></i>
              <div>
                <span>Total Pedidos</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-graph-up-arrow fs-1 text-warming"></i>
              <div>
                <span>Productos mas vendidos</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>        
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3 bg-light ">
            <div className="d-flex justify-content-between py-4 px-2 align-items-center bg-white border border-secondary shadow-sm">
              <i className="bi bi-graph-up-arrow fs-1 text-danger"></i>
              <div>
                <span>Promocion</span>
                <h2>ejecucion</h2>
              </div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 p-3">
              <LineChat/>
            </div>
            <div className="col-12 col-md-4 p-3">
              <PieChart/>
            </div>
          </div>
      </div>
    </div>
  );
}
