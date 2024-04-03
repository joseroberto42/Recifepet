import NavScrollExample from "../../NavScrollExampl";
import Procurar from '../../Procurar'
import Ccadastro from "../../Ccadastro";
import Formulario from'../../Formulario'
export default function Cadastrar(){
    return(
        <div className="Cor-de-fundo">
        <NavScrollExample/>
        <Procurar/>
        <br/>
            <div className="Cor-2">
                <Ccadastro/>
            
                <Formulario/>
                
            </div>
            
            

        </div>

    );
    

}