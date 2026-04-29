import malbec from "../assets/products/malbec.png"
import floral from "../assets/products/floral.png"
import vanilla from "../assets/products/vanilla.png"

export const products = [
  {
    id: 1,
    nome: "MALBEC",
    marca: "O BOTICÁRIO",
    descricao: "Desodorante Colônia sofisticada, marcante e elegante.",
    tamanho: "100ml",
    preco: 184.90,
    imagem: [malbec],
    categoria: "perfumes-masculinos",

    familia: "Amadeirado",

    ingredientes:
      "Álcool, fragrância, água, conservantes e componentes aromáticos selecionados.",

    piramideOlfativa:
      "Topo: notas cítricas e frescas. Corpo: especiarias e florais leves. Fundo: madeira, âmbar e musk.",

    ocasiaoIdeal:
      "Ideal para ocasiões noturnas, encontros e momentos sofisticados.",
  },

  {
    id: 2,
    nome: "LA VIE EST BELLE EAU DE PARFUM",
    marca: "LANCÔME",
    descricao:
      "Fragrância floral doce e envolvente, símbolo de felicidade e elegância.",
    tamanho: "100ml",
    preco: 629.99,
    imagem: [floral],
    categoria: "perfumes-femininos",

    familia: "Floral",

    ingredientes:
      "Álcool, fragrância, água, extratos florais e compostos aromáticos refinados.",

    piramideOlfativa:
      "Topo: pera e cassis. Corpo: íris, jasmim e flor de laranjeira. Fundo: patchouli, baunilha e praline.",

    ocasiaoIdeal:
      "Perfeito para eventos especiais, encontros românticos e uso diário elegante.",
  },

  {
    id: 3,
    nome: "EAU DE TOILETTE",
    marca: "CHANSON D'EAU",
    descricao:
      "Perfume leve e refrescante com toque adocicado e delicado.",
    tamanho: "100ml",
    preco: 119.90,
    imagem: [vanilla],
    categoria: "adocicado",

    familia: "Adocicado",

    ingredientes:
      "Álcool, fragrância, água e compostos aromáticos suaves.",

    piramideOlfativa:
      "Topo: frutas frescas. Corpo: flores suaves. Fundo: baunilha e musk.",

    ocasiaoIdeal:
      "Ideal para uso diário, clima quente e momentos casuais.",
  },
]