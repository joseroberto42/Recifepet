import React from "react";
import NavScrollExample from './NavScrollExampl'
import TabBar from "./TabBar";
import cadastroPessoa from "./cadastroPessoa"
 
const cadastrarP =( ) =>{
    return(
        <cadastrarPessoa/>
    )


}


export default function Cadastro(){
        return(
            <div>
                <NavScrollExample/>
                    <>
                    <button>entrar como instituiçao</button>
                    <button onClick={cadastrarP}>entrar como pessoa</button>
                    </>

                <TabBar/>



            </div>







    )
}