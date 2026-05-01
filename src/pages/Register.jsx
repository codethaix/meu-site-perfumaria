import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate()

  const [usuarioLogado, setUsuarioLogado] = useState(null)

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [dataNascimento, setDataNascimento] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"))
    setUsuarioLogado(usuario)
  }, [])

  function criarConta(event) {
    event.preventDefault()

    const novoUsuario = {
      email,
      nome,
      cpf,
      dataNascimento,
      senha,
    }

    localStorage.setItem("usuarioCadastrado", JSON.stringify(novoUsuario))
    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario))

    navigate("/")
  }

  function sairDaConta() {
    localStorage.removeItem("usuarioLogado")
    setUsuarioLogado(null)
  }

  if (usuarioLogado) {
    return (
      <section className="profile-page">
        <div className="profile-container">
          <h1>Minha Conta</h1>
          <h2>Suas informações cadastradas</h2>

          <div className="profile-box">
            <h3>Dados Pessoais</h3>

            <div className="info-grid">
              <p><strong>e-mail:</strong> {usuarioLogado.email}</p>
              <p><strong>nome completo:</strong> {usuarioLogado.nome}</p>
              <p><strong>CPF:</strong> {usuarioLogado.cpf}</p>
              <p><strong>Data de nascimento:</strong> {usuarioLogado.dataNascimento}</p>
            </div>

            <button onClick={sairDaConta}>Sair da conta</button>
          </div>

          <div className="profile-box">
            <h3>Endereços</h3>
            <p>Nenhum endereço cadastrado.</p>
          </div>

          <div className="profile-box">
            <h3>Cartões</h3>
            <p>Nenhum cartão cadastrado.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Faça seu cadastro!</h1>
        <p>Preencha com seus dados.</p>

        <form className="auth-form" onSubmit={criarConta}>
          <label>
            e-mail:
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label>
            nome completo:
            <input
              type="text"
              placeholder="Digite seu nome completo"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </label>

          <label>
            CPF:
            <input
              type="text"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              required
            />
          </label>

          <label>
            Data de nascimento:
            <input
              type="date"
              value={dataNascimento}
              onChange={(event) => setDataNascimento(event.target.value)}
              required
            />
          </label>

          <label>
            Senha:
            <input
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
            />
          </label>

          <button type="submit" className="auth-button">
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