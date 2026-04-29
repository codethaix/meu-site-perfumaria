import { Link } from "react-router-dom"

function Login() {
  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Bem Vindo!</h1>
        <p>Para continuar, digite seu e-mail e senha</p>

        <button className="google-button">
          Fazer Login com o Google
        </button>

        <span className="auth-divider">ou utilize sua conta</span>

        <form className="auth-form">
          <label>
            e-mail:
            <input type="email" placeholder="Digite seu e-mail" />
          </label>

          <label>
            Senha:
            <input type="password" placeholder="Digite sua senha" />
          </label>

          <button type="button" className="auth-button">
            Entrar
          </button>
        </form>

        <a className="forgot-password" href="#">
          Esqueci minha senha
        </a>

        <p className="auth-link">
          Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
        </p>
      </div>
    </section>
  )
}

export default Login
