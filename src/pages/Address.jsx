import { Link } from "react-router-dom"

function Address() {
  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-steps">
          <span>Sacola</span>
          <strong>Endereço</strong>
          <span>Pagamento</span>
          <span>Recebido</span>
        </div>

        <h1>Endereços</h1>

        <div className="checkout-box">
          <h3>Endereço principal</h3>
          <p><strong>CASA:</strong> Rua do Sul, Nova Descoberta, 105 - Natal/RN</p>
        </div>

        <div className="checkout-box">
          <h3>Adicionar Endereço</h3>

          <div className="checkout-form">
            <input placeholder="Título do endereço" />
            <input placeholder="CEP" />
            <input placeholder="Rua" />
            <input placeholder="Número" />
            <input placeholder="Bairro" />
            <input placeholder="Complemento" />
          </div>

          <label className="checkbox-line">
            <input type="checkbox" />
            Salvar endereço para próxima compra
          </label>

          <Link to="/pagamento" className="continue-button">
            Continuar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Address