import "./header.css"
import { Link } from "react-router-dom"

import logo from "../assets/logo.png"
import iconFavorite from "../assets/coracao.png"
import iconUser from "../assets/usuario.png"
import iconBag from "../assets/sacola.png"

function Header() {
  const menus = [
    {
      titulo: "Perfumaria",
      opcoes: ["Perfumes Femininos", "Perfumes Masculinos", "Perfumes Importados", "Mais Vendidos"],
    },
    {
      titulo: "Família Olfativa",
      opcoes: ["Floral", "Amadeirado", "Cítrico", "Oriental", "Adocicado"],
    },
    {
      titulo: "Marcas",
      opcoes: ["Nativa SPA", "Eudora", "O Boticário"],
    },
    {
      titulo: "Corpo e Banho",
      opcoes: ["Sabonetes", "Hidratantes", "Óleos Corporais", "Body Splash"],
    },
    {
      titulo: "Presentes",
      opcoes: ["Kits Femininos", "Kits Masculinos", "Até R$100", "Luxo"],
    },
    {
      titulo: "Promoção",
      opcoes: ["Ofertas da Semana", "Leve 2 Pague 1", "Outlet", "Últimas Unidades"],
    },
  ]

  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/">
          <img src={logo} alt="Essence" className="logo-img" />
        </Link>

        <input
          className="search"
          type="text"
          placeholder="Buscar perfumes..."
        />

        <div className="icons">
          <Link to="/favoritos">
            <img src={iconFavorite} alt="Favoritos" className="icon-img" />
          </Link>

          <Link to="/perfil">
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
                  key={opcao}
                  to={`/categoria/${opcao.toLowerCase().replaceAll(" ", "-")}`}
                >
                  {opcao}
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