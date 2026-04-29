import { useParams, useNavigate, Link } from "react-router-dom"
import { products } from "../data/products"

function Product() {
  const { id } = useParams()
  const navigate = useNavigate()

  const produto = products.find((item) => item.id === Number(id))

  if (!produto) {
    return (
      <section className="product-page">
        <h1>Produto não encontrado</h1>
      </section>
    )
  }

  function formatarPreco(valor) {
    return Number(valor).toFixed(2).replace(".", ",")
  }

  function adicionarSacola() {
    const itemSacola = {
      ...produto,
      quantidade: 1,
    }

    let sacolaAtual = JSON.parse(localStorage.getItem("sacola")) || []

    const index = sacolaAtual.findIndex((item) => item.id === produto.id)

    if (index !== -1) {
      sacolaAtual[index].quantidade += 1
    } else {
      sacolaAtual.push(itemSacola)
    }

    localStorage.setItem("sacola", JSON.stringify(sacolaAtual))
    navigate("/sacola")
  }

  function favoritar() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    const jaExiste = favoritos.some((item) => item.id === produto.id)

    if (jaExiste) {
      favoritos = favoritos.filter((item) => item.id !== produto.id)
    } else {
      favoritos.push(produto)
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }

  return (
    <section className="product-page">

      {/* 🔥 BREADCRUMB */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>|</span>
        <span>Família Olfativa</span>
        <span>|</span>
        <strong>{produto.familia}</strong>
      </div>

      {/* 🔥 CONTAINER */}
      <div className="product-zoom-container">

        {/* ✅ APENAS UMA IMAGEM */}
        <div className="product-main-image">
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        {/* INFO */}
        <div className="product-detail-info">

          <button className="product-favorite" onClick={favoritar}>
            ♡
          </button>

          <h1>{produto.nome}</h1>

          <p className="product-subtitle">
            {produto.descricao} {produto.tamanho}
          </p>

          <h2 className="product-detail-price">
            R$ {formatarPreco(produto.preco)}
          </h2>

          <p className="installment">
            10x R$ {formatarPreco(produto.preco / 10)} no cartão
          </p>

          <div className="product-sections">
            <details open>
              <summary>Descrição</summary>
              <p>{produto.descricao}</p>
            </details>

            <details>
              <summary>Ingredientes</summary>
              <p>{produto.ingredientes}</p>
            </details>

            <details>
              <summary>Pirâmide Olfativa</summary>
              <p>{produto.piramideOlfativa}</p>
            </details>

            <details>
              <summary>Ocasião Ideal</summary>
              <p>{produto.ocasiaoIdeal}</p>
            </details>
          </div>

          <button className="sacola-button" onClick={adicionarSacola}>
            Sacola
          </button>

        </div>
      </div>
    </section>
  )
}

export default Product