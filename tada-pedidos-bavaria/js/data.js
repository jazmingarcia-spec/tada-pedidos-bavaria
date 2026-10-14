/**
 * DATA STORE & INITIAL MOCK STATE - TADA DELIVERY BAVARIA
 * Configuración Oficial: Jazmin Garcia Castro (Jazmin.garciaC-ext@ab-inbev.com)
 * Segmentación por REGIONES y Tiendas GLN Oficiales
 * Regla de Corte Diario: Máximo hasta las 11:00 AM para despacho el mismo día
 */

window.TADA_DATA = {
  // Current Authenticated User (Jazmin Garcia Castro)
  currentUser: {
    name: "JAZMIN GARCIACASTRO",
    email: "Jazmin.garciaC-ext@ab-inbev.com",
    role: "Coordinadora Operaciones TaDa",
    poc: "Bavaria - Operaciones Kopps Colombia",
    avatar: "JG",
    loginTime: "2026-08-15 20:25"
  },

  // Presentaciones Oficiales de Hielo (sin precios, administradas por CTM)
  iceConfig: {
    cutoffHour: "11:00 AM",
    presentations: [
      { name: "Bolsa 2 Kg", weightKg: 2, desc: "Presentación estándar para Tiendas TaDa" },
      { name: "Bolsa 10 Kg", weightKg: 10, desc: "Consumo medio / fines de semana" },
      { name: "Bolsa 12 Kg", weightKg: 12, desc: "Alto consumo para eventos" },
      { name: "Bolsa 17 Kg", weightKg: 17, desc: "Industrial / enfriamiento masivo" }
    ]
  },

  // Regiones Operativas Oficiales
  regions: [
    "Región Centro (Bogotá & Cundinamarca)",
    "Región Antioquia (Medellín & Valle de Aburrá)",
    "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)",
    "Región Oriente (Bucaramanga & Cúcuta)",
    "Región Occidente (Cali & Valle del Cauca)",
    "Centros Logísticos & Bodegas Nacionales"
  ],

  // Tiendas Oficiales agrupadas por REGIONES (Hoja GLN TADA)
  darkStores: [
    // 1. REGIÓN CENTRO
    { id: "191", name: "TIENDA 191 - AB INBEV I LOVE BEER", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 53A 127 35 P 7 (NIZA)", schedule: "9 AM - 5 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "223", name: "TIENDA 223 - TIENDAS TADA RESTREPO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 24 15 30 SUR (RESTREPO)", schedule: "10 AM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "262", name: "TIENDA 262 - TIENDAS TADA CALLE 75", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CRA 20 B NRO 75 12 LOCAL 105 (SAN FELIPE)", schedule: "12 PM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "268", name: "TIENDA 268 - TIENDAS TADA TABORA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 80 73 23 (TABORA)", schedule: "10 AM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "269", name: "TIENDA 269 - TIENDAS TADA LA ESPAÑOLA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 80 83 62 (ANDALUCIA)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "272", name: "TIENDA 272 - TIENDAS TADA CASTILLA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 78 08A 15 (CASTILLA)", schedule: "10 AM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "273", name: "TIENDA 273 - TIENDAS TADA CEDRITOS", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CR 19 150 36 (CEDRITOS)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "297", name: "TIENDA 297 - TIENDAS EXPRESS MONTEVIDEO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "Zona Logístik Cll 18 #69F-25", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" },
    { id: "320", name: "TIENDA 320 - TIENDAS TADA LAS FLORES", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 104 139 30 LC 01", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "321", name: "TIENDA 321 - TIENDAS TADA CRA 91 QUIRIGUA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 91 90 75 (QUIRIGUA)", schedule: "9 AM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "322", name: "TIENDA 322 - TIENDAS TADA NORMANDIA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CALLE 53 #70 74 (NORMANDIA)", schedule: "9 AM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "324", name: "TIENDA 324 - TIENDAS TADA ALQUERIA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 41 SUR 52 50 (ALQUERIA)", schedule: "9 AM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "325", name: "TIENDA 325 - TIENDAS TADA CLARET", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CARRERA 27 # 42-47 (CLARET)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "326", name: "TIENDA 326 - TIENDAS TADA SAN BERNARDINO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 87C 71B SUR 06 (BOSA)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "327", name: "TIENDA 327 - TIENDAS TADA TORREMOLINOS", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CL 26 SUR 70B 54 (KENNEDY)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "329", name: "TIENDA 329 - TIENDAS TADA SAN CRISTOBAL", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 163A 08H 54 (SAN CRISTOBAL NORTE)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "330", name: "TIENDA 330 - TIENDAS TADA ROMA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 57A SUR 80B 31 (ROMA)", schedule: "9 AM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "331", name: "TIENDA 331 - TIENDAS TADA LA VICTORIA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 37C SUR 03B 98 (LA VICTORIA)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "332", name: "TIENDA 332 - TIENDAS TADA BELLAVISTA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CR 70 68A 04 (ENGATIVA)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "333", name: "TIENDA 333 - TIENDAS TADA SAN FERNANDO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CL 68 55 30 (BARRIOS UNIDOS)", schedule: "9 AM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "334", name: "TIENDA 334 - TIENDAS TADA QUINTA PAREDES", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CL 24 40 88 LC 1 (TEUSAQUILLO)", schedule: "9 AM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "335", name: "TIENDA 335 - TIENDAS TADA SANTA BARBARA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV CL 116 16 24 (SANTA BARBARA)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "336", name: "TIENDA 336 - TIENDAS TADA MODELIA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV ESPERANZA 74A 26 (FONTIBON)", schedule: "12 PM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "337", name: "TIENDA 337 - TIENDAS TADA MARTIRES", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 9 26 56 (MARTIRES-RICAURTE)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "338", name: "TIENDA 338 - TIENDAS TADA PONTEVEDRA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 116 71C 12 (SUBA)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "339", name: "TIENDA 339 - TIENDAS TADA PRADERA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "AV. DE LAS AMERICAS # 64A - 39", schedule: "12 PM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "341", name: "TIENDA 341 - TIENDAS TADA PRADO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 129 54 32 (PRADO)", schedule: "12 PM - 6 PM", manager: "JHONATAN LAGO", phone: "315 7927874" },
    { id: "342", name: "TIENDA 342 - TIENDAS TADA GALERIAS", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 21 52A 28 (GALERIAS)", schedule: "12 PM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "343", name: "TIENDA 343 - TIENDAS TADA LA LAGUNA", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CL 16F 103B 09 (FONTIBON)", schedule: "10 AM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },
    { id: "344", name: "TIENDA 344 - TIENDAS TADA PERDOMO", region: "Región Centro (Bogotá & Cundinamarca)", city: "BOGOTÁ", address: "CR 72 65 SUR 35 (CIUDAD BOLIVAR)", schedule: "12 PM - 6 PM", manager: "JULIAN LOPEZ", phone: "305 3966429" },
    { id: "346", name: "TIENDA 346 - TIENDAS TADA SOACHA", region: "Región Centro (Bogotá & Cundinamarca)", city: "SOACHA", address: "CR 8 13 38 (BOCHICA)", schedule: "12 PM - 6 PM", manager: "DIEGO ARDILA", phone: "322 8036570" },

    // 2. REGIÓN ANTIOQUIA
    { id: "351", name: "TIENDA 351 - TIENDAS TADA ITAGUI CENTRO", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "ITAGUI", address: "CR 49 47 26", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "352", name: "TIENDA 352 - TIENDAS TADA SANTA MARIA", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "ITAGUI", address: "CR 52D 70 12", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "353", name: "TIENDA 353 - TIENDAS TADA ENVIGADO", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "ENVIGADO", address: "CL 37 SUR 41 17", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "354", name: "TIENDA 354 - TIENDAS TADA SABANETA", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "SABANETA", address: "CL 68 SUR 46 65", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "355", name: "TIENDA 355 - TIENDAS TADA BELEN MEDELLIN", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "MEDELLIN", address: "CL 30A 69 108", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "356", name: "TIENDA 356 - TIENDAS TADA FLORESTA MEDELLIN", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "MEDELLIN", address: "CL 48 79 46", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "357", name: "TIENDA 357 - TIENDAS TADA GUAYABAL MEDELLIN", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "MEDELLIN", address: "CR 52 8 SUR 61", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "358", name: "TIENDA 358 - TIENDAS TADA POBLADO MEDELLIN", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "MEDELLIN", address: "CR 41 9 64", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "360", name: "TIENDA 360 - TIENDAS TADA NIQUIA BELLO", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "BELLO", address: "AV 42B 51 47", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "361", name: "TIENDA 361 - TIENDAS TADA BELLO 2", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "BELLO", address: "CR 52 51 27", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },
    { id: "362", name: "TIENDA 362 - TIENDAS TADA BUENOS AIRES", region: "Región Antioquia (Medellín & Valle de Aburrá)", city: "MEDELLIN", address: "CL 49 36 20", schedule: "10 AM - 4 PM", manager: "ERIKA RICO", phone: "320 2103911" },

    // 3. REGIÓN COSTA CARIBE
    { id: "365", name: "TIENDA 365 - TIENDAS TADA CALLE 96 B/QUILLA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "BARRANQUILLA", address: "CL 96 46 73 (EL POBLADO)", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "367", name: "TIENDA 367 - TIENDAS TADA MALAMBO", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "MALAMBO", address: "CL 10 8 35", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "369", name: "TIENDA 369 - TIENDAS TADA INMACULADAS SOLEDAD", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "SOLEDAD", address: "CL 54 13C 53", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "370", name: "TIENDA 370 - TIENDAS TADA PUERTO COLOMBIA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "PUERTO COLOMBIA", address: "CL 2 5 58", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "371", name: "TIENDA 371 - TIENDAS TADA TABOR B/QUILLA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "BARRANQUILLA", address: "CL 76 43B 48", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "372", name: "TIENDA 372 - TIENDAS TADA EL PARQUE SOLEDAD", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "SOLEDAD", address: "CR 42 44 51", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "373", name: "TIENDA 373 - TIENDAS TADA HIPODROMO SOLEDAD", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "SOLEDAD", address: "CR 30 24 20 LC 1", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "374", name: "TIENDA 374 - TIENDAS TADA EL CARMEN B/QUILLA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "BARRANQUILLA", address: "CL 48 21 07", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "378", name: "TIENDA 378 - TIENDAS TADA CABRERO CARTAGENA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "CARTAGENA", address: "CR 2 43A 71 (CABRERO)", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "379", name: "TIENDA 379 - TIENDAS TADA TACARIGUA CARTAGENA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "CARTAGENA", address: "TV 54 MZ 1A LT 11", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "472", name: "TIENDA 472 - TIENDAS TADA TORICES CARTAGENA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "CARTAGENA", address: "Calle 37 14 51 (TORICES)", schedule: "10 AM - 6 PM", manager: "DESHIRET CHUSCANO", phone: "317 6574763" },
    { id: "383", name: "TIENDA 383 - TIENDAS TADA RODADERO STA MARTA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "SANTA MARTA", address: "CR 4 21 220 LC 08 09", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "384", name: "TIENDA 384 - TIENDAS TADA LIBERTADOR STA MARTA", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "SANTA MARTA", address: "TV 14 31 08", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "388", name: "TIENDA 388 - TIENDAS TADA SALGUERO VALLEDUPAR", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "VALLEDUPAR", address: "CR 7A 25 138 (CORTIJOS)", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },
    { id: "389", name: "TIENDA 389 - TIENDAS TADA CORTIJOS VALLEDUPAR", region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)", city: "VALLEDUPAR", address: "AV SIMON BOLIVAR CR 19 07D 25", schedule: "10 AM - 6 PM", manager: "YESSENIA MESA / LUIS PRETELT", phone: "316 0253229" },

    // 4. REGIÓN ORIENTE
    { id: "392", name: "TIENDA 392 - TIENDAS TADA PROVENZA BUCARAMANGA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "BUCARAMANGA", address: "CL 105 26A 93", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "393", name: "TIENDA 393 - TIENDAS TADA AURORA BUCARAMANGA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "BUCARAMANGA", address: "CR 33A 31A 20", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "442", name: "TIENDA 442 - TIENDAS TADA CAMPOHERMOSO", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "BUCARAMANGA", address: "CL 45 01 08", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "395", name: "TIENDA 395 - TIENDAS TADA LAGOS FLORIDABLANCA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "FLORIDABLANCA", address: "CR 29 31 68", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "396", name: "TIENDA 396 - TIENDAS TADA EDS PIEDECUESTA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "PIEDECUESTA", address: "KM 14 VIA PIE DE CUESTA", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "397", name: "TIENDA 397 - TIENDAS TADA ALTOS PAMPLONITA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "PAMPLONITA", address: "CL 6 9 65 LC 2", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "398", name: "TIENDA 398 - TIENDAS TADA ATALAYA CUCUTA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "CUCUTA", address: "MZ I5 LT 19", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "399", name: "TIENDA 399 - TIENDAS TADA MALECON CUCUTA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "CUCUTA", address: "CL 15 3E 145", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },
    { id: "400", name: "TIENDA 400 - TIENDAS TADA GUAIMARAL CUCUTA", region: "Región Oriente (Bucaramanga & Cúcuta)", city: "CUCUTA", address: "AV 11E 14N 62 LC 01", schedule: "10 AM - 5 PM", manager: "DANILO DIAZ", phone: "316 0253226" },

    // 5. REGIÓN OCCIDENTE
    { id: "401", name: "TIENDA 401 - TIENDAS TADA FLORESTA CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "CR 15 33E 57 LC 1 2", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },
    { id: "402", name: "TIENDA 402 - TIENDAS TADA CRA 66 LIMONAR CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "CR 66 9 54", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },
    { id: "404", name: "TIENDA 404 - TIENDAS TADA LA FLORA CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "AV 6 NTE 45 60", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },
    { id: "405", name: "TIENDA 405 - TIENDAS TADA OLIMPICO CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "CR 39 10A 03", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },
    { id: "407", name: "TIENDA 407 - TIENDAS TADA CIUDAD JARDIN CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "CL 13 101 59", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },
    { id: "408", name: "TIENDA 408 - TIENDAS TADA CEIBAS CALI", region: "Región Occidente (Cali & Valle del Cauca)", city: "CALI", address: "CL 70 NORTE 7R 26", schedule: "10 AM - 4 PM", manager: "LUISA OROZCO / YEFFERSON OROZCO", phone: "319 7152318" },

    // 6. CENTROS LOGÍSTICOS
    { id: "474", name: "LOGISTICA NO BEER BARRANQUILLA", region: "Centros Logísticos & Bodegas Nacionales", city: "BARRANQUILLA", address: "Km 2 Via la Cordialidad Poligono Galpark", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" },
    { id: "475", name: "LOGISTICA NO BEER BUCARAMANGA", region: "Centros Logísticos & Bodegas Nacionales", city: "BUCARAMANGA", address: "Km 7 via Palenque-café Parque Ind II", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" },
    { id: "476", name: "LOGISTICA NO BEER CALI", region: "Centros Logísticos & Bodegas Nacionales", city: "CALI", address: "CR 8 #29-34 Zona Ind los Mangos", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" },
    { id: "477", name: "LOGISTICA NO BEER CUCUTA", region: "Centros Logísticos & Bodegas Nacionales", city: "CUCUTA", address: "Centro Empresarial Boconó Bodega 19", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" },
    { id: "478", name: "LOGISTICA NO BEER MEDELLIN", region: "Centros Logísticos & Bodegas Nacionales", city: "MEDELLIN", address: "Cra. 41 #32-30 Itagüí", schedule: "ASIGNACION DE CITA", manager: "XIMENA ACOSTA", phone: "300 5172222" }
  ],

  // CTMs Oficiales Kopps Beer Tiendas & BEES
  ctms: [
    {
      code: "CTM-KOPPS-2026-081",
      title: "CTM Actual Kopps- Beer Tiendas (Suministro de Hielo)",
      category: "Suministro Hielo Tiendas (2, 10, 12, 17 Kg)",
      budgetTotal: 48000000,
      budgetSpent: 29840000,
      startDate: "2026-01-01",
      endDate: "2026-12-31",
      status: "Vigente",
      responsible: "Jazmin Garcia Castro - Operaciones TaDa",
      pdfFile: "CTM_Kopps_Beer_Tiendas_Hielo_2026.pdf",
      description: "Contrato marco para solicitud y suministro de hielo en presentaciones de 2 Kg, 10 Kg, 12 Kg y 17 Kg para la red nacional de Tiendas TaDa Kopps. Corte 11:00 AM para despacho el mismo día."
    },
    {
      code: "CTM-BEES-2026-042",
      title: "CTM Actual Kopps- BEES (Abastecimiento y Plataforma)",
      category: "BEES Operaciones",
      budgetTotal: 36000000,
      budgetSpent: 18200000,
      startDate: "2026-01-15",
      endDate: "2026-12-31",
      status: "Vigente",
      responsible: "Jefes Regionales BEES",
      pdfFile: "CTM_Kopps_BEES_Agosto_2026.pdf",
      description: "Contrato de abastecimiento articulado con la plataforma BEES para reposición programada en puntos de venta."
    },
    {
      code: "CTM-TRP-2026-112",
      title: "Transporte Primario y Despachos Centralizados Cervecería",
      category: "Transporte Centralizado",
      budgetTotal: 180000000,
      budgetSpent: 94200000,
      startDate: "2026-01-01",
      endDate: "2026-12-31",
      status: "Vigente",
      responsible: "Torre de Control Siberia",
      pdfFile: "CTM_TRP_2026_112_Transporte_Primario.pdf",
      description: "Movilización de tractomulas y camiones de distribución desde cervecerías Tocancipá, Bucaramanga y Cervecería del Valle hacia Tiendas TaDa."
    },
    {
      code: "CTM-TAT-2026-008",
      title: "Dotación TAT, Merchandising & Insumos TaDa 2026",
      category: "Pedidos TAT",
      budgetTotal: 65000000,
      budgetSpent: 38100000,
      startDate: "2026-03-01",
      endDate: "2026-12-31",
      status: "Vigente",
      responsible: "Trade Marketing TaDa Colombia",
      pdfFile: "CTM_TAT_2026_008_POP_Insumos.pdf",
      description: "Dotación oficial para repartidores, cristalería cervecera oficial, avisos y bolsas térmicas TaDa Delivery."
    }
  ],

  // Pedidos de Hielo Iniciales
  iceOrders: [
    {
      id: "HLO-2026-1045",
      poc: "TIENDA 273 - TIENDAS TADA CEDRITOS",
      region: "Región Centro (Bogotá & Cundinamarca)",
      city: "BOGOTÁ",
      deliveryDate: "2026-08-16",
      iceType: "Bolsa 2 Kg",
      quantity: 50,
      kilos: 100,
      window: "Mañana (07:00 - 11:00)",
      ctm: "CTM-KOPPS-2026-081",
      priority: "Urgente",
      status: "En Ruta",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      contact: "JHONATAN LAGO (315 7927874)",
      createdAt: "2026-08-15 09:30",
      notes: "Radicado antes de las 11:00 AM. Cargar por bahía posterior."
    },
    {
      id: "HLO-2026-1044",
      poc: "TIENDA 358 - TIENDAS TADA POBLADO MEDELLIN",
      region: "Región Antioquia (Medellín & Valle de Aburrá)",
      city: "MEDELLIN",
      deliveryDate: "2026-08-16",
      iceType: "Bolsa 10 Kg",
      quantity: 30,
      kilos: 300,
      window: "Tarde (13:00 - 17:00)",
      ctm: "CTM-KOPPS-2026-081",
      priority: "Normal",
      status: "Aprobado",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      contact: "ERIKA RICO (320 2103911)",
      createdAt: "2026-08-15 10:15",
      notes: "Stock regular para reposición de neveras."
    },
    {
      id: "HLO-2026-1043",
      poc: "TIENDA 365 - TIENDAS TADA CALLE 96 B/QUILLA",
      region: "Región Costa Caribe (Barranquilla, Cartagena, Sta Marta, Valledupar)",
      city: "BARRANQUILLA",
      deliveryDate: "2026-08-15",
      iceType: "Bolsa 12 Kg",
      quantity: 25,
      kilos: 300,
      window: "Mañana (07:00 - 11:00)",
      ctm: "CTM-KOPPS-2026-081",
      priority: "Normal",
      status: "Entregado",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      contact: "DESHIRET CHUSCANO (317 6574763)",
      createdAt: "2026-08-14 10:45",
      notes: "Recibido a conformidad en turno mañana."
    },
    {
      id: "HLO-2026-1042",
      poc: "TIENDA 407 - TIENDAS TADA CIUDAD JARDIN CALI",
      region: "Región Occidente (Cali & Valle del Cauca)",
      city: "CALI",
      deliveryDate: "2026-08-17",
      iceType: "Bolsa 17 Kg",
      quantity: 20,
      kilos: 340,
      window: "Madrugada Especial (05:00 - 07:00)",
      ctm: "CTM-KOPPS-2026-081",
      priority: "Urgente",
      status: "Pendiente",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      contact: "LUISA OROZCO (319 7152318)",
      createdAt: "2026-08-15 10:50",
      notes: "Enfriamiento veloz para cervezas importadas (Corona / Stella)."
    }
  ],

  // Catálogo TAT
  iaiCatalog: [
    { id: "TAT-001", name: "Nevera Exhibidora TaDa Magic 350L", category: "Refrigeración", sku: "EQ-FR-350", stockAvailable: 14, desc: "Vitrina vertical con iluminación LED morada para tiendas." },
    { id: "TAT-002", name: "Kit Vasos Cervecero TaDa & Bavaria (Caja x48)", category: "Merchandising", sku: "MK-GL-048", stockAvailable: 85, desc: "Cristalería grabada para promocionales." },
    { id: "TAT-003", name: "Mochila Térmica Repartidor TaDa Impermeable", category: "Dotación", sku: "DT-BK-001", stockAvailable: 60, desc: "Maletín ergonómico con aislamiento térmico para entrega de cervezas frías." },
    { id: "TAT-004", name: "Chaqueta Cortaviento TaDa Delivery", category: "Dotación", sku: "DT-JK-002", stockAvailable: 120, desc: "Dotación oficial morada con reflectivos para coordinadores y repartidores." },
    { id: "TAT-005", name: "Cinta de Seguridad y Embalaje TaDa (Pack x12)", category: "Operaciones", sku: "OP-TP-012", stockAvailable: 240, desc: "Cinta adhesiva de alta resistencia para bolsas de entrega." }
  ],

  // Solicitudes TAT
  iaiOrders: [
    {
      id: "TAT-2026-0104",
      poc: "TIENDA 273 - TIENDAS TADA CEDRITOS",
      region: "Región Centro (Bogotá & Cundinamarca)",
      itemsSummary: "Mochila Térmica (x4), Cinta Seguridad (x3), Kit Vasos (x2)",
      totalUnits: 9,
      costCenter: "CC-TADA-KOPPS-01",
      status: "Aprobado",
      dateRequested: "2026-08-14",
      dateEstimated: "2026-08-18",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      justification: "Reposición de dotación para turno nocturno."
    },
    {
      id: "TAT-2026-0103",
      poc: "TIENDA 355 - TIENDAS TADA BELEN MEDELLIN",
      region: "Región Antioquia (Medellín & Valle de Aburrá)",
      itemsSummary: "Nevera Exhibidora 350L (x1)",
      totalUnits: 1,
      costCenter: "CC-TADA-KOPPS-01",
      status: "Despachado",
      dateRequested: "2026-08-12",
      dateEstimated: "2026-08-16",
      requestedBy: "Jazmin.garciaC-ext@ab-inbev.com",
      justification: "Expansión de capacidad de frío en sede Belén."
    }
  ],

  // Pedidos Centralizados
  centralOrders: [
    {
      id: "CEN-2026-0312",
      origin: "Planta Tocancipá (Cundinamarca)",
      destination: "HUB BOG-01 Siberia Central (TaDa Bogotá)",
      sku: "Corona Extra 355ml Vidrio (Caja x24)",
      pallets: 18,
      totalBoxes: 1296,
      ctm: "CTM-TRP-2026-112",
      truckPlate: "WKM-482 (Tractomula Bavaria)",
      arrivalDeadline: "2026-08-17",
      status: "En Tránsito",
      dispatchedBy: "Planta Tocancipá - Torre Despachos",
      priority: "Alta Demanda"
    },
    {
      id: "CEN-2026-0311",
      origin: "Microcervecería BBC Tocancipá",
      destination: "HUB BOG-01 Siberia Central",
      sku: "BBC Monserrate Roja 330ml (Caja x24)",
      pallets: 8,
      totalBoxes: 576,
      ctm: "CTM-TRP-2026-112",
      truckPlate: "SQN-901 (Furgón Frío)",
      arrivalDeadline: "2026-08-16",
      status: "Recibido en HUB",
      dispatchedBy: "Cervecería BBC",
      priority: "Normal"
    }
  ],

  // Calendario Operativo
  calendarEvents: [
    { date: "2026-08-17", type: "holiday", title: "🔴 Día Festivo: Asunción de la Virgen", desc: "Despachos anticipados obligatorios en toda la red." },
    { date: "2026-08-18", type: "cutoff", title: "⏰ Corte Diario Hielo (11:00 AM)", desc: "Límite para radicar solicitudes con despacho el mismo día." },
    { date: "2026-08-19", type: "caja", title: "🟣 Envío Arqueos de Caja Tiendas TaDa", time: "12:00 PM", desc: "Envío semanal de arqueos de caja y reporte de ingresos." },
    { date: "2026-08-20", type: "cutoff", title: "🟡 Corte Fin de Semana Hielo (Jueves 18:00)", desc: "Consolidación general para picos de venta de fin de semana." },
    { date: "2026-08-21", type: "factura", title: "🔵 Entrega Factura de la Temporal", time: "05:00 PM", desc: "Recepción y validación de facturas de personal temporal." },
    { date: "2026-08-26", type: "caja", title: "🟣 Envío Arqueos de Caja Tiendas TaDa", time: "12:00 PM", desc: "Cierre y reporte semanal." },
    { date: "2026-08-28", type: "factura", title: "🔵 Cierre Mensual de Facturas CTM Kopps", desc: "Validación de remisiones CTM-KOPPS-2026-081 en Coupa." }
  ],

  // Novedades
  announcements: [
    {
      id: "ANN-001",
      title: "Horario Límite de Corte: Solicitudes de Hielo hasta las 11:00 AM",
      date: "15 de Agosto, 2026",
      priority: "Alta",
      author: "JAZMIN GARCIACASTRO - Operaciones TaDa",
      category: "Operaciones",
      content: "Para garantizar que el hielo salga a despacho el mismo día, todas las solicitudes deben radicarse máximo hasta las 11:00 AM en la plataforma. Las presentaciones habilitadas por CTM son 2 Kg, 10 Kg, 12 Kg y 17 Kg."
    },
    {
      id: "ANN-002",
      title: "Recordatorio: Envío de Arqueos de Caja (Miércoles 12:00 p.m.)",
      date: "14 de Agosto, 2026",
      priority: "Corte Especial",
      author: "Control Interno Kopps Commercial",
      category: "Finanzas",
      content: "Todos los miércoles antes de las 12:00 p.m. se debe realizar el Envío de Arqueos de Caja de cada tienda. Las facturas de personal temporal se reciben los viernes conforme al calendario operativo."
    }
  ]
};
