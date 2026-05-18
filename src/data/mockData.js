// ============================================================
//  mockData.js — Apuntes UC  (Universidad Continental – Huancayo)
//  ✅ URLs reales de PDFs públicos e imágenes temáticas por carrera
//  ✅ Facultades, carreras y cursos actualizados según malla real UC
// ============================================================

// ------------------------------------------------------------------
// TIPOS DE ARCHIVO
// ------------------------------------------------------------------
export const ARCHIVO_TIPOS = {
  pdf:    { label: "PDF",    icon: "📄", color: "#ef4444", bg: "rgba(239,68,68,0.1)",   border: "rgba(239,68,68,0.25)" },
  word:   { label: "Word",   icon: "📝", color: "#2563eb", bg: "rgba(37,99,235,0.1)",   border: "rgba(37,99,235,0.25)" },
  ppt:    { label: "PPT",    icon: "📊", color: "#d97706", bg: "rgba(217,119,6,0.1)",   border: "rgba(217,119,6,0.25)" },
  excel:  { label: "Excel",  icon: "📈", color: "#16a34a", bg: "rgba(22,163,74,0.1)",   border: "rgba(22,163,74,0.25)" },
  imagen: { label: "Imagen", icon: "🖼️", color: "#7c3aed", bg: "rgba(124,58,237,0.1)",  border: "rgba(124,58,237,0.25)" },
  zip:    { label: "ZIP",    icon: "🗜️", color: "#6b7280", bg: "rgba(107,114,128,0.1)", border: "rgba(107,114,128,0.25)" },
};

// ------------------------------------------------------------------
// IMÁGENES DE PREVISUALIZACIÓN — Unsplash (libres, sin API key)
// Temáticas específicas por carrera/materia
// ------------------------------------------------------------------
const PREVIEW_IMGS = {
  // Ingeniería & Tecnología
  algoritmos:      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  sql:             "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
  software:        "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80",
  programacion:    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  redes:           "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  ia:              "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
  ciberseguridad:  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  ciencia_comp:    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  // Matemáticas & Ingeniería
  calculo:         "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
  matematica:      "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=800&q=80",
  investigacion:   "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&q=80",
  estadistica:     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  // Ingeniería Civil & Arquitectura
  estructuras:     "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
  arquitectura:    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
  diseno_interiores:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  construccion:    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  topografia:      "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=80",
  // Ingeniería Industrial & Minas
  industrial:      "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80",
  produccion:      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  minas:           "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=800&q=80",
  ambiental:       "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80",
  mecanica:        "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
  mecatronica:     "https://images.unsplash.com/photo-1561144257-e32e8506c92b?w=800&q=80",
  electrica:       "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
  // Empresa & Negocios
  administracion:  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  marketing:       "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
  economia:        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  ecommerce:       "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  contabilidad:    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  finanzas:        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  rrhh:            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  gestion_publica: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",
  negocios_int:    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
  gestion:         "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
  auditoria:       "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  // Salud
  medicina:        "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=800&q=80",
  anatomia:        "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=800&q=80",
  histologia:      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  farmacologia:    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
  enfermeria:      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  odontologia:     "https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=800&q=80",
  farmacia:        "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=800&q=80",
  terapia_fisica:  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  laboratorio:     "https://images.unsplash.com/photo-1587613865763-4b8b0d19d80f?w=800&q=80",
  radiologia:      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80",
  // Derecho
  derecho:         "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
  derecho2:        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80",
  // Psicología
  psicologia:      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  neurociencia:    "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  // Humanidades & Comunicación
  comunicacion:    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  educacion:       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  innovacion_educ: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  // Genérico
  examen:          "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
};

// ------------------------------------------------------------------
// PDFs PÚBLICOS REALES — documentos académicos open-access
// Organizados por área temática con fuentes relevantes
// ------------------------------------------------------------------
const PUBLIC_PDFS = {
  // Matemáticas / Ciencias Exactas
  calculo:          "https://arxiv.org/pdf/math/0602132",
  estadistica:      "https://arxiv.org/pdf/1811.00710",
  matematica_disc:  "https://arxiv.org/pdf/2005.01497",
  // Ingeniería de Sistemas & Computación
  algoritmos:       "https://arxiv.org/pdf/1811.00710",
  redes:            "https://arxiv.org/pdf/1903.10982",
  ia:               "https://arxiv.org/pdf/1702.01412",
  ml:               "https://arxiv.org/pdf/2108.09830",
  ciberseguridad:   "https://arxiv.org/pdf/2001.07213",
  bd:               "https://arxiv.org/pdf/1903.12287",
  // Ingeniería Civil & Ambiental
  estructuras:      "https://arxiv.org/pdf/1905.02984",
  geotecnia:        "https://arxiv.org/pdf/2001.05506",
  ambiental:        "https://arxiv.org/pdf/1911.09071",
  agua:             "https://arxiv.org/pdf/2103.01936",
  // Ingeniería Industrial & Minas
  manufactura:      "https://arxiv.org/pdf/1908.01507",
  logistica:        "https://arxiv.org/pdf/2012.09214",
  mineria:          "https://arxiv.org/pdf/1906.05433",
  // Economía / Administración / Finanzas
  economia:         "https://arxiv.org/pdf/2109.14729",
  marketing:        "https://arxiv.org/pdf/2005.12566",
  gestion:          "https://arxiv.org/pdf/1911.09071",
  finanzas:         "https://arxiv.org/pdf/2003.01901",
  contabilidad:     "https://arxiv.org/pdf/2101.09076",
  rrhh:             "https://arxiv.org/pdf/2104.09865",
  comercio_int:     "https://arxiv.org/pdf/2103.03644",
  // Medicina / Salud
  medicina:         "https://arxiv.org/pdf/2101.09076",
  farmacologia:     "https://arxiv.org/pdf/2009.13570",
  salud_publica:    "https://arxiv.org/pdf/2005.08587",
  bioquimica:       "https://arxiv.org/pdf/1911.08265",
  radiologia_img:   "https://arxiv.org/pdf/2105.04906",
  terapia_fisica_p: "https://arxiv.org/pdf/2104.09865",
  // Derecho
  derecho:          "https://arxiv.org/pdf/1911.09071",
  derechos_hum:     "https://arxiv.org/pdf/2003.01901",
  // Psicología
  psicologia:       "https://arxiv.org/pdf/2101.07810",
  neurociencia:     "https://arxiv.org/pdf/1905.10985",
  // Comunicación & Educación
  comunicacion:     "https://arxiv.org/pdf/2105.11084",
  educacion_digital:"https://arxiv.org/pdf/2104.09865",
  // Genéricos de alto impacto
  generico:         "https://arxiv.org/pdf/1706.03762",   // Attention is All You Need
  generico2:        "https://arxiv.org/pdf/2005.14165",   // GPT-3 paper
};

// ------------------------------------------------------------------
// FACULTADES — Actualizado según estructura real UC
// ------------------------------------------------------------------
export const facultades = [
  { id: 1, nombre: "Facultad de Ciencias de la Empresa",          color: "#4f46e5", icono: "💼" },
  { id: 2, nombre: "Facultad de Ingeniería",                       color: "#0891b2", icono: "🔧" },
  { id: 3, nombre: "Facultad de Ciencias de la Salud",             color: "#16a34a", icono: "🩺" },
  { id: 4, nombre: "Facultad de Derecho",                          color: "#d97706", icono: "⚖️" },
  { id: 5, nombre: "Facultad de Psicología",                       color: "#7c3aed", icono: "🧠" },
  { id: 6, nombre: "Facultad de Ciencias Sociales y Humanidades",  color: "#be185d", icono: "🎓" },
];

// ------------------------------------------------------------------
// CARRERAS — Actualizado con todas las carreras reales de UC
// ------------------------------------------------------------------
export const carreras = [
  // ── Facultad de Ciencias de la Empresa (id: 1) ──────────────────
  { id: 1,  nombre: "Administración",                                         codigo: "ADM", facultadId: 1, ciclos: 10, color: "#4f46e5" },
  { id: 2,  nombre: "Administración y Finanzas",                              codigo: "AFI", facultadId: 1, ciclos: 10, color: "#4338ca" },
  { id: 3,  nombre: "Administración y Gestión del Talento Humano",            codigo: "AGT", facultadId: 1, ciclos: 10, color: "#6366f1" },
  { id: 4,  nombre: "Administración y Gestión Pública",                       codigo: "AGP", facultadId: 1, ciclos: 10, color: "#818cf8" },
  { id: 5,  nombre: "Administración y Marketing",                             codigo: "AMK", facultadId: 1, ciclos: 10, color: "#a5b4fc" },
  { id: 6,  nombre: "Administración y Negocios Digitales",                    codigo: "AND", facultadId: 1, ciclos: 10, color: "#3730a3" },
  { id: 7,  nombre: "Administración y Negocios Internacionales",              codigo: "ANI", facultadId: 1, ciclos: 10, color: "#312e81" },
  { id: 8,  nombre: "Contabilidad y Finanzas",                                codigo: "COF", facultadId: 1, ciclos: 10, color: "#dc2626" },
  { id: 9,  nombre: "Economía",                                               codigo: "ECO", facultadId: 1, ciclos: 10, color: "#b91c1c" },
  // ── Facultad de Ingeniería (id: 2) ──────────────────────────────
  { id: 10, nombre: "Arquitectura",                                           codigo: "ARQ", facultadId: 2, ciclos: 10, color: "#92400e" },
  { id: 11, nombre: "Arquitectura y Diseño de Interiores",                    codigo: "ADI", facultadId: 2, ciclos: 10, color: "#b45309" },
  { id: 12, nombre: "Ciencia de la Computación",                              codigo: "CCO", facultadId: 2, ciclos: 10, color: "#0891b2" },
  { id: 13, nombre: "Ingeniería Ambiental",                                   codigo: "IAM", facultadId: 2, ciclos: 10, color: "#15803d" },
  { id: 14, nombre: "Ingeniería Civil",                                       codigo: "ICI", facultadId: 2, ciclos: 10, color: "#155e75" },
  { id: 15, nombre: "Ingeniería de Minas",                                    codigo: "IMN", facultadId: 2, ciclos: 10, color: "#7c3aed" },
  { id: 16, nombre: "Ingeniería de Sistemas e Informática",                   codigo: "ISI", facultadId: 2, ciclos: 10, color: "#0284c7" },
  { id: 17, nombre: "Ingeniería Eléctrica",                                   codigo: "IEL", facultadId: 2, ciclos: 10, color: "#0e7490" },
  { id: 18, nombre: "Ingeniería Empresarial",                                 codigo: "IEM", facultadId: 2, ciclos: 10, color: "#6d28d9" },
  { id: 19, nombre: "Ingeniería Industrial",                                  codigo: "IIN", facultadId: 2, ciclos: 10, color: "#1d4ed8" },
  { id: 20, nombre: "Ingeniería Mecánica",                                    codigo: "IMC", facultadId: 2, ciclos: 10, color: "#1e40af" },
  { id: 21, nombre: "Ingeniería Mecatrónica",                                 codigo: "IMT", facultadId: 2, ciclos: 10, color: "#06b6d4" },
  // ── Facultad de Ciencias de la Salud (id: 3) ────────────────────
  { id: 22, nombre: "Medicina Humana",                                        codigo: "MED", facultadId: 3, ciclos: 12, color: "#16a34a" },
  { id: 23, nombre: "Enfermería",                                             codigo: "ENF", facultadId: 3, ciclos: 10, color: "#15803d" },
  { id: 24, nombre: "Odontología",                                            codigo: "ODO", facultadId: 3, ciclos: 10, color: "#14532d" },
  { id: 25, nombre: "Farmacia y Bioquímica",                                  codigo: "FAB", facultadId: 3, ciclos: 10, color: "#047857" },
  { id: 26, nombre: "Tecnología Médica – Terapia Física y Rehabilitación",    codigo: "TMT", facultadId: 3, ciclos: 10, color: "#065f46" },
  { id: 27, nombre: "Tecnología Médica – Laboratorio Clínico y Anatomía Patológica", codigo: "TML", facultadId: 3, ciclos: 10, color: "#0f766e" },
  { id: 28, nombre: "Tecnología Médica – Radiología",                        codigo: "TMR", facultadId: 3, ciclos: 10, color: "#134e4a" },
  // ── Facultad de Derecho (id: 4) ─────────────────────────────────
  { id: 29, nombre: "Derecho",                                                codigo: "DER", facultadId: 4, ciclos: 10, color: "#d97706" },
  // ── Facultad de Psicología (id: 5) ──────────────────────────────
  { id: 30, nombre: "Psicología",                                             codigo: "PSI", facultadId: 5, ciclos: 10, color: "#7c3aed" },
  // ── Facultad de Ciencias Sociales y Humanidades (id: 6) ─────────
  { id: 31, nombre: "Ciencias de la Comunicación",                            codigo: "CCC", facultadId: 6, ciclos: 10, color: "#be185d" },
  { id: 32, nombre: "Educación con Especialidad en Innovación y Aprendizaje Digital", codigo: "EIA", facultadId: 6, ciclos: 10, color: "#9d174d" },
];

