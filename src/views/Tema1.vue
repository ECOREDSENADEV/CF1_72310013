<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Previveros y viveros del cultivo de la palma de aceite
    
    p.mb-5 Los previveros y viveros cumplen un papel esencial al permitir la germinación y el desarrollo inicial de plántulas antes de su establecimiento en campo definitivo. Seguidamente, se explicará acerca de la palma de aceite. 
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 <b>Cultivo de la palma de aceite</b>. La palma de aceite (Elaeis guineensis), reconocida como la oleaginosa de mayor rendimiento por hectárea, requiere un manejo técnico adecuado desde sus primeras etapas para garantizar plantaciones productivas y de larga vida útil. En este proceso, los previveros y viveros son fundamentales, ya que permiten la germinación y el desarrollo inicial de plántulas fuertes y uniformes antes de su establecimiento en campo definitivo.
    
    .bg-full-width.bg-color-3
      .px-5.mb-5
        separador
        
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.1 Generalidades del cultivo
        
        p.mb-5 A continuación, se conocerán las generalidades del cultivo de palma de aceite, abordando aspectos como su nombre científico, origen y condiciones climáticas requeridas. Asimismo, se identificarán el tipo de cultivo, su promedio de vida útil y el propósito productivo para el cual se establece.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-6
            .bg-color-4.p-4
              .brbr.mb-3
                p <b>Nombre científico:</b> <em>Elaeis guineensis</em>
              .brbr.mb-3
                p <b>Origen</b> Golfo de Guinea en África.
              .brbr.mb-3
                p <b>Clima</b> Cálido.
              .brbr.mb-3
                p <b>Tipo de cultivo</b> Perenne.
              .brbr.mb-3
                p <b>Promedio de vida útil</b> Entre 24 y 25 años.
              p <b>Propósito</b> Planta oleaginosa que se cultiva para extracción de aceite. Se comercializa para uso culinario, industrial y generación de energía alternativa, 
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Variedades
    
    p.mb-5 La especie palma de aceite presenta tres variedades con características morfológicas y productivas particulares; en la presente sección se describirán sus principales diferencias y atributos, con el fin de comprender su importancia dentro del manejo y aprovechamiento del cultivo.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    
          h3.mb-4.text-center Dura
          p.mb-0.text-center Cuesco grueso, menor pulpa. 
          p.mb-0.text-center Menor rendimiento en aceite.

    
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/4.png', alt='Texto que describa la imagen')
    
          h3.mb-4.text-center Pisífera
          p.mb-0.text-center Cuesco ausente o muy delgado.
          p.mb-0.text-center Femenina estéril, no produce fruto comercial.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
    
          h3.mb-4.text-center Tenera
          p.mb-0.text-center Cuesco delgado, mayor pulpa. Mayor rendimiento en aceite.
          p.mb-0.text-center Ternera se obtiene del cruzamiento de dura y pisífera y se emplea comercialmente.
    
    p.mb-5 La especie de palma de aceite presenta tres variedades: Dura, Pisífera y Tenera. De estas, la variedad Tenera es la utilizada comercialmente para la extracción de aceite, ya que se obtiene del cruzamiento entre las variedades Dura y Pisífera y combina características que favorecen un mayor rendimiento productivo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Rendimiento
    
    .bg-full-width.bg-color-3
      .px-5.mb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.px-5.py-4
              p.mb-0 La palma de aceite (<em>Elaeis guineensis</em>) es el cultivo oleaginoso con mayor rendimiento por hectárea a nivel mundial, alcanzando entre 3 y 5 toneladas de aceite por hectárea al año en condiciones óptimas. Su alta productividad se debe a la cosecha continua durante el año y al elevado contenido de aceite en su fruto, lo que la convierte en una de las fuentes más eficientes de aceite vegetal. La información comparativa está en la siguiente tabla.
        
        .row.justify-content-center
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Rendimientos de algunos cultivos oleaginosos.
            .tabla-a.color-acento-contenido.mb-5.tbl
              table
                caption Nota: TECHNOSERVER (2009).
                thead
                  tr
                    th.bg-color-10 Cultivo
                    th.bg-color-10 Rendimiento (Kg. Aceite/Ha/año)
                tbody
                  tr.bg-color-sintesis
                    td Palma africana (<em>Elaeis guineensis</em>)
                    td 3000 – 5000
                  tr.bg-color-white
                    td Cocotero (<em>Cocos nucifera</em>)
                    td 1500 – 3000
                  tr.bg-color-sintesis
                    td Girasol (<em>Helianthus annuus</em>)
                    td 400 – 500
                  tr.bg-color-white
                    td Cacahuate (<em>Arachis hypogaea</em>)
                    td 400 – 500
                  tr.bg-color-sintesis
                    td Soya (<em>Glycine max</em>)
                    td 150 – 220

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Condiciones agroecológicas
        
        p.mb-5 Las principales condiciones agroecológicas del cultivo de palma de aceite determinan su adecuado crecimiento, desarrollo y productividad. En este apartado se describen los factores ambientales y edáficos que influyen en su adecuado establecimiento y rendimiento. 
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.order-lg-2
            SlyderF(columnas="col-12 col-lg-6").p-lg-4
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 A
                p.text-center Se desarrolla en altitudes que van desde los 0-500 msnm.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 B
                p.text-center La temperatura óptima para su desarrollo debe esta entre 25 a 28ºC.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 C
                p.text-center La humedad relativa de la zona debe ser superior al 75%.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 D
                p.text-center Las precipitaciones óptimas deben estar 1800 - 2200 mm al año, aproximadamente 150 mm al mes.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 E
                p.text-center Por ser una planta heliófila, requiere de aproximadamente 1500 horas luz al año.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 F
                p.text-center La palma de aceite tiene un óptimo desarrollo en suelos profundos, con texturas francas, buen contenido de materia orgánica y bien drenados.
              .bg-color-white.tarjeta.p-4.h-100.box-shadow.d-flex.flex-column.align-items-center
                img(src='@/assets/curso/tema1/14.svg' alt='AvatarTop' style="max-width: 115px").mb-3
                //- Contenedor del círculo centrado
                .bg-color-6.tarjeta.d-flex.justify-content-center.align-items-center.mb-4(style="width: 50px; height: 50px; border-radius: 50%;")
                  h3.mb-0 G
                p.text-center Pendientes inferiores al 12%.
          .col-md-8.col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/7.png', alt='Descripción de la imagen')
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Características de la palma de aceite
    
    p.mb-5 En esta sección se presentan las principales características de la palma de aceite, destacando sus aspectos morfológicos y productivos. Estos elementos permiten comprender mejor su desarrollo, adaptación y potencial en el ámbito agroindustrial.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/15.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Raíces
              p.mb-0 El sistema radicular de la palma se desarrolla a partir del bulbo de la base del tallo. Gran parte de sus raíces son superficiales, concentrándose en los primeros 50 cm del suelo; sin embargo, las raíces de anclaje pueden alcanzar profundidades de 1 hasta 15 metros y la cantidad de raíces absorbentes que están alrededor de la palma alcanzan a llegar en un radio de 3.50 a 4.50 metros.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/16.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Tallo
              p.mb-0 También denominado estipe, que comunica el sistema radicular con las hojas, el cual crece entre 30 y 50 cm por año y puede alcanzar hasta 30 m. Se caracteriza por formar gruesas escamas cuando es joven, por ser de forma cónica, es ancho en el bulbo o base y delgado en el ápice.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/17.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Hojas
              p.mb-0 Las hojas son pinnadas, de 5 a 7 m de longitud; una palma adulta puede tener entre 30 y 49 hojas funcionales. Estas se componen de un peciolo de aproximadamente 1.5 m con espinas laterales y un raquis que soporta entre 200 y 300 foliolos que se insertan alternadamente en las caras laterales.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/18.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Inflorescencia
              p.mb-0 Es un espádice formado por un pedúnculo y un raquis central ramificado. Estas se producen en la axila de cada una de las hojas. La planta es monoica, es decir, que posee flores tanto femeninas como masculinas, pero requieren el transporte de polen de una planta a otra para su fecundación, por lo cual, es alógama porque su polinización es cruzada. Una vez fecundada la inflorescencia femenina da origen al racimo.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/19.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Fruto
              p.mb-0 Es una drupa de forma redonda a ovoide, los cuales conforman el racimo que puede contener en promedio entre 1200 y 1500 frutos. Su longitud puede variar de 3 a 6 cm, con un peso aproximado de 5 a 12 gramos. Está formado por: el exocarpio que tiene la piel lisa y brillante, el mesocarpio que es la pulpa o tejido fibroso que contiene las células con aceite, el endocarpio que es una nuez o semilla compuesta por un cuesco lignificado y el endospermo que es una almendra aceitosa o palmiste (TECHNOSERVER, 2009).
    
    separador
    
    .bg-full-width.bg-color-3
      .px-5.mb-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Selección de material vegetal

        p.mb-5 La selección adecuada del material vegetal es fundamental para garantizar altos rendimientos y una óptima calidad del aceite, asegurando así la rentabilidad del cultivo. Por ello, es indispensable elegir semillas certificadas que cumplan con estándares técnicos y fitosanitarios. Asimismo, se recomienda adquirirlas únicamente de proveedores reconocidos que respalden su calidad e inocuidad.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Características de las semillas
        
        p.mb-5 Antes de profundizar en las características de las semillas de la palma de aceite, se conocerá inicialmente ¿Cómo es la semilla?

        .row.justify-content-center
          .col-lg-10
            .bg-color-4.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/20.png', alt='alt')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") La semilla de la palma de aceite es la nuez que queda después de la extracción del mesocarpio aceitoso. Consta de un cuesco o endocarpio y de una, dos o tres almendras; pero comúnmente contiene solo una almendra. La semilla puede tener un tamaño en 2 cm de largo y un peso aproximado de 2 gr. Sin embargo, el tamaño varía mucho y depende del grosor de la cáscara como del tamaño de la almendra.

        p.mb-5 Las características de las semillas constituyen un aspecto fundamental para el establecimiento exitoso del cultivo y las estudiaremos a continuación.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/21.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Cuesco o endocarpio
              p.mb-0 Es la estructura que protege el embrión, los poros germinales, el ovario tricarpelar y la almendra. Dentro del cuesco están las almendras o endospermo donde se encuentra el embrión. Y en él se encuentran los órganos que son importantes en la germinación de la semilla como el cotiledón. Cabe anotar, que del embrión nace la plúmula y la radícula de la semilla.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/22.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Poro germinal
              p.mb-0 Es un tapón de fibras que se descubre durante la germinación. 
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/23.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Plúmula
              p.mb-0 Esta es la estructura recta que da origen a las hojas. Alcanza una longitud de 1.5 cm.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/24.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Radícula
              p.mb-0 Es la estructura más larga y blanca que tiene la semilla la cual da origen a la raíz, puede presentar curvaturas. Alcanza una longitud de 2.5 a 3.5 cm.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/25.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Raíces adventicias
              p.mb-0 Son pequeños y finos pelos que se desarrollan desde la radícula.
      
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Crecimiento y desarrollo de la semilla
    
    p.mb-5 En lo sucesivo, se detallarán los aspectos más relevantes sobre el crecimiento y el desarrollo de la semilla de la palma de aceite.
    
    .bg-full-width.bg-color-3
      .px-5.mb-5
        .bg-color-4.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/26.png', alt='alt')
            .col-lg
              .p-4
                p(data-aos="fade-up") El proceso de germinación de la semilla tarda entre 60 y 90 días (2-3 meses). La plúmula no sale hasta que la radícula no haya alcanzado un centímetro de largo; estas deben ser de color blanco cremoso brillante. Las raíces adventicias se producen por encima de la unión de la radícula con la plúmula y dan origen a raíces secundarias antes de que haya salido la primera hoja. 
                p La radícula continúa creciendo por más o menos 6 meses y alcanza casi 15 centímetros de largo y de ahí en adelante se desarrollan numerosas raíces primarias.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Semillero
        
        p.mb-5 Para ampliar la información sobre el semillero de la palma de aceite, se presenta el siguiente podcast, en el cual se explican detalladamente los aspectos más relevantes del tema.

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .row.bg-color-7.tarjeta.px-5.py-4.align-items-center.justify-content-center
              .col-md-5.col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/28.svg", data-aos="zoom-in")
              .col-lg-7
                h2(data-aos="fade-left").mb-4 Pódcast
                
                TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                  texto="El ritmo de la cuenta T: Débitos, créditos y saldos"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Clasificación de las semillas
    
    p.mb-5 Conocer la clasificación de las semillas de la palma de aceite es vital para garantizar las condiciones adecuadas para realizar el proceso, considerar los criterios técnicos pertinentes, entre otros aspectos, por lo cual, en este punto los detallaremos cada uno.

    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0 Condiciones para la clasificación de las semillas
    
    p.mb-5 A continuación, se presentan algunas condiciones mínimas para el manejo y clasificación de las semillas, considerando que tienen un tejido muy delicado y debe evitarse la ruptura de las partes más sensibles como la plúmula y la radícula.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/29.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Sitio de trabajo
              p La clasificación de semillas se debe hacer en un sitio fresco, a temperaturas inferiores de 35ºC y nunca bajo exposición solar o a la lluvia.  Si el sitio de trabajo está muy despejado se hace un cobertizo para brindar sombra suficiente para recibir, desempacar y manejar la semilla. 
              p.mb-0 Para facilitar el trabajo del operario, el proceso se realiza sobre una superficie plana (mesa) y amplia de acuerdo con la cantidad de semillas a clasificar.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/30.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Materiales para utilizar
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Tela de algodón o toalla de papel.  
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Agua potable o agua destilada. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Desinfectante. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Atomizador o recipiente espray previamente desinfectado. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Tazas o bandejas plásticas previamente desinfectadas.  
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color.bg-color-8
                  | Planillas para registro. 
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/31.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Seguridad e higiene
              p Para manipular las semillas, se deben llevar a cabo acciones para evitar la contaminación de éstas y garantizar la protección de la persona que realiza la labor. 

              p.mb-0 De acuerdo con lo anterior, se debe hacer uso de la indumentaria necesaria como cofia o gorra para el cubrimiento de la cabeza; usar bata antifluido limpia, pantalón de tela resistente (jean o dril), y calzado que proteja de la humedad (botas plásticas preferiblemente), usar guantes de examinación (vinilo, látex o nitrilo), en caso de no hacerlo, se procura una rigurosa limpieza de manos del operario. Igualmente se recomienda desinfectar las áreas de las superficies y los recipientes donde se colocará la semilla clasificada.

    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0 Criterios técnicos de clasificación
    
    p.mb-5 En el desarrollo del tema, se presentan los diferentes criterios técnicos que deben considerarse durante la clasificación, así como las características que puede presentar una semilla anormal.

    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/32.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
          div(titulo="Sanidad")
            p.ms-5 Hace referencia a las semillas que presentan signos de alguna enfermedad, los cuales se manifiestan claramente sobre la superficie del cuesco, la plúmula o radícula de la siguiente manera:
            .row.mb-5.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
              .col-lg-7.order-lg-1
                ul.lista-ul--color.ms-5
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Presencia de mohos de cualquier color, lo cual es un indicio del ataque de hongos.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Presencia de moteados o tejido necrosado; con puntos castaños en la plúmula o radícula, usualmente se manifiesta, por una fitotoxicidad.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Presencia de tejidos blandos, que indica el ataque provocado por bacterias, que generalmente se manifiesta en una pudrición del tejido comprometido.
          div(titulo="Daños mecánicos")
            p.ms-5 Se presentan como resultado de la manipulación inadecuada de las semillas durante el proceso de germinación, embalaje, manejo previo, y durante la siembra en el vivero. Las principales características de este tipo de daño son:
            .row.mb-5.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/34.png", data-aos="zoom-in")
              .col-lg-7.order-lg-1
                ul.lista-ul--color.ms-5
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Ruptura parcial o total de la plúmula. 
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Ruptura parcial o total de la radícula.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Ruptura parcial o total de la plúmula y radícula.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Ruptura parcial o total del cuesco.
          div(titulo="Deformaciones o anormalidades")
            p.ms-5 Las semillas pueden presentar deformaciones o anormalidades que afectan su desarrollo; por esta razón, es necesario tener en cuenta las siguientes características de semillas que pueden presentar los siguientes defectos:
            .row.mb-5.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0.order-lg-2
                figure
                  img(src="@/assets/curso/tema1/35.png", data-aos="zoom-in")
              .col-lg-7.order-lg-1
                ul.lista-ul--color.ms-5
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Semillas que no han germinado.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Ausencia de la plúmula o radícula como respuesta a deficiencias en el manejo durante el proceso de germinación.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Retorcimiento de plúmulas o radícula. 
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Plúmulas o radículas demasiado desarrolladas, es un indicativo de anormalidad.
                  li.mb-3.d-flex
                    i.fas.fa-circle-check.bg-color.bg-color-8
                    | Semillas que no han diferenciado plúmula y radícula perfectamente. 
    
    div.bg-color-7.tarjeta.p-3.d-inline-block.mb-5
      h3.mb-0 Proceso de clasificación
    
    p.mb-5 El proceso de clasificación de las semillas de la palma de aceite es una etapa clave para asegurar la calidad del material vegetal. Ahora abordaremos cada uno de estos.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/36.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Extracción y disposición inicial
              p.mb-0 Se retiran cuidadosamente las semillas de la bolsa y se extienden sobre una superficie limpia y desinfectada, cubierta con tela de algodón o toalla de papel.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/37.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Control de condiciones ambientales
              p.mb-0 No se deben manipular semillas cuando la temperatura supere los 35 °C ni en ambientes extremadamente secos o húmedos. 
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/38.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Verificación y ajuste de humedad
              p.mb-0 Las semillas deben conservar su color negro brillante, indicativo de buena humedad. Si se tornan opacas o grisáceas, se aplica agua limpia con atomizador sin exceder la superficie del cuesco.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/39.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Clasificación técnica
              p.mb-0 Se separan las semillas conforme a los criterios técnicos de selección previamente establecidos.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/40.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Manejo de semillas sanas
              p.mb-0 Las semillas aptas se colocan en recipientes plásticos (máximo 100 unidades) con agua o cubiertas con tela húmeda y se trasladan al área de siembra.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/41.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Separación de semillas mellizas
              p.mb-0 Las semillas dobles se apartan para ser sembradas en secciones especiales del vivero o previvero.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/42.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Descarte por daños mecánicos
              p.mb-0 Las semillas con golpes o fisuras se eliminan, ya que no producirán plántulas vigorosas.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/43.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Manejo de semillas enfermas
              p.mb-0 Las semillas con signos de enfermedad se retiran, registran e incineran para evitar contaminaciones.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/44.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Registro de semillas anormales
              p.mb-0 Todas las semillas anormales o enfermas deben anotarse en una planilla de control.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/45.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Control de calidad y reclamación
              p.mb-0 Si el porcentaje de descarte supera el 3 %, se debe realizar la reclamación al proveedor, conservando muestras o fotografías como evidencia.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Vivero
    
    p.mb-5 El vivero es un espacio destinado a la producción y cuidado de plántulas bajo condiciones controladas que favorecen su crecimiento y desarrollo inicial. En esta etapa se conocerá todo lo relacionado.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-3.p-md-4(titulo="Vivero")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Vivero
            p Los viveros constituyen la fase inicial y determinante en los proyectos de palma de aceite, ya que el manejo brindado en esta etapa influye directamente en el crecimiento, la precocidad, el rendimiento y los costos del cultivo en campo. Su objetivo es producir plantas vigorosas y resistentes, capaces de expresar tempranamente su potencial productivo, mediante un proceso que puede desarrollarse en una o dos etapas (previvero y vivero principal), según los recursos y necesidades del productor.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/46.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Selección del lugar del vivero")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Selección del lugar del vivero
            p Con el fin de lograr una mejor producción y el bajo costo de producción del material vegetal, la selección del mejor lugar para la instalación del previvero y vivero se convierten en parámetro fundamental que evitará sobrecostos y promoverá mayores beneficios futuros. Por lo tanto, se requieren las siguientes características del lugar:
            ul.lista-ul--color.ms-3
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Buen acceso por caminos y cerca a los sitios de plantación. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Protección contra fuego, inundación, vientos, depredadores y de caída de árboles dentro del vivero. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Facilidad de obtener agua limpia sin sedimentos y contaminación, y con buenas propiedades físicas y químicas. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Disponibilidad cercana de buen material de sustrato o suelo para el embolsado. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Debe ser un sitio centralizado frente a los insumos de agua y sustrato, y frente al área de plantación. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Preferiblemente terrenos planos, no inundables. 
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-8
                | Distancias considerables de bosques (mayores a 20 metros).
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/47.png', alt='Imagen de acompañamiento')
      .p-3.p-md-4(titulo="Sustrato")
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Sustrato
            p El sustrato para llenar las bolsas debe obtenerse de la capa superior del terreno (0 a 20 cm), debe tener condiciones físicas y químicas excelente, para facilitar el drenaje y permitir un crecimiento óptimo de las plantas. Si no está suficientemente disgregado, se debe acondicionar hasta que permita ser manipulado fácilmente, sin pulverizarlo o tamizarlo, ya que esta destruye su estructura. Si eventualmente el suelo es pobre en nutrientes, al determinar su fertilidad, se le puede agregar fertilizante compuesto N-P-K en una cantidad de 2 gramos por bolsa (1825 kg de peso), y algún fertilizante orgánico (compost), nunca superando el 10% del total de la bolsa y asegurando mezcla homogénea. La mezcla con arena no es recomendable, a excepción de que el suelo disponible sea muy pesado y masivo. Los montículos de suelo deben cubrirse con plásticos o algún otro material para prevenir pérdidas de suelo y nutrientes por lavado. No se recomienda llenar bolsas con suelo húmedo.
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/48.png', alt='Imagen de acompañamiento')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Previvero
    
    p.mb-5 El previvero es una etapa determinante en el establecimiento del cultivo y por esta razón se estudiarán factores a tener en cuenta para el buen manejo de un previvero.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/49.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Etapa inicial en previvero (hasta 90 días)
              p.mb-0 La semilla germinada se desarrolla en bolsa pequeña y a alta densidad por área, lo que facilita el manejo logístico de riego, fertilización, sombra y control fitosanitario, hasta que la plántula esté lista para su traslado al vivero principal.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/50.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Cobertura y manejo del sombrío
              p.mb-0 La estructura debe tener una altura entre 2,0 y 2,20 m, cubierta con polisombra u hojas de palma seca que permitan el 60 % de entrada de luz solar. El sombrío debe retirarse gradualmente antes del trasplante (50 % dos semanas antes y el restante 50 % ocho días antes) para evitar estrés por exposición directa al sol.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/51.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Diseño y dimensiones de las camas
              p.mb-0 Las camas deben medir entre 1,0 y 1,20 m de ancho y hasta 20 m de largo, con separaciones de 0,60 a 0,80 m para facilitar la circulación. Deben elevarse al menos 10 cm sobre el nivel del suelo y orientarse de norte a sur para un mejor aprovechamiento de la luz solar.

    p.mb-5 Para el establecimiento del previvero, abordaremos cómo se realiza una selección del lugar del vivero, la siembra de la semilla, el desarrollo de las plántulas, entre otros.

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/52.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Selección del lugar del vivero
              p.mb-0 Para el éxito del previvero y vivero, es fundamental emplear bolsas de polietileno negro de alta densidad con protección UV y sin material reciclado. En la etapa inicial, se utilizan dimensiones de 20 x 16 cm o 25 x 20 cm (calibre 1) con perforaciones de 0.5 cm para el drenaje. El llenado correcto incluye una capa base de 3 cm de material filtrante y finaliza a 4 cm del borde superior, permitiendo un doblez que refuerza la estructura, evita el estancamiento de agua y previene rupturas del empaque.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/53.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Siembra de la semilla
              p.mb-0 Para la siembra, se dobla el borde de la bolsa, se nivela el sustrato y se deja espacio para aplicar mulch que evite la erosión. La semilla se coloca con la plúmula hacia arriba y la radícula hacia abajo, a 0,5–1 cm de profundidad, compactando suavemente y supervisando para evitar que quede expuesta por el riego o la lluvia.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/54.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Desarrollo de las plántulas en previvero
              p.mb-0 La plántula permanece cerca de tres meses en desarrollo, periodo en el que inicia la fotosíntesis y la absorción de nutrientes. Al mes forma su primera hoja verde y, hacia los dos meses, presenta 3 o 4 hojas y una raíz de 10 a 15 cm, momento en el que puede realizarse el trasplante.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/55.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Selección en previvero
              p.mb-0 Las plantas deben seleccionarse cuatro veces durante su desarrollo: una en previvero (a los 2–3 meses) y tres en vivero, eligiendo plántulas con 3–4 hojas verdes, sanas y bien formadas. En este proceso se eliminan aquellas con anormalidades como hojas rizadas, enrolladas, enanas, cloróticas, torcidas o con alteraciones genéticas; las plántulas dobles se separan al trasplante y el material descartado debe disponerse adecuadamente o aprovecharse para compost.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/56.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Control de maleza, plagas y enfermedades
              p.mb-0 La maleza en las bolsas debe retirarse manualmente y el uso de plaguicidas solo realizarse ante problemas específicos. Es fundamental supervisar diariamente el previvero para prevenir la propagación de plagas, corregir plúmulas torcidas y orientar adecuadamente las bolsas.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/57.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Fertilizantes
              p.mb-0 En los primeros 60 días, las plántulas se nutren principalmente del endospermo, aunque puede presentarse clorosis al retirar la sombra, la cual se corrige con aplicaciones de urea. La fertilización inicia tras la aparición de la primera hoja completa, ajustándose a las condiciones de cada cultivo, priorizando actualmente el uso de abonos orgánicos como Bocashi y caldos microbiales.
          .row.justify-content-center.align-items-center.p-3.p-lg-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/58.png', alt='Imagen de acompañamiento')
            .col-lg-6.mb-4.mb-md-0.order-lg-1
              h4 Riego
              p.mb-0 El riego oportuno es esencial para garantizar el crecimiento óptimo de las plántulas, manteniendo el sustrato húmedo sin excesos ni déficits. Se recomienda ubicar el vivero cerca de una fuente de agua de buena calidad y utilizar microaspersión y <em>mulch</em> para conservar la humedad y reducir malezas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Vivero
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/60.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El vivero puede establecerse a partir de semillas germinadas o de plántulas provenientes del previvero. En el vivero, las palmitas permanecen de 6 a 8 meses si estas proceden del previvero; o de 10 a 12 meses si se siembran a partir de semillas germinadas, para luego llevarlas a campo definitivo. Durante este periodo, la palma pierde su aspecto juvenil y empieza a tener hojas palmeadas verdaderas. El vivero se maneja en bolsas plásticas, sin sombra y una baja densidad por área. (CIRAD, 2008).
    
    p.mb-5 Para el establecimiento del vivero, abordaremos los detalles pertinentes para realizar la selección y llenado de bolsas, la siembra de plantas, el desarrollo de las plantas en vivero, realizar selección en vivero, controlar la maleza, plagas y enfermedades, fertilización, y riego.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-9")
      div(titulo="Selección y llenado de bolsas")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/61.png")
          .col-lg-7.order-lg-1
            p El tamaño recomendado de las bolsas para vivero es de 40 cm de ancho por 50 cm de alto, calibre 2, con perforaciones en la parte inferior para asegurar un buen drenaje y suficiente resistencia para permanecer al menos 12 meses en el vivero. En el llenado, se coloca una capa de material inerte en el fondo para anclaje, luego el sustrato dejando espacio para el doblado de la bolsa y la aplicación de mulch. Se recomienda regar las bolsas antes del trasplante para que el suelo se asiente y completar el llenado si es necesario.
            p.mb-0 La correcta distribución de las bolsas es fundamental para aprovechar la luz solar y favorecer el crecimiento vertical de las plantas. Se recomienda orientar las líneas en dirección Norte-Sur y organizar las bolsas en disposición triangular, con distancias de 90 cm entre bolsas y 78 cm entre filas, permitiendo establecer aproximadamente 12.500 plántulas por hectárea, incluyendo espacios para caminos, drenajes e irrigación.
      div(titulo="Siembra de las plantas")
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/62.png")
          .col-lg-7.order-lg-1
            p Se realiza a los tres meses de edad, periodo en el cual las plantas deben tener de tres a 4 hojas verdaderas, provenientes del previvero. 
            .bg-color-2.p-3
              p El procedimiento del trasplante es el siguiente: 
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Se extrae suelo del centro de la bolsa del vivero con un palín, paladraga o cilindro, cuyo volumen sea mayor que el adobe o cespedón que trae la bolsa del previvero. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | En el fondo del hoyo adicionar 20 gramos de fertilizante a base de fósforo 3 gramos de nematicida; cubrir con una capa de tierra de tal forma que el producto no tenga contacto con las raíces de la planta (INIAP, 2017).
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Se elimina cuidadosamente la bolsa del previvero, evitando la destrucción del cespedón y la ruptura de raíces. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Se introduce el cespedón en el hoyo, cuidando que el nivel superior quede a ras del suelo de la bolsa grande.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Con el suelo extraído de la bolsa, se rellenan los espacios vacíos y se compacta suavemente, para evitar la formación de bolsas de aire y agua dentro de la bolsa del vivero.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Se aplica riego una vez finalizado el trasplante.

        p.mb-0 A estas bolsas en vivero también se brinda protección mediante el uso de cobertura o <em>mulch</em>, los cuales conservan la humedad del suelo de la bolsa, regulan la temperatura del suelo, evitan la erosión del suelo de la bolsa y reducen la emisión de plantas no deseables.

      div(titulo="Desarrollo de las plantas en vivero")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/63.png")
          .col-lg-7.order-lg-1
            p.mb-0 Después de los 4 meses comienzan a aparecer hojas con hendiduras en el ápice con la que le dan una forma bifurcada de las hojas; cinco o seis meses después de la siembra, comienzan a aparecer hojas separadas en otras secciones denominadas foliolos; en este caso la hoja presenta más de 10 de estos foliolos y entonces se dice que las hojas son pinnadas. Después del trasplante, es decir a los 3 o 4 meses de edad, la base del tallo toma la forma de un cono invertido “bulbo” que da origen a las primeras raíces primarias; dentro de esta estructura se encuentran el meristemo que es el punto de crecimiento vertical de la planta durante toda su vida. Igualmente, después de este tiempo de las raíces primarias, salen otras más delgadas que se llaman raíces secundarias, de las cuales, salen posteriormente otras más delgadas que se denominan terciarias y finalmente las cuaternarias.
      div(titulo="Selección en vivero")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/64.png")
          .col-lg-7.order-lg-1
            p La segunda selección en vivero se realiza entre los 6 y 7 meses, evaluando que las plantas presenten hojas bifurcadas y foliolos diferenciados, color verde oscuro sin manchas, buen desarrollo en altura (hasta 50 cm) y diámetro de tronco (5–10 cm), además de una adecuada disposición de las hojas.
            p La tercera selección, a los 8 o 9 meses, exige al menos cinco hojas completamente diferenciadas, ángulos de inserción adecuados (45° y 60°), altura entre 90 y 100 cm y diámetro de 10 a 15 cm, con hojas sanas y sin daños. En esta etapa se identifican y descartan plantas con anormalidades como erectas, juveniles, planas, de entrenudos cortos o largos, quimeras, gigantes o dobladas, la mayoría asociadas a desórdenes genéticos o problemas de manejo.
            p.mb-0 La cuarta selección se realiza a los 12 meses, antes del traslado al campo. Se eliminan las plántulas anormales y se seleccionan aquellas con altura entre 1 y 1,6 m, diámetro del cuello de 15 a 22 cm, de 5 a 8 hojas funcionales bien formadas y sin daños. Con un manejo adecuado, el descarte total en vivero puede oscilar entre el 15 % y el 25 % de las plantas germinadas.
      div(titulo="Control de maleza, plagas y enfermedades")
        p.ms-5 El control de malezas en las bolsas se realiza únicamente en forma manual y periódicamente (cada 15 días), dependiendo de la emergencia de estas. El uso de mulch en las bolsas permite controlar la presencia de estas plantas no deseadas.
        p.ms-5 Las plagas más comunes son el gusano cogollero, la hormiga arriera, la escama de la raíz, ácaros, defoliadores, raspadores y minadores.  Para lo cual, se recomienda hacer uso de las siguientes prácticas de manejo integrado de plagas, antes de decidir usar plaguicidas químicos (IICA, 2006):
        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/65.png")
          .col-lg-7.order-lg-1
            .bg-color-2.p-3
              p El procedimiento del trasplante es el siguiente: 
              ol.lista-ol--cuadro
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span.text-black 1
                  | Realizar muestreo de plagas y benéficos. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span.text-black 2
                  | Preferir el uso de bio-plaguicidas. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span.text-black 3
                  | Utilizar trampas con ferohormonas, trampas amarillas con pegamentos y/o trampas con luz ultravioleta, para identificar niveles de poblaciones de algunas plagas específicas y establecer acciones de control. 
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span.text-black 4
                  | Usar controladores biológicos.

        p.ms-5 Las enfermedades más frecuentes que se presentan en el vivero son: pudrición común de la flecha/arqueo foliar, mancha por <em>Curvularia</em>, mancha y tizón por <em>Helminthosporium</em>, pudrición por <em>Rhizoctonia</em>, antracnosis por <em>Colletotrichum</em>, y la pudrición por <em>Phytophthora</em>.

        .row.mb-3.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/66.png")
          .col-lg-7.order-lg-1
            .bg-color-2.p-3
              p Para el control de estas enfermedades se debe de realizar las siguientes actividades:
              ul.lista-ul--color.ms-3
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Hacer monitoreo de la presencia de las enfermedades. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Proporcionar buen drenaje al vivero. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Eliminar las malezas presentes. 
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Si es necesario eliminar plantas enfermas.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-8
                  | Realizar aplicaciones de fungicidas preferiblemente biológicos. 
      div(titulo="Fertilización")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/67.png")
          .col-lg-7.order-lg-1
            p.mb-0 El programa de fertilización para un vivero debe diseñarse según el lugar donde se establece y la fertilidad del suelo utilizado en el llenado de bolsas. Generalmente, los programas de fertilización se fundamentan en la aplicación de elementos primarios (nitrógeno, fósforo, potasio) y la aplicación de elementos secundarios (calcio, azufre y magnesio), u oligoelementos, dependiendo de la deficiencia de estos. Por consiguiente, se recomienda realizar un análisis al suelo que su utilizará para el llenado de bolsas. En la actualidad se está fomentando la utilización de abonos orgánicos tipo Bocashi o caldos biológicos, para implementar los cultivos orgánicos. El fertilizante debe ser aplicado al suelo de la bolsa, en una franja ancha alrededor de la plántula, evitando el contacto con el follaje o con la raíz, para evitar quemaduras.  
      div(titulo="Riego")
        .row.mb-5.justify-content-center.align-items-center.ms-5
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/68.png")
          .col-lg-7.order-lg-1
            p El suministro adecuado y oportuno de agua, es uno de los aspectos más críticos en un vivero de palma de aceite, por lo tanto, es necesario implementar un sistema de riego que satisfaga los requerimientos hídricos del cultivo, para lograr un crecimiento y desarrollo normal del mismo.
            p.mb-0 El sistema de riego a presión por aspersión es uno de los más utilizados en viveros por su eficiencia, el cual, consiste en suministrar agua sobre la superficie del suelo en forma de lluvia artificial. Uno de los aspectos más importantes en el uso de este sistema, es su diseño y distribución de los aspersores, para garantizar un correcto traslape; comúnmente se distribuyen triangularmente para garantizar una distribución homogénea del agua; además es de fácil operación, proporciona la facilidad de verificar su funcionamiento y efectividad, requiere poca mano de obra y tiene un costo aceptable. 

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
