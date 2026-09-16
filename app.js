const maps = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const tripDays = [
  {
    id: 1, date: "3", weekday: "Sáb", city: "Málaga", sleep: "Málaga", theme: "Mar, piedra y primera tapa",
    summary: "Una llegada suave: centro histórico, vistas desde la Alcazaba y cena malagueña. Si llegáis tarde, conserva Gibralfaro para otra ocasión y prioriza el paseo.",
    tags: ["Llegada", "Casco histórico", "Atardecer"],
    items: [
      { time: "14:00", title: "Llegada y check-in", detail: "Deja el coche y entra caminando al centro. Hora provisional: ajústala al viaje.", link: maps("Centro Histórico Málaga") },
      { time: "16:30", title: "Alcazaba + Gibralfaro", detail: "Empieza por Gibralfaro y baja hacia la Alcazaba para evitar la subida final.", link: "https://alcazabaygibralfaro.malaga.eu/" },
      { time: "19:15", title: "Muelle Uno y calle Larios", detail: "Paseo sin objetivo: teatro romano, palmeras, puerto y primera caña.", link: maps("Muelle Uno Málaga") },
      { time: "21:00", title: "Cena en El Pimpi", detail: "La parada ya prevista. Reserva si queréis terraza o una hora concreta.", link: "https://www.elpimpi.com/" }
    ]
  },
  {
    id: 2, date: "4", weekday: "Dom", city: "Ronda", sleep: "Ronda", theme: "El Tajo a vuestro ritmo",
    summary: "La carretera es parte del día. Ronda gana mucho cuando baja el flujo de excursiones: miradores al final de la tarde y cena en el barrio de San Francisco.",
    tags: ["1 h 30 de coche", "Miradores", "Pueblo blanco"],
    items: [
      { time: "09:30", title: "Málaga → Ronda", detail: "102 km · margen recomendado de 20 min en la llegada para aparcar.", link: maps("Málaga to Ronda") },
      { time: "11:30", title: "Puente Nuevo y balcones del Tajo", detail: "Plaza de España, Alameda del Tajo y miradores. Baja solo si os apetece la caminata.", link: maps("Puente Nuevo Ronda") },
      { time: "14:00", title: "Almuerzo rondeño", detail: "Bodega San Francisco para cocina sencilla o Tragatá para una versión contemporánea.", link: maps("Bodega San Francisco Ronda") },
      { time: "16:30", title: "Ciudad vieja y Baños Árabes", detail: "Casa del Rey Moro por fuera, murallas, barrio de San Francisco y baños si están abiertos.", link: "https://turismoderonda.es/" },
      { time: "19:00", title: "Atardecer frente al puente", detail: "El mirador de Aldehuela o la Cuesta de Santo Domingo tienen luz bonita al final del día.", link: maps("Mirador de Aldehuela Ronda") }
    ]
  },
  {
    id: 3, date: "5", weekday: "Lun", city: "Sevilla", sleep: "Sevilla", theme: "Campanas, naranjos y Triana",
    summary: "Primer contacto con Sevilla por su eje monumental. La Giralda funciona mejor con entrada horaria; al caer la tarde, cruzad el río hacia Triana.",
    tags: ["1 h 50 de coche", "Giralda", "Triana"],
    items: [
      { time: "09:30", title: "Ronda → Sevilla", detail: "129 km. Salid con margen para aparcar fuera del casco de Santa Cruz.", link: maps("Ronda to Sevilla") },
      { time: "12:00", title: "Check-in y almuerzo ligero", detail: "Una tapa y descanso corto antes de la visita monumental.", link: maps("Centro Sevilla") },
      { time: "15:30", title: "Catedral + Giralda", detail: "Reserva franja oficial. Calcula 1 h 45–2 h para verla sin correr.", link: "https://www.catedraldesevilla.es/" },
      { time: "18:00", title: "Santa Cruz y Torre del Oro", detail: "Patio de Banderas, calle Agua, Archivo de Indias y paseo junto al Guadalquivir.", link: maps("Barrio Santa Cruz Sevilla") },
      { time: "21:00", title: "Tapas en Triana", detail: "Cruza por el puente y cena en barra: Las Golondrinas o Bodeguita Romero en el centro.", link: maps("Las Golondrinas Triana Sevilla") }
    ]
  },
  {
    id: 4, date: "6", weekday: "Mar", city: "Sevilla", sleep: "Sevilla", theme: "Palacios, azulejos y barrio",
    summary: "Día completo pero equilibrado: Real Alcázar temprano, sombra en María Luisa y tarde libre para elegir entre Triana, Bellas Artes o flamenco.",
    tags: ["Sin coche", "Real Alcázar", "Plan flexible"],
    items: [
      { time: "09:00", title: "Real Alcázar", detail: "Primera franja disponible para entrar con menos gente. Reserva 2–2½ horas.", link: "https://www.alcazarsevilla.org/" },
      { time: "12:15", title: "Plaza de España + María Luisa", detail: "Azulejos, jardines y paseo relajado. Buen momento para fotos y sombra.", link: maps("Plaza de España Sevilla") },
      { time: "14:30", title: "Almuerzo de tapas", detail: "Casa Morales para solera; Eslava si preferís tapas creativas con reserva.", link: maps("Casa Morales Sevilla") },
      { time: "18:00", title: "Elige vuestro Sevilla", detail: "Triana y cerámica, Museo de Bellas Artes o Setas al atardecer.", link: maps("Metropol Parasol Sevilla") },
      { time: "21:30", title: "Cena o flamenco íntimo", detail: "Evita paquetes con cena. Mejor espectáculo corto y cenar por separado.", link: maps("Casa de la Memoria Sevilla") }
    ]
  },
  {
    id: 5, date: "7", weekday: "Mié", city: "Córdoba", sleep: "Córdoba", theme: "Califato al otro lado del río",
    summary: "Traslado corto y centro compacto. La Mezquita-Catedral marca el ritmo; el resto se disfruta enlazando callejas, patios y tabernas.",
    tags: ["1 h 40 de coche", "Mezquita", "Patios"],
    items: [
      { time: "09:00", title: "Sevilla → Córdoba", detail: "145 km. Aparca antes de entrar en la Judería; muchas calles tienen acceso restringido.", link: maps("Sevilla to Córdoba") },
      { time: "11:15", title: "Mezquita-Catedral", detail: "Compra en el canal oficial y reserva 1½ horas. No dependas de revendedores.", link: "https://mezquita-catedraldecordoba.es/" },
      { time: "13:00", title: "Judería y callejas", detail: "Sinagoga, Zoco, calleja de las Flores y pequeñas plazas, sin convertirlo en una lista.", link: maps("Judería de Córdoba") },
      { time: "14:30", title: "Almuerzo cordobés", detail: "Salmorejo, flamenquín y berenjenas con miel en Taberna Salinas o Sociedad Plateros.", link: maps("Taberna Salinas Córdoba") },
      { time: "17:30", title: "Patios de San Basilio", detail: "Paseo por el Alcázar Viejo. Algunos patios tienen horario o entrada propia.", link: maps("San Basilio patios Córdoba") },
      { time: "20:00", title: "Puente Romano al anochecer", detail: "Cruza hacia la Torre de la Calahorra y vuelve viendo la Mezquita iluminada.", link: maps("Puente Romano Córdoba") }
    ]
  },
  {
    id: 6, date: "8", weekday: "Jue", city: "Granada", sleep: "Granada", theme: "De la ciudad califal a la Alhambra",
    summary: "Medina Azahara encaja aquí mejor que en el día anterior: visitadla con energía, comed en Córdoba y salid a Granada con luz suficiente.",
    tags: ["Medina Azahara", "2 h 15 de coche", "Mirador"],
    items: [
      { time: "08:45", title: "Check-out hacia Medina Azahara", detail: "Son unos 20 min desde Córdoba. La lanzadera sale del centro de visitantes.", link: maps("Medina Azahara Córdoba") },
      { time: "09:30", title: "Conjunto de Medina Azahara", detail: "Museo + lanzadera + yacimiento: reserva 2½–3 horas en total.", link: "https://www.juntadeandalucia.es/cultura/museos/CAMA/" },
      { time: "13:00", title: "Último almuerzo en Córdoba", detail: "Algo ligero antes de carretera. Confirma apertura si eliges una taberna concreta.", link: maps("Sociedad Plateros María Auxiliadora Córdoba") },
      { time: "15:00", title: "Córdoba → Granada", detail: "210 km · calcula 2 h 15 más acceso y parking en Granada.", link: maps("Córdoba to Granada") },
      { time: "19:00", title: "Mirador de San Nicolás", detail: "Primer vistazo a la Alhambra. Si está lleno, sigue hasta San Miguel Bajo o Placeta de Carvajales.", link: maps("Mirador de San Nicolás Granada") }
    ]
  },
  {
    id: 7, date: "9", weekday: "Vie", city: "Granada", sleep: "Granada", theme: "La Alhambra y los barrios altos",
    summary: "El día más importante para reservar. La hora exacta de Palacios Nazaríes manda; organiza el resto del recinto alrededor de ella.",
    tags: ["Alhambra", "Albaicín", "Tapas"],
    items: [
      { time: "08:30", title: "Alhambra y Generalife", detail: "Hora orientativa. Llegad 60 min antes de Palacios Nazaríes y llevad documentación.", link: "https://tickets.alhambra-patronato.es/" },
      { time: "14:00", title: "Almuerzo y pausa", detail: "Baja al centro o reserva Damasqueros para una comida más especial.", link: maps("Damasqueros Granada") },
      { time: "16:30", title: "Catedral + Capilla Real", detail: "Buena alternativa de interior después de la mañana larga.", link: maps("Catedral de Granada") },
      { time: "18:30", title: "Albaicín y Sacromonte", detail: "Paseo cuesta arriba sin ruta rígida: Carrera del Darro, Paseo de los Tristes y cuevas.", link: maps("Paseo de los Tristes Granada") },
      { time: "21:00", title: "Ruta corta de tapas", detail: "Dos o tres barras, no seis. Bodegas Castañeda y Casa Torcuato son buenas referencias.", link: maps("Bodegas Castañeda Granada") }
    ]
  },
  {
    id: 8, date: "10", weekday: "Sáb", city: "Jaén", sleep: "Jaén", theme: "Aceite, Renacimiento y castillo",
    summary: "La almazara en Baeza es el eje. Baeza y Úbeda están a 10 km: podéis ver ambas, pero conviene priorizar una visita corta en cada una.",
    tags: ["Almazara", "Baeza + Úbeda", "AOVE"],
    items: [
      { time: "08:15", title: "Granada → Baeza", detail: "140 km · aproximadamente 1 h 45. Sal con margen para la visita reservada.", link: maps("Granada to Baeza") },
      { time: "10:30", title: "Visita a la almazara", detail: "Confirma dirección y duración. Guarda 15 min para llegar y aparcar entre olivares.", link: maps("Almazara Baeza") },
      { time: "12:45", title: "Baeza monumental", detail: "Plaza del Pópulo, Catedral, Fuente de Santa María y paseo por las antiguas universidades.", link: "https://turismo.baeza.net/" },
      { time: "14:30", title: "Comida con AOVE", detail: "Canela en Rama o La Barbería. Pide recomendaciones de aceite por variedad.", link: maps("Canela en Rama Baeza") },
      { time: "16:45", title: "Úbeda en formato esencial", detail: "Plaza Vázquez de Molina, Sacra Capilla del Salvador y mirador del Salvador.", link: "https://www.turismodeubeda.com/" },
      { time: "19:30", title: "Llegada a Jaén", detail: "Si queda luz: mirador del Castillo de Santa Catalina. Si no, paseo y cena tranquila.", link: maps("Castillo Santa Catalina Jaén") }
    ]
  },
  {
    id: 9, date: "11", weekday: "Dom", city: "Manzanares", sleep: "Manzanares", theme: "Un día deliberadamente ligero",
    summary: "Después de varios días intensos, este tramo funciona mejor sin sobrecargarlo: una visita corta en Jaén, carretera y tarde tranquila en Manzanares.",
    tags: ["2 h de coche", "Día suave", "La Mancha"],
    items: [
      { time: "09:30", title: "Catedral de Jaén o Baños Árabes", detail: "Elige uno según horarios dominicales. La Catedral es más fácil de encajar antes de salir.", link: "https://catedraldejaen.org/" },
      { time: "12:00", title: "Almuerzo temprano", detail: "Pipirrana, ochíos o cocina de AOVE antes de la carretera.", link: maps("Panaceite Jaén") },
      { time: "14:00", title: "Jaén → Manzanares", detail: "180 km · unas 2 horas por la A-4, más una pausa breve.", link: maps("Jaén to Manzanares") },
      { time: "17:00", title: "Paseo por Manzanares", detail: "Castillo de Pilas Bonas, plaza y Museo del Queso si el horario dominical lo permite.", link: "https://www.manzanares.es/" },
      { time: "20:30", title: "Cena manchega", detail: "Pisto, migas o cordero en el Parador; alternativa cómoda y de producto regional.", link: "https://paradores.es/es/restaurante-del-parador-de-manzanares" }
    ]
  },
  {
    id: 10, date: "12", weekday: "Lun", city: "Madrid", sleep: "Madrid / regreso", theme: "Molinos antes de volver",
    summary: "El desvío a Consuegra añade aproximadamente una hora al viaje directo, pero cierra la ruta con uno de los paisajes más reconocibles de La Mancha.",
    tags: ["Consuegra", "2 h 20 a Madrid", "Final de ruta"],
    items: [
      { time: "09:30", title: "Manzanares → Consuegra", detail: "72 km · unos 50 min. Deja el equipaje oculto en el maletero.", link: maps("Manzanares to Consuegra") },
      { time: "10:30", title: "Molinos y castillo", detail: "Sube en coche al Cerro Calderico y pasea entre molinos. Consulta el acceso al castillo.", link: "https://consuegra.es/" },
      { time: "13:00", title: "Almuerzo manchego", detail: "Queso curado, pisto o duelos y quebrantos antes de continuar.", link: maps("Restaurantes Consuegra") },
      { time: "15:00", title: "Consuegra → Madrid", detail: "130 km · 1 h 30 sin tráfico. Añade 30–45 min si tenéis una hora límite.", link: maps("Consuegra to Madrid") },
      { time: "17:00", title: "Fin de la ruta", detail: "Entrega de coche, hotel o estación. Mantén este bloque deliberadamente libre.", link: maps("Madrid") }
    ]
  }
];

