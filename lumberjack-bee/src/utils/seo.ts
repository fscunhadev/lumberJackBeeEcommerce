// utility to build SEO props for pages
export function buildSeo({ title, description, url, image }: { title: string; description: string; url?: string; image?: string }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com'
  const canonical = url ? `${siteUrl}${url}` : siteUrl
  return {
    title,
    description,
    canonical,
    image: image || `${siteUrl}/images/og.jpg`,
  }
}