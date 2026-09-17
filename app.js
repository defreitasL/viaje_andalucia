const maps = (query) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const tripDays = [
  {
    id: 1, date: "3", weekday: "Sáb", city: "Málaga", sleep: "Málaga", theme: "Mar, piedra y primera tapa",
    summary: "Llegamos por la mañana, dejamos las cosas en el alojamiento y estrenamos el viaje comiendo en El Pimpi. Por la tarde visitamos la Alcazaba y terminamos paseando y cenando junto al puerto.",
    tags: ["Llegada", "Casco histórico", "Atardecer"],
    items: [
      { time: "11:00", title: "Llegamos y hacemos el check-in", detail: "Dejamos el coche y el equipaje, nos instalamos y entramos caminando al centro.", link: maps("Centro Histórico Málaga") },
      { time: "14:30", title: "Comemos en El Pimpi", detail: "Empezamos el viaje con cocina malagueña junto al Teatro Romano. Reservamos si queremos una hora concreta.", link: "https://www.elpimpi.com/" },
      { time: "17:00", title: "Visitamos la Alcazaba", detail: "Recorremos la fortaleza y sus jardines con calma; dejamos Gibralfaro como opción solo si todavía tenemos energía.", link: "https://alcazabaygibralfaro.malaga.eu/" },
      { time: "20:00", title: "Paseamos y cenamos por Muelle Uno", detail: "Pasamos por la calle Larios y caminamos entre las palmeras y el puerto antes de cenar por la zona.", link: maps("Muelle Uno Málaga") }
    ]
  },
  {
    id: 2, date: "4", weekday: "Dom", city: "Ronda", sleep: "Ronda", theme: "El Tajo a nuestro ritmo",
    summary: "Disfrutamos también de la carretera. Recorremos el Tajo y la ciudad vieja sin prisas y dejamos el atardecer frente al Puente Nuevo para cerrar el día antes de cenar.",
    tags: ["1 h 30 de coche", "Miradores", "Pueblo blanco"],
    items: [
      { time: "09:30", title: "Málaga → Ronda", detail: "Recorremos 102 km y dejamos 20 min de margen al llegar para aparcar.", link: maps("Málaga to Ronda") },
      { time: "11:30", title: "Puente Nuevo y balcones del Tajo", detail: "Pasamos por la plaza de España, la Alameda del Tajo y los miradores. Bajamos solo si nos apetece la caminata.", link: maps("Puente Nuevo Ronda") },
      { time: "14:00", title: "Almuerzo rondeño", detail: "Podemos elegir Bodega San Francisco para cocina sencilla o Tragatá para una versión contemporánea.", link: maps("Bodega San Francisco Ronda") },
      { time: "17:00", title: "Recorremos la ciudad vieja y los Baños Árabes", detail: "Vemos la Casa del Rey Moro por fuera, las murallas, el barrio de San Francisco y los baños si están abiertos.", link: "https://turismoderonda.es/" },
      { time: "20:00", title: "Vemos el atardecer y cenamos", detail: "Terminamos en el mirador de Aldehuela o la Cuesta de Santo Domingo y después buscamos una cena rondeña.", link: maps("Mirador de Aldehuela Ronda") }
    ]
  },
  {
    id: 3, date: "5", weekday: "Lun", city: "Sevilla", sleep: "Sevilla", theme: "Campanas, naranjos y Triana",
    summary: "Llegamos directamente al eje monumental para visitar la Catedral y la Giralda. Después comemos por el centro, hacemos el check-in y enlazamos Santa Cruz con una noche de tapas en Triana.",
    tags: ["1 h 50 de coche", "Giralda", "Triana"],
    items: [
      { time: "09:30", title: "Ronda → Sevilla", detail: "Recorremos 129 km y salimos con margen para aparcar fuera del casco de Santa Cruz.", link: maps("Ronda to Sevilla") },
      { time: "12:00", title: "Visitamos la Catedral y la Giralda", detail: "Reservamos la franja oficial del mediodía y contamos 1 h 45–2 h para verlas sin correr.", link: "https://www.catedraldesevilla.es/" },
      { time: "15:00", title: "Comemos por el centro", detail: "Elegimos una comida sevillana cerca del eje monumental antes de ir al alojamiento.", link: maps("Restaurantes centro Sevilla") },
      { time: "17:00", title: "Hacemos el check-in", detail: "Dejamos el equipaje y descansamos unos minutos antes de volver a salir.", link: maps("Centro Sevilla") },
      { time: "18:00", title: "Santa Cruz y Torre del Oro", detail: "Pasamos por el Patio de Banderas, la calle Agua y el Archivo de Indias antes de pasear junto al Guadalquivir.", link: maps("Barrio Santa Cruz Sevilla") },
      { time: "21:00", title: "Tapeamos por Triana", detail: "Cruzamos el puente y cenamos en barra, en Las Golondrinas o Bodeguita Romero.", link: maps("Las Golondrinas Triana Sevilla") }
    ]
  },
  {
    id: 4, date: "6", weekday: "Mar", city: "Sevilla", sleep: "Sevilla", theme: "Palacios, azulejos y barrio",
    summary: "Hacemos un día completo pero equilibrado: Real Alcázar temprano, sombra en María Luisa, tapeo y una tarde libre para elegir nuestro rincón de Sevilla antes de cenar por la Judería.",
    tags: ["Sin coche", "Real Alcázar", "Plan flexible"],
    items: [
      { time: "09:00", title: "Real Alcázar", detail: "Elegimos la primera franja disponible para entrar con menos gente y reservamos 2–2½ horas.", link: "https://www.alcazarsevilla.org/" },
      { time: "12:15", title: "Plaza de España + María Luisa", detail: "Paseamos entre azulejos y jardines, aprovechando la sombra y la luz para las fotos.", link: maps("Plaza de España Sevilla") },
      { time: "14:30", title: "Tapeamos por Sevilla", detail: "Vamos a Casa Morales si buscamos solera o a Eslava si preferimos tapas creativas con reserva.", link: maps("Casa Morales Sevilla") },
      { time: "18:00", title: "Elegimos nuestro Sevilla", detail: "Decidimos entre Triana y su cerámica, el Museo de Bellas Artes o las Setas al atardecer.", link: maps("Metropol Parasol Sevilla") },
      { time: "21:30", title: "Tapeamos por la Judería", detail: "Terminamos el día cenando de tapas por las calles próximas a Santa Cruz, sin una ruta rígida.", link: maps("Judería Sevilla tapas") }
    ]
  },
  {
    id: 5, date: "7", weekday: "Mié", city: "Córdoba", sleep: "Córdoba", theme: "Califato al otro lado del río",
    summary: "Hacemos un traslado corto y disfrutamos de un centro compacto. La Mezquita-Catedral marca nuestro ritmo; después enlazamos callejas, patios y tabernas.",
    tags: ["1 h 40 de coche", "Mezquita", "Patios"],
    items: [
      { time: "09:00", title: "Sevilla → Córdoba", detail: "Recorremos 145 km y aparcamos antes de entrar en la Judería, donde muchas calles tienen acceso restringido.", link: maps("Sevilla to Córdoba") },
      { time: "11:15", title: "Mezquita-Catedral", detail: "Compramos en el canal oficial y reservamos 1½ horas, sin depender de revendedores.", link: "https://mezquita-catedraldecordoba.es/" },
      { time: "13:00", title: "Judería y callejas", detail: "Pasamos por la Sinagoga, el Zoco, la calleja de las Flores y pequeñas plazas, sin convertir el paseo en una lista.", link: maps("Judería de Córdoba") },
      { time: "14:30", title: "Almuerzo cordobés", detail: "Salmorejo, flamenquín y berenjenas con miel en Taberna Salinas o Sociedad Plateros.", link: maps("Taberna Salinas Córdoba") },
      { time: "18:00", title: "Visitamos los patios de San Basilio", detail: "Paseamos por el Alcázar Viejo y comprobamos el horario propio de los patios que queramos visitar.", link: maps("San Basilio patios Córdoba") },
      { time: "21:00", title: "Cruzamos el Puente Romano y cenamos", detail: "Caminamos hacia la Torre de la Calahorra, vemos la Mezquita iluminada y cenamos después por el centro.", link: maps("Puente Romano Córdoba") }
    ]
  },
  {
    id: 6, date: "8", weekday: "Jue", city: "Granada", sleep: "Granada", theme: "De la ciudad califal a la Alhambra",
    summary: "Visitamos Medina Azahara por la mañana, volvemos a Córdoba para comer y conducimos hasta Granada. Después del check-in dejamos la tarde para patear el centro y cenar por allí.",
    tags: ["Medina Azahara", "2 h 15 de coche", "Centro de Granada"],
    items: [
      { time: "09:00", title: "Córdoba → Medina Azahara", detail: "Conducimos unos 20 min desde Córdoba y tomamos la lanzadera en el centro de visitantes.", link: maps("Medina Azahara Córdoba") },
      { time: "09:30", title: "Conjunto de Medina Azahara", detail: "Reservamos 2½–3 horas para el museo, la lanzadera y el yacimiento.", link: "https://www.juntadeandalucia.es/cultura/museos/CAMA/" },
      { time: "14:00", title: "Comemos en Córdoba", detail: "Volvemos a la ciudad para nuestra última comida cordobesa antes de la carretera.", link: maps("Sociedad Plateros María Auxiliadora Córdoba") },
      { time: "15:00", title: "Córdoba → Granada", detail: "Recorremos 210 km y contamos 2 h 15 más el acceso y el parking en Granada.", link: maps("Córdoba to Granada") },
      { time: "18:00", title: "Hacemos el check-in y pateamos el centro", detail: "Dejamos el equipaje y damos un primer paseo por la Catedral, la Alcaicería y las plazas del centro.", link: maps("Centro histórico Granada") },
      { time: "21:00", title: "Cenamos por el centro", detail: "Entramos en un par de barras y probamos las tapas incluidas con la bebida sin convertir la noche en una maratón.", link: maps("Bodegas Castañeda Granada") }
    ]
  },
  {
    id: 7, date: "9", weekday: "Vie", city: "Granada", sleep: "Granada", theme: "La Alhambra y los barrios altos",
    summary: "Este es nuestro día más importante para reservar. La hora exacta de Palacios Nazaríes manda y organizamos el resto del recinto alrededor de ella.",
    tags: ["Alhambra", "Albaicín", "Tapas"],
    items: [
      { time: "09:00", title: "Visitamos la Alhambra y el Generalife", detail: "Llegamos 60 min antes de nuestra hora de Palacios Nazaríes y llevamos la documentación.", link: "https://tickets.alhambra-patronato.es/" },
      { time: "14:00", title: "Comemos cocina granadina", detail: "Bajamos al centro y elegimos un sitio de producto local; reservamos Damasqueros si queremos una comida más especial.", link: maps("Damasqueros Granada") },
      { time: "16:30", title: "Catedral + Capilla Real", detail: "Elegimos una visita de interior después de una mañana larga.", link: maps("Catedral de Granada") },
      { time: "20:00", title: "Tapeamos por el Albaicín", detail: "Subimos por la Carrera del Darro y el Paseo de los Tristes, vemos la Alhambra al atardecer y cenamos de tapas por el barrio.", link: maps("Albaicín Granada tapas") }
    ]
  },
  {
    id: 8, date: "10", weekday: "Sáb", city: "Baeza", sleep: "Baeza", theme: "Aceite y Renacimiento",
    summary: "Hacemos de Baeza nuestra base. La almazara es el eje del día y, como Úbeda está a solo 10 km, visitamos las dos ciudades con calma y volvemos a dormir en Baeza.",
    tags: ["Almazara", "Baeza + Úbeda", "AOVE"],
    items: [
      { time: "08:00", title: "Granada → Baeza", detail: "Recorremos unos 140 km en 1 h 45 y dejamos margen suficiente para la visita reservada.", link: maps("Granada to Baeza") },
      { time: "10:30", title: "Visitamos la almazara", detail: "Confirmamos la dirección y la duración, y reservamos 15 minutos para llegar y aparcar entre olivares.", link: maps("Almazara Baeza") },
      { time: "13:00", title: "Paseamos por Baeza y comemos", detail: "Recorremos la plaza del Pópulo, la Catedral, la Fuente de Santa María y las antiguas universidades antes de comer con AOVE.", link: "https://turismo.baeza.net/" },
      { time: "17:00", title: "Visitamos Úbeda", detail: "Vemos la plaza Vázquez de Molina, la Sacra Capilla del Salvador y el mirador del Salvador.", link: "https://www.turismodeubeda.com/" },
      { time: "20:00", title: "Volvemos a Baeza y cenamos", detail: "Regresamos al alojamiento y cenamos sin prisas cerca del centro histórico.", link: maps("Centro histórico Baeza") }
    ]
  },
  {
    id: 9, date: "11", weekday: "Dom", city: "Manzanares", sleep: "Manzanares", theme: "Carretera y descanso",
    summary: "Después de varios días intensos, desayunamos, hacemos el check-out y conducimos directamente a Manzanares. Allí tomamos el aperitivo en El Menano, comemos y dejamos el resto del día libre.",
    tags: ["2 h 15 de coche", "Sin visitas", "Descanso"],
    items: [
      { time: "09:30", title: "Desayunamos y hacemos el check-out", detail: "Empezamos sin prisas, preparamos el equipaje y dejamos Baeza después del desayuno.", link: maps("Desayuno Baeza") },
      { time: "10:30", title: "Baeza → Manzanares", detail: "Recorremos unos 190 km en 2 h 15 y hacemos una pausa si la necesitamos.", link: maps("Baeza to Manzanares") },
      { time: "13:00", title: "Tomamos el aperitivo en El Menano", detail: "Llegamos a Manzanares y hacemos nuestra primera parada en esta taberna local.", link: maps("El Menano Manzanares") },
      { time: "14:30", title: "Comemos en Manzanares", detail: "Elegimos un sitio cercano y después dejamos la tarde libre para descansar.", link: maps("Restaurantes Manzanares") },
      { time: "20:30", title: "Cenamos cerca del alojamiento", detail: "Si nos apetece, pedimos pisto, migas o cordero; si no, optamos por algo ligero y descansamos.", link: "https://paradores.es/es/restaurante-del-parador-de-manzanares" }
    ]
  },
  {
    id: 10, date: "12", weekday: "Lun", city: "Madrid", sleep: "Madrid / regreso", theme: "Último día de descanso",
    summary: "Cerramos la ruta sin visitas programadas: desayunamos en Manzanares, conducimos directamente a Madrid, llegamos al piso y comemos en La Tagliatella.",
    tags: ["2 h de coche", "Sin visitas", "Final tranquilo"],
    items: [
      { time: "09:30", title: "Desayunamos tranquilamente", detail: "Empezamos el último día sin una agenda de visitas y preparamos el equipaje.", link: maps("Desayuno Manzanares") },
      { time: "11:00", title: "Manzanares → Madrid", detail: "Recorremos unos 175 km en 2 horas y dejamos margen adicional si encontramos tráfico.", link: maps("Manzanares to Madrid") },
      { time: "14:00", title: "Llegamos al piso", detail: "Dejamos el equipaje y nos instalamos antes de salir a comer.", link: maps("Madrid") },
      { time: "15:00", title: "Comemos en La Tagliatella", detail: "Terminamos el itinerario con una comida tranquila y dejamos libre el resto del día.", link: maps("La Tagliatella Madrid") }
    ]
  }
];