const drives = [
  ["Málaga → Ronda", "102 km", "1 h 30"], ["Ronda → Sevilla", "129 km", "1 h 50"],
  ["Sevilla → Córdoba", "145 km", "1 h 40"], ["Córdoba → Granada", "210 km", "2 h 15"],
  ["Granada → Baeza", "140 km", "1 h 45"], ["Úbeda → Jaén", "60 km", "50 min"],
  ["Jaén → Manzanares", "180 km", "2 h"], ["Consuegra → Madrid", "130 km", "1 h 30"]
];

const mapNodes = [
  { day:1, x:187, y:348, name:"Málaga" }, { day:2, x:263, y:278, name:"Ronda" },
  { day:3, x:418, y:285, name:"Sevilla" }, { day:5, x:537, y:206, name:"Córdoba" },
  { day:7, x:602, y:333, name:"Granada" }, { day:8, x:688, y:282, name:"Jaén" },
  { day:9, x:760, y:142, name:"Manzanares" }
];

const bookings = [
  { id:"alhambra", status:"Prioridad máxima", title:"Alhambra · 9 oct", detail:"Entrada oficial con hora de Palacios Nazaríes. Llevar documento original.", url:"https://tickets.alhambra-patronato.es/" },
  { id:"giralda", status:"Reservar", title:"Catedral + Giralda · 5 oct", detail:"Elegir franja de tarde según llegada desde Ronda.", url:"https://www.catedraldesevilla.es/" },
  { id:"alcazar", status:"Reservar", title:"Real Alcázar · 6 oct", detail:"Primera franja del día; evita portales que imitan la web oficial.", url:"https://www.alcazarsevilla.org/" },
  { id:"mezquita", status:"Reservar", title:"Mezquita-Catedral · 7 oct", detail:"Visita general con hora concreta desde el canal oficial.", url:"https://mezquita-catedraldecordoba.es/" },
  { id:"almazara", status:"Confirmar", title:"Almazara · 10 oct", detail:"Anotar aquí hora, dirección y teléfono de la visita en Baeza.", url:maps("Almazaras cerca de Baeza") },
  { id:"hoteles", status:"Ya organizado", title:"Alojamientos", detail:"El Excel marca hoteles confirmados del 3 al 10. Revisar parking y check-in tardío.", url:"#plan" }
];

