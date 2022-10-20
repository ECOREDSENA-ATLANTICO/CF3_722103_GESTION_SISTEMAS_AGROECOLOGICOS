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
    .row.justify-content-center(data-aos="zoom-in")
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
