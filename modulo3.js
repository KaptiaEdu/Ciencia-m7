// ============================================================================= 
// ETAPA 3: CUIDADO AMBIENTAL Y SIMULADOR 7,0 (100% AUTOSUFICIENTE Y VISUAL)
// =============================================================================
window.MODULO_3 = {
  id: "m3",
  icon: "🌊",
  tag: "Etapa 3 • Cuidado Ambiental + Prueba",
  tagClass: "tag-purple",
  title: "Cuidado Ambiental y Simulador 7,0",
  desc: "Recursos naturales, lago contaminado, derrame de petróleo, protección de la chinchilla, reservas nacionales, veda y Prueba Final.",
  steps: [
    {
      label: "1. Entrenamiento 🌍",
      type: "training",
      items: [
        {
          visualChain: [
            { icon: "🪵", label: "Madera" },
            { icon: "🥩", label: "Carne" },
            { icon: "🥬", label: "Vegetales" },
            { icon: "🪨", label: "Minerales" }
          ],
          title: "Los ecosistemas pueden dañarse",
          text: "El ser humano obtiene recursos como madera, carne, vegetales y minerales de los ecosistemas para satisfacer sus necesidades. Pero cuando extrae estos recursos sin precauciones, provoca graves daños e incluso la desaparición de especies y ecosistemas completos.",
          highlight: "Actividades que dañan si se hacen sin cuidados: agricultura, caza indiscriminada y tala indiscriminada."
        },
        {
          scene: "lago_toxico",
          title: "Intervención humana en Chile",
          text: "En Chile se han dañado muchos ecosistemas por la intervención humana sin cuidados, generando graves alteraciones en el entorno y los seres vivos. Si una empresa arroja desechos tóxicos a un lago: mueren muchos peces, disminuyen las plantas acuáticas y las aves migran a otro sitio.",
          highlight: "La contaminación del agua afecta a toda la vida del lago: plantas acuáticas, peces y aves."
        },
        {
          scene: "petroleo",
          title: "Contaminación del ecosistema marino",
          text: "Si un barco derrama petróleo en el mar, este combustible CONTAMINA el ecosistema y perjudica gravemente a los animales y las plantas marinas. El petróleo derramado NO es alimento ni una fuente beneficiosa de energía para los seres vivos.",
          highlight: "Recuerda: el petróleo derramado CONTAMINA y perjudica animales y plantas marinas."
        },
        {
          scene: "chinchilla",
          title: "Protección de los seres vivos y del medio ambiente",
          text: "La chinchilla está en peligro de extinción porque se ha usado su pelaje para fabricar sombreros y abrigos. Para protegerla debemos PROHIBIR la caza indiscriminada. Otra gran medida es declarar áreas como RESERVAS NACIONALES.",
          highlight: "NO son medidas adecuadas: talar bosques sin control, cazar especies en peligro ni pescar mariscos en períodos de veda."
        }
      ]
    },

    {
      label: "2. Predicción ✓ 🏞️",
      type: "multi_select",
      items: [
        {
          scene: "lago_toxico",
          question: "Observa este lago: si una empresa comenzara a arrojar sus desechos tóxicos al agua, ¿qué efectos tendría en el ecosistema?",
          context: "Marca con un ✓ TODAS las consecuencias verdaderas (hay 3 correctas):",
          options: [
            { text: "Aumentaría la cantidad de peces.", correct: false },
            { text: "Las aves podrían migrar a otro sitio.", correct: true },
            { text: "Llegarían muchas aves a vivir al lago.", correct: false },
            { text: "Las plantas acuáticas podrían disminuir.", correct: true },
            { text: "Podrían morir muchos peces.", correct: true }
          ],
          hint: "Mira la imagen: el veneno en el agua mata peces, hace disminuir las plantas acuáticas y obliga a las aves a migrar a otro lugar sano. Marca las 3 correctas.",
          explain: "Exacto: ante desechos tóxicos en el lago, mueren muchos peces, disminuyen las plantas acuáticas y las aves migran a otro sitio."
        },
        {
          scene: "chinchilla",
          question: "¿Cuáles de las siguientes SON medidas ADECUADAS para proteger a los seres vivos y al medio ambiente?",
          context: "Marca con un ✓ solo las medidas que SÍ cuidan la naturaleza (hay 2 correctas):",
          options: [
            { text: "Prohibir la caza indiscriminada de animales como la chinchilla.", correct: true },
            { text: "Talar bosques sin control.", correct: false },
            { text: "Declarar áreas como reservas nacionales para proteger a los organismos.", correct: true },
            { text: "Cazar animales en peligro de extinción.", correct: false },
            { text: "Pescar mariscos durante los períodos de veda.", correct: false }
          ],
          hint: "Solo 2 opciones protegen la vida: prohibir la caza indiscriminada y declarar reservas nacionales.",
          explain: "¡Muy bien! Prohibir la caza indiscriminada y declarar reservas nacionales son medidas adecuadas de protección ambiental."
        }
      ]
    },

    {
      label: "3. Completar Frases ✍️",
      type: "fill_blank",
      items: [
        {
          scene: "petroleo",
          sentence: "Si un barco derrama petróleo en el mar, este combustible _____ el ecosistema y puede perjudicar a los animales y las plantas marinas.",
          bank: ["contamina", "alimenta", "protege", "ilumina"],
          correct: "contamina",
          hint: "Mira la mancha negra en el agua: el petróleo no es alimento ni energía beneficiosa; ensucia y daña el mar.",
          explain: "¡Exacto! El petróleo derramado CONTAMINA el ecosistema marino y perjudica a animales y plantas."
        },
        {
          scene: "chinchilla",
          sentence: "La chinchilla está en peligro de extinción porque se ha usado su pelaje para fabricar sombreros y abrigos. Una medida adecuada para protegerla es _____ indiscriminada.",
          bank: ["prohibir la caza", "aumentar la caza", "talar los bosques", "derramar petróleo"],
          correct: "prohibir la caza",
          hint: "Si la cazan por su pelaje, ¿qué debemos hacer para detener esa caza indiscriminada?",
          explain: "¡Correcto! Una medida adecuada para proteger a la chinchilla es prohibir la caza indiscriminada."
        },
        {
          scene: "chinchilla",
          sentence: "Otra medida de protección del medio ambiente es declarar áreas como _____, para proteger a los organismos que viven allí.",
          bank: ["reservas nacionales", "fábricas tóxicas", "zonas de tala", "basurales marinos"],
          correct: "reservas nacionales",
          hint: "Son zonas especiales protegidas por el país donde los animales y plantas viven seguros.",
          explain: "¡Muy bien! Declarar áreas como reservas nacionales protege a los organismos y sus hábitats."
        },
        {
          scene: "mar_veda",
          sentence: "No es una medida adecuada pescar mariscos durante los períodos de _____.",
          bank: ["veda", "fotosíntesis", "lluvia", "invierno"],
          correct: "veda",
          hint: "Es el período en que está prohibido extraer un recurso marino para dejarlo reproducirse y crecer.",
          explain: "¡Perfecto! Respetar los períodos de veda evita que desaparezcan los mariscos y protege las cadenas marinas."
        }
      ]
    },

    {
      label: "4. Desafíos Ambientales 🎯",
      type: "quiz",
      items: [
        {
          visualChain: [
            { icon: "🪵", label: "Madera" },
            { icon: "🥩", label: "Carne" },
            { icon: "🥬", label: "Vegetales" },
            { icon: "🪨", label: "Minerales" }
          ],
          question: "¿Cuáles son ejemplos de recursos que el ser humano obtiene de los ecosistemas para su vida cotidiana?",
          options: [
            "La madera, la carne, los vegetales y los minerales",
            "El petróleo derramado y los desechos tóxicos",
            "Los plásticos y las bolsas de basura",
            "Solo el agua embotellada"
          ],
          correct: "La madera, la carne, los vegetales y los minerales",
          hint: "Mira las 4 tarjetas naturales que aparecen arriba.",
          explain: "La madera, la carne, los vegetales y los minerales provienen de distintos ecosistemas."
        },
        {
          visualChain: [
            { icon: "🚜", label: "Agricultura sin cuidados", style: "alert" },
            { icon: "🎯", label: "Caza indiscriminada", style: "alert" },
            { icon: "🪓", label: "Tala indiscriminada", style: "alert" }
          ],
          question: "¿Qué actividades humanas dañan nuestro ecosistema cuando se realizan sin los cuidados correspondientes?",
          options: [
            "Agricultura sin cuidados, caza indiscriminada y tala indiscriminada",
            "Crear reservas nacionales y respetar las vedas",
            "Plantar árboles nativos y reciclar basura",
            "Observar aves sin molestarlas"
          ],
          correct: "Agricultura sin cuidados, caza indiscriminada y tala indiscriminada",
          hint: "Observa las tres actividades dañinas destacadas arriba.",
          explain: "Cuando se realizan sin cuidados, la agricultura, la caza indiscriminada y la tala indiscriminada dañan gravemente los ecosistemas."
        },
        {
          scene: "petroleo",
          question: "Observa el derrame: ¿el petróleo derramado por un barco en el mar sirve como alimento o energía beneficiosa para los seres vivos?",
          options: [
            "No, el petróleo derramado no es alimento ni una fuente beneficiosa de energía; contamina y perjudica",
            "Sí, alimenta al fitoplancton y hace crecer más peces",
            "Sí, sirve como energía saludable para las estrellas de mar",
            "No hace nada, desaparece sin afectar a ningún ser vivo"
          ],
          correct: "No, el petróleo derramado no es alimento ni una fuente beneficiosa de energía; contamina y perjudica",
          hint: "El petróleo es un combustible tóxico en el agua: mancha y daña a peces, aves y algas.",
          explain: "El petróleo derramado contamina el ecosistema marino y perjudica a animales y plantas; jamás es alimento ni energía beneficiosa."
        },
        {
          scene: "chinchilla",
          question: "¿Por qué la chinchilla se encuentra en peligro de extinción?",
          options: [
            "Porque se ha utilizado su pelaje para fabricar sombreros y abrigos",
            "Porque come demasiado fitoplancton del mar",
            "Porque vive dentro de reservas nacionales protegidas",
            "Porque la lagartija exótica le quitó su alimento"
          ],
          correct: "Porque se ha utilizado su pelaje para fabricar sombreros y abrigos",
          hint: "Piensa por qué los cazadores la perseguían indiscriminadamente: por su suave pelaje.",
          explain: "La caza indiscriminada para usar su pelaje en sombreros y abrigos puso a la chinchilla en peligro de extinción."
        },
        {
          scene: "mar_veda",
          question: "¿Cuál de estas opciones agrupa acciones que NO son medidas adecuadas para proteger el medio ambiente?",
          options: [
            "Talar bosques sin control, cazar animales en peligro o pescar mariscos en períodos de veda",
            "Declarar áreas como reservas nacionales",
            "Prohibir la caza indiscriminada de la chinchilla",
            "Evitar arrojar desechos tóxicos a los lagos"
          ],
          correct: "Talar bosques sin control, cazar animales en peligro o pescar mariscos en períodos de veda",
          hint: "Busca el grupo de 3 acciones que destruyen bosques o especies marinas y terrestres.",
          explain: "Talar sin control, cazar animales en peligro y pescar en veda destruyen el equilibrio natural."
        },
        {
          scene: "lago_toxico",
          question: "¿Qué consecuencias ha tenido la intervención humana sin cuidados en muchos ecosistemas de Chile?",
          options: [
            "Graves alteraciones en el entorno y en los seres vivos que lo habitan",
            "Que aparezcan muchas más especies en los lagos contaminados",
            "Que las plantas ya no necesiten la luz del Sol",
            "Ningún cambio en el entorno natural"
          ],
          correct: "Graves alteraciones en el entorno y en los seres vivos que lo habitan",
          hint: "Mira cómo la contaminación cambia el agua, las plantas y los animales que viven allí.",
          explain: "En Chile, la intervención humana sin precauciones ha dañado muchos ecosistemas, generando graves alteraciones en el entorno y los seres vivos."
        }
      ]
    },

    {
      label: "5. Mi Compromiso ✍️",
      type: "pledge",
      items: [
        {
          title: "¡Tu Compromiso con el Planeta!",
          prompt: "Cualquier acción humana sin cuidados puede dañar un ecosistema. Elige una idea o escribe tu propia acción para cuidar el planeta y fírmala:",
          ideas: [
            "No botar basura en playas, lagos ni parques y reciclar en mi casa",
            "Cuidar el agua, plantar árboles y respetar a todos los animales",
            "No hacer fogatas en bosques para evitar incendios forestales",
            "Cuidar la flora y fauna chilena y proteger nuestras reservas nacionales"
          ]
        }
      ]
    },

    // =========================================================================
    // BLOQUE 6: SIMULADOR DE PRUEBA REAL (18 PREGUNTAS — TODAS CON APOYO VISUAL)
    // =========================================================================
    {
      label: "6. Prueba Final 🏆",
      type: "simulator",
      items: [
        {
          visualChain: [
            { icon: "☀️", label: "Energía del Sol", style: "extra" },
            { icon: "💧", label: "Agua" },
            { icon: "🌿", label: "Planta fabrica alimento", badge: "❓ Proceso", badgeColor: "blue", style: "focus" }
          ],
          question: "¿Cómo se llama el proceso por el cual las plantas (productores) fabrican su propio alimento usando energía del Sol?",
          options: ["Fotosíntesis", "Descomposición", "Migración", "Veda"],
          correct: "Fotosíntesis",
          explain: "Las plantas (productores) producen su alimento captando energía del Sol mediante la fotosíntesis."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Productor", badge: "Inicio", badgeColor: "green", style: "focus" },
            { icon: "🐇", label: "Herbívoro" },
            { icon: "🦊", label: "Carnívoro" }
          ],
          question: "¿Con qué otro nombre se conoce a los productores y dónde comienzan TODAS las cadenas alimentarias?",
          options: [
            "Organismos autótrofos, y todas las cadenas comienzan en los productores",
            "Organismos carnívoros, y las cadenas comienzan en el puma",
            "Organismos descomponedores, y las cadenas comienzan en las bacterias",
            "Organismos omnívoros, y las cadenas comienzan en el ser humano"
          ],
          correct: "Organismos autótrofos, y todas las cadenas comienzan en los productores",
          explain: "Los productores también se llaman autótrofos y siempre inician toda cadena alimentaria."
        },
        {
          visualChain: [
            { icon: "🥗", label: "Plantas" },
            { icon: "🥩", label: "Animales" },
            { icon: "🐻", label: "Come de ambos", badge: "❓ Tipo", badgeColor: "blue", style: "focus" }
          ],
          question: "Dentro de los consumidores, ¿cómo se llaman los animales que se alimentan tanto de plantas como de otros animales?",
          options: ["Omnívoros", "Herbívoros", "Carnívoros", "Productores"],
          correct: "Omnívoros",
          explain: "Los omnívoros se alimentan de animales y plantas (herbívoros = solo plantas; carnívoros = otros animales)."
        },
        {
          visualChain: [
            { icon: "🍂", label: "Restos y desechos" },
            { icon: "🍄🦠", label: "Hongos y bacterias", badge: "❓ Rol", badgeColor: "amber", style: "focus" },
            { icon: "🌿", label: "Nutrientes" }
          ],
          question: "¿Qué rol cumplen los hongos y las bacterias en un ecosistema?",
          options: [
            "Descomponedores: transforman restos y desechos en sustancias que vuelven a usar los productores",
            "Productores: hacen fotosíntesis con la luz del Sol",
            "Consumidores carnívoros: cazan animales grandes",
            "Consumidores herbívoros: comen solo hojas de arbustos"
          ],
          correct: "Descomponedores: transforman restos y desechos en sustancias que vuelven a usar los productores",
          explain: "Hongos y bacterias son descomponedores: descomponen la materia y la reincorporan al ecosistema."
        },
        {
          visualChain: [
            { icon: "🍎🥦", label: "Plantas" },
            { icon: "🍗🐟", label: "Animales" },
            { icon: "🧒", label: "Ser humano", badge: "❓ Rol", badgeColor: "blue", style: "focus" }
          ],
          question: "¿En cuál grupo clasificarías al ser humano y por qué?",
          options: [
            "Consumidor (omnívoro), porque se alimenta de otros seres vivos (plantas y animales)",
            "Productor, porque prepara su propia comida",
            "Descomponedor, porque recicla residuos",
            "Autótrofo, porque toma sol en verano"
          ],
          correct: "Consumidor (omnívoro), porque se alimenta de otros seres vivos (plantas y animales)",
          explain: "El ser humano no hace fotosíntesis; obtiene su energía comiendo otros seres vivos (plantas y animales), por lo que es consumidor omnívoro."
        },
        {
          scene: "altiplano",
          question: "Observa este ecosistema del Altiplano chileno: ¿cuál de estos organismos es un PRODUCTOR?",
          options: ["Llaretas", "Guanacos", "Cóndor", "Bacterias"],
          correct: "Llaretas",
          explain: "Las llaretas son plantas (productores). Guanacos, cóndor, zorro y flamencos son consumidores, y las bacterias son descomponedores."
        },
        {
          visualChain: [
            { icon: "🌱", label: "Pasto", arrow: "➔ ❓" },
            { icon: "🦙", label: "Guanaco", arrow: "➔ ❓" },
            { icon: "🐆", label: "Puma" }
          ],
          question: "En una cadena alimentaria como esta, ¿qué representan las flechas (➔)?",
          options: [
            "Hacia dónde fluye la energía, es decir, quién sirve de alimento a quién",
            "El camino por donde caminan los animales",
            "Qué animal es más rápido que el otro",
            "Desde el depredador más grande hacia la planta"
          ],
          correct: "Hacia dónde fluye la energía, es decir, quién sirve de alimento a quién",
          explain: "Las flechas muestran el flujo de energía: desde quien sirve de alimento hacia quien se lo come."
        },
        {
          visualChain: [
            { icon: "🐆", label: "Puma", arrow: "•" },
            { icon: "🌿", label: "Planta", arrow: "•" },
            { icon: "🐇", label: "Liebre" }
          ],
          question: "Si queremos ordenar a la Planta, la Liebre y el Puma en una cadena alimentaria, ¿cuál es el orden correcto?",
          options: [
            "PLANTA ➔ LIEBRE ➔ PUMA",
            "PUMA ➔ LIEBRE ➔ PLANTA",
            "LIEBRE ➔ PLANTA ➔ PUMA",
            "PUMA ➔ PLANTA ➔ LIEBRE"
          ],
          correct: "PLANTA ➔ LIEBRE ➔ PUMA",
          explain: "Siempre inicia el productor (Planta), luego el herbívoro (Liebre) y finalmente el carnívoro (Puma)."
        },
        {
          visualChain: [
            { icon: "☀️", label: "Sol", style: "extra" },
            { icon: "🌱", label: "Pasto", badge: "❓", badgeColor: "blue", style: "focus" },
            { icon: "🦌", label: "Pudú" },
            { icon: "🐆", label: "Puma" }
          ],
          question: "Observa esta cadena: ¿quiénes aprovechan la energía que proviene del Sol y cómo se llaman?",
          options: [
            "El pasto (las plantas) y se llaman productores",
            "El pudú y el puma, y se llaman consumidores",
            "Solo el puma, y se llama carnívoro",
            "Las bacterias, y se llaman descomponedores"
          ],
          correct: "El pasto (las plantas) y se llaman productores",
          explain: "El pasto aprovecha la energía solar mediante fotosíntesis y corresponde a los productores."
        },
        {
          visualChain: [
            { icon: "☀️", label: "Sol", style: "extra" },
            { icon: "🌱", label: "Pasto" },
            { icon: "🦌", label: "Pudú" },
            { icon: "🐆", label: "Puma", badge: "¿Qué come?", badgeColor: "blue", style: "focus" }
          ],
          question: "Observa las flechas de esta cadena alimentaria: ¿de quién se alimenta el puma?",
          options: ["Del pudú", "Del pasto", "Del Sol", "De las llaretas"],
          correct: "Del pudú",
          explain: "La flecha llega desde el pudú hacia el puma, indicando que el pudú es alimento del puma."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue" },
            { icon: "🍄🦠", label: "Hongos y bacterias", style: "extra" }
          ],
          question: "Observa estos organismos: ¿cuál es su clasificación correcta en Productores (P), Consumidores (C) y Descomponedores (D)?",
          options: [
            "Planta (P); Escarabajo, Lagartija y Chingue (C); Hongos y bacterias (D)",
            "Planta y Escarabajo (P); Lagartija (C); Chingue y Hongos (D)",
            "Chingue (P); Planta y Lagartija (C); Escarabajo (D)",
            "Todos son Consumidores (C) menos el Chingue (P)"
          ],
          correct: "Planta (P); Escarabajo, Lagartija y Chingue (C); Hongos y bacterias (D)",
          explain: "Solo la planta es Productor (P); los tres animales son Consumidores (C); hongos y bacterias son Descomponedores (D)."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "❓ ¿Qué pasa?", badgeColor: "blue", style: "focus" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue", badge: "⬇️ Baja a la mitad", badgeColor: "red", style: "alert" }
          ],
          question: "Observa esta cadena: si los chingues disminuyen a la mitad por caza indiscriminada, ¿qué podría ocurrir con la cantidad de escarabajos?",
          options: [
            "Los escarabajos DISMINUIRÍAN, porque al haber menos chingues aumentan las lagartijas que se los comen",
            "Los escarabajos aumentarían porque nadie los caza",
            "Los escarabajos empezarían a comer chingues",
            "No ocurriría ningún cambio con los escarabajos"
          ],
          correct: "Los escarabajos DISMINUIRÍAN, porque al haber menos chingues aumentan las lagartijas que se los comen",
          explain: "Efecto dominó: menos chingues ➔ más lagartijas ➔ menos escarabajos."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta", badge: "🔥 Incendio", badgeColor: "red", style: "alert" },
            { icon: "🪲", label: "Escarabajo", badge: "❓", badgeColor: "blue" },
            { icon: "🦎", label: "Lagartija", badge: "❓", badgeColor: "blue" },
            { icon: "🦨", label: "Chingue", badge: "❓", badgeColor: "blue" }
          ],
          question: "Si disminuye drásticamente el número de plantas por un incendio forestal, ¿qué ocurre con los demás organismos de esta cadena?",
          options: [
            "Disminuiría la cantidad de todos los organismos de la cadena por falta de alimento base",
            "Aumentarían las lagartijas y los chingues",
            "Solo disminuirían las bacterias",
            "Los animales no se verían afectados"
          ],
          correct: "Disminuiría la cantidad de todos los organismos de la cadena por falta de alimento base",
          explain: "Sin productores al inicio de la cadena, disminuyen los escarabajos, luego las lagartijas y finalmente los chingues."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "❓", badgeColor: "blue", style: "focus" },
            { icon: "🦎➕🦎", label: "Lagartija nativa + Exótica", badge: "⚠️ Ambas comen escarabajos", badgeColor: "amber", style: "extra" },
            { icon: "🦨", label: "Chingue" }
          ],
          question: "Observa el esquema: si se introduce una lagartija exótica que también come escarabajos, ¿cómo afecta a los demás organismos de la cadena?",
          options: [
            "Disminuyen los escarabajos y la lagartija nativa tiene menos alimento por la competencia",
            "Aumentan los escarabajos y desaparecen las plantas al instante",
            "La lagartija nativa se convierte en productora",
            "No produce ninguna alteración en el ecosistema"
          ],
          correct: "Disminuyen los escarabajos y la lagartija nativa tiene menos alimento por la competencia",
          explain: "Dos especies compitiendo por el mismo alimento reducen rápidamente la población de escarabajos y perjudican a la lagartija nativa."
        },
        {
          visualChain: [
            { icon: "🦠", label: "Fitoplancton", badge: "Productor", badgeColor: "green" },
            { icon: "🐚", label: "Almeja", badge: "⬇️ Se extraen muchas", badgeColor: "red", style: "alert" },
            { icon: "⭐", label: "Estrella de mar", badge: "❓ Sin comida", badgeColor: "blue", style: "focus" }
          ],
          question: "Observa esta cadena marina: si se extraen demasiadas almejas, ¿quiénes se quedan con menos alimento?",
          options: ["Las estrellas de mar", "El fitoplancton", "Las llaretas", "Los guanacos"],
          correct: "Las estrellas de mar",
          explain: "La estrella de mar se alimenta de almejas; si se extraen demasiadas almejas, se queda con menos alimento."
        },
        {
          scene: "lago_toxico",
          question: "Observa la imagen: si una empresa arroja desechos tóxicos a este lago, ¿qué consecuencias ocurrirían?",
          options: [
            "Podrían morir muchos peces, disminuirían las plantas acuáticas y las aves migrarían a otro sitio",
            "Aumentaría la cantidad de peces y llegarían muchas aves nuevas",
            "Las plantas acuáticas crecerían el doble",
            "El agua se volvería más limpia para los animales"
          ],
          correct: "Podrían morir muchos peces, disminuirían las plantas acuáticas y las aves migrarían a otro sitio",
          explain: "Los desechos tóxicos matan peces, disminuyen las plantas acuáticas y obligan a las aves a migrar."
        },
        {
          scene: "petroleo",
          question: "Observa este barco derramando petróleo en el mar: ¿qué efecto tiene sobre el ecosistema marino?",
          options: [
            "Contamina el ecosistema y perjudica a animales y plantas marinas (no es alimento ni energía beneficiosa)",
            "Sirve como alimento extra para las almejas y peces",
            "Es una fuente beneficiosa de energía para los seres vivos",
            "Ayuda a proteger las reservas nacionales"
          ],
          correct: "Contamina el ecosistema y perjudica a animales y plantas marinas (no es alimento ni energía beneficiosa)",
          explain: "El petróleo derramado contamina el ecosistema marino y daña a plantas y animales."
        },
        {
          scene: "chinchilla",
          question: "¿Qué medidas SÍ son adecuadas para proteger a especies en peligro (como la chinchilla) y al medio ambiente?",
          options: [
            "Prohibir la caza indiscriminada y declarar áreas como reservas nacionales",
            "Talar bosques sin control y fabricar abrigos con piel de chinchilla",
            "Pescar mariscos durante los períodos de veda",
            "Cazar animales en peligro de extinción"
          ],
          correct: "Prohibir la caza indiscriminada y declarar áreas como reservas nacionales",
          explain: "Prohibir la caza indiscriminada, crear reservas nacionales y respetar las vedas protegen los ecosistemas."
        }
      ]
    }
  ]
};