const dishes = {
  "Málaga":[["Desayuno","Churros con chocolate"],["Comida","Espetos de sardinas"],["Comida","Porra antequerana"],["Cena","Boquerones fritos"],["Dulce","Torta loca"]],
  "Ronda":[["Comida","Migas rondeñas"],["Cena","Rabo de toro"],["Dulce","Yemas del Tajo"]],
  "Sevilla":[["Desayuno","Tostada con pringá"],["Comida","Espinacas con garbanzos"],["Cena","Carrillada ibérica"],["Tapa","Solomillo al whisky"]],
  "Córdoba":[["Comida","Salmorejo"],["Comida","Flamenquín"],["Cena","Berenjenas con miel"],["Dulce","Pastel cordobés"]],
  "Granada":[["Desayuno","Churros"],["Tapa","Habas con jamón"],["Cena","Tortilla del Sacromonte"],["Dulce","Piononos"]],
  "Jaén":[["Comida","Pipirrana"],["Comida","Andrajos"],["Tapa","Ochíos"],["Producto","AOVE picual"]],
  "Manzanares":[["Comida","Pisto manchego"],["Cena","Migas ruleras"],["Cena","Duelos y quebrantos"],["Producto","Queso manchego"]]
};

const restaurants = [
  { city:"Málaga", meal:"Desayuno", name:"Casa Aranda", why:"Churrería clásica en un pasaje del centro. Rápida, sencilla y perfecta para empezar.", order:"Churros madrileños + chocolate", price:"€", query:"Casa Aranda Málaga" },
  { city:"Málaga", meal:"Comida", name:"Mercado de Atarazanas", why:"Mercado vivo para picar pescado, marisco y producto fresco entre malagueños.", order:"Concha fina, fritura o espetos si aparecen", price:"€", query:"Mercado Central de Atarazanas Málaga" },
  { city:"Málaga", meal:"Cena", name:"Mesón Mariano", why:"Mesón tradicional conocido por las alcachofas y cocina de producto sin puesta en escena excesiva.", order:"Alcachofas, rabo de toro, berenjenas", price:"€€", query:"Mesón Mariano Málaga" },
  { city:"Málaga", meal:"Cena", name:"La Cosmopolita", why:"Cocina malagueña actual y sabrosa en pleno centro; merece reserva.", order:"Croquetas, ensaladilla y platos del día", price:"€€€", query:"La Cosmopolita Málaga" },
  { city:"Ronda", meal:"Comida", name:"Bodega San Francisco", why:"Bar de barrio con raciones generosas, ambiente local y precios razonables.", order:"Croquetas, berenjenas, carnes y tapas", price:"€", query:"Bodega San Francisco Ronda" },
  { city:"Ronda", meal:"Cena", name:"Casa Mateos", why:"Pequeño restaurante de cocina rondeña cuidada. Mejor reservar porque tiene pocas mesas.", order:"Rabo de toro y platos de temporada", price:"€€", query:"Casa Mateos Ronda" },
  { city:"Ronda", meal:"Cena", name:"Tragatá", why:"Tapas contemporáneas del chef Benito Gómez, informal pero muy preciso.", order:"Ensaladilla, brioche y tapas de temporada", price:"€€€", query:"Tragatá Ronda" },
  { city:"Sevilla", meal:"Comida", name:"Casa Morales", why:"Bodega histórica con tinajas, barra y tapas clásicas. Llega pronto y pide en pequeñas tandas.", order:"Montadito de pringá, espinacas, chacinas", price:"€", query:"Casa Morales Sevilla" },
  { city:"Sevilla", meal:"Cena", name:"Las Golondrinas", why:"Referencia de Triana para tapas sin ceremonia y ambiente de barrio.", order:"Puntas de solomillo y champiñones", price:"€", query:"Las Golondrinas Triana Sevilla" },
  { city:"Sevilla", meal:"Cena", name:"Eslava", why:"Tapas creativas con base sevillana. Popular, pero mantiene buena relación calidad-precio.", order:"Huevo sobre bizcocho de boletus y costilla", price:"€€", query:"Espacio Eslava Sevilla" },
  { city:"Sevilla", meal:"Dulce", name:"Manu Jara", why:"Pastelería de autor nacida en Triana; buena pausa entre paseo y paseo.", order:"Palmera, milhojas o pieza de temporada", price:"€€", query:"Manu Jara Triana" },
  { city:"Córdoba", meal:"Comida", name:"Taberna Salinas", why:"Desde 1879, una de las tabernas con más raíz cordobesa. Cierra los domingos.", order:"Salmorejo, flamenquín, rabo y berenjenas", price:"€€", query:"Taberna Salinas Córdoba" },
  { city:"Córdoba", meal:"Cena", name:"Sociedad Plateros Mª Auxiliadora", why:"Taberna tradicional fuera del eje más turístico, con patio y cocina cordobesa.", order:"Bacalao, berenjenas y salmorejo", price:"€€", query:"Sociedad Plateros María Auxiliadora Córdoba" },
  { city:"Córdoba", meal:"Cena", name:"Taberna Góngora", why:"Bar sin florituras para raciones abundantes y clásicos locales.", order:"Rabo de toro, venado y flamenquín", price:"€", query:"Taberna Góngora Córdoba" },
  { city:"Granada", meal:"Desayuno", name:"Café Fútbol", why:"Institución granadina para churros y chocolate antes de un día largo.", order:"Churros, chocolate y tostada", price:"€", query:"Café Fútbol Granada" },
  { city:"Granada", meal:"Comida", name:"Bar FM", why:"Bar de producto marino muy querido localmente y alejado del circuito monumental.", order:"Gamba, fritura y pescado según mercado", price:"€€€", query:"Bar FM Granada" },
  { city:"Granada", meal:"Cena", name:"Bodegas Castañeda", why:"Bodega emblemática para vermut, tablas y tapas. Ve a la de calle Almireceros.", order:"Calicasas, tabla caliente y embutidos", price:"€", query:"Bodegas Castañeda Calle Almireceros Granada" },
  { city:"Granada", meal:"Cena", name:"Casa Torcuato", why:"Clásico del Albaicín para cocina granadina y una cena reposada después de las cuestas.", order:"Habas con jamón y tortilla Sacromonte", price:"€€", query:"Casa Torcuato Granada" },
  { city:"Granada", meal:"Dulce", name:"Grillo Gelato", why:"Helado artesano con sabores limpios y menos ritual turístico que otros nombres céntricos.", order:"Pistacho o sabor de temporada", price:"€", query:"Grillo Gelato Granada" },
  { city:"Jaén", meal:"Comida", name:"Canela en Rama · Baeza", why:"Cocina actual con producto jienense, buena elección tras la almazara.", order:"Menú o platos con AOVE y temporada", price:"€€€", query:"Canela en Rama Baeza" },
  { city:"Jaén", meal:"Cena", name:"MangasVerdes · Jaén", why:"Taberna moderna, informal y muy enfocada en producto local.", order:"Pide platos para compartir y aceite de la zona", price:"€€", query:"MangasVerdes Jaén" },
  { city:"Jaén", meal:"Cena", name:"Panaceite · Jaén", why:"Opción cómoda para probar cocina jienense en formato de raciones y tapas.", order:"Pipirrana, ochíos y platos con AOVE", price:"€€", query:"Panaceite Jaén" },
  { city:"Manzanares", meal:"Cena", name:"Parador de Manzanares", why:"Carta regional fiable y fácil de encajar en una jornada de carretera.", order:"Pisto, migas, gachas o cordero manchego", price:"€€", query:"Parador de Manzanares restaurante" },
  { city:"Manzanares", meal:"Cena", name:"Castillo de Pilas Bonas", why:"Cena en un castillo restaurado, más por el ambiente que por buscar una ruta de tapas.", order:"Cocina manchega y carnes", price:"€€", query:"Restaurante Castillo Pilas Bonas Manzanares" },
  { city:"Manzanares", meal:"Comida", name:"Viri Viri", why:"Bar local sin pretensiones para una comida de paso con raciones.", order:"Pisto con huevo y carne a la brasa", price:"€", query:"Bar Barbacoa Viri Viri Manzanares" }
];

