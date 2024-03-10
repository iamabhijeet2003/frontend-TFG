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
                        <button style="margin: 1rem 0" @click="sendExample" class="btn btn-primary btn-lg">
                            Send test data
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
import UseEmail from "./UseEmail";
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
    components:{
        StoreMap,
    },
    methods: {
        submitForm() {
            // You can handle form submission logic here
            console.log('Form submitted:', this.formData);
        },
        sendExample() {
            const { name, email, phone, message } = this.formData;
            UseEmail('https://public.herotofu.com/v1/33d7c2c0-df06-11ee-8980-3397320e035b').sendEmail({
                example_user: email,
                example_data: {
                    name,
                    email,
                    phone,
                    message
                },
            });
        },
    },
};
</script>