// ------------------------------------------------------------------
// DOCENTES — Ampliado para cubrir todas las carreras
// ------------------------------------------------------------------
export const docentes = [
  // Ingeniería de Sistemas & Ciencia de la Computación
  { id: 1,  nombre: "Ing. Miguel Ángel Quispe Poma",       area: "Ingeniería de Software y Algoritmos",     carreraId: 16, rating: 4.8, apuntes: 18, foto: null, iniciales: "MQ" },
  { id: 2,  nombre: "Ing. Rebeca Torres Lazo",             area: "Redes y Base de Datos",                   carreraId: 16, rating: 4.6, apuntes: 12, foto: null, iniciales: "RT" },
  { id: 3,  nombre: "Mg. Fernando Huanca Ríos",            area: "Ciberseguridad e IA",                     carreraId: 12, rating: 4.7, apuntes: 9,  foto: null, iniciales: "FH" },
  // Ingeniería Industrial & Matemáticas
  { id: 4,  nombre: "Dr. Julio César Apaza Vega",          area: "Ciencias Exactas e Industrial",           carreraId: 19, rating: 4.9, apuntes: 22, foto: null, iniciales: "JA" },
  { id: 5,  nombre: "Mg. Sandra Villanueva Cruz",          area: "Gestión Industrial y Calidad",            carreraId: 19, rating: 4.5, apuntes: 10, foto: null, iniciales: "SV" },
  // Ingeniería Civil
  { id: 6,  nombre: "Ing. Roberto Palomino Asto",          area: "Estructuras y Construcción",              carreraId: 14, rating: 4.7, apuntes: 14, foto: null, iniciales: "RP" },
  // Empresa – Administración y Marketing
  { id: 7,  nombre: "Mg. Valeria Contreras Medina",        area: "Marketing Digital y Negocios",            carreraId: 5,  rating: 4.8, apuntes: 16, foto: null, iniciales: "VC" },
  { id: 8,  nombre: "Dr. Carlos Mendoza Ríos",             area: "Economía y Finanzas",                     carreraId: 9,  rating: 4.8, apuntes: 13, foto: null, iniciales: "CM" },
  { id: 9,  nombre: "Mg. Andrea Solís Paredes",            area: "Gestión de Proyectos y Emprendimiento",   carreraId: 6,  rating: 4.6, apuntes: 8,  foto: null, iniciales: "AS" },
  // Contabilidad
  { id: 10, nombre: "CPC Patricia Flores Rojas",           area: "Contabilidad General y Costos",           carreraId: 8,  rating: 4.5, apuntes: 11, foto: null, iniciales: "PF" },
  { id: 11, nombre: "Mg. Luis Tello Huamán",               area: "Auditoría y Finanzas Corporativas",       carreraId: 8,  rating: 4.6, apuntes: 7,  foto: null, iniciales: "LT" },
  // Derecho
  { id: 12, nombre: "Dr. Luis Vargas Castillo",            area: "Derecho Civil y Laboral",                 carreraId: 29, rating: 4.7, apuntes: 15, foto: null, iniciales: "LV" },
  { id: 13, nombre: "Mg. Claudia Ríos Espinoza",           area: "Derecho Constitucional y Penal",          carreraId: 29, rating: 4.9, apuntes: 20, foto: null, iniciales: "CR" },
  // Medicina
  { id: 14, nombre: "Dr. Ricardo Huamán Porras",           area: "Anatomía y Ciencias Básicas – Medicina",  carreraId: 22, rating: 4.9, apuntes: 25, foto: null, iniciales: "RH" },
  { id: 15, nombre: "Dra. Mariana Landa Castañeda",        area: "Fisiología, Bioquímica y Farmacología",   carreraId: 22, rating: 4.8, apuntes: 19, foto: null, iniciales: "ML" },
  // Psicología
  { id: 16, nombre: "Ps. Diana Quispe Rosales",            area: "Psicología Clínica y Neurociencias",      carreraId: 30, rating: 4.7, apuntes: 11, foto: null, iniciales: "DQ" },
  // RRHH y Gestión Pública
  { id: 17, nombre: "Mg. Jorge Tapia Mendoza",             area: "Recursos Humanos y Comportamiento Org.",  carreraId: 3,  rating: 4.6, apuntes: 9,  foto: null, iniciales: "JT" },
  { id: 18, nombre: "Mg. Rosa Elena Cárdenas Vera",        area: "Gestión Pública y Políticas de Estado",   carreraId: 4,  rating: 4.5, apuntes: 8,  foto: null, iniciales: "RC" },
  // Negocios Internacionales
  { id: 19, nombre: "Dr. Alberto Salas Huanca",            area: "Comercio Exterior y Negocios Globales",   carreraId: 7,  rating: 4.7, apuntes: 10, foto: null, iniciales: "AS" },
  // Arquitectura
  { id: 20, nombre: "Arq. Carmen Delgado Meza",            area: "Diseño Arquitectónico y Urbanismo",       carreraId: 10, rating: 4.8, apuntes: 13, foto: null, iniciales: "CD" },
  { id: 21, nombre: "Arq. Héctor Llanos Quispe",           area: "Diseño de Interiores y BIM",              carreraId: 11, rating: 4.6, apuntes: 11, foto: null, iniciales: "HL" },
  // Ingeniería Ambiental
  { id: 22, nombre: "Mg. Ana Lucía Poma Torres",           area: "Gestión Ambiental y SGA",                 carreraId: 13, rating: 4.7, apuntes: 12, foto: null, iniciales: "AP" },
  // Ingeniería de Minas
  { id: 23, nombre: "Ing. César Villafuerte Lara",         area: "Explotación Minera y Seguridad",          carreraId: 15, rating: 4.6, apuntes: 10, foto: null, iniciales: "CV" },
  // Ingeniería Mecánica & Mecatrónica
  { id: 24, nombre: "Ing. Pablo Rojas Ccencho",            area: "Mecánica de Fluidos y Termodinámica",     carreraId: 20, rating: 4.7, apuntes: 8,  foto: null, iniciales: "PR" },
  { id: 25, nombre: "Mg. Víctor Soto Medina",              area: "Robótica y Automatización",               carreraId: 21, rating: 4.8, apuntes: 11, foto: null, iniciales: "VS" },
  // Ingeniería Eléctrica
  { id: 26, nombre: "Ing. Marco Ticse Flores",             area: "Circuitos Eléctricos y Sistemas de Potencia", carreraId: 17, rating: 4.6, apuntes: 9, foto: null, iniciales: "MT" },
  // Enfermería
  { id: 27, nombre: "Lic. Enf. Norma Huamaní Segura",     area: "Enfermería Clínica y Cuidados Intensivos", carreraId: 23, rating: 4.7, apuntes: 14, foto: null, iniciales: "NH" },
  // Odontología
  { id: 28, nombre: "Mg. Odont. Paola Berrocal Arias",    area: "Odontología Restauradora y Periodoncia",   carreraId: 24, rating: 4.8, apuntes: 10, foto: null, iniciales: "PB" },
  // Farmacia y Bioquímica
  { id: 29, nombre: "Q.F. Rodrigo Mamani Quispe",         area: "Farmacotecnia y Bioquímica Clínica",      carreraId: 25, rating: 4.7, apuntes: 9,  foto: null, iniciales: "RM" },
  // Tecnología Médica
  { id: 30, nombre: "Tec. Med. Lucía Condori Huanca",     area: "Terapia Física y Biomecánica",            carreraId: 26, rating: 4.6, apuntes: 8,  foto: null, iniciales: "LC" },
  { id: 31, nombre: "Tec. Med. Carlos Ore Huamán",        area: "Laboratorio Clínico y Hematología",       carreraId: 27, rating: 4.5, apuntes: 7,  foto: null, iniciales: "CO" },
  { id: 32, nombre: "Tec. Med. Silvia Paucar Valenzuela", area: "Radiología e Imagen Diagnóstica",         carreraId: 28, rating: 4.7, apuntes: 9,  foto: null, iniciales: "SP" },
  // Comunicación & Educación
  { id: 33, nombre: "Lic. Gabriela Núñez Arroyo",         area: "Periodismo Digital y Comunicación Estratégica", carreraId: 31, rating: 4.7, apuntes: 10, foto: null, iniciales: "GN" },
  { id: 34, nombre: "Mg. Enrique Sánchez Palacios",       area: "Tecnología Educativa e Innovación Pedagógica", carreraId: 32, rating: 4.8, apuntes: 9,  foto: null, iniciales: "ES" },
];