const state = {
  selectedDay: Number(localStorage.getItem("andalucia-day")) || 1,
  dayFilter: "Todos",
  foodCity: "Todos",
  meal: "Todos",
  edit: false,
  bookings: JSON.parse(localStorage.getItem("andalucia-bookings") || "{}"),
  edits: JSON.parse(localStorage.getItem("andalucia-edits") || "{}")
};

const $ = (s) => document.querySelector(s);
const esc = (v="") => String(v).replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#039;",'"':"&quot;"}[c]));
const toast = (msg) => { const el=$("#toast"); el.textContent=msg; el.classList.add("show"); clearTimeout(window.toastTimer); window.toastTimer=setTimeout(()=>el.classList.remove("show"),1800); };

function renderFilters() {
  const cities = ["Todos", ...new Set(tripDays.map(d=>d.city))];
  $("#day-filter").innerHTML = cities.map(c=>`<button class="filter-chip ${state.dayFilter===c?'active':''}" data-day-filter="${esc(c)}">${esc(c)}</button>`).join("");
  const foodCities = ["Todos", ...Object.keys(dishes)];
  $("#food-city-filter").innerHTML = foodCities.map(c=>`<button class="filter-chip ${state.foodCity===c?'active':''}" data-food-city="${esc(c)}">${esc(c)}</button>`).join("");
  const meals = ["Todos","Desayuno","Comida","Cena","Dulce"];
  $("#meal-filter").innerHTML = meals.map(m=>`<button class="filter-chip ${state.meal===m?'active':''}" data-meal="${m}">${m}</button>`).join("");
}

