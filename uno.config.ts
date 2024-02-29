
// uno.config.ts
import { defineConfig, transformerVariantGroup } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  // ...UnoCSS options
  presets:[
    presetUno(),
    presetAttributify(),
    presetIcons({
        collections:{
            carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
        }
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  cli:{
    entry:{
        patterns:[
            "src/**/!(*.stories|*.spec).{scss,ts,html}"
        ],
        outFile:'src/uno.css'
    }
  }
})