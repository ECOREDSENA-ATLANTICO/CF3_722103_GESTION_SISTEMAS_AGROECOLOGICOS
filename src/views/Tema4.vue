<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de riesgos en agroecología
    .row.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p El riesgo y la incertidumbre son dos factores inherentes a la actividad agropecuaria. El clima, las condiciones meteorológicas, los desastres naturales, las perturbaciones del mercado y las enfermedades son las fuentes de riesgo más comunes, sin mencionar, los riesgos asociados a la infraestructura, la logística, la situación y contexto socioeconómico y político, el cambio climático y la amplia volatilidad de los precios, vinculada con la inflación.
        p Los procesos de subsistencia de los pequeños y medianos agricultores son muy vulnerables, debido a que los productores presentan dificultades para identificar y gestionar el riesgo y no se logran beneficiar de las oportunidades de inversión, para mejorar sus negocios y a su vez fortalecer la resiliencia de sus hogares.
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img1.svg', alt='') 
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img2.png', alt='') 
      .col-lg-8(data-aos="fade-right")
        p Para reducir y controlar el riesgo hay que minimizar en lo posible la pérdida de activos de capital ambiental y físicos, como medida fundamental para aplicar prácticas de planificación coherentes e informadas. Estas comprenden la implementación de documentos y herramientas clave.
        .cajon.color-acento-contenido.p-4.ps-5.color1
          p.m-0 Es importante mencionar algunos como planes de desarrollo, planes maestros, plan de gestión de los recursos hídricos, recreación y turismo, así como instrumentos de planificación, como los de ordenamiento territorial, zonificación ambiental y uso de la tierra.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.1. Tipos de riesgos
    .row.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p La gestión de riesgos comienza con la identificación de las amenazas y vulnerabilidades asociadas al entorno natural y de las sociedades. Las amenazas están relacionadas con factores exógenos a la infraestructura pública y privada, población, sociedad y unidades de producción, las cuales ponen en riesgo la funcionalidad y estabilidad de las unidades funcionales del territorio. En el siguiente video se puede profundizar sobre las amenazas: 
      .col-lg-12(data-aos="fade-right")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/oWAzU9htEUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
    .row.align-items-center.mb-5
      .col-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img3.png', alt='')
      .col-lg-10(data-aos="fade-right")        
        p La vulnerabilidad está relacionada con la evolución de los factores sociales y económicos, asociados con el patrón de sostenibilidad y desarrollo relativo a procesos de inclusión, el uso de suelo rural y urbano, la urbanización y el desarrollo del capital social. Estos procesos establecen capacidades y condiciones materiales que protegen o exponen a la sociedad ante alguna amenaza. La vulnerabilidad se puede expresar como el grado de exposición de las unidades sociales (persona, familia, comunidad o sociedad) y de los activos fijos y actividades económicas.
        p <b>Los factores asociados a la vulnerabilidad son la fragilidad, el grado de exposición y la resiliencia, estos se definen como:</b>
    .row.justify-content-center.mb-5
      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema4/img4.png', style="width: 100px")
          .tarjeta.color-acento-contenido2
            .p-4
              p La fragilidad es el nivel de protección y resistencia de la unidad funcional, frente al impacto de los eventos e incluye las situaciones de debilidad o desventaja causados por las condiciones socioeconómicas. 

      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema4/img5.png', style="width: 100px")
          .tarjeta.color-acento-contenido2
            .p-4
              p El grado de exposición está asociado con la decisión y práctica, que ubican a una unidad social en la zona de influencia de la amenaza. 
      .col-lg-4.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema4/img6.png', style="width: 100px")
          .tarjeta.color-acento-contenido2
            .p-4
              p.m-0 La resiliencia es la capacidad de recuperación o nivel de asimilación de la unidad social, con relación al impacto de eventos intensos y extremos capaces de generar daño.
    p.mb-5 Siendo así, el riesgo se puede definir como la probabilidad de que la unidad social sufra pérdidas o daños, como consecuencia del impacto de una amenaza frente a su condición de vulnerabilidad. La gestión integral de riesgos podría ser correctiva y prospectiva:   
    .row.mb-5
      .col-12.col-lg-6.mb-3.h-100(data-aos="zoom-in")
        .row.bg9
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema4/img7.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 <b>La gestión prospectiva</b> es el proceso que busca el desarrollo de medidas que prevengan las situaciones de peligro o la formación de condiciones de vulnerabilidad. 
      .col-12.col-lg-6.mb-3.h-100(data-aos="zoom-in")
        .row.bg9
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema4/img8.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 <b>La gestión correctiva</b> es el proceso en donde se desarrollan acciones para reducir la vulnerabilidad existente.
    .bg10.pt-5.mb-4
      .row.justify-content-end.align-items-center
        .col-lg-7.align-self-center.mb-4.mb-lg-0
          p.ps-5 Un productor agropecuario puede implementar almacenamiento del agua, sistemas de riego, cambio de variedades, prácticas de retención de humedad del suelo o medidas que podrían ser correctivas y/o prospectivas. En este escenario, el aseguramiento de la actividad agropecuaria es el resultado de una medida prospectiva del riesgo a través de la cual, el productor traslada parte de su riesgo al asegurador a cambio de una prima de seguro que lo proteja para reponer su actividad en caso de sufrir algún siniestro. 
        .col-lg-5.mb-4(data-aos="fade-left")
          figure
            img.img-t(src='@/assets/curso/tema4/img10.svg', alt='').mx-auto   
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.2. Clasificación de riesgos
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img11.png', alt='') 
      .col-lg-8(data-aos="fade-right")
        p Los productores agrícolas y pecuarios se enfrentan a múltiples factores o elementos de amenaza y vulnerabilidad relacionados con el contexto macroeconómico, como la volatilidad de los precios domésticos (locales) o internacionales y otros elementos que podrían <b>afectar el bienestar, la productividad y rentabilidad, así como los desincentivos o incentivos de la infraestructura, la gestión institucional, las relaciones económicas y sociales en el sector rural y urbano.</b>
        p Los factores macroeconómicos y estructurales son definidos como amenazas si son exógenos; es decir, ajenos o de poco control del productor, no tiene influencia para prevenirlos o modificarlos; y son catalogados como vulnerabilidad si son consecuencia de un proceso endógeno según las características de la actividad o unidad económica en sí, por tanto, podrían ser transformados o gestionados por los mismos actores. La gestión del riesgo no se limita a acciones reactivas ante situaciones adversas, sino de anticiparse a su probabilidad de ocurrencia y a sus posibles consecuencias, mediante estrategias o acciones que reduzcan los efectos adversos. 


</template>

<script>
export default {
  name: 'Tema3',
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