function getEdit(dayId, index, field, fallback) { return state.edits[`${dayId}-${index}-${field}`] ?? fallback; }

function renderDays() {
  const filtered = tripDays.filter(d=>state.dayFilter==="Todos" || d.city===state.dayFilter);
  if (!filtered.some(d=>d.id===state.selectedDay) && filtered.length) state.selectedDay=filtered[0].id;
  $("#day-rail").innerHTML = filtered.map(d=>`
    <button class="day-tab ${d.id===state.selectedDay?'active':''}" role="tab" aria-selected="${d.id===state.selectedDay}" data-day="${d.id}">
      <span class="date-box"><strong>${d.date}</strong><small>oct</small></span>
      <span class="day-tab-copy"><strong>${d.city}</strong><small>${d.weekday} · día ${d.id}</small></span><span class="day-arrow">›</span>
    </button>`).join("");
  renderDayDetail();
}

function renderDayDetail() {
  const d=tripDays.find(x=>x.id===state.selectedDay) || tripDays[0];
  const note=state.edits[`${d.id}-note`] || "";
  $("#day-detail").innerHTML = `
    <div class="day-kicker">Día ${d.id} · ${d.weekday}, ${d.date} de octubre</div>
    <div class="day-title-row"><h3>${esc(d.city)}</h3><span class="sleep-pill">☾ Dormir: ${esc(d.sleep)}</span></div>
    <p class="day-summary"><strong>${esc(d.theme)}.</strong> ${esc(d.summary)}</p>
    <div class="timeline">
      ${d.items.map((item,i)=>{
        const time=getEdit(d.id,i,"time",item.time), title=getEdit(d.id,i,"title",item.title);
        return `<div class="timeline-item">
          <span class="timeline-time">${esc(time)}</span>
          <div class="timeline-content"><strong>${esc(title)}</strong><p>${esc(item.detail)}</p>
            <div class="edit-fields"><input aria-label="Editar hora" data-edit-key="${d.id}-${i}-time" value="${esc(time)}"><input aria-label="Editar actividad" data-edit-key="${d.id}-${i}-title" value="${esc(title)}"></div>
          </div>
          <a class="timeline-link" href="${item.link}" target="_blank" rel="noreferrer">Abrir ↗</a>
        </div>`}).join("")}
    </div>
    <div class="day-tags">${d.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="day-note-wrap"><label for="day-note-${d.id}">Vuestras notas para este día</label><textarea class="day-note" id="day-note-${d.id}" data-note-day="${d.id}" placeholder="Reserva, parking, dirección del hotel, algo que no queréis olvidar…">${esc(note)}</textarea></div>`;
  localStorage.setItem("andalucia-day",String(d.id));
}

