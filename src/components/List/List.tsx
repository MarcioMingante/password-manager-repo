import './List.css';
// import { InfoType } from '../../types/types';

function List({ infoData }) {
  return (
    <div className="list-container">
      <div>
        <p><a href={ infoData.url }>{infoData.serviceName}</a></p>
      </div>

      <div>
        <p>Login</p>
        <p>{infoData.login}</p>
      </div>

      <div>
        <p>Senha</p>
        <p>{infoData.password}</p>
      </div>
    </div>
  );
}

export default List;
