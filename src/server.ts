import express from 'express';

import "./database";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação especifica 
 */

// app.get("/", (request, response) => {
//     return response.send("Ola NLW 05");
// });

app.get("/", (request, response) => {
    return response.json({
        message: "Ola NLW 05!",
    })
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" });
});


app.listen(3333, () => console.log("Servers running on port 3333"));
