<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Análisis de riesgos en agroecología
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p El riesgo y la incertidumbre son dos factores inherentes a la actividad agropecuaria. El clima, las condiciones meteorológicas, los desastres naturales, las perturbaciones del mercado y las enfermedades son las fuentes de riesgo más comunes, sin mencionar, los riesgos asociados a la infraestructura, la logística, la situación y contexto socioeconómico y político, el cambio climático y la amplia volatilidad de los precios, vinculada con la inflación.
        p Los procesos de subsistencia de los pequeños y medianos agricultores son muy vulnerables, debido a que los productores presentan dificultades para identificar y gestionar el riesgo y no se logran beneficiar de las oportunidades de inversión, para mejorar sus negocios y a su vez fortalecer la resiliencia de sus hogares.
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
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
          .col-9.d-flex.align-items-center.p-4
            div
              p.mb-0 <b>La gestión prospectiva</b> es el proceso que busca el desarrollo de medidas que prevengan las situaciones de peligro o la formación de condiciones de vulnerabilidad. 
      .col-12.col-lg-6.mb-3.h-100(data-aos="zoom-in")
        .row.bg9
          .col-3.px-0.align-items-center
            figure
              img(src='@/assets/curso/tema4/img8.svg', alt='Texto que describa la imagen')
          .col-9.d-flex.align-items-center.p-4
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
    .row.justify-content-center.mb-5
      .col-12(data-aos="zoom-in")  
        .bloque-texto-g.bg11.p-3.p-sm-4.p-md-5.my-5.otrobloque2(data-aos="fade-up-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img13.png')})`}"
          )
          .bloque-texto-g__texto.py-5.px-4
            img(src='@/assets/curso/tema4/img12.png' style="width: 60px").m-auto 
            p Por ejemplo, actuar sobre la diversificación de cultivos con diversas sensibilidades climáticas, podría ser una estrategia factible y asequible para los productores. Si el productor tiene acceso a la información de los pronósticos del clima, podría ajustar sus periodos de cosecha y otras actividades de cuidado del cultivo. 
    p.mb-5 El ahorro de capital o fondos de reserva de un agricultor, una asociación o del mismo Estado, puede establecerse como una estrategia de prevención de riesgos que facilite la capacidad de restablecer la producción en caso de que ocurra un evento extremo; los seguros son herramientas de transferencia de un porcentaje de los riesgos de los productores a los aseguradores. A continuación, se presenta la caracterización de amenazas que podría enfrentar un productor agropecuario:
    .row.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 4]. Amenazas asociadas a la actividad agropecuaria
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Nota. CEPAL (2015). Gestión Integral de Riesgos y Seguros Agropecuarios en Centroamérica y la República Dominicana. 
            thead
              tr(style="background-color: #FFA686") 
                th(colspan="3") 
                  h4.mb-0 Origen
                th(colspan="9") Ejemplos de amenazas a la actividad agropecuaria 
            tbody
              tr(style="background-color: #F6F6F6") 
                td(colspan="3") 
                  .text-bold.text-center Naturales
                td(colspan="9") 
                  p Sismos, tsunamis, erupciones volcánicas, sequías, granizadas, lluvias intensas, inundaciones, avalanchas, desbordamientos de ríos, heladas, vientos fuertes, enfermedades y plagas.
              tr 
                td(colspan="3") 
                  .text-bold.text-center Socionaturales
                td(colspan="9") 
                  p Inundaciones, reducción de polinización, cambios en microclimas por deforestación de cuencas, degradación y pérdida de humedad del suelo por prácticas agrícolas inadecuadas, incendios por descuido, contaminación de fuentes de agua por insumos utilizados o deshechos.
              tr(style="background-color: #F6F6F6") 
                td(colspan="3") 
                  .text-bold.text-center Tecnológicas
                td(colspan="9") 
                  p Maquinaria y equipo, técnicas de producción, manipulación de tecnología y de desechos tóxicos y variedades de cultivos inadecuadas a las condiciones locales de producción, de mercado o que reduzcan la sostenibilidad.
              tr 
                td(colspan="3") 
                  .text-bold.text-center Económicas y financieras
                td(colspan="9") 
                  p Volatilidad de precios internacionales y domésticos de productos e insumos; volatilidad de tipos de cambio; variación de la demanda doméstica e internacional; aranceles o restricciones de mercado para los productos; insuficiencia de liquidez; pérdida de patrimonio y aumentos de la tasa de interés. 
              tr(style="background-color: #F6F6F6") 
                td(colspan="3") 
                  .text-bold.text-center Antropogénicas en la misma unidad
                td(colspan="9") 
                  p Accidentes, enfermedades y muerte, daños a terceros, tenencia informal o tierras apropiadas por terceros, pérdidas y daños a tierras, cultivos, equipo, instalaciones y materias primas por robo, entre otros
              tr 
                td(colspan="3") 
                  .text-bold.text-center Antropogénicas en el contexto social, político e institucional
                td(colspan="9") 
                  p Cambios en políticas, leyes y regulaciones de la agricultura y uso de la tierra y el agua; restricciones de importación de productos domésticos; disturbios, guerras, huelgas, delincuencia y debilidad del estado de derecho.
    .row.align-items-center.mb-5 
      .col-lg-7(data-aos="fade-right")
        p.m-0 La evaluación de la vulnerabilidad en el sector agropecuario debe integrar el análisis de la ubicación de las áreas en el uso del suelo, a su vez debe integrar los incentivos para la actividad, su participación en la producción, el impacto en los ingresos, sostenibilidad, equidad y la política pública. El conocimiento de la población, su control y acceso a la información y herramientas tecnológicas, es clave para definir pronósticos de precios, del clima y de la demanda, que condicionan la resiliencia de la actividad ante desastres y su éxito. La evolución de las relaciones sociales y económicas en ambientes rurales condiciona la heterogeneidad estructural, los sistemas productivos, el estado del capital social en términos de educación y salud, la distribución de la riqueza, la seguridad alimentaria, la emigración, la feminización de la pobreza y el flujo de remesas. El acceso a estos recursos en zonas rurales puede condicionar la capacidad de recuperación. La disponibilidad de servicios financieros (depósitos, créditos y seguros) son elementos determinantes de la resiliencia ante situaciones extremas. 
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img14.png', alt='')
    p.mb-5 Una gestión efectiva de los riesgos en los sectores agrícolas y pecuarios implica la reducción de los efectos no deseados, no perjudica o afecta los rendimientos y la productividad. Estas estrategias preventivas y correctivas establecen mecanismos endógenos para cada unidad productiva, y exógenos a realizar por otros actores del contexto, lo que se explica de forma detallada en la siguiente tabla:
    .row
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 5]. Estrategias de gestión de los riesgos agropecuarios
        .tabla-a.color-acento-contenido.mb-4
          table
            caption Nota. CEPAL (2015). Gestión Integral de Riesgos y Seguros Agropecuarios en Centroamérica y la República Dominicana. 
            thead
              tr.pst(style="background-color: #FFA686") 
                th(rowspan='2')(style="width:15%")
                td(rowspan='2')(style="width:15%")
                th(rowspan='2')(style="width:25%") Mecanismos encógenos a las unidades productivas 
                th(colspan='2')(style="width:45%") Mecanismos exógenos  
              tr.pst(style="background-color: #FFA686")
                th De mercado
                th Públicos  
            tbody
              tr(style="background-color: #F6F6F6") 
                th(style="background-color: #FFD3C3")  
                  p.pst_1 <b>Estrategias preventivas</b>
                  p.pst_1 <b>Estrategias correctivas</b>
                th(style="background-color: #FFE9E1")   
                  p.pst_2 <b>Unidad productiva</b>
                  p.pst_2 <b>Colectivo</b>
                  p.pst_2 <b>Lidiando con los efectos</b> 
                td(style="background-color: white")
                  ul.lista-ul--color
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Evitar la exposición al riesgo
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Diversificación e intercambio de cultivos
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Diversificación de parcelas
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Diversificación de las fuentes de ingreso
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Acumulación de reservas de existencias de cultivos o activos líquidos
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Adopción de técnicas avanzadas de cultivo (agroforestería, fertilización, irrigación, variedades resistentes)
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Cultivo compartido
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Mancomunicación informal de riesgos
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Venta de activos
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Reasignación de la fuerza de trabajo
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Ayuda mutua
                td(style="background-color: white")
                  ul.pst_3.lista-ul--color
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Comercialización por contrato
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Contratos de futuros
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Seguros
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Créditos
                td(style="background-color: white")
                  ul.lista-ul--color
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Extensión agrícola
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Sistemas de gestión de plagas
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Infraestructura con medidas estructurales y no estructurales para la reducción de riesgos de desastres (caminos, presas, sistemas de irrigación).
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Sistema de información y alertas tempranas para pronósticos de corto, mediano y largo plazos
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Programas de apoyo a microfinancieras facilitando el acceso al crédito, depósitos, garantías y seguros
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Asistencia social
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Fondos sociales
                    li
                      <i class="fas fa-cog" style="color:#FFA686"></i>
                      p Transferencias de efectivo
    .row.align-items-center.mb-5
      .col-lg-2(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema4/img15.png', alt='')
      .col-lg-10(data-aos="fade-right")
        p La evaluación de amenazas y vulnerabilidades de los procesos agrícolas y pecuarios permite calificar y determinar el nivel de riesgo al que se está expuesto. Las estrategias preventivas y/o correctivas podrían ser desarrolladas por agentes privados, los productores mismos, y el sector público. Los seguros agrícolas y pecuarios usualmente requieren un respaldo de las políticas públicas para la gestión integral de los riesgos.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 4.3. Seguimiento y evaluación de riesgos
    .row.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p Con el fin de reducir los riesgos asociados a fenómenos antrópicos y/o naturales que podrían afectar la producción agrícola y pecuaria, se deben implementar y considerar algunas estrategias direccionadas hacia la mitigación y prevención, sean estructuradas o no, que permitan reducir al máximo los daños.  
        p Los productores podrían implementar algunas de las actividades propuestas en el siguiente recurso de reducción de riesgos:      
    TabsB.color-acento-contenido.mb-5.color_img-tab
      .py-4.py-md-5(titulo="Agricultura" :icono="require('@/assets/curso/tema4/img16.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Agricultura
            ul.lista-ul--color
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Siembra de cultivos de ciclo corto
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Almacenamiento de semillas
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Implementación de cultivos de hortalizas bajo riego
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Siembra de parcelas semilleras con las alcaldías
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Conservación de ramas de yuca
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Conservación de yuca fresca
          .col-lg-5.mb-5
            figure
              img.img-t.m-auto(src='@/assets/curso/tema4/img19.png', alt='')
      .py-4.py-md-5(titulo="Ganadería" :icono="require('@/assets/curso/tema4/img17.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Ganadería
            ul.lista-ul--color
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Construcción de lomas de resguardo ganadero
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Siembra de forrajes
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Prevención y preparación del ganado
          .col-lg-5.mb-5
            figure
              img.img-t.m-auto(src='@/assets/curso/tema4/img20.png', alt='')   
      .py-4.py-md-5(titulo="Fortalecimiento de desarrollo de habilidades" :icono="require('@/assets/curso/tema4/img18.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Fortalecimiento de desarrollo de habilidades 
            ul.lista-ul--color
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Sistema de Alerta Temprana
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Organización de Comités de Riesgo
              li
                <i class="fas fa-cog" style="color:#FFA686"></i>
                p.m-0 Organización de Unidades de Gestión de Riesgo Comunal
          .col-lg-5.mb-5
            figure
              img.img-t.m-auto(src='@/assets/curso/tema4/img21.png', alt='') 
    .row.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p De igual manera, en el siguiente video, se desarrollarán algunas acciones enfocadas en la reducción del riesgo, particularmente en lo relacionado con fenómenos naturales adversos para la agricultura:
      .col-lg-12(data-aos="fade-right")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ERfF4crAnhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
    p.mb-5 Un mecanismo de acción ante la materialización de un riesgo se puede ver a continuación:     
    .row.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right").mb-5
          h5 Figura 8.
          span Estructura operativa del sistema de alerta temprana     
    .bg3.p-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img22.svg', alt='') 
    figcaption.mb-5 Nota. FAO. (2013). Guía técnica: Medidas para la gestión del riesgo agropecuario del Ben.   
    p.mb-5 <b>Para finalizar, es importante mencionar que los Sistema de Alerta Temprana (SAT) tienen tres fases:</b>   
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-12.col-md-9.col-lg-4.mb-3.mb-lg-0.bgt04
        .row.m-0
          .col-12.p-3.bgtitulo
            img(src="@/assets/curso/tema4/img23.png"  alt='Texto que describa la imagen')
            .bgsly2.p-2.mt-3.d-flex.justify-content-center
              h4.text-center.mb-0 La primera fase
          .col-12.p-3.bgcontenido(style="height: 300px")
            p.m-0.ms-4 Análisis, monitoreo y elaboración de pronósticos de estados del clima; temperaturas, lluvias, vientos, radiación solar, humedad relativa y otros parámetros asociados al clima, con mucha relevancia para el desarrollo de cultivos. Con base en esta información, se podrían prever estados de alerta para crecidas, incendios y sequías.      
      .col-12.col-md-9.col-lg-4.mb-3.mb-lg-0.bgt04
        .row.m-0
          .col-12.p-3.bgtitulo
            img(src="@/assets/curso/tema4/img24.png"  alt='Texto que describa la imagen')
            .bgsly2.p-2.mt-3
              h4.text-center.mb-0 La segunda fase
          .col-12.p-3.bgcontenido(style="height: 300px")
            p Permite entregar información a nivel departamental y municipal para la toma de decisiones y el establecimiento de planes de acción.   
      .col-12.col-md-9.col-lg-4.mb-3.mb-lg-0.bgt04
        .row.m-0
          .col-12.p-3.bgtitulo
            img(src="@/assets/curso/tema4/img25.png"  alt='Texto que describa la imagen')
            .bgsly2.p-2.mt-3
              h4.text-center.mb-0 La tercera fase
          .col-12.p-3.bgcontenido(style="height: 300px")
            p La unidad de gestión del riesgo debe informar a las comunidades a través de radiodifusoras y radiotransmisores. La información es obtenida a través de estaciones meteorológicas satelitales y estaciones convencionales ubicadas en distintos municipios. Activar este mecanismo de información y comunicación de manera oportuna permite desarrollar planes de contingencia de forma efectiva ante un determinado evento natural.   
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
