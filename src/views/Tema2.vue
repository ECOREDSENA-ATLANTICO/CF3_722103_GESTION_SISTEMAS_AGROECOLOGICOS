<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Cartografía base en agroecología
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img1.png', alt='') 
      .col-lg-8(data-aos="fade-right")
        .cajon.color-primario.p-4.ps-5.color2.mb-3
          p.m-0 <b>La cartografía es una de las herramientas que permite realizar la caracterización del territorio y de la unidad productiva</b>, con la finalidad de generar un modelo de evaluación cuantitativa y cualitativa de la aptitud del territorio por medio de una superposición de variables, que son analizadas a través de <em>software</em> abierto o licenciado que aplica sistemas de información geográfica (SIG).
      
        p Los SIG son herramientas que permiten la modelación, administración, visualización de las características del territorio y que generan salidas gráficas que son necesarias para poder planificar y diseñar el territorio, en este caso el sistema agroalimentario. El SIG es el instrumento fundamental para caracterizar el territorio y tomar decisiones en torno a su gestión.
    p.mb-5 <b>Para la generación del modelo de aptitud del territorio, la planeación y diseño agroecológico del sistema agroalimentario, es necesario realizar:</b>          
    .row.justify-content-evenly.align-items-lg-stretch.mb-5
      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.hoverScale2.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema2/img2.png', alt='Texto que describa la imagen')
          p.px-3 El análisis de los aspectos ambientales (servicios ecosistémicos), económicos y sociales del territorio en el cual se establecerá el sistema agroalimentario.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.hoverScale2.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema2/img3.png', alt='Texto que describa la imagen')
          p.px-3 La revisión del censo agropecuario para poder determinar los productos más representativos.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.hoverScale2.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema2/img4.png', alt='Texto que describa la imagen')
          p.px-3 El análisis demográfico con el fin de identificar la oferta laboral y el tipo de población que habita en el territorio a analizar. 

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.hoverScale2.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
          p.px-3 Revisar el Sistema para la Planificación Rural Agropecuaria (SIPRA) de la Unidad de Planificación Rural Agropecuaria (UPRA) que es la entidad en Colombia que se encarga de gestionar la información agropecuaria en el país y la planificación en la gestión del territorio para usos agropecuarios.
    p.mb-5 Esta revisión bibliográfica, es importante porque permite la identificación de las características óptimas y no óptimas para el sistema agroalimentario a planificar y diseñar, siendo esta la base para la selección de las temáticas a incluir en el modelo de aptitud del terreno que representen las características de este, temperatura, precipitación, inclinación del territorio, características del suelo más favorables para el sistema agroalimentario. Dentro de las temáticas que pueden ser usadas para este análisis del territorio se pueden ver en la siguiente tabla: 
    .row
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2]. Temáticas técnicas y legales para la generación de un modelo de aptitud del territorio
    
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-md-4.mb-3.mb-lg-0.bgt01
        .row
          .col-12.p-3.bgtitulo
            h4.m-0.text-center Temáticas 
          .col-12.px-0
            img(src="@/assets/curso/tema2/img6.png"  alt='Texto que describa la imagen')
          .col-12.p-3.bgcontenido(style="height: 408.8px")
            h4 Técnicas
            ul.mt-3.lista-ul--color
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | <b>Físico:</b>
              p.m-0.ms-4 Suelos.
              p.m-0.ms-4 Uso propuesto del suelo.
              p.m-0.ms-4 Conflicto de uso del suelo.
              p.m-0.ms-4 Uso principal del suelo.
              p.m-0.ms-4 Zonificación climática.
              p.m-0.ms-4 Precipitación.
              p.mb-3.ms-4 Temperatura.
              
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | <b>Socioeconómico:</b>
              p.m-0.ms-4 Clasificación de predios por área.
              p.m-0.ms-4 Avalúos del territorio. 

      .col-md-4.mb-3.mb-lg-0.bgt02
        .row
          .col-12.p-3.bgtitulo
            h4.m-0.text-center Componentes
          .col-12.px-0
            img(src="@/assets/curso/tema2/img7.png"  alt='Texto que describa la imagen')
          .col-12.p-3.bgcontenido(style="height: 408.8px")
            h4 Legales
            ul.mt-3.lista-ul--color
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Páramos.
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Reserva de la sociedad civil.
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Reserva forestal protectora nacional y regional.
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Frontera agrícola.
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Proyectos ANLA.
              li.m-3
                <i class="fas fa-cog" style="color:#FFA686"></i>
                | Zonificación para plantaciones forestales con fines comerciales.

    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Por medio de un álgebra de mapas, que se realiza en un SIG, se crea el modelo de aptitud del territorio, aplicando la metodología representada en la siguiente figura, la cual consiste en la calificación de las temáticas seleccionadas, de acuerdo con la guía técnica de expertos agrónomos y agroecológicos, para luego realizar una superposición de capas permitiendo la tabulación de las diferentes calificaciones. Finalmente, como resultado del modelo, se obtiene un mapa de aptitud del territorio para el sistema agroalimentario. Veamos la figura:  
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img17.svg', alt='')
    
    .bg1.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
            h5 Figura 4.
            span Metodología para la creación del modelo de aptitud del territorio
        .col-lg-10.mb-5
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img8.svg', alt='Se relaciona la creación del modelo de aptitud del territorio. El modelo de aptitud del territorio inicia con la elección de temáticas, la calificación de las variables, la superposición de capas para dar como resultado el mapa de áreas aptas; ya sea aptitud alta, aptitud media, aptitud baja y zonas de exclusión. Elección de temáticas más calificación de las variables más superposición de capas es igual a mapa de áreas aptas.')
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p <b>Se debe tener presente que los mapas de las temáticas técnicas y legales para la generación de un modelo de aptitud del territorio deben ser analizadas bajo el mismo sistema de coordenadas y escalas.</b>
        p El desarrollo de modelos de aptitud del territorio para el avance de actividades agroecológicas es uno de los elementos que compone la zonificación agroecológica, según la FAO, una zonificación agroecológica permiten la evaluación de la aptitud y productividad potencial, así como los recursos presentes en el territorio, y esta información suministra las bases para poder evaluar la degradación del suelo y de la capacidad de sostenimiento de la población, así como planificar y diseñar los modelos de producción ganadera y de optimización de usos de suelo en el territorio. La zonificación agroecológica presenta elementos necesarios para su aplicación, dentro de los cuales se encuentran: 
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure.d-flex.justify-content-center
          img.img-t(src='@/assets/curso/tema2/img9.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img10.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p Inventario de recursos del territorio.

      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img11.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p Inventario de tipos de utilización del territorio y requerimientos de la plantación.
      .col-lg-3.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img12.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p.m-0 Evaluación de la aptitud del territorio incluyendo el cálculo de la cosecha máxima posible y la comparación entre limitaciones y requerimientos.
    p.mb-5 <b>La zonificación agroecológica se fundamenta en el siguiente marco conceptual:</b>

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10.mb-3
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
          h5 Figura 5.
          span Marco conceptual de la zonificación agroecológica
      .col-lg-10.m-0
        img(src="@/assets/curso/tema2/img37.svg" alt='Aplicaciones básicas: Entradas  Inventario/base de datos.  Recursos de tierras.  Tipos de uso de tierras. Procesamiento de datos  Modelos Resultados  Inventario de recursos de tierras.  Mapas de zonas agro-ecológicas.  Aptitud de tierras: clases de aptitud, rendimientos potenciales Aplicaciones avanzadas: Productividad potencial de tierras. a. Estimación de áreas cultivables. b. Capacidad de sostenimiento de la población. c. Planificación de usos de tierras. d. Evaluación de riesgo de degradación de tierras. e. Evaluación de forraje para ganadería. Gestión de tierras. a. Planificación de la investigación agraria. b. Transferencia de tecnología agrícola. c. Recomendaciones sobre inputs agrícolas. d. Análisis y desarrollo de cisternas de explotación de fincas. e. Evaluación del impacto ambiental. f. Control del uso de los recursos de tierras. g. Evaluación del impacto de cambio climático.').mb-3
        figcaption Nota. FAO. (1997). Zonificación agro-ecológica. Guía general. 
    .row.justify-content-center
      .col-lg-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Enlace <em>web</em>
                  p.text-small Para ampliar la información relacionada con la zonificación agroecológica diríjase al siguiente enlace <em>web</em> de la FAO. 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.fao.org/3/w2962s/w2962s00.htm#Contents" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1. Cálculo de área
    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p La caracterización precisa de la unidad agroecológica es la base fundamental para realizar el diagnóstico del estado actual del agroecosistema y con ello poder identificar las características específicas de este. Asimismo, este diagnóstico es esencial para la planificación y diseño del sistema agroalimentario con el fin de disminuir los riesgos de tener bajos índices de producción y eficiencia asociados al proceso productivo.
        p <b>La medición de la unidad agroecológica se puede realizar a través de la aplicación de metodologías topográficas como los levantamientos topográficos; en la siguiente infografía se muestra qué se logra:</b>
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img15.svg', alt='1. Realizar mediciones de área. 2. Localizar y marcar los límites del agroecosistema. 3. Obtener información de la elevación. 4. Distancias y curvas de nivel que permitan proyección de los sistemas de riego y drenaje. 5. La orientación del agua para el sistema agroalimentario. 6. La orientación y replanteo de las plantaciones y la conservación del suelo, entre otras actividades.')
    .bg1
      .row.mb-5.py-5
        .col-12.col-lg-9
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img16.svg', alt='')
        .col-12.col-lg-3
          .tarjeta-avatar
            img(src='@/assets/curso/tema2/img36.svg' alt='AvatarTop')
            .tarjeta.color2
              .p-4
                p.mb-0 Es así como la topografía en conjunto con otras tecnologías como los drones y los sistemas de posicionamiento global (GPS) han evolucionado con el fin de proporcionar nuevas herramientas, que permitan medir y georreferenciar con mayor precisión y rapidez las unidades agroecológicas.

    p.mb-5 Para realizar el levantamiento topográfico es necesario considerar las áreas como superficies horizontales y no las áreas reales de la superficie del terreno. Sin embargo, en algunas ocasiones es necesario calcular el área de una sección transversal del terreno, como se muestra en la siguiente figura:  
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
          h5 Figura 6.
          span Área horizontal y corte transversal del área
      .col-lg-10.mb-5
        figure.mb-3
          img.img-t.m-auto(src='@/assets/curso/tema2/img18.svg', alt='Se muestra la grafica de un área horizontal y de un corte transversal.')
        figcaption Nota. FAO (s.f.). 10. Medición de áreas
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Las áreas se pueden calcular de forma directa a través de la medición en campo y de forma indirecta a partir de un plano o mapa, usando una escala determinada. Cuando se realiza la medición de áreas de forma directa es necesario realizar el levantamiento topográfico con el fin de determinar las distancias y ángulos. 
        p Se pueden encontrar diversos métodos para medir áreas, dentro de los cuales se encuentran métodos gráficos donde se realizan comparaciones entre planos y/o mapas, un patrón de área conocido y un método geométrico a través del uso de fórmulas matemáticas correspondientes para calcular el área de figuras geométricas regulares o áreas delimitadas por curvas irregulares.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img19.svg', alt='')
    .row.justify-content-center
      .col-lg-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Enlace <em>web</em>
                  p.text-small Para ampliar la información relacionada con el levantamiento topográfico diríjase al siguiente enlace <em>web</em> de la FAO. 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6707s/x6707s07.htm" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.2. Técnicas de medición
    p.mb-5 Cabe resaltar que cada una de estas técnicas puede presentar variaciones en términos de precisión. Dentro de las técnicas o métodos más utilizados para la medición de áreas se encuentran:
    .row.mb-4
      .col-auto.py-2.px-3.bg-c1
        h4.mb-0.text-black Método de cinta
 
    p.mb-5 La cinta métrica es una de las herramientas más utilizadas en la topografía para la medición de distancias entre puntos. Para realizar la medición con cinta se cuenta con dos métodos, los cuales se pueden visualizar en la siguiente representación:
    .row.justify-content-center.mb-3(data-aos="zoom-in")
      .col-12.col-lg-5.mb-5.mb-lg-0.bgt03
        .row.m-1.mb-5
          .col-12.p-3.bgtitulo(style="height: 190px")
            img.imgtop3(src='@/assets/curso/tema2/img20.svg', style="width: 130px")
            .bgsly2.p-2.mt-5.mb-4.d-flex.justify-content-center
              h4.text-center.mb-0 Medición horizontal 
          .col-12.p-3.bgcontenido(style="height: 245px")
            p.ms-4 La cinta debe sostenerse de forma horizontal y se proyecta con una plomada a la graduación requerida en el terreno. 
            p.ms-4 El uso de la plomada no es recomendable cuando la altura es mayor a la altura del cuello, para este caso es necesario que la longitud medida sea menor a la longitud total de la cinta.          
      .col-12.col-lg-5.mb-3.mb-lg-0.bgt04
        .row.m-1
          .col-12.bgtitulo(style="height: 190px")
            img.imgtop3(src='@/assets/curso/tema2/img21.svg', style="width: 130px")
            .bgsly2.p-2.mt-5.mb-4.d-flex.justify-content-center
              h4.text-center.mb-0 Medición en pendientes 
          .col-12.p-3.bgcontenido(style="height: 255px")
            p.ms-4 La cinta debe ser puesta sobre el terreno, respetando la pendiente. Para medir el grado de la pendiente se debe usar un nivel de mano o un clinómetro. La distancia horizontal es calculada a partir de relaciones trigonométricas. 
            p.ms-4 Cuando el grado de la pendiente es mayor al 5 % es necesario que la longitud medida sea menor a la longitud total de la cinta. 
    p.mb-5 <b>Errores de la medición a través de método de cinta</b>

    .row.mb-5
      .col-12.col-md-6.mb-3.col-lg-3
        .bgr.h-100.p-4.d-flex.align-items-center
          .row
            .col-auto.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='Texto que describa la imagen')
            .col-7.d-flex.align-items-center
              p.mb-0 No leer o registrar los números de la cinta métrica correctamente.
      .col-12.col-md-6.mb-3.col-lg-3
        .bgr.h-100.p-4.d-flex.align-items-center
          .row
            .col-auto.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='Texto que describa la imagen')
            .col-7.d-flex.align-items-center
              p.mb-0 No tensar bien la cinta métrica.
      .col-12.col-md-6.mb-3.col-lg-3
        .bgr.h-100.p-4.d-flex.align-items-center
          .row
            .col-auto.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='Texto que describa la imagen')
            .col-7.d-flex.align-items-center
              p.mb-0 No alinear la cinta métrica correctamente.
      .col-12.col-md-6.mb-3.col-lg-3
        .bgr.h-100.p-4.d-flex.align-items-center
          .row
            .col-auto.d-flex.align-items-center
              figure
                img(src='@/assets/curso/tema2/img22.svg', alt='Texto que describa la imagen')
            .col-7.d-flex.align-items-center
              p.mb-0 No ubicar el cero de la cinta métrica correctamente.
    
    .row.mb-4
      .col-auto.py-2.px-3.bg-c1
        h4.mb-0.text-black Estimación y mapeo de cinta y brújula:
    .row.mb-4
      .col-12
        p.mb-5 Para realizar la medición con cinta se cuenta con dos métodos, los cuales son:
    TabsB.color-acento-contenido.mb-5.color_img-tab
      .py-4.py-md-5(titulo="Método de triangulación y fórmulas de Herón" :icono="require('@/assets/curso/tema2/img23.svg')")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            h4 Método de triangulación y fórmulas de Herón:
            p Este es uno de los métodos más usados en la topografía para la medición de áreas de una unidad productiva, la cual consiste en trazar un número aleatorio de triángulos en el terreno, que se aproximen a la forma de la unidad productiva a la cual se le desea medir su área. Para estimar el área total de la unidad productiva es necesario sumar las áreas de cada uno de los triángulos trazados y para poder determinar el área de cada uno de estos, deben medir las longitudes de cada uno de los lados del triángulo y aplicar las fórmulas mostradas a continuación:
          .bg3.p-5.mb-5
            .row.justify-content-center
              .col-lg-12
                p.mb-4 Fórmulas para determinar el área de una unidad productiva según el método de triangulación y fórmulas de Herón.
              .col-lg-7.mb-5
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema2/img24.svg', alt='')
              .col-lg-12
                p donde, <b>a, b, c = longitud de los lados</b> o catetos del triángulo, y <b>s = semiperímetro</b>.
                p 
              .col-md-6.mb-5
                figure
                  img(src='@/assets/curso/tema2/img25.svg', alt='Texto que describa la imagen')
              p <b>a, b, c = longitud de los lados o catetos del triángulo, y s = semiperímetro</b> 
        .col-lg12 
          p.mb-5 Asimismo, con ayuda de una brújula se puede medir el ángulo formado por uno de los lados de cualquier triángulo con respecto al Norte, el rumbo de cada una de las líneas del perímetro de unidad productiva se puede estimar usando los ángulos internos de cada triángulo. 
        .row.justify-content-center
          .col-lg-12
            .tarjeta.color-primario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema2/img26.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Video 
                      p.text-small En el siguiente video de la Universidad de Antioquia se presenta el cálculo de áreas por el método de Herón  
                    .col-sm-auto
                      a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=oxHKlG0CPLc&ab_channel=Udearroba" target="_blank").mb-0                    
                        span Enlace
                        i.fas.fa-link    
      .py-4.py-md-5(titulo="Método por coordenadas" :icono="require('@/assets/curso/tema2/img23.svg')")
        .row.justify-content-center
          .col-md-12.mb-4.mb-md-0
            h4 Método por coordenadas
            p Este método es basado en principios geométricos y trigonométricos, donde para calcular el área de la unidad productiva se deben definir un grupo de puntos o coordenadas X, Y conocidas y su estimación se realiza a través del cálculo de la mitad de la diferencia entre las sumas de los productos en cruz X-Y y Y-X. La fórmula que representa este método se muestra a continuación: 
          .bg3.p-5.mb-5
            .row.justify-content-center
              .col-lg-7
                figure
                  img.img-t.m-auto(src='@/assets/curso/tema2/img27.svg', alt='La formula que representa este método se muestra a continuación.')
        .row.justify-content-center
          .col-lg-12
            .tarjeta.color-primario.p-3.mb-5
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-1
                  img(src="@/assets/curso/tema2/img26.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Video 
                      p.text-small En el siguiente video de la Universidad de Antioquia se presenta el cálculo de áreas por el método de las coordenadas - Topografía  
                    .col-sm-auto
                      a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=9DtRsZTW1As&ab_channel=Udearroba" target="_blank").mb-0                    
                        span Enlace
                        i.fas.fa-link  
    .row.mb-4
      .col-auto.py-2.px-3.bg-c1
        h4.mb-0.text-black Método de doble distancia meridiana:
    .row.mb-4
      .col-12
        p.mb-5 Este método es basado en principios geométricos y trigonométricos, donde para calcular el área de la unidad productiva se deben definir un grupo de puntos o coordenadas con proyecciones x, y conocidas y su estimación se realiza a través de la aplicación de las siguientes reglas:  
   
    .row.justify-content-center.mb-5
      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido1.bord.p-4.h-100
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span.text-black 01.
              | La doble distancia meridiana del primer lado es igual a la proyección en x de ese lado.
      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido1.bord.p-4.h-100
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span.text-black 02.
              | La doble distancia meridiana de cualquier otro lado es igual a la doble distancia meridiana del lado anterior, más la proyección en x del lado anterior, más la proyección de x del mismo lado.
      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta.color-acento-contenido1.bord.p-4.h-100
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span.text-black 03.
              | La doble distancia meridiana del último lado es igual a la proyección en x del mismo lado, pero con signo contrario.
    .bg7.pt-5.mb-4
      .row.justify-content-end.align-items-center
        .col-lg-7.align-self-center.mb-4.mb-lg-0
          p.ps-5 La siguiente fórmula que representa este método se muestra a continuación:
          img.ps-5.img-t(src='@/assets/curso/tema2/img30.svg', alt='').mx-aauto 
        .col-lg-5.mb-4(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.img-t(src='@/assets/curso/tema2/img29.svg', alt='') 
    .row.mb-5
      .col-auto.py-2.px-3.bg-c1
        h4.mb-0.text-black Método de medición de área con teodolito:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img31.png', alt='') 
      .col-lg-8(data-aos="fade-right")
        p.m-0 Un teodolito es un instrumento utilizado comúnmente por los constructores e ingenieros para medir ángulos precisos, lo que es necesario para grandes proyectos de construcción. Un teodolito óptico moderno normalmente consiste en un pequeño telescopio que está conectado a dos mecanismos de medición de ángulos, uno para la medición de ángulos horizontales y uno para la medición de ángulos verticales. Se asienta sobre una base giratoria con un mecanismo de nivelación en un trípode. Una vez que el teodolito está configurado, el telescopio se gira para detectar el punto deseado y el ángulo desde el punto en que el teodolito se sitúa al punto que se ve en el telescopio y puede ser leído a través del ocular del telescopio.
    .row.justify-content-center
      .col-lg-6
        .tarjeta.color-primario.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema2/img26.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video 
                  p.text-small En el siguiente video de la Universidad de Antioquia se presenta la triangulación con teodolito y cinta: 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=ktPlB5IMFCM" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link  
      .col-lg-6
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema1/img15.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Enlace <em>web</em>
                  p.text-small Para ampliar la información relacionada con los métodos de medición de áreas diríjase al siguiente enlace web de la FAO:  
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6707s/x6707s10.htm" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.3. Georreferenciación, tipos y medición de recursos
    p.mb-5 La georreferenciación es el uso de coordenadas de mapa para asignar una ubicación espacial, permitiendo la capacidad de localizar de manera precisa las entidades geográficas importantes para los sistemas de información geográfica; los mapas representan ubicaciones en la superficie de la tierra que utilizan cuadrículas, gratículas y marcas de graduación con etiquetas de diversas ubicaciones terrestres tanto en medidas de latitud, longitud como en sistemas de coordenadas.
    .row.justify-content-center
      .col-lg-12
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img26.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Video 
                  p.text-small En el siguiente video de TV Agro se presenta la Georreferencia y su Importancia en la Agricultura. 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="https://www.youtube.com/watch?v=ZTse61iegIw" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link  
    p.mb-5 Dentro de la <b>zonificación agroecológica</b> se presentan elementos necesarios para su aplicación, en los cuales se encuentra el inventario de uso de tierras que se centra en el reconocimiento de las condiciones actuales de territorio enfocados en el uso actual de los suelos y los requerimientos agroclimáticos para el óptimo desarrollo de la unidad de producción del sistema agroalimentario.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img32.png')})`}"
          )        
          .bloque-texto-g__texto.py-5.px-4
            img(src='@/assets/curso/tema2/img33.png' style="width: 60px").m-auto 
            p Para determinar el inventario de recursos de tierras es necesario realizar la superposición de información de los usos del suelo y el clima, el resultado de esta superposición puede generar información relacionada con las limitaciones climáticas y del suelo, para una óptima planeación y diseño del sistema agroalimentario.
    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Dentro de este análisis también se pueden incluir temáticas relacionadas con la posesión y uso actual del territorio, para determinar la potencial disponibilidad de este para el desarrollo de la unidad de producción.
        p En el siguiente esquema se podrá visualizar la metodología de zonificación agroecológica, donde se muestra como elemento fundamental para la estimación del modelo de aptitud del territorio, la identificación y medición de los inventarios de usos y recursos de la tierra:
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img34.png', alt='')  
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
          h5 Figura 7.
          span Metodología de zonificación agroecológica      
    .bg3.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img35.svg', alt='Actividad 1. Inventario de usos de tierras: Tipos de utilización de tierras, características y requerimientos de adaptabilidad de los cultivos. Actividad 2. Inventario de recursos de tierras: suelos y fisiología, clima, liso actual y cubierta vegetal, límites administrativos, celdas agro-ecológicas; características, cualidades, zonas agroecológicas. Actividad 3. Rendimientos agroeconómicos potenciales, clases de aptitud de tierras, áreas potenciales, rendimiento y producción.')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
