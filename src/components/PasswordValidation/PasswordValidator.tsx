type PasswordType = {
  password: string;
};

function PasswordValidator({ password }: PasswordType) {
  const isValid = 'valid-password-check';
  const isInvalid = 'invalid-password-check';

  const letterValidation = /\d/.test(password);
  const numberValidation = /[a-zA-z]/.test(password);
  const specialValidation = /[^a-zA-Z0-9]/.test(password);
  const minSize = password.length >= 8;
  const maxSize = password.length <= 16;
  const uniteValidations = letterValidation && numberValidation;

  const validationMessage = {
    minSize,
    maxSize,
    uniteValidations,
    specialValidation,
  };

  return (
    <div>
      <p
        className={ validationMessage.minSize ? isValid : isInvalid }
      >
        Possuir 8 ou mais caracteres
      </p>
      <p
        className={ validationMessage.maxSize ? isValid : isInvalid }
      >
        Possuir até 16 caracteres
      </p>
      <p
        className={ validationMessage.uniteValidations ? isValid : isInvalid }
      >
        Possuir letras e números
      </p>
      <p
        className={ validationMessage.specialValidation ? isValid : isInvalid }
      >
        Possuir algum caractere especial
      </p>
    </div>
  );
}

export default PasswordValidator;