// ------------------------------------------------------------------
// CURSOS — Ampliado con cursos por cada carrera actualizada
// ------------------------------------------------------------------
export const cursos = [
  // ── Ciencia de la Computación ───────────────────────────────────
  { id: 1,  nombre: "Programación Funcional",              codigo: "CCO-301", carreraId: 12, ciclo: 3,  creditos: 4, docenteId: 3,  color: "#0891b2" },
  { id: 2,  nombre: "Inteligencia Artificial Avanzada",    codigo: "CCO-601", carreraId: 12, ciclo: 6,  creditos: 5, docenteId: 3,  color: "#0891b2" },
  { id: 3,  nombre: "Computación Paralela",                codigo: "CCO-701", carreraId: 12, ciclo: 7,  creditos: 4, docenteId: 3,  color: "#0891b2" },
  // ── Ingeniería de Sistemas e Informática ────────────────────────
  { id: 4,  nombre: "Algoritmos y Programación",           codigo: "ISI-101", carreraId: 16, ciclo: 1,  creditos: 4, docenteId: 1,  color: "#0284c7" },
  { id: 5,  nombre: "Fundamentos de Base de Datos",        codigo: "ISI-201", carreraId: 16, ciclo: 2,  creditos: 4, docenteId: 2,  color: "#0284c7" },
  { id: 6,  nombre: "Estructuras de Datos",                codigo: "ISI-301", carreraId: 16, ciclo: 3,  creditos: 5, docenteId: 1,  color: "#0284c7" },
  { id: 7,  nombre: "Ingeniería de Software",              codigo: "ISI-401", carreraId: 16, ciclo: 4,  creditos: 4, docenteId: 1,  color: "#0284c7" },
  { id: 8,  nombre: "Redes y Comunicaciones",              codigo: "ISI-402", carreraId: 16, ciclo: 4,  creditos: 4, docenteId: 2,  color: "#0284c7" },
  { id: 9,  nombre: "Inteligencia Artificial",             codigo: "ISI-601", carreraId: 16, ciclo: 6,  creditos: 4, docenteId: 3,  color: "#0284c7" },
  { id: 10, nombre: "Seguridad Informática",               codigo: "ISI-701", carreraId: 16, ciclo: 7,  creditos: 4, docenteId: 3,  color: "#0284c7" },
  // ── Ingeniería Industrial ────────────────────────────────────────
  { id: 11, nombre: "Cálculo Diferencial",                 codigo: "IIN-101", carreraId: 19, ciclo: 1,  creditos: 5, docenteId: 4,  color: "#1d4ed8" },
  { id: 12, nombre: "Estadística Aplicada",                codigo: "IIN-201", carreraId: 19, ciclo: 2,  creditos: 4, docenteId: 4,  color: "#1d4ed8" },
  { id: 13, nombre: "Investigación Operativa",             codigo: "IIN-301", carreraId: 19, ciclo: 3,  creditos: 4, docenteId: 5,  color: "#1d4ed8" },
  { id: 14, nombre: "Gestión de la Producción",            codigo: "IIN-401", carreraId: 19, ciclo: 4,  creditos: 4, docenteId: 5,  color: "#1d4ed8" },
  { id: 15, nombre: "Gestión de Calidad Total",            codigo: "IIN-501", carreraId: 19, ciclo: 5,  creditos: 4, docenteId: 4,  color: "#1d4ed8" },
  { id: 16, nombre: "Logística y Cadena de Suministro",    codigo: "IIN-601", carreraId: 19, ciclo: 6,  creditos: 4, docenteId: 5,  color: "#1d4ed8" },
  // ── Ingeniería Civil ─────────────────────────────────────────────
  { id: 17, nombre: "Mecánica de Suelos",                  codigo: "ICI-301", carreraId: 14, ciclo: 3,  creditos: 4, docenteId: 6,  color: "#155e75" },
  { id: 18, nombre: "Análisis Estructural",                codigo: "ICI-401", carreraId: 14, ciclo: 4,  creditos: 5, docenteId: 6,  color: "#155e75" },
  { id: 19, nombre: "Diseño en Concreto Armado",           codigo: "ICI-601", carreraId: 14, ciclo: 6,  creditos: 5, docenteId: 6,  color: "#155e75" },
  { id: 20, nombre: "Hidráulica e Hidrología",             codigo: "ICI-501", carreraId: 14, ciclo: 5,  creditos: 4, docenteId: 6,  color: "#155e75" },
  // ── Arquitectura ─────────────────────────────────────────────────
  { id: 21, nombre: "Diseño Arquitectónico I",             codigo: "ARQ-101", carreraId: 10, ciclo: 1,  creditos: 5, docenteId: 20, color: "#92400e" },
  { id: 22, nombre: "Historia de la Arquitectura",         codigo: "ARQ-201", carreraId: 10, ciclo: 2,  creditos: 3, docenteId: 20, color: "#92400e" },
  { id: 23, nombre: "Urbanismo y Planificación",           codigo: "ARQ-501", carreraId: 10, ciclo: 5,  creditos: 4, docenteId: 20, color: "#92400e" },
  // ── Arquitectura y Diseño de Interiores ─────────────────────────
  { id: 24, nombre: "Diseño de Interiores I",              codigo: "ADI-201", carreraId: 11, ciclo: 2,  creditos: 5, docenteId: 21, color: "#b45309" },
  { id: 25, nombre: "Iluminación y Color en Interiores",   codigo: "ADI-401", carreraId: 11, ciclo: 4,  creditos: 4, docenteId: 21, color: "#b45309" },
  // ── Ingeniería Ambiental ─────────────────────────────────────────
  { id: 26, nombre: "Gestión Ambiental",                   codigo: "IAM-301", carreraId: 13, ciclo: 3,  creditos: 4, docenteId: 22, color: "#15803d" },
  { id: 27, nombre: "Evaluación de Impacto Ambiental",     codigo: "IAM-501", carreraId: 13, ciclo: 5,  creditos: 4, docenteId: 22, color: "#15803d" },
  { id: 28, nombre: "Tratamiento de Aguas Residuales",     codigo: "IAM-401", carreraId: 13, ciclo: 4,  creditos: 4, docenteId: 22, color: "#15803d" },
  // ── Ingeniería de Minas ──────────────────────────────────────────
  { id: 29, nombre: "Geomecánica",                         codigo: "IMN-301", carreraId: 15, ciclo: 3,  creditos: 4, docenteId: 23, color: "#7c3aed" },
  { id: 30, nombre: "Ventilación de Minas",                codigo: "IMN-501", carreraId: 15, ciclo: 5,  creditos: 4, docenteId: 23, color: "#7c3aed" },
  { id: 31, nombre: "Seguridad y Salud Minera",            codigo: "IMN-601", carreraId: 15, ciclo: 6,  creditos: 4, docenteId: 23, color: "#7c3aed" },
  // ── Ingeniería Mecánica ──────────────────────────────────────────
  { id: 32, nombre: "Mecánica de Fluidos",                 codigo: "IMC-301", carreraId: 20, ciclo: 3,  creditos: 4, docenteId: 24, color: "#1e40af" },
  { id: 33, nombre: "Termodinámica",                       codigo: "IMC-401", carreraId: 20, ciclo: 4,  creditos: 4, docenteId: 24, color: "#1e40af" },
  // ── Ingeniería Mecatrónica ───────────────────────────────────────
  { id: 34, nombre: "Robótica Industrial",                 codigo: "IMT-501", carreraId: 21, ciclo: 5,  creditos: 4, docenteId: 25, color: "#06b6d4" },
  { id: 35, nombre: "Control Automático",                  codigo: "IMT-401", carreraId: 21, ciclo: 4,  creditos: 4, docenteId: 25, color: "#06b6d4" },
  // ── Ingeniería Eléctrica ─────────────────────────────────────────
  { id: 36, nombre: "Circuitos Eléctricos I",              codigo: "IEL-101", carreraId: 17, ciclo: 1,  creditos: 4, docenteId: 26, color: "#0e7490" },
  { id: 37, nombre: "Sistemas de Potencia",                codigo: "IEL-501", carreraId: 17, ciclo: 5,  creditos: 4, docenteId: 26, color: "#0e7490" },
  // ── Ingeniería Empresarial ───────────────────────────────────────
  { id: 38, nombre: "Gestión por Procesos",                codigo: "IEM-301", carreraId: 18, ciclo: 3,  creditos: 4, docenteId: 9,  color: "#6d28d9" },
  { id: 39, nombre: "Transformación Digital",              codigo: "IEM-501", carreraId: 18, ciclo: 5,  creditos: 4, docenteId: 9,  color: "#6d28d9" },
  // ── Administración (general) ─────────────────────────────────────
  { id: 40, nombre: "Fundamentos de Administración",       codigo: "ADM-101", carreraId: 1,  ciclo: 1,  creditos: 4, docenteId: 7,  color: "#4f46e5" },
  { id: 41, nombre: "Comportamiento Organizacional",       codigo: "ADM-201", carreraId: 1,  ciclo: 2,  creditos: 4, docenteId: 7,  color: "#4f46e5" },
  { id: 42, nombre: "Planeamiento Estratégico",            codigo: "ADM-501", carreraId: 1,  ciclo: 5,  creditos: 4, docenteId: 7,  color: "#4f46e5" },
  // ── Administración y Finanzas ────────────────────────────────────
  { id: 43, nombre: "Matemática Financiera",               codigo: "AFI-201", carreraId: 2,  ciclo: 2,  creditos: 4, docenteId: 8,  color: "#4338ca" },
  { id: 44, nombre: "Análisis e Interpretación de EEFF",   codigo: "AFI-401", carreraId: 2,  ciclo: 4,  creditos: 4, docenteId: 11, color: "#4338ca" },
  { id: 45, nombre: "Gestión de Inversiones",              codigo: "AFI-601", carreraId: 2,  ciclo: 6,  creditos: 4, docenteId: 8,  color: "#4338ca" },
  // ── Administración y Gestión del Talento Humano ─────────────────
  { id: 46, nombre: "Reclutamiento y Selección de Personal", codigo: "AGT-301", carreraId: 3, ciclo: 3, creditos: 4, docenteId: 17, color: "#6366f1" },
  { id: 47, nombre: "Capacitación y Desarrollo Organizacional", codigo: "AGT-401", carreraId: 3, ciclo: 4, creditos: 4, docenteId: 17, color: "#6366f1" },
  { id: 48, nombre: "Compensaciones y Remuneraciones",     codigo: "AGT-501", carreraId: 3,  ciclo: 5,  creditos: 4, docenteId: 17, color: "#6366f1" },
  // ── Administración y Gestión Pública ────────────────────────────
  { id: 49, nombre: "Teoría del Estado y Políticas Públicas", codigo: "AGP-201", carreraId: 4, ciclo: 2, creditos: 4, docenteId: 18, color: "#818cf8" },
  { id: 50, nombre: "Contrataciones del Estado",           codigo: "AGP-401", carreraId: 4,  ciclo: 4,  creditos: 4, docenteId: 18, color: "#818cf8" },
  { id: 51, nombre: "Gestión Municipal y Regional",        codigo: "AGP-501", carreraId: 4,  ciclo: 5,  creditos: 4, docenteId: 18, color: "#818cf8" },
  // ── Administración y Marketing ───────────────────────────────────
  { id: 52, nombre: "Marketing Estratégico",               codigo: "AMK-301", carreraId: 5,  ciclo: 3,  creditos: 4, docenteId: 7,  color: "#a5b4fc" },
  { id: 53, nombre: "Comportamiento del Consumidor",       codigo: "AMK-401", carreraId: 5,  ciclo: 4,  creditos: 4, docenteId: 7,  color: "#a5b4fc" },
  { id: 54, nombre: "Investigación de Mercados",           codigo: "AMK-501", carreraId: 5,  ciclo: 5,  creditos: 4, docenteId: 7,  color: "#a5b4fc" },
  // ── Administración y Negocios Digitales ──────────────────────────
  { id: 55, nombre: "Microeconomía",                       codigo: "AND-201", carreraId: 6,  ciclo: 2,  creditos: 4, docenteId: 8,  color: "#3730a3" },
  { id: 56, nombre: "Marketing Digital",                   codigo: "AND-301", carreraId: 6,  ciclo: 3,  creditos: 4, docenteId: 7,  color: "#3730a3" },
  { id: 57, nombre: "Macroeconomía",                       codigo: "AND-302", carreraId: 6,  ciclo: 3,  creditos: 4, docenteId: 8,  color: "#3730a3" },
  { id: 58, nombre: "E-Commerce y Negocios Digitales",     codigo: "AND-401", carreraId: 6,  ciclo: 4,  creditos: 4, docenteId: 7,  color: "#3730a3" },
  { id: 59, nombre: "Gestión de Proyectos",                codigo: "AND-501", carreraId: 6,  ciclo: 5,  creditos: 4, docenteId: 9,  color: "#3730a3" },
  // ── Administración y Negocios Internacionales ───────────────────
  { id: 60, nombre: "Comercio Exterior y Aduanas",         codigo: "ANI-301", carreraId: 7,  ciclo: 3,  creditos: 4, docenteId: 19, color: "#312e81" },
  { id: 61, nombre: "Negociación Internacional",           codigo: "ANI-401", carreraId: 7,  ciclo: 4,  creditos: 4, docenteId: 19, color: "#312e81" },
  { id: 62, nombre: "Logística Internacional",             codigo: "ANI-501", carreraId: 7,  ciclo: 5,  creditos: 4, docenteId: 19, color: "#312e81" },
  // ── Contabilidad y Finanzas ──────────────────────────────────────
  { id: 63, nombre: "Contabilidad General",                codigo: "COF-101", carreraId: 8,  ciclo: 1,  creditos: 4, docenteId: 10, color: "#dc2626" },
  { id: 64, nombre: "Contabilidad de Costos",              codigo: "COF-201", carreraId: 8,  ciclo: 2,  creditos: 4, docenteId: 10, color: "#dc2626" },
  { id: 65, nombre: "Contabilidad Financiera",             codigo: "COF-301", carreraId: 8,  ciclo: 3,  creditos: 4, docenteId: 11, color: "#dc2626" },
  { id: 66, nombre: "Auditoría Financiera",                codigo: "COF-601", carreraId: 8,  ciclo: 6,  creditos: 4, docenteId: 11, color: "#dc2626" },
  // ── Economía ─────────────────────────────────────────────────────
  { id: 67, nombre: "Microeconomía Avanzada",              codigo: "ECO-301", carreraId: 9,  ciclo: 3,  creditos: 4, docenteId: 8,  color: "#b91c1c" },
  { id: 68, nombre: "Econometría",                         codigo: "ECO-501", carreraId: 9,  ciclo: 5,  creditos: 4, docenteId: 8,  color: "#b91c1c" },
  { id: 69, nombre: "Economía Peruana y Regional",         codigo: "ECO-401", carreraId: 9,  ciclo: 4,  creditos: 4, docenteId: 8,  color: "#b91c1c" },
  // ── Derecho ─────────────────────────────────────────────────────
  { id: 70, nombre: "Introducción al Derecho",             codigo: "DER-101", carreraId: 29, ciclo: 1,  creditos: 4, docenteId: 12, color: "#d97706" },
  { id: 71, nombre: "Derecho Civil I – Acto Jurídico",     codigo: "DER-201", carreraId: 29, ciclo: 2,  creditos: 4, docenteId: 12, color: "#d97706" },
  { id: 72, nombre: "Derecho Constitucional",              codigo: "DER-301", carreraId: 29, ciclo: 3,  creditos: 4, docenteId: 13, color: "#d97706" },
  { id: 73, nombre: "Derecho Penal General",               codigo: "DER-302", carreraId: 29, ciclo: 3,  creditos: 4, docenteId: 13, color: "#d97706" },
  { id: 74, nombre: "Derecho Laboral",                     codigo: "DER-501", carreraId: 29, ciclo: 5,  creditos: 4, docenteId: 12, color: "#d97706" },
  // ── Medicina Humana ─────────────────────────────────────────────
  { id: 75, nombre: "Anatomía Humana",                     codigo: "MED-101", carreraId: 22, ciclo: 1,  creditos: 6, docenteId: 14, color: "#16a34a" },
  { id: 76, nombre: "Histología y Embriología",            codigo: "MED-201", carreraId: 22, ciclo: 2,  creditos: 5, docenteId: 14, color: "#16a34a" },
  { id: 77, nombre: "Bioquímica Médica",                   codigo: "MED-202", carreraId: 22, ciclo: 2,  creditos: 5, docenteId: 15, color: "#16a34a" },
  { id: 78, nombre: "Fisiopatología",                      codigo: "MED-401", carreraId: 22, ciclo: 4,  creditos: 5, docenteId: 15, color: "#16a34a" },
  { id: 79, nombre: "Farmacología",                        codigo: "MED-501", carreraId: 22, ciclo: 5,  creditos: 5, docenteId: 15, color: "#16a34a" },
  // ── Enfermería ──────────────────────────────────────────────────
  { id: 80, nombre: "Fundamentos de Enfermería",           codigo: "ENF-101", carreraId: 23, ciclo: 1,  creditos: 5, docenteId: 27, color: "#15803d" },
  { id: 81, nombre: "Enfermería en Salud del Adulto",      codigo: "ENF-301", carreraId: 23, ciclo: 3,  creditos: 5, docenteId: 27, color: "#15803d" },
  { id: 82, nombre: "Cuidados Intensivos en Enfermería",   codigo: "ENF-601", carreraId: 23, ciclo: 6,  creditos: 4, docenteId: 27, color: "#15803d" },
  // ── Odontología ─────────────────────────────────────────────────
  { id: 83, nombre: "Anatomía Dental",                     codigo: "ODO-101", carreraId: 24, ciclo: 1,  creditos: 4, docenteId: 28, color: "#14532d" },
  { id: 84, nombre: "Odontología Restauradora I",          codigo: "ODO-301", carreraId: 24, ciclo: 3,  creditos: 5, docenteId: 28, color: "#14532d" },
  { id: 85, nombre: "Periodoncia",                         codigo: "ODO-501", carreraId: 24, ciclo: 5,  creditos: 4, docenteId: 28, color: "#14532d" },
  // ── Farmacia y Bioquímica ────────────────────────────────────────
  { id: 86, nombre: "Química Orgánica Farmacéutica",       codigo: "FAB-201", carreraId: 25, ciclo: 2,  creditos: 4, docenteId: 29, color: "#047857" },
  { id: 87, nombre: "Farmacotecnia",                       codigo: "FAB-401", carreraId: 25, ciclo: 4,  creditos: 5, docenteId: 29, color: "#047857" },
  { id: 88, nombre: "Bioquímica Clínica",                  codigo: "FAB-501", carreraId: 25, ciclo: 5,  creditos: 4, docenteId: 29, color: "#047857" },
  // ── Tecnología Médica – Terapia Física ──────────────────────────
  { id: 89, nombre: "Biomecánica y Kinesiología",          codigo: "TMT-201", carreraId: 26, ciclo: 2,  creditos: 4, docenteId: 30, color: "#065f46" },
  { id: 90, nombre: "Fisioterapia Musculoesquelética",     codigo: "TMT-401", carreraId: 26, ciclo: 4,  creditos: 5, docenteId: 30, color: "#065f46" },
  { id: 91, nombre: "Electroterapia y Agentes Físicos",    codigo: "TMT-501", carreraId: 26, ciclo: 5,  creditos: 4, docenteId: 30, color: "#065f46" },
  // ── Tecnología Médica – Laboratorio Clínico ─────────────────────
  { id: 92, nombre: "Hematología Clínica",                 codigo: "TML-301", carreraId: 27, ciclo: 3,  creditos: 4, docenteId: 31, color: "#0f766e" },
  { id: 93, nombre: "Microbiología Clínica",               codigo: "TML-401", carreraId: 27, ciclo: 4,  creditos: 5, docenteId: 31, color: "#0f766e" },
  // ── Tecnología Médica – Radiología ──────────────────────────────
  { id: 94, nombre: "Radiología Convencional",             codigo: "TMR-201", carreraId: 28, ciclo: 2,  creditos: 4, docenteId: 32, color: "#134e4a" },
  { id: 95, nombre: "Tomografía Computarizada",            codigo: "TMR-501", carreraId: 28, ciclo: 5,  creditos: 4, docenteId: 32, color: "#134e4a" },
  // ── Psicología ──────────────────────────────────────────────────
  { id: 96, nombre: "Psicología General",                  codigo: "PSI-101", carreraId: 30, ciclo: 1,  creditos: 4, docenteId: 16, color: "#7c3aed" },
  { id: 97, nombre: "Neurociencias y Conducta",            codigo: "PSI-201", carreraId: 30, ciclo: 2,  creditos: 4, docenteId: 16, color: "#7c3aed" },
  { id: 98, nombre: "Psicología del Desarrollo",           codigo: "PSI-301", carreraId: 30, ciclo: 3,  creditos: 4, docenteId: 16, color: "#7c3aed" },
  { id: 99, nombre: "Psicología Clínica",                  codigo: "PSI-501", carreraId: 30, ciclo: 5,  creditos: 4, docenteId: 16, color: "#7c3aed" },
  // ── Ciencias de la Comunicación ─────────────────────────────────
  { id: 100, nombre: "Teoría de la Comunicación",          codigo: "CCC-101", carreraId: 31, ciclo: 1,  creditos: 4, docenteId: 33, color: "#be185d" },
  { id: 101, nombre: "Periodismo Digital",                 codigo: "CCC-301", carreraId: 31, ciclo: 3,  creditos: 4, docenteId: 33, color: "#be185d" },
  { id: 102, nombre: "Comunicación Corporativa",           codigo: "CCC-501", carreraId: 31, ciclo: 5,  creditos: 4, docenteId: 33, color: "#be185d" },
  // ── Educación e Innovación Digital ──────────────────────────────
  { id: 103, nombre: "Tecnología Educativa",               codigo: "EIA-201", carreraId: 32, ciclo: 2,  creditos: 4, docenteId: 34, color: "#9d174d" },
  { id: 104, nombre: "Diseño Instruccional Digital",       codigo: "EIA-401", carreraId: 32, ciclo: 4,  creditos: 4, docenteId: 34, color: "#9d174d" },
  { id: 105, nombre: "Gamificación en el Aprendizaje",     codigo: "EIA-501", carreraId: 32, ciclo: 5,  creditos: 4, docenteId: 34, color: "#9d174d" },
];

