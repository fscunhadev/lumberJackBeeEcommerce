import React from 'react'

export default function CartSidebar() {
  return (
    <aside className="fixed right-4 bottom-20 bg-white border rounded-md p-4 shadow-lg w-80">
      <h4 className="font-semibold">Carrinho</h4>
      <p className="text-sm text-gray-600 mt-2">Nenhum item (simulação)</p>
      <div className="mt-4">
        <button className="w-full py-2 bg-[color:var(--color-honey)] rounded-md font-semibold">Finalizar</button>
      </div>
    </aside>
  )
}
