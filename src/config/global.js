export default {
  global: {
    Name: 'Cultivo de palma de aceite: previvero, vivero y siembra.',
    Description:
      'En este componente formativo el aprendiz conocerá las etapas del ciclo productivo de la palma de aceite, desde el reconocimiento del terreno, diseño de la plantación, diseño de los lotes productivos, la selección técnica del material de siembra y sustratos, hasta la adecuación estratégica del terreno mediante el trazado, drenaje, preparación de suelo y siembra de plantas en sitio definitivo. Dicha siembra comprende realizar un alistamiento en vivero, transporte de las plantas del vivero al lugar definitivo y trasplante.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Previveros y viveros del cultivo de la palma de aceite',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades del cultivo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Selección de material vegetal',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Vivero',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Siembra de palma de aceite en sitio definitivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Diseño de la planeación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Labores de preparación del suelo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trazado de la plantación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Establecimiento de coberturas vegetales',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Siembra de plantas en sitio definitivo',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aceite de palma',
      significado:
        'Aceite vegetal extraído del mesocarpio del fruto de la palma de aceite, utilizado en la industria alimentaria, cosmética, energética e industrial.',
    },
    {
      termino: 'Alistamiento en vivero',
      significado:
        'Conjunto de actividades previas al traslado de las plantas al sitio definitivo, que incluye riego, rotación de bolsas y marcación de las plántulas para facilitar el trasplante.',
    },
    {
      termino: 'Altura efectiva del suelo',
      significado:
        'Profundidad útil del suelo que permite el desarrollo adecuado del sistema radicular de la palma de aceite.',
    },
    {
      termino: 'Coberturas vegetales',
      significado:
        'Plantas asociadas al cultivo de palma que protegen el suelo contra la erosión, conservan la humedad y mejoran la fertilidad.',
    },
    {
      termino: 'Crecimiento y desarrollo de la semilla',
      significado:
        'Proceso biológico que inicia con la germinación e incluye la formación de la radícula, plúmula y raíces adventicias hasta el establecimiento de la plántula.',
    },
    {
      termino: 'Cuesco (endocarpio)',
      significado:
        'Estructura dura que protege la almendra y el embrión de la semilla de palma de aceite.',
    },
    {
      termino: 'Diseño de la planeación',
      significado:
        'Proceso de organización y distribución espacial del cultivo que define vías, drenajes, lotes, distancias de siembra y manejo a largo plazo de la plantación.',
    },
    {
      termino: '<em>Elaeis guineensis</em>',
      significado:
        'Nombre científico de la palma de aceite, especie oleaginosa de mayor rendimiento por hectárea a nivel mundial.',
    },
    {
      termino: 'Endospermo',
      significado:
        'Tejido interno de la semilla que almacena nutrientes y alimenta al embrión durante la germinación.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación de nutrientes orgánicos o minerales al suelo o sustrato para suplir las necesidades nutricionales de la palma en vivero o campo.',
    },
    {
      termino: 'Germinación',
      significado:
        'Proceso mediante el cual la semilla desarrolla la radícula y la plúmula, dando origen a una nueva planta.',
    },
    {
      termino: 'Inflorescencia',
      significado:
        'Estructura reproductiva de la palma de aceite que contiene flores masculinas o femeninas y que, tras la fecundación, da origen al racimo de frutos.',
    },
    {
      termino: 'Labranza',
      significado:
        'Conjunto de labores mecánicas realizadas sobre el suelo para mejorar su estructura, aireación y drenaje antes de la siembra.',
    },
    {
      termino: 'Material vegetal',
      significado:
        'Semillas o plántulas utilizadas para el establecimiento del cultivo, seleccionadas por su calidad genética, física y sanitaria.',
    },
    {
      termino: 'Mesocarpio',
      significado:
        'Pulpa fibrosa del fruto de la palma de aceite donde se concentra el aceite comercial.',
    },
    {
      termino: '<em>Mulch</em>',
      significado:
        'Cobertura orgánica utilizada sobre el suelo o las bolsas del vivero para conservar la humedad, reducir la erosión y controlar malezas.',
    },
    {
      termino: 'Plántula',
      significado:
        'Planta joven que se desarrolla a partir de una semilla germinada durante las etapas de previvero y vivero.',
    },
    {
      termino: 'Plúmula',
      significado:
        'Estructura embrionaria de la semilla que da origen a las hojas de la planta.',
    },
    {
      termino: 'Previvero',
      significado:
        'Etapa inicial del cultivo en la que las plántulas se desarrollan en bolsas pequeñas y alta densidad, bajo sombra y condiciones controladas.',
    },
    {
      termino: 'Radícula',
      significado:
        'Parte embrionaria de la semilla que origina la raíz principal de la planta.',
    },
    {
      termino: 'Riego',
      significado:
        'Suministro controlado de agua para satisfacer las necesidades hídricas de la palma durante las etapas de vivero y establecimiento en campo.',
    },
    {
      termino: 'Selección en vivero',
      significado:
        'Proceso periódico de evaluación y descarte de plántulas que presentan anormalidades, baja calidad o problemas sanitarios.',
    },
    {
      termino: 'Semillero',
      significado:
        'Área destinada a la siembra y manejo inicial de semillas germinadas antes de su traslado al previvero o vivero.',
    },
    {
      termino: 'Siembra en sitio definitivo',
      significado:
        'Traslado y establecimiento de las plantas provenientes del vivero en el terreno de producción, bajo condiciones adecuadas de suelo y clima.',
    },
    {
      termino: 'Sistema de siembra en tresbolillo',
      significado:
        'Método de distribución de plantas en forma triangular que optimiza el uso del espacio, la luz solar y el desarrollo radicular.',
    },
    {
      termino: 'Sustrato',
      significado:
        'Material que llena las bolsas del vivero y permite el anclaje, nutrición y desarrollo de las raíces de la plántula.',
    },
    {
      termino: 'Trazado de la plantación',
      significado:
        'Proceso de marcación del terreno para definir la ubicación exacta de cada planta según el sistema de siembra y las distancias establecidas.',
    },
    {
      termino: 'Variedades de palma de aceite',
      significado:
        'Tipos genéticos de la especie <em>Elaeis guineensis</em> (<em>Dura</em>, <em>Pisífera</em> y <em>Tenera</em>) que se diferencian por el grosor del cuesco, la cantidad de pulpa y el rendimiento en aceite.',
    },
    {
      termino: 'Vivero',
      significado:
        'Etapa posterior al previvero donde las plántulas continúan su desarrollo en bolsas grandes, sin sombra y a baja densidad, hasta su traslado al campo.',
    },

    {
      termino: 'Siembra en sitio definitivo',
      significado:
        'Traslado y establecimiento de las plantas provenientes del vivero en el terreno de producción, bajo condiciones adecuadas de suelo y clima.',
    },
    {
      termino: 'Sistema de siembra en tresbolillo',
      significado:
        'Método de distribución de plantas en forma triangular que optimiza el uso del espacio, la luz solar y el desarrollo radicular.',
    },
    {
      termino: 'Sustrato',
      significado:
        'Material que llena las bolsas del vivero y permite el anclaje, nutrición y desarrollo de las raíces de la plántula.',
    },
    {
      termino: 'Trazado de la plantación',
      significado:
        'Proceso de marcación del terreno para definir la ubicación exacta de cada planta según el sistema de siembra y las distancias establecidas.',
    },
    {
      termino: 'Variedades de palma de aceite',
      significado:
        'Tipos genéticos de la especie <em>Elaeis guineensis</em> (<em>Dura</em>, <em>Pisífera</em> y <em>Tenera</em>) que se diferencian por el grosor del cuesco, la cantidad de pulpa y el rendimiento en aceite.',
    },
    {
      termino: 'Vivero',
      significado:
        'Etapa posterior al previvero donde las plántulas continúan su desarrollo en bolsas grandes, sin sombra y a baja densidad, hasta su traslado al campo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bustillo, A. (2014). <em>Manejo de insectos plagas de la palma de aceite, con énfasis en control biológico y sus relaciones con el cambio climático</em>. Bogotá.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107659/Guia%20enfermedades%20y%20plagas%2022.pdf?sequence=11',
    },
    {
      referencia:
        'CENIPALMA, SENA, SAC y FONADE. (2002). <em>Selección y descarte de plantas anormales de palma de aceite en viveros</em>. Bogotá: Editorial Ápice.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/84193',
    },
    {
      referencia:
        'CIRAD. (2008). <em>Germinated oil palm seed: Recommendations for prenursery and nursery management</em> (edición en inglés). CIRAD. Montferrier-sur-Lez, Francia.',
      link:
        'https://www.palmelit.com/en/content/download/4353/32854/version/4/file/Booklet-of-recommandations-for-prenursery-and-nursery-management-oil-palm-seeds-CIRAD.pdf',
    },
    {
      referencia:
        'Federación Nacional de Cultivadores de Palma de Aceite (Fedepalma). (2016). <em>Guía de bolsillo para el reconocimiento y manejo de las principales enfermedades e insectos plaga en el cultivo de la palma de aceite</em>. Bogotá.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107659/Guia%20enfermedades%20y%20plagas%2022.pdf?sequence=11',
    },
    {
      referencia:
        'Federación Nacional de Cultivadores de Palma de Aceite (Fedepalma). (s. f.). <em>La agroindustria de la palma de aceite en Colombia</em>.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/109788/Agroindustria%20de%20la%20palma%20de%20aceite%20en%20Colombia.pdf',
    },
    {
      referencia:
        'Galeano Balaguera, P. (2025, 28 de enero). <em>Colombia alcanzó una producción de 1,7 millones de toneladas de aceite de palma en 2024</em>. Portafolio.',
      link:
        'https://www.portafolio.co/negocios/industrias/colombia-alcanzo-una-produccion-de-1-7-millones-de-toneladas-de-aceite-de-palma-en-2024-622610',
    },
    {
      referencia:
        'Grupo Jaremar. (2016). <em>Manual de Buenas Prácticas Agrícolas para la Producción Sostenible de la Palma Aceitera por Pequeños Productores</em>. Honduras.',
      link:
        'https://fhia.org.hn/wp-content/uploads/manual_buenas_practicas.pdf',
    },
    {
      referencia:
        'Instituto Agropecuario Colombiano ICA. (2011). <em>Manejo del picudo - Rhynchophorus palmarum L. (Coleoptera: Curculionidae)</em>. Bogotá.',
      link:
        'https://www.ica.gov.co/getattachment/19e016c0-0d14-4412-af12-03eecfe398f2/Manejo-del-picudo--Rhynchophorus-palmarum-L--%28Cole.aspx',
    },
    {
      referencia:
        'Instituto Agropecuario Colombiano ICA. (2014). <em>Resolución 4170 de 2014</em>.',
      link: 'https://faolex.fao.org/docs/pdf/col144688.pdf',
    },
    {
      referencia:
        'Instituto Nacional de Investigaciones Agropecuarias – INIAP. (2017). <em>Guía para facilitar el aprendizaje en el manejo integrado del cultivo de Palma aceitera (Elaeis guineensis, Jacq)</em>. Santo Domingo, Ecuador.',
      link: 'https://repositorio.iniap.gob.ec/handle/41000/4774',
    },
    {
      referencia:
        'Instituto Nacional de Investigaciones Forestales, Agrícolas y Pecuarias - INIFAB. (2011). <em>Producción de planta en Paquete Tecnológico Palma de Aceite (Elaeis guinnensis Jacq.)</em>. México.',
      link:
        'https://www.gob.mx/inifap/prensa/inifap-desarrolla-tecnicas-para-producir-palma-de-aceite',
    },
    {
      referencia:
        'Narváez, J., Chilito, L., & Bastidas, S. (1996). <em>Determinación de la madurez óptima de cosecha para la palma de aceite (Elaeis guineensis Jacq.) en la región de Tumaco, Nariño</em>.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/143664',
    },
    {
      referencia:
        'Ortíz, R. & Fernández, O. (2000). <em>Cultivo de la palma aceitera</em>. San José: Editorial Universidad Estatal a Distancia.',
      link:
        'https://books.google.com.co/books?id=xZkO8yiPgf0C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Prada, F., & Romero, M. (2012). <em>Muestreo y análisis de racimos en el cultivo de palma de aceite. Tecnologías para la agricultura de la palma de aceite: guía para facilitadores</em>. Bogotá, Colombia.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/107697',
    },
    {
      referencia:
        'Rodríguez T., D. K. (2025, junio 17). <em>Producción de aceite de palma en Colombia crece 10% entre enero y mayo de 2025</em>. Portafolio.',
      link:
        'https://www.portafolio.co/economia/agro/produccion-de-aceite-de-palma-en-colombia-crece-10-a-mayo-de-2025-633174',
    },
    {
      referencia:
        'TECHNOSERVER. (2009). <em>Comparativo técnico de rendimientos de cultivos oleaginosos</em>. Technoserver.',
      link:
        'https://bibliotecadelbotanico.org/producto/manual-tecnico-de-palma-africana',
    },
    {
      referencia:
        'TECHNOSERVER Soluciones empresariales para la pobreza rural. (2009). <em>Manual técnico de palma africana</em>.',
      link: 'https://studylib.es/doc/5470137/manual-tecnico-de-palma-africana',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
