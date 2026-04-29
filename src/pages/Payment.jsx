import { Link } from "react-router-dom"

function Payment() {
  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-steps">
          <span>Sacola</span>
          <span>Endereço</span>
          <strong>Pagamento</strong>
          <span>Recebido</span>
        </div>

        <h1>Selecione a Forma de Pagamento</h1>

        <div className="checkout-box">
          <h3>Pagar com Cartão de Crédito</h3>

          <p><strong>Cartão cadastrado:</strong> Nenhum cartão cadastrado</p>

          <div className="checkout-form">
            <input placeholder="Número do cartão" />
            <input placeholder="Nome do titular" />
            <input placeholder="Data de validade" />
            <input placeholder="CVV" />
          </div>

          <label className="checkbox-line">
            <input type="checkbox" />
            Salvar cartão para próxima compra
          </label>
        </div>

        <div className="checkout-box">
          <h3>Pagar com Pix</h3>
          <p>Ao finalizar, o código Pix será gerado para pagamento.</p>
        </div>

        <Link to="/pedido-concluido" className="continue-button">
          Finalizar compra
        </Link>
      </div>
    </section>
  )
}

export default Payment