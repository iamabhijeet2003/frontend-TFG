<template>
    <div class="card mx-5 my-5">
        <div class="row">
            <div class="col-6 border-end border-5 border-primary my-4 p-4">
                <h1 class="h1 text-center">Contacta con Nosotros</h1>
                <div class="form">
                    <form action="https://public.herotofu.com/v1/33d7c2c0-df06-11ee-8980-3397320e035b" method="post"
                        accept-charset="UTF-8" @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Your Name</label>
                            <input v-model="formData.name" name="Name" id="name" type="text" required
                                class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Your Email</label>
                            <input v-model="formData.email" name="Email" id="email" type="email" required
                                class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="phone">Phone Number</label>
                            <input v-model="formData.phone" name="Phone" id="phone" type="tel" required
                                class="form-control" />
                        </div>
                        <div class="mb-3">
                            <label for="message">Message</label>
                            <textarea v-model="formData.message" name="Message" id="message" rows="4" required
                                class="form-control"></textarea>
                        </div>
                        <button style="margin: 1rem 0" @click="submitForm()" class="btn btn-primary btn-lg">
                            Send message
                        </button>
                    </form>
                </div>

            </div>

            <div class="col-6 my-4 p-4">
                <h1 class="h1 text-center">Nuestra Tienda Fisica</h1>
                <StoreMap></StoreMap>
            </div>
        </div>
    </div>
</template>

<script>
import StoreMap from "./StoreMap.vue";
//import UseEmail from "./UseEmail";
import axios from "axios";
import Swal from 'sweetalert2';
import { API_ROOT_URL } from '@/apiConfig';

export default {
    name: 'ContactForm',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
        };
    },
    components: {
        StoreMap,
    },
    methods: {
        submitForm() {
            const { name, email, phone, message } = this.formData;

            const phoneNumber = parseInt(phone);

            const requestData = {
                name,
                email,
                phone: phoneNumber,
                message
            };
            const token = localStorage.getItem("token");
            axios.post(`${API_ROOT_URL}/contacts`, requestData,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/ld+json'
                }
            })
                .then(response => {
                    console.log('Form submitted successfully:', response.data);
                    
                    this.resetForm();
                    // Display success message using Swal
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your message has been submitted successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    Swal.fire({
                        title: 'Error!',
                        text: 'An error occurred while submitting your message.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                });
            console.log('Form submitted:', this.formData);
        },
        resetForm() {
            // Reset form data after successful submission
            this.formData.name = '';
            this.formData.email = '';
            this.formData.phone = '';
            this.formData.message = '';
        }
    },
};
</script>
