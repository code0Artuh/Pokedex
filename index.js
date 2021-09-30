const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

let message = "";

const Pokedex = [
    {
        Número:"N°260",
        Nome:"Swampert",
        Tipo:"Aquatico, Terrestre",
        Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/260.png",
        Descrição:"This Pokémon also has powerful vision that lets it see even in murky water",
        Altura:"1.5 M",
        Peso:"81.9Kg",
        Categoria:"Mud Fish",
        Habilidade:"Torrent"},
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

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

  app.get("/", (req, res) => {
    setTimeout(() => {
      message = "";
    }, 1000);
    res.render("index", {Titulo: "poke", Pokedex : Pokedex, message}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.get("/detalhes", (req, res) => {
    res.render("detalhes", {Titulo: "poke", Pokedex : Pokedex}); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro"); // Nome do arquivo, o EJS já busca dentro da pasta views.
  });

  app.post("/new", (req, res) => {
    const {number,
      nome,
      type,
      img,
      descrypt,
      alt,
      kg,
      cat,
      ability} = req.body;
    Pokedex.push({Número: number,
      Nome: nome,
      Tipo: type,
      Imagem: img,
      Descrição: descrypt,
      Altura: alt,
      Peso: kg,
      Categoria: cat,
      Habilidade: ability}); // Nome do arquivo, o EJS já busca dentro da pasta views.
      message = "Seu pokémon foi cadastrado com sucesso!!!"
      res.redirect("/")
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));