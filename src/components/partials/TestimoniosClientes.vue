<template>
    <div class="testimonials">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="card text-center">
        <img :src="testimonial.image" class="card-img-top rounded-circle text-center mx-auto" style="aspect-ratio: 1;" alt="Cliente">
        <div class="card-body">
          <h5 class="card-title">{{ testimonial.name }}</h5>
          <p class="card-text">{{ testimonial.message }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
          {
            name: 'Angela lopez',
            image: 'https://img.freepik.com/vector-premium/retrato-orgulloso-mujer-joven-largo-pelo-que-fluye-perfil_478440-109.jpg',
            message: '100% satisfecho con mis compras'
          },
          {
            name: 'Carlos Garcia',
            image: 'https://img.freepik.com/vector-gratis/perfil-hombre-barbudo_24908-81067.jpg',
            message: 'Tienda de confianza.'
          },
          {
            name: 'Fidel oltra',
            // image: 'https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-cabeza-calva-dibujada-mano_23-2151088890.jpg',
            image: 'https://img.freepik.com/vector-gratis/hombre-guapo-joven-aislado-diferentes-poses-ilustracion-fondo-blanco_632498-855.jpg',
            message: 'Mejores productos de mercado'
          },
          {
            name: 'Josep Magraner',
            image: 'https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-persona-gorda_52683-118237.jpg',
            message: 'Recomiendo la tienda. '
          },
          {
            name: 'Paula Sanchez',
            image: 'https://img.freepik.com/vector-premium/hermosa-princesa-vestido-verde-cabello-rojo_1116375-2995.jpg',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
          },
          // Puedes añadir más testimonios aquí
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .testimonials {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
  }
  
  .card {
    width: 18rem;
    margin-bottom: 20px;
  }
  </style>
  