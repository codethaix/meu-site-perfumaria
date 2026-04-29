import malbec from "../assets/products/malbec.png"
import floral from "../assets/products/floral.png"
import vanilla from "../assets/products/vanilla.png"
import amber from "../assets/products/amber.png"
import sauvage from "../assets/products/sauvage.png"
import coolwater from "../assets/products/coolwater.png"
import gucci from "../assets/products/gucci.png"
import chloe from "../assets/products/chloe.png"
import raneen from "../assets/products/raneen.png"
import eudora from "../assets/products/eudora.png"
import intention from "../assets/products/intention.png"
import vyvedas from "../assets/products/vyvedas.png"

export const products = [
  {
    id: 1,
    nome: "MALBEC",
    marca: "O BOTICÁRIO",
    descricao: "Desodorante Colônia masculina marcante, com notas especiadas, cítricas e fundo amadeirado robusto.",
    tamanho: "100ml",
    preco: 184.90,
    imagem: malbec,

    categorias: ["perfumes-masculinos", "amadeirado", "presentes", "mais-vendidos", "noite"],
    familia: "Amadeirado Especiado",
    genero: "Masculino",
    intensidade: "marcante",
    ocasioes: ["noite", "encontro", "eventos", "presente"],
    personalidade: ["confiante", "elegante", "sofisticada"],

    ingredientes:
      "Álcool desnaturado, perfume, água e componentes aromáticos. Consulte sempre a embalagem original para a lista completa.",

    piramideOlfativa:
      "Topo: bergamota, lima, mandarina, cassis, pimenta e cardamomo. Corpo: cedro, patchouli e sândalo. Fundo: musgo de carvalho, âmbar, benjoim e almíscar.",

    ocasiaoIdeal:
      "Ideal para encontros, eventos noturnos e ocasiões em que você deseja uma presença marcante.",
  },

  {
    id: 2,
    nome: "LA VIE EST BELLE EAU DE PARFUM",
    marca: "LANCÔME",
    descricao:
      "Perfume feminino floral gourmand, doce e elegante, com assinatura de íris, patchouli e baunilha.",
    tamanho: "100ml",
    preco: 629.99,
    imagem: floral,

    categorias: ["perfumes-femininos", "floral", "adocicado", "presentes", "luxo", "mais-vendidos"],
    familia: "Floral Gourmand",
    genero: "Feminino",
    intensidade: "intensa",
    ocasioes: ["eventos", "encontro", "noite", "presente"],
    personalidade: ["romântica", "elegante", "sofisticada"],

    ingredientes:
      "Íris, patchouli e baunilha gourmand são ingredientes de destaque. Consulte sempre a embalagem original para a lista completa.",

    piramideOlfativa:
      "Topo: pera e groselha preta. Corpo: íris, jasmim e flor de laranjeira. Fundo: pralinê, baunilha, patchouli e fava tonka.",

    ocasiaoIdeal:
      "Perfeito para eventos especiais, encontros românticos e momentos em que você quer uma fragrância sofisticada e envolvente.",
  },

  {
    id: 3,
    nome: "EAU DE TOILETTE VANILLA",
    marca: "CHANSON D'EAU",
    descricao:
      "Perfume feminino doce e gourmand, com destaque para baunilha e âmbar, trazendo sensação confortável e envolvente.",
    tamanho: "100ml",
    preco: 119.90,
    imagem: vanilla,

    categorias: ["perfumes-femininos", "adocicado", "presentes", "dia-a-dia"],
    familia: "Gourmand Adocicado",
    genero: "Feminino",
    intensidade: "moderada",
    ocasioes: ["dia-a-dia", "casual", "encontro", "presente"],
    personalidade: ["delicada", "romântica", "doce"],

    ingredientes:
      "Fragrância com notas gourmand, baunilha e âmbar. Consulte sempre a embalagem original para a lista completa.",

    piramideOlfativa:
      "Notas principais: baunilha e âmbar, com perfil doce, confortável e envolvente.",

    ocasiaoIdeal:
      "Ideal para uso diário, momentos casuais e ocasiões em que você deseja uma fragrância doce e aconchegante.",
  },

  {
  id: 4,
  nome: "Amber Romance Mist",
  marca: "Victoria's Secret",
  descricao: "Body mist doce e envolvente com toque quente e sensual.",
  tamanho: "250ml",
  preco: 129.90,
  imagem: amber,

  categorias: ["perfumes-femininos", "adocicado", "dia-a-dia", "presentes"],

  familia: "Oriental Adocicado",
  genero: "Feminino",
  intensidade: "leve",

  ocasioes: ["dia-a-dia", "casual"],
  personalidade: ["romântica", "delicada"],

  ingredientes: "Fragrância com notas de cereja preta, crème anglaise, baunilha e âmbar.",
  piramideOlfativa: "Notas doces de baunilha, âmbar e frutas.",
  ocasiaoIdeal: "Perfeito para uso diário e momentos descontraídos.",
},

{
  id: 5,
  nome: "Sauvage Eau de Toilette",
  marca: "Dior",
  descricao: "Fragrância masculina fresca, intensa e extremamente sofisticada.",
  tamanho: "100ml",
  preco: 699.90,
  imagem: sauvage,

  categorias: ["perfumes-masculinos", "amadeirado", "luxo", "mais-vendidos"],

  familia: "Amadeirado Aromático",
  genero: "Masculino",
  intensidade: "marcante",

  ocasioes: ["noite", "eventos"],
  personalidade: ["confiante", "sofisticada"],

  ingredientes: "Bergamota da Calábria, pimenta, ambroxan.",
  piramideOlfativa: "Topo: bergamota. Corpo: pimenta. Fundo: ambroxan.",
  ocasiaoIdeal: "Ideal para noites e ocasiões especiais.",
},

{
  id: 6,
  nome: "Cool Water Intense",
  marca: "Davidoff",
  descricao: "Perfume masculino refrescante com toque adocicado moderno.",
  tamanho: "125ml",
  preco: 329.90,
  imagem: coolwater,

  categorias: ["perfumes-masculinos", "citrico", "dia-a-dia"],

  familia: "Fougère Oriental",
  genero: "Masculino",
  intensidade: "moderada",

  ocasioes: ["dia-a-dia"],
  personalidade: ["moderno", "leve"],

  ingredientes: "Mandarina verde, coco e âmbar.",
  piramideOlfativa: "Topo: mandarina. Corpo: coco. Fundo: âmbar.",
  ocasiaoIdeal: "Perfeito para uso diário e clima quente.",
},

{
  id: 7,
  nome: "Gucci Guilty Elixir de Parfum",
  marca: "Gucci",
  descricao: "Perfume feminino intenso, floral e extremamente sofisticado.",
  tamanho: "60ml",
  preco: 799.90,
  imagem: gucci,

  categorias: ["perfumes-femininos", "floral", "luxo"],

  familia: "Floral Intenso",
  genero: "Feminino",
  intensidade: "intensa",

  ocasioes: ["noite", "eventos"],
  personalidade: ["sofisticada", "elegante"],

  ingredientes: "Violeta, rosa, patchouli.",
  piramideOlfativa: "Notas florais intensas com fundo amadeirado.",
  ocasiaoIdeal: "Ideal para eventos e ocasiões marcantes.",
},

{
  id: 8,
  nome: "Nomade Nuit d’Egypte",
  marca: "Chloé",
  descricao: "Fragrância oriental misteriosa inspirada no Egito.",
  tamanho: "75ml",
  preco: 699.90,
  imagem: chloe,

  categorias: ["perfumes-femininos", "oriental", "luxo"],

  familia: "Oriental",
  genero: "Feminino",
  intensidade: "intensa",

  ocasioes: ["noite"],
  personalidade: ["misteriosa", "sofisticada"],

  ingredientes: "Mirra, especiarias e âmbar.",
  piramideOlfativa: "Notas orientais quentes e envolventes.",
  ocasiaoIdeal: "Ideal para noites e ocasiões especiais.",
},

{
  id: 9,
  nome: "Raneen Eau de Parfum",
  marca: "Asdaaf",
  descricao: "Perfume árabe doce, intenso e luxuoso.",
  tamanho: "100ml",
  preco: 259.90,
  imagem: raneen,

  categorias: ["perfumes-femininos", "adocicado", "luxo"],

  familia: "Oriental Gourmand",
  genero: "Feminino",
  intensidade: "marcante",

  ocasioes: ["noite", "eventos"],
  personalidade: ["marcante", "luxuosa"],

  ingredientes: "Baunilha, âmbar e flores.",
  piramideOlfativa: "Notas doces com fundo ambarado.",
  ocasiaoIdeal: "Ideal para quem quer se destacar.",
},

{
  id: 10,
  nome: "Eudora Eau de Parfum",
  marca: "Eudora",
  descricao: "Perfume feminino marcante e sofisticado.",
  tamanho: "75ml",
  preco: 199.90,
  imagem: eudora,

  categorias: ["perfumes-femininos", "floral", "mais-vendidos"],

  familia: "Chypre Floral",
  genero: "Feminino",
  intensidade: "marcante",

  ocasioes: ["noite", "eventos"],
  personalidade: ["confiante", "elegante"],

  ingredientes: "Rosa, patchouli e âmbar.",
  piramideOlfativa: "Floral intenso com fundo amadeirado.",
  ocasiaoIdeal: "Ideal para ocasiões importantes.",
},

{
  id: 11,
  nome: "Intention For Man",
  marca: "Eudora",
  descricao: "Perfume masculino moderno e elegante.",
  tamanho: "100ml",
  preco: 149.90,
  imagem: intention,

  categorias: ["perfumes-masculinos", "amadeirado", "dia-a-dia"],

  familia: "Amadeirado",
  genero: "Masculino",
  intensidade: "moderada",

  ocasioes: ["trabalho", "dia-a-dia"],
  personalidade: ["moderno", "confiante"],

  ingredientes: "Notas amadeiradas e especiadas.",
  piramideOlfativa: "Notas frescas com fundo amadeirado.",
  ocasiaoIdeal: "Ideal para trabalho e rotina.",
},

{
  id: 12,
  nome: "Kit Litsea Cubeba e Capim Limão",
  marca: "Vyvedas",
  descricao: "Kit aromático natural com fragrância cítrica e relaxante.",
  tamanho: "Kit",
  preco: 89.90,
  imagem: vyvedas,

  categorias: ["corpo-e-banho", "citrico", "presentes"],

  familia: "Cítrico",
  genero: "Unissex",
  intensidade: "leve",

  ocasioes: ["relaxamento", "casa"],
  personalidade: ["natural", "leve"],

  ingredientes: "Óleos essenciais naturais.",
  piramideOlfativa: "Notas cítricas e herbais.",
  ocasiaoIdeal: "Ideal para relaxar e bem-estar.",
}

]