import React, { useState } from 'react';
import './Formulario.module.css'

function FormularioCadastro() {
    const [formData, setFormData] = useState({
      cpf: '',
      nome: '',
      nomeSocial: '',
      dataNascimento: '',
      email: '',
      telefone: '',
      cep: '',
      senha: '',
      confirmarSenha: ''
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        let newErrors = { ...errors }; // Copiar os erros existentes
      
        if (name === 'dataNascimento') {
          // Remover todos os caracteres não numéricos
          newValue = value.replace(/\D/g, '');
          // Inserir as barras automaticamente
          if (newValue.length > 2 && newValue.length <= 4) {
            newValue = `${newValue.slice(0, 2)}/${newValue.slice(2)}`;
          } else if (newValue.length > 4 && newValue.length <= 6) {
            newValue = `${newValue.slice(0, 2)}/${newValue.slice(2, 4)}/${newValue.slice(4)}`;
          } else if (newValue.length > 6) {
            newValue = `${newValue.slice(0, 2)}/${newValue.slice(2, 4)}/${newValue.slice(4, 8)}`;
          }
        } else if (['cpf', 'cep'].includes(name)) {
          // Remover caracteres não numéricos
          newValue = value.replace(/\D/g, '');
        } else if (name === 'telefone') {
          // Remover caracteres não numéricos
          newValue = value.replace(/\D/g, '');
          // Verificar se o número do telefone tem 11 dígitos para limpar o erro
          if (newValue.length === 11) {
            delete newErrors[name];
          }
        }
      
        // Atualizar o estado dos dados do formulário
        setFormData({
          ...formData,
          [name]: newValue
        });
      
        // Verificar se o campo tem erro
        if (name in newErrors) {
          delete newErrors[name]; // Limpar o erro associado ao campo
          setErrors(newErrors); // Atualizar o estado dos erros
        }
      
        validateForm();
      };
      
      
    const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.senha !== formData.confirmarSenha) {
        setErrors({ confirmarSenha: 'As senhas não correspondem' });
        return;
      }
      // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para um servidor ou fazer validações
      console.log(formData);
    };
  
    const validateForm = () => {
      const errors = {};
      // Validar CPF
      if (formData.cpf.length !== 11) {
        errors.cpf = 'CPF deve conter 11 números';
      }
      // Validar Nome e Nome Social
      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.nome)) {
        errors.nome = 'Nome deve conter apenas letras';
      }
      if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(formData.nomeSocial)) {
        errors.nomeSocial = 'Nome social deve conter apenas letras';
      }
      // Validar Data de Nascimento
      if (formData.dataNascimento.length !== 10) {
        errors.dataNascimento = 'Data de nascimento deve estar no formato DD/MM/AAAA';
      }
      // Validar CEP
      if (formData.cep.length !== 8) {
        errors.cep = 'CEP deve conter 8 números';
      }
      // Validar Telefone
      if (formData.telefone.length !== 11) {
        errors.telefone = 'Telefone deve conter 11 números';
      }
      // Validar Senha e Confirmar Senha
      if (formData.senha !== formData.confirmarSenha) {
        errors.confirmarSenha = 'As senhas não correspondem';
      }
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
  
    const isFormValid = () => {
      return Object.keys(errors).length === 0;
    };

  return (
    <div className="container">
      {/* <h2>Cadastro de Usuário</h2> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="cpf">CPF:</label>
        <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} maxLength={11} required />
        {errors.cpf && <span style={{ color: 'red' }}>{errors.cpf}</span>}<br />

        <label htmlFor="nome">Nome Completo:</label>
        <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} required />
        {errors.nome && <span style={{ color: 'red' }}>{errors.nome}</span>}<br />

        <label htmlFor="nome_social">Nome Social:</label>
        <input type="text" id="nome_social" name="nomeSocial" value={formData.nomeSocial} onChange={handleChange} />
        {errors.nomeSocial && <span style={{ color: 'red' }}>{errors.nomeSocial}</span>}<br />

        <label htmlFor="data_nascimento">Data de Nascimento:</label>
        <input type="text" id="data_nascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} maxLength={10} required />
        {errors.dataNascimento && <span style={{ color: 'red' }}>{errors.dataNascimento}</span>}<br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />

        <label htmlFor="telefone">Telefone:</label>
        <input type="text" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} maxLength={11} required />
        {errors.telefone && <span style={{ color: 'red' }}>{errors.telefone}</span>}<br />

        <label htmlFor="cep">CEP:</label>
        <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} maxLength={8} />
        {errors.cep && <span style={{ color: 'red' }}>{errors.cep}</span>}<br />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" value={formData.senha} onChange={handleChange} required /><br />

        <label htmlFor="confirmar_senha">Confirmar Senha:</label>
        <input type="password" id="confirmar_senha" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} required />
        {errors.confirmarSenha && <span style={{ color: 'red' }}>{errors.confirmarSenha}</span>}<br/>

        <button type="submit" disabled={!isFormValid()}>Cadastre-se</button>
        <button type="button">Voltar</button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
