import { Link } from "react-router-dom"
import { useState } from "react"

function Bag() {
  const [sacola, setSacola] = useState(
    JSON.parse(localStorage.getItem("sacola")) || []
  )

  function atualizarSacola(novaSacola) {
    setSacola(novaSacola)
    localStorage.setItem("sacola", JSON.stringify(novaSacola))
  }

  function aumentarQuantidade(id) {
    const novaSacola = sacola.map((produto) =>
      produto.id === id
        ? { ...produto, quantidade: produto.quantidade + 1 }
        : produto
    )

    atualizarSacola(novaSacola)
  }

  function diminuirQuantidade(id) {
    const novaSacola = sacola
      .map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade - 1 }
          : produto
      )
      .filter((produto) => produto.quantidade > 0)

    atualizarSacola(novaSacola)
  }

  function removerProduto(id) {
    const novaSacola = sacola.filter((produto) => produto.id !== id)
    atualizarSacola(novaSacola)
  }

  function formatarPreco(valor) {
    return Number(valor).toFixed(2).replace(".", ",")
  }

  const frete = sacola.length > 0 ? 19.9 : 0

  const subtotal = sacola.reduce((total, produto) => {
    return total + Number(produto.preco) * produto.quantidade
  }, 0)

  const total = subtotal + frete

  if (sacola.length === 0) {
    return (
      <section className="bag-page">
        <div className="bag-container">
          <h1>Sacola</h1>
          <p>Sua sacola está vazia.</p>

          <Link to="/" className="continue-button">
            Continuar comprando
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bag-page">
      <div className="bag-container">
        <h1>Sacola</h1>
        <p className="bag-count">({sacola.length} produto(s))</p>

        <div className="bag-content">
          <div className="bag-products-list">
            {sacola.map((produto) => (
              <div className="bag-product" key={produto.id}>
                <img src={produto.imagem} alt={produto.nome} />

                <div className="bag-info">
                  <h2>{produto.nome}</h2>
                  <p>{produto.descricao}</p>
                  <p>{produto.tamanho}</p>

                  <div className="bag-quantity">
                    <button onClick={() => diminuirQuantidade(produto.id)}>
                      -
                    </button>

                    <span>{produto.quantidade}</span>

                    <button onClick={() => aumentarQuantidade(produto.id)}>
                      +
                    </button>
                  </div>

                  <strong>
                    R$ {formatarPreco(Number(produto.preco) * produto.quantidade)}
                  </strong>

                  <button
                    className="remove-button"
                    onClick={() => removerProduto(produto.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bag-summary">
            <h2>Resumo do pedido</h2>

            <div className="summary-line">
              <span>Subtotal</span>
              <strong>R$ {formatarPreco(subtotal)}</strong>
            </div>

            <div className="summary-line">
              <span>Frete</span>
              <strong>R$ {formatarPreco(frete)}</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>R$ {formatarPreco(total)}</strong>
            </div>

            <Link to="/endereco" className="continue-button">
              Continuar
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bag