/**
 * Portal de Abastecimiento TaDa
 * Archivo Principal de Lógica de Navegación, Estado y Vistas (Vanilla JS)
 */

// ==========================================
// 1. ESTADO GLOBAL DE LA APLICACIÓN (STATE MANAGEMENT)
// ==========================================
const AppState = {
    currentView: 'inicio',
    modalActive: null,
    solicitudesHielo: [
        { id: 'ICE-1001', ctm: 'CTM Bogotá Norte', fecha: '2026-08-16', cantidadBolsas: 50, tipo: 'Hielo en Cubos 5kg', estado: 'Aprobado', prioridad: 'Alta' },
        { id: 'ICE-1002', ctm: 'CTM Medellín Centro', fecha: '2026-08-16', cantidadBolsas: 30, tipo: 'Hielo Triturado 10kg', estado: 'Pendiente', prioridad: 'Urgente' },
        { id: 'ICE-1003', ctm: 'CTM Cali Valle', fecha: '2026-08-15', cantidadBolsas: 80, tipo: 'Hielo en Cubos 5kg', estado: 'Entregado', prioridad: 'Normal' },
        { id: 'ICE-1004', ctm: 'CTM Barranquilla Atlántico', fecha: '2026-08-14', cantidadBolsas: 100, tipo: 'Hielo en Bloque 25kg', estado: 'Aprobado', prioridad: 'Urgente' },
        { id: 'ICE-1005', ctm: 'CTM Bucaramanga Santander', fecha: '2026-08-14', cantidadBolsas: 45, tipo: 'Hielo en Cubos 5kg', estado: 'Entregado', prioridad: 'Normal' }
    ],
    pedidosTAT: [
        { id: 'TAT-8801', tienda: 'Cervecería El Barril', canal: 'TaDa', region: 'Andina', items: 12, total: '$450.000', estado: 'En Tránsito' },
        { id: 'TAT-8802', tienda: 'Licores y Abarrotes San José', canal: 'BEES', region: 'Pacífico', items: 25, total: '$1.200.000', estado: 'Completado' },
        { id: 'TAT-8803', tienda: 'Tienda La Esperanza', canal: 'BEER', region: 'Caribe', items: 8, total: '$320.000', estado: 'Pendiente' },
        { id: 'TAT-8804', tienda: 'Estanco El Dorado', canal: 'NABS', region: 'Andina', items: 18, total: '$780.000', estado: 'En Tránsito' }
    ]
};

// ==========================================
// 2. FUNCIÓN PRINCIPAL DE NAVEGACIÓN (GLOBAL)
// ==========================================
/**
 * Cambia la vista activa y actualiza la interfaz de usuario
 * @param {string} viewName - Nombre de la vista ('inicio', 'hielo', 'tat', etc.)
 */
function navigateTo(viewName) {
    console.log(`[Bavaria App] Navegando hacia: ${viewName}`);
    AppState.currentView = viewName;

    // 1. Actualizar estado visual de los botones en la barra lateral
    const navButtons = document.querySelectorAll('.nav-item');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        const onclickAttr = btn.getAttribute('onclick') || '';
        if (onclickAttr.includes(`'${viewName}'`) || onclickAttr.includes(`"${viewName}"`)) {
            btn.classList.add('active');
        }
    });

    // 2. Renderizar la vista correspondiente según la selección
    switch (viewName) {
        case 'inicio':
            renderInicioView();
            break;
        case 'hielo':
            renderHieloView();
            break;
        case 'tat':
            renderTATView();
            break;
        case 'centralizados':
            renderCentralizadosView();
            break;
        case 'directorio':
            renderDirectorioView();
            break;
        case 'calendario':
            renderCalendarioView();
            break;
        case 'novedades':
            renderNovedadesView();
            break;
        default:
            console.warn(`Vista desconocida: ${viewName}. Redirigiendo a inicio.`);
            renderInicioView();
            break;
    }

    // 3. Desplazamiento automático al inicio de la pantalla
    const container = document.getElementById('mainViewContainer');
    if (container) container.scrollTop = 0;
}

