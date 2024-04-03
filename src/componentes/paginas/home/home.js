import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarroselCard from '../../CarroselCards'
import Procurar from '../../Procurar'
import NavScroll from '../../NavScrollExampl'
import CarrosselMCard from '../../CarroselMCards'
import Caarrosel from'../../Carrosel'
import './home.css'
export default function Home() {
  return (
    
      <search className="Cor-de-fundo" >
        <NavScroll/>
        <Procurar/>
        <br/>
        
        <Caarrosel/>
        <br/>
        <h3 className="texto-centralizado" style={{textAlign: 'center'}}>Animais mais próximos</h3>
        <CarroselCard/>
        {/* <CarrosselMCard/> */}
        
        <br/>
        




      </search>
    
  );
}
