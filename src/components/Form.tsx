function Form() {
  return (
    <form action="">
      <label htmlFor="service-name">Nome do Serviço</label>
      <input type="text" id="service-name" />

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

      <label htmlFor="url">URL</label>
      <input type="text" id="url" />

      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
