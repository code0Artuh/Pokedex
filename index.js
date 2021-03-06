const express = require("express");
const path = require("path");
const app = express();
const port = (process.env.PORT || 8000);

const Pokedex = [{
  Número:"N°006",
  Nome:"Charizard",
  Tipo:"Fogo, Voador",
  Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  Imagem2:"https://i.pinimg.com/originals/a8/a4/56/a8a4561433ee9fd5e4aef69e930bff79.gif",
  Descrição:"It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
  Altura:"1.7 M",
  Peso:"90.5Kg",
  Categoria:"Flame",
  Habilidade:"Blaze"},
  {

      Número:"N°282",
      Nome:"Gardevoir",
      Tipo:"Psiquico, Fada",
      Imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png",
      Imagem2:"https://thumbs.gfycat.com/AncientHiddenIvorygull-size_restricted.gif",
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
          Imagem2:"https://64.media.tumblr.com/775186807c95bb4646bba7c80554e2dd/tumblr_ncwdmsZCS61rhbzxyo1_400.gifv",
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
    res.render("index", {Pokedex, message}); 
  });

  app.get("/violent", (req, res) => {
    res.render("violent")
  });

  app.get("/nes", (req, res) => {
    res.render("nes")
  });

  app.get("/jogar", (req, res) => {
    res.render("jogar")
  });

  app.get("/batalhar", (req, res) => {
    res.render("batalhar")
  });

  app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = Pokedex[id];
    res.render("detalhes", {
      pokemon,
    });
  });

  app.get("/cadastro", (req, res) => {
    res.render("cadastro");
  });

  app.post("/new", (req, res) => {
    const {number,
      nome,
      type,
      img,
      descript,
      alt,
      kg,
      cat,
      ability} = req.body;
    Pokedex.push({Número: number,
      Nome: nome,
      Tipo: type,
      Imagem: img,
      Imagem2: img,
      Descrição: descript,
      Altura: alt,
      Peso: kg,
      Categoria: cat,
      Habilidade: ability});
      message = "Seu pokémon foi cadastrado com sucesso!!!"
    res.redirect("/");
  });


app.listen(port);
console.log( `Seu app esta rodando no http://localhost:${port}`)