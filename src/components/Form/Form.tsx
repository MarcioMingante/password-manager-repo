import { useState } from 'react';

function Form() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {showForm === false
      && <button onClick={ handleShowForm }>Cadastrar nova senha</button>}

      {showForm === true && (
        <form action="">
          <div>
            <label htmlFor="service-name">Nome do Serviço</label>
            <input type="text" id="service-name" />
          </div>

          <div className="half-screen">
            <div>
              <label htmlFor="login">Login</label>
              <input type="text" id="login" />
            </div>

            <div>
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
          </div>

          <div>
            <label htmlFor="url">URL</label>
            <input type="text" id="url" />
          </div>

          <button onClick={ handleShowForm }>Cancelar</button>
          <button>Cadastrar</button>
        </form>
      )}
    </>
  );
}

export default Form;
