import "./style.scss";
import HomePage from "./page";

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
 

export const metadata = {

  //GENERIC
  title: 'Potenciamos la marca personal de cirujanos estéticos | MEDWORLD',
  description: 'Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.',
  applicationName: 'MEDWORLD',
  keywords: ['marketing para cirujanos estéticos', 'marca personal para médicos estéticos', 'gestión de redes sociales para cirujanos plásticos', 'funnel de ventas para médicos estéticos', 'aumento de visibilidad en redes sociales para cirujanos estéticos', 'estrategias de marketing para médicos cirujanos', 'crecimiento de marca personal para cirujanos plásticos', 'marketing digital para médicos estéticos', 'gestión de marca personal en redes sociales para cirujanos', 'atraer pacientes mediante funnel de ventas especializado', 'agencia de marketing para cirujanos estéticos', 'potenciación de marca personal para médicos estéticos', 'tráfico web para cirujanos plásticos', 'servicios de marketing para médicos cirujanos estéticos', 'funnel de ventas para clínicas estéticas', 'branding para cirujanos estéticos', 'marketing en redes sociales para médicos estéticos', 'desarrollo de marca personal para cirujanos', 'estrategias digitales para cirujanos plásticos', 'aumento de pacientes para médicos estéticos'],
  authors: [{ name: 'Andrés Ortega', url: 'https://ermo.es' }],
  creator: 'Andrés Ortega',
  publisher: 'Andrés Ortega',
  robots: 'index, follow',
  revisitAfter: '1 days',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  contentLanguage: 'es',
  
  // META
  openGraph: {
    title: 'Estrategias de marketing para cirujanos estéticos | MEDWORLD',
    description: 'Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.',
    url: 'https://medworld.es',
    type: 'website',
    images: [
      {
        url: 'https://medworld.es/seo/meta-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.',
      },
    ],
    site_name: 'Estrategias de marketing para cirujanos estéticos | MEDWORLD',
    locale: 'es_ES',
  },

  // TWITTER
  twitter: {
    card: 'Estrategias de marketing para cirujanos estéticos | MEDWORLD',
    site: '@medworld.es',
    creator: '@medworld.es',
    title: 'Estrategias de marketing para cirujanos estéticos | MEDWORLD',
    description: 'Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.',
    image: 'https://medworld.es/seo/twitter-1200-600.jpg',
    imageAlt: 'Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.',
  },

  //APPLE
  appleTouchIcon: 'https://medworld.es/favicon_500x500.png', 
  appleTouchStartupImage: 'https://medworld.es/favicon_500x500.png',

  



  //SECURITY
  contentSecurityPolicy: "default-src 'self'; img-src 'self' https://www.medworld.es; script-src 'self' https://apis.google.com",
  referrerPolicy: 'no-referrer-when-downgrade', 
  xContentTypeOptions: 'nosniff', 
  xFrameOptions: 'DENY', 
  xXssProtection: '1; mode=block',
  permissionsPolicy: "geolocation=(self)",

  
}
 

export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.typekit.net/ury2gea.css"></link>
       
        <meta name="theme-color" content="#023246" />
        <meta name="background-color" content="#5FC8F2" />
        <link rel="canonical" href="https://medworld.es" hrefLang="es-ES" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="https://medworld.es/favicon_500x500.png" title="Ícono de la pestaña de la web Medworld" type="image/png" />
        <link rel="apple-touch-icon" sizes="500x500" href="https://medworld.es/favicon_500x500.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "http://schema.org",
                "@type": "WebSite",
                "url": "https://medworld.es",
                "name": "MEDWORLD"
              },
              {
                "@context": "http://schema.org",
                "@type": "Organization",
                "name": "Medworld",
                "description": "Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.",
                "email": "carloscorrea@medworld.es",
                "logo": "https://medworld.es/favicon_500x500.png",
                "url": "https://medworld.es"
              },
              {
                "@context": "http://schema.org",
                "@type": "LocalBusiness",
                "logo": "https://medworld.es/favicon_500x500.png",
                "name": "Medworld",
                "description": "Impulsamos la marca personal de cirujanos estéticos mediante funnels de ventas especializados y gestión de redes sociales para atraer más pacientes.",
                "image": "https://medworld.es/seo/meta-1200x630.jpg",
                "url": "https://medworld.es",
                "hasMap": "#",
                "telephone": "675392216",
                "priceRange": "$$$",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Pl. Rafael Atard, 20A",
                  "addressLocality": "Manises",
                  "addressRegion": "Valencia",
                  "postalCode": "46940"
                }
              }
            ])
          }}
        />
      </head>
      <body>
        
    
        <HomePage></HomePage>
        <Analytics /><SpeedInsights />

      </body>
    </html>
  );
}