// ------------------------------------------------------------------
// APUNTES — con URLs reales de previsualización y descarga
// ------------------------------------------------------------------
export const apuntes = [
  // ── INGENIERÍA DE SISTEMAS ──────────────────────────────────────
  {
    id: 1,
    titulo: "Resumen: Complejidad de Algoritmos",
    cursoId: 6, docenteId: 1, tipo: "Resumen", semana: 4,
    descargas: 312, likes: 118, vistas: 890,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-08",
    previewImg: PREVIEW_IMGS.algoritmos,
    descripcion: "Análisis de complejidad temporal y espacial con notación Big-O. Incluye ejemplos prácticos de algoritmos de búsqueda y ordenamiento con tablas comparativas.",
    temas: ["Big-O", "Complejidad temporal", "Algoritmos de búsqueda", "Quicksort", "Mergesort"],
    archivos: [
      { nombre: "Resumen_Complejidad_Algoritmos.pdf", tipo: "pdf",   tamaño: "1.2 MB", paginas: 8,  url: PUBLIC_PDFS.algoritmos },
      { nombre: "Tablas_Comparativas.xlsx",           tipo: "excel", tamaño: "340 KB", hojas: 3,    url: null },
      { nombre: "Capturas_ejercicios.zip",            tipo: "zip",   tamaño: "2.1 MB", archivos: 12, url: null },
    ],
  },
  {
    id: 2,
    titulo: "Guía: SQL Avanzado con Ejercicios",
    cursoId: 5, docenteId: 2, tipo: "Guía", semana: 5,
    descargas: 278, likes: 95, vistas: 740,
    autor: "Estudiante UC", premium: true, fecha: "2026-04-15",
    previewImg: PREVIEW_IMGS.sql,
    descripcion: "Guía completa de SQL avanzado: JOINs, subconsultas, funciones de ventana, índices y optimización de consultas. 25 ejercicios resueltos paso a paso.",
    temas: ["JOINs", "Subconsultas", "Funciones de ventana", "Índices", "Optimización"],
    archivos: [
      { nombre: "Guia_SQL_Avanzado.pdf",       tipo: "pdf",    tamaño: "3.4 MB", paginas: 45, url: PUBLIC_PDFS.bd },
      { nombre: "Ejercicios_SQL.docx",         tipo: "word",   tamaño: "890 KB", paginas: 18, url: null },
      { nombre: "Scripts_SQL_Ejercicios.zip",  tipo: "zip",    tamaño: "56 KB",  archivos: 25, url: null },
      { nombre: "Esquemas_ER_Diagramas.png",   tipo: "imagen", tamaño: "1.8 MB", dimensiones: "3200×2400",
        url: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&q=90" },
    ],
  },
  {
    id: 3,
    titulo: "Mapa conceptual: Patrones de Diseño GoF",
    cursoId: 7, docenteId: 1, tipo: "Mapa", semana: 6,
    descargas: 201, likes: 74, vistas: 520,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.software,
    descripcion: "Los 23 patrones de diseño GoF clasificados en Creacionales, Estructurales y de Comportamiento. Ejemplos en Java y Python.",
    temas: ["Patrones GoF", "Singleton", "Factory", "Observer", "Decorator"],
    archivos: [
      { nombre: "Mapa_Patrones_Diseño.pdf",  tipo: "pdf",    tamaño: "2.1 MB", paginas: 12, url: PUBLIC_PDFS.algoritmos },
      { nombre: "Diagrama_Patrones.png",     tipo: "imagen", tamaño: "4.2 MB", dimensiones: "5000×3500",
        url: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=1200&q=90" },
      { nombre: "Slides_Patrones.pptx",      tipo: "ppt",   tamaño: "5.6 MB", diapositivas: 32, url: null },
    ],
  },
  {
    id: 4,
    titulo: "Apuntes: Ciberseguridad – OWASP Top 10",
    cursoId: 10, docenteId: 3, tipo: "Apunte", semana: 5,
    descargas: 265, likes: 99, vistas: 730,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-22",
    previewImg: PREVIEW_IMGS.ciberseguridad,
    descripcion: "Resumen de las 10 vulnerabilidades más críticas según OWASP 2024. Ejemplos de ataques reales y contramedidas para cada categoría.",
    temas: ["Inyección SQL", "XSS", "CSRF", "Autenticación rota", "OWASP"],
    archivos: [
      { nombre: "OWASP_Top10_Resumen.pdf",   tipo: "pdf",    tamaño: "2.8 MB", paginas: 20, url: PUBLIC_PDFS.ciberseguridad },
      { nombre: "Checklist_Seguridad.xlsx",  tipo: "excel",  tamaño: "180 KB", hojas: 3,    url: null },
      { nombre: "Demo_Ataques.zip",          tipo: "zip",    tamaño: "3.4 MB", archivos: 8, url: null },
    ],
  },
  // ── INGENIERÍA INDUSTRIAL ────────────────────────────────────────
  {
    id: 5,
    titulo: "Apuntes: Cálculo Integral – Semana 3",
    cursoId: 11, docenteId: 4, tipo: "Apunte", semana: 3,
    descargas: 389, likes: 142, vistas: 1100,
    autor: "Estudiante UC", premium: false, fecha: "2026-03-28",
    previewImg: PREVIEW_IMGS.calculo,
    descripcion: "Apuntes manuscritos digitalizados + resumen tipado. Cubre integrales indefinidas y técnicas de integración con 30 ejercicios resueltos.",
    temas: ["Integrales indefinidas", "Sustitución", "Integración por partes", "Fracciones parciales"],
    archivos: [
      { nombre: "Apuntes_Calculo_S3.pdf",        tipo: "pdf",    tamaño: "5.8 MB", paginas: 22, url: PUBLIC_PDFS.calculo  },
      { nombre: "Ejercicios_Resueltos_S3.docx",  tipo: "word",   tamaño: "1.2 MB", paginas: 14, url: null },
      { nombre: "Tabla_Integrales.png",          tipo: "imagen", tamaño: "980 KB", dimensiones: "2480×3508",
        url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90" },
    ],
  },
  {
    id: 6,
    titulo: "Resumen ejecutivo: Investigación Operativa",
    cursoId: 13, docenteId: 4, tipo: "Resumen", semana: 7,
    descargas: 245, likes: 89, vistas: 670,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-25",
    previewImg: PREVIEW_IMGS.estadistica,
    descripcion: "Modelos de IO: Programación Lineal, Simplex, Transporte, Asignación y Redes. Plantillas Excel resolubles directamente.",
    temas: ["Programación Lineal", "Método Simplex", "Modelo de Transporte", "Asignación"],
    archivos: [
      { nombre: "Resumen_IO_Completo.pdf",   tipo: "pdf",   tamaño: "2.8 MB", paginas: 30, url: PUBLIC_PDFS.manufactura },
      { nombre: "Plantilla_Simplex.xlsx",    tipo: "excel", tamaño: "245 KB", hojas: 5,    url: null },
      { nombre: "Plantilla_Transporte.xlsx", tipo: "excel", tamaño: "180 KB", hojas: 3,    url: null },
      { nombre: "Slides_IO_Clase.pptx",      tipo: "ppt",   tamaño: "4.1 MB", diapositivas: 48, url: null },
    ],
  },
  {
    id: 7,
    titulo: "Guía: Logística y Cadena de Suministro",
    cursoId: 16, docenteId: 5, tipo: "Guía", semana: 6,
    descargas: 198, likes: 73, vistas: 560,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-30",
    previewImg: PREVIEW_IMGS.produccion,
    descripcion: "Modelos de inventario EOQ y POQ, gestión de almacenes, indicadores KPI logísticos y casos peruanos de Supply Chain.",
    temas: ["EOQ", "POQ", "Gestión de almacenes", "KPI logísticos", "SCM"],
    archivos: [
      { nombre: "Guia_Logistica_SCM.pdf",     tipo: "pdf",   tamaño: "3.2 MB", paginas: 36, url: PUBLIC_PDFS.logistica },
      { nombre: "Plantilla_EOQ.xlsx",         tipo: "excel", tamaño: "210 KB", hojas: 4,    url: null },
      { nombre: "Casos_Empresas_Peru.docx",   tipo: "word",  tamaño: "680 KB", paginas: 12, url: null },
    ],
  },
  // ── INGENIERÍA CIVIL ─────────────────────────────────────────────
  {
    id: 8,
    titulo: "Esquema: Análisis Estructural – Vigas",
    cursoId: 18, docenteId: 6, tipo: "Esquema", semana: 5,
    descargas: 167, likes: 63, vistas: 430,
    autor: "Estudiante UC", premium: true, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.estructuras,
    descripcion: "Análisis de vigas simplemente apoyadas y en voladizo. Diagramas de fuerza cortante y momento flector con procedimiento paso a paso.",
    temas: ["Vigas simplemente apoyadas", "Voladizo", "Fuerza cortante", "Momento flector", "SAP2000"],
    archivos: [
      { nombre: "Esquema_Vigas_Completo.pdf", tipo: "pdf",    tamaño: "4.5 MB", paginas: 28, url: PUBLIC_PDFS.estructuras },
      { nombre: "Diagramas_Vigas.png",        tipo: "imagen", tamaño: "6.2 MB", dimensiones: "4000×2800",
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90" },
      { nombre: "Modelo_SAP2000.zip",         tipo: "zip",    tamaño: "1.4 MB", archivos: 6, url: null },
    ],
  },
  {
    id: 9,
    titulo: "Apuntes: Hidráulica – Flujo en Canales",
    cursoId: 20, docenteId: 6, tipo: "Apunte", semana: 4,
    descargas: 145, likes: 54, vistas: 390,
    autor: "Estudiante UC", premium: false, fecha: "2026-05-02",
    previewImg: PREVIEW_IMGS.construccion,
    descripcion: "Flujo uniforme en canales, ecuación de Manning, perfil hidráulico y estructuras de control. Casos aplicados a la sierra peruana.",
    temas: ["Ecuación de Manning", "Flujo uniforme", "Canal trapezoidal", "Perfil hidráulico"],
    archivos: [
      { nombre: "Hidraulica_Canales.pdf",     tipo: "pdf",   tamaño: "3.1 MB", paginas: 26, url: PUBLIC_PDFS.agua },
      { nombre: "Plantilla_Manning.xlsx",     tipo: "excel", tamaño: "165 KB", hojas: 3,    url: null },
      { nombre: "Ejercicios_Canales.docx",    tipo: "word",  tamaño: "480 KB", paginas: 10, url: null },
    ],
  },
  // ── ARQUITECTURA ─────────────────────────────────────────────────
  {
    id: 10,
    titulo: "Guía: Historia de la Arquitectura Peruana",
    cursoId: 22, docenteId: 20, tipo: "Guía", semana: 3,
    descargas: 178, likes: 65, vistas: 490,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-10",
    previewImg: PREVIEW_IMGS.arquitectura,
    descripcion: "Evolución arquitectónica del Perú: épocas preincaica, inca, colonial, republicana y contemporánea. Análisis de obras clave con planos.",
    temas: ["Arquitectura inca", "Colonial", "Republicana", "Modernismo peruano", "Casos de estudio"],
    archivos: [
      { nombre: "Historia_Arq_Peruana.pdf",   tipo: "pdf",    tamaño: "5.2 MB", paginas: 44, url: PUBLIC_PDFS.generico },
      { nombre: "Fotografia_Obras.zip",       tipo: "zip",    tamaño: "18 MB",  archivos: 35, url: null },
      { nombre: "Linea_Tiempo_Arq.png",       tipo: "imagen", tamaño: "4.8 MB", dimensiones: "6000×2400",
        url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=90" },
    ],
  },
  {
    id: 11,
    titulo: "Apuntes: Diseño de Interiores – Ergonomía",
    cursoId: 25, docenteId: 21, tipo: "Apunte", semana: 4,
    descargas: 132, likes: 49, vistas: 360,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-28",
    previewImg: PREVIEW_IMGS.diseno_interiores,
    descripcion: "Principios ergonómicos aplicados al diseño de interiores: dimensiones humanas, circulación, accesibilidad universal y norma A.120.",
    temas: ["Ergonomía", "Antropometría", "Accesibilidad", "Normativa A.120", "Neufert"],
    archivos: [
      { nombre: "Ergonomia_Interiores.pdf",    tipo: "pdf",   tamaño: "4.1 MB", paginas: 32, url: PUBLIC_PDFS.generico2 },
      { nombre: "Dimensiones_Neufert.xlsx",    tipo: "excel", tamaño: "290 KB", hojas: 5,    url: null },
      { nombre: "Moodboard_Referencia.png",    tipo: "imagen", tamaño: "5.6 MB", dimensiones: "4000×3000",
        url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=90" },
    ],
  },
  // ── INGENIERÍA AMBIENTAL ─────────────────────────────────────────
  {
    id: 12,
    titulo: "Guía: Evaluación de Impacto Ambiental",
    cursoId: 27, docenteId: 22, tipo: "Guía", semana: 5,
    descargas: 189, likes: 70, vistas: 510,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.ambiental,
    descripcion: "Marco legal de la EIA en Perú. Matrices de Leopold e índice de Battelle. Caso práctico de proyecto minero en Junín.",
    temas: ["EIA", "Matriz de Leopold", "Legislación ambiental peruana", "SENACE", "Línea base"],
    archivos: [
      { nombre: "Guia_EIA_Peru.pdf",           tipo: "pdf",   tamaño: "4.6 MB", paginas: 50, url: PUBLIC_PDFS.ambiental },
      { nombre: "Matriz_Leopold.xlsx",         tipo: "excel", tamaño: "320 KB", hojas: 4,    url: null },
      { nombre: "Caso_Practico_Junin.docx",    tipo: "word",  tamaño: "760 KB", paginas: 18, url: null },
    ],
  },
  // ── INGENIERÍA DE MINAS ──────────────────────────────────────────
  {
    id: 13,
    titulo: "Resumen: Geomecánica – Clasificación RMR",
    cursoId: 29, docenteId: 23, tipo: "Resumen", semana: 4,
    descargas: 156, likes: 58, vistas: 420,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-15",
    previewImg: PREVIEW_IMGS.minas,
    descripcion: "Clasificación geomecánica RMR de Bieniawski y Q de Barton. Aplicación en diseño de sostenimiento de labores subterráneas.",
    temas: ["RMR", "Q de Barton", "Sostenimiento", "Macizo rocoso", "Túneles"],
    archivos: [
      { nombre: "Geomecanica_RMR.pdf",         tipo: "pdf",   tamaño: "3.5 MB", paginas: 30, url: PUBLIC_PDFS.mineria },
      { nombre: "Tablas_Clasificacion.xlsx",   tipo: "excel", tamaño: "220 KB", hojas: 3,    url: null },
      { nombre: "Slides_Geomecanica.pptx",     tipo: "ppt",   tamaño: "6.1 MB", diapositivas: 40, url: null },
    ],
  },
  // ── ADMINISTRACIÓN Y MARKETING ───────────────────────────────────
  {
    id: 14,
    titulo: "Guía: Marketing Digital – Métricas KPI",
    cursoId: 56, docenteId: 7, tipo: "Guía", semana: 4,
    descargas: 334, likes: 126, vistas: 960,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-10",
    previewImg: PREVIEW_IMGS.marketing,
    descripcion: "KPIs más importantes: CAC, LTV, ROAS, CTR, CPC. Plantilla de dashboard en Excel y casos reales de empresas peruanas.",
    temas: ["KPIs", "CAC", "ROAS", "Google Analytics 4", "Meta Ads", "Dashboard"],
    archivos: [
      { nombre: "Guia_KPIs_Marketing.pdf",  tipo: "pdf",    tamaño: "2.2 MB", paginas: 24, url: PUBLIC_PDFS.marketing },
      { nombre: "Dashboard_KPIs.xlsx",      tipo: "excel",  tamaño: "560 KB", hojas: 6,    url: null },
      { nombre: "Presentacion_Clase.pptx",  tipo: "ppt",    tamaño: "8.3 MB", diapositivas: 40, url: null },
      { nombre: "Infografia_KPIs.png",      tipo: "imagen", tamaño: "2.4 MB", dimensiones: "3508×4961",
        url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&q=90" },
    ],
  },
  {
    id: 15,
    titulo: "Resumen: Microeconomía – Elasticidad",
    cursoId: 55, docenteId: 8, tipo: "Resumen", semana: 5,
    descargas: 289, likes: 104, vistas: 820,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-12",
    previewImg: PREVIEW_IMGS.economia,
    descripcion: "Elasticidad precio, ingreso y cruzada de la demanda. Fórmulas, interpretación económica y ejercicios tipo examen.",
    temas: ["Elasticidad precio", "Elasticidad ingreso", "Elasticidad cruzada", "Bienes Giffen"],
    archivos: [
      { nombre: "Resumen_Elasticidad.pdf",     tipo: "pdf",    tamaño: "1.8 MB", paginas: 16, url: PUBLIC_PDFS.economia   },
      { nombre: "Ejercicios_Elasticidad.docx", tipo: "word",   tamaño: "720 KB", paginas: 12, url: null },
      { nombre: "Graficas_Elasticidad.png",    tipo: "imagen", tamaño: "1.1 MB", dimensiones: "2000×1500",
        url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90" },
    ],
  },
  {
    id: 16,
    titulo: "Mapa: E-Commerce – Modelos de Negocio",
    cursoId: 58, docenteId: 7, tipo: "Mapa", semana: 3,
    descargas: 198, likes: 71, vistas: 540,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-05",
    previewImg: PREVIEW_IMGS.ecommerce,
    descripcion: "Comparativa de modelos B2B, B2C, C2C y D2C. Casos de éxito peruanos y latinoamericanos. Canvas de modelo de negocio editable.",
    temas: ["B2B", "B2C", "C2C", "Marketplace", "Business Model Canvas"],
    archivos: [
      { nombre: "Mapa_Ecommerce.pdf",            tipo: "pdf",   tamaño: "3.1 MB", paginas: 18, url: PUBLIC_PDFS.gestion   },
      { nombre: "Business_Canvas_Editable.pptx", tipo: "ppt",   tamaño: "2.4 MB", diapositivas: 10, url: null },
      { nombre: "Comparativa_Modelos.xlsx",      tipo: "excel", tamaño: "290 KB", hojas: 4,    url: null },
    ],
  },
  // ── ADMINISTRACIÓN Y GESTIÓN DEL TALENTO HUMANO ─────────────────
  {
    id: 17,
    titulo: "Guía: Reclutamiento y Selección 2.0",
    cursoId: 46, docenteId: 17, tipo: "Guía", semana: 4,
    descargas: 167, likes: 62, vistas: 470,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.rrhh,
    descripcion: "Proceso de reclutamiento digital: LinkedIn Recruiter, ATS, entrevistas por competencias y assessment centers. Formatos editables.",
    temas: ["LinkedIn Recruiter", "ATS", "Entrevista por competencias", "Assessment center", "Employer branding"],
    archivos: [
      { nombre: "Reclutamiento_Digital.pdf",     tipo: "pdf",   tamaño: "2.4 MB", paginas: 28, url: PUBLIC_PDFS.rrhh  },
      { nombre: "Formato_Entrevista.docx",       tipo: "word",  tamaño: "340 KB", paginas: 4,  url: null },
      { nombre: "Rubrica_Competencias.xlsx",     tipo: "excel", tamaño: "190 KB", hojas: 3,    url: null },
    ],
  },
  // ── ADMINISTRACIÓN Y GESTIÓN PÚBLICA ────────────────────────────
  {
    id: 18,
    titulo: "Resumen: Contrataciones del Estado – OSCE",
    cursoId: 50, docenteId: 18, tipo: "Resumen", semana: 5,
    descargas: 142, likes: 53, vistas: 400,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-22",
    previewImg: PREVIEW_IMGS.gestion_publica,
    descripcion: "Ley N° 30225 y su reglamento. Procedimientos clásicos de selección: licitación, concurso público, adjudicación simplificada y comparación de precios.",
    temas: ["Ley 30225", "Licitación pública", "OSCE", "SEACE", "Adjudicación simplificada"],
    archivos: [
      { nombre: "Contrataciones_Estado.pdf",   tipo: "pdf",  tamaño: "2.8 MB", paginas: 32, url: PUBLIC_PDFS.gestion  },
      { nombre: "Flujograma_Procesos.pptx",    tipo: "ppt",  tamaño: "3.6 MB", diapositivas: 24, url: null },
      { nombre: "Resumen_Ley30225.docx",       tipo: "word", tamaño: "420 KB", paginas: 8,  url: null },
    ],
  },
  // ── NEGOCIOS INTERNACIONALES ─────────────────────────────────────
  {
    id: 19,
    titulo: "Guía: Incoterms 2020 y Comercio Exterior",
    cursoId: 60, docenteId: 19, tipo: "Guía", semana: 3,
    descargas: 245, likes: 89, vistas: 680,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-08",
    previewImg: PREVIEW_IMGS.negocios_int,
    descripcion: "Los 11 Incoterms 2020 explicados con ejemplos prácticos, reparto de costos y riesgos. Casos de exportación desde Perú.",
    temas: ["Incoterms 2020", "EXW", "FOB", "CIF", "DAP", "DDP", "Exportación"],
    archivos: [
      { nombre: "Guia_Incoterms_2020.pdf",     tipo: "pdf",    tamaño: "2.6 MB", paginas: 24, url: PUBLIC_PDFS.comercio_int },
      { nombre: "Tabla_Incoterms.xlsx",        tipo: "excel",  tamaño: "210 KB", hojas: 3,    url: null },
      { nombre: "Mapa_Incoterms.png",          tipo: "imagen", tamaño: "3.2 MB", dimensiones: "4961×3508",
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=90" },
    ],
  },
  // ── CONTABILIDAD Y FINANZAS ──────────────────────────────────────
  {
    id: 20,
    titulo: "Apuntes: Plan de Cuentas PCGE Comentado",
    cursoId: 63, docenteId: 10, tipo: "Apunte", semana: 2,
    descargas: 412, likes: 157, vistas: 1230,
    autor: "Estudiante UC", premium: false, fecha: "2026-03-30",
    previewImg: PREVIEW_IMGS.contabilidad,
    descripcion: "Plan de Cuentas del PCGE con ejemplos de asientos contables para cada cuenta principal. Comparativa con NIIF y casos prácticos.",
    temas: ["PCGE", "Activos", "Pasivos", "Patrimonio", "NIIF", "Asientos contables"],
    archivos: [
      { nombre: "Plan_Cuentas_PCGE.pdf",      tipo: "pdf",   tamaño: "4.8 MB", paginas: 62, url: PUBLIC_PDFS.contabilidad },
      { nombre: "Plan_Cuentas_Resumido.xlsx", tipo: "excel", tamaño: "410 KB", hojas: 8,    url: null },
      { nombre: "Asientos_Ejemplos.docx",     tipo: "word",  tamaño: "1.4 MB", paginas: 25, url: null },
    ],
  },
  {
    id: 21,
    titulo: "Guía: Análisis e Interpretación de EEFF",
    cursoId: 44, docenteId: 11, tipo: "Guía", semana: 5,
    descargas: 198, likes: 74, vistas: 580,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-24",
    previewImg: PREVIEW_IMGS.finanzas,
    descripcion: "Ratios financieros de liquidez, rentabilidad, solvencia y gestión. Análisis vertical, horizontal y Du Pont con caso empresa peruana.",
    temas: ["Ratios financieros", "Análisis vertical", "Du Pont", "Liquidez", "ROE"],
    archivos: [
      { nombre: "Analisis_EEFF.pdf",          tipo: "pdf",   tamaño: "3.2 MB", paginas: 36, url: PUBLIC_PDFS.finanzas },
      { nombre: "Plantilla_Ratios.xlsx",      tipo: "excel", tamaño: "480 KB", hojas: 6,    url: null },
      { nombre: "Caso_Empresa_Peru.docx",     tipo: "word",  tamaño: "560 KB", paginas: 10, url: null },
    ],
  },
  // ── DERECHO ──────────────────────────────────────────────────────
  {
    id: 22,
    titulo: "Resumen: Acto Jurídico y Nulidades",
    cursoId: 71, docenteId: 12, tipo: "Resumen", semana: 5,
    descargas: 223, likes: 82, vistas: 610,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-14",
    previewImg: PREVIEW_IMGS.derecho,
    descripcion: "Libro II del Código Civil peruano: vicios de la voluntad, simulación, nulidad vs anulabilidad. Jurisprudencia del TC.",
    temas: ["Acto jurídico", "Vicios del consentimiento", "Nulidad", "Anulabilidad"],
    archivos: [
      { nombre: "Resumen_Acto_Juridico.pdf", tipo: "pdf",  tamaño: "2.4 MB", paginas: 28, url: PUBLIC_PDFS.derecho  },
      { nombre: "Cuadro_Nulidades.docx",     tipo: "word", tamaño: "560 KB", paginas: 8,  url: null },
      { nombre: "Jurisprudencia_TC.pdf",     tipo: "pdf",  tamaño: "1.8 MB", paginas: 15, url: PUBLIC_PDFS.derechos_hum },
    ],
  },
  {
    id: 23,
    titulo: "Esquema: Derechos Fundamentales – Art. 2",
    cursoId: 72, docenteId: 13, tipo: "Esquema", semana: 4,
    descargas: 178, likes: 67, vistas: 490,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-08",
    previewImg: PREVIEW_IMGS.derecho2,
    descripcion: "Artículo 2° de la Constitución Política del Perú sistematizado. Derechos fundamentales clasificados con sentencias del TC.",
    temas: ["Constitución Política", "Derechos fundamentales", "Tribunal Constitucional"],
    archivos: [
      { nombre: "Esquema_Art2_Constitucion.pdf", tipo: "pdf",    tamaño: "2.0 MB", paginas: 20, url: PUBLIC_PDFS.derecho    },
      { nombre: "Mapa_Derechos.png",             tipo: "imagen", tamaño: "3.4 MB", dimensiones: "4961×3508",
        url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=90" },
      { nombre: "Sentencias_TC_Clave.pdf",       tipo: "pdf",    tamaño: "3.1 MB", paginas: 35, url: PUBLIC_PDFS.derechos_hum },
    ],
  },
  {
    id: 24,
    titulo: "Resumen: Derecho Laboral – Beneficios Sociales",
    cursoId: 74, docenteId: 12, tipo: "Resumen", semana: 8,
    descargas: 145, likes: 54, vistas: 420,
    autor: "Estudiante UC", premium: false, fecha: "2026-05-02",
    previewImg: PREVIEW_IMGS.derecho,
    descripcion: "Beneficios sociales en el régimen laboral peruano: CTS, gratificaciones, vacaciones, utilidades y ESSALUD. Calculadora en Excel.",
    temas: ["CTS", "Gratificaciones", "Vacaciones truncas", "ESSALUD", "AFP vs ONP"],
    archivos: [
      { nombre: "Resumen_Beneficios_Laborales.pdf",  tipo: "pdf",   tamaño: "1.6 MB", paginas: 18, url: PUBLIC_PDFS.derecho  },
      { nombre: "Calculadora_CTS_Gratif.xlsx",       tipo: "excel", tamaño: "310 KB", hojas: 5,    url: null },
      { nombre: "Cuadro_Comparativo_Regimenes.docx", tipo: "word",  tamaño: "480 KB", paginas: 6,  url: null },
    ],
  },
  // ── MEDICINA HUMANA ──────────────────────────────────────────────
  {
    id: 25,
    titulo: "Apuntes: Anatomía – Sistema Nervioso",
    cursoId: 75, docenteId: 14, tipo: "Apunte", semana: 7,
    descargas: 498, likes: 191, vistas: 1450,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.anatomia,
    descripcion: "Sistema nervioso central y periférico: neuroanatomía, vías sensitivas y motoras, pares craneales. Imágenes de atlas con anotaciones.",
    temas: ["SNC", "SNP", "Pares craneales", "Vías sensitivas", "Neuroanatomía"],
    archivos: [
      { nombre: "Anatomia_SN_Apuntes.pdf",      tipo: "pdf",    tamaño: "8.2 MB",  paginas: 54, url: PUBLIC_PDFS.medicina  },
      { nombre: "Esquema_Pares_Craneales.png",  tipo: "imagen", tamaño: "5.6 MB",  dimensiones: "5000×3500",
        url: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?w=1200&q=90" },
      { nombre: "Flashcards_Neuroanatomia.pptx",tipo: "ppt",    tamaño: "14.3 MB", diapositivas: 80, url: null },
    ],
  },
  {
    id: 26,
    titulo: "Guía ilustrada: Histología – Tejidos Básicos",
    cursoId: 76, docenteId: 14, tipo: "Guía", semana: 6,
    descargas: 367, likes: 139, vistas: 1080,
    autor: "Estudiante UC", premium: true, fecha: "2026-04-28",
    previewImg: PREVIEW_IMGS.histologia,
    descripcion: "Los 4 tejidos básicos con microfotografías de microscopio óptico y electrónico. 43 imágenes anotadas para práctica de identificación.",
    temas: ["Tejido epitelial", "Tejido conectivo", "Tejido muscular", "Tejido nervioso"],
    archivos: [
      { nombre: "Guia_Histologia_Tejidos.pdf",  tipo: "pdf",   tamaño: "45 MB",   paginas: 68,       url: PUBLIC_PDFS.medicina  },
      { nombre: "Microfotografias_Pack.zip",    tipo: "zip",   tamaño: "120 MB",  archivos: 43,       url: null },
      { nombre: "Flashcards_Histologia.pptx",  tipo: "ppt",   tamaño: "18.4 MB", diapositivas: 86,   url: null },
    ],
  },
  {
    id: 27,
    titulo: "Guía: Farmacología – Antimicrobianos",
    cursoId: 79, docenteId: 15, tipo: "Guía", semana: 6,
    descargas: 423, likes: 162, vistas: 1290,
    autor: "Estudiante UC", premium: true, fecha: "2026-04-30",
    previewImg: PREVIEW_IMGS.farmacologia,
    descripcion: "Antimicrobianos: mecanismos de acción, espectro, resistencia bacteriana y uso clínico. Clasificación por familias con dosis habituales.",
    temas: ["Betalactámicos", "Macrólidos", "Fluoroquinolonas", "Resistencia bacteriana"],
    archivos: [
      { nombre: "Guia_Antimicrobianos.pdf",   tipo: "pdf",    tamaño: "6.8 MB",  paginas: 74, url: PUBLIC_PDFS.farmacologia },
      { nombre: "Tabla_Antibioticos.xlsx",    tipo: "excel",  tamaño: "520 KB",  hojas: 6,    url: null },
      { nombre: "Flashcards_Farma.pptx",      tipo: "ppt",    tamaño: "10.2 MB", diapositivas: 64, url: null },
      { nombre: "Mapa_Mecanismos_Accion.png", tipo: "imagen", tamaño: "4.8 MB",  dimensiones: "5000×3500",
        url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=90" },
    ],
  },
  // ── ENFERMERÍA ──────────────────────────────────────────────────
  {
    id: 28,
    titulo: "Apuntes: Proceso de Atención de Enfermería (PAE)",
    cursoId: 81, docenteId: 27, tipo: "Apunte", semana: 3,
    descargas: 312, likes: 118, vistas: 890,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-12",
    previewImg: PREVIEW_IMGS.enfermeria,
    descripcion: "Las 5 etapas del PAE: valoración, diagnóstico NANDA, planificación, ejecución y evaluación. Casos clínicos resueltos.",
    temas: ["PAE", "Diagnóstico NANDA", "Taxonomía II", "Cuidados de enfermería", "NIC/NOC"],
    archivos: [
      { nombre: "PAE_Completo.pdf",            tipo: "pdf",   tamaño: "3.8 MB", paginas: 40, url: PUBLIC_PDFS.salud_publica },
      { nombre: "Diagnosticos_NANDA.xlsx",     tipo: "excel", tamaño: "380 KB", hojas: 5,    url: null },
      { nombre: "Casos_Clinicos_ENF.docx",     tipo: "word",  tamaño: "640 KB", paginas: 15, url: null },
    ],
  },
  // ── ODONTOLOGÍA ─────────────────────────────────────────────────
  {
    id: 29,
    titulo: "Guía: Anatomía Dental y Morfología",
    cursoId: 83, docenteId: 28, tipo: "Guía", semana: 2,
    descargas: 256, likes: 94, vistas: 740,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-06",
    previewImg: PREVIEW_IMGS.odontologia,
    descripcion: "Morfología de los 32 dientes permanentes y 20 deciduos. Características macroscópicas, ángulos y facetas con fotografías clínicas.",
    temas: ["Morfología dental", "Dientes permanentes", "Dentición decidua", "Incisivos", "Molares"],
    archivos: [
      { nombre: "Anatomia_Dental.pdf",         tipo: "pdf",    tamaño: "12.4 MB", paginas: 86, url: PUBLIC_PDFS.medicina   },
      { nombre: "Atlas_Morfologia.zip",        tipo: "zip",    tamaño: "45 MB",   archivos: 64, url: null },
      { nombre: "Cuadro_Caracteristicas.xlsx", tipo: "excel",  tamaño: "310 KB",  hojas: 4,    url: null },
      { nombre: "Foto_Modelos_Yeso.png",       tipo: "imagen", tamaño: "4.2 MB",  dimensiones: "3508×2480",
        url: "https://images.unsplash.com/photo-1588776814546-1ffbb5d7d2a6?w=1200&q=90" },
    ],
  },
  // ── FARMACIA Y BIOQUÍMICA ────────────────────────────────────────
  {
    id: 30,
    titulo: "Apuntes: Farmacotecnia – Formas Farmacéuticas",
    cursoId: 87, docenteId: 29, tipo: "Apunte", semana: 4,
    descargas: 189, likes: 69, vistas: 530,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.farmacia,
    descripcion: "Formas farmacéuticas sólidas, líquidas y semisólidas. Procesos de fabricación, controles de calidad y biofarmacia.",
    temas: ["Comprimidos", "Cápsulas", "Emulsiones", "Cremas", "BPM"],
    archivos: [
      { nombre: "Formas_Farmaceuticas.pdf",   tipo: "pdf",   tamaño: "5.6 MB", paginas: 60, url: PUBLIC_PDFS.farmacologia },
      { nombre: "Controles_Calidad.xlsx",     tipo: "excel", tamaño: "290 KB", hojas: 4,    url: null },
      { nombre: "Slides_BPM.pptx",           tipo: "ppt",   tamaño: "7.2 MB", diapositivas: 48, url: null },
    ],
  },
  // ── TECNOLOGÍA MÉDICA – TERAPIA FÍSICA ──────────────────────────
  {
    id: 31,
    titulo: "Guía: Biomecánica de la Columna Vertebral",
    cursoId: 89, docenteId: 30, tipo: "Guía", semana: 5,
    descargas: 178, likes: 65, vistas: 490,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.terapia_fisica,
    descripcion: "Anatomía funcional de la columna, biomecánica del movimiento espinal, patologías frecuentes y protocolos de rehabilitación fisioterapéutica.",
    temas: ["Columna vertebral", "Biomecánica", "Lumbalgia", "Hernias discales", "Rehabilitación"],
    archivos: [
      { nombre: "Biomecanica_Columna.pdf",    tipo: "pdf",    tamaño: "4.2 MB", paginas: 44, url: PUBLIC_PDFS.terapia_fisica_p },
      { nombre: "Protocolos_Rehab.docx",      tipo: "word",   tamaño: "580 KB", paginas: 16, url: null },
      { nombre: "Imagenes_Columna.png",       tipo: "imagen", tamaño: "3.8 MB", dimensiones: "3508×4961",
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=90" },
    ],
  },
  // ── TECNOLOGÍA MÉDICA – LABORATORIO CLÍNICO ─────────────────────
  {
    id: 32,
    titulo: "Resumen: Hematología – Interpretación del Hemograma",
    cursoId: 92, docenteId: 31, tipo: "Resumen", semana: 4,
    descargas: 234, likes: 87, vistas: 670,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-15",
    previewImg: PREVIEW_IMGS.laboratorio,
    descripcion: "Valores de referencia del hemograma completo. Interpretación de anemias, leucocitosis, trombocitopenia y morfología eritrocitaria.",
    temas: ["Hemograma", "Anemias", "Leucocitosis", "Morfología eritrocitaria", "VCM/HCM"],
    archivos: [
      { nombre: "Interpretacion_Hemograma.pdf", tipo: "pdf",   tamaño: "2.8 MB", paginas: 28, url: PUBLIC_PDFS.bioquimica },
      { nombre: "Tabla_Valores_Ref.xlsx",       tipo: "excel", tamaño: "160 KB", hojas: 3,    url: null },
      { nombre: "Casos_Clinicos_Hema.docx",     tipo: "word",  tamaño: "540 KB", paginas: 12, url: null },
    ],
  },
  // ── TECNOLOGÍA MÉDICA – RADIOLOGÍA ──────────────────────────────
  {
    id: 33,
    titulo: "Apuntes: Radiología – Física de los Rayos X",
    cursoId: 94, docenteId: 32, tipo: "Apunte", semana: 2,
    descargas: 145, likes: 54, vistas: 400,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-08",
    previewImg: PREVIEW_IMGS.radiologia,
    descripcion: "Producción de rayos X, interacción con la materia, formación de imagen y protección radiológica. Normativa IPEN y OIEA.",
    temas: ["Tubo de rayos X", "kV y mAs", "Radioprotección", "IPEN", "Dosis absorbida"],
    archivos: [
      { nombre: "Fisica_RayosX.pdf",          tipo: "pdf",    tamaño: "3.6 MB", paginas: 36, url: PUBLIC_PDFS.radiologia_img },
      { nombre: "Imagenes_Equipos.png",       tipo: "imagen", tamaño: "4.1 MB", dimensiones: "3508×2480",
        url: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&q=90" },
      { nombre: "Tabla_Radioproteccion.xlsx", tipo: "excel",  tamaño: "190 KB", hojas: 3,    url: null },
    ],
  },
  // ── PSICOLOGÍA ──────────────────────────────────────────────────
  {
    id: 34,
    titulo: "Mapa: Psicología del Desarrollo – Piaget vs Vygotsky",
    cursoId: 98, docenteId: 16, tipo: "Mapa", semana: 5,
    descargas: 201, likes: 76, vistas: 580,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.psicologia,
    descripcion: "Estadios del desarrollo cognitivo según Piaget vs Vygotsky. Comparativa de teorías y aplicaciones en educación.",
    temas: ["Piaget", "Vygotsky", "Estadios cognitivos", "ZDP", "Constructivismo"],
    archivos: [
      { nombre: "Mapa_Piaget_Vygotsky.pdf",  tipo: "pdf",    tamaño: "2.8 MB", paginas: 22, url: PUBLIC_PDFS.psicologia },
      { nombre: "Infografia_Etapas.png",     tipo: "imagen", tamaño: "3.2 MB", dimensiones: "4961×3508",
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=90" },
      { nombre: "Comparativa_Teorias.docx",  tipo: "word",   tamaño: "680 KB", paginas: 10, url: null },
    ],
  },
  {
    id: 35,
    titulo: "Resumen: Neurociencias – Plasticidad Neural",
    cursoId: 97, docenteId: 16, tipo: "Resumen", semana: 6,
    descargas: 167, likes: 63, vistas: 470,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-26",
    previewImg: PREVIEW_IMGS.neurociencia,
    descripcion: "Mecanismos de plasticidad sináptica, LTP y LTD. Bases neurales del aprendizaje y la memoria. Aplicaciones terapéuticas y educativas.",
    temas: ["Plasticidad sináptica", "LTP", "Hipocampo", "Neurotransmisores", "Aprendizaje neural"],
    archivos: [
      { nombre: "Plasticidad_Neural.pdf",     tipo: "pdf",    tamaño: "3.4 MB", paginas: 30, url: PUBLIC_PDFS.neurociencia },
      { nombre: "Esquema_Sinapsis.png",       tipo: "imagen", tamaño: "2.8 MB", dimensiones: "3508×2480",
        url: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90" },
      { nombre: "Casos_Clinicos_Neuro.docx",  tipo: "word",   tamaño: "480 KB", paginas: 8,  url: null },
    ],
  },
  // ── CIENCIAS DE LA COMUNICACIÓN ─────────────────────────────────
  {
    id: 36,
    titulo: "Guía: Periodismo Digital y Fact-Checking",
    cursoId: 101, docenteId: 33, tipo: "Guía", semana: 4,
    descargas: 145, likes: 53, vistas: 410,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.comunicacion,
    descripcion: "Herramientas de verificación de noticias: Google Fact Check, TinEye, InVID. Deontología periodística y cobertura de redes sociales.",
    temas: ["Fact-checking", "Desinformación", "Google Fact Check", "Redes sociales", "Deontología"],
    archivos: [
      { nombre: "Periodismo_Digital.pdf",     tipo: "pdf",   tamaño: "2.4 MB", paginas: 24, url: PUBLIC_PDFS.comunicacion },
      { nombre: "Guia_Fact_Checking.docx",    tipo: "word",  tamaño: "420 KB", paginas: 8,  url: null },
      { nombre: "Herramientas_Verificacion.xlsx", tipo: "excel", tamaño: "180 KB", hojas: 2, url: null },
    ],
  },
  // ── EDUCACIÓN E INNOVACIÓN DIGITAL ──────────────────────────────
  {
    id: 37,
    titulo: "Guía: Gamificación en el Aula – Kahoot y Mentimeter",
    cursoId: 105, docenteId: 34, tipo: "Guía", semana: 3,
    descargas: 134, likes: 50, vistas: 380,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-14",
    previewImg: PREVIEW_IMGS.innovacion_educ,
    descripcion: "Diseño de actividades gamificadas con Kahoot, Mentimeter, Quizizz y Classcraft. Fundamentos teóricos y casos aplicados en educación superior.",
    temas: ["Gamificación", "Kahoot", "Quizizz", "Mentimeter", "Aprendizaje activo"],
    archivos: [
      { nombre: "Gamificacion_Aula.pdf",       tipo: "pdf",  tamaño: "2.8 MB", paginas: 28, url: PUBLIC_PDFS.educacion_digital },
      { nombre: "Plantilla_Sesion.pptx",       tipo: "ppt",  tamaño: "4.6 MB", diapositivas: 20, url: null },
      { nombre: "Rubrica_Gamificacion.docx",   tipo: "word", tamaño: "320 KB", paginas: 4,  url: null },
    ],
  },
  // ── MECATRÓNICA & ELÉCTRICA ──────────────────────────────────────
  {
    id: 38,
    titulo: "Apuntes: Robótica – Cinemática del Robot",
    cursoId: 34, docenteId: 25, tipo: "Apunte", semana: 5,
    descargas: 198, likes: 74, vistas: 560,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-22",
    previewImg: PREVIEW_IMGS.mecatronica,
    descripcion: "Cinemática directa e inversa de robots industriales. Matrices de Denavit-Hartenberg y workspace. Simulación en ROS y MATLAB.",
    temas: ["Denavit-Hartenberg", "Cinemática directa", "Cinemática inversa", "ROS", "MATLAB"],
    archivos: [
      { nombre: "Cinematica_Robot.pdf",        tipo: "pdf",   tamaño: "4.2 MB", paginas: 38, url: PUBLIC_PDFS.generico },
      { nombre: "Simulacion_MATLAB.zip",       tipo: "zip",   tamaño: "8.6 MB", archivos: 6, url: null },
      { nombre: "Tablas_DH.xlsx",              tipo: "excel", tamaño: "210 KB", hojas: 3,    url: null },
    ],
  },
  {
    id: 39,
    titulo: "Código: Árboles Binarios en Python",
    cursoId: 6, docenteId: 1, tipo: "Código", semana: 9,
    descargas: 356, likes: 134, vistas: 990,
    autor: "Estudiante UC", premium: true, fecha: "2026-05-05",
    previewImg: PREVIEW_IMGS.programacion,
    descripcion: "Implementación completa de BST, AVL y Árbol Rojo-Negro en Python con visualización gráfica. Operaciones con complejidad analizada.",
    temas: ["BST", "AVL", "Árbol Rojo-Negro", "Recorridos", "matplotlib"],
    archivos: [
      { nombre: "Arboles_Binarios_Python.pdf", tipo: "pdf", tamaño: "3.2 MB", paginas: 38, url: PUBLIC_PDFS.algoritmos },
      { nombre: "codigo_arboles.zip",          tipo: "zip", tamaño: "48 KB",  archivos: 8, url: null },
      { nombre: "Explicacion_AVL.pptx",        tipo: "ppt", tamaño: "4.8 MB", diapositivas: 28, url: null },
    ],
  },
  {
    id: 40,
    titulo: "Apuntes: Gestión de Proyectos – PMI / PMBOK",
    cursoId: 59, docenteId: 9, tipo: "Apunte", semana: 3,
    descargas: 189, likes: 70, vistas: 530,
    autor: "Estudiante UC", premium: false, fecha: "2026-04-06",
    previewImg: PREVIEW_IMGS.gestion,
    descripcion: "Las 10 áreas de conocimiento del PMI y los 5 grupos de procesos. EDT, cronograma, matriz de riesgos y acta de constitución.",
    temas: ["PMI", "PMBOK", "EDT", "Gestión de riesgos", "Cronograma"],
    archivos: [
      { nombre: "Apuntes_PMI_PMBOK.pdf",         tipo: "pdf",   tamaño: "4.1 MB", paginas: 48, url: PUBLIC_PDFS.gestion   },
      { nombre: "Plantilla_EDT.xlsx",            tipo: "excel", tamaño: "220 KB", hojas: 3,    url: null },
      { nombre: "Plantilla_Acta_Proyecto.docx",  tipo: "word",  tamaño: "410 KB", paginas: 4,  url: null },
      { nombre: "Matriz_Riesgos.xlsx",           tipo: "excel", tamaño: "180 KB", hojas: 2,    url: null },
    ],
  },
];

// ------------------------------------------------------------------
// EXÁMENES — con URLs reales de PDFs e imágenes de portada
// ------------------------------------------------------------------
export const examenes = [
  // ── ISI / CCO ────────────────────────────────────────────────────
  {
    id: 1,
    titulo: "Parcial I – Algoritmos y Prog. 2026-I",
    cursoId: 4, docenteId: 1, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 534, likes: 205, vistas: 1560,
    premium: false, fecha: "2026-04-10",
    previewImg: PREVIEW_IMGS.algoritmos,
    descripcion: "4 preguntas: análisis de pseudocódigo, diseño de algoritmos iterativos/recursivos y cálculo de complejidad. Duración: 100 min.",
    temas: ["Pseudocódigo", "Recursividad", "Big-O", "Búsqueda binaria"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_ISI101_2026I.pdf",    tipo: "pdf", tamaño: "1.1 MB", paginas: 4, url: PUBLIC_PDFS.algoritmos },
      { nombre: "Parcial1_ISI101_Solucion.pdf", tipo: "pdf", tamaño: "2.3 MB", paginas: 8, url: PUBLIC_PDFS.generico   },
    ],
  },
  {
    id: 2,
    titulo: "Final – Estructuras de Datos 2025-II",
    cursoId: 6, docenteId: 1, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 612, likes: 238, vistas: 1820,
    premium: true, fecha: "2025-12-12",
    previewImg: PREVIEW_IMGS.programacion,
    descripcion: "Listas enlazadas, pilas, colas, árboles AVL y grafos. Solución completa con código Python comentado.",
    temas: ["Listas enlazadas", "Pilas y colas", "Árboles AVL", "Grafos", "Dijkstra"],
    duracion: "120 min", preguntas: 5, puntaje_total: 20,
    archivos: [
      { nombre: "Final_ISI301_2025II.pdf",          tipo: "pdf", tamaño: "1.4 MB", paginas: 6,  url: PUBLIC_PDFS.algoritmos },
      { nombre: "Final_ISI301_Solucion.pdf",        tipo: "pdf", tamaño: "3.8 MB", paginas: 14, url: PUBLIC_PDFS.generico   },
      { nombre: "Codigo_Soluciones_Python.zip",     tipo: "zip", tamaño: "28 KB",  archivos: 5, url: null },
    ],
  },
  {
    id: 3,
    titulo: "Parcial II – Ing. de Software 2026-I",
    cursoId: 7, docenteId: 1, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 289, likes: 103, vistas: 870,
    premium: false, fecha: "2026-05-08",
    previewImg: PREVIEW_IMGS.software,
    descripcion: "Metodologías ágiles, diagramas UML y patrones de diseño. Sin solución disponible aún.",
    temas: ["Scrum", "Diagramas UML", "Casos de uso", "Patrones de diseño"],
    duracion: "90 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial2_ISI401_2026I.pdf", tipo: "pdf", tamaño: "980 KB", paginas: 3, url: PUBLIC_PDFS.generico },
    ],
  },
  {
    id: 4,
    titulo: "Final – Redes y Comunicaciones 2025-II",
    cursoId: 8, docenteId: 2, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 401, likes: 152, vistas: 1180,
    premium: false, fecha: "2025-12-18",
    previewImg: PREVIEW_IMGS.redes,
    descripcion: "Modelo OSI/TCP-IP, subnetting, protocolos de enrutamiento y configuración. Simulaciones en Packet Tracer incluidas.",
    temas: ["Modelo OSI", "TCP/IP", "Subnetting VLSM", "OSPF", "Packet Tracer"],
    duracion: "110 min", preguntas: 5, puntaje_total: 20,
    archivos: [
      { nombre: "Final_ISI402_2025II.pdf",     tipo: "pdf",   tamaño: "1.6 MB", paginas: 5,  url: PUBLIC_PDFS.redes    },
      { nombre: "Final_ISI402_Solucion.pdf",   tipo: "pdf",   tamaño: "3.2 MB", paginas: 10, url: PUBLIC_PDFS.generico },
      { nombre: "Simulacion_PacketTracer.zip", tipo: "zip",   tamaño: "1.8 MB", archivos: 3, url: null },
    ],
  },
  {
    id: 5,
    titulo: "Parcial I – Inteligencia Artificial 2026-I",
    cursoId: 9, docenteId: 3, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 345, likes: 132, vistas: 1020,
    premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.ia,
    descripcion: "Búsqueda heurística A*, lógica proposicional, regresión lineal y clasificación con Naive Bayes. Solución con código Python.",
    temas: ["A* Heurístico", "Regresión lineal", "Naive Bayes", "Lógica proposicional"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_ISI601_2026I.pdf",     tipo: "pdf", tamaño: "1.2 MB", paginas: 4,  url: PUBLIC_PDFS.ia       },
      { nombre: "Parcial1_ISI601_Solucion.pdf",  tipo: "pdf", tamaño: "3.1 MB", paginas: 10, url: PUBLIC_PDFS.ml       },
      { nombre: "Notebooks_IA.zip",              tipo: "zip", tamaño: "1.2 MB", archivos: 3, url: null },
    ],
  },
  // ── INGENIERÍA INDUSTRIAL ────────────────────────────────────────
  {
    id: 6,
    titulo: "Parcial I – Cálculo Diferencial 2026-I",
    cursoId: 11, docenteId: 4, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 678, likes: 261, vistas: 1990,
    premium: false, fecha: "2026-04-16",
    previewImg: PREVIEW_IMGS.calculo,
    descripcion: "Límites, continuidad y derivadas. 4 problemas con desarrollo completo. Solución paso a paso con todas las reglas aplicadas.",
    temas: ["Límites", "Continuidad", "Derivadas", "Regla de la cadena"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_IIN101_2026I.pdf",    tipo: "pdf", tamaño: "1.3 MB", paginas: 4,  url: PUBLIC_PDFS.calculo  },
      { nombre: "Parcial1_IIN101_Solucion.pdf", tipo: "pdf", tamaño: "4.1 MB", paginas: 12, url: PUBLIC_PDFS.generico },
      { nombre: "Formulario_Derivadas.pdf",     tipo: "pdf", tamaño: "560 KB", paginas: 2,  url: PUBLIC_PDFS.generico2 },
    ],
  },
  {
    id: 7,
    titulo: "Final – Investigación Operativa 2025-II",
    cursoId: 13, docenteId: 4, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 389, likes: 148, vistas: 1140,
    premium: true, fecha: "2025-12-10",
    previewImg: PREVIEW_IMGS.estadistica,
    descripcion: "PL gráfico y simplex, transporte, asignación húngara y CPM/PERT. Solución con tablas simplex completas.",
    temas: ["Simplex", "Método Gráfico", "Transporte", "Método Húngaro", "CPM/PERT"],
    duracion: "120 min", preguntas: 5, puntaje_total: 20,
    archivos: [
      { nombre: "Final_IIN301_2025II.pdf",    tipo: "pdf",   tamaño: "1.8 MB", paginas: 6,  url: PUBLIC_PDFS.manufactura },
      { nombre: "Final_IIN301_Solucion.pdf",  tipo: "pdf",   tamaño: "5.2 MB", paginas: 18, url: PUBLIC_PDFS.generico    },
      { nombre: "Tablas_Simplex.xlsx",        tipo: "excel", tamaño: "380 KB", hojas: 5,    url: null },
    ],
  },
  // ── INGENIERÍA CIVIL ─────────────────────────────────────────────
  {
    id: 8,
    titulo: "Parcial I – Mecánica de Suelos 2026-I",
    cursoId: 17, docenteId: 6, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 234, likes: 87, vistas: 670,
    premium: false, fecha: "2026-04-22",
    previewImg: PREVIEW_IMGS.estructuras,
    descripcion: "Clasificación de suelos SUCS, límites de Atterberg y compactación Proctor. Sin solución. Datos de laboratorio incluidos.",
    temas: ["Clasificación SUCS", "Límites de Atterberg", "Proctor estándar", "CBR"],
    duracion: "90 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_ICI301_2026I.pdf", tipo: "pdf",   tamaño: "1.2 MB", paginas: 3, url: PUBLIC_PDFS.geotecnia },
      { nombre: "Datos_Lab_Examen.xlsx",     tipo: "excel", tamaño: "145 KB", hojas: 2,   url: null },
    ],
  },
  // ── ADMINISTRACIÓN Y MARKETING / NEGOCIOS DIGITALES ─────────────
  {
    id: 9,
    titulo: "Parcial I – Marketing Digital 2026-I",
    cursoId: 56, docenteId: 7, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 456, likes: 174, vistas: 1320,
    premium: false, fecha: "2026-04-18",
    previewImg: PREVIEW_IMGS.marketing,
    descripcion: "SEM, SEO, redes sociales y analítica web. Caso práctico campaña Google Ads con solución detallada.",
    temas: ["SEO", "SEM", "Google Ads", "Meta Business", "Google Analytics 4"],
    duracion: "80 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_AND301_2026I.pdf",    tipo: "pdf",   tamaño: "1.4 MB", paginas: 3, url: PUBLIC_PDFS.marketing },
      { nombre: "Parcial1_AND301_Solucion.pdf", tipo: "pdf",   tamaño: "2.8 MB", paginas: 7, url: PUBLIC_PDFS.generico  },
      { nombre: "Caso_GoogleAds_Datos.xlsx",    tipo: "excel", tamaño: "210 KB", hojas: 3,   url: null },
    ],
  },
  {
    id: 10,
    titulo: "Parcial I – Microeconomía 2026-I",
    cursoId: 55, docenteId: 8, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 523, likes: 199, vistas: 1560,
    premium: false, fecha: "2026-04-12",
    previewImg: PREVIEW_IMGS.economia,
    descripcion: "Oferta, demanda, elasticidades y equilibrio de mercado. 4 problemas con gráficos y solución algebraica.",
    temas: ["Oferta y demanda", "Equilibrio de mercado", "Elasticidad precio"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_AND201_2026I.pdf",    tipo: "pdf", tamaño: "1.2 MB", paginas: 4,  url: PUBLIC_PDFS.economia },
      { nombre: "Parcial1_AND201_Solucion.pdf", tipo: "pdf", tamaño: "3.4 MB", paginas: 10, url: PUBLIC_PDFS.generico },
    ],
  },
  // ── GESTIÓN PÚBLICA ──────────────────────────────────────────────
  {
    id: 11,
    titulo: "Parcial I – Contrataciones del Estado 2026-I",
    cursoId: 50, docenteId: 18, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 198, likes: 72, vistas: 560,
    premium: false, fecha: "2026-04-24",
    previewImg: PREVIEW_IMGS.gestion_publica,
    descripcion: "Tipos de procedimientos de selección, umbrales UIT 2026, plazos y documentación requerida. Solución con fundamento legal.",
    temas: ["Ley 30225", "Procedimientos de selección", "SEACE", "Plazos", "Bases del proceso"],
    duracion: "90 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_AGP401_2026I.pdf",    tipo: "pdf", tamaño: "1.1 MB", paginas: 3, url: PUBLIC_PDFS.gestion  },
      { nombre: "Parcial1_AGP401_Solucion.pdf", tipo: "pdf", tamaño: "2.2 MB", paginas: 7, url: PUBLIC_PDFS.generico },
    ],
  },
  // ── TALENTO HUMANO ───────────────────────────────────────────────
  {
    id: 12,
    titulo: "Parcial II – Compensaciones y Remuneraciones 2026-I",
    cursoId: 48, docenteId: 17, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 145, likes: 53, vistas: 410,
    premium: false, fecha: "2026-05-06",
    previewImg: PREVIEW_IMGS.rrhh,
    descripcion: "Estructura salarial, bandas de compensación, beneficios no monetarios y gestión por competencias. Sin solución oficial.",
    temas: ["Bandas salariales", "Compensación variable", "Beneficios", "Hay Group", "Korn Ferry"],
    duracion: "80 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial2_AGT501_2026I.pdf", tipo: "pdf", tamaño: "980 KB", paginas: 3, url: PUBLIC_PDFS.rrhh },
    ],
  },
  // ── CONTABILIDAD Y FINANZAS ──────────────────────────────────────
  {
    id: 13,
    titulo: "Parcial II – Contabilidad General 2026-I",
    cursoId: 63, docenteId: 10, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 345, likes: 130, vistas: 1020,
    premium: false, fecha: "2026-05-06",
    previewImg: PREVIEW_IMGS.contabilidad,
    descripcion: "Registro de operaciones, ajustes contables y estados financieros básicos. Sin solución oficial.",
    temas: ["Asientos contables", "Ajustes", "Balance General", "Estado de Resultados"],
    duracion: "90 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial2_COF101_2026I.pdf",   tipo: "pdf", tamaño: "1.4 MB", paginas: 4, url: PUBLIC_PDFS.contabilidad },
      { nombre: "Hoja_Trabajo_Escaneada.pdf",  tipo: "pdf", tamaño: "5.8 MB", paginas: 3, url: PUBLIC_PDFS.generico     },
    ],
  },
  {
    id: 14,
    titulo: "Final – Auditoría Financiera 2025-II",
    cursoId: 66, docenteId: 11, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 267, likes: 98, vistas: 800,
    premium: true, fecha: "2025-12-16",
    previewImg: PREVIEW_IMGS.auditoria,
    descripcion: "Planificación, riesgo de auditoría, evidencia, papeles de trabajo e informe. Caso práctico empresa comercial con solución.",
    temas: ["Riesgo de auditoría", "Evidencia", "NIA", "Informe del auditor"],
    duracion: "120 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Final_COF601_2025II.pdf",       tipo: "pdf",   tamaño: "1.9 MB", paginas: 5,  url: PUBLIC_PDFS.finanzas  },
      { nombre: "Final_COF601_Solucion.pdf",     tipo: "pdf",   tamaño: "4.4 MB", paginas: 14, url: PUBLIC_PDFS.generico2 },
      { nombre: "Papeles_Trabajo_Modelo.xlsx",   tipo: "excel", tamaño: "680 KB", hojas: 8,    url: null },
    ],
  },
  // ── DERECHO ──────────────────────────────────────────────────────
  {
    id: 15,
    titulo: "Parcial I – Derecho Constitucional 2026-I",
    cursoId: 72, docenteId: 13, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 378, likes: 143, vistas: 1120,
    premium: false, fecha: "2026-04-20",
    previewImg: PREVIEW_IMGS.derecho,
    descripcion: "Fuentes del derecho, estructura del Estado y derechos fundamentales. Análisis de casos con sentencias del TC.",
    temas: ["Fuentes del Derecho", "Estructura del Estado", "Derechos fundamentales"],
    duracion: "90 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_DER301_2026I.pdf",    tipo: "pdf", tamaño: "1.1 MB", paginas: 3,  url: PUBLIC_PDFS.derecho      },
      { nombre: "Parcial1_DER301_Solucion.pdf", tipo: "pdf", tamaño: "2.6 MB", paginas: 8,  url: PUBLIC_PDFS.derechos_hum },
    ],
  },
  {
    id: 16,
    titulo: "Final – Derecho Civil I 2025-II",
    cursoId: 71, docenteId: 12, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 412, likes: 157, vistas: 1230,
    premium: true, fecha: "2025-12-11",
    previewImg: PREVIEW_IMGS.derecho2,
    descripcion: "5 casos sobre acto jurídico, vicios del consentimiento, nulidades y representación con doctrina.",
    temas: ["Acto jurídico", "Representación", "Nulidad", "Dolo y error"],
    duracion: "120 min", preguntas: 5, puntaje_total: 20,
    archivos: [
      { nombre: "Final_DER201_2025II.pdf",    tipo: "pdf", tamaño: "1.6 MB", paginas: 5,  url: PUBLIC_PDFS.derecho  },
      { nombre: "Final_DER201_Solucion.pdf",  tipo: "pdf", tamaño: "5.6 MB", paginas: 18, url: PUBLIC_PDFS.generico },
    ],
  },
  // ── MEDICINA HUMANA ──────────────────────────────────────────────
  {
    id: 17,
    titulo: "Parcial I – Anatomía Humana 2026-I",
    cursoId: 75, docenteId: 14, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 789, likes: 301, vistas: 2340,
    premium: false, fecha: "2026-04-14",
    previewImg: PREVIEW_IMGS.anatomia,
    descripcion: "Sistema musculoesquelético: identificación de estructuras, origen/inserción muscular y correlación clínica. Solución con atlas.",
    temas: ["Sistema musculoesquelético", "Músculos del miembro superior", "Plexo braquial"],
    duracion: "90 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_MED101_2026I.pdf",    tipo: "pdf", tamaño: "2.4 MB",  paginas: 5,  url: PUBLIC_PDFS.medicina },
      { nombre: "Parcial1_MED101_Solucion.pdf", tipo: "pdf", tamaño: "8.6 MB",  paginas: 12, url: PUBLIC_PDFS.generico },
    ],
  },
  {
    id: 18,
    titulo: "Final – Histología y Embriología 2025-II",
    cursoId: 76, docenteId: 14, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 634, likes: 245, vistas: 1890,
    premium: true, fecha: "2025-12-09",
    previewImg: PREVIEW_IMGS.histologia,
    descripcion: "Identificación de 20 microfotografías, embriología semanas 1-8 y correlaciones clínicas. Solución completa con imágenes.",
    temas: ["Identificación histológica", "Embriología semanas 1-8", "Malformaciones congénitas"],
    duracion: "120 min", preguntas: 6, puntaje_total: 20,
    archivos: [
      { nombre: "Final_MED201_2025II.pdf",      tipo: "pdf",  tamaño: "3.8 MB",  paginas: 6,  url: PUBLIC_PDFS.medicina },
      { nombre: "Final_MED201_Solucion.pdf",    tipo: "pdf",  tamaño: "28.4 MB", paginas: 16, url: PUBLIC_PDFS.generico },
      { nombre: "Microfotografias_Examen.zip",  tipo: "zip",  tamaño: "48 MB",   archivos: 20, url: null },
    ],
  },
  {
    id: 19,
    titulo: "Parcial II – Farmacología 2026-I",
    cursoId: 79, docenteId: 15, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 512, likes: 196, vistas: 1540,
    premium: false, fecha: "2026-05-10",
    previewImg: PREVIEW_IMGS.farmacologia,
    descripcion: "Antiinfecciosos, antiinflamatorios y medicamentos del SNC. Sin solución oficial aún. Prontuario incluido.",
    temas: ["Antiinfecciosos", "AINEs", "Glucocorticoides", "Ansiolíticos"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial2_MED501_2026I.pdf",   tipo: "pdf", tamaño: "1.8 MB", paginas: 4,  url: PUBLIC_PDFS.farmacologia },
      { nombre: "Prontuario_Farmacologico.pdf",tipo: "pdf", tamaño: "4.2 MB", paginas: 28, url: PUBLIC_PDFS.medicina     },
    ],
  },
  // ── ENFERMERÍA ──────────────────────────────────────────────────
  {
    id: 20,
    titulo: "Parcial I – Enfermería Salud del Adulto 2026-I",
    cursoId: 81, docenteId: 27, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 267, likes: 99, vistas: 760,
    premium: false, fecha: "2026-04-16",
    previewImg: PREVIEW_IMGS.enfermeria,
    descripcion: "PAE aplicado a paciente con diabetes e insuficiencia cardíaca. Diagnósticos NANDA, intervenciones NIC y resultados NOC. Solución completa.",
    temas: ["PAE", "NANDA", "NIC", "NOC", "Diabetes mellitus", "ICC"],
    duracion: "90 min", preguntas: 2, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_ENF301_2026I.pdf",    tipo: "pdf", tamaño: "1.3 MB", paginas: 3, url: PUBLIC_PDFS.salud_publica },
      { nombre: "Parcial1_ENF301_Solucion.pdf", tipo: "pdf", tamaño: "2.8 MB", paginas: 9, url: PUBLIC_PDFS.medicina     },
    ],
  },
  // ── PSICOLOGÍA ──────────────────────────────────────────────────
  {
    id: 21,
    titulo: "Parcial I – Psicología General 2026-I",
    cursoId: 96, docenteId: 16, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 289, likes: 108, vistas: 870,
    premium: false, fecha: "2026-04-17",
    previewImg: PREVIEW_IMGS.psicologia,
    descripcion: "Escuelas psicológicas, percepción, atención y memoria. Análisis de casos con referencias bibliográficas.",
    temas: ["Escuelas psicológicas", "Percepción", "Atención selectiva", "Memoria de trabajo"],
    duracion: "80 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_PSI101_2026I.pdf",    tipo: "pdf", tamaño: "980 KB", paginas: 3, url: PUBLIC_PDFS.psicologia  },
      { nombre: "Parcial1_PSI101_Solucion.pdf", tipo: "pdf", tamaño: "2.1 MB", paginas: 7, url: PUBLIC_PDFS.generico2  },
    ],
  },
  {
    id: 22,
    titulo: "Final – Neurociencias y Conducta 2025-II",
    cursoId: 97, docenteId: 16, tipo: "Final", año: 2025, semestre: "II",
    resuelto: true, descargas: 234, likes: 89, vistas: 720,
    premium: false, fecha: "2025-12-14",
    previewImg: PREVIEW_IMGS.neurociencia,
    descripcion: "Sistemas neurales, neurotransmisores y bases neurológicas de la conducta. Solución con esquemas del SN.",
    temas: ["Neurotransmisores", "Sistema límbico", "Corteza cerebral", "Neuroplasticidad"],
    duracion: "100 min", preguntas: 4, puntaje_total: 20,
    archivos: [
      { nombre: "Final_PSI201_2025II.pdf",    tipo: "pdf",    tamaño: "1.6 MB", paginas: 4,  url: PUBLIC_PDFS.neurociencia },
      { nombre: "Final_PSI201_Solucion.pdf",  tipo: "pdf",    tamaño: "4.2 MB", paginas: 12, url: PUBLIC_PDFS.generico2    },
      { nombre: "Esquemas_SN_Solucion.png",   tipo: "imagen", tamaño: "3.8 MB", dimensiones: "5000×3500",
        url: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90" },
    ],
  },
  // ── COMUNICACIÓN & EDUCACIÓN ─────────────────────────────────────
  {
    id: 23,
    titulo: "Parcial I – Periodismo Digital 2026-I",
    cursoId: 101, docenteId: 33, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: true, descargas: 134, likes: 49, vistas: 380,
    premium: false, fecha: "2026-04-19",
    previewImg: PREVIEW_IMGS.comunicacion,
    descripcion: "Géneros periodísticos digitales, hipertextualidad e interactividad. Redacción de nota web y análisis de cobertura de medios peruanos.",
    temas: ["Géneros periodísticos", "Nota web", "Hipertextualidad", "Medios peruanos"],
    duracion: "80 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_CCC301_2026I.pdf",    tipo: "pdf", tamaño: "980 KB", paginas: 3, url: PUBLIC_PDFS.comunicacion },
      { nombre: "Parcial1_CCC301_Solucion.pdf", tipo: "pdf", tamaño: "1.8 MB", paginas: 6, url: PUBLIC_PDFS.generico    },
    ],
  },
  {
    id: 24,
    titulo: "Parcial I – Tecnología Educativa 2026-I",
    cursoId: 103, docenteId: 34, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 112, likes: 41, vistas: 320,
    premium: false, fecha: "2026-04-21",
    previewImg: PREVIEW_IMGS.educacion,
    descripcion: "TPACK, aprendizaje invertido, LMS Moodle y evaluación digital formativa. Sin solución oficial.",
    temas: ["TPACK", "Flipped classroom", "Moodle", "Evaluación formativa", "E-learning"],
    duracion: "80 min", preguntas: 3, puntaje_total: 20,
    archivos: [
      { nombre: "Parcial1_EIA201_2026I.pdf", tipo: "pdf", tamaño: "890 KB", paginas: 3, url: PUBLIC_PDFS.educacion_digital },
    ],
  },
  // ── ARQUITECTURA ─────────────────────────────────────────────────
  {
    id: 25,
    titulo: "Parcial I – Diseño Arquitectónico I 2026-I",
    cursoId: 21, docenteId: 20, tipo: "Parcial", año: 2026, semestre: "I",
    resuelto: false, descargas: 145, likes: 53, vistas: 410,
    premium: false, fecha: "2026-04-23",
    previewImg: PREVIEW_IMGS.arquitectura,
    descripcion: "Partido arquitectónico, escala, proporción y análisis de sitio. Entrega de láminas A2 con planta, corte y elevación. Sin solución.",
    temas: ["Partido arquitectónico", "Análisis de sitio", "Planta / Corte / Elevación", "Escala"],
    duracion: "Taller 3h", preguntas: 1, puntaje_total: 20,
    archivos: [
      { nombre: "Enunciado_Diseño1_2026I.pdf", tipo: "pdf", tamaño: "2.1 MB", paginas: 4, url: PUBLIC_PDFS.generico },
    ],
  },
];

