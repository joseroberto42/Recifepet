import React from "react";
import Form from 'react-bootstrap/Form';

export default function CadastrarPessoa(){
    return(
        <div>
            <h3>dados pessoas</h3>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>nome</Form.Label>
                    <Form.Control type="nome" placeholder="Ana" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>data nascimento</Form.Label>
                    <Form.Control type="dataNascimento" placeholder="24/12/2006" />
                </Form.Group>
                <h4>Endereço</h4>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>rua</Form.Label>
                    <Form.Control type="nomeRua" placeholder="rua dos santos" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>bairro</Form.Label>
                    <Form.Control type="nomeBairro" placeholder="Várzea" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>cidade</Form.Label>
                    <Form.Control type="nomeBairro" placeholder="Várzea" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>cep</Form.Label>
                    <Form.Control type="cep" placeholder="00-000.000" />
                </Form.Group>
            </Form>
            <>
            <button>feminino</button>
            <button>masculino</button>
            </>
            <h4>informações complementares </h4>
            <p>os itens abaixo não são de preenchimento obrigatorio - mas são essenciais para ONgs </p>

            <h3></h3>

        </div>


    )


}