import React from "react";

export default function Dados(props){
    return(
        <section>
            <p>canal:{props.canal} </p>
            <p>youtube:{props.youtube}  </p>
            <p>curso:{props.curso} </p>
        </section>
    )
}