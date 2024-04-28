<script>
import { ref } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import Swal from 'sweetalert2';
export default {
  setup() {
    const isOnline = ref(navigator.onLine);

    window.addEventListener('online', () => {
      isOnline.value = true;
      // Optionally display a success toast
      toast.success('You are back online!');
    });

    window.addEventListener('offline', () => {
      isOnline.value = false;
      toast.error('You are offline.');
      Swal.fire({
        title: 'You are offline!',
        text: 'Please connect to the internet to see the products.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
    });

    return { isOnline };
  }
};
</script>