// Expone la función de manera explícita en el objeto Window para acceso global en file://
window.navigateTo = navigateTo;

// ==========================================
// 3. RENDERIZADO DE VISTAS
// ==========================================

/**
 * Vista 1: Dashboard de Inicio
 */
function renderInicioView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const totalCTMs = (window.dataMaster && window.dataMaster.ctms) ? window.dataMaster.ctms.length : 48;

    container.innerHTML = `
        <div class="dashboard-wrapper flex flex-col gap-6">
            
            <!-- Hero Banner Institucional TaDa -->
            <div class="bv-hero-card relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-900 via-sky-950 to-blue-900 text-white p-8 shadow-lg">
                <div class="relative z-10 max-w-3xl">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-200 text-xs font-semibold mb-4 border border-violet-400/30">
    <i class="fa-solid fa-wand-magic-sparkles"></i>
    Portal Nacional
</div>

<h2 class="text-4xl font-bold tracking-tight mb-3">
    Portal Nacional de Abastecimiento
</h2>

<p class="text-violet-200 font-semibold text-lg mb-3">
    TaDa • BEES • BEER • NABS
</p>

<p class="text-slate-200 text-base leading-relaxed mb-6">
    Centraliza solicitudes operativas,
    abastecimiento, documentación,
    proveedores y seguimiento nacional
    desde una única plataforma.
</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="navigateTo('hielo')" class="btn-primary-gold bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-md transition">
                            <i class="fa-solid fa-icicles"></i> 🧊 Solicitar Hielo
                        </button>
                        <button onclick="navigateTo('tat')" class="btn-secondary-transparent bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition">
                            <i class="fa-solid fa-boxes-packing"></i> Nuevo Pedido TAT
                        </button>
                    </div>
                </div>

                <div class="absolute right-6 top-6 bottom-6 w-1/3 flex items-center justify-center">
    assets/descarga.png
</div>
            </div>

            <!-- Grid KPIs Operativos -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="kpi-card border-l-4 border-cyan-500 bg-white p-5 rounded-xl shadow-sm">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs text-slate-500 font-semibold uppercase">Solicitudes Hielo (Hoy)</p>
                            <h3 class="text-2xl font-bold text-cyan-600 mt-1">${AppState.solicitudesHielo.length}</h3>
                        </div>
                        <div class="w-10 h-10 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-cubes-stacked"></i>
                        </div>
                    </div>
                    <p class="text-xs text-slate-400 mt-3"><span class="text-emerald-600 font-medium"><i class="fa-solid fa-arrow-trend-up"></i> 100%</span> Solicitudes restringidas</p>
                </div>

                <div class="kpi-card border-l-4 border-amber-500 bg-white p-5 rounded-xl shadow-sm">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs text-slate-500 font-semibold uppercase">Abastecimiento</p>
                            <h3 class="text-2xl font-bold text-amber-600 mt-1">${AppState.pedidosTAT.length}</h3>
                        </div>
                        <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-truck-ramp-box"></i>
                        </div>
                    </div>
                    <p class="text-xs text-slate-400 mt-3">Pedidos en gestion</p>
                </div>

                <div class="kpi-card border-l-4 border-blue-600 bg-white p-5 rounded-xl shadow-sm">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs text-slate-500 font-semibold uppercase">CTMs Activos</p>
                            <h3 class="text-2xl font-bold text-blue-900 mt-1">${totalCTMs}</h3>
                        </div>
                        <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-network-wired"></i>
                        </div>
                    </div>
                    <p class="text-xs text-slate-400 mt-3">Cobertura nacional 100%</p>
                </div>

                <div class="kpi-card border-l-4 border-rose-500 bg-white p-5 rounded-xl shadow-sm">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-xs text-slate-500 font-semibold uppercase">Novedades Operativas</p>
                            <h3 class="text-2xl font-bold text-rose-600 mt-1">2</h3>
                        </div>
                        <div class="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center text-lg">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                        </div>
                    </div>
                    <p class="text-xs text-rose-600 font-medium mt-3">Atención requerida en zona Norte</p>
                </div>
            </div>

            <!-- Accesos Rápidos a Módulos -->
            <div class="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-grip text-amber-500"></i> Módulos Principales de Operación
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <button onclick="navigateTo('hielo')" class="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-blue-900 hover:shadow-md transition text-left cursor-pointer">
                        <div class="p-3 bg-cyan-100 text-cyan-700 rounded-lg">
                            <i class="fa-solid fa-snowflake text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800">Solicitud de Hielo CTM</h4>
                            <p class="text-xs text-slate-500 mt-1">Reabastecimiento y gestión de frío para CTMs.</p>
                        </div>
                    </button>

                    <button onclick="navigateTo('tat')" class="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-blue-900 hover:shadow-md transition text-left cursor-pointer">
                        <div class="p-3 bg-amber-100 text-amber-700 rounded-lg">
                            <i class="fa-solid fa-store text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800">Pedidos TAT</h4>
                            <p class="text-xs text-slate-500 mt-1">Suministro para tiendas del canal Tienda a Tienda.</p>
                        </div>
                    </button>

                    <button onclick="navigateTo('centralizados')" class="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-blue-900 hover:shadow-md transition text-left cursor-pointer">
                        <div class="p-3 bg-indigo-100 text-indigo-700 rounded-lg">
                            <i class="fa-solid fa-warehouse text-2xl"></i>
                        </div>
                        <div>
                            <h4 class="font-bold text-slate-800">Pedidos Centralizados</h4>
                            <p class="text-xs text-slate-500 mt-1">Consolidados para grandes distribuidores.</p>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    `;
}

