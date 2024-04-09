import { useState } from 'react';
import PasswordValidator from '../PasswordValidation/PasswordValidator';
import './Form.css';
import { InfoType } from '../../types/types';

type AddProps = {
  onAddNewPassword: (info: InfoType) => void
};

function Form({ onAddNewPassword }: AddProps) {
  const [showForm, setShowForm] = useState(false);
  const [serviceName, setServiceName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');

  const validatePassword = password.length >= 8
  && password.length <= 16
  && /\d/.test(password)
  && /[a-zA-z]/.test(password)
  && /[^a-zA-Z0-9]/.test(password);

  const enableRegister = !serviceName || !login || !validatePassword;

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAddNewPassword({ serviceName, login, password, url });

    setServiceName('');
    setLogin('');
    setPassword('');
    setUrl('');
    setShowForm(false);
  };

  return (
    <>
      {showForm === false
      && <button onClick={ handleShowForm }>Cadastrar nova senha</button>}

      {showForm === true && (
        <div className="form-container">
          <form action="add" onSubmit={ handleSubmit }>
            <div>
              <label htmlFor="service-name">Nome do Serviço</label>
              <input
                type="text"
                id="service-name"
                onChange={ (event) => setServiceName(event.target.value) }
                value={ serviceName }
              />
            </div>

            <div className="half-screen">
              <div>
                <label htmlFor="login">Login</label>
                <input
                  type="text"
                  id="login"
                  onChange={ (event) => setLogin(event.target.value) }
                  value={ login }
                />
              </div>

              <div>
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  id="password"
                  onChange={ (event) => setPassword(event.target.value) }
                  value={ password }
                />
              </div>
            </div>

            <div>
              <label htmlFor="url">URL</label>
              <input
                type="text"
                id="url"
                onChange={ (event) => setUrl(event.target.value) }
                value={ url }
              />
            </div>

            <div>
              <button onClick={ handleShowForm }>Cancelar</button>
              <button disabled={ enableRegister }>Cadastrar</button>
            </div>
          </form>

          <PasswordValidator password={ password } />
        </div>
      )}
    </>
  );
}

export default Form;
