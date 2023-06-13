import "./style.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

function Sidebar() {
const [active,setActive]=useState(1)

    return (
    <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-3 pe-5 vh-100'>
        <div>
            <a href="" className="p-3 color-letter" > 
                <i className="bi bi-code-slash fs-4 me-4"></i>
                <span className="fs-3"> Metricas Ecommerce</span>
            </a>
            <hr className="text-white mt-2"/>
            <ul className="nav nav-pills flex-column mt-3"> 
                <li className={active===1? "active nav item p-2":"nav item p-2" }
                onClick={ e=> setActive(1)}>
                    <span className="p-1" >
                        <i className="bi bi-speedometer2 me-3 fs-4"></i>
                        <span className="fs-4"> <strong>Dashboard</strong></span>
                    </span>
                </li>

                <li className={active===2? "active nav item p-2":"nav item p-2" }
                onClick={ e=> setActive(2)}>
                    <span className="p-1" >
                        <i className="bi bi-people me-3 fs-4"></i>
                        <span className="fs-4"> <strong>Users</strong></span>
                    </span>
                </li>

                <li className={active===3? "active nav item p-2":"nav item p-2" }
                onClick={ e=> setActive(3)}>
                    <span className="p-1" >
                        <i className="bi bi-people me-3 fs-4"></i>
                        <span className="fs-4"> <strong>Orders</strong></span>
                    </span>
                </li>
                <li className={active===4? "active nav item p-2":"nav item p-2" }
                onClick={ e=> setActive(4)}>
                    <span className="p-1" >
                        <i className="bi bi-grid me-3 fs-4"></i>
                        <span className="fs-4"> <strong>Report</strong></span>
                    </span>
                </li>        
                </ul>
            </div>
            <div>
                <hr className="text-white "/>
                    <div className="nav-item p-2 color-letter">
                    <span className="p-1 color-letter"  >
                    <i className="bi bi-person-circle me-3 fs-4 color-letter"></i>
                    <span className="fs-4"> <strong>Yuliceth</strong></span>
                    </span>
                </div>
            </div>
            
        
      </div>
  )
  
  }
  
  export default Sidebar
  