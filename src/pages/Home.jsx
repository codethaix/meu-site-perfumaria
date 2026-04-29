import ProductCard from "../components/ProductCard"
import { products } from "../data/products"
import banner from "../assets/banner.png"

function Home() {
  return (
    <div>

      {/* 🔥 BANNER */}
      <div className="banner">
        <img src={banner} alt="Banner" />
      </div>

      {/* PRODUTOS */}
      <section className="products-section">
        <h2>Aproveite</h2>

        {products.length === 0 ? (
          <p>Nenhum perfume cadastrado no momento.</p>
        ) : (
          <div className="products-grid">
            {products.map((produto) => (
              <ProductCard key={produto.id} {...produto} />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}

export default Home