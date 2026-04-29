import { Link } from "react-router-dom"

function Register() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Faça seu cadastro!</h1>
        <p>Preencha com seus dados.</p>

        <span className="auth-divider">ou utilize sua conta</span>

        <form className="auth-form">
          <label>
            e-mail:
            <input type="email" placeholder="Digite seu e-mail" />
          </label>

          <label>
            nome completo:
            <input type="text" placeholder="Digite seu nome completo" />
          </label>

          <label>
            CPF:
            <input type="text" placeholder="000.000.000-00" />
          </label>

          <label>
            Data de nascimento:
            <input type="date" />
          </label>

          <label>
            Senha:
            <input type="password" placeholder="Crie uma senha" />
          </label>

          <button type="button" className="auth-button">
            Criar conta
          </button>
        </form>

        <p className="auth-link">
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </p>
      </div>
    </section>
  )
}

export default Register