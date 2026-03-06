<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Siembra de palma de aceite en sitio definitivo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-4.px-5.py-4
          p.mb-0 Esta etapa comprende las operaciones para implementar la plantación en el sitio definitivo, que implica la preparación y acondicionamiento del terreno, y finalmente el trasplante, por lo cual, es necesario planificar adecuadamente, para establecer una población de plantas con capacidad de producir frutos de excelente calidad y altos rendimientos. Por lo anterior, se estudiará el reconocimiento del terreno en la siguiente sección.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/2.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Condiciones climáticas 
              p.mb-0 Inicialmente se evalúan las condiciones climáticas de la zona como son: temperatura, humedad relativa, precipitación y brillo solar; de acuerdo, con las necesidades requeridas por la palma de aceite; teniendo en cuenta que estos factores son decisivos pues inciden directamente en el desempeño del cultivo y no se pueden modificar.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Observación del terreno
              p.mb-0 Por otra parte, se debe realizar un reconocimiento ocular del terreno para identificar cauces naturales, topografía, tipo de vegetación existente (bosque primario o secundario), información que indicará el manejo posterior de limpieza y adecuación.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/4.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Planos topográficos
              p.mb-0 Se recomienda contar con planos topográficos del área de producción que incluyan la ubicación de fuentes hídricas, zonas de bosque, información de planimetría y altimetría, con el fin de identificar áreas y pendientes del terreno y facilitar la planificación y diseño de la plantación, como vías, drenajes, sistemas de riego, tamaño de lotes y forma de siembra; además, se prefieren terrenos planos o ligeramente ondulados porque ofrecen mejores rendimientos, mientras que las pendientes pronunciadas incrementan los costos de producción, favorecen la erosión, dificultan las labores de manejo y pueden afectar la productividad del cultivo.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/5.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Análisis de suelos
              p.mb-0 Se recomienda realizar un estudio de caracterización de suelos, siguiendo las indicaciones del asistente técnico, para identificar áreas con condiciones físico-químicas similares, llamadas unidades de manejo agronómico, de las cuales se toman submuestras que luego conforman una muestra representativa de todo el terreno. En cuanto a las características físicas, es fundamental evaluar la profundidad efectiva del perfil, la textura, la estructura, la presencia de capas endurecidas y la capacidad de drenaje, ya que texturas extremas como exceso de arcilla o arena limitan el cultivo de palma de aceite; por ello, los suelos más adecuados son profundos, de textura franca, con buena estructura, sueltos, con adecuada circulación de agua y aire y buena retención de humedad.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Diseño de la planeación
    
    p.mb-5 Se considera la principal actividad para llevar a cabo la logística de cada una de las etapas del cultivo durante aproximadamente 25 años, tiempo que puede durar en producción la palma. En el siguiente video, se conocerán los detalles para realizar un diseño.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema2/6.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h5.mb-0 Para profundizar sobre diseño de la plantación, lo invitamos a que consulte la siguiente lectura complementaria.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Diseño_plantacion.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .bg-full-width.bg-color-3
      .px-5.mb-5
        separador
        
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.2 Labores de preparación del suelo
        
        p.mb-5 El acondicionamiento del terreno para palma se define según el análisis de suelo (textura, estructura y profundidad); si se requiere labranza, primero se deben reducir las malezas para facilitar la aireación y la preparación del suelo. A continuación, se detallarán cada una de las labores de preparación.

        .tarjeta--container.row.mb-5
          .col-lg.tarjeta.color-primario.bg-color-10.p-5.text-white(data-aos="flip-up")
            .row.mb-5
              .col-lg
                figure
                  img(src='@/assets/curso/tema2/7.png', alt='Texto que describa la imagen')
            
            h2.mb-5 Limpieza del terreno
            p La adecuación del terreno inicia con la socola, que consiste en cortar plantas herbáceas o leñosas de bajo y mediano porte para facilitar el ingreso de maquinaria; posteriormente se talan los árboles grandes restantes, conservando las especies ubicadas en áreas de importancia ambiental y manteniendo corredores biológicos, y finalmente se retiran o trozan los residuos vegetales, organizándolos en arrumes longitudinales orientados de norte a sur.
        
          .col-lg.tarjeta.color-acento-contenido.bg-color-11.p-5(data-aos="flip-down")
            .row.mb-5
              .col-lg
                figure
                  img(src='@/assets/curso/tema2/8.png', alt='Texto que describa la imagen')
            
            h2.mb-5 Labranza
            p Antes de la siembra se realizan labores de labranza con tractor para romper capas endurecidas y mejorar las condiciones del suelo, utilizando implementos como el arado (especialmente en suelos con mal drenaje, aunque su uso debe ser limitado por el impacto que genera), cinceles y subsoladores que descompactan sin voltear las capas, y rastras que afinan y airean la superficie. La preparación del terreno puede variar según el tamaño y topografía del lote, y debe considerar factores como textura, estructura y humedad del suelo, ya que los suelos pesados requieren mayor intervención y los livianos menos, procurando trabajar con una humedad adecuada para evitar compactación y erosión.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Trazado de la plantación
    
    p.mb-5 Para iniciar las actividades del trazado, se debe verificar el estado de limpieza del área; para ello se observan los obstáculos que impiden la visualización del alineado y de las marcaciones, y se procede a retirarlos, cuidando que no queden arbustos, malezas, ni objetos cuya altura sea superior a 50 centímetros. Tras lo anterior, estudiaremos los pasos para realizar un buen trazado.

     AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
      div(titulo="Verificación y preparación del área")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/9.png")
          .col-lg-7.order-lg-1
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Revisar el estado de limpieza del terreno antes de iniciar el trazado.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Identificar obstáculos que impidan la visualización del alineado y las marcaciones.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Retirar arbustos, malezas y objetos con altura superior a 50 cm.
      div(titulo="Demarcación del lote")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/10.png")
          .col-lg-7.order-lg-1
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Ubicar los lotes de siembra según su nomenclatura en el plano.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Delimitar linderos o perímetro del lote.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Señalar claramente:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-12
                | Vías de acceso.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-12
                | Puntos de referencia indicados en el diseño.
      div(titulo="Materiales requeridos")
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/11.png")
          .col-lg-7.order-lg-1 
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Estacas para marcación.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Jalones o varas de 2 metros de altura.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Cinta métrica.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Cuerdas para trazado.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Martillo o mazo de madera.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Brújula o GPS (según técnica utilizada).
      div(titulo="Elementos de protección personal (EPP)")
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/12.png")
          .col-lg-7.order-lg-1 
            p Los operarios deben utilizar:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Sombrero
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Camisa manga larga.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Guantes de carnaza.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Botas de trabajo
            p Riesgos principales:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Cortaduras o impactos (riesgo mecánico).
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Cortaduras o impactos (riesgo mecánico).
      div(titulo="Sistema de siembra y distancias")
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/13.png")
          .col-lg-7.order-lg-1 
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Sistema de siembra: tresbolillo o en triángulo.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Distancia entre plantas: 9 metros.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Distancia entre hileras: 7,8 metros.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Método de trazado: triangulación.
      div(titulo="Procedimiento de trazado por triangulación")
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 1.
              span Procedimiento de trazado por triangulación.
            figure
              img(src="@/assets/curso/tema2/14.png", alt="Infografía que describe conceptualmente el procedimiento de trazado por triangulación en plantaciones, utilizando una línea base, mediciones equidistantes y formación de triángulos equiláteros para ubicar puntos de siembra y generar líneas paralelas uniformes que aseguren adecuada distribución del cultivo.")
          .col-lg-7.order-lg-1 
            LineaTiempoD.color-secundario
              div(numero="Paso 1" titulo="Línea de referencia")
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Demarcar una línea base orientada de norte a sur con brújula.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Colocar estacas en los extremos.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Esta línea sirve como base para el estaquillado en triángulo
              div(numero="Paso 2" titulo="Marcación sobre la línea base")
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Marcar con estacas los puntos a la distancia definida para la siembra.
              div(numero="Paso 3" titulo="Preparación de la cuerda") 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Realizar tres anillos cada 9 metros sobre la cuerda de trazado.
              div(numero="Paso 4" titulo="Formación del triángulo equilátero") 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Colocar el primer y último anillo sobre dos estacas consecutivas.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Halar el anillo central hasta formar un triángulo equilátero.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Colocar una estaca en el vértice formado.
              div(numero="Paso 5" titulo="Ubicación de puntos de siembra") 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Cada vértice del triángulo corresponde a un sitio para sembrar una palma.
              div(numero="Paso 6" titulo="Formación de líneas paralelas") 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Continuar formando triángulos sucesivos a lo largo de la línea base.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Verificar que la distancia entre líneas sea de 7,8 m.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Revisar periódicamente las medidas para evitar alteraciones en la simetría.
              div(numero="Paso 7" titulo="Cobertura total del lote") 
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-8
                    | Repetir el procedimiento hasta cubrir toda el área.
      div(titulo="Verificación final del trazado")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/15.png")
          .col-lg-7.order-lg-1
            ul.lista-ul--color
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Confirmar que el lote quede completamente estaquillado.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Identificar y eliminar estacas correspondientes a las vías.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Verificar visualmente la simetría de las líneas de siembra.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Establecimiento de coberturas vegetales
    
    p.mb-5 Una práctica significativa para minimizar el impacto de la lluvia, el sol y el viento sobre el suelo, consiste en mantener sobre la superficie una capa vegetal que se conoce como coberturas. Estas son plantas de alta densidad y rápido desarrollo, asociadas con el cultivo de palma que generan importantes beneficios, como las que veremos en esta sección.
    
    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/16.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Rastreras
              p.mb-0 Son de porte rastrero, entre las que se destacan Kudzu (Pueraria phaseoloides), Calopogonium (Calipogonium muconoides), Maní forrajero (Arachis pintoi), Mucuna (Mucuna bracteata), Centrosema pubescens, y otras.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/17.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Semi-arbustivas
              p.mb-0 Son de porte bajo o pueden alcanzar hasta 2 o 3 metros de altura, dependiendo de la especie usada y poseen la ventaja de que no son trepadoras. Dentro de estos se destacan el Desmodium ovalifolium, Desmodium vellotinum y fríjol (Canavalia ensiformes).
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/18.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Árboles y arbustos
              p Son de porte alto, pueden crecer desde 2 hasta 10 metros de altura. Entre estos tenemos: Flemingia congesta, Tephrosia sp, Cajanus cajan (guandul). 
              p Algunos de este tercer grupo son ideales para la protección de canales de drenajes primarios y para orillas de carreteras y en canales secundarios, si se podan correctamente.
              p Dependiendo la especie seleccionada como cobertura, se siembran entre las hileras al voleo o en surcos. Se recomienda apartar la cobertura del plato de la palma en ciclos periódicos de 3 a 8 semanas, dependiendo principalmente del tipo de crecimiento de la especie utilizada (Kudzu, mucuna, etc.).

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Siembra de plantas en sitio definitivo
          
    p.mb-5 La siembra debe llevarse a cabo en el momento en que la disponibilidad de humedad en el suelo sea óptima, que permita el adecuado desarrollo radicular y crecimiento de la palma; por esta razón se debe sembrar al inicio de periodo de lluvias. La edad del trasplante puede variar de un lugar a otro, en general se consideran que este debe realizarse a los doce o trece meses de edad en el vivero. En este punto se conocerá cada una de sus etapas.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/19.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Alistamiento en vivero
              p.mb-0 Antes de transportar el material vegetal al sitio definitivo se deben tener en cuenta que 3 o 4 semanas antes de la siembra, se giren las bolsas sobre su mismo eje unos 180º para separar raíces que hayan pasado de la bolsa al suelo del vivero y una semana antes del trasplante se le aplique riego a las plantas. Estas deben ser entregadas marcadas con pintura alrededor de la base de tal manera que sirva como referencia para el operario en el momento de hacer la siembra.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/20.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Transporte
              p.mb-0 El transporte de las plantas desde el vivero hasta el sitio definitivo debe realizarse un día antes de la siembra, utilizando carretas con tractor, volquetas o camiones cuando las distancias son mayores. Durante el cargue, es fundamental manipular las bolsas con cuidado, sosteniéndolas por la base y el cuello de la palma, evitando golpes o lanzamientos que puedan romper la bolsa, dañar las hojas o exponer las raíces. Finalmente, las plantas se distribuyen en el borde de cada lote para luego llevarlas a los puntos de siembra.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema2/21.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Trasplante
              p La profundidad de siembra depende del tipo de suelo y del método utilizado; en suelos con baja materia orgánica, la superficie del suelo debe quedar al mismo nivel que el sustrato de la bolsa. El hoyo debe hacerse en el momento de la siembra, con 10 cm más de diámetro y 5 cm más de profundidad que la bolsa, para permitir un buen apisonamiento y evitar espacios de aire que afecten las raíces.
              p El trasplante consiste en rasgar y retirar la bolsa, aplicar correctivos o fertilizantes si es necesario, colocar la palma cuidadosamente en posición vertical asegurando que el cuello quede al nivel del suelo, apisonar bien la tierra alrededor y, finalmente, recoger y disponer adecuadamente las bolsas y estacas utilizadas.



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
