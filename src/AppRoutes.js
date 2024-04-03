import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/paginas/home/home";
import Cadastrar from "./componentes/paginas/cadastrar/cadastrar";
import AnunciarDoacao from "./componentes/paginas/anunciarDoação/Ongd/AnunciarDoacao.js";
import Ongs from "./componentes/paginas/Ongs/Ongs";
import Comoajudar from "./componentes/paginas/como-ajudar/comoajudar";

export default function AppRoutes(){
return(
        <BrowserRouter>
                <Routes  >
                        <Route  path="/" element={<Home/>}></Route>
                        <Route path="/cadastrar" element={<Cadastrar/>}></Route>
                        <Route path="/anunciar-doação" element={<AnunciarDoacao/>}> </Route>
                        <Route path="/ongs" element={<Ongs/>}></Route>
                        <Route path="/como-ajudar" element={<Comoajudar/>}></Route>
                        <Route></Route>

                </Routes>
        
        
        </BrowserRouter>

);

}