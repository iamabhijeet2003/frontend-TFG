<!-- frontend/src/components/RegisterUser.vue -->
<template>
  <div class="tw-flex font-poppins tw-items-center tw-justify-center container-fluid login-container">
    <div class="tw-flex tw-justify-center tw-items-center tw-dark:bg-gray-800">
      <div class="tw-grid tw-gap-10">
        <div id="back-div" class="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-rounded-[26px] tw-m-5">
          <div
            class="tw-border-[20px] tw-border-transparent tw-rounded-[20px] tw-dark:bg-gray-900 tw-bg-white tw-shadow-lg tw-xl:p-10 tw-2xl:p-10 tw-lg:p-10 tw-md:p-10 tw-sm:p-2 tw-m-2">

        <form @submit.prevent="registerUser" class="tw-space-y-6 mx-5 px-3">
          <h1 class="tw-pt-8 tw-pb-6 tw-font-bold tw-dark:text-gray-400 tw-text-5xl tw-text-center tw-cursor-default mx-5">REGISTER</h1>
          <div class="tw-mb-4">
            <label for="email" class="form-label text-black">Email <i
                class="bi bi-person-fill text-primary fs-5"></i></label>
            <input v-model="formData.email" placeholder="Email" class="input form-control" id="email" />
          </div>
          <div class="tw-mb-4">
            <label for="firstName" class="form-label text-black">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model="formData.firstName" class="input form-control">
          </div>
          <div class="tw-mb-4">
            <label for="last" class="form-label text-black">Last Name</label>
            <input type="text" name="last" id="last" v-model="formData.last" class="input form-control">
          </div>
          <div class="tw-mb-4">
            <label for="pwd" class="form-label text-black">Password <i
                class="bi bi-lock-fill text-primary fs-5"></i></label>
            <input v-model="formData.plainPassword" placeholder="Password" id="pwd" type="password"
              class="input form-control text-black" />
            <passwordMeter :password="formData.plainPassword" class="mt-2"></passwordMeter>
          </div>

          <button type="submit" class="tw-bg-gradient-to-r tw-dark:text-gray-300 tw-from-blue-500 tw-to-purple-500 tw-shadow-lg tw-mt-6 tw-p-2 tw-text-white tw-rounded-lg tw-w-full tw-hover:scale-105 tw-hover:from-purple-500 tw-hover:to-blue-500 tw-transition tw-duration-300 tw-ease-in-out">Register</button>
          <div class="tw-flex tw-flex-col tw-mt-4 tw-items-center tw-justify-center tw-text-sm">
          <p class="footer text-black">¿Ya tienes cuenta? <router-link to="/login"
              class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicia
              Sessión</router-link>
          </p>
          </div>
          
          <div v-if="message" :class="messageClass">
            <p class="text-black">{{ message }}</p>
            <router-link v-if="showRedirectButton" to="/login">
              <button class="btn btn-md btn-success">Go to Login</button>
            </router-link>
          </div>
        </form>

        <!-- Third Party Authentication Options -->
        <div id="third-party-auth" class="tw-flex tw-items-center tw-justify-center tw-mt-5 tw-flex-wrap">
              <button href="#"
                class="tw-hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-shadow-lg tw-p-2 tw-rounded-lg tw-m-1">
                <img class="tw-max-w-[25px]" src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                  alt="Google" />
              </button>

              <button href="#"
                class="tw-hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-shadow-lg tw-p-2 tw-rounded-lg tw-m-1">
                <img class="tw-max-w-[25px] tw-filter tw-dark:tw-invert"
                  src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/" alt="Github" />
              </button>
              <button href="#"
                class="tw-hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-shadow-lg tw-p-2 tw-rounded-lg tw-m-1">
                <img class="tw-max-w-[25px]" src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                  alt="Facebook" />
              </button>

              <button href="#"
                class="tw-hover:tw-scale-105 tw-ease-in-out tw-duration-300 tw-shadow-lg tw-p-2 tw-rounded-lg tw-m-1">
                <img class="tw-max-w-[25px]" src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                  alt="apple" />
              </button>
            </div>


            <div class="tw-text-gray-500 tw-flex tw-text-center tw-flex-col tw-mt-4 tw-items-center tw-text-sm">
              <p class="tw-cursor-default mb-3">
                By registering, you agree to our
                <a class="tw-group tw-text-blue-400 tw-transition-all tw-duration-100 tw-ease-in-out" href="#">
                  <span
                    class="tw-cursor-pointer tw-bg-left-bottom tw-bg-gradient-to-r tw-from-blue-400 tw-to-blue-400 tw-bg-[length:0%_2px] tw-bg-no-repeat tw-group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Terms</span>
                </a>
                and
                <a class="tw-group tw-text-blue-400 tw-transition-all tw-duration-100 tw-ease-in-out" href="#">
                  <span
                    class="tw-cursor-pointer tw-bg-left-bottom tw-bg-gradient-to-r tw-from-blue-400 tw-to-blue-400 tw-bg-[length:0%_2px] tw-bg-no-repeat tw-group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">Privacy
                    Policy</span>
                </a>
              </p>
            </div>
      </div>
        </div>
        </div>
    </div>

  </div>
</template>


<script>
import axios from 'axios';
import passwordMeter from "vue-simple-password-meter";
import { API_ROOT_URL } from '@/apiConfig';
export default {
  components: {
    passwordMeter
  },
  data() {
    return {
      formData: {
        email: "",
        plainPassword: "",
        firstName: "",
        last: "",
      },
      message: '', // Mensaje de éxito o error
      messageClass: '', // Clase de Bootstrap para el mensaje
    };
  },
  computed: {
    showRedirectButton() {
      return this.messageClass === 'alert alert-success' && this.message === 'User registered successfully';
    }
  },
  methods: {
    async registerUser() {
      console.log("Submitting registration form...");
      //console.log("Form Data:", this.formData);

      try {
        const response = await axios.post(`${API_ROOT_URL}/users`, {
          "email": this.formData.email,
          "plainPassword": this.formData.plainPassword,
          "firstName": this.formData.firstName,
          "last": this.formData.last,
        }, {
          headers: {
            'Content-Type': 'application/ld+json'
          }
        }
        );

        //console.log('User registered successfully:', response.data);
        // Establecer el mensaje de éxito
        this.message = `User registered successfully`;
        this.messageClass = 'alert alert-success';


        // Optionally, you can reset the form after successful registration
        this.resetForm();

      } catch (error) {
        if (error.response && error.response.status === 422) {
          // User already exists error (422 Unprocessable Entity)
          this.message = 'User already exists';
        } else {
          console.error("Error registering user:", error);
          // Set error message
          this.message = 'Error registering user';
        }
        this.messageClass = 'alert alert-danger';
      }
    },
    resetForm() {
      // Reset form data
      this.formData.email = '';
      this.formData.plainPassword = '';

    }
  }

};
</script>
<style scoped>

</style>