const drives = [
  ["Málaga → Ronda", "102 km", "1 h 30"], ["Ronda → Sevilla", "129 km", "1 h 50"],
  ["Sevilla → Córdoba", "145 km", "1 h 40"], ["Córdoba → Granada", "210 km", "2 h 15"],
  ["Granada → Baeza", "140 km", "1 h 45"], ["Baeza ↔ Úbeda", "20 km", "30 min"],
  ["Baeza → Manzanares", "190 km", "2 h 15"], ["Manzanares → Madrid", "175 km", "2 h"]
];

const mapNodes = [
  { day:1, x:187, y:348, name:"Málaga" }, { day:2, x:263, y:278, name:"Ronda" },
  { day:3, x:418, y:285, name:"Sevilla" }, { day:5, x:537, y:206, name:"Córdoba" },
  { day:7, x:602, y:333, name:"Granada" }, { day:8, x:688, y:282, name:"Baeza" },
  { day:9, x:760, y:142, name:"Manzanares" }
];

const bookings = [
  { id:"alhambra", status:"Prioridad máxima", title:"Alhambra · 9 oct", detail:"Reservamos la entrada para las 09:00, comprobamos la hora exacta de Palacios Nazaríes y llevamos el documento original.", url:"https://tickets.alhambra-patronato.es/" },
  { id:"giralda", status:"Reservar", title:"Catedral + Giralda · 5 oct", detail:"Elegimos la franja de las 12:00 para enlazar la visita con nuestra llegada desde Ronda.", url:"https://www.catedraldesevilla.es/" },
  { id:"alcazar", status:"Reservar", title:"Real Alcázar · 6 oct", detail:"Elegimos la primera franja del día, a las 09:00, y evitamos portales que imiten la web oficial.", url:"https://www.alcazarsevilla.org/" },
  { id:"mezquita", status:"Reservar", title:"Mezquita-Catedral · 7 oct", detail:"Reservamos la visita general de las 11:15 desde el canal oficial.", url:"https://mezquita-catedraldecordoba.es/" },
  { id:"almazara", status:"Confirmar", title:"Almazara · 10 oct", detail:"Confirmamos la visita de las 10:30 y anotamos la dirección y el teléfono de la almazara.", url:maps("Almazaras cerca de Baeza") },
  { id:"hoteles", status:"Ya organizado", title:"Alojamientos", detail:"Tenemos los hoteles confirmados del 3 al 10; revisamos el parking y el check-in tardío.", url:"#plan" }
];