// ------------------------------------------------------------------
// PLANES
// ------------------------------------------------------------------
export const planes = [
  {
    id: "free",
    nombre: "Gratuito",
    precio: 0,
    periodo: "siempre",
    descripcion: "Perfecto para empezar",
    color: "#6b7280",
    features: [
      { texto: "5 descargas por mes",       incluido: true  },
      { texto: "Acceso a apuntes básicos",  incluido: true  },
      { texto: "Ver exámenes sin solución", incluido: true  },
      { texto: "Búsqueda por curso",        incluido: true  },
      { texto: "Exámenes resueltos",        incluido: false },
      { texto: "Apuntes premium",           incluido: false },
      { texto: "Descargas ilimitadas",      incluido: false },
      { texto: "Acceso anticipado",         incluido: false },
    ],
  },
  {
    id: "premium",
    nombre: "Premium",
    precio: 5,
    periodo: "mes",
    descripcion: "Para el estudiante serio",
    color: "#4f46e5",
    popular: true,
    features: [
      { texto: "Descargas ilimitadas",  incluido: true  },
      { texto: "Todos los apuntes",     incluido: true  },
      { texto: "Exámenes resueltos",    incluido: true  },
      { texto: "Búsqueda avanzada",     incluido: true  },
      { texto: "Apuntes premium",       incluido: true  },
      { texto: "Subir y ganar puntos",  incluido: true  },
      { texto: "Acceso anticipado",     incluido: false },
      { texto: "Insignias exclusivas",  incluido: false },
    ],
  },
  {
    id: "pro",
    nombre: "Pro Anual",
    precio: 40,
    periodo: "año",
    descripcion: "El mejor valor para tu carrera",
    color: "#d97706",
    features: [
      { texto: "Todo lo de Premium",          incluido: true },
      { texto: "Acceso anticipado",           incluido: true },
      { texto: "Insignias exclusivas",        incluido: true },
      { texto: "Soporte prioritario",         incluido: true },
      { texto: "Guías de examen exclusivas",  incluido: true },
      { texto: "Mentoring entre estudiantes", incluido: true },
      { texto: "Sin publicidad",              incluido: true },
      { texto: "2 meses gratis vs mensual",   incluido: true },
    ],
  },
];

