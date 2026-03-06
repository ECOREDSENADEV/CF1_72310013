<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cultivo de palma de aceite: previvero, vivero y siembra.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> conocer e identificar el establecimiento de previvero, vivero y siembra de la palma de cera.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            'De acuerdo con su ciclo de vida y la duración de su etapa productiva, ¿cómo se clasifica técnicamente el cultivo de la palma de aceite?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cultivo transitorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cultivo perenne.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cultivo bianual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cultivo de ciclo corto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la razón principal por la cual la palma de aceite se considera la especie de planta oleaginosa más importante a nivel mundial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque su rendimiento de extracción de aceite por hectárea es superior al de cualquier otra especie de planta oleaginosa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque es la única especie vegetal capaz de producir aceite apto para el consumo humano y procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque requiere una menor inversión económica en comparación con otros cultivos de semillas oleaginosas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque es la planta más antigua utilizada por el hombre para la obtención de grasas vegetales y lubricantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el rango de altitud sobre el nivel del mar (msnm) recomendado para el desarrollo óptimo y la máxima productividad de la palma de aceite?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Entre los 1.500 y 2.500 msnm: Ya que las temperaturas bajas de montaña favorecen la concentración de ácidos grasos en el fruto',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Entre los 0 y 500 msnm: Debido a que requiere condiciones de clima cálido y alta radiación solar, las cuales disminuyen a mayores alturas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Por encima de los 3.000 msnm: Porque es una planta rústica que necesita periodos de heladas para estimular la floración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente a los 1.000 msnm: Puesto que necesita una presión atmosférica exacta para que los estomas de las hojas realicen la fotosíntesis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 4,
          texto:
            '¿De qué factores depende principalmente la variación en el tamaño de la semilla de la palma de aceite?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Del método utilizado para la extracción del mesocarpio aceitoso del fruto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Del número de almendras que contiene la nuez, pudiendo llegar hasta tres.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Del grosor de la cáscara (endocarpio) y del tamaño de la almendra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Del peso aproximado de la nuez, el cual debe ser estrictamente de 2 gramos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el tiempo estimado que tarda el proceso de germinación de la semilla de palma de aceite?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De 15 a 30 días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exactamente 6 meses.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre 60 y 90 días.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Más de un año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 6,
          texto:
            '¿Por qué es fundamental realizar una adecuada clasificación de las semillas de palma de aceite antes de la siembra?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para determinar el precio de venta en el mercado nacional e internacional según el tamaño de la almendra; lo cual, contribuye a incremento de los ingresos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para asegurar que se cumplan los requisitos de siembra al permitir un manejo específico o descartar semillas con plagas y enfermedades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para acelerar el proceso de germinación y reducir el tiempo de crecimiento de la radícula a menos de 60 días y de esta manera, promover el crecimiento de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para identificar cuántas almendras contiene cada cuesco y predecir así la producción futura de aceite, con análisis de tiempos y movimientos, reduciendo los desperdicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo principal que debe cumplir un vivero en los proyectos de palma de aceite?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar que las palmas produzcan frutos de gran tamaño y consistencia, únicamente después de la primera década de siembra en campo o cultivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir la fase de crecimiento en campo o sitio para que la planta alcance su madurez total pertinente antes de ser trasplantada definitivamente al lote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir los costos y gastos de mantenimiento mediante el uso de plántulas que no requieran cuidados especiales durante los primeros años de vida de la planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Producir palmas resistentes que puedan expresar de forma temprana su potencial de producción y características deseables en el campo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la principal razón por la que la palma de aceite supera en importancia a otras especies oleaginosas en el mercado global?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La sencillez de su proceso en cultivo y cosecha mecanizado, que facilite su recolección y tratamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su capacidad de adaptación a climas templados y fríos para realizar diferentes procesos industriales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Su mayor rendimiento de extracción de aceite por unidad de superficie (hectárea).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Que es la única planta que produce aceite para consumo industrial, mecanizado y fertilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de las siguientes afirmaciones describe mejor la importancia de los factores climáticos (temperatura, humedad, precipitación y brillo solar) en el establecimiento de un cultivo de palma de aceite?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Son variables secundarias que pueden ajustarse mediante tecnología agrícola si el terreno es apto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Son elementos decisivos que determinan el desempeño del cultivo y no pueden ser alterados por el ser humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Son factores que solo deben evaluarse después de haber seleccionado la semilla y el tipo de fertilizante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Son condiciones opcionales cuya medición depende exclusivamente de la ubicación geográfica de la zona.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 10,
          texto:
            'Para que el análisis de suelo sea correcto, se deben identificar áreas con condiciones parecidas llamadas "unidades de manejo agronómico". ¿Para qué se hace esto principalmente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para saber en qué parte del terreno se debe construir la casa del administrador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para decidir qué color de herramientas se van a comprar para la cosecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para separar el terreno en zonas similares y sacar de cada una las submuestras de suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para medir únicamente la sombra que dan los árboles más altos del predio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 11,
          texto:
            'El diseño de la plantación es la actividad principal para organizar la logística del cultivo. ¿Por qué es tan importante realizar un apropiado diseño desde el principio?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque de este diseño depende cómo se implementará y manejará el cultivo durante sus 25 años de producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque un buen diseño permite cambiar la ubicación de las palmas cada año si el clima no es favorable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque el diseño sirve únicamente para decidir el color de los uniformes de los trabajadores de la plantación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque si el diseño es bonito, la palma producirá aceite de diferentes colores de manera natural.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la primera actividad que debe realizarse antes de usar equipos de aireación o escarificación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicar fertilizantes químicos para cambiar la textura del suelo de forma inmediata.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar o disminuir la altura de las malezas para que los equipos puedan entrar fácilmente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Inundar el terreno con agua para que las capas endurecidas se ablanden solas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sembrar las plántulas de palma para ver si el suelo realmente necesita ser preparado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 13,
          texto:
            'La limpieza del terreno para un cultivo de palma de aceite debe realizarse de forma total, incluyendo la tala de árboles en nacederos, ríos y humedales, para garantizar que la maquinaria pueda entrar sin obstáculos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 14,
          texto:
            'El hoyo para la siembra de una palma de aceite debe tener exactamente el mismo tamaño de la bolsa para asegurar que la palma quede apretada y no entre aire a las raíces',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
        {
          id: 15,
          texto:
            'La siembra de la palma de aceite debe realizarse preferiblemente al final del periodo de lluvias, cuando la palma tiene una edad de 6 meses en el vivero.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Su respuesta es correcta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta es incorrecta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
