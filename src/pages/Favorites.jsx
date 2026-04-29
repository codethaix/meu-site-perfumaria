import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"

function Favorites() {
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  )

  useEffect(() => {
    function atualizar() {
      setFavoritos(JSON.parse(localStorage.getItem("favoritos")) || [])
    }

    window.addEventListener("favoritosAtualizados", atualizar)

    return () => {
      window.removeEventListener("favoritosAtualizados", atualizar)
    }
  }, [])

  return (
    <section className="products-section">
      <h2>Meus Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>Nenhum produto favoritado ainda.</p>
      ) : (
        <div className="products-grid">
          {favoritos.map((produto) => (
            <ProductCard
              key={produto.id}
              {...produto}
              isFavoritos={true} // 🔥 ESSA LINHA É O SEGREDO
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favorites