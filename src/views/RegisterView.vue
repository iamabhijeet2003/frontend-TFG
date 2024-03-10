<!-- frontend/src/components/RegisterUser.vue -->

<template>
    <div class="wrapper  mx-auto my-5">
        
        <form @submit.prevent="registerUser" class="form">
            <h1 class="title text-primary h1 fw-bolder">REGISTER</h1>
            <div class="inp">
                <label for="email" class="form-label text-black">Email <i
                class="bi bi-person-fill text-primary fs-5"></i></label>
                <input v-model="formData.email" placeholder="Email" class="input form-control" id="email"/>
            </div>
            <div class="inp">
                <label for="pwd" class="form-label text-black">Password <i
            class="bi bi-lock-fill text-primary fs-5"></i></label>
                <input v-model="formData.plainPassword" placeholder="Password" id="pwd" type="password" class="input form-control text-black" />
                <passwordMeter :password="formData.plainPassword" class="mt-2"></passwordMeter>
            </div>
            
            <button type="submit" class="btn btn-primary btn-lg mt-3 px-5">Register</button>
            <p class="footer text-black">¿Ya tienes cuenta? <router-link to="/login"
          class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Inicia Sessión</router-link>
      </p>
        <div v-if="message" :class="messageClass">
            <p class="text-black">{{ message }}</p>
            <router-link v-if="showRedirectButton" to="/login">
                <button class="btn btn-md btn-success">Go to Login</button>
            </router-link>
        </div>
        </form>
        

        <div class="banner">
            <h1 class="wel_text">Welcome Back!</h1><br>
        <p class="para"></p>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import passwordMeter from "vue-simple-password-meter";

export default {
    components:{
        passwordMeter 
    },
    data() {
        return {
            formData: {
                email: "",
                plainPassword: "",
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
            console.log("Form Data:", this.formData);

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/users', {
                    "email": this.formData.email,
                    "plainPassword": this.formData.plainPassword,
                    
                },{
                    headers: {
                        'Content-Type': 'application/ld+json'
                    }
                }
                );

                console.log('User registered successfully:', response.data);
                // Establecer el mensaje de éxito
                this.message = `User registered successfully` ;
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