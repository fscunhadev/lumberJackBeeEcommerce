import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-dark)] text-paper py-8 mt-12">
      <div className="container grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-lg">Lumberjack Bee</h3>
          <p className="text-sm mt-2">Pomada artesanal para cabelo, barba e bigode. Ingredientes naturais e acabamento profissional.</p>
        </div>

        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <p className="text-sm">WhatsApp: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+55 ...'}</p>
          <p className="text-sm">E-mail: contato@lumberjackbee.com</p>
        </div>

        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>Política de privacidade</li>
            <li>Termos e condições</li>
            <li>Envios e devoluções</li>
          </ul>
        </div>
      </div>

      <div className="container text-center text-xs mt-8 opacity-80">
        © {new Date().getFullYear()} Lumberjack Bee — Todos os direitos reservados.
      </div>
    </footer>
  )
}
