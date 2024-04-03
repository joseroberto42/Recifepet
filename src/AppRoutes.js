import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/paginas/home/home";
import Cadastrar from "./componentes/paginas/cadastrar/cadastrar";

export default function AppRoutes(){
return(
        <BrowserRouter>
                <Routes  >
                        <Route  path="/" element={<Home/>}></Route>
                        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
                 
                </Routes>
        
        
        </BrowserRouter>

);

}