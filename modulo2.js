// ============================================================================= 
// ETAPA 2: CADENAS ALIMENTARIAS Y EFECTO DOMINÓ (100% AUTOSUFICIENTE)
// =============================================================================
window.MODULO_2 = {
  id: "m2",
  icon: "🦊",
  tag: "Etapa 2 • Cadenas y Equilibrio",
  tagClass: "tag-blue",
  title: "Cadenas Alimentarias y Efecto Dominó",
  desc: "Flechas de energía, constructores de cadenas chilenas, clasificación P-C-D, alteraciones del ecosistema y cadena marina.",
  steps: [
    {
      label: "1. Entrenamiento 🔗",
      type: "training",
      items: [
        {
          visualChain: [
            { icon: "🌿", label: "Hojas de arbusto", badge: "Productor", badgeColor: "green" },
            { icon: "🦌", label: "Pudú", badge: "Consumidor", badgeColor: "blue" },
            { icon: "🐆", label: "Puma", badge: "Consumidor", badgeColor: "blue" },
            { icon: "🍄", label: "Hongos", badge: "Descomponedor", badgeColor: "amber" }
          ],
          title: "¿Qué es una cadena alimentaria?",
          text: "Una cadena alimentaria es una representación de las relaciones de alimentación entre los componentes de un ecosistema; es decir, muestra quién se alimenta de quién.",
          highlight: "Aquí las hojas de arbusto alimentan al pudú, el pudú alimenta al puma y todos aportan restos a los hongos."
        },
        {
          visualChain: [
            { icon: "🌱", label: "Pasto", style: "up" },
            { icon: "🦙", label: "Guanaco", badge: "Come pasto", badgeColor: "blue" },
            { icon: "🐆", label: "Puma", badge: "Come guanaco", badgeColor: "red" }
          ],
          title: "El secreto de las flechas (➔)",
          text: "En una cadena alimentaria, las flechas representan HACIA DÓNDE FLUYE LA ENERGÍA; es decir, quién sirve de alimento a quién. Por eso decimos que 'el guanaco es el alimento del puma'.",
          highlight: "Truco infalible: lee cada flecha como 'es alimento de' (pasto es alimento del guanaco; guanaco es alimento del puma)."
        },
        {
          visualChain: [
            { icon: "🌿🦌🐆", label: "Restos de todos", style: "focus" },
            { icon: "🍄🦠", label: "Hongos y bacterias", badge: "Reciclan todo", badgeColor: "amber", style: "extra" }
          ],
          title: "¿Hacia dónde van los restos de todos?",
          text: "Plantas, herbívoros y carnívoros dejan restos y desechos. Por eso las flechas desde todos los organismos llegan hacia los descomponedores (hongos y bacterias), que reincorporan la materia al ecosistema.",
          highlight: "La cadena siempre parte en un Productor (planta) y los restos de todos terminan en los Descomponedores."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "⬇️ Disminuyen", badgeColor: "red", style: "alert" },
            { icon: "🦎", label: "Lagartija", badge: "⬆️ Aumentan", badgeColor: "green", style: "up" },
            { icon: "🦨", label: "Chingue", badge: "⬇️ Menos", badgeColor: "red", style: "alert" }
          ],
          title: "¡Atención! El Efecto Dominó",
          text: "Los organismos de una cadena dependen unos de otros. Si disminuyen los chingues (depredadores), las lagartijas AUMENTAN porque nadie las caza. Y al haber MÁS lagartijas hambrientas, los escarabajos DISMINUYEN.",
          highlight: "Piensa siempre paso a paso: Menos chingues ➔ Más lagartijas ➔ Menos escarabajos."
        }
      ]
    },

    {
      label: "2. Arma la Cadena 🧩",
      type: "chain_builder",
      items: [
        {
          icon: "🌲",
          title: "Cadena 1: Bosque del sur de Chile",
          prompt: "Las hojas de arbusto alimentan al pudú, el pudú alimenta al puma y sus restos alimentan a los hongos. ¡Ordénala desde el productor!",
          correctOrder: ["🌿 Hojas de arbusto", "🦌 Pudú", "🐆 Puma", "🍄 Hongos"],
          hint: "Empieza siempre por el productor (Hojas de arbusto), sigue con el herbívoro (Pudú), luego el carnívoro (Puma) y termina en el descomponedor (Hongos).",
          explain: "Hojas de arbusto ➔ Pudú ➔ Puma ➔ Hongos. ¡La energía fluye desde la planta hasta el puma y los restos van a los hongos!"
        },
        {
          icon: "⛰️",
          title: "Cadena 2: Ecosistema cordillerano",
          prompt: "El pasto es alimento del guanaco y el guanaco es alimento del puma. Ordena la cadena según el flujo de energía:",
          correctOrder: ["🌱 Pasto", "🦙 Guanaco", "🐆 Puma"],
          hint: "Primero va el productor que hace fotosíntesis (Pasto), luego quien come pasto (Guanaco) y al final quien caza al guanaco (Puma).",
          explain: "PASTO ➔ GUANACO ➔ PUMA. El pasto es alimento del guanaco y el guanaco es alimento del puma."
        },
        {
          icon: "🐇",
          title: "Cadena 3: Pradera chilena",
          prompt: "La liebre y el puma son consumidores, porque obtienen su alimento de otros organismos. ¿Cómo ordenarías Planta, Liebre y Puma?",
          correctOrder: ["🌿 Planta", "🐇 Liebre", "🐆 Puma"],
          hint: "Todas las cadenas parten en el productor (Planta). Luego va la Liebre (herbívoro) y al final el Puma (carnívoro).",
          explain: "PLANTA ➔ LIEBRE ➔ PUMA. ¡Excelente! Siempre comenzamos en la planta."
        },
        {
          icon: "🦌",
          title: "Cadena 4: Energía del Sol al bosque",
          prompt: "El pasto aprovecha la energía del Sol, el pudú come pasto y el puma se alimenta del pudú. ¡Arma esta cadena!",
          correctOrder: ["🌱 Pasto", "🦌 Pudú", "🐆 Puma"],
          hint: "Parte en el Pasto (productor), sigue con el Pudú (herbívoro) y termina en el Puma (carnívoro).",
          explain: "Pasto ➔ Pudú ➔ Puma. El pasto capta la luz solar e inicia el flujo de energía."
        },
        {
          icon: "🦨",
          title: "Cadena 5: Matorral chileno",
          prompt: "El escarabajo come plantas, la lagartija come escarabajos y el chingue come lagartijas. ¡Ordénalos correctamente!",
          correctOrder: ["🌿 Planta", "🪲 Escarabajo", "🦎 Lagartija", "🦨 Chingue"],
          hint: "Parte en la Planta, luego el Escarabajo, después la Lagartija y finalmente el Chingue.",
          explain: "Planta ➔ Escarabajo ➔ Lagartija ➔ Chingue (y los restos de todos llegan a hongos y bacterias)."
        }
      ]
    },

    {
      label: "3. Clasifica P-C-D 🏷️",
      type: "classify",
      categories: ["P — Productor 🌿", "C — Consumidor 🦎", "D — Descomponedor 🍄"],
      items: [
        {
          visualChain: [
            { icon: "🌿", label: "Planta", badge: "¿P, C o D?", badgeColor: "blue", style: "focus" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue" }
          ],
          icon: "🌿",
          name: "Planta",
          prompt: "Observa la Planta destacada al inicio de esta cadena trófica: ¿qué letra le corresponde (P, C o D)?",
          correct: "P — Productor 🌿",
          hint: "Es quien fabrica su propio alimento usando la luz del Sol e inicia la cadena.",
          explain: "La Planta lleva la letra P porque es un organismo Productor."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "¿P, C o D?", badgeColor: "blue", style: "focus" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue" }
          ],
          icon: "🪲",
          name: "Escarabajo",
          prompt: "Observa al Escarabajo destacado: la flecha llega desde la planta porque se alimenta de ella. ¿Es P, C o D?",
          correct: "C — Consumidor 🦎",
          hint: "El escarabajo se alimenta de otro ser vivo (la planta), no hace fotosíntesis.",
          explain: "El Escarabajo lleva la letra C porque es un Consumidor (herbívoro)."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija", badge: "¿P, C o D?", badgeColor: "blue", style: "focus" },
            { icon: "🦨", label: "Chingue" }
          ],
          icon: "🦎",
          name: "Lagartija",
          prompt: "Observa a la Lagartija destacada: se alimenta de escarabajos. ¿Es P, C o D?",
          correct: "C — Consumidor 🦎",
          hint: "La lagartija obtiene su energía comiendo otros seres vivos (escarabajos).",
          explain: "La Lagartija lleva la letra C porque es un Consumidor (carnívoro)."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue", badge: "¿P, C o D?", badgeColor: "blue", style: "focus" }
          ],
          icon: "🦨",
          name: "Chingue",
          prompt: "Observa al Chingue destacado: se alimenta de lagartijas. ¿Es P, C o D?",
          correct: "C — Consumidor 🦎",
          hint: "El chingue obtiene su energía alimentándose de otros animales.",
          explain: "El Chingue lleva la letra C porque es un Consumidor."
        },
        {
          visualChain: [
            { icon: "🌿🪲🦎🦨", label: "Restos de todos" },
            { icon: "🍄🦠", label: "Hongos y bacterias", badge: "¿P, C o D?", badgeColor: "blue", style: "focus" }
          ],
          icon: "🍄🦠",
          name: "Hongos y bacterias",
          prompt: "Observa hacia dónde apuntan los restos y desechos de toda la cadena: ¿qué letra corresponde a Hongos y bacterias?",
          correct: "D — Descomponedor 🍄",
          hint: "Transforman los restos y desechos en nutrientes que vuelven a utilizar las plantas.",
          explain: "Hongos y bacterias llevan la letra D porque son Descomponedores."
        }
      ]
    },

    {
      label: "4. Efecto Dominó 🧪",
      type: "quiz",
      items: [
        {
          visualChain: [
            { icon: "🌱", label: "Pasto" },
            { icon: "🦙", label: "Guanaco" },
            { icon: "🐆", label: "Puma" }
          ],
          question: "En esta cadena alimentaria, ¿qué representan las flechas (➔)?",
          options: [
            "Hacia dónde fluye la energía, es decir, quién sirve de alimento a quién",
            "Hacia dónde corren los animales cuando arrancan de un depredador",
            "Qué animal es más grande y fuerte dentro del ecosistema",
            "El orden alfabético en que se escriben los nombres"
          ],
          correct: "Hacia dónde fluye la energía, es decir, quién sirve de alimento a quién",
          hint: "Fíjate que la flecha siempre sale desde el alimento y apunta hacia el ser vivo que se lo come.",
          explain: "Las flechas muestran hacia dónde fluye la energía (quién sirve de alimento a quién)."
        },
        {
          visualChain: [
            { icon: "☀️", label: "Sol", style: "extra" },
            { icon: "🌱", label: "Pasto", badge: "❓", badgeColor: "blue", style: "focus" },
            { icon: "🦌", label: "Pudú" },
            { icon: "🐆", label: "Puma" }
          ],
          question: "Observa el esquema: ¿quiénes aprovechan la energía que proviene del Sol y qué nombre reciben estos organismos?",
          options: [
            "El pasto (las plantas) y reciben el nombre de productores o autótrofos",
            "El puma y el pudú, y reciben el nombre de consumidores",
            "Solo el pudú, y recibe el nombre de herbívoro",
            "Los hongos, y reciben el nombre de descomponedores"
          ],
          correct: "El pasto (las plantas) y reciben el nombre de productores o autótrofos",
          hint: "Mira hacia dónde apunta la primera flecha que sale desde el Sol.",
          explain: "Las plantas (el pasto) aprovechan la energía del Sol mediante la fotosíntesis y se llaman organismos productores."
        },
        {
          visualChain: [
            { icon: "☀️", label: "Sol", style: "extra" },
            { icon: "🌱", label: "Pasto" },
            { icon: "🦌", label: "Pudú", style: "up" },
            { icon: "🐆", label: "Puma", badge: "¿Qué come?", badgeColor: "blue", style: "focus" }
          ],
          question: "Observa esta cadena alimentaria: ¿de quién se alimenta el puma?",
          options: ["Del pudú", "Del pasto", "Directamente de la luz del Sol", "De los hongos y bacterias"],
          correct: "Del pudú",
          hint: "Mira qué organismo tiene la flecha apuntando directamente hacia el puma.",
          explain: "Como la flecha va desde el pudú hacia el puma, el puma se alimenta del pudú."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija", badge: "❓ ¿Qué pasa?", badgeColor: "blue", style: "focus" },
            { icon: "🦨", label: "Chingue", badge: "⬇️ Baja a la mitad", badgeColor: "red", style: "alert" }
          ],
          question: "Paso 1 de Detective: Si la población de chingues disminuye a la mitad por caza indiscriminada, ¿qué pasa PRIMERO con las lagartijas?",
          options: [
            "La cantidad de lagartijas AUMENTA, porque hay menos chingues cazándolas",
            "La cantidad de lagartijas desaparece al instante",
            "Las lagartijas empiezan a hacer fotosíntesis",
            "No ocurre ningún cambio con las lagartijas"
          ],
          correct: "La cantidad de lagartijas AUMENTA, porque hay menos chingues cazándolas",
          hint: "Mira la flecha: el chingue se come a la lagartija. Si hay menos chingues cazando, ¿sobreviven más o menos lagartijas?",
          explain: "¡Exacto! Al haber menos chingues depredadores, sobreviven y aumentan las lagartijas."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "❓ ¿Sube o baja?", badgeColor: "blue", style: "focus" },
            { icon: "🦎", label: "Lagartija", badge: "⬆️ Hay MÁS", badgeColor: "green", style: "up" },
            { icon: "🦨", label: "Chingue", badge: "⬇️ Hay MENOS", badgeColor: "red", style: "alert" }
          ],
          question: "Si la población de chingues disminuye a la mitad por caza indiscriminada, ¿qué podría ocurrir con la cantidad de escarabajos?",
          context: "Fíjate en el efecto dominó del esquema de arriba:",
          options: [
            "La cantidad de escarabajos DISMINUIRÍA, porque habría más lagartijas comiéndoselos",
            "La cantidad de escarabajos aumentaría, porque los chingues se comen a los escarabajos",
            "Los escarabajos se volverían carnívoros y cazarían chingues",
            "Los escarabajos se quedarían exactamente igual"
          ],
          correct: "La cantidad de escarabajos DISMINUIRÍA, porque habría más lagartijas comiéndoselos",
          hint: "Sigue las tarjetas de derecha a izquierda: menos chingues ➔ más lagartijas ➔ si hay más lagartijas comiendo escarabajos, ¿quedan más o menos escarabajos?",
          explain: "¡Excelente razonamiento! Menos chingues provocan más lagartijas, y al haber más lagartijas cazando, la población de escarabajos DISMINUYE."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta", badge: "🔥 Incendio", badgeColor: "red", style: "alert" },
            { icon: "🪲", label: "Escarabajo", badge: "❓", badgeColor: "blue" },
            { icon: "🦎", label: "Lagartija", badge: "❓", badgeColor: "blue" },
            { icon: "🦨", label: "Chingue", badge: "❓", badgeColor: "blue" }
          ],
          question: "Si disminuye drásticamente el número de plantas por un incendio forestal, ¿qué podría ocurrir con los demás organismos de esta cadena?",
          options: [
            "Disminuiría la cantidad de todos los organismos (escarabajos, lagartijas y chingues) porque se quedan sin alimento base",
            "Solo disminuirían los chingues, pero los escarabajos aumentarían",
            "Aumentarían las lagartijas porque tendrían más espacio para correr",
            "No afectaría a los animales porque ellos no necesitan plantas"
          ],
          correct: "Disminuiría la cantidad de todos los organismos (escarabajos, lagartijas y chingues) porque se quedan sin alimento base",
          hint: "Si falta el productor al inicio de la cadena, los escarabajos se quedan sin comida, y después les falta alimento a las lagartijas y chingues.",
          explain: "¡Muy bien! Sin plantas disminuyen los escarabajos, luego las lagartijas y finalmente los chingues."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo", badge: "❓", badgeColor: "blue", style: "focus" },
            { icon: "🦎➕🦎", label: "Lagartija nativa + Exótica", badge: "⚠️ Ambas comen escarabajos", badgeColor: "amber", style: "extra" },
            { icon: "🦨", label: "Chingue" }
          ],
          question: "Imagina que se introduce en este ecosistema una lagartija exótica que también se alimenta de escarabajos. ¿Cómo afectaría esto a los demás organismos?",
          options: [
            "Disminuirían los escarabajos (hay más animales comiéndolos) y la lagartija nativa tendría menos alimento por la competencia",
            "Aumentarían muchísimo los escarabajos para alimentar a todas las lagartijas",
            "La lagartija nativa se convertiría en productora y haría fotosíntesis",
            "No ocurriría ningún cambio en el ecosistema"
          ],
          correct: "Disminuirían los escarabajos (hay más animales comiéndolos) y la lagartija nativa tendría menos alimento por la competencia",
          hint: "Piensa qué pasa si llegan muchos animales extra a comer el mismo plato de escarabajos: los escarabajos se acaban rápido y compiten por comida.",
          explain: "¡Excelente análisis! Al competir por el mismo alimento, disminuyen los escarabajos y la lagartija nativa se ve perjudicada."
        },
        {
          visualChain: [
            { icon: "🌿", label: "Planta" },
            { icon: "🪲", label: "Escarabajo" },
            { icon: "🦎", label: "Lagartija" },
            { icon: "🦨", label: "Chingue" }
          ],
          question: "¿Cuál de las siguientes sería OTRA situación (distinta a caza, incendio o especie exótica) que podría alterar el equilibrio de esta cadena?",
          options: [
            "Fumigar con insecticidas tóxicos (que matan escarabajos) o sufrir una sequía y contaminación del suelo",
            "Declarar el lugar como reserva nacional para proteger a las especies",
            "Respetar los períodos de veda y no botar basura en la naturaleza",
            "Que las plantas sigan recibiendo luz del Sol y lluvia normal"
          ],
          correct: "Fumigar con insecticidas tóxicos (que matan escarabajos) o sufrir una sequía y contaminación del suelo",
          hint: "Busca una acción dañina o cambio ambiental (como contaminación, sequía o pesticidas) que disminuya algún organismo de la cadena.",
          explain: "¡Correcto! Pesticidas, contaminación, sequía o destrucción del hábitat alteran el equilibrio de toda la cadena."
        }
      ]
    },

    {
      label: "5. Cadena Marina 🌊",
      type: "fill_blank",
      items: [
        {
          visualChain: [
            { icon: "🦠", label: "Fitoplancton", badge: "Productor", badgeColor: "green" },
            { icon: "🐚", label: "Almeja", badge: "⬇️ Se extraen muchas", badgeColor: "red", style: "alert" },
            { icon: "⭐", label: "Estrella de mar", badge: "❓ Sin alimento", badgeColor: "blue", style: "focus" }
          ],
          sentence: "Observa esta cadena marina: si se extraen demasiadas almejas, las _____ se quedan con menos alimento.",
          bank: ["estrellas de mar", "plantas terrestres", "lagartijas", "llaretas"],
          correct: "estrellas de mar",
          hint: "Mira la flecha que sale desde la ALMEJA: ¿hacia qué animal marino apunta?",
          explain: "Exacto: en la cadena Fitoplancton ➔ Almeja ➔ Estrella de mar, si sacamos demasiadas almejas, las estrellas de mar se quedan con menos alimento."
        },
        {
          visualChain: [
            { icon: "🦠", label: "Fitoplancton", badge: "❓ Primer eslabón", badgeColor: "green", style: "focus" },
            { icon: "🐚", label: "Almeja" },
            { icon: "⭐", label: "Estrella de mar" }
          ],
          sentence: "En esta cadena marina, el organismo productor que inicia la cadena usando energía del Sol es el _____.",
          bank: ["fitoplancton", "estrella de mar", "almeja", "chingue"],
          correct: "fitoplancton",
          hint: "Todas las cadenas comienzan en el productor (el primer eslabón a la izquierda).",
          explain: "¡Muy bien! El fitoplancton es el productor del ecosistema marino."
        },
        {
          visualChain: [
            { icon: "🦠", label: "Fitoplancton", arrow: "➡️⚡" },
            { icon: "🐚", label: "Almeja", arrow: "➡️⚡" },
            { icon: "⭐", label: "Estrella de mar" }
          ],
          sentence: "En cualquier cadena alimentaria, las flechas indican hacia dónde fluye la _____ de un ser vivo a otro.",
          bank: ["energía", "contaminación", "lluvia", "tierra"],
          correct: "energía",
          hint: "Cuando un ser vivo se alimenta de otro, recibe nutrientes y _____ para vivir.",
          explain: "¡Perfecto! Las flechas representan hacia dónde fluye la energía en la cadena alimentaria."
        }
      ]
    }
  ]
};
