import './List.css';
import { useState } from 'react';
import trash from '../../images/trash-img.svg';
import { InfoDataType, InfoType } from '../../types/types';
import { data } from '../../services/data';

function List(parameters: InfoDataType) {
  const { infoData, trashBtn } = parameters;
  const { url, serviceName, login, password } = infoData;

  // const [listData, setListData] = useState(data);

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
        <p>{password}</p>
      </div>

      <button onClick={ trashBtn } id={ password } data-testid="remove-btn">
        <img src={ trash } alt="trash-can" />
      </button>
    </div>
  );
}

export default List;
