// Home

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppWidget from '../components/WhatsAppWidget'
import { buildSeo } from '../utils/seo'
import { fetchProducts } from '../lib/api'
import ProductCard from '../components/ProductCard'

export default function Home({ products }: any) {
  const seo = buildSeo({
    title: 'Lumberjack Bee — Pomada para Barba, Cabelo e Bigode',
    description: 'Pomada artesanal Lumberjack Bee — fixação natural, aroma amadeirado. Compre online.',
    url: '/',
  })

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
      </Head>

      <Header />

      <main className="container">
        <section className="grid md:grid-cols-2 gap-8 items-center mt-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[color:var(--color-dark)]">Lumberjack Bee</h1>
            <p className="mt-4 text-gray-700 max-w-lg">
              Pomada artesanal para cabelo, barba e bigode. Fixação natural, aroma amadeirado e ingredientes selecionados.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/produtos" className="bg-[color:var(--color-honey)] px-4 py-2 rounded font-semibold">Ver produtos</a>
              <a href="#como-usar" className="px-4 py-2 rounded border">Como usar</a>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold">Por que escolher?</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>➤ Ingredientes naturais e veg-friendly.</li>
                <li>➤ Acabamento profissional sem resíduo.</li>
                <li>➤ Envio rápido e garantia 30 dias.</li>
              </ul>
            </div>
          </div>

          <div>
            <img src="/images/hero.jpg" alt="Lumberjack Bee" className="w-full rounded-md shadow" />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Produtos em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {products.map((p: any) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>

        <section id="como-usar" className="mt-12 bg-white p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold">Como usar</h2>
          <p className="mt-2 text-gray-600">Aqueça uma pequena quantidade entre as mãos e aplique no cabelo seco ou na barba, modelando conforme desejar.</p>
        </section>
      </main>

      <Footer />
      <WhatsAppWidget />
    </>
  )
}

// Server-side fetch of mock products
export async function getStaticProps() {
  const products = await fetchProducts()
  return { props: { products }, revalidate: 60 }
}
