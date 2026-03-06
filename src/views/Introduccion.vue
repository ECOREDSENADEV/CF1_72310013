<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-1.px-5.py-4
          p.mb-0 El cultivo de palma de aceite se consolida como un importante motor del desarrollo económico, social y agroindustrial del país. En el año 2024, la producción de aceite de palma en Colombia alcanzó 1,72 millones de toneladas, según datos reportados por la Federación Nacional de Cultivadores de Palma de Aceite (Fedepalma); asimismo, entre enero y mayo de 2025 se registró un crecimiento del 10 % en comparación con el mismo periodo del año anterior, alcanzando un volumen acumulado de 908.000 toneladas. 
    

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este comportamiento favorable se atribuye a una mejor distribución de las lluvias en las distintas regiones productoras, al fortalecimiento de las condiciones de nutrición del cultivo y a la implementación de prácticas más eficientes de polinización en materiales híbridos. La palma de aceite constituye, además, la principal fuente de materia prima para la obtención de aceites y grasas destinadas a usos culinarios e industriales. 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        .bg-color-2.px-5.py-4
          p.mb-0 En este componente formativo se abordan las generalidades del cultivo, la selección del material vegetal, el manejo de vivero y el proceso de siembra, desde el reconocimiento del terreno hasta el establecimiento de las plantas en su sitio definitivo. 
</template>

<script>
export default {
  name: 'Introduccion',
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
