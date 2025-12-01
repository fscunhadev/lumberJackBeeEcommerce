// widget para chatbot/captura de leads - widget chatbot/lead capture

import React, { useState } from 'react'
import { postLead } from '../lib/api'
import { trackEvent } from '../lib/analytics'

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [interest, setInterest] = useState('barba')
  const [loading, setLoading] = useState(false)
  const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await postLead({ name, phone, interest })
      trackEvent('lead_submitted', { name, interest })
      // open WhatsApp chat with template message
      const text = encodeURIComponent(`Olá, meu nome é ${name}. Tenho interesse em ${interest}. Meu telefone: ${phone}`)
      const provider = process.env.NEXT_PUBLIC_WHATSAPP_PROVIDER_URL
      // prefer direct wa.me link if available
      if (provider) {
        window.open(`${provider}?phone=${WA_NUMBER}&text=${text}`, '_blank')
      } else {
        window.open(`https://wa.me/${WA_NUMBER.replace(/\D/g, '')}?text=${text}`, '_blank')
      }
    } catch (err) {
      console.error(err)
      alert('Erro ao enviar lead. Tente novamente.')
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  return (
    <div>
      <div className="fixed right-4 bottom-4 z-50">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 bg-[color:var(--color-honey)] text-[color:var(--color-dark)] px-3 py-2 rounded-full shadow-md"
          aria-label="Abrir chat"
        >
          <svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 1 0 22 12c0 5.52-4.48 10-10 10-1.96 0-3.78-.56-5.33-1.53L2 22l1.53-4.67C2.56 15.78 2 13.96 2 12A10 10 0 0 0 12 2z"/></svg>
          <span className="hidden sm:inline">Ajuda</span>
        </button>

        {open && (
          <div className="mt-3 w-80 bg-white rounded-md shadow-lg p-4">
            <h4 className="font-semibold">Precisa de ajuda?</h4>
            <p className="text-sm text-gray-600 mb-2">Deixe seu nome e telefone que chamamos você no WhatsApp.</p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className="w-full border rounded px-2 py-2 text-sm" />
              <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone (ex: +55119...)" className="w-full border rounded px-2 py-2 text-sm" />
              <select value={interest} onChange={(e) => setInterest(e.target.value)} className="w-full border rounded px-2 py-2 text-sm">
                <option value="barba">Barba</option>
                <option value="cabelo">Cabelo</option>
                <option value="bigode">Bigode</option>
              </select>
              <div className="flex justify-between items-center">
                <button type="submit" disabled={loading} className="bg-[color:var(--color-honey)] text-sm px-3 py-2 rounded font-semibold">
                  {loading ? 'Enviando...' : 'Enviar e abrir WhatsApp'}
                </button>
                <button type="button" onClick={() => setOpen(false)} className="text-xs text-gray-500">Fechar</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
