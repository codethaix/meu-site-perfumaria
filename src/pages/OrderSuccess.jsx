import { Link } from "react-router-dom"

function OrderSuccess() {
  return (
    <section className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-steps">
          <span>Sacola</span>
          <span>Endereço</span>
          <span>Pagamento</span>
          <strong>Recebido</strong>
        </div>

        <div className="success-box">
          <h1>Pedido Concluído!</h1>
          <p><strong>Número do pedido:</strong> 60477177</p>

          <h3>Resumo do pedido:</h3>

          <div className="order-summary">
            <p><strong>Produto:</strong> Malbec</p>
            <p>1x Desodorante Colônia 100ml</p>
            <p><strong>Valor:</strong> R$ 209,90</p>
            <p><strong>Forma de pagamento:</strong> Cartão de crédito</p>
            <p><strong>Endereço de entrega:</strong> Rua do Sul, Nova Descoberta, 105 - Natal/RN</p>
          </div>

          <Link to="/" className="continue-button">
            Continuar Navegando
          </Link>
        </div>
      </div>
    </section>
  )
}

export default OrderSuccess