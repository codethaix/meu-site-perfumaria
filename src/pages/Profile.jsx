function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-container">
        <h1>Cadastro</h1>
        <h2>Suas Informações</h2>

        <div className="profile-box">
          <h3>Dados Pessoais</h3>

          <div className="info-grid">
            <p><strong>e-mail:</strong> AnaMaria123@gmail.com</p>
            <p><strong>nome completo:</strong> Ana Maria Silva</p>
            <p><strong>CPF:</strong> 123.456.789-12</p>
            <p><strong>Data de nascimento:</strong> 01/01/2001</p>
          </div>

          <button>Alterar Dados</button>
        </div>

        <div className="profile-box">
          <h3>Endereços</h3>

          <p className="address">
            <strong>CASA:</strong> Rua do Sul, Nova Descoberta, 105 - Natal/RN
          </p>
          <p className="main-address">(Endereço principal)</p>

          <div className="profile-actions">
            <button>Alterar Dados</button>
            <button>Adicionar Endereço</button>
          </div>
        </div>

        <div className="profile-box">
          <h3>Cartões</h3>

          <p className="empty-card">Nenhum cartão cadastrado</p>

          <button>Adicionar Cartão</button>
        </div>
      </div>
    </section>
  )
}

export default Profile