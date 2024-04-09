import './List.css';
import trash from '../../images/trash-img.svg';
import { InfoDataType } from '../../types/types';

function List(parameters: InfoDataType) {
  const { infoData, trashBtn, isChecked } = parameters;
  const { url, serviceName, login, password } = infoData;

  return (
    <div className="list-container">
      <div>
        <p><a href={ url }>{serviceName}</a></p>
      </div>

      <div>
        <p>Login</p>
        <p>{login}</p>
      </div>

      <div>
        <p>Senha</p>
        <p>{isChecked ? '******' : password}</p>
      </div>

      <button onClick={ trashBtn } id={ password } data-testid="remove-btn">
        <img src={ trash } alt="trash-can" />
      </button>
    </div>
  );
}

export default List;
