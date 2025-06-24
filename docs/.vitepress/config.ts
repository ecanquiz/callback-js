import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CallbackJS",
  description: "Aprende",
  base: '/callback-js/', //  The default path during deployment / secondary address / base can be used/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/mylogo.png',  
    siteTitle: 'CallbackJS',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Tutorial', link: '/callback-0' },
      { text: 'ecanquiz', link: 'https://ecanquiz.github.io/' }
    ],

    sidebar: [
      {      
        path: '/',      // optional, link of the title, which should be an absolute path and must exist        
        sidebarDepth: 1,    // optional, defaults to 1
        items: [
          { text: 'Callbacks JavaScript', link: '/callback-0' },
          { text: 'Ejemplo de Callback #1', link: '/callback-1' },
          { text: 'Ejemplo de Callback #2', link: '/callback-2' },
          { text: 'Ejemplo de Callback #3', link: '/callback-3' },
          { text: 'Ejemplo de Callback #4', link: '/callback-4' },
          { text: 'Ejemplo de Callback #5', link: '/callback-5' },
          { text: 'Ejemplo de Callback #6', link: '/callback-6' },
          { text: 'Ejemplo de Callback #7', link: '/callback-7' },
          { text: 'Ejemplo de Callback #8', link: '/callback-8' },
        ]
      }      
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ecanquiz/callback-js' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Ernesto Canquiz'
    }    
  }
})

 
