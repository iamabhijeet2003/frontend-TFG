<!-- frontend/src/views/LoginView.vue -->

<template>
  <div class="tw-flex font-poppins tw-items-center tw-justify-center container-fluid login-container">
    <div class="tw-flex tw-justify-center tw-items-center tw-dark:bg-gray-800">
      <div class="tw-grid tw-gap-10">
        <div id="back-div" class="tw-bg-gradient-to-r tw-from-blue-500 tw-to-purple-500 tw-rounded-[26px] tw-m-5">
          <div
            class="tw-border-[20px] tw-border-transparent tw-rounded-[20px] tw-dark:bg-gray-900 tw-bg-white tw-shadow-lg tw-xl:p-10 tw-2xl:p-10 tw-lg:p-10 tw-md:p-10 tw-sm:p-2 tw-m-2">

            <h1 class="tw-pt-8 tw-pb-6 tw-font-bold tw-dark:text-gray-400 tw-text-5xl tw-text-center tw-cursor-default">
              Log in
            </h1>

            <form @submit="login" class="tw-space-y-6 mx-4">
              <div class="tw-mb-4">
                <label for="email" class="tw-mb-2  tw-dark:text-gray-400 tw-text-lg">Email <i
                    class="bi bi-person-fill text-primary fs-5"></i></label>
                <input type="text" v-model="email"
                  class="tw-border tw-p-3 tw-dark:bg-indigo-700 tw-dark:text-gray-300 tw-dark:border-gray-700 tw-shadow-md tw-placeholder:text-base tw-focus:scale-105 tw-ease-in-out tw-duration-300 tw-border-gray-300 tw-rounded-lg tw-w-full "
                  id="email" placeholder="Email" required />
              </div>
              <div class="tw-mb-4">
                <label for="pwd" class="tw-mb-2 tw-dark:text-gray-400 tw-text-lg">
                  Password
                  <i class="bi bi-lock-fill text-primary fs-5"></i>
                </label>
                <input v-model="password" placeholder="Password" id="pwd" type="password"
                  class="tw-border tw-p-3 tw-shadow-md tw-dark:bg-indigo-700 tw-dark:text-gray-300 tw-dark:border-gray-700 tw-placeholder:text-base tw-focus:scale-105 tw-ease-in-out tw-duration-300 tw-border-gray-300 tw-rounded-lg tw-w-full" />
              </div>

              <a class="tw-group tw-text-blue-400 tw-transition-all tw-duration-100 tw-ease-in-out mt-2" href="#">
                <span
                  class="tw-bg-left-bottom tw-bg-gradient-to-r tw-text-sm tw-from-blue-400 tw-to-blue-400 tw-bg-[length:0%_2px] tw-bg-no-repeat tw-group-hover:bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">
                  Forget your password?
                </span>
              </a>
              <!-- <p class="footer text-black">¿No tienes cuenta? <router-link to="/register"
                  class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Registrate</router-link>
              </p> -->
              <!-- <button class="submit">Iniciar sesión</button> -->
              <button type="submit" 
                :class="{ 'loading': loading }"
                class="tw-bg-gradient-to-r tw-dark:text-gray-300 tw-from-blue-500 tw-to-purple-500 tw-shadow-lg tw-mt-6 tw-p-2 tw-text-white tw-rounded-lg tw-w-full tw-hover:scale-105 tw-hover:from-purple-500 tw-hover:to-blue-500 tw-transition tw-duration-300 tw-ease-in-out">
                <!-- Log
                In -->
                <span v-if="!loading">Log In</span>
                <span v-else>Loading...</span> 
              </button>

              <div v-if="errorMessage" class="alert alert-danger" role="alert">
                {{ errorMessage }}
              </div>

            </form>

            <div class="tw-flex tw-flex-col tw-mt-4 tw-items-center tw-justify-center tw-text-sm">
              <h3 class="tw-dark:text-gray-300">
                Don't have an account?
                <router-link to="/register"
                  class="tw-group tw-text-blue-400 tw-transition-all tw-duration-100 tw-ease-in-out">
                  <span
                    class="tw-bg-left-bottom tw-bg-gradient-to-r tw-from-blue-400 tw-to-blue-400 tw-bg-[length:0%_2px] tw-bg-no-repeat tw-group-hover:tw-bg-[length:100%_2px] tw-transition-all tw-duration-500 tw-ease-out">
                    Sign Up
                  </span>
                </router-link>
              </h3>
            </div>

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
                By signing in, you agree to our
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
  <particles-bg type="random" :canvas="{ backgroundColor: '#ffffff' }" :bg="true" />
</template>

<script>

import { mapMutations } from "vuex";
import { ParticlesBg } from "particles-bg-vue";
import { API_URL_USER } from '@/apiUser';
export default {
  data: () => {
    return {
      email: "",
      password: "",
      errorMessage: "", // Message for showing login error
      loading: false,
    };
  },
  components: {
    ParticlesBg
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      this.loading = true;
      console.log("Submitting login form...");
      console.log("Username:", this.email);
      console.log("Password:", this.password);

      try {
        const response = await fetch(`${API_URL_USER}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });


        console.log("Login response:", response);
        // Modify subsequent API requests to include the JWT token
        if (response.ok) {
          const { token, user_id } = await response.json();
          console.log("Token:", token);

          this.setUser(user_id);
          this.setToken(token);
          console.log("the current user id is: ", user_id)
          localStorage.setItem("token", token);
          localStorage.setItem("user_id", user_id);

          // Redirect to products page on successful login
          //this.$router.push({ name: 'products' });
          //console.log("Login successful!");
          this.$router.push({ name: 'Home' });
          console.log("Login successful!");
        } else {

          this.errorMessage = "Incorrect email or password";
          console.error("Login failed:", this.errorMessage);
        }
      } catch (error) {
        console.error("Error during login:", error);
      } finally {
        this.loading = false; // Set loading to false when login finishes
      }
    },
  },
};
</script>

<style scoped>
.loading {
  position: relative;
}

.loading span {
  visibility: hidden;
}

.loading::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ensure the container takes up the full viewport height */
  
}
</style>