function renderRoute() {
  $("#drive-list").innerHTML=drives.map(([name,km,time])=>`<div class="drive-card"><div><strong>${name}</strong><small>${km}</small></div><span class="drive-time">${time}</span></div>`).join("");
  $("#map-nodes").innerHTML=mapNodes.map(n=>`<g class="map-node" data-map-day="${n.day}" transform="translate(${n.x} ${n.y})"><circle r="18"></circle><text class="node-num">${n.day}</text><text x="0" y="-29" text-anchor="middle">${n.name}</text></g>`).join("");
}

function renderBookings() {
  $("#booking-grid").innerHTML=bookings.map(b=>{
    const done=!!state.bookings[b.id];
    return `<article class="booking-card ${done?'done':''}"><div class="booking-top"><span class="booking-status">${done?'Completado':b.status}</span><button class="check-button" data-booking="${b.id}" aria-label="Marcar ${esc(b.title)}">${done?'✓':'○'}</button></div><h3>${esc(b.title)}</h3><p>${esc(b.detail)}</p><a class="booking-link" href="${b.url}" target="_blank" rel="noreferrer">${b.url.startsWith('#')?'Ver plan':'Fuente oficial / mapa ↗'}</a></article>`;
  }).join("");
}

function renderFood() {
  const dishCities=state.foodCity==="Todos" ? Object.keys(dishes) : [state.foodCity];
  $("#dish-ribbon").innerHTML=dishCities.flatMap(city=>dishes[city].filter(([meal])=>state.meal==="Todos" || meal===state.meal || (state.meal==="Dulce"&&meal==="Dulce")).map(([meal,name])=>`<div class="dish-card"><small>${city} · ${meal}</small><strong>${name}</strong></div>`)).join("");
  const list=restaurants.filter(r=>(state.foodCity==="Todos"||r.city===state.foodCity)&&(state.meal==="Todos"||r.meal===state.meal));
  $("#restaurant-grid").innerHTML=list.length?list.map(r=>`<article class="restaurant-card"><div class="restaurant-meta"><span>${r.city} · ${r.meal}</span><span>${r.price}</span></div><h3>${r.name}</h3><p>${r.why}</p><div class="restaurant-order"><strong>Qué pedir:</strong> ${r.order}</div><a href="${maps(r.query)}" target="_blank" rel="noreferrer">Ver ubicación y horario ↗</a></article>`).join(""):`<p class="empty-state">No hay recomendaciones con esos filtros.</p>`;
}

