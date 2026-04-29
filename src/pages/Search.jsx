import { useSearchParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

function Search() {
  const [searchParams] = useSearchParams()
  const termo = searchParams.get("q") || ""

  const resultado = products.filter((produto) => {
    const texto = `
      ${produto.nome}
      ${produto.marca}
      ${produto.descricao}
      ${produto.familia}
      ${produto.genero}
      ${produto.categorias?.join(" ")}
      ${produto.ocasioes?.join(" ")}
      ${produto.personalidade?.join(" ")}
    `.toLowerCase()

    return texto.includes(termo.toLowerCase())
  })

  return (
    <section className="products-section">
      <h2>Resultado para: {termo}</h2>

      {resultado.length === 0 ? (
        <p>Nenhum perfume encontrado.</p>
      ) : (
        <div className="products-grid">
          {resultado.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      )}
    </section>
  )
}

export default Search