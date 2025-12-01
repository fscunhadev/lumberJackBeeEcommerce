// Basic API client for front-end/SSR consumption. Uses fetch.
// In production, replace with actual CMS / Stripe server routes.
export async function fetchProducts() {
  // Simulated product list
  return [
    {
      id: 'pomada-barba',
      title: 'Pomada Lumberjack Bee — Barba 50g',
      price: 59.9,
      slug: 'pomada-barba',
      short: 'Fixação média. Aroma amadeirado.',
      image: '/images/prod-pomada-barba.jpg',
    },
    {
      id: 'pomada-cabelo',
      title: 'Pomada Lumberjack Bee — Cabelo 80g',
      price: 69.9,
      slug: 'pomada-cabelo',
      short: 'Acabamento matte, fácil de modelar.',
      image: '/images/prod-pomada-cabelo.jpg',
    },
    {
      id: 'pomada-bigode',
      title: 'Pomada Lumberjack Bee — Bigode 30g',
      price: 49.9,
      slug: 'pomada-bigode',
      short: 'Perfeita para detalhes e acabamento.',
      image: '/images/prod-pomada-bigode.jpg',
    },
  ]
}

export async function fetchProductBySlug(slug: string) {
  const products = await fetchProducts()
  return products.find((p) => p.slug === slug) || null
}

// POST a lead to the backend (mock)
export async function postLead(payload: { name: string; phone: string; interest?: string }) {
  // In production: call your API route that saves to CRM and triggers WhatsApp.
  // Here we simply simulate success.
  return { success: true, id: 'lead-' + Date.now(), ...payload }
}