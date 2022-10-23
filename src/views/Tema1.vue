<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Políticas públicas en agroecología
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p En Colombia como en América Latina y el Caribe (ALC), la agroecología es vista como una de las alternativas que pueden permitir la transformación de los agroecosistemas convencionales, hacia un sistema agroalimentario más sostenible y dar respuesta a la crisis económica, social, política y ecológica ambiental.
        
        .cajon.color-acento-contenido.p-4.ps-5.color1
          p.m-0 Gracias a diversos movimientos sociales que impulsan esta nueva forma de producción, se han podido conformar alianzas que inciden en las políticas públicas de los países en ALC. Sin embargo, la implementación de las políticas que promueven la agroecología, así como los impactos que genera esta forma de producción depende del contexto político-institucional específico de cada país.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img1.png', alt='')  
    .bg1.px-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10.mb-5
          figure
            img.d-none.d-lg-flex(src='@/assets/curso/tema1/img2.svg', alt='')
            img.d-flex.d-lg-none(src='@/assets/curso/tema1/img5.svg', alt='')
    p.mb-5 Sin embargo, a partir de este modelo, es donde parten o nacen otras formas de producción como lo son la agroecología, la agricultura orgánica y la agricultura sostenible, cada una con un enfoque distintivo como se puede apreciar en la siguiente tabla.
    .bg2.pt-5.mb-4
      .row.justify-content-end.align-items-center
        .col-lg-6.align-self-center.mb-4.mb-lg-0
          p.m-0.mt-4.mx-3.mx-lg-0 Estas nuevas formas de producción que surgen en los años 70 solo contaban con el apoyo de movimientos sociales y en ocasiones por parte de organizaciones internacionales, pero a través de procesos de concertación y presión lograron que algunos gobiernos tomaran en cuenta estas propuestas, las cuales se ven reflejadas en las políticas públicas de algunos países de ALC.
        
        .col-lg-5.mb-4(data-aos="fade-left")
          figure
            img.img-t(src='@/assets/curso/tema1/img4.svg', alt='') 
    .row
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1]. Tipos de modelos agrícolas establecidos en ALC 
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Nota. Le Coq, J. Patrouilleau, M. Sabourin, E. y Niederle, P. (2020). Políticas públicas que promueven la agroecología y producción orgánica en América Latina.
            thead
              tr(style="background-color: #FFA686") 
                th Criterios distintivos
                td Agroecología latinoamericana
                  
                td Agricultura orgánica
                  
                td Agricultura sostenible
                  
                td Agricultura convencional
            tbody
              tr(style="background-color: #F6F6F6") 
                th Tipo de finca agrícola
                td
                  p Fincas familiares (llamadas familiares,campesinas, indígenas)
                td
                  P Todos los tipos
                td
                  P Todos los tipos
                td
                  P Todos los tipos
              tr
                th Integración al mercado
                td 
                    p Limitada
                td 
                    P Variable
                td 
                    P Máxima
                td 
                    P Máxima
              tr(style="background-color: #F6F6F6") 
                th Sistema de alimentos objetivo (1)
                td 
                  p Circuitos cortos
                td 
                  P Circuitos largos y exportación
                td 
                  P Circuitos largos y exportación
                td 
                  P Circuitos largos y exportación
              tr
                th Etiquetado de productos alimenticios agrícolas
                td 
                  p Posible, más o menos formalizada
                td 
                  P Sí, certificación por terceros
                td 
                  P No
                td 
                  P No
              tr(style="background-color: #F6F6F6") 
                th Escala de cambio de prácticas agrícolas
                td 
                  p Parcela, finca, territorio
                td 
                  P Parcela y finca
                td 
                  P Parcela
                td 
                  P Parcela
              tr
                th Insumos (abonos, productos fitosanitarios…)
                td 
                  p Pocos insumos y procedentes de procesos biológicos
                td 
                  P Procedentes de procesos biológicos certificados
                td 
                  P Uso racional de insumos sintéticos
                td 
                  P Uso masivo de insumos sintéticos
              tr(style="background-color: #F6F6F6") 
                th Cultivo de variedades genéticamente modificadas
                td 
                  p No
                td 
                  P No
                td 
                  P Sí
                td 
                  P Sí
              tr
                th Diversificación de la producción en la finca agrícola
                td 
                  p Sí
                td 
                  P Variable
                td 
                  P No buscada
                td 
                  P No buscada
              tr(style="background-color: #F6F6F6") 
                th Factores principales que contribuyen a la promoción del modelo
                td 
                  p <b>a</b> Políticas públicas impulsadas por movimientos sociales.
                  p <b>b</b> Demanda consumida a través de circuitos cortos, o programas de compra por audiencias preferenciales.
                td 
                  p <b>a</b> Demanda del consumidor de productos orgánicos certificados.
                  p <b>b</b> Políticas públicas.
                td 
                  P Políticas públicas de incentivos para adoptar prácticas agrícolas específicas.
                td 
                  P Políticas agrícolas y comerciales (acuerdos de libre comercio).
          
    p.mb-5 La agroecología desde los años 70 inicia con un proceso de fortalecimiento y expansión, el cual se describe en la siguiente infografía: 
    .row.justify-content-evenly.align-items-lg-stretch.my-4.mb-5.m_tar-boton
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img6.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.color4
            h4.text-center.text-white.mb-0 Agricultura 
          .tarjeta-foto-hover__tarjeta.bg_color3.d-flex.align-items-center.justify-content-center
            .px-5.px-lg-2
              p.text-bold.text-center Agricultura 
              p.m-0.text-center.t_text Aproximación a la agroecología no solo desde la ciencia, sino desde los movimientos sociales que reclaman la identificación y promoción de prácticas que promuevan la sostenibilidad de la agricultura.
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img7.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.color4
            h4.text-center.text-white.mb-0 Equidad genero 
          .tarjeta-foto-hover__tarjeta.bg_color3.d-flex.align-items-center.justify-content-center
            .p-5.p-lg-2
              p.text-bold.text-center Equidad genero 
              p.m-0.text-center.t_text El carácter político de la agroecología, cuyos modelos más allá de recoger reivindicación, integra propuestas de desarrollo socio económico y cultural, con profunda incidencia de la apuesta por la equidad de género, la complementariedad generacional y el diálogo intercultural étnico.
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img8.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.color4
            h4.text-center.text-white.mb-0 Agrosistema
          .tarjeta-foto-hover__tarjeta.bg_color3.d-flex.align-items-center.justify-content-center
            .p-4
              p.text-bold.text-center Agrosistema
              p.m-0.text-center.t_text Consolidación de la agroecología como un marco conceptual con herramientas holísticas para el análisis y manejo de agroecosistemas.
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img9.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.color4
            h4.text-center.text-white.mb-0 Agroecologia
          .tarjeta-foto-hover__tarjeta.bg_color3.d-flex.align-items-center.justify-content-center
            .p-4
              p.text-bold.text-center Agroecologia
              p.m-0.text-center.t_text Inclusión de las ciencias sociales en las aproximaciones a la agroecología, robusteciendo su carácter holístico y resaltando componentes económicos, socioculturales y políticos.
      .col-sm-6.col-lg-2.mb-5.mb-lg-0
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/tema1/img10.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.color4
            h4.text-center.text-white.mb-0 Agroalimentarios
          .tarjeta-foto-hover__tarjeta.bg_color3.d-flex.align-items-center.justify-content-center
            .p-4
              p.text-bold.text-center Agroalimentarios
              p.mb-5.text-center.t_text Ampliación del enfoque en agroecosistemas hacia uno de sistemas agroalimentarios.
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img11.png', alt='')
      .col-lg-8(data-aos="fade-right")        
        p El gobierno de Colombia a través de la Resolución 464 de 2017 expedida por el Ministerio de Agricultura y Desarrollo Rural de Colombia, ha definido dentro de las políticas públicas a la agroecología como la “Ciencia, que estudia las interacciones ecológicas de los diferentes componentes del agroecosistema, como conjunto de prácticas, busca sistemas agroalimentarios sostenibles que optimicen y estabilice la producción, y que se basen tanto en los conocimientos locales y tradicionales como en los de la ciencia moderna y como movimiento social, impulsa la multifuncionalidad y sostenibilidad de la agricultura, promueve la justicia social, nutre la identidad y la cultura, y refuerza la viabilidad económica en las zonas rurales.”(MADR, 2017).}
        p <b>Lo cual resalta que la agroecología es diferente a otros enfoques del desarrollo sostenible, ya que esta:</b>
    .bg3.p-5.mb-5
      .row
        .col-lg-1
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img12.png', alt='')
      .row.justify-content-center
        .col-lg-8
          p “Se basa en procesos territoriales y que parten desde la base, lo que ayuda a dar soluciones contextualizadas a problemas conocimientos, combinando la ciencia con los conocimientos tradicionales y prácticas locales de los productores”, evitando así la dependencia de insumos externos y favoreciendo la autonomía y la viabilidad económica de las personas que se dedican a la agricultura campesina, familiar y comunitaria. Además, la agroecología tiene un carácter transformativo, pues busca transformar los sistemas alimentarios y agrícolas abordando las causas profundas de los problemas de forma integrada y aportando soluciones holísticas y a largo plazo” <b>(FAO, 2018:2-10)</b>.
        .col-lg-3
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img13.png', alt='')
    p.mb-5 Debido a la evolución, como se puede detallar en la siguiente figura y a los diferentes enfoques como el sistémico, holístico, integral, multidimensional y multifuncional, ha generado que la agroecología se comprenda como una ciencia práctica y como un movimiento social, que integra aspectos productivos, ambientales, socioculturales, políticos y epistemológicos:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 1.
      span Evolución de la agroecología
    .bg4
      .row.justify-content-center.mb-5
        .col-lg-12
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img14.svg', alt='')
          figcaption Nota. Organización de las Naciones Unidas para la Alimentación y Agricultura Colombia (2021). Documento propuesta de lineamientos de política pública en agroecología para Colombia.
    p.mb-5 El marco normativo utilizado en Colombia relacionado con la agroecología está basado en el desarrollo conceptual y evolución de la agroecología y sin duda de sus diferentes enfoques. Asimismo, está conformado por normativa del ámbito internacional y nacional en las cuales se resalta la relación de la agroecología con la Agricultura Campesina, Familiar y Comunitaria (ACFC) y la perspectiva de género.

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
                  p.text-small Los principales instrumentos normativos y de política relacionados con la agroecología en Colombia, se pueden observar en el documento de la FAO, página 39 Tabla 3 Principales instrumentos normativos y de política. 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="http://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/7_Propuesta-de-lineamientos-de-politica-publica-en-agroecologia-para-Colombia-_compressed.pdf" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 2.
      span Enfoques de los lineamientos de política pública en agroecología en Colombia
    .bg5
      .row.justify-content-center.mb-5
        .col-lg-6
          figure
            img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
      figcaption.mb-5 Nota. Organización de las Naciones Unidas para la Alimentación y Agricultura Colombia (2021). Documento propuesta de lineamientos de política pública en agroecología para Colombia. 
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img17.svg', alt='')
      .col-lg-10(data-aos="fade-right")
        p A partir de estos enfoques se han determinado 64 líneas temáticas agrupadas en 5 ejes estratégicos, los cuales se fundamentan y son apoyados por diferentes instrumentos de política pública estos son los Objetivos de Desarrollo Sostenible (ODS), Acuerdos de Paz, el Plan Nacional de Desarrollo 2018-2022, el Plan Nacional de Comercialización, Ley de Cambio Climático, el CONPES de Crecimiento Verde, entre otros; estos son:
    .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
      h5 Figura 3.
      span Instrumentos de política relacionados con los ejes estratégicos de los lineamientos de política pública en agroecología
    .row.justify-content-center.mb-3
      .col-lg-12
        figure
          img(src='@/assets/curso/tema1/img18.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
    figcaption.mb-5 Nota. Organización de las Naciones Unidas para la Alimentación y Agricultura Colombia (2021). Documento propuesta de lineamientos de política pública en agroecología para Colombia.
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
                  p.text-small Para ampliar la información relacionada con el marco estratégico de los lineamientos de política pública en agroecología en Colombia y los lineamentos de política pública en agroecología para Colombia diríjase al siguiente enlace <em>web</em>: 
                .col-sm-auto
                  a.boton.color-acento-botones.me-3.mg4(href="http://sembrandocapacidades.fao.org.co/wp-content/uploads/2022/01/7_Propuesta-de-lineamientos-de-politica-publica-en-agroecologia-para-Colombia-_compressed.pdf" target="_blank").mb-0                    
                    span Enlace
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
