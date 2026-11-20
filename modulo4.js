// =============================================================================
// ETAPA 4: EL REINO DEL FÚTBOL — CANJE DE PUNTOS Y CARRERA DE SANTIAGO CUEVAS
// Calibrado a 2.250 pts acumulados (~3 repasos completos de Módulos 1, 2 y 3)
// =============================================================================
window.REINO_FUTBOL = (function () {
  const TIERS = [
    {
      tier: 0,
      title: "Nivel 0 • Club Formador (Inicio)",
      subtitle: "Aquí comienza tu carrera profesional como crack de 4°B",
      cost: 0,
      ovr: 72,
      clubs: [
        { id: "magallanes", name: "Magallanes", country: "🇨🇱 Chile", primary: "#38BDF8", secondary: "#FFFFFF", accent: "#0284C7", motto: "La Academia • Tu debut oficial" }
      ]
    },
    {
      tier: 1,
      title: "Nivel 1 • Gigante de Chile",
      subtitle: "Tu primer gran traspaso tras dominar el Módulo 1",
      cost: 150,
      ovr: 77,
      clubs: [
        { id: "colocolo", name: "Colo-Colo", country: "🇨🇱 Chile", primary: "#FFFFFF", secondary: "#111827", accent: "#334155", motto: "El Cacique • Estadio Monumental" }
      ]
    },
    {
      tier: 2,
      title: "Nivel 2 • Gigantes de Argentina (¡Elige tu club!)",
      subtitle: "Cruzas la cordillera hacia uno de los dos colosos sudamericanos",
      cost: 250,
      ovr: 82,
      clubs: [
        { id: "boca", name: "Boca Juniors", country: "🇦🇷 Argentina", primary: "#1D4ED8", secondary: "#FACC15", accent: "#1E3A8A", motto: "La Bombonera • Azul y Oro" },
        { id: "river", name: "River Plate", country: "🇦🇷 Argentina", primary: "#FFFFFF", secondary: "#DC2626", accent: "#991B1B", motto: "El Monumental • La Banda Roja" }
      ]
    },
    {
      tier: 3,
      title: "Nivel 3 • Salto a Europa (¡Elige tu club!)",
      subtitle: "Completas tu 1ª vuelta completa y llegas al fútbol europeo",
      cost: 350,
      ovr: 86,
      clubs: [
        { id: "villarreal", name: "Villarreal", country: "🇪🇸 España", primary: "#FACC15", secondary: "#1E3A8A", accent: "#CA8A04", motto: "El Submarino Amarillo • LaLiga" },
        { id: "tottenham", name: "Tottenham", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", primary: "#FFFFFF", secondary: "#1E293B", accent: "#334155", motto: "Spurs • Premier League" },
        { id: "leipzig", name: "RB Leipzig", country: "🇩🇪 Alemania", primary: "#FFFFFF", secondary: "#E11D48", accent: "#BE123C", motto: "Bundesliga • Velocidad pura" }
      ]
    },
    {
      tier: 4,
      title: "Nivel 4 • Élite Europea (¡Elige tu club!)",
      subtitle: "2ª vuelta de estudio: peleas copas internacionales",
      cost: 400,
      ovr: 90,
      clubs: [
        { id: "roma", name: "AS Roma", country: "🇮🇹 Italia", primary: "#991B1B", secondary: "#F59E0B", accent: "#7F1D1D", motto: "La Loba • Estadio Olímpico" },
        { id: "sevilla", name: "Sevilla", country: "🇪🇸 España", primary: "#FFFFFF", secondary: "#DC2626", accent: "#B91C1C", motto: "Rey de Europa League • Andalucía" },
        { id: "liverpool", name: "Liverpool", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", primary: "#DC2626", secondary: "#FEF08A", accent: "#991B1B", motto: "Anfield • You'll Never Walk Alone" }
      ]
    },
    {
      tier: 5,
      title: "Nivel 5 • Súper Potencias (¡Elige tu club!)",
      subtitle: "Entre los mejores futbolistas del planeta",
      cost: 500,
      ovr: 94,
      clubs: [
        { id: "mancity", name: "Manchester City", country: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglaterra", primary: "#38BDF8", secondary: "#1E3A8A", accent: "#0284C7", motto: "Citizens • Dominio total" },
        { id: "bayern", name: "Bayern Múnich", country: "🇩🇪 Alemania", primary: "#DC2626", secondary: "#FFFFFF", accent: "#991B1B", motto: "Gigante de Baviera • Allianz Arena" }
      ]
    },
    {
      tier: 6,
      title: "Nivel 6 • La Cima del Fútbol Mundial (¡Elige tu club!)",
      subtitle: "Meta final (~3 repasos completos de todos los módulos)",
      cost: 600,
      ovr: 99,
      clubs: [
        { id: "realmadrid", name: "Real Madrid", country: "🇪🇸 España", primary: "#FFFFFF", secondary: "#EAB308", accent: "#1E3A8A", motto: "Reyes de Europa • Santiago Bernabéu" },
        { id: "barcelona", name: "FC Barcelona", country: "🇪🇸 España", primary: "#1D4ED8", secondary: "#B91C1C", accent: "#FACC15", motto: "Blaugrana • Camp Nou" },
        { id: "juventus", name: "Juventus", country: "🇮🇹 Italia", primary: "#111827", secondary: "#FFFFFF", accent: "#475569", motto: "La Vecchia Signora • Turín" }
      ]
    }
  ];

  // Inyecta estilos exclusivos del Reino del Fútbol una sola vez
  function ensureStyles() {
    if (document.getElementById("football-kingdom-styles")) return;
    const style = document.createElement("style");
    style.id = "football-kingdom-styles";
    style.textContent = `
      .fk-banner {
        background: linear-gradient(135deg, #065F46 0%, #059669 55%, #10B981 100%);
        color: white;
        border-radius: 26px;
        padding: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
        box-shadow: 0 10px 0 rgba(6, 95, 70, 0.22);
        margin-bottom: 24px;
      }
      .fk-player-card {
        background: linear-gradient(160deg, #FEF3C7 0%, #F59E0B 100%);
        color: #1E293B;
        border: 4px solid #FFFBEB;
        border-radius: 22px;
        padding: 16px 20px;
        min-width: 220px;
        text-align: center;
        box-shadow: 0 8px 20px rgba(0,0,0,0.2);
      }
      .fk-ovr {
        font-size: 2.3rem;
        font-weight: 800;
        line-height: 1;
      }
      .fk-player-info {
        flex: 1;
        min-width: 240px;
      }
      .fk-player-info h1 { font-size: 1.7rem; margin-bottom: 6px; }
      .fk-stats-row {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
      }
      .fk-stat-chip {
        background: rgba(255,255,255,0.18);
        border: 1px solid rgba(255,255,255,0.35);
        padding: 6px 12px;
        border-radius: 999px;
        font-size: 0.88rem;
        font-weight: 700;
      }
      .fk-progress-wrap {
        background: white;
        border: 3px solid #E2E8F0;
        border-radius: 22px;
        padding: 18px 20px;
        margin-bottom: 22px;
      }
      .fk-bar-bg {
        background: #E2E8F0;
        height: 16px;
        border-radius: 999px;
        overflow: hidden;
        margin: 10px 0 6px;
      }
      .fk-bar-fill {
        background: linear-gradient(90deg, #10B981, #3B82F6, #F59E0B);
        height: 100%;
        border-radius: 999px;
        transition: width 0.35s ease;
      }
      .fk-tier-section {
        background: white;
        border: 3px solid #E2E8F0;
        border-radius: 24px;
        padding: 20px;
        margin-bottom: 18px;
        box-shadow: 0 6px 0 rgba(30,41,59,0.06);
      }
      .fk-tier-section.current-target {
        border-color: #10B981;
        background: #F0FDF4;
      }
      .fk-tier-section.locked-tier {
        opacity: 0.68;
        background: #F8FAFC;
      }
      .fk-tier-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 14px;
      }
      .fk-clubs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
        gap: 14px;
      }
      .fk-club-card {
        background: white;
        border: 3px solid #CBD5E1;
        border-radius: 20px;
        padding: 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        transition: transform 0.14s, border-color 0.14s;
      }
      .fk-club-card.active-club {
        border-color: #F59E0B;
        background: #FFFBEB;
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.25);
      }
      .fk-club-card.signed-club {
        border-color: #10B981;
      }
      .fk-club-card h4 { font-size: 1.1rem; font-weight: 800; }
      .fk-club-card small { color: #64748B; font-size: 0.82rem; }
      .fk-timeline {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
      }
      .fk-history-pill {
        background: #EFF6FF;
        border: 2px solid #BFDBFE;
        color: #1E40AF;
        padding: 5px 12px;
        border-radius: 999px;
        font-size: 0.84rem;
        font-weight: 700;
      }
      .fk-alert {
        background: #ECFDF5;
        border: 3px solid #10B981;
        color: #065F46;
        border-radius: 18px;
        padding: 16px 20px;
        margin-bottom: 18px;
        font-weight: 800;
        text-align: center;
        font-size: 1.05rem;
      }
    `;
    document.head.appendChild(style);
  }

  function renderShieldSVG(club, size = 64) {
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <clipPath id="clip-${club.id}-${size}">
            <path d="M32 4 L56 12 V31 C56 46 45 55 32 60 C19 55 8 46 8 31 V12 Z" />
          </clipPath>
        </defs>
        <g clip-path="url(#clip-${club.id}-${size})">
          <rect x="0" y="0" width="64" height="64" fill="${club.primary}" />
          <rect x="22" y="0" width="20" height="64" fill="${club.secondary}" />
          <rect x="0" y="25" width="64" height="14" fill="${club.secondary}" opacity="0.85" />
        </g>
        <path d="M32 4 L56 12 V31 C56 46 45 55 32 60 C19 55 8 46 8 31 V12 Z"
              fill="none" stroke="${club.accent}" stroke-width="4" />
        <text x="32" y="38" text-anchor="middle" font-size="18" font-weight="900"
              fill="#0F172A" stroke="#FFFFFF" stroke-width="3" paint-order="stroke">⚽</text>
      </svg>
    `;
  }

  function getClubById(id) {
    for (const t of TIERS) {
      for (const c of t.clubs) {
        if (c.id === id) return { ...c, tier: t.tier, ovr: t.ovr, cost: t.cost };
      }
    }
    return { ...TIERS[0].clubs[0], tier: 0, ovr: 72, cost: 0 };
  }

  function getNextTierInfo(highestTier) {
    return TIERS.find(t => t.tier === highestTier + 1) || null;
  }

  let lastTransferMessage = "";

  function signClub(clubId) {
    const club = getClubById(clubId);
    const fb = state.football;
    const alreadySigned = fb.signedClubs.includes(clubId);

    // Si ya firmó por este club, puede volver a vestir su camiseta gratis
    if (alreadySigned) {
      fb.currentClubId = clubId;
      saveState();
      playTone("ok");
      lastTransferMessage = `👕 ¡Volviste a ponerte la camiseta #10 de ${club.name}!`;
      render();
      return;
    }

    // Solo puede fichar en niveles ya desbloqueados o en el siguiente escalón
    if (club.tier > fb.highestTier + 1) {
      playTone("err");
      return;
    }

    if (state.points < club.cost) {
      playTone("err");
      lastTransferMessage = `💪 Te faltan ${club.cost - state.points} puntos para fichar por ${club.name}. ¡Repasa los módulos y vuelve!`;
      render();
      return;
    }

    // Canje de puntos y fichaje oficial
    spendPoints(club.cost);
    fb.signedClubs.push(clubId);
    fb.currentClubId = clubId;
    if (club.tier > fb.highestTier) {
      fb.highestTier = club.tier;
    }
    fb.history.push({ clubId: club.id, tier: club.tier, label: `Nivel ${club.tier}` });
    saveState();

    playTone("fanfare");
    const msg = club.tier === 6
      ? `¡LEYENDA MUNDIAL! Santiago Cuevas ficha por ${club.name} y alcanza la cima del fútbol con media 99!`
      : `¡BOMBAZO EN EL MERCADO DE PASES! Santiago Cuevas es el nuevo refuerzo de ${club.name}!`;
    lastTransferMessage = `🎉 ${msg} (-${club.cost} pts canjeados)`;
    speak(msg);
    render();
  }

  function render(app) {
    ensureStyles();
    const fb = state.football;
    const curClub = getClubById(fb.currentClubId);
    const pctCareer = Math.round((fb.highestTier / 6) * 100);
    const totalRepasos = (state.repasosCount.m1 || 0) + (state.repasosCount.m2 || 0) + (state.repasosCount.m3 || 0);

    const historyHTML = fb.history.map((h, i) => {
      const c = getClubById(h.clubId);
      return `<span class="fk-history-pill">${c.country.split(" ")[0]} ${c.name}</span>${i < fb.history.length - 1 ? " ➔ " : ""}`;
    }).join("");

    app.innerHTML = `
      <div class="fk-banner">
        <div class="fk-player-card">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span class="fk-ovr">${curClub.ovr}</span>
            <span style="font-weight:800;font-size:0.9rem;">DEL • #10</span>
          </div>
          ${renderShieldSVG(curClub, 74)}
          <div style="font-weight:800;font-size:1.05rem;margin-top:6px;">SANTIAGO CUEVAS</div>
          <div style="font-size:0.85rem;font-weight:700;color:#78350F;">${curClub.name}</div>
        </div>

        <div class="fk-player-info">
          <span class="mod-tag tag-amber" style="margin-bottom:8px;">⚽ ETAPA 4 • REINO DEL FÚTBOL</span>
          <h1>Mercado de Pases de Santi</h1>
          <p style="opacity:0.95;font-size:0.98rem;">
            Canjea los puntos que ganas estudiando Ciencias para subir de división y elegir tus equipos favoritos hasta llegar a la élite mundial.
          </p>
          <div class="fk-stats-row">
            <span class="fk-stat-chip">🏆 Disponibles: ${state.points} pts</span>
            <span class="fk-stat-chip">📈 Total ganado: ${state.totalEarned} pts</span>
            <span class="fk-stat-chip">⭐ Nivel actual: ${fb.highestTier} / 6</span>
            <span class="fk-stat-chip">🔄 Módulos completados: ${totalRepasos}</span>
          </div>
        </div>
      </div>

      ${lastTransferMessage ? `<div class="fk-alert">${lastTransferMessage}</div>` : ""}

      <div class="fk-progress-wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <strong>🏟️ Camino a la Cima Mundial (2.250 pts = ~3 repasos completos)</strong>
          <strong style="color:var(--green-dark);">${pctCareer}% completado</strong>
        </div>
        <div class="fk-bar-bg">
          <div class="fk-bar-fill" style="width:${Math.max(8, pctCareer)}%"></div>
        </div>
        <div style="font-size:0.86rem;color:var(--muted);margin-top:8px;">
          <strong>Tu trayectoria oficial:</strong>
          <div class="fk-timeline">${historyHTML}</div>
        </div>
      </div>

      ${TIERS.map(t => {
        const isUnlocked = t.tier <= fb.highestTier;
        const isNextTarget = t.tier === fb.highestTier + 1;
        const isLocked = t.tier > fb.highestTier + 1;
        const sectionClass = isNextTarget ? "current-target" : (isLocked ? "locked-tier" : "");

        return `
          <section class="fk-tier-section ${sectionClass}">
            <div class="fk-tier-header">
              <div>
                <h3 style="font-size:1.15rem;font-weight:800;">${t.title}</h3>
                <p style="font-size:0.88rem;color:var(--muted);">${t.subtitle}</p>
              </div>
              <span class="mod-tag ${isLocked ? 'tag-locked' : (isNextTarget ? 'tag-green' : 'tag-amber')}">
                ${t.cost === 0 ? '🎁 Club Inicial' : `💰 Fichaje: ${t.cost} pts • Media ${t.ovr}`}
              </span>
            </div>

            <div class="fk-clubs-grid">
              ${t.clubs.map(club => {
                const isSigned = fb.signedClubs.includes(club.id);
                const isCurrent = fb.currentClubId === club.id;
                const canAfford = state.points >= t.cost;

                let btnHTML = "";
                if (isCurrent) {
                  btnHTML = `<button class="btn-secondary" disabled style="width:100%;background:#FEF3C7;color:#92400E;">⭐ Tu club actual</button>`;
                } else if (isSigned) {
                  btnHTML = `<button class="btn-secondary" style="width:100%;" onclick="REINO_FUTBOL.signClub('${club.id}')">👕 Vestir camiseta</button>`;
                } else if (isLocked) {
                  btnHTML = `<button class="btn-secondary" disabled style="width:100%;">🔒 Ficha en Nivel ${t.tier - 1} primero</button>`;
                } else if (canAfford) {
                  btnHTML = `<button class="btn-primary" style="width:100%;" onclick="REINO_FUTBOL.signClub('${club.id}')">✍️ Fichar (${t.cost} pts)</button>`;
                } else {
                  btnHTML = `<button class="btn-secondary" disabled style="width:100%;">Faltan ${t.cost - state.points} pts</button>`;
                }

                return `
                  <div class="fk-club-card ${isCurrent ? 'active-club' : (isSigned ? 'signed-club' : '')}">
                    ${renderShieldSVG(club, 62)}
                    <h4>${club.name}</h4>
                    <small>${club.country}</small>
                    <small style="min-height:32px;">${club.motto}</small>
                    ${btnHTML}
                  </div>
                `;
              }).join("")}
            </div>
          </section>
        `;
      }).join("")}

      <div style="text-align:center;margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn-primary" onclick="goHome()">📚 Volver a estudiar y ganar más puntos</button>
      </div>
    `;
  }

  return {
    TIERS,
    getClubById,
    getNextTierInfo,
    signClub,
    render
  };
})();