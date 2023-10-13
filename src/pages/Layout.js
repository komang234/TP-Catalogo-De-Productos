import React,{useState, useEffect} from "react";
import { Outlet, Link} from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import { useContextState } from "../ContextState.js";

export default function Layout() {
    const [category, setCategory]=useState(false);
    const { contextState, setContextState } = useContextState();

    return (
    <div className="buscador">
        <div className="Row">
            <br></br><br></br><br></br>
            <input id="." type="text" placeholder="Buscar categoria..." onChange={()=>{setCategory(document.getElementById(".").value)}}></input>
            <Link to={`/Buscador/${category}`}> <button>Buscar categoria</button></Link>
        </div>
        <div className="Row">
            <div className="CategoriasRecomendadas">
            <p>Categorias Recomendadas:</p>
            </div>
            <Link to={`/Buscador/${"skincare"}`}><button>skincare</button></Link>
            <Link to={`/Buscador/${"laptops"}`}><button>laptops</button></Link>
            <Link to={`/Buscador/${"smartphones"}`}><button>smartphones</button></Link>
            <Link to={`/Buscador/${"fragrances"}`}><button>fragrances</button></Link>
            <Link to={`/Buscador/${"groceries"}`}><button>groceries</button></Link>
            <Link to={`/Buscador/${"home-decoration"}`}><button>home-decoration</button></Link>
        </div>
        <Outlet />
    </div>
    );
}