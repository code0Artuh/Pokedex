const express = require("express");
const path = require("path");
const app = express();
const port = (process.env.PORT || 8000); // Const para armanezar a porta do servidor

const Pokedex = [{
  Número:"N°802",
  Nome:"Marshadow",
  Tipo:"Lutador, Fantasma",
  Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/802.png",
  Descrição:"It slips into the shadows of others and mimics their powers and movements",
  Altura:"107 M",
  Peso:"22.2Kg",
  Categoria:"Gloomweller",
  Habilidade:"Technician"},
  {

      Número:"N°282",
      Nome:"Gardevoir",
      Tipo:"Psiquico, Fada",
      Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
      Descrição:"It has the power to predict the future. Its power peaks when it is protecting its Trainer",
      Altura:"1.6 M",
      Peso:"48.4Kg",
      Categoria:"Embrace",
      Habilidade:"Synchronize"},
      {
          Número:"N°093",
          Nome:"Haunter",
          Tipo:"Fantasma, Venenoso",
          Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
          Descrição:"Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
          Altura:"1.6 M",
          Peso:"0.1Kg",
          Categoria:"Gas",
          Habilidade:"Levitate"}
];

let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

  app.get("/", (req, res) => {
    setTimeout(() => {
      message = "";
    }, 1000);
    res.render("index", {Pokedex, message}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = Pokedex[id];
    res.render("detalhes", {
      pokemon,
    });
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.post("/new", (req, res) => {
    const pokemon = req.body;
    Pokedex.push(pokemon);
    message = "Seu pokemon foi registrado!!!";
    res.redirect("/");
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port);