/**
 * Vista 2: Solicitud de Hielo CTM
 */
function renderHieloView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    let filasTabla = AppState.solicitudesHielo.map(sol => `
        <tr class="border-b border-slate-100 hover:bg-slate-50">
            <td class="p-3 text-xs font-bold text-slate-700">${sol.id}</td>
            <td class="p-3 text-xs text-slate-600">${sol.ctm}</td>
            <td class="p-3 text-xs text-slate-600">${sol.fecha}</td>
            <td class="p-3 text-xs text-slate-600">${sol.tipo}</td>
            <td class="p-3 text-xs font-semibold text-slate-800">${sol.cantidadBolsas} bolsas</td>
            <td class="p-3 text-xs">
                <span class="px-2 py-1 rounded text-[10px] font-bold ${sol.prioridad === 'Urgente' ? 'bg-rose-100 text-rose-700' : sol.prioridad === 'Alta' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'}">
                    ${sol.prioridad}
                </span>
            </td>
            <td class="p-3 text-xs">
                <span class="px-2 py-1 rounded text-[10px] font-bold ${sol.estado === 'Aprobado' ? 'bg-emerald-100 text-emerald-700' : sol.estado === 'Pendiente' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'}">
                    ${sol.estado}
                </span>
            </td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="flex flex-col gap-6">
            <div class="flex flex-wrap justify-between items-center bg-white p-6 rounded-xl shadow-sm border border-slate-200 gap-4">
                <div>
                    <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <i class="fa-solid fa-icicles text-cyan-500"></i> Gestión de Suministro de Hielo CTM
                    </h2>
                    <p class="text-xs text-slate-500 mt-1">Control de pedidos de cadena de frío para centros de distribución nacional.</p>
                </div>
                <button onclick="openModal('modalHielo')" class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2 rounded-lg flex items-center gap-2 text-xs shadow transition cursor-pointer">
                    <i class="fa-solid fa-plus"></i> Nueva Solicitud de Hielo
                </button>
            </div>

            <!-- Tabla de Historial -->
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="font-bold text-slate-800 text-sm">Solicitudes Registradas (${AppState.solicitudesHielo.length})</h3>
                    <button onclick="exportarCSV('hielo')" class="text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1 cursor-pointer">
                        <i class="fa-solid fa-file-csv text-emerald-600"></i> Exportar CSV
                    </button>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 text-slate-500 text-[11px] uppercase font-semibold border-b border-slate-200">
                                <th class="p-3">Código</th>
                                <th class="p-3">CTM Destino</th>
                                <th class="p-3">Fecha</th>
                                <th class="p-3">Tipo de Hielo</th>
                                <th class="p-3">Cantidad</th>
                                <th class="p-3">Prioridad</th>
                                <th class="p-3">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filasTabla}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * Vista 3: Pedidos TAT
 */
function renderTATView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    let filasTAT = AppState.pedidosTAT.map(p => `
        <tr class="border-b border-slate-100 hover:bg-slate-50">
            <td class="p-3 text-xs font-bold text-slate-700">${p.id}</td>
            <td class="p-3 text-xs text-slate-600 font-semibold">${p.tienda}</td>
            <td class="p-3 text-xs text-slate-600"><span class="px-2 py-0.5 rounded bg-slate-100 font-bold text-[10px]">${p.canal}</span></td>
            <td class="p-3 text-xs text-slate-600">${p.region}</td>
            <td class="p-3 text-xs text-slate-600">${p.items} productos</td>
            <td class="p-3 text-xs font-bold text-slate-800">${p.total}</td>
            <td class="p-3 text-xs">
                <span class="px-2 py-1 rounded text-[10px] font-bold ${p.estado === 'Completado' ? 'bg-emerald-100 text-emerald-700' : p.estado === 'En Tránsito' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}">
                    ${p.estado}
                </span>
            </td>
        </tr>
    `).join('');

    container.innerHTML = `
        <div class="flex flex-col gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
                <div>
                    <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
                        <i class="fa-solid fa-store text-amber-500"></i> Pedidos Tienda a Tienda (TAT)
                    </h2>
                    <p class="text-xs text-slate-500 mt-1">Módulo de aprovisionamiento directo para tiendas de la red TaDa, BEES, BEER y NABS.</p>
                </div>
                <button onclick="exportarCSV('tat')" class="text-xs bg-slate-100 hover:bg-slate-200 font-semibold px-3 py-2 rounded text-slate-700 flex items-center gap-1 cursor-pointer">
                    <i class="fa-solid fa-download"></i> Exportar Registro
                </button>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 text-slate-500 text-[11px] uppercase font-semibold border-b border-slate-200">
                                <th class="p-3">N° Pedido</th>
                                <th class="p-3">Tienda / Cliente</th>
                                <th class="p-3">Canal</th>
                                <th class="p-3">Región</th>
                                <th class="p-3">Ítems</th>
                                <th class="p-3">Valor Total</th>
                                <th class="p-3">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filasTAT}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * Vista 4: Pedidos Centralizados
 */
