// ============================================================================= 
// ETAPA 1: ROLES DE LOS ORGANISMOS EN EL ECOSISTEMA (100% AUTOSUFICIENTE)
// =============================================================================
window.MODULO_1 = {
  id: "m1",
  icon: "🌱",
  tag: "Etapa 1 • Roles en la Naturaleza",
  tagClass: "tag-green",
  title: "Roles en el Ecosistema",
  desc: "Productores (fotosíntesis), Consumidores (herbívoros, carnívoros, omnívoros), Descomponedores, el ser humano y el Altiplano chileno.",
  steps: [
    {
      label: "1. Entrenamiento 🧠",
      type: "training",
      items: [
        {
          icon: "🌍",
          title: "¿Cómo se clasifican los organismos?",
          text: "En la naturaleza, la función de cada organismo se relaciona con la manera en que obtiene sus alimentos y la energía que necesita. Se distinguen tres grandes roles: Productores, Consumidores y Descomponedores.",
          highlight: "Recuerda siempre estos 3 equipos: Productores, Consumidores y Descomponedores."
        },
        {
          visualChain: [
            { icon: "☀️", label: "Energía del Sol", style: "extra" },
            { icon: "💧", label: "Agua y sustancias", style: "focus" },
            { icon: "🌿", label: "Planta (Productor)", badge: "Fotosíntesis", badgeColor: "green", style: "up" }
          ],
          title: "Productores (Organismos autótrofos)",
          text: "Producen su propio alimento captando la energía del Sol, agua y algunas sustancias del medioambiente. A este proceso le llamamos FOTOSÍNTESIS. Todas las plantas son productores y sirven de alimento para algunos animales.",
          highlight: "Regla de oro: ¡TODAS las cadenas alimentarias comienzan en los PRODUCTORES!"
        },
        {
          visualChain: [
            { icon: "🦌", label: "Herbívoro", badge: "Solo plantas", badgeColor: "green" },
            { icon: "🐆", label: "Carnívoro", badge: "Otros animales", badgeColor: "red" },
            { icon: "🐻🧒", label: "Omnívoro", badge: "Plantas y animales", badgeColor: "amber" }
          ],
          title: "Consumidores",
          text: "Se alimentan de otros seres vivos de los que obtienen la energía. Se dividen en tres tipos: Herbívoros (comen solo plantas), Carnívoros (comen otros animales) y Omnívoros (comen animales y plantas).",
          highlight: "Los consumidores NO pueden hacer fotosíntesis; necesitan comer otros seres vivos."
        },
        {
          visualChain: [
            { icon: "🍂🦴", label: "Restos y desechos" },
            { icon: "🍄🦠", label: "Hongos y bacterias", badge: "Descomponedores", badgeColor: "amber", style: "extra" },
            { icon: "🌱", label: "Nutrientes para plantas", badge: "Reciclaje", badgeColor: "green", style: "up" }
          ],
          title: "Descomponedores",
          text: "Transforman los restos y desechos dejados por otros organismos en sustancias que pueden ser nuevamente utilizadas por los productores para fabricar su alimento. Así descomponen la materia y la reincorporan al ecosistema.",
          highlight: "Ejemplos clave de descomponedores: HONGOS y BACTERIAS."
        }
      ]
    },

    {
      label: "2. Ecosistema Altiplano 🦙",
      type: "classify",
      categories: ["🌿 Productor", "🦊 Consumidor", "🦠 Descomponedor"],
      items: [
        {
          scene: "altiplano",
          sceneFocus: "Llaretas",
          icon: "🌿",
          name: "Llaretas",
          prompt: "Observa las Llaretas destacadas en el Altiplano chileno: son plantas verdes que crecen sobre las rocas. ¿Qué rol cumplen?",
          correct: "🌿 Productor",
          hint: "La llareta es una planta verde que usa la luz del Sol para hacer fotosíntesis y fabricar su propio alimento.",
          explain: "Las llaretas son plantas, por lo tanto fabrican su propio alimento (son Productores)."
        },
        {
          scene: "altiplano",
          sceneFocus: "Guanacos",
          icon: "🦙",
          name: "Guanacos",
          prompt: "Observa a los Guanacos en el Altiplano: se alimentan de pastos y arbustos. ¿Qué rol cumplen en el ecosistema?",
          correct: "🦊 Consumidor",
          hint: "Los guanacos no fabrican su alimento con el Sol; necesitan comer plantas para obtener energía.",
          explain: "Los guanacos se alimentan de otros seres vivos (plantas), por eso son Consumidores herbívoros."
        },
        {
          scene: "altiplano",
          sceneFocus: "Cóndor",
          icon: "🦅",
          name: "Cóndor",
          prompt: "Observa al Cóndor volando sobre las montañas: obtiene energía comiendo otros animales. ¿Qué rol cumple?",
          correct: "🦊 Consumidor",
          hint: "El cóndor es un ave que se alimenta de otros animales para obtener su energía.",
          explain: "El cóndor se alimenta de otros seres vivos, por lo tanto es un Consumidor."
        },
        {
          scene: "altiplano",
          sceneFocus: "Zorro",
          icon: "🦊",
          name: "Zorro",
          prompt: "Observa al Zorro del Altiplano: caza pequeños animales y come frutos. ¿Qué rol cumple en este ecosistema?",
          correct: "🦊 Consumidor",
          hint: "El zorro necesita alimentarse de otros seres vivos para obtener energía.",
          explain: "El zorro obtiene su energía comiendo otros seres vivos, por eso es un Consumidor."
        },
        {
          scene: "altiplano",
          sceneFocus: "Flamencos",
          icon: "🦩",
          name: "Flamencos",
          prompt: "Observa a los Flamencos en la laguna: se alimentan de pequeños organismos del agua. ¿Qué rol cumplen?",
          correct: "🦊 Consumidor",
          hint: "Los flamencos comen otros seres vivos que encuentran en la laguna altiplánica.",
          explain: "Los flamencos se alimentan de otros seres vivos, por lo tanto son Consumidores."
        },
        {
          scene: "altiplano",
          sceneFocus: "Bacterias",
          icon: "🦠",
          name: "Bacterias",
          prompt: "Observa las Bacterias en la lupa del centro: transforman los restos y desechos del suelo. ¿Qué rol cumplen?",
          correct: "🦠 Descomponedor",
          hint: "Recuerda qué organismos microscópicos (junto con los hongos) transforman restos y desechos en nutrientes.",
          explain: "Las bacterias (junto a los hongos) son Descomponedores: reincorporan la materia al ecosistema."
        }
      ]
    },

    {
      label: "3. Desafíos de Roles 🎯",
      type: "quiz",
      items: [
        {
          visualChain: [
            { icon: "☀️", label: "Luz del Sol", style: "extra" },
            { icon: "💧", label: "Agua", style: "focus" },
            { icon: "🌿", label: "Planta produce alimento", badge: "❓ Proceso", badgeColor: "blue", style: "up" }
          ],
          question: "¿Cómo se llama el proceso mediante el cual las plantas producen su propio alimento usando energía del Sol?",
          options: ["Fotosíntesis", "Descomposición", "Digestión", "Migración"],
          correct: "Fotosíntesis",
          hint: "'Foto' significa luz. Es el proceso con el que las plantas fabrican su alimento usando energía solar.",
          explain: "Las plantas fabrican su alimento mediante la fotosíntesis, captando luz del Sol, agua y sustancias del medioambiente."
        },
        {
          icon: "🌱☀️",
          question: "¿Con qué otro nombre se conoce a los organismos productores?",
          options: ["Organismos autótrofos", "Organismos carnívoros", "Organismos descomponedores", "Organismos omnívoros"],
          correct: "Organismos autótrofos",
          hint: "La palabra empieza con 'auto-', porque fabrican su alimento por sí mismos.",
          explain: "Los productores también se conocen como organismos autótrofos porque producen su propio alimento."
        },
        {
          visualChain: [
            { icon: "❓", label: "Primer eslabón", badge: "Inicio", badgeColor: "green", style: "focus" },
            { icon: "🐇", label: "Herbívoro" },
            { icon: "🐆", label: "Carnívoro" }
          ],
          question: "¿En qué tipo de organismo comienzan TODAS las cadenas alimentarias?",
          options: ["En los productores (plantas)", "En los carnívoros", "En los descomponedores", "En los omnívoros"],
          correct: "En los productores (plantas)",
          hint: "Piensa quién es el único capaz de atrapar la energía del Sol para iniciar el alimento de todos los demás.",
          explain: "Todas las cadenas alimentarias comienzan en los productores, porque fabrican alimento desde la energía del Sol."
        },
        {
          icon: "🦌🌿",
          question: "Dentro de los consumidores, ¿cómo se llaman los animales que se alimentan SOLO de plantas?",
          options: ["Herbívoros", "Carnívoros", "Omnívoros", "Autótrofos"],
          correct: "Herbívoros",
          hint: "La palabra viene de 'hierba' (plantas).",
          explain: "Los herbívoros son consumidores que se alimentan solo de plantas."
        },
        {
          icon: "🐆🥩",
          question: "¿Cómo se llaman los consumidores que se alimentan de OTROS ANIMALES?",
          options: ["Carnívoros", "Herbívoros", "Omnívoros", "Productores"],
          correct: "Carnívoros",
          hint: "La palabra viene de 'carne'.",
          explain: "Los carnívoros son consumidores que se alimentan de otros animales."
        },
        {
          visualChain: [
            { icon: "🍂", label: "Restos y desechos" },
            { icon: "🍄🦠", label: "Hongos y bacterias", style: "extra" },
            { icon: "🌿", label: "Productores", style: "up" }
          ],
          question: "¿Cuál es la función principal de los descomponedores (hongos y bacterias)?",
          options: [
            "Transformar restos y desechos en sustancias que vuelven a usar los productores",
            "Fabricar su propio alimento usando la luz del Sol",
            "Cazar animales grandes para mantener el equilibrio",
            "Comer solamente hojas y frutos frescos"
          ],
          correct: "Transformar restos y desechos en sustancias que vuelven a usar los productores",
          hint: "Piensa en el reciclaje de la naturaleza: ¿qué hacen con los restos y desechos que dejan otros seres vivos?",
          explain: "Los descomponedores descomponen la materia de restos y desechos y la reincorporan al ecosistema para las plantas."
        },
        {
          visualChain: [
            { icon: "🍎🥦", label: "Plantas y frutas", style: "up" },
            { icon: "🍗🐟", label: "Animales", style: "extra", arrow: "➔" },
            { icon: "🧒", label: "Ser humano", badge: "¿Qué rol es?", badgeColor: "blue", style: "focus" }
          ],
          question: "¿En cuál de estos grupos clasificarías al ser humano y POR QUÉ?",
          options: [
            "Consumidor (omnívoro), porque se alimenta de otros seres vivos: tanto de plantas como de animales",
            "Productor, porque cocina su propia comida en la casa",
            "Descomponedor, porque come alimentos que crecen en la tierra",
            "Consumidor herbívoro, porque solo necesita agua y sol para vivir"
          ],
          correct: "Consumidor (omnívoro), porque se alimenta de otros seres vivos: tanto de plantas como de animales",
          hint: "Piensa: ¿los humanos fabricamos comida con luz solar o comemos tanto plantas como animales?",
          explain: "¡Clave! El ser humano es un consumidor omnívoro porque obtiene su energía alimentándose de otros seres vivos (animales y plantas)."
        }
      ]
    }
  ]
};
