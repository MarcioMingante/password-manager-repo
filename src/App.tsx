import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Title from './components/Title/Title';
import List from './components/List/List';
import HidePasswordBtn from './components/HidePasswordBtn/HidePasswordBtn';
import { data } from './services/data';
import { InfoType } from './types/types';

function App() {
  const [listData, setListData] = useState(data);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    const validate = !isChecked;

    setIsChecked(validate);
  };

  const addNewPassword = (info: InfoType) => {
    const newAccountInfo = { ...info };

    setListData([...listData, newAccountInfo]);
  };

  const removeElement = (password:string) => {
    const deleteElement = listData.filter((element) => element.password !== password);

    setListData(deleteElement);
  };

  return (
    <>
      <Title />
      <Form onAddNewPassword={ addNewPassword } />

      {listData.length === 0 && (
        <h2>Nenhuma senha cadastrada</h2>
      )}

      <HidePasswordBtn
        isChecked={ isChecked }
        handleCheck={ handleCheck }
      />

      {listData.length >= 1 && (
        listData.map((element) => (
          <List
            key={ element.password }
            infoData={ element }
            trashBtn={ () => removeElement(element.password) }
            isChecked={ isChecked }
            handleCheck={ handleCheck }
          />
        ))
      )}
    </>
  );
}

export default App;