function bindEvents() {
  document.addEventListener("click",e=>{
    const day=e.target.closest("[data-day]"); if(day){state.selectedDay=Number(day.dataset.day);renderDays();}
    const df=e.target.closest("[data-day-filter]"); if(df){state.dayFilter=df.dataset.dayFilter;renderFilters();renderDays();}
    const fc=e.target.closest("[data-food-city]"); if(fc){state.foodCity=fc.dataset.foodCity;renderFilters();renderFood();}
    const mf=e.target.closest("[data-meal]"); if(mf){state.meal=mf.dataset.meal;renderFilters();renderFood();}
    const bk=e.target.closest("[data-booking]"); if(bk){state.bookings[bk.dataset.booking]=!state.bookings[bk.dataset.booking];localStorage.setItem("andalucia-bookings",JSON.stringify(state.bookings));renderBookings();toast("Checklist actualizada");}
    const mn=e.target.closest("[data-map-day]"); if(mn){state.selectedDay=Number(mn.dataset.mapDay);state.dayFilter="Todos";renderFilters();renderDays();document.querySelector("#plan").scrollIntoView();}
  });
  document.addEventListener("input",e=>{
    if(e.target.dataset.editKey){state.edits[e.target.dataset.editKey]=e.target.value;localStorage.setItem("andalucia-edits",JSON.stringify(state.edits));}
    if(e.target.dataset.noteDay){state.edits[`${e.target.dataset.noteDay}-note`]=e.target.value;localStorage.setItem("andalucia-edits",JSON.stringify(state.edits));}
  });
  $("#edit-toggle").addEventListener("click",()=>{state.edit=!state.edit;document.body.classList.toggle("edit-mode",state.edit);$("#edit-toggle").textContent=state.edit?"Guardar cambios":"Editar plan"; if(!state.edit){renderDayDetail();toast("Cambios guardados en este dispositivo");}});
  $("#theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");localStorage.setItem("andalucia-theme",dark?"dark":"light");$("#theme-toggle").textContent=dark?"☀":"☾";});
}

function init() {
  if(localStorage.getItem("andalucia-theme")==="dark"){document.body.classList.add("dark");$("#theme-toggle").textContent="☀";}
  renderFilters(); renderDays(); renderRoute(); renderBookings(); renderFood(); bindEvents();
}

init();
