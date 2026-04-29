import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { products } from "../data/products"

import logo from "../assets/logo.png"
import iconFavorite from "../assets/coracao.png"
import iconUser from "../assets/usuario.png"
import iconBag from "../assets/sacola.png"

function Header() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState("")
  const [mostrarSugestoes, setMostrarSugestoes] = useState(false)

  const sugestoes = products.filter((produto) => {
    const texto = `
      ${produto.nome}
      ${produto.marca}
      ${produto.descricao}
      ${produto.familia}
      ${produto.categorias?.join(" ")}
    `.toLowerCase()

    return busca.trim() !== "" && texto.includes(busca.toLowerCase())
  })

  function pesquisar(event) {
    event.preventDefault()

    if (busca.trim() !== "") {
      navigate(`/busca?q=${encodeURIComponent(busca.trim())}`)
      setBusca("")
      setMostrarSugestoes(false)
    }
  }

  function abrirProduto(id) {
    navigate(`/produto/${id}`)
    setBusca("")
    setMostrarSugestoes(false)
  }

  const menus = [
    {
      titulo: "Perfumaria",
      opcoes: [
        { nome: "Perfumes Femininos", slug: "perfumes-femininos" },
        { nome: "Perfumes Masculinos", slug: "perfumes-masculinos" },
        { nome: "Perfumes Importados", slug: "perfumes-importados" },
        { nome: "Mais Vendidos", slug: "mais-vendidos" },
      ],
    },
    {
      titulo: "Família Olfativa",
      opcoes: [
        { nome: "Floral", slug: "floral" },
        { nome: "Amadeirado", slug: "amadeirado" },
        { nome: "Cítrico", slug: "citrico" },
        { nome: "Oriental", slug: "oriental" },
        { nome: "Adocicado", slug: "adocicado" },
      ],
    },
    {
      titulo: "Marcas",
      opcoes: [
        { nome: "Nativa SPA", slug: "nativa-spa" },
        { nome: "Eudora", slug: "eudora" },
        { nome: "O Boticário", slug: "o-boticario" },
      ],
    },
    {
      titulo: "Corpo e Banho",
      opcoes: [
        { nome: "Sabonetes", slug: "sabonetes" },
        { nome: "Hidratantes", slug: "hidratantes" },
        { nome: "Óleos Corporais", slug: "oleos-corporais" },
        { nome: "Body Splash", slug: "body-splash" },
      ],
    },
    {
      titulo: "Presentes",
      opcoes: [
        { nome: "Kits Femininos", slug: "kits-femininos" },
        { nome: "Kits Masculinos", slug: "kits-masculinos" },
        { nome: "Até R$100", slug: "ate-100" },
        { nome: "Luxo", slug: "luxo" },
      ],
    },
    {
      titulo: "Promoção",
      opcoes: [
        { nome: "Ofertas da Semana", slug: "ofertas-da-semana" },
        { nome: "Leve 2 Pague 1", slug: "leve-2-pague-1" },
        { nome: "Outlet", slug: "outlet" },
        { nome: "Últimas Unidades", slug: "ultimas-unidades" },
      ],
    },

    {
  titulo: "Perfume Ideal",
  opcoes: [
    { nome: "Fazer Quiz", slug: "quiz", rota: "/quiz" },
  ],
},

  ]

  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">
          <img src={logo} alt="Essence" className="logo-img" />
        </Link>

        <form className="search-form" onSubmit={pesquisar}>
          <input
            className="search"
            type="text"
            placeholder="Buscar perfumes..."
            value={busca}
            onChange={(event) => {
              setBusca(event.target.value)
              setMostrarSugestoes(true)
            }}
            onFocus={() => setMostrarSugestoes(true)}
          />

          {mostrarSugestoes && busca.trim() !== "" && (
            <div className="search-suggestions">
              {sugestoes.length === 0 ? (
                <p>Nenhum perfume encontrado</p>
              ) : (
                sugestoes.slice(0, 5).map((produto) => (
                  <button
                    type="button"
                    key={produto.id}
                    onClick={() => abrirProduto(produto.id)}
                  >
                    <img src={produto.imagem} alt={produto.nome} />
                    <span>
                      <strong>{produto.nome}</strong>
                      <small>{produto.marca}</small>
                    </span>
                  </button>
                ))
              )}
            </div>
          )}
        </form>

        <div className="icons">
          <Link to="/favoritos">
            <img src={iconFavorite} alt="Favoritos" className="icon-img" />
          </Link>

          <Link to="/login">
            <img src={iconUser} alt="Perfil" className="icon-img" />
          </Link>

          <Link to="/sacola">
            <img src={iconBag} alt="Sacola" className="icon-img" />
          </Link>
        </div>
      </div>

      <nav className="menu">
        {menus.map((menu) => (
          <div className="menu-item" key={menu.titulo}>
            <button className="menu-button">{menu.titulo}</button>

            <div className="dropdown">
              {menu.opcoes.map((opcao) => (
                <Link
                  key={opcao.slug}
                  to={opcao.rota ? opcao.rota : `/categoria/${opcao.slug}`}
                >
                  {opcao.nome}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header