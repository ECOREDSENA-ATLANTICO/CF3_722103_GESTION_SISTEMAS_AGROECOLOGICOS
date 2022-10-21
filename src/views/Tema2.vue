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
          p.m-0 <b>La cartografía es una de las herramientas que permite realizar la caracterización del territorio y de la unidad productiva</b>, con la finalidad de generar un modelo de evaluación cuantitativa y cualitativa de la aptitud del territorio por medio de una superposición de variables, que son analizadas a través de softwares abiertos o licenciados que aplican sistemas de información geográfica (SIG).
      
        p Los SIG son herramientas que permiten la modelación, administración, visualización de las características del territorio y que generan salidas gráficas que son necesarias para poder planificar y diseñar el territorio, en este caso el sistema agroalimentario. El SIG es el instrumento fundamental para caracterizar el territorio y tomar decisiones en torno a su gestión.
    p.mb-5 <b>Para la generación del modelo de aptitud del territorio, la planeación y diseño agroecológico del sistema agroalimentario, es necesario realizar:</b>          
    .row.justify-content-evenly.align-items-lg-stretch.mb-5.m_tar-boton
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
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-9.col-lg-4.mb-3.mb-lg-0.bgt01
        .row
          .col-12.p-3.bgtitulo
            h4.m-0.text-center Temáticas 
          .col-12.px-0
            img(src="@/assets/curso/tema2/img6.png"  alt='Texto que describa la imagen')
          .col-12.p-3.bgcontenido(style="height: 375px")
            h4 Técnicas
            ul.lista-ul--color
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Físico:</b>
              p.m-0.ms-4 Suelos.
              p.m-0.ms-4 Uso propuesto del suelo.
              p.m-0.ms-4 Conflicto de uso del suelo.
              p.m-0.ms-4 Uso principal del suelo.
              p.m-0.ms-4 Zonificación climática.
              p.m-0.ms-4 Precipitación.
              p.mb-3.ms-4 Temperatura.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Socioeconómico:</b>
              p.m-0.ms-4 Clasificación de predios por área.
              p.m-0.ms-4 Avalúos del territorio. 
      .col-9.col-lg-4.mb-3.mb-lg-0.bgt02
        .row
          .col-12.p-3.bgtitulo
            h4.m-0.text-center Componentes
          .col-12.px-0
            img(src="@/assets/curso/tema2/img7.png"  alt='Texto que describa la imagen')
          .col-12.p-3.bgcontenido(style="height: 375px")
            h4 Legales
            ul.lista-ul--color
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Paramos.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Reserva de la sociedad civil.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Reserva forestal protectora nacional y regional.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Frontera agrícola.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Proyectos ANLA.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Zonificación para plantaciones forestales con fines comerciales.
    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Por medio de un álgebra de mapas, que se realiza en un SIG, se crea el modelo de aptitud del territorio, aplicando la metodología representada en la siguiente figura, la cual consiste en la calificación de las temáticas seleccionadas, de acuerdo con la guía técnica de expertos agrónomos y agroecologos, para luego realizar una superposición de capas permitiendo la tabulación de las diferentes calificaciones. Finalmente, como resultado del modelo, se obtiene un mapa de aptitud del territorio para el sistema agroalimentario. Veamos la figura:  
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
            img.img-t.m-auto(src='@/assets/curso/tema2/img8.svg', alt='')
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p <b>Se debe tener presente que los mapas de las temáticas técnicas y legales para la generación de un modelo de aptitud del territorio deben ser analizadas bajo el mismo sistema de coordenadas y escalas.</b>
        p El desarrollo de modelos de aptitud del territorio para el avance de actividades agroecológicas es uno de los elementos que compone la zonificación agroecológica, según la FAO, una zonificación agroecológica permiten la evaluación de la aptitud y productividad potencial, así como los recursos presentes en el territorio, y esta información suministra las bases para poder evaluar la degradación del suelo y de la capacidad de sostenimiento de la población, así como planificar y diseñar los modelos de producción ganadera y de optimización de usos de suelo en el territorio. La zonificación agroecológica presenta elementos necesarios para su aplicación, dentro de los cuales se encuentran: 
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img9.png', style="width: 280px")
    .row.justify-content-center.mb-5
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img10.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p Inventario de recursos del territorio.

      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img11.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p Inventario de tipos de utilización del territorio y requerimientos de la plantación.
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema2/img12.svg', style="width: 100px")
          .tarjeta.color-acento-contenido1
            .p-4
              p.m-0 Evaluación de la aptitud del territorio incluyendo el cálculo de la cosecha máxima posibles y la comparación entre limitaciones y requerimientos.
    p.mb-5 <b>La zonificación agroecológica se fundamenta en el siguiente marco conceptual:</b>

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
          h5 Figura 4.
          span Metodología para la creación del modelo de aptitud del territorio
      .col-9.col-lg-5.mb-3.mb-lg-0.bgt03
        .row.m-1.mb-5
          .col-12.p-3.bgtitulo(style="height: 320px")
            img.imgtop(src="@/assets/curso/tema2/img13.png"  alt='Texto que describa la imagen')
            .bgsly3.p-2.mt-5.mb-4.d-flex.justify-content-center
              h4.text-center.mb-0 Aplicaciones básicas
          .col-12.p-3.bgcontenido(style="height: 375px")
            ul.lista-ul--color
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Entradas</b>
              p.m-0.ms-4 Inventario/base de datos.
              p.m-0.ms-4 Recursos de tierras.
              p.m-0.ms-4 Tipos de uso de tierras.
              p.m-0.ms-4 <b>Procesamiento de datos</b>
              p.m-0.ms-4 Modelos
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Resultados</b>
              p.m-0.ms-4 Inventario de recursos de tierras.
              p.m-0.ms-4 Mapas de zonas agro-ecológicas.
              p.m-0.ms-4 Aptitud de tierras: clases de aptitud, rendimientos potenciales.
              
      .col-9.col-lg-5.mb-3.mb-lg-0.bgt03
        .row.m-0
          .col-12.bgtitulo(style="height: 320px")
            img.imgtop1(src="@/assets/curso/tema2/img14.png"  alt='Texto que describa la imagen')
            .bgsly3.p-2.mt-5.mb-4
              h4.text-center.mb-0 Aplicaciones avanzadas
          .col-12.p-3.bgcontenido(style="height: 375px")
            ul.lista-ul--color
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Productividad potencial de tierras.</b>
              p.m-0.ms-4 <b>a.</b> Estimación de áreas cultivables.
              p.m-0.ms-4 <b>b.</b> Capacidad de sostenimiento de la población.
              p.m-0.ms-4 <b>c.</b> Planificación de usos de tierras.
              p.m-0.ms-4 <b>d.</b> Evaluación de riesgo de degradación de tierras.
              p.m-0.ms-4 <b>e.</b> Evaluación de forraje para ganadería.
              li.m-0
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 <b>Gestión de tierras.</b>
              p.m-0.ms-4 <b>a.</b> Planificación de la investigación agraria.
              p.m-0.ms-4 <b>b.</b> Transferencia de tecnología agrícola.
              p.m-0.ms-4 <b>c.</b> Recomendaciones sobre inputs agrícolas. 
              p.m-0.ms-4 <b>d.</b> Análisis y desarrollo de cisternas de explotación de fincas.
              p.m-0.ms-4 <b>e.</b> Evaluación del impacto ambiental.
              p.m-0.ms-4 <b>f.</b>  Control del uso de los recursos de tierras.
              p.m-0.ms-4 <b>g.</b> Evaluación del impacto de cambio climático. 
      .col-lg-10.m-0
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
