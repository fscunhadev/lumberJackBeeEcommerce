import Link from 'next/link'
import React from 'react'

type Product = {
  title: string
  price: number
  slug: string
  image: string
  short: string
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white border rounded-md overflow-hidden shadow-sm">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.short}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="font-bold">R$ {product.price.toFixed(2)}</div>
          <Link href={`/produtos/${product.slug}`}>
            <a className="text-sm text-[color:var(--color-honey)] font-semibold">Ver</a>
          </Link>
        </div>
      </div>
    </article>
  )
}
