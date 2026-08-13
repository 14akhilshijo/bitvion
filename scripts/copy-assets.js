import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const parent = join(root, '..')

const copies = [
  {
    from: [join(parent, 'logo.jpeg'), join(root, 'logo.jpeg')],
    to: join(root, 'src/assets/bitvion-logo.jpeg'),
  },
  {
    from: [join(parent, 'logo.jpeg'), join(root, 'logo.jpeg')],
    to: join(root, 'public/bitvion-logo.jpeg'),
  },
  {
    from: [
      join(root, 'founder.jpeg'),
      join(parent, 'founder.jpeg'),
      join(root, 'founder.jpg'),
    ],
    to: join(root, 'public/founder.jpeg'),
  },
  {
    from: [
      join(root, 'founder.jpeg'),
      join(parent, 'founder.jpeg'),
      join(root, 'founder.jpg'),
    ],
    to: join(root, 'src/assets/founder.jpeg'),
  },
  {
    from: [
      join(root, 'logo-animation.mp4'),
      join(parent, 'logo-animation.mp4'),
      join(root, 'logo.mp4'),
      join(parent, 'logo.mp4'),
      join(root, 'bitvion-logo.mp4'),
    ],
    to: join(root, 'public/logo-animation.mp4'),
    optional: true,
  },
]

for (const { from, to } of copies) {
  const sources = Array.isArray(from) ? from : [from]
  const source = sources.find((path) => existsSync(path))
  if (source) {
    mkdirSync(dirname(to), { recursive: true })
    copyFileSync(source, to)
    console.log(`Copied: ${source} -> ${to}`)
  } else if (!optional) {
    console.warn(`Missing asset for: ${to}`)
  }
}

console.log('Asset copy complete.')