function renderCentralizadosView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                <i class="fa-solid fa-warehouse text-indigo-600"></i> Pedidos Centralizados
            </h2>
            <p class="text-xs text-slate-500 mb-6">Gestión de grandes volúmenes y entregas consolidadas para canal moderno y distribuidores.</p>
            <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-900 text-xs flex items-center gap-2">
                <i class="fa-solid fa-circle-check text-indigo-600 text-base"></i>
                <span>Canal conectado con el sistema central de inventario Bavaria.</span>
            </div>
        </div>
    `;
}

/**
 * Vista 5: Directorio CTMs
 */
function renderDirectorioView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    const ctmsMock = [
        { nombre: 'CTM Bogotá Norte', coordinador: 'Carlos Mendoza', telefono: '+57 300 123 4567', ciudad: 'Bogotá' },
        { nombre: 'CTM Medellín Centro', coordinador: 'Ana María Gómez', telefono: '+57 310 987 6543', ciudad: 'Medellín' },
        { nombre: 'CTM Cali Valle', coordinador: 'Jorge Rivera', telefono: '+57 315 456 7890', ciudad: 'Cali' },
        { nombre: 'CTM Barranquilla', coordinador: 'Luisa Fernanda', telefono: '+57 301 234 5678', ciudad: 'Barranquilla' }
    ];

    let cards = ctmsMock.map(c => `
        <div class="p-4 border border-slate-200 rounded-lg bg-slate-50 flex flex-col justify-between">
            <div>
                <h4 class="font-bold text-slate-800 text-sm">${c.nombre}</h4>
                <p class="text-xs text-slate-500 mt-1"><i class="fa-solid fa-user text-slate-400 mr-1"></i> ${c.coordinador}</p>
                <p class="text-xs text-slate-500"><i class="fa-solid fa-phone text-slate-400 mr-1"></i> ${c.telefono}</p>
            </div>
            <span class="mt-3 text-[10px] font-bold text-blue-900 uppercase tracking-wide">${c.ciudad}</span>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                <i class="fa-solid fa-address-book text-slate-700"></i> Directorio Nacional de CTMs
            </h2>
            <p class="text-xs text-slate-500 mb-6">Listado de contactos, coordinadores logísticos y responsables de zonas CTM.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                ${cards}
            </div>
        </div>
    `;
}

/**
 * Vista 6: Calendario Operativo
 */
function renderCalendarioView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                <i class="fa-solid fa-calendar-days text-blue-600"></i> Calendario Operativo de Despachos
            </h2>
            <p class="text-xs text-slate-500 mb-6">Programación semanal de rutas de abastecimiento y entregas de frío.</p>
            <div class="p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-900 text-xs">
                <i class="fa-solid fa-clock mr-1"></i> Próxima ventana de despacho masivo: Lunes 06:00 AM.
            </div>
        </div>
    `;
}

