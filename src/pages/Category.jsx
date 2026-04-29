import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

function Category() {
  const { categoria } = useParams()

  const produtosFiltrados = products.filter((produto) =>
    produto.categorias?.includes(categoria)
  )

  return (
    <section className="products-section">
      <h2>{categoria.replaceAll("-", " ")}</h2>

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado nessa categoria.</p>
      ) : (
        <div className="products-grid">
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Category