const dishes = {
  "Málaga":[["Desayuno","Churros con chocolate"],["Comida","Espetos de sardinas"],["Comida","Porra antequerana"],["Cena","Boquerones fritos"],["Dulce","Torta loca"]],
  "Ronda":[["Comida","Migas rondeñas"],["Cena","Rabo de toro"],["Dulce","Yemas del Tajo"]],
  "Sevilla":[["Desayuno","Tostada con pringá"],["Comida","Espinacas con garbanzos"],["Cena","Carrillada ibérica"],["Tapa","Solomillo al whisky"]],
  "Córdoba":[["Comida","Salmorejo"],["Comida","Flamenquín"],["Cena","Berenjenas con miel"],["Dulce","Pastel cordobés"]],
  "Granada":[["Desayuno","Churros"],["Tapa","Habas con jamón"],["Cena","Tortilla del Sacromonte"],["Dulce","Piononos"]],
  "Baeza":[["Comida","Pipirrana"],["Comida","Andrajos"],["Tapa","Ochíos"],["Producto","AOVE picual"]],
  "Manzanares":[["Comida","Pisto manchego"],["Cena","Migas ruleras"],["Cena","Duelos y quebrantos"],["Producto","Queso manchego"]]
};

const restaurants = [
  { city:"Málaga", meal:"Desayuno", name:"Casa Aranda", why:"Empezamos en una churrería clásica escondida en un pasaje del centro: rápida, sencilla y con mucha historia.", order:"Pedimos churros madrileños con chocolate", price:"€", query:"Casa Aranda Málaga" },
  { city:"Málaga", meal:"Comida", name:"Mercado de Atarazanas", why:"Picamos pescado, marisco y producto fresco en un mercado vivo, rodeados de malagueños.", order:"Probamos concha fina, fritura o espetos si aparecen", price:"€", query:"Mercado Central de Atarazanas Málaga" },
  { city:"Málaga", meal:"Cena", name:"Mesón Mariano", why:"Cenamos en un mesón tradicional conocido por sus alcachofas y su cocina de producto.", order:"Pedimos alcachofas, rabo de toro y berenjenas", price:"€€", query:"Mesón Mariano Málaga" },
  { city:"Málaga", meal:"Cena", name:"La Cosmopolita", why:"Probamos cocina malagueña actual y sabrosa en pleno centro; reservamos con antelación.", order:"Compartimos croquetas, ensaladilla y platos del día", price:"€€€", query:"La Cosmopolita Málaga" },
  { city:"Ronda", meal:"Comida", name:"Bodega San Francisco", why:"Comemos en un bar de barrio con raciones generosas, ambiente local y precios razonables.", order:"Pedimos croquetas, berenjenas, carnes y tapas", price:"€", query:"Bodega San Francisco Ronda" },
  { city:"Ronda", meal:"Cena", name:"Casa Mateos", why:"Cenamos en un pequeño restaurante de cocina rondeña cuidada y reservamos porque tiene pocas mesas.", order:"Probamos rabo de toro y platos de temporada", price:"€€", query:"Casa Mateos Ronda" },
  { city:"Ronda", meal:"Cena", name:"Tragatá", why:"Compartimos tapas contemporáneas del chef Benito Gómez en un ambiente informal.", order:"Pedimos ensaladilla, brioche y tapas de temporada", price:"€€€", query:"Tragatá Ronda" },
  { city:"Sevilla", meal:"Comida", name:"Casa Morales", why:"Entramos temprano en una bodega histórica con tinajas, barra y tapas clásicas, y pedimos en pequeñas tandas.", order:"Probamos montadito de pringá, espinacas y chacinas", price:"€", query:"Casa Morales Sevilla" },
  { city:"Sevilla", meal:"Cena", name:"Las Golondrinas", why:"Cenamos en una referencia de Triana, con tapas sin ceremonia y ambiente de barrio.", order:"Pedimos puntas de solomillo y champiñones", price:"€", query:"Las Golondrinas Triana Sevilla" },
  { city:"Sevilla", meal:"Cena", name:"Eslava", why:"Probamos tapas creativas con base sevillana y buena relación calidad-precio.", order:"Pedimos huevo sobre bizcocho de boletus y costilla", price:"€€", query:"Espacio Eslava Sevilla" },
  { city:"Sevilla", meal:"Dulce", name:"Manu Jara", why:"Hacemos una pausa en esta pastelería de autor nacida en Triana.", order:"Elegimos palmera, milhojas o una pieza de temporada", price:"€€", query:"Manu Jara Triana" },
  { city:"Córdoba", meal:"Comida", name:"Taberna Salinas", why:"Comemos en una de las tabernas con más raíz cordobesa, abierta desde 1879; recordamos que cierra los domingos.", order:"Pedimos salmorejo, flamenquín, rabo y berenjenas", price:"€€", query:"Taberna Salinas Córdoba" },
  { city:"Córdoba", meal:"Cena", name:"Sociedad Plateros Mª Auxiliadora", why:"Cenamos en una taberna tradicional con patio, fuera del eje más turístico.", order:"Probamos bacalao, berenjenas y salmorejo", price:"€€", query:"Sociedad Plateros María Auxiliadora Córdoba" },
  { city:"Córdoba", meal:"Cena", name:"Taberna Góngora", why:"Elegimos un bar sin florituras para probar raciones abundantes y clásicos locales.", order:"Pedimos rabo de toro, venado y flamenquín", price:"€", query:"Taberna Góngora Córdoba" },
  { city:"Granada", meal:"Desayuno", name:"Café Fútbol", why:"Desayunamos churros y chocolate en una institución granadina antes de un día largo.", order:"Pedimos churros, chocolate y tostada", price:"€", query:"Café Fútbol Granada" },
  { city:"Granada", meal:"Comida", name:"Bar FM", why:"Comemos producto marino en un bar muy querido localmente y alejado del circuito monumental.", order:"Elegimos gamba, fritura y pescado según mercado", price:"€€€", query:"Bar FM Granada" },
  { city:"Granada", meal:"Cena", name:"Bodegas Castañeda", why:"Vamos a la bodega de la calle Almireceros para tomar vermut, tablas y tapas.", order:"Pedimos calicasas, tabla caliente y embutidos", price:"€", query:"Bodegas Castañeda Calle Almireceros Granada" },
  { city:"Granada", meal:"Cena", name:"Casa Torcuato", why:"Cenamos cocina granadina en un clásico del Albaicín después de recorrer sus cuestas.", order:"Probamos habas con jamón y tortilla del Sacromonte", price:"€€", query:"Casa Torcuato Granada" },
  { city:"Granada", meal:"Dulce", name:"Grillo Gelato", why:"Paramos a probar helado artesano con sabores limpios y ambiente tranquilo.", order:"Elegimos pistacho o un sabor de temporada", price:"€", query:"Grillo Gelato Granada" },
  { city:"Baeza", meal:"Comida", name:"Canela en Rama", why:"Probamos una cocina actual basada en el producto de la provincia después de visitar la almazara.", order:"Elegimos el menú o platos de temporada con AOVE", price:"€€€", query:"Canela en Rama Baeza" },
  { city:"Baeza", meal:"Cena", name:"La Barbería", why:"Cenamos en un espacio agradable del centro histórico con cocina mediterránea y producto local.", order:"Compartimos entrantes y preguntamos por los platos con AOVE", price:"€€", query:"La Barbería Baeza" },
  { city:"Baeza", meal:"Comida", name:"Palacio de Gallego", why:"Elegimos una opción tranquila para disfrutar de cocina de la zona en un edificio con historia.", order:"Pedimos pipirrana, carnes y alguna especialidad de temporada", price:"€€", query:"Palacio de Gallego Baeza" },
  { city:"Manzanares", meal:"Cena", name:"Parador de Manzanares", why:"Cenamos cocina regional en una opción cómoda para nuestra jornada de carretera.", order:"Pedimos pisto, migas, gachas o cordero manchego", price:"€€", query:"Parador de Manzanares restaurante" },
  { city:"Manzanares", meal:"Cena", name:"Castillo de Pilas Bonas", why:"Cenamos en un castillo restaurado y disfrutamos especialmente del ambiente.", order:"Elegimos cocina manchega y carnes", price:"€€", query:"Restaurante Castillo Pilas Bonas Manzanares" },
  { city:"Manzanares", meal:"Comida", name:"El Menano", why:"Paramos aquí para nuestro aperitivo al llegar a Manzanares, tal como lo hemos apuntado en el plan.", order:"Pedimos una bebida y alguna tapa para compartir", price:"€", query:"El Menano Manzanares" },
  { city:"Manzanares", meal:"Comida", name:"Viri Viri", why:"Paramos en un bar local sin pretensiones para una comida sencilla con raciones.", order:"Pedimos pisto con huevo y carne a la brasa", price:"€", query:"Bar Barbacoa Viri Viri Manzanares" }
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
    <div class="day-note-wrap"><label for="day-note-${d.id}">Nuestras notas para este día</label><textarea class="day-note" id="day-note-${d.id}" data-note-day="${d.id}" placeholder="Reserva, parking, dirección del hotel, algo que no queremos olvidar…">${esc(note)}</textarea></div>`;
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
  $("#edit-toggle").addEventListener("click",()=>{state.edit=!state.edit;document.body.classList.toggle("edit-mode",state.edit);$("#edit-toggle").textContent=state.edit?"Guardar cambios":"Editar plan"; if(!state.edit){renderDayDetail();toast("Hemos guardado los cambios en este dispositivo");}});
  $("#theme-toggle").addEventListener("click",()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");localStorage.setItem("andalucia-theme",dark?"dark":"light");$("#theme-toggle").textContent=dark?"☀":"☾";});
}

function init() {
  if(localStorage.getItem("andalucia-theme")==="dark"){document.body.classList.add("dark");$("#theme-toggle").textContent="☀";}
  renderFilters(); renderDays(); renderRoute(); renderBookings(); renderFood(); bindEvents();
}

init();
