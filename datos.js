// =========================================
// LONDRES PASO A PASO
// datos.js v2.0
// =========================================

const viaje = {

    hotel: {
        nombre: "Premier Inn London Hammersmith",
        estacion: "Hammersmith"
    },

    dias: [

        {
    id: 1,
    fecha: "🇬🇧 Miércoles 15 julio",
    titulo: "Kensington · Hyde Park",

    distancia: "12 km",
    horario: "09:30 - 19:00",
    visitas: 7,

    lugares: [

        {
            icono: "🌸",
            nombre: "Holland Park",
            hora: "09:30",
            duracion: "45 min",
            metro: "Holland Park",
            precio: "Gratis",

            descripcion: "Uno de los parques más tranquilos de Londres, perfecto para comenzar el viaje alejados del bullicio del centro.",

            consejo: "Entrad directamente hacia el Kyoto Garden, la zona más bonita del parque.",

            foto: "Puente del Kyoto Garden.",

            restaurantes: [
                "The Belvedere",
                "The Mitre"
            ],

            maps: "https://maps.google.com/?q=Holland+Park+London"

        },

        {
            icono: "🌺",
            nombre: "Kyoto Garden",
            hora: "10:00",
            duracion: "30 min",
            metro: "Holland Park",
            precio: "Gratis",

            descripcion: "Jardín japonés con cascadas, estanques y pavos reales, considerado uno de los rincones más bonitos de Londres.",

            consejo: "Es mejor visitarlo a primera hora para encontrar menos gente.",

            foto: "Puente rojo sobre el estanque.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Kyoto+Garden+London"

        },

        {
            icono: "👑",
            nombre: "Kensington Palace",
            hora: "11:00",
            duracion: "1 h",
            metro: "Queensway",
            precio: "Exterior gratis",

            descripcion: "Residencia real situada junto a Kensington Gardens y antigua residencia de Diana de Gales.",

            consejo: "El paseo por los jardines es casi tan recomendable como el propio palacio.",

            foto: "Fachada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Kensington+Palace"

        },

        {
            icono: "🌳",
            nombre: "Hyde Park",
            hora: "12:15",
            duracion: "1 h 30 min",
            metro: "Lancaster Gate",
            precio: "Gratis",

            descripcion: "El parque más famoso de Londres, ideal para pasear entre lagos, jardines y amplias avenidas.",

            consejo: "Acercaos hasta el Serpentine Lake antes de continuar la ruta.",

            foto: "Serpentine Lake.",

            restaurantes: [
                "Serpentine Bar & Kitchen"
            ],

            maps: "https://maps.google.com/?q=Hyde+Park+London"

        },

        {
            icono: "🎼",
            nombre: "Royal Albert Hall",
            hora: "14:15",
            duracion: "30 min",
            metro: "South Kensington",
            precio: "Exterior gratis",

            descripcion: "Sala de conciertos de fama mundial situada frente a Kensington Gardens.",

            consejo: "La escalinata principal ofrece las mejores fotografías del edificio.",

            foto: "Fachada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Royal+Albert+Hall"

        },

        {
            icono: "🦕",
            nombre: "Natural History Museum",
            hora: "15:00",
            duracion: "2 h",
            metro: "South Kensington",
            precio: "Gratis",

            descripcion: "Uno de los museos más espectaculares de Londres, famoso por el gran dinosaurio de su entrada y su impresionante vestíbulo.",

            consejo: "Si hay mucha cola, suele avanzar bastante rápido.",

            foto: "Hintze Hall.",

            restaurantes: [
                "Honest Burgers",
                "Five Guys South Kensington"
            ],

            maps: "https://maps.google.com/?q=Natural+History+Museum+London"

        },

        {
            icono: "🛍️",
            nombre: "Harrods",
            hora: "17:30",
            duracion: "1 h",
            metro: "Knightsbridge",
            precio: "Gratis",

            descripcion: "Los grandes almacenes más famosos de Londres, ideales para terminar el primer día del viaje.",

            consejo: "No os perdáis el Food Hall, una de las zonas más impresionantes del edificio.",

            foto: "Entrada principal iluminada.",

            restaurantes: [
                "Harrods Food Hall",
                "Café Godiva"
            ],

            maps: "https://maps.google.com/?q=Harrods+London"

        }

    ]

},

 {
    id: 2,
    fecha: "🇬🇧 Jueves 16 julio",
    titulo: "Tower Bridge · South Bank",

    distancia: "9 km",
    horario: "09:00 - 18:30",
    visitas: 7,

    lugares: [

        {
            icono: "🏰",
            nombre: "Tower of London",
            hora: "09:00",
            duracion: "2 h",
            metro: "Tower Hill",
            precio: "Entrada de pago",

            descripcion: "Fortaleza medieval declarada Patrimonio de la Humanidad. Alberga las famosas Joyas de la Corona y siglos de historia británica.",

            consejo: "Llegad a la apertura para evitar las mayores colas y disfrutar con más tranquilidad de las Joyas de la Corona.",

            foto: "Puente interior con la Torre Blanca de fondo.",

            restaurantes: [
                "Coppa Club Tower Bridge",
                "The Liberty Bounds"
            ],

            maps: "https://maps.google.com/?q=Tower+of+London"
        },

        {
            icono: "🌉",
            nombre: "Tower Bridge",
            hora: "11:30",
            duracion: "45 min",
            metro: "Tower Hill",
            precio: "Exterior gratis",

            descripcion: "El puente más emblemático de Londres y uno de los símbolos de la ciudad.",

            consejo: "Cruzad el puente caminando y disfrutad de las vistas desde ambas orillas del Támesis.",

            foto: "Potters Fields Park.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Tower+Bridge+London"
        },

        {
            icono: "🍴",
            nombre: "Borough Market",
            hora: "12:30",
            duracion: "1 h 15 min",
            metro: "London Bridge",
            precio: "Gratis",

            descripcion: "El mercado gastronómico más famoso de Londres, perfecto para comer y probar especialidades locales e internacionales.",

            consejo: "Recorred primero todo el mercado antes de decidir qué comer.",

            foto: "Entrada principal del mercado.",

            restaurantes: [
                "Padella",
                "Fish!",
                "Kappacasein"
            ],

            maps: "https://maps.google.com/?q=Borough+Market+London"
        },

        {
            icono: "🎭",
            nombre: "Shakespeare's Globe",
            hora: "14:00",
            duracion: "30 min",
            metro: "Blackfriars",

            precio: "Exterior gratis",

            descripcion: "Reconstrucción del famoso teatro de William Shakespeare junto al río Támesis.",

            consejo: "Aunque no entréis, acercaos al patio y disfrutad del ambiente de la zona.",

            foto: "Fachada principal del Globe.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Shakespeare's+Globe+London"
        },

        {
            icono: "🌉",
            nombre: "Millennium Bridge",
            hora: "14:35",
            duracion: "15 min",
            metro: "Blackfriars",
            precio: "Gratis",

            descripcion: "Puente peatonal con una de las mejores vistas de la Catedral de St Paul's.",

            consejo: "Deteneos en el centro del puente para hacer fotografías de la catedral y del Támesis.",

            foto: "Vista hacia St Paul's desde el centro del puente.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Millennium+Bridge+London"
        },

        {
            icono: "🎨",
            nombre: "Tate Modern",
            hora: "15:00",
            duracion: "1 h",
            metro: "Southwark",
            precio: "Entrada gratuita (colección permanente)",

            descripcion: "Uno de los museos de arte contemporáneo más importantes del mundo, ubicado en una antigua central eléctrica.",

            consejo: "No os perdáis la terraza panorámica con vistas al Támesis y a St Paul's.",

            foto: "Terraza panorámica del museo.",

            restaurantes: [
                "Tate Modern Café",
                "Founders Arms"
            ],

            maps: "https://maps.google.com/?q=Tate+Modern+London"
        },

        {
            icono: "🎭",
            nombre: "Leake Street Graffiti Tunnel",
            hora: "16:20",
            duracion: "30 min",
            metro: "Waterloo",
            precio: "Gratis",

            descripcion: "Túnel de arte urbano donde los grafitis cambian constantemente y es habitual ver artistas pintando en directo.",

            consejo: "Recorred todo el túnel; siempre hay murales nuevos y rincones muy fotogénicos.",

            foto: "Perspectiva del túnel llena de grafitis.",

            restaurantes: [
                "Vaulty Towers",
                "Draughts Waterloo"
            ],

            maps: "https://maps.google.com/?q=Leake+Street+Tunnel+London"
        }

    ]

},

  {
    id: 3,
    fecha: "🇬🇧 Viernes 17 julio",
    titulo: "Westminster · Covent Garden · West End",

    distancia: "10 km",
    horario: "09:00 - 20:30",
    visitas: 16,

    lugares: [

        {
            icono: "⛪",
            nombre: "Westminster Abbey",
            hora: "09:00",
            duracion: "1 h 30 min",
            metro: "Westminster",
            precio: "Entrada de pago",

            descripcion: "La iglesia más importante del Reino Unido. Aquí han sido coronados los monarcas británicos durante casi mil años.",

            consejo: "Si vais a entrar, comprad la entrada con antelación para evitar colas.",

            foto: "Fachada principal desde Parliament Square.",

            restaurantes: [
                "Cellarium Café",
                "Pret A Manger"
            ],

            maps: "https://maps.google.com/?q=Westminster+Abbey+London"
        },

        {
            icono: "🕰️",
            nombre: "Big Ben",
            hora: "10:45",
            duracion: "20 min",
            metro: "Westminster",
            precio: "Gratis",

            descripcion: "El reloj más famoso del mundo y uno de los grandes símbolos de Londres.",

            consejo: "La mejor fotografía se obtiene cruzando Westminster Bridge.",

            foto: "Big Ben desde Westminster Bridge.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Big+Ben+London"
        },

        {
            icono: "🏛️",
            nombre: "Palacio de Westminster",
            hora: "11:10",
            duracion: "20 min",
            metro: "Westminster",
            precio: "Exterior gratis",

            descripcion: "Sede del Parlamento británico a orillas del río Támesis.",

            consejo: "Desde Parliament Square tendréis una magnífica panorámica del edificio.",

            foto: "Parliament Square.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Palace+of+Westminster"
        },

        {
            icono: "🌳",
            nombre: "St James's Park",
            hora: "11:40",
            duracion: "40 min",
            metro: "St James's Park",
            precio: "Gratis",

            descripcion: "El parque real más bonito del centro de Londres.",

            consejo: "Acercaos al Blue Bridge para contemplar Buckingham Palace.",

            foto: "Blue Bridge.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=St+James's+Park+London"
        },

        {
            icono: "👑",
            nombre: "Buckingham Palace",
            hora: "12:30",
            duracion: "45 min",
            metro: "Green Park",
            precio: "Exterior gratis",

            descripcion: "Residencia oficial del rey Carlos III.",

            consejo: "Si coincide el Cambio de Guardia, intentad llegar con suficiente antelación.",

            foto: "Victoria Memorial.",

            restaurantes: [
                "The English Rose Café"
            ],

            maps: "https://maps.google.com/?q=Buckingham+Palace"
        },

        {
            icono: "🏛️",
            nombre: "Trafalgar Square",
            hora: "14:15",
            duracion: "30 min",
            metro: "Charing Cross",
            precio: "Gratis",

            descripcion: "La plaza más famosa de Londres, presidida por la Columna de Nelson y la National Gallery.",

            consejo: "Subid a las escaleras de la National Gallery para disfrutar de una excelente panorámica.",

            foto: "Fuente central y Columna de Nelson.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Trafalgar+Square+London"
        },

        {
            icono: "🎭",
            nombre: "Covent Garden",
            hora: "14:50",
            duracion: "50 min",
            metro: "Covent Garden",
            precio: "Gratis",

            descripcion: "Mercado histórico lleno de artistas callejeros, tiendas y uno de los mejores ambientes de Londres.",

            consejo: "Aprovechad para comer aquí si todavía no lo habéis hecho y disfrutad de las actuaciones.",

            foto: "Plaza central del mercado.",

            restaurantes: [
                "Flat Iron",
                "Five Guys",
                "Dishoom Covent Garden"
            ],

            maps: "https://maps.google.com/?q=Covent+Garden"
        },
        {
    icono: "🏛️",
    nombre: "British Museum",
    hora: "16:15",
    duracion: "1 h 15 min",
    metro: "Tottenham Court Road / Holborn",
    precio: "Gratis",

    descripcion: "Uno de los museos más importantes del mundo. Alberga la Piedra Rosetta, las esculturas del Partenón, momias egipcias y miles de piezas históricas.",

    consejo: "No intentéis verlo entero. Centraos en las piezas imprescindibles y disfrutad la visita sin prisas.",

    foto: "Great Court con la cubierta de cristal.",

    restaurantes: [
        "Great Court Restaurant",
        "Museum Café"
    ],

    maps: "https://maps.google.com/?q=British+Museum+London"

},

        {
            icono: "🛍️",
            nombre: "Neal's Yard",
            hora: "15:45",
            duracion: "15 min",
            metro: "Covent Garden",
            precio: "Gratis",

            descripcion: "Pequeño patio escondido lleno de color, cafeterías y mucho encanto.",

            consejo: "Uno de los rincones más fotografiados del West End.",

            foto: "Patio principal.",

            restaurantes: [
                "Neal's Yard Dairy"
            ],

            maps: "https://maps.google.com/?q=Neal's+Yard+London"
        },
        {
            icono: "🪄",
            nombre: "House of MinaLima",
            hora: "16:05",
            duracion: "20 min",
            metro: "Covent Garden",
            precio: "Gratis",

            descripcion: "Tienda-galería creada por los diseñadores gráficos de las películas de Harry Potter y Animales Fantásticos. Un lugar imprescindible para los fans de la saga.",

            consejo: "Las plantas superiores suelen estar mucho más tranquilas. Merece la pena recorrerlas todas.",

            foto: "Escalera interior y exposiciones.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=House+of+MinaLima+London"
        },

        {
            icono: "📚",
            nombre: "Cecil Court",
            hora: "16:30",
            duracion: "15 min",
            metro: "Leicester Square",
            precio: "Gratis",

            descripcion: "Elegante calle peatonal llena de librerías antiguas, tiendas especializadas y mucho encanto.",

            consejo: "Ideal para pasear sin prisas y descubrir pequeños comercios históricos.",

            foto: "Vista completa de la calle.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Cecil+Court+London"
        },

        {
            icono: "🏮",
            nombre: "Goodwin's Court",
            hora: "16:50",
            duracion: "15 min",
            metro: "Leicester Square",
            precio: "Gratis",

            descripcion: "Uno de los callejones más antiguos de Londres, famoso por sus faroles y su ambiente de otra época.",

            consejo: "Es un rincón muy fotogénico y suele pasar desapercibido para la mayoría de turistas.",

            foto: "Faroles y fachadas históricas.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Goodwin's+Court+London"
        },

        {
            icono: "🎭",
            nombre: "Leicester Square",
            hora: "17:10",
            duracion: "20 min",
            metro: "Leicester Square",
            precio: "Gratis",

            descripcion: "Plaza rodeada de teatros, cines y mucho ambiente durante todo el día.",

            consejo: "Buen lugar para hacer una pequeña pausa antes de continuar hacia Piccadilly.",

            foto: "Plaza central.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Leicester+Square+London"
        },

        {
            icono: "🍸",
            nombre: "Piccadilly Circus",
            hora: "17:40",
            duracion: "20 min",
            metro: "Piccadilly Circus",
            precio: "Gratis",

            descripcion: "El famoso cruce de pantallas luminosas, uno de los símbolos más reconocibles de Londres.",

            consejo: "Acercaos a la fuente de Eros y disfrutad del ambiente antes de seguir la ruta.",

            foto: "Pantallas gigantes y fuente de Eros.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Piccadilly+Circus"
        },

        {
            icono: "🛍️",
            nombre: "Regent Street y Hamleys",
            hora: "18:05",
            duracion: "45 min",
            metro: "Oxford Circus",
            precio: "Gratis",

            descripcion: "Una de las avenidas más elegantes de Londres. Aquí se encuentra Hamleys, considerada la juguetería más famosa del mundo.",

            consejo: "Entrad en Hamleys aunque no vayáis a comprar nada. Sus demostraciones y escaparates merecen mucho la pena.",

            foto: "Fachada de Hamleys y Regent Street.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Hamleys+Regent+Street+London"
        },

        {
            icono: "🌈",
            nombre: "Carnaby Street",
            hora: "19:00",
            duracion: "30 min",
            metro: "Oxford Circus",
            precio: "Gratis",

            descripcion: "Una de las calles con más personalidad del Soho, llena de boutiques, restaurantes y decoración característica.",

            consejo: "Mirad hacia arriba para descubrir las decoraciones que cambian según la época del año.",

            foto: "Arco de entrada y decoración aérea.",

            restaurantes: [
                "Dishoom Carnaby",
                "The Breakfast Club"
            ],

            maps: "https://maps.google.com/?q=Carnaby+Street+London"
        },

        {
            icono: "🌃",
            nombre: "Soho y Chinatown",
            hora: "19:40",
            duracion: "1 h 30 min",
            metro: "Leicester Square",
            precio: "Gratis",

            descripcion: "El mejor lugar para terminar el día. Calles llenas de ambiente, restaurantes, pubs y la animada Chinatown.",

            consejo: "Recorred Chinatown al anochecer y elegid aquí el restaurante para cenar.",

            foto: "Puerta principal de Chinatown iluminada.",

            restaurantes: [
                "Four Seasons",
                "Dishoom Soho",
                "Burger & Lobster",
                "Golden Dragon"
            ],

            maps: "https://maps.google.com/?q=Chinatown+London"
        }

    ]

},
 {
    id: 4,
    fecha: "🇬🇧 Sábado 18 julio",
    titulo: "Notting Hill · Portobello · Little Venice · Paddington",

    distancia: "8 km",
    horario: "09:00 - 18:30",
    visitas: 14,

    lugares: [

        {
            icono: "🌈",
            nombre: "Notting Hill",
            hora: "09:00",
            duracion: "30 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Uno de los barrios más elegantes y fotogénicos de Londres, famoso por sus calles tranquilas, fachadas victorianas y ambiente residencial.",

            consejo: "Llegad pronto para disfrutar de las calles con poca gente antes de que empiece el bullicio del mercado.",

            foto: "Pembridge Road.",

            restaurantes: [
                "Farm Girl Café",
                "Eggslut"
            ],

            maps: "https://maps.google.com/?q=Notting+Hill+Gate+London"

        },

        {
            icono: "🍺",
            nombre: "The Churchill Arms",
            hora: "09:30",
            duracion: "15 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Uno de los pubs más famosos y fotografiados de Londres gracias a su espectacular fachada cubierta de flores.",

            consejo: "Es uno de los mejores lugares para fotografiar a primera hora de la mañana.",

            foto: "Fachada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=The+Churchill+Arms+London"

        },

        {
            icono: "🚪",
            nombre: "The Blue Door",
            hora: "09:50",
            duracion: "10 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Lugar donde se encontraba la famosa puerta azul de la película Notting Hill.",

            consejo: "Aunque la puerta original ya no existe, sigue siendo un lugar muy visitado.",

            foto: "280 Westbourne Park Road.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=280+Westbourne+Park+Road+London"

        },

        {
            icono: "🌸",
            nombre: "St Luke's Mews",
            hora: "10:10",
            duracion: "20 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Una de las calles residenciales más bonitas y fotografiadas de Londres.",

            consejo: "Respetad la tranquilidad de los vecinos mientras hacéis fotografías.",

            foto: "Centro de la calle.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=St+Luke's+Mews+London"

        },

        {
            icono: "🏠",
            nombre: "Casas de Colores",
            hora: "10:35",
            duracion: "25 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Las icónicas fachadas victorianas de colores pastel que han hecho famoso el barrio.",

            consejo: "Recorred Lancaster Road y Elgin Crescent para encontrar las más bonitas.",

            foto: "Lancaster Road.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Lancaster+Road+London"

        },

        {
            icono: "📚",
            nombre: "The Notting Hill Bookshop",
            hora: "11:05",
            duracion: "20 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Pequeña librería inspirada en la famosa película Notting Hill.",

            consejo: "Ideal para comprar un recuerdo diferente del viaje.",

            foto: "Entrada de la librería.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=The+Notting+Hill+Bookshop"

        },

        {
            icono: "🍪",
            nombre: "Biscuiteers Boutique",
            hora: "11:30",
            duracion: "20 min",
            metro: "Notting Hill Gate",
            precio: "Gratis",

            descripcion: "Elegante tienda especializada en galletas decoradas artesanalmente.",

            consejo: "Si buscáis un recuerdo gastronómico diferente, este es un buen lugar.",

            foto: "Escaparate principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Biscuiteers+Notting+Hill"

        },
  
            {
            icono: "🛍️",
            nombre: "Portobello Road Market",
            hora: "12:00",
            duracion: "2 h 15 min",
            metro: "Ladbroke Grove",
            precio: "Gratis",

            descripcion: "El mercado callejero más famoso de Londres. Los sábados alcanza su máximo esplendor con cientos de puestos de antigüedades, ropa vintage, comida y artesanía.",

            consejo: "Recorred toda la calle antes de comprar. La zona de antigüedades se concentra principalmente por la mañana.",

            foto: "Portobello Road con los puestos del mercado.",

            restaurantes: [
                "Honest Burgers",
                "Portobello Ristorante",
                "Gail's Bakery",
                "Hummingbird Bakery"
            ],

            maps: "https://maps.google.com/?q=Portobello+Road+Market"

        },

        {
            icono: "🌿",
            nombre: "Rembrandt Gardens",
            hora: "14:30",
            duracion: "20 min",
            metro: "Warwick Avenue",
            precio: "Gratis",

            descripcion: "Pequeño parque junto al canal con un ambiente muy tranquilo, perfecto para descansar antes de continuar hacia Little Venice.",

            consejo: "Uno de esos rincones poco conocidos donde merece la pena sentarse unos minutos.",

            foto: "Jardines junto al canal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Rembrandt+Gardens+London"

        },

        {
            icono: "🚤",
            nombre: "Little Venice",
            hora: "14:55",
            duracion: "50 min",
            metro: "Warwick Avenue",
            precio: "Gratis",

            descripcion: "Zona de canales, barcos flotantes y cafeterías considerada uno de los rincones más tranquilos de Londres.",

            consejo: "Pasead sin rumbo por los canales disfrutando del ambiente.",

            foto: "Puente sobre el canal.",

            restaurantes: [
                "Waterside Café"
            ],

            maps: "https://maps.google.com/?q=Little+Venice+London"

        },

        {
            icono: "🏗️",
            nombre: "Paddington Basin",
            hora: "15:55",
            duracion: "30 min",
            metro: "Paddington",
            precio: "Gratis",

            descripcion: "Moderna zona junto al canal con edificios contemporáneos, terrazas y el famoso Rolling Bridge.",

            consejo: "Si coincide con el horario de apertura del puente basculante, merece mucho la pena verlo en funcionamiento.",

            foto: "Rolling Bridge.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Paddington+Basin+London"

        },

        {
            icono: "🐻",
            nombre: "Paddington Station",
            hora: "16:30",
            duracion: "20 min",
            metro: "Paddington",
            precio: "Gratis",

            descripcion: "Histórica estación ferroviaria diseñada por Isambard Kingdom Brunel y hogar del famoso oso Paddington.",

            consejo: "Buscad la estatua de Paddington y la pequeña tienda temática situada dentro de la estación.",

            foto: "Estatua de Paddington.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Paddington+Station+London"

        },

        {
            icono: "🕵️",
            nombre: "Sherlock Holmes Museum (Exterior)",
            hora: "17:00",
            duracion: "15 min",
            metro: "Baker Street",
            precio: "Exterior gratis",

            descripcion: "La famosa casa del detective Sherlock Holmes en el 221B de Baker Street.",

            consejo: "Aunque no entréis al museo, la fachada merece una fotografía.",

            foto: "Fachada del 221B Baker Street.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=221B+Baker+Street+London"

        },

        {
            icono: "🎭",
            nombre: "Madame Tussauds",
            hora: "17:20",
            duracion: "1 h 30 min",
            metro: "Baker Street",
            precio: "Entrada de pago",

            descripcion: "El museo de cera más famoso del mundo con figuras de personajes históricos, deportistas y celebridades.",

            consejo: "Visita opcional. Si la cola es muy larga o preferís seguir paseando, podéis dejarlo para otra ocasión.",

            foto: "Entrada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Madame+Tussauds+London"

        }

    ]

},
 {
    
    id: 5,
    fecha: "🇬🇧 Domingo 19 julio",
    titulo: "Arsenal · Camden · King's Cross · Islington",

    distancia: "11 km",
    horario: "09:00 - 20:00",
    visitas: 18,

    lugares: [

        {
            icono: "⚽",
            nombre: "Emirates Stadium",
            hora: "09:00",
            duracion: "1 h",
            metro: "Arsenal",
            precio: "Exterior gratis",

            descripcion: "Estadio del Arsenal FC, uno de los clubes más históricos del fútbol inglés.",

            consejo: "La primera hora del día suele ser el mejor momento para recorrer tranquilamente los alrededores y hacer fotografías.",

            foto: "Fachada principal junto a las estatuas.",

            restaurantes: [
                "The Armoury",
                "Piebury Corner"
            ],

            maps: "https://maps.google.com/?q=Emirates+Stadium+London"

        },

        {
            icono: "🛒",
            nombre: "Arsenal Club Shop",
            hora: "10:05",
            duracion: "30 min",
            metro: "Arsenal",
            precio: "Gratis",

            descripcion: "Tienda oficial del Arsenal con equipaciones, recuerdos y productos exclusivos.",

            consejo: "A primera hora suele haber mucha menos gente que por la tarde.",

            foto: "Entrada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Arsenal+Club+Shop"

        },

        {
            icono: "🏟️",
            nombre: "Highbury Square",
            hora: "10:40",
            duracion: "25 min",
            metro: "Arsenal",
            precio: "Gratis",

            descripcion: "Antiguo estadio del Arsenal transformado en viviendas conservando su histórica fachada Art Déco.",

            consejo: "Rodead el complejo para apreciar los restos del mítico Highbury Stadium.",

            foto: "East Stand.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Highbury+Square+London"

        },

        {
            icono: "🏛️",
            nombre: "Arsenal Museum (Opcional)",
            hora: "11:10",
            duracion: "45 min",
            metro: "Arsenal",
            precio: "Entrada de pago",

            descripcion: "Museo dedicado a la historia del Arsenal FC.",

            consejo: "Solo recomendable si sois muy aficionados al fútbol o disponéis de tiempo suficiente.",

            foto: "Entrada del museo.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Arsenal+Museum"

        },

        {
            icono: "🌄",
            nombre: "Primrose Hill",
            hora: "12:15",
            duracion: "35 min",
            metro: "Chalk Farm",
            precio: "Gratis",

            descripcion: "Una de las mejores panorámicas gratuitas del skyline de Londres.",

            consejo: "Subid hasta la cima antes de bajar caminando hacia Regent's Park.",

            foto: "Vista panorámica de Londres.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Primrose+Hill+London"

        },

        {
            icono: "🌳",
            nombre: "Regent's Park",
            hora: "13:00",
            duracion: "40 min",
            metro: "Regent's Park",
            precio: "Gratis",

            descripcion: "Uno de los parques reales más elegantes de Londres, ideal para pasear entre jardines y lagos.",

            consejo: "Atravesad el parque en dirección Camden disfrutando del paseo.",

            foto: "Queen Mary's Gardens.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Regents+Park+London"

        },

        {
            icono: "🛍️",
            nombre: "Camden High Street",
            hora: "13:50",
            duracion: "20 min",
            metro: "Camden Town",
            precio: "Gratis",

            descripcion: "La calle principal de Camden, famosa por sus extravagantes fachadas y ambiente alternativo.",

            consejo: "Mirad hacia arriba: muchas tiendas tienen decoraciones espectaculares.",

            foto: "Fachadas decoradas.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Camden+High+Street+London"

        },

        {
            icono: "🛍️",
            nombre: "Camden Market",
            hora: "14:15",
            duracion: "1 h",

            metro: "Camden Town",

            precio: "Gratis",

            descripcion: "El mercado alternativo más famoso de Londres con cientos de puestos de comida, ropa y artesanía.",

            consejo: "Recorred primero todas las zonas antes de decidir dónde comer.",

            foto: "Puente sobre el canal.",

            restaurantes: [
                "The Cheese Bar",
                "Magic Falafel",
                "Yorkshire Burrito",
                "Only Jerkin'"
            ],

            maps: "https://maps.google.com/?q=Camden+Market+London"

        },
                {
            icono: "🐎",
            nombre: "Stables Market",
            hora: "15:20",
            duracion: "40 min",
            metro: "Camden Town",
            precio: "Gratis",

            descripcion: "La zona más auténtica de Camden Market, construida sobre los antiguos establos donde descansaban los caballos que transportaban mercancías por el canal.",

            consejo: "No os limitéis a la calle principal; los pasillos interiores esconden algunas de las tiendas más curiosas.",

            foto: "Estatuas de caballos de bronce.",

            restaurantes: [
                "The Cheese Wheel",
                "Chin Chin Labs"
            ],

            maps: "https://maps.google.com/?q=Stables+Market+London"

        },

        {
            icono: "🚤",
            nombre: "Regent's Canal",
            hora: "16:05",
            duracion: "25 min",
            metro: "Camden Town",
            precio: "Gratis",

            descripcion: "Paseo junto al canal rodeado de casas flotantes, cafeterías y un ambiente mucho más tranquilo que el mercado.",

            consejo: "Es el lugar perfecto para descansar unos minutos antes de continuar la ruta.",

            foto: "Casas flotantes sobre el canal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Regents+Canal+Camden"

        },

        {
            icono: "🚉",
            nombre: "King's Cross Station",
            hora: "16:45",
            duracion: "20 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "Una de las estaciones ferroviarias más importantes del Reino Unido, completamente renovada y con una espectacular cubierta moderna.",

            consejo: "Entrad unos minutos para ver el gran vestíbulo antes de visitar el Andén 9¾.",

            foto: "Vestíbulo principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Kings+Cross+Station"

        },

        {
            icono: "🚂",
            nombre: "St Pancras International",
            hora: "17:10",
            duracion: "20 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "Probablemente la estación ferroviaria más bonita de Londres, famosa por su impresionante arquitectura victoriana.",

            consejo: "No os perdáis la fachada principal y el gran reloj del vestíbulo.",

            foto: "Fachada neogótica.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=St+Pancras+International"

        },

        {
            icono: "📚",
            nombre: "British Library",
            hora: "17:35",
            duracion: "25 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "La biblioteca nacional del Reino Unido alberga algunos de los manuscritos más importantes del mundo.",

            consejo: "La King's Library Tower merece por sí sola la visita.",

            foto: "Vestíbulo principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=British+Library+London"

        },

        {
            icono: "🛍️",
            nombre: "Coal Drops Yard",
            hora: "18:05",
            duracion: "25 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "Antiguos almacenes de carbón convertidos en una elegante zona comercial y gastronómica.",

            consejo: "Recorred el puente curvo que une ambos edificios, es uno de los lugares más fotografiados del complejo.",

            foto: "Cubierta ondulada.",

            restaurantes: [
                "Dishoom King's Cross",
                "Parrillan"
            ],

            maps: "https://maps.google.com/?q=Coal+Drops+Yard"

        },

        {
            icono: "🍴",
            nombre: "Canopy Market",
            hora: "18:35",
            duracion: "20 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "Mercado de productores y comida local situado junto a Granary Square.",

            consejo: "Abre determinados días, especialmente fines de semana. Si está abierto, merece una parada.",

            foto: "Puestos del mercado.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Canopy+Market+London"

        },

        {
            icono: "⚡",
            nombre: "Andén 9¾",
            hora: "19:00",
            duracion: "30 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "El famoso andén de Harry Potter con el carrito atravesando el muro.",

            consejo: "Si la cola para la foto oficial es muy larga, podéis hacer una fotografía desde el lateral sin esperar.",

            foto: "Carrito atravesando la pared.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Platform+9+3%2F4+Kings+Cross"

        },

        {
            icono: "🪄",
            nombre: "Harry Potter Shop",
            hora: "19:35",
            duracion: "20 min",
            metro: "King's Cross St. Pancras",
            precio: "Gratis",

            descripcion: "La tienda oficial de Harry Potter con artículos exclusivos que no suelen encontrarse en otras tiendas de Londres.",

            consejo: "Aunque no compréis nada, merece la pena entrar para ver la decoración.",

            foto: "Entrada tematizada.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Harry+Potter+Shop+Kings+Cross"

        },

        {
            icono: "🏘️",
            nombre: "Camden Passage y Upper Street",
            hora: "20:15",
            duracion: "Libre",
            metro: "Angel",
            precio: "Gratis",

            descripcion: "Final del día paseando por el elegante barrio de Islington entre tiendas independientes, cafeterías y calles con mucho encanto.",

            consejo: "Si todavía tenéis tiempo, acercaos también a Claremont Square, uno de los rincones más tranquilos y fotogénicos del barrio.",

            foto: "Camden Passage.",

            restaurantes: [
                "Ottolenghi Islington",
                "The Old Queen's Head",
                "Camden Head",
                "The Pig and Butcher"
            ],

            maps: "https://maps.google.com/?q=Camden+Passage+London"

        }

    ]

},

    
  {
    id: 6,
    fecha: "🇬🇧 Lunes 20 julio",
    titulo: "La City · St Paul's · Sky Garden · Brick Lane",

    distancia: "8 km",
    horario: "09:00 - 19:00",
    visitas: 12,

    lugares: [

        {
            icono: "🌿",
            nombre: "Sky Garden",
            hora: "09:00",
            duracion: "1 h",
            metro: "Monument",
            precio: "Gratis (con reserva)",

            descripcion: "Mirador gratuito situado en la planta superior del edificio Walkie Talkie, con una de las mejores vistas panorámicas de Londres.",

            consejo: "Reservad la entrada con varias semanas de antelación y llegad unos 15 minutos antes.",

            foto: "Terraza principal con vistas al Támesis.",

            restaurantes: [
                "Darwin Brasserie",
                "Fenchurch Restaurant"
            ],

            maps: "https://maps.google.com/?q=Sky+Garden+London"

        },

        {
            icono: "🏙️",
            nombre: "20 Fenchurch Street",
            hora: "10:10",
            duracion: "15 min",
            metro: "Monument",
            precio: "Gratis",

            descripcion: "El famoso rascacielos conocido como 'Walkie Talkie', uno de los edificios más característicos del skyline londinense.",

            consejo: "La mejor perspectiva se obtiene desde Fenchurch Street mirando hacia arriba.",

            foto: "Fachada desde Fenchurch Street.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=20+Fenchurch+Street+London"

        },

        {
            icono: "🌳",
            nombre: "The Garden at 120",
            hora: "10:30",
            duracion: "40 min",
            metro: "Monument",
            precio: "Gratis",

            descripcion: "Azotea ajardinada con excelentes vistas de la City y bastante menos conocida que el Sky Garden.",

            consejo: "No suele haber colas y permite obtener magníficas fotografías del Walkie Talkie y del Gherkin.",

            foto: "Mirador principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=The+Garden+at+120+London"

        },

        {
            icono: "🏛️",
            nombre: "Leadenhall Market",
            hora: "11:20",
            duracion: "45 min",
            metro: "Bank",
            precio: "Gratis",

            descripcion: "Elegante mercado victoriano que inspiró el Callejón Diagon de las películas de Harry Potter.",

            consejo: "Recorred todos sus pasillos antes de continuar; cada uno tiene una decoración diferente.",

            foto: "Galería principal cubierta.",

            restaurantes: [
                "The Lamb Tavern",
                "PizzaExpress Leadenhall"
            ],

            maps: "https://maps.google.com/?q=Leadenhall+Market+London"

        },

        {
            icono: "🧙",
            nombre: "Bull's Head Passage",
            hora: "12:10",
            duracion: "15 min",
            metro: "Bank",
            precio: "Gratis",

            descripcion: "Pequeña calle junto a Leadenhall Market que muchos identifican como inspiración para el Callejón Diagon.",

            consejo: "Es una parada rápida, pero muy recomendable para los fans de Harry Potter.",

            foto: "Entrada del pasaje.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Bulls+Head+Passage+London"

        },

        {
            icono: "💷",
            nombre: "Royal Exchange",
            hora: "12:35",
            duracion: "30 min",
            metro: "Bank",
            precio: "Gratis",

            descripcion: "Histórico edificio del siglo XVI convertido actualmente en una elegante galería comercial.",

            consejo: "Entrad al patio central; es mucho más espectacular de lo que parece desde el exterior.",

            foto: "Patio interior.",

            restaurantes: [
                "Fortnum & Mason at The Royal Exchange"
            ],

            maps: "https://maps.google.com/?q=Royal+Exchange+London"

        },
        {
            icono: "🔥",
            nombre: "The Monument",
            hora: "13:15",
            duracion: "35 min",
            metro: "Monument",
            precio: "Entrada de pago (opcional)",

            descripcion: "Columna de 62 metros que conmemora el Gran Incendio de Londres de 1666.",

            consejo: "Si decidís subir sus 311 escalones, disfrutaréis de una de las mejores vistas de la City.",

            foto: "Base del monumento mirando hacia la parte superior.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=The+Monument+London"

        },

        {
            icono: "⛪",
            nombre: "St Dunstan in the East",
            hora: "14:00",
            duracion: "30 min",
            metro: "Monument",
            precio: "Gratis",

            descripcion: "Ruinas de una antigua iglesia medieval convertidas en un precioso jardín urbano.",

            consejo: "Es uno de los rincones más tranquilos y fotogénicos de la City.",

            foto: "Arcos cubiertos de vegetación.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=St+Dunstan+in+the+East"

        },

        {
            icono: "⛪",
            nombre: "St Paul's Cathedral",
            hora: "14:45",
            duracion: "1 h",
            metro: "St Paul's",
            precio: "Exterior gratis",

            descripcion: "La catedral más emblemática de Londres y una obra maestra de Christopher Wren.",

            consejo: "Rodead todo el edificio para descubrir diferentes perspectivas y acercaros a la gran escalinata.",

            foto: "Escalinata principal.",

            restaurantes: [
                "Franco Manca St Paul's",
                "Rossopomodoro"
            ],

            maps: "https://maps.google.com/?q=St+Paul's+Cathedral"

        },

        {
            icono: "🏙️",
            nombre: "One New Change",
            hora: "16:00",
            duracion: "40 min",
            metro: "St Paul's",
            precio: "Gratis",

            descripcion: "Centro comercial moderno con una terraza panorámica gratuita frente a la catedral.",

            consejo: "Subid a la terraza de la última planta para conseguir una de las mejores fotografías de St Paul's.",

            foto: "Terraza con la cúpula de la catedral.",

            restaurantes: [
                "Gordon Ramsay Street Pizza",
                "Five Guys"
            ],

            maps: "https://maps.google.com/?q=One+New+Change+London"

        },

        {
            icono: "🎨",
            nombre: "Brick Lane",
            hora: "17:00",
            duracion: "1 h 30 min",
            metro: "Liverpool Street",
            precio: "Gratis",

            descripcion: "Barrio famoso por su arte urbano, tiendas vintage, galerías y su ambiente multicultural.",

            consejo: "Perdeos por las calles laterales para descubrir algunos de los mejores murales de Londres.",

            foto: "Mural de arte urbano en Brick Lane.",

            restaurantes: [
                "Beigel Bake",
                "Dishoom Shoreditch",
                "Dark Sugars"
            ],

            maps: "https://maps.google.com/?q=Brick+Lane+London"

        },

        {
            icono: "🥯",
            nombre: "Beigel Bake",
            hora: "18:30",
            duracion: "20 min",
            metro: "Liverpool Street",
            precio: "Según consumo",

            descripcion: "Panadería abierta las 24 horas, famosa por servir algunos de los mejores bagels de Londres.",

            consejo: "El bagel de ternera salada (Salt Beef Bagel) es el más famoso de la casa.",

            foto: "Escaparate de Beigel Bake.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Beigel+Bake+Brick+Lane"

        }

    ]

},
  {
    id: 7,
    fecha: "🇬🇧 Martes 21 julio",
    titulo: "Excursión a Oxford",

    distancia: "7 km",
    horario: "08:00 - 20:00",

    visitas: 16,

nota: `
🚆 <strong>Excursión de día completo</strong><br><br>

• Compra los billetes de tren con antelación.<br>
• Lleva descargados los billetes en el móvil.<br>
• Reserva Christ Church unos días antes.<br>
• El Great Hall puede cerrar por actos universitarios.<br>
• Todo el recorrido se hace caminando, lleva calzado cómodo.
`,

    lugares: [

        {
            icono: "🚆",
            nombre: "Salida desde Paddington Station",
            hora: "08:00",
            duracion: "45 min",
            metro: "Paddington",
            precio: "Billete de tren",

            descripcion: "Comienza la excursión a Oxford desde una de las estaciones más emblemáticas de Londres. Antes de embarcar, dedica unos minutos a recorrer el vestíbulo principal.",

            consejo: "Busca el gran reloj central, la escultura 'The Meeting Place', la estatua del oso Paddington y llega con al menos 20 minutos de antelación.",

            foto: "Gran reloj central y escultura The Meeting Place.",

            restaurantes: [
                "Paddington Kitchen",
                "Pret A Manger"
            ],

            maps: "https://maps.google.com/?q=Paddington+Station+London"

        },

        {
            icono: "🏛️",
            nombre: "Carfax Tower",
            hora: "09:30",
            duracion: "20 min",
            metro: "—",
            precio: "Exterior gratis",

            descripcion: "Considerado el corazón de Oxford y el punto desde el que parten las principales calles históricas.",

            consejo: "Es el lugar perfecto para comenzar el recorrido por la ciudad.",

            foto: "Cruce principal de Carfax.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Carfax+Tower+Oxford"

        },

        {
            icono: "📷",
            nombre: "High Street",
            hora: "09:50",
            duracion: "20 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "Una de las calles más bonitas de Inglaterra, rodeada de edificios universitarios históricos.",

            consejo: "Camina despacio disfrutando de las fachadas y los pequeños callejones.",

            foto: "Vista hacia Radcliffe Camera.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=High+Street+Oxford"

        },

        {
            icono: "🏛️",
            nombre: "Radcliffe Camera",
            hora: "10:15",
            duracion: "25 min",
            metro: "—",
            precio: "Exterior gratis",

            descripcion: "El edificio más fotografiado de Oxford y uno de los símbolos de la universidad.",

            consejo: "Rodea completamente la plaza para descubrir diferentes perspectivas.",

            foto: "Radcliffe Square.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Radcliffe+Camera"

        },

        {
            icono: "📚",
            nombre: "Bodleian Library",
            hora: "10:45",
            duracion: "45 min",
            metro: "—",
            precio: "Entrada opcional",

            descripcion: "Una de las bibliotecas más antiguas de Europa y escenario de varias escenas de Harry Potter.",

            consejo: "Si no hacéis la visita guiada, al menos acercaos al patio y a la Divinity School.",

            foto: "Entrada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Bodleian+Library"

        },

        {
            icono: "⛪",
            nombre: "University Church of St Mary the Virgin",
            hora: "11:35",
            duracion: "20 min",
            metro: "—",
            precio: "Gratis (torre de pago)",

            descripcion: "La iglesia universitaria de Oxford, situada junto a Radcliffe Square. Su interior es precioso y desde su torre se obtiene una de las mejores panorámicas de la ciudad.",

            consejo: "Si no vais justos de tiempo, subir a la torre merece mucho la pena.",

            foto: "Interior de la iglesia y vistas desde la torre.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=University+Church+of+St+Mary+the+Virgin+Oxford"

       },

        {
            icono: "🌉",
            nombre: "Bridge of Sighs",
            hora: "11:40",
            duracion: "15 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "Uno de los puentes más fotografiados de Oxford, inspirado en el famoso puente veneciano.",

            consejo: "Muy recomendable hacer la fotografía desde New College Lane.",

            foto: "Bridge of Sighs.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Bridge+of+Sighs+Oxford"

        },

        {
            icono: "🎭",
            nombre: "Sheldonian Theatre",
            hora: "12:05",
            duracion: "15 min",
            metro: "—",
            precio: "Exterior gratis",

            descripcion: "Teatro ceremonial diseñado por Christopher Wren donde todavía hoy se celebran los actos oficiales de graduación de la Universidad de Oxford.",

            consejo: "La fachada y las esculturas del tejado son una de las imágenes más características del centro histórico.",

            foto: "Fachada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Sheldonian+Theatre+Oxford"

        },

        {
            icono: "🍴",
            nombre: "Covered Market",
            hora: "12:00",
            duracion: "1 h 15 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "Mercado cubierto histórico con puestos de comida, cafeterías y pequeños comercios locales.",

            consejo: "Buen lugar para comer antes de continuar la visita.",

            foto: "Pasillo central del mercado.",

            restaurantes: [
                "The Covered Market",
                "Ben's Cookies",
                "Browns Café"
            ],

            maps: "https://maps.google.com/?q=Covered+Market+Oxford"

        },
                {
            icono: "🏰",
            nombre: "Christ Church College",
            hora: "13:30",
            duracion: "1 h 45 min",
            metro: "—",
            precio: "Entrada de pago",

            descripcion: "Uno de los colleges más prestigiosos de Oxford y escenario de varias localizaciones de Harry Potter. Incluye la catedral, los claustros y el famoso Great Hall.",

            consejo: "Reservad la entrada con antelación. El Great Hall puede cerrar temporalmente por actos universitarios, así que revisad los horarios antes de la visita.",

            foto: "Tom Quad y Great Hall.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Christ+Church+Oxford"

        },

        {
            icono: "🪄",
            nombre: "Hall Stairs & Great Hall",
            hora: "13:50",
            duracion: "30 min",
            metro: "—",
            precio: "Incluido con Christ Church",

            descripcion: "La escalera y el comedor que inspiraron algunas de las escenas más icónicas de Hogwarts.",

            consejo: "Disfrutad del comedor sin prisas; es uno de los lugares más especiales para los fans de Harry Potter.",

            foto: "Great Hall.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Christ+Church+Great+Hall"

        },

        {
            icono: "⛪",
            nombre: "Christ Church Cathedral",
            hora: "14:30",
            duracion: "20 min",
            metro: "—",
            precio: "Incluido",

            descripcion: "La catedral del college, de dimensiones reducidas pero con una gran riqueza histórica.",

            consejo: "Entrad unos minutos para apreciar sus vidrieras y el ambiente tranquilo.",

            foto: "Interior de la catedral.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Christ+Church+Cathedral+Oxford"

        },

        {
            icono: "🌳",
            nombre: "Christ Church Meadow",
            hora: "15:00",
            duracion: "30 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "Gran parque junto al río desde el que se obtienen algunas de las mejores vistas del college.",

            consejo: "Ideal para descansar un rato antes de volver al centro histórico.",

            foto: "Vista del Christ Church desde el prado.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Christ+Church+Meadow"

        },

        {
            icono: "📚",
            nombre: "Blackwell's Bookshop",
            hora: "15:45",
            duracion: "30 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "Una de las librerías más famosas del Reino Unido, con miles de títulos repartidos en varias plantas.",

            consejo: "No os perdáis la Norrington Room, una enorme sala subterránea llena de libros.",

            foto: "Entrada principal.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Blackwell's+Bookshop+Oxford"

        },

        {
            icono: "🫖",
            nombre: "Alice's Shop",
            hora: "16:20",
            duracion: "20 min",
            metro: "—",
            precio: "Gratis",

            descripcion: "La pequeña tienda que inspiró parte del universo de 'Alicia en el País de las Maravillas'.",

            consejo: "Perfecta para comprar un recuerdo diferente antes de regresar a Londres.",

            foto: "Escaparate histórico.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Alice's+Shop+Oxford"

        },

        {
            icono: "🚆",
            nombre: "Regreso a Londres",
            hora: "17:15",
            duracion: "1 h",
            metro: "—",
            precio: "Billete de tren",

            descripcion: "Regreso desde Oxford a Paddington tras una jornada recorriendo una de las ciudades universitarias más famosas del mundo.",

            consejo: "Intentad coger un tren antes de las 18:00 para llegar con tiempo a Londres y cenar tranquilamente.",

            foto: "Estación de Oxford.",

            restaurantes: [
                "The Handle Bar Café",
                "Vaults & Garden",
                "The Turf Tavern"
            ],

            maps: "https://maps.google.com/?q=Oxford+Railway+Station"

        }

    ]

},

      {
    id: 8,
    fecha: "🇬🇧 Miércoles 22 julio",
    titulo: "Victoria · Belgravia · Regreso",

    distancia: "4 km",
    horario: "09:00 - Vuelo",
    visitas: 7,

    lugares: [

        {
            icono: "🏨",
            nombre: "Check-out Premier Inn Hammersmith",
            hora: "09:00",
            duracion: "30 min",
            metro: "Hammersmith",
            precio: "—",

            descripcion: "Última mañana en Londres. Check-out del hotel y salida con el equipaje.",

            consejo: "Comprueba que no dejas ningún objeto en la habitación y lleva toda la documentación a mano.",

            foto: "Recepción del hotel.",

            restaurantes: [],

            maps: "https://maps.app.goo.gl/Nz1ESamjuGGTigQd8"

        },

        {
            icono: "🚉",
            nombre: "Victoria Station",
            hora: "10:00",
            duracion: "20 min",
            metro: "Victoria",
            precio: "Gratis",

            descripcion: "Una de las estaciones más importantes de Londres y punto de salida hacia el aeropuerto de Gatwick.",

            consejo: "Localiza los andenes del Gatwick Express antes de comenzar el paseo por la zona.",

            foto: "Vestíbulo principal.",

            restaurantes: [
                "Pret A Manger",
                "Itsu"
            ],

            maps: "https://maps.google.com/?q=London+Victoria+Station"

        },

        {
            icono: "🌸",
            nombre: "Elizabeth Street",
            hora: "10:30",
            duracion: "40 min",
            metro: "Victoria",
            precio: "Gratis",

            descripcion: "Una de las calles con más encanto de Belgravia, llena de cafeterías, boutiques y fachadas elegantes.",

            consejo: "Disfrutad del paseo sin prisas y aprovechad para hacer las últimas fotos del viaje.",

            foto: "Fachadas de Elizabeth Street.",

            restaurantes: [
                "Tomtom Coffee House"
            ],

            maps: "https://maps.google.com/?q=Elizabeth+Street+London"

        },

        {
            icono: "🧁",
            nombre: "Peggy Porschen",
            hora: "11:15",
            duracion: "30 min",
            metro: "Victoria",
            precio: "Según consumo",

            descripcion: "La famosa pastelería de fachada rosa, una de las más fotografiadas de Londres.",

            consejo: "Ideal para un café o un dulce antes de continuar el paseo.",

            foto: "Fachada floral.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=Peggy+Porschen+Belgravia"

        },

        {
            icono: "🌿",
            nombre: "Eccleston Yards",
            hora: "12:00",
            duracion: "45 min",
            metro: "Victoria",
            precio: "Gratis",

            descripcion: "Pequeña plaza peatonal con ambiente tranquilo, restaurantes y terrazas escondidas entre los edificios de Belgravia.",

            consejo: "Buen lugar para descansar antes de comer.",

            foto: "Plaza central.",

            restaurantes: [
                "Wild by Tart",
                "Morena"
            ],

            maps: "https://maps.google.com/?q=Eccleston+Yards+London"

        },

        {
            icono: "🏛️",
            nombre: "Belgravia",
            hora: "13:00",
            duracion: "1 h",
            metro: "Victoria",
            precio: "Gratis",

            descripcion: "Elegante barrio residencial conocido por sus plazas ajardinadas y arquitectura georgiana.",

            consejo: "Recorred Eaton Square y las calles cercanas antes de regresar a la estación.",

            foto: "Eaton Square.",

            restaurantes: [
                "The Thomas Cubitt"
            ],

            maps: "https://maps.google.com/?q=Belgravia+London"

        },

        {
            icono: "✈️",
            nombre: "Gatwick Airport",
            hora: "15:00",
            duracion: "Hasta el vuelo",
            metro: "Gatwick Express",
            precio: "Billete de tren",

            descripcion: "Regreso a Victoria Station para tomar el tren hacia Gatwick y realizar la facturación con suficiente antelación.",

            consejo: "Procura llegar al aeropuerto al menos dos horas antes de la salida del vuelo VY6027.",

            foto: "Terminal de salidas.",

            restaurantes: [],

            maps: "https://maps.google.com/?q=London+Gatwick+Airport"

        }

    ]

},  

    ]

};