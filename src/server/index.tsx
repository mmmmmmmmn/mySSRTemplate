import React from 'react'
import { renderToString } from 'react-dom/server'
import App from '../client/App'
import express from 'express'

const app = express()
app.use(express.static('dist'))

app.get('/', (_, res) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <div id="root">${renderToString(<App />)}</div>
                <script src="./bundle.js"></script>
            </body>
        </html>
    `)
})

const port = 8888
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`)
})
