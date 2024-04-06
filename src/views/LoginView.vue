<!-- frontend/src/views/LoginView.vue -->

<template>
  <div class="wrapper  mx-auto my-5">
    <form @submit="login" class="form">
      <h1 class="title text-primary h1 fw-bolder">Login</h1>
      <div class="inp">
        <label for="email" class="form-label text-black">Email <i
            class="bi bi-person-fill text-primary fs-5"></i></label>
        <input type="text" v-model="email" class="input form-control" id="email" placeholder="email" />
      </div>
      <div class="inp">
        <label for="pwd" class="form-label text-black">Password <i
            class="bi bi-lock-fill text-primary fs-5"></i></label>
        <input v-model="password" placeholder="password" id="pwd" type="password" class="input form-control" />
      </div>
      <!-- <button class="submit">Iniciar sesión</button> -->
      <button type="submit" class="btn btn-primary btn-md mt-3">Iniciar Sessión</button>
      <p class="footer text-black">¿No tienes cuenta? <router-link to="/register"
          class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Registrate</router-link>
      </p>
      <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>

    </form>

    <div class="banner">
      <h1 class="wel_text">Welcome Back!</h1><br>
      <p class="para"></p>
    </div>
  </div>
  <particles-bg type="random" :canvas="{backgroundColor:'#ffffff'}" :bg="true"/>
  <!--
    <div>
      <h1>LOGIN</h1>
      <form @submit="login">
        <input v-model="email" placeholder="email" />
        <br />
        <br />
        <input v-model="password" placeholder="password" type="password" />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
        {{ errorMessage }}
      </div>-->
</template>

<script>

import { mapMutations } from "vuex";
import { ParticlesBg } from "particles-bg-vue";
export default {
  data: () => {
    return {
      email: "",
      password: "",
      errorMessage: "", // Message for showing login error
    };
  },
  components:{
    ParticlesBg
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      console.log("Submitting login form...");
      console.log("Username:", this.email);
      console.log("Password:", this.password);

      const response = await fetch("http://localhost:8000/auth", {
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


      //const { /*user,*/ token } = await response.json();
      //console.log("User:", user);
      //console.log("Token:", token);

      //this.setUser(user);
      //this.setToken(token);
      // Store token in localStorage for persistent login
      //localStorage.setItem("token", token);

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
        this.$router.push({ name: 'products' });
        console.log("Login successful!");
        // console.log("Fetching products...");
        // const productsResponse = await fetch("http://localhost:8001/api/productss", {
        //   headers: {
        //     "Authorization": `Bearer ${token}`,
        //   },
        // });
        //console.log("Products response:", productsResponse);
        this.$router.push({ name: 'products' });
        console.log("Login successful!");
      } else {
        // Show error message for incorrect username or password
        this.errorMessage = "Incorrect email or password";
        console.error("Login failed:", this.errorMessage);
      }
      // console.log("Fetching products...");
      // const productsResponse = await fetch("http://localhost:8001/api/productss", {
      //   headers: {
      //     "Authorization": `Bearer ${token}`,
      //   },
      // });

      // console.log("Products response:", productsResponse);  
      // this.$router.push({ name: 'products' });
      // console.log("Login successful!");
    },




  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: arial;
  color: #fff;
}

body {
  width: 100vw;
  height: 100vh;
  background: #081b29;
  display: grid;
  justify-content: center;
  align-content: center;

}

::-webkit-input-placeholder {
  color: #eee;
}

.wrapper {
  position: relative;
  width: 900px;
  height: 65vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 3px solid #00ffff;
  box-shadow: 0 0 50px 0 #00a6bc;
  backdrop-filter: blur(100px);
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 35px;
}

.submit {
  border: none;
  outline: none;
  width: 288px;
  margin-top: 25px;
  padding: 10px 0;
  font-size: 20px;
  border-radius: 40px;
  letter-spacing: 1px;
  cursor: pointer;
  background: linear-gradient(45deg, #0ef, #c800ff);
}

.footer {
  margin-top: 30px;
  letter-spacing: 0.5px;
  font-size: 14px;
}

.link {
  color: #0ef;
  text-decoration: none;
}

.banner {
  position: absolute;
  top: 0;
  right: 0;
  width: 500px;
  height: 390px;
  background: linear-gradient(to right, #0ef, #c800ff);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
  padding-right: 70px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.wel_text {
  font-size: 40px;
  margin-top: -50px;
  line-height: 50px;
}

.para {
  margin-top: 10px;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 1px;
}
</style>