/**
 * Vista 7: Novedades
 */
function renderNovedadesView() {
    const container = document.getElementById('mainViewContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
                <i class="fa-solid fa-bullhorn text-rose-500"></i> Novedades y Alertas Operativas
            </h2>
            <p class="text-xs text-slate-500 mb-6">Comunicados oficiales sobre stock, cadena de frío y red vial.</p>
            <div class="space-y-3">
                <div class="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-lg">
                    <h4 class="font-bold text-rose-800 text-xs">Alerta de Cierre Vial - Ruta Caribe</h4>
                    <p class="text-xs text-rose-700 mt-1">Retraso estimado de 2 horas en despachos hacia Barranquilla.</p>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// 4. GESTIÓN DE MODALES Y FORMULARIOS
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        // Fallback dinámico si el modal no existe en el DOM HTML
        crearYMostrarModalHielo();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function crearYMostrarModalHielo() {
    let modalExistente = document.getElementById('modalHieloDinamico');
    if (modalExistente) {
        modalExistente.classList.remove('hidden');
        modalExistente.classList.add('flex');
        return;
    }

    const modalHTML = document.createElement('div');
    modalHTML.id = 'modalHieloDinamico';
    modalHTML.className = 'fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4';
    modalHTML.innerHTML = `
        <div class="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-fade-in">
            <div class="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
                <h3 class="font-bold text-slate-800 text-base flex items-center gap-2">
                    <i class="fa-solid fa-snowflake text-cyan-500"></i> Nueva Solicitud de Hielo
                </h3>
                <button onclick="closeModal('modalHieloDinamico')" class="text-slate-400 hover:text-slate-600 text-lg cursor-pointer">&times;</button>
            </div>
            <form id="formNuevaSolicitudHielo" onsubmit="guardarSolicitudHielo(event)" class="space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">CTM Destino</label>
                    <select id="inputCTM" required class="w-full border border-slate-300 rounded-lg p-2 text-xs bg-white text-slate-800 focus:outline-none focus:border-blue-900">
                        <option value="CTM Bogotá Norte">CTM Bogotá Norte</option>
                        <option value="CTM Medellín Centro">CTM Medellín Centro</option>
                        <option value="CTM Cali Valle">CTM Cali Valle</option>
                        <option value="CTM Barranquilla">CTM Barranquilla</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Tipo de Hielo</label>
                    <select id="inputTipo" required class="w-full border border-slate-300 rounded-lg p-2 text-xs bg-white text-slate-800 focus:outline-none focus:border-blue-900">
                        <option value="Hielo en Cubos 5kg">Hielo en Cubos 5kg</option>
                        <option value="Hielo Triturado 10kg">Hielo Triturado 10kg</option>
                        <option value="Hielo en Bloque 25kg">Hielo en Bloque 25kg</option>
                    </select>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Cantidad (Bolsas)</label>
                    <input type="number" id="inputCantidad" min="1" max="500" value="50" required class="w-full border border-slate-300 rounded-lg p-2 text-xs text-slate-800 focus:outline-none focus:border-blue-900" />
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Prioridad</label>
                    <select id="inputPrioridad" required class="w-full border border-slate-300 rounded-lg p-2 text-xs bg-white text-slate-800 focus:outline-none focus:border-blue-900">
                        <option value="Normal">Normal</option>
                        <option value="Alta">Alta</option>
                        <option value="Urgente">Urgente</option>
                    </select>
                </div>
                <div class="flex justify-end gap-2 pt-3 border-t border-slate-100">
                    <button type="button" onclick="closeModal('modalHieloDinamico')" class="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer">Cancelar</button>
                    <button type="submit" class="px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg shadow cursor-pointer">Guardar Solicitud</button>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(modalHTML);
}

function guardarSolicitudHielo(e) {
    e.preventDefault();
    const ctm = document.getElementById('inputCTM').value;
    const tipo = document.getElementById('inputTipo').value;
    const cantidad = parseInt(document.getElementById('inputCantidad').value, 10);
    const prioridad = document.getElementById('inputPrioridad').value;

    const nuevaSol = {
        id: `ICE-${1000 + AppState.solicitudesHielo.length + 1}`,
        ctm: ctm,
        fecha: new Date().toISOString().split('T')[0],
        tipo: tipo,
        cantidadBolsas: cantidad,
        prioridad: prioridad,
        estado: 'Pendiente'
    };

    AppState.solicitudesHielo.unshift(nuevaSol);
    closeModal('modalHieloDinamico');
    
    if (AppState.currentView === 'hielo' || AppState.currentView === 'inicio') {
        navigateTo(AppState.currentView);
    }
}

window.openModal = openModal;
window.closeModal = closeModal;
window.guardarSolicitudHielo = guardarSolicitudHielo;

// ==========================================
// 5. EXPORTACIÓN DE DATOS
// ==========================================
function exportarCSV(tipo) {
    console.log(`[Bavaria App] Exportando datos de: ${tipo}`);
    let data = tipo === 'hielo' ? AppState.solicitudesHielo : AppState.pedidosTAT;
    if (!data || data.length === 0) return;

    let csvContent = "data:text/csv;charset=utf-8,";
    const headers = Object.keys(data[0]).join(",");
    csvContent += headers + "\r\n";

    data.forEach(row => {
        csvContent += Object.values(row).map(v => `"${v}"`).join(",") + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `bavaria_${tipo}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.exportarCSV = exportarCSV;

// ==========================================
// 6. INICIALIZACIÓN Y DELEGACIÓN DE EVENTOS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('[TaDa App] Inicializando Portal Nacional...');
    
    // 1. Cargar la vista inicial por defecto
    navigateTo('inicio');

    // 2. Delegación global de eventos de clic (respaldo redundante)
    document.addEventListener('click', (event) => {
        const targetBtn = event.target.closest('[data-navigate]');
        if (targetBtn) {
            const viewName = targetBtn.getAttribute('data-navigate');
            if (viewName) {
                navigateTo(viewName);
            }
        }
    });
});