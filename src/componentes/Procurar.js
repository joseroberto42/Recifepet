import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Digite aqui para pesquisar..."
        style={{ marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', width: '70%' }}
      />
      
      <button className="Corbotao" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '', color: '#fff', fontSize: '16px' }}>Pesquisar</button>
      
      {searchTerm && (
        <div style={{ marginTop: '20px', backgroundColor: '', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        
          <p style={{ fontSize: '20px', color: '' }}>Resultados da pesquisa aqui...</p>
        </div>
      )}
      <br/>
    </div>
  );
};

export default SearchComponent;




