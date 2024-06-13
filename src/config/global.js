export default {
  global: {
    componenteFormativo:
      'Diagnóstico del agroecosistema según metodología implementada.',
    descripcionCurso:
      'En este componente podrá reconocer el marco legal de la agroecología y la importancia de realizar el diagnóstico del estado inicial de los recursos bióticos y abióticos presentes en la unidad productiva, como medio que permita la correcta planificación y manejo de los recursos inmersos en esta y que a futuro se puedan disminuir los riesgos de tener bajos índices de producción y eficiencia asociados al proceso productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas públicas en agroecología',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Cartografía base en agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Cálculo de área',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas de medición',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Georreferenciación, tipos y medición de recursos',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inventario del agroecosistema',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis de riesgos en agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de riesgo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Clasificación de riesgos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Seguimiento y evaluación de riesgos',
            hash: 't_4_3',
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
      tema: 'Cartografía base en agroecología',
      referencia:
        'Cleves J. Toro, J., Martínez, L., y León, S. (2017). La Estructura Agroecológica Principal (EAP): novedosa herramienta para la planeación del uso de la tierra en agroecosistemas. Revista Colombiana de Ciencias Hortícolas, 11(2), 441-449. ',
      tipo: 'Artículo',
      link:
        'https://revistas.uptc.edu.co/index.php/ciencias_horticolas/article/view/7350/pdf',
    },
    {
      tema: 'Cartografía base en agroecología',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. [Ecosistema de Recursos Educativos Digitales SENA]. (2022, 26 de marzo). Fundamentos de SIG aplicados en Sistemas Forestales y/o Agroecológicos: introducción.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=e_5JAbz_nIo&list=PLkc5n6npRWkh8vwezpUX4-VLODskH_M67&index=7&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
    {
      tema: 'Técnicas de medición',
      referencia:
        'TvAgro. [TvAgro]. (2020, 10 de septiembre). Importancia de la Topografía en las Labores del Campo - TvAgro por Juan Gonzalo Ángel Restrepo.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ucVTKKXX8VI',
    },
    {
      tema: 'Técnicas de medición',
      referencia:
        'CEPAL (2015). Gestión Integral de Riesgos y Seguros Agropecuarios en Centroamérica y la República Dominicana: Situación actual y líneas de acción potenciales.',
      tipo: 'Artículo',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/27170/1/M20130038_es.pdf',
    },
    {
      tema: 'Análisis de riesgos en agroecología',
      referencia:
        'Unidad de Planificación Rural Agropecuaria - UPRA. (2021). Podcast: la cultura de la gestión de riesgos y el aseguramiento. Upra Planificamos el campo',
      tipo: 'Podcasts',
      link: 'https://open.spotify.com/episode/3U5Xld67yzy10Idx0O9xpU',
    },
    {
      tema: 'Análisis de riesgos en agroecología',
      referencia:
        'Platform for Agricultural Risk Management - PARM. (2019). Agricultural Risk Management: a new way of thinking - PARM. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=o80PfIGYVvI&t=5s&ab_channel=PlatformforAgriculturalRiskManagementPARM',
    },
  ],
  glosario: [
    {
      termino: 'Cartografía',
      significado:
        'Es la ciencia encargada de representar la tierra sobre un plano o mapa, que trata de las normas y procedimientos dirigidos al estudio y confección de los mapas, cartas y planos, siendo la más científica de las artes y sin dudas la más artística de las ciencias.',
    },
    {
      termino: 'Gratículas',
      significado:
        'Malla regular con el sistema de coordenadas que se superpone sobre un mapa',
    },
    {
      termino: 'Sistema agroalimentario',
      significado:
        'Es la suma de los diversos elementos, actividades y actores que, mediante sus interrelaciones, hacen posible la producción, transformación, distribución y consumo de alimentos.',
    },
    {
      termino: 'Sistemas de posicionamiento global (GPS)',
      significado:
        'Es la herramienta a través de la cual establece la ubicación, ayuda a tomar decisiones correctas para la determinación de coordenadas, medición de áreas y distancias. ',
    },
    {
      termino: 'Sistema de producción',
      significado:
        'Conjunto particular de actividades (sistema de manejo), desarrolladas para producir una serie definida de productos o beneficios.',
    },
    {
      termino: 'Zonificación agroecológica',
      significado:
        'Se refiere a la división de la superficie de tierra en unidades más pequeñas, que tienen características similares relacionadas con la aptitud de tierras, la producción potencial y el impacto ambiental.',
    },
  ],
  referencias: [
    {
      referencia:
        'Le Coq, J., Patrouilleau, M. M., Sabourin, E. & Niederle, P. A. (2018). Políticas públicas que promueven la agroecología y producción orgánica en América Latina. Porto Alegre, Brasil: III Conferência Internacional de Agricultura e Alimentação em uma Sociedade Urbanizada. ',
      link:
        'https://hal.archives-ouvertes.fr/hal-02794344/document#:~:text=La%20agroecolog%C3%ADa%20pol%C3%ADtica%20sostenida%20por,soberan%C3%ADa%20alimentaria%20a%20nivel%20territorial',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO. (1997). Zonificación agro-ecológica. Capítulo 4. Herramientas informáticas y sistemas de información geográfica. Roma.',
      link:
        'https://www.fao.org/3/w2962s/w2962s0j.htm#cap%C3%ADtulo%204.%20herramientas%20inform%C3%A1ticas%20y%20sistemas%20de%20informaci&oacu',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO. (2013). Guía técnica Medidas para la gestión del riesgo agropecuario del Beni. (R. M. Noda Videa, & E. H. Tejada Vélez, Edits.) Bolivia: Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO.',
      link: 'https://www.fao.org/3/as965s/as965s.pdf',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y Agricultura - FAO. (2021). Experiencias de transición Agroecológica en Colombia. Sembrando Capacidades Cooperación Brasil - Colombia - FAO. Colombia.',
      link:
        'http://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/11_Experiencias-de-transicion-agroecologica-en-Colombia_compressed.pdf',
    },
    {
      referencia:
        'Resolución 464 de 2017 [Ministerio de Agricultura y Desarrollo rural]. Por medio de la cual se adoptan los Lineamientos Estratégicos de Política Pública para la Agricultura Campesina, Familiar y Comunitaria.',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No%20000464%20de%202017.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ingrid Natalia Lozano Muñoz',
          cargo: 'Experta temática',
          centro: 'Centro Agropecuario La Granja - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor metodológico ',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Revisión de guion audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Validación Ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'John Jairo Arciniegas González',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Erika Viviana Sandoval Roja',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Validación audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Liborio De Jesús Castañeda Valencia',
          cargo: 'Desarrollador full-stack junior',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yenny Patricia Ulloa Villamizar',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validación de recursos digitales',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
