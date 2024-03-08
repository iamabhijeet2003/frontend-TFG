<template>
    <div class="services">
      <div v-for="(service, index) in services" :key="index" class="service">
        <img :src="service.icon" class="service-icon rounded-circle" alt="Service Icon">
        <p class="service-title fw-bold fs-5">{{ service.title }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          {
            title: 'Todos nuestros servicios',
            icon: 'https://img.freepik.com/vector-premium/icono-esquema-servicios-premium-vector-arte-linea_1178600-174.jpg'
          },
          {
            title: 'Garantías',
            icon: 'https://img.freepik.com/vector-gratis/cinta-premio_24908-54794.jpg'
          },
          {
            title: 'Financiación',
            icon: 'https://img.freepik.com/vector-gratis/ilustracion-financiera_53876-5902.jpg'
          },
          {
            title: 'Reparaciones',
            icon: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-reparacion-dispositivos-moviles_335657-1896.jpg'
          },
          {
            title: 'Servicios de Apple',
            icon: 'https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg'
          },
          {
            title: 'Recompra',
            icon: 'https://img.freepik.com/vector-gratis/diseno-plano-dibujado-mano-reducir-reutilizar-reciclar-letras_23-2149194688.jpg'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px;
  }
  
  .service {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .service-icon {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  .service-title {
    margin-top: 10px;
  }
  </style>
  