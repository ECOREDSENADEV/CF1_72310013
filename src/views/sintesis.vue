<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual sintetiza el componente formativo “Cultivo de palma de aceite: previveros, viveros y siembra”. Inicia con los previveros y viveros, donde se abordan las generalidades del cultivo, incluyendo variedades, rendimiento, condiciones agroecológicas y características de la palma de aceite. Continúa con la selección del material vegetal, que comprende las características de las semillas, su crecimiento y desarrollo, el semillero y la clasificación de las semillas según condiciones, criterios técnicos y proceso de clasificación. Posteriormente, presenta el manejo del vivero, diferenciando previvero y vivero, e incluye actividades como selección y llenado de bolsas, siembra, desarrollo y selección de plantas, control de malezas, plagas y enfermedades, fertilización y riego. Finalmente, integra la etapa de siembra en sitio definitivo, que contempla el diseño de la planeación, la preparación del suelo, el trazado de la plantación, el establecimiento de coberturas vegetales y las actividades de alistamiento en vivero, transporte y trasplante de las plantas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
