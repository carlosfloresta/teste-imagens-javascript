const express = require('express');
const cors = require('cors');
const app = express();

const circles = [
    {
        id: 1,
        name: 'Twitter',
        image: 'img/twitter.jpg',
        color: '#aa2b31',
        size: 3
    },
    {
        id: 2,
        name: 'Facebook',
        image: 'img/facebook.jpg',
        color: '#63e184',
        size: 1
    },
    {
        id: 3,
        name: 'Skype',
        image: 'img/skype.png',
        color: '#033d49',
        size: 2
    },
]

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {

    let html = ` <html lang="pt-br">
    
                     <head>
    
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta name="description" content="Teste Vianuvem">
                        <meta name="author" content="Carlos Henrique Costa Floresta">
           
                        <title>Vianuvem Frontend Test</title>
                        <link rel="stylesheet" type="text/css" href="css/estilo.css" />
                     
                     </head>
                     
                     <body>
                         <h1>Vianuvem Frontend Test</h1>
                         <section class="conteudo">`;
    circles.forEach(function (circulo) {

        html += ` 
                       
                            <div class="img-margem">
                                <img src="`+ circulo.image +`" style=" width: `+(circulo.size * 100)+`px; border-color: `+ circulo.color +`;" />
                                    <div class="name">` + circulo.name + `</div>
                            </div>
                        `;
    });
    html += `               </section>
                       </body>          
               </html>`;
    res.send(html);
});

app.get('/circles', (req, res) => {
    res.send(circles);
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});