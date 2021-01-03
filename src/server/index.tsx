import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import App from '../client/App'
import express from 'express'

const app = express()

app.use(express.static('dist'))
app.get('/*.js(.map)?', (req, res) => res.redirect(`http://${host}:8080/${req.url}`))

app.get('*', (req, res) => {
    const sheet = new ServerStyleSheet()
    const markUp = renderToString(
        sheet.collectStyles(
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>,
        ),
    )

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="ja">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ${sheet.getStyleTags()}
                <title>Document</title>
            </head>
            <body>
                <div id="root">${markUp}</div>
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
