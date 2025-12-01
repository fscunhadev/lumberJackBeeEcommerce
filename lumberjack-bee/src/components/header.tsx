import Link from 'next/link'
import React from 'react'
import CTAButton from './CTAButton'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-[color:var(--color-dark)] flex items-center justify-center text-paper font-bold">LB</div>
            <div>
              <div className="text-lg font-bold text-[color:var(--color-dark)]">Lumberjack Bee</div>
              <div className="text-xs text-gray-500">Pomada para cabelo, barba e bigode</div>
            </div>
          </a>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/produtos"><a className="hover:underline">Produtos</a></Link>
          <Link href="/como-usar"><a className="hover:underline">Como usar</a></Link>
          <Link href="/blog"><a className="hover:underline">Blog</a></Link>
          <Link href="/sobre"><a className="hover:underline">Sobre</a></Link>
          <Link href="/contato"><a className="hover:underline">Contato</a></Link>
        </nav>

        <div className="flex items-center gap-3">
          <CTAButton href="/produtos">Comprar</CTAButton>
        </div>
      </div>
    </header>
  )
}
