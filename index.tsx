/** @jsx h */
import { serve } from 'https://deno.land/std@0.155.0/http/server.ts'
import { h, html } from 'https://deno.land/x/htm@0.0.10/mod.tsx'
import { UnoCSS } from 'https://deno.land/x/htm@0.0.10/plugins.ts'

// enable UnoCSS
html.use(UnoCSS())

serve(async (request: Request) => {
  const path = request.url.split(String(request.headers.get('host'))).at(1) ?? '/'
  const cards = await (await fetch('https://api.github.com/repos/vikiival/trap/contents/images?ref=master')).json()

  if (path === '/') {
    return html({
      title: 'TRAP',
      meta: {
        'og:title': 'Trap Limited',
        'og:type': 'website',
        'og:url': 'https://trap.ltd',
        'og:image': 'https://trap.ltd/well',
        'og:site_name': 'Trap Limited',
        'og:description': 'Metaverse trap doors',
        'description': 'Trap Limited is a Metaverse based company that specialises in the design, manufacture and installation of trap doors, trap doors and sliding doors.',
        'twitter:card': 'content="summary_large_image',
        'twitter:site': 'content="https://trap.ltd',
        'twitter:title': 'content="Trap Limited',
        'twitter:description': 'content="Trap Limited',
        'twitter:image': 'content="https://trap.ltd/well',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
        'theme-color': '#1B1917',
      },
      styles: [
        'html, body { background-color: #1B1917; }'
      ],
      scripts: [
        `const copy = (name) => navigator?.clipboard?.writeText(location.origin + '/' + name.replace('.png', ''))`
      ],
      body: (
        <div class="flex min-h-screen justify-center bg-stone-900">
          <div class="w-full p-7 md:w-3/4 2xl:w-3/5">
            <h1 class="text-white text-5xl sm:text-6xl mt-7 sm:mt-12">Trapcards</h1>
            <p class="text-white font-mono -mx-7 sm:mx-0 my-7 p-4 px-8 sm:px-4 bg-white/5 text-xl whitespace-nowrap overflow-x-auto">
              <span>https://trap.ltd/</span><span class="text-yellow-500">[trapcard name]</span>
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card: any) => (
                <div class="rounded-lg overflow-hidden relative">
                  <img class="w-full" src={card.download_url} alt="" />
                  <button 
                    onclick={`copy('${card.name}')`}
                    class="hover:opacity-100 opacity-0 absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span class="text-yellow-500 font-mono text-4xl">🔗 {card.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    })
  }

  // Check if the image exists
  const toURL = (img: string) => `https://raw.githubusercontent.com/vikiival/trap/master/images/${img}.png`
  const response = await fetch(toURL(path))
  
  return new Response('', { 
    status: 302, 
    headers: {
      Location: toURL(response.status === 404 ? '404' : path),
    },
  })
})