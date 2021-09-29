const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

const Pokedex = [
    {
        Número:"N°260",
        Nome:"Swampert",
        Tipo:"Aquatico, Terrestre",
        Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
        Descrição:"",
        Altura:"",
        Peso:"",
        Categoria:"",
        Habilidade:""},
        {
            Número:"N°282",
            Nome:"Gardevoir",
            Tipo:"Psiquico, Fada",
            Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
            Descrição:"",
            Altura:"",
            Peso:"",
            Categoria:"",
            Habilidade:""},
            {
                Número:"N°093",
                Nome:"Haunter",
                Tipo:"Fantasma, Venenoso",
                Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
                Descrição:"",
                Altura:"",
                Peso:"",
                Categoria:"",
                Habilidade:""}
];

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

  app.get("/", (req, res) => {
    res.render("index", {Titulo: "poke", Pokedex : Pokedex}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.get("/detalhes", (req, res) => {
    res.render("detalhes", {Titulo: "poke", Pokedex : Pokedex}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro", {Titulo: "poke", Pokedex : Pokedex}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));