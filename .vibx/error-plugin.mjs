import { appendFileSync } from 'fs'

export default function vibxErrorPlugin() {
  return {
    name: 'vibx-error-report',
    configureServer(server) {
      server.middlewares.use('/__error_report', (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', c => body += c)
          req.on('end', () => {
            try {
              const { error } = JSON.parse(body)
              if (error) appendFileSync('/tmp/runtime_errors.log', error + '\n')
            } catch {}
            res.writeHead(204)
            res.end()
          })
        } else {
          res.writeHead(204)
          res.end()
        }
      })
    },
  }
}
