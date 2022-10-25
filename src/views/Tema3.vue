<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Inventario del agroecosistema
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img1.png', alt='') 
      .col-lg-7(data-aos="fade-right")
        p.m-0 Con el propósito de realizar la estimación del modelo de aptitud del territorio para el desarrollo de actividades agroecológicas se deben llevar a cabo una serie de acciones, una de ellas es la identificación de inventarios de los recursos de la tierra como el clima, el relieve, el suelo, entre otros, y por otro lado el inventario de los usos de la tierra donde se analizan los requerimientos ecológicos para que el sistema agroalimentario se desarrolle apropiadamente y procure que los índices de producción y eficiencia asociados al proceso productivo sean los mejores. 
    .row.mb-5
      .col-auto.py-2.px-3.bg-c1
        p.mb-0 #[b.text-black Usos del suelo]
    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p El uso actual del suelo y su respectiva cobertura vegetal es de suma importancia en el momento de realizar la zonificación agroecológica, ya que es un insumo esencial para poder determinar el modelo de aptitud del territorio y orientar la planificación y diseño del sistema agroalimentario. Por consiguiente, los tipos de uso del suelo y su cobertura deben ser tenidos en cuenta en este análisis ya que estos atributos son los determinantes para la definición del uso potencial de la tierra y los requisitos para la evaluación de esta.
        p Cabe denotar que el suelo y su cobertura pueden variar de acuerdo con parámetros ecológico-ambientales, los modelos de producción y las características productivas, de ello depende el rendimiento potencial del agroecosistema
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema3/img2.png', alt='')
    p.mb-5 <b>Existen diferentes atributos que permiten definir los tipos de usos del suelo como se observa en la siguiente tabla:</b> 
    .row.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3]. Atributos que permiten definir los tipos de usos del suelo
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Nota. FAO. (1997). Zonificación agro-ecológica. Guía general. 
            thead
              tr(style="background-color: #FFA686") 
                th(colspan="3") Atributo
                th(colspan="3") Insumos bajos
                th(colspan="3") Insumos medios
                th(colspan="3") Insumos elevados
            tbody
              tr(style="background-color: #F6F6F6") 
                th(colspan="3") Producto y producción
                td(colspan="9") 
                  p Cultivo de cebada de secano, maíz, avena, mijo, arroz, sorgo, trigo, garbanzo, caupí, cacahuete, haba, guandú, soja, mandioca, batata, patata, banana, palma y caña de azúcar. Sistema individual y múltiple de cultivo bajo patrones de cultivos y rotaciones apropiados.
              
              tr
                th(colspan="3") Orientación sobre mercado
                td(colspan="3") 
                  p Producción de subsistencia
                td(colspan="3") 
                  P Producción de subsistencia más venta comercial de productos
                td(colspan="3") 
                  P Producción comercial
                
              tr(style="background-color: #F6F6F6") 
                th(colspan="3")  Intensidad de capital
                td(colspan="3")  
                  p Bajo
                td(colspan="3")  
                  P Intermedio con créditos accesibles
                td(colspan="3")  
                  P Alto
               
              tr
                th(colspan="3")  Intensidad de trabajo
                td(colspan="3")  
                  p Elevado, incluyendo trabajo familiar no remunerado
                td(colspan="3")  
                  P Medio, incluyendo trabajo familiar no remunerado
                td(colspan="3")  
                  P Bajo, trabajo familiar remunerado si se utiliza
               
              tr(style="background-color: #F6F6F6") 
                th(colspan="3")  Fuente de energía
                td(colspan="3")  
                  p Trabajo manual con herramientas manuales
                td(colspan="3")  
                  P Trabajo manual con herramientas manuales y/o tracción animal con implementos mejorados; alguna mecanización
                td(colspan="3")  
                  P Mecanización total
                
              tr
                th(colspan="3")  Tecnología
                td(colspan="3")  
                  p Variedades tradicionales. Sin fertilizantes ni agroquímicos. Períodos de barbecho. Escasas medidas de conservación
                td(colspan="3")  
                  P Variedades mejoradas. Adecuadas prácticas extensionistas, incluyendo algunos fertilizantes y agroquímicos. Algunos períodos de barbecho y medida de conservación
                td(colspan="3")  
                  P Variedades de altos rendimientos incluyendo híbridos. Óptimo uso de fertilizantes y agroquímicos. Medidas de conservación completas
                
              tr(style="background-color: #F6F6F6") 
                th(colspan="3") Infraestructura
                td(colspan="3")  
                  p Sin accesibilidad a los mercados. Inadecuados servicios de asistencia
                td(colspan="3")  
                  P Accesibilidad a algunos mercados y servicios de demostración
                td(colspan="3")  
                  P Accesibilidad a los mercados. Elevado nivel de los servicios de asistencia y acceso a los resultados de investigación
               
              tr
                th(colspan="3")  Tenencia de la tierra
                td(colspan="3")  
                  p Pequeña, fragmentada
                td(colspan="3")  
                  P Pequeña, algo fragmentada
                td(colspan="3")  
                  P Extensa, consolidada
               
              tr(style="background-color: #F6F6F6") 
                th(colspan="3") Nivel de ingresos
                td(colspan="3")  
                  p Bajo
                td(colspan="3")  
                  P Moderado
                td(colspan="3")  
                  p Elevado
    .row.mb-5
      .col-auto.py-2.px-3.bg-c1
        p.mb-0 #[b.text-black Modelos de producción]
    .row.align-items-center.mb-3
      .col-lg-12(data-aos="fade-right")
        p.mb-4 Los sistemas agropecuarios en Colombia y ALC juegan un papel indispensable para la producción de servicios ecosistémicos y alimentos que no solo satisfacen las necesidades alimentarias de la región sino del mundo en general, estos sistemas pueden dividirse por categorías, las cuales pueden ser:
        h4.text-center Sistemas de producción agropecuaria:
    .row.justify-content-evenly.align-items-lg-stretch.mb-5
      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        
        .tarjeta--boton.color-secundario.bgtb.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img3.png', alt='Texto que describa la imagen')
          p.px-3 Riego.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img4.png', alt='Texto que describa la imagen')
          p.px-3 Basado en cultivo de arroz de tierras húmedas.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img5.png', alt='Texto que describa la imagen')
          p.px-3 Secano en áreas húmedas.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img6.png', alt='Texto que describa la imagen')
          p.px-3 Secano en áreas escarpadas y tierras altas.   
    .row.justify-content-evenly.align-items-lg-stretch.mb-5
      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.bgtb.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
          p.px-3 Secano en áreas secas y frías con escaso potencial.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-acento-contenido.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
          p.px-3 Agropecuaria dual (mixto de plantaciones comerciales y pequeños productores).

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
          p.px-3 Pesca costera artesanal.

      .col-sm-6.col-lg-3.mb-5.mb-lg-0
        .tarjeta--boton.color-secundario.p-2
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')
          p.px-3 Basados en áreas urbanas.    
    p.mb-5 Esta clasificación es determinada de acuerdo con los potenciales para reducir la pobreza, la capacidad de crecimiento agrícola, la importancia demográfica y económica de cada sistema al interior de la región donde se desarrolla; además, cada uno de estos sistemas de producción refleja las características bióticas y abióticas que determinan la extensión e intensidad de la producción, tipo de cultivos y recursos asociados.
    .row.mb-5
      .col-auto.py-2.px-3.bg-c1
        p.mb-0 #[b.text-black Fuentes de producción]
    .row.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Para caracterizar la estructura productiva de los territorios es importante identificar los indicadores involucrados en el análisis e identificación de los usos del suelo en el territorio, los cuales son: 
    .row.mb-5
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img11.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 Tenencia de la tierra.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img12.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Tamaño de las explotaciones. 
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img13.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Balance de uso de mano de obra.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img14.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Tipo de explotación.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img16.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 Crédito.
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img17.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 Nivel tecnológico.  
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img18.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-4
            div
              p.mb-0 Inversiones requeridas.   
      .col-12.col-lg-3.mb-3.h-100(data-aos="zoom-in")
        .row.bg8
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema3/img19.svg', alt='Texto que describa la imagen')
          .col-9.align-items-center.p-3
            div
              p.mb-0 Destino y tipo de producción.
    p Conforme a estos parámetros se pueden definir el tipo de productor, encontrando:
    .row.justify-content-center.mb-5
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100
          img.img-t.m-auto(src='@/assets/curso/tema3/img20.svg', style="width: 160px")
          .tarjeta.color-acento-contenido
            .p-4
              p.mt-4 Agricultores de subsistencia (arrendatarios o propietarios).
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.h-100
          img.img-t.m-auto(src='@/assets/curso/tema3/img21.svg', style="width: 160px")
          .tarjeta.color-acento-contenido
            .p-4
              p.mt-4 Pequeños agricultores.
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema3/img22.svg', style="width: 180px")
          .tarjeta.color-acento-contenido
            .p-4
              p.mt-4 Productores comerciales.
      .col-lg-3.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img.img-t.m-auto(src='@/assets/curso/tema3/img23.svg', style="width: 160px")
          .tarjeta.color-acento-contenido
            .p-4
              p.mt-4 Productores agroindustriales.
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
