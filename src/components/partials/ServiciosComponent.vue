<template>
  <div class="services">
    <div v-for="(service, index) in services" :key="index" class="service">
      <img :src="service.icon" class="service-icon rounded-circle" :alt="service.title">
      <p class="service-title fw-bold fs-5">{{ $t('services.' + service.translation_key) }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'all_services',
          translation_key: 'all_services',
          icon: 'https://img.freepik.com/vector-premium/icono-esquema-servicios-premium-vector-arte-linea_1178600-174.jpg'
        },
        {
          title: 'guarantees',
          translation_key: 'guarantees',
          icon: 'https://img.freepik.com/vector-gratis/cinta-premio_24908-54794.jpg'
        },
        {
          title: 'financing',
          translation_key: 'financing',
          icon: 'https://img.freepik.com/vector-gratis/ilustracion-financiera_53876-5902.jpg'
        },
        {
          title: 'repairs',
          translation_key: 'repairs',
          icon: 'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-reparacion-dispositivos-moviles_335657-1896.jpg'
        },
        {
          title: 'apple_services',
          translation_key: 'apple_services',
          icon: 'https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-fruta-manzana-concepto-icono-fruta-alimentos-aislado-estilo-dibujos-animados-plana_138676-2922.jpg'
        },
        {
          title: 'repurchase',
          translation_key: 'repurchase',
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
