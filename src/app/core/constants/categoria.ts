
import { Categoria } from "../interface/categorias";
//arrey corchetes y objetos llaves : tipo de dato
export const CATEGORIAS:Categoria[] = [
    {
        nombre: "FUTBOL", 
        id:0, 
        imgUrl:'https://cdn.conmebol.com/wp-content/uploads/2023/06/000_334P84K-scaled.jpg',
        productos: [{
            id:1,
            nombre: "Complejo Loyal La Paz Fútbol 5",
            precio: 6000,
            direccion: ["La Paz 947"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipP_SlO1EA2EEhc9ZTPIvyoD02cfBbbyofsXGnTd=s1360-w1360-h1020"
        },
        {
            id:2,
            nombre: "LACANCHA",
            precio: 6000,
            direccion: ["España 1855"],
            imagen: "https://lh3.googleusercontent.com/proxy/s7XOLkS_pj1RiTjHMrn-pkKPMmLu3PHoLeI20c_B2NJBVxNA-B-Mkt2erWqiQehlzc8vOjXiLPTIIkMSLKkLwW6mUdAMsE9U0Tea7huRoTZrpGaHaYX5DYPRO1pDgkJ3YOEJDIR5R1LNdkBuAjXepQQ9zpWxiqqDGCKO9A=s1360-w1360-h1020"
        },
        {
            id:3,
            nombre: "Futbol 5 LA SELECCION",
            precio: 6000,
            direccion: ["Colón 1902"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipNztMPaRQ61H_ENMD7pE8TmxjPPGfNEorlv9FVB=s1360-w1360-h1020"
        },
        {
            id:4,
            nombre: "Abasto Fútbol 5 Rosario",
            precio: 6000,
            direccion: ["Corrientes 2066"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipPTfwvmd4HNGiR_9n7C2V4sVO9Fn7-mNxYsn3qG=s1360-w1360-h1020",
        },
        

    ]     
    }, 
    {
        nombre: "TENIS", 
        id:1, 
        imgUrl:'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/11/13/alcaraz-cato-derrotado-ante-zverev-en-su-estreno-en-el-torneo-de-maestros-atp-finals.jpeg',
        productos: [{
            id:5,
            nombre: "Cuvio Tenis",
            precio: 4500,
            direccion: ["Pueyrredón 3500"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipM1vqy_aLTdYegILd1IwxD3WR-CovqICdY1ru1z=s1360-w1360-h1020"
        },
        {
            id:6,
            nombre: "HANSER TENIS",
            precio: 4500,
            direccion: ["Urquiza 2548"],
            imagen: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Tgwo-YqYiKyVgCyzap-szQ&cb_client=search.gws-prod.gps&yaw=30.191511&pitch=0&thumbfov=100&w=520&h=175"
        },
        {
            id:7,
            nombre: "Intertenis",
            precio: 3300,
            direccion: [" 3 de Febrero 1260"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipPKM0bpkBnkuFo6vda1UIJb652x4VlL-48ajrO2=s1360-w1360-h1020"
        },
        {
            id:15,
            nombre: "Apur Asociación del Pers. de la Univ. de Rosario",
            precio: 3300,
            direccion: ["Av. Belgrano 2100"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipPcbihXsoiqL59kbZIXSlrRYrB2C-bLYsPJ806R=s1360-w1360-h1020"
        },]
    }, 
    {
        nombre: "PADEL", 
        id:2, 
        imgUrl:'https://ciudaddeportiva.uss.cl/wp-content/uploads/2022/11/Padel-scaled.jpg',
        productos: [{
            id:8,
            nombre: "Esquina Dorrego Padel",
            precio: 6000,
            direccion: ["Dorrego 1898"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipN5DIsTypWGEGHWG5LNuyoAwK_4frvP9aXC1eCI=s1360-w1360-h1020"
        },
        {
            id:9,
            nombre: "Obsesión Club de Padel",
            precio: 6000,
            direccion: ["Maipú 1830"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipN2gYRdMdOVtZRePWM0owo5pLSkjEWimI1hPikf=s1360-w1360-h1020"
        },
        {
            id:10,
            nombre: "EL PASILLO PADEL",
            precio: 6000,
            direccion: ["Av. Provincias Unidas 348"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipOG1C-ZJEFfoqmE5HslMnlRIPQs-CEiG0hfGyJW=s1360-w1360-h1020"
        },
        {
            id:15,
            nombre: "Lavalle Padel Center",
            precio: 6000,
            direccion: ["San Nicolás 965 "],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipPvV49474Gr2ru4UBI6tKTpeQEEXOrzD6p9CbOt=s1360-w1360-h1020"
        },]
    }, 
    {
        nombre: "BASKET", 
        id:3, 
        imgUrl:'https://www.lanacion.com.ar/resizer/v2/alejado-de-las-canchas-manu-ginobili-se-calza-el-OJ7BABOYBBFXNJYMCUWNKEUP7U.jpg?auth=0d5a1d042dad2b9eb865ea42976b285398ab7b954729e8a8a2e7ad7b271a32df&width=880&height=586&quality=70&smart=true',
        productos: [{
            id:11,
            nombre: "Club Sportivo América",
            precio: 5700,
            direccion: [" Tucumán 2159"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipOw_sDs2_tXqzmQdT_DuNf_lmwJnngCuVYGFdw3=s1360-w1360-h1020"
        },
        {
            id:12,
            nombre: "Club Atlético Ben-Hur",
            precio: 5700,
            direccion: ["Ituzaingó 1578"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipN5LlPU4JI1Oh18sygK8XGZRjFKwX21fWWxJaB6=s1360-w1360-h1020"
        },
        {
            id:13,
            nombre: "Club Atlético Provincial",
            precio: 5700,
            direccion: ["Blvd. 27 de Febrero 2672"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipNVHTpWSA4h48PI_cFXvHfYamayW5k_PADdzVfp=s1360-w1360-h1020"
        },
        {
            id:14,
            nombre: "El Tala Club.",
            precio: 5700,
            direccion: ["Cochabamba 570"],
            imagen: "https://lh3.googleusercontent.com/p/AF1QipMyiEDaX6ruEQNZBdeiR9i7teAaLuTrz_hOPd7e=s1360-w1360-h1020"
        },
        ] 
    }, 
    
  ]
