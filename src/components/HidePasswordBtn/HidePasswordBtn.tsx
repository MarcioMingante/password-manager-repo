import { HidePasswordType } from '../../types/types';

function HidePasswordBtn(props: HidePasswordType) {
  const { isChecked, handleCheck } = props;

  return (
    <div>
      <label htmlFor="toggle">Esconder senhas</label>
      <input
        type="checkbox"
        id="toggle"
        checked={ isChecked }
        onClick={ handleCheck }
      />
    </div>
  );
}

export default HidePasswordBtn;
