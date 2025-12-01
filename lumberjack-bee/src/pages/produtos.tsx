// Listing do produto - Product listing pageimport Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchProducts } from '../lib/api'
import ProductCard from '../components/ProductCard'
import { buildSeo } from '../utils/seo'

export default function Produtos({ products }: any) {
  const seo = buildSeo({
    title: 'Produtos — Lumberjack Bee',
    description: 'Linha de pomadas Lumberjack Bee para barba, cabelo e bigode.',
    url: '/produtos'
  })

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Head>

      <Header />
      <main className="container mt-8">
        <h1 className="text-2xl font-bold">Produtos</h1>
        <p className="text-gray-600 mt-2">Escolha a pomada ideal para você.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((p: any) => (<ProductCard key={p.slug} product={p} />))}
        </div>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const products = await fetchProducts()
  return { props: { products }, revalidate: 60 }
}
