import Link from 'next/link'
import React from 'react'
type Props = { href?: string; onClick?: () => void; children: React.ReactNode }

export default function CTAButton({ href = '#', onClick, children }: Props) {
  const className =
    'inline-block bg-[color:var(--color-honey)] text-[color:var(--color-dark)] font-semibold px-4 py-2 rounded-md shadow-sm hover:brightness-95'
  return href ? (
    <Link href={href}><a className={className} onClick={onClick}>{children}</a></Link>
  ) : (
    <button className={className} onClick={onClick}>{children}</button>
  )
}