// ------------------------------------------------------------------
// ESTADÍSTICAS GLOBALES
// ------------------------------------------------------------------
export const estadisticas = {
  apuntes:    4200,
  examenes:   2380,
  estudiantes: 14600,
  cursos:      480,
  docentes:    260,
  carreras:    32,
  facultades:  6,
};

// ------------------------------------------------------------------
// USUARIO ACTUAL (demo)
// ------------------------------------------------------------------
export const currentUser = {
  nombre: "Brad",
  apellido: "UC",
  carrera: "Administración y Negocios Digitales",
  carreraId: 6,
  facultadId: 1,
  ciclo: 3,
  plan: "free",
  puntos: 120,
  descargas: 3,
  descargasMax: 5,
};

// ------------------------------------------------------------------
// HELPERS
// ------------------------------------------------------------------
export const carreraById  = Object.fromEntries(carreras.map(c => [c.id, c]));
export const facultadById = Object.fromEntries(facultades.map(f => [f.id, f]));

export const getCarreraOfCurso   = (cursoId) => {
  const curso = cursos.find(c => c.id === cursoId);
  return curso ? carreraById[curso.carreraId] : null;
};
export const getCursosByCarrera  = (carreraId) => cursos.filter(c => c.carreraId === carreraId);
export const getCursosByFacultad = (facultadId) => {
  const ids = carreras.filter(c => c.facultadId === facultadId).map(c => c.id);
  return cursos.filter(c => ids.includes(c.carreraId));
};

// ------------------------------------------------------------------
// UTILIDAD PARA ABRIR / DESCARGAR ARCHIVOS EN EL DEMO
// ------------------------------------------------------------------
export function handleArchivoClick(archivo) {
  if (!archivo.url) {
    window.dispatchEvent(new CustomEvent("demo-no-url", {
      detail: { nombre: archivo.nombre }
    }));
    return;
  }
  window.open(archivo.url, "_blank", "noopener");
}