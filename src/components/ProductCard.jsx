import "./productCard.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import lixeiraIcon from "../assets/lixeira.png"

function ProductCard({
  id,
  imagem,
  marca,
  nome,
  preco,
  descricao,
  tamanho,
  isFavoritos = false,
}) {
  const navigate = useNavigate()
  const [mensagem, setMensagem] = useState("")

  function formatarPreco(valor) {
    return Number(valor).toFixed(2).replace(".", ",")
  }

  function mostrarMensagem(texto) {
    setMensagem(texto)
    setTimeout(() => setMensagem(""), 2000)
  }

  function removerFavorito(event) {
    event.stopPropagation()

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
    const novos = favoritos.filter((item) => item.id !== id)

    localStorage.setItem("favoritos", JSON.stringify(novos))
    mostrarMensagem("Removido dos favoritos")

    window.dispatchEvent(new Event("favoritosAtualizados"))
  }

  function favoritar(event) {
    event.stopPropagation()

    const produto = { id, imagem, marca, nome, preco, descricao, tamanho }
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

    const jaExiste = favoritos.some((item) => item.id === id)

    if (jaExiste) {
      const novos = favoritos.filter((item) => item.id !== id)
      localStorage.setItem("favoritos", JSON.stringify(novos))
      mostrarMensagem("Removido dos favoritos")
    } else {
      favoritos.push(produto)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))
      mostrarMensagem("Adicionado aos favoritos")
    }
  }

  function adicionarSacola(event) {
    event.stopPropagation()

    const produto = {
      id,
      imagem,
      marca,
      nome,
      preco,
      descricao,
      tamanho,
      quantidade: 1,
    }

    let sacolaAtual = JSON.parse(localStorage.getItem("sacola")) || []

    const index = sacolaAtual.findIndex((item) => item.id === id)

    if (index !== -1) {
      sacolaAtual[index].quantidade += 1
    } else {
      sacolaAtual.push(produto)
    }

    localStorage.setItem("sacola", JSON.stringify(sacolaAtual))
    mostrarMensagem("Adicionado à sacola")
  }

  return (
    <div className="product-card" onClick={() => navigate(`/produto/${id}`)}>

      {mensagem && <div className="card-message">{mensagem}</div>}

      {/* 🔥 ÍCONE DINÂMICO */}
      <button
        className="favorite"
        onClick={isFavoritos ? removerFavorito : favoritar}
      >
        {isFavoritos ? (
          <img src={lixeiraIcon} alt="Remover" className="icon-favorite" />
        ) : (
          "♡"
        )}
      </button>

      <img src={imagem} alt={nome} className="product-image" />

      <p className="brand">{marca}</p>
      <h3>{nome}</h3>

      {descricao && <p>{descricao}</p>}
      {tamanho && <p>{tamanho}</p>}

      <p className="price">R$ {formatarPreco(preco)}</p>

      <button className="bag-button" onClick={adicionarSacola}>
        Adicionar à sacola
      </button>
    </div>
  )
}

export default ProductCard