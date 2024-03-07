<!-- frontend/src/views/LoginView.vue -->

<template>
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
      </div>
  </template>
  
  <script>
  import { mapMutations } from "vuex";
  
  export default {
    data: () => {
      return {
        email: "",
        password: "",
        errorMessage: "", // Message for showing login error
      };
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
          const { token , userId } = await response.json();
          console.log("Token:", token);
  
          this.setUser(userId);
          this.setToken(token);
          console.log("the current user id is: ",userId)
          localStorage.setItem("token", token);
          localStorage.setItem("userId",userId)
          
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