<!--frontend/src/views/CartView.vue-->
<template>
    <section class="h-100 h-custom" >
    <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
        <div class="card border-0">
            <div class="card-body p-4">
    
            <div class="row">
                <div class="col-lg-7">
                <h5 class="mb-3"><router-link :to="{name:'Home'}" class="text-body"><i
                        class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</router-link></h5>
                <hr>
    
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                    <p class="mb-0">You have {{ $store.state.cart.length }} items in your cart</p>
                    </div>
                </div>
    
                <div v-for="item in $store.state.cart" class="card mb-3 shadow-sm border-0" :key="item.id">
                    <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <div>
                                <img
                                :src="item.image"
                                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
                            </div>
                            <div class="ms-3">
                                <p>{{ item.name }}</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <div >
                                <CartAddRemove :product="item"/>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <div >
                                <h5 class="mb-0">{{ item.price*item.qty }}<i class="bi bi-currency-euro"></i></h5>
                                <small v-if="item.hasDiscount" class="text-muted text-decoration-line-through"><i class="bi bi-currency-euro"></i>{{ item.price}}</small>
                            </div>
                            <a role="button" @click="removeItem(item)" class="ms-4" style="color: #cecece;"><i class="bi bi-trash3 h4 text-danger"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
    
                </div>
                <div class="col-lg-5">
    
                <div class="card bg-primary text-white rounded-4 border-0">
                    <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0 h4">Cart details</h5>
                        <i class="bi bi-cart3 h1"></i>
                    </div>
                    <hr class="my-4 border-4 text-white">
                    <div class="d-flex justify-content-between">
                        <p class="mb-2 h5">Subtotal</p>
                        <p class="mb-2 h5">{{ $store.state.cartTotal }}<i class="bi bi-currency-euro"></i></p>
                    </div>
                    <div class="d-flex justify-content-between mb-4">
                        <p class="mb-2 h4">Total</p>
                        <p class="mb-2 h5">{{ $store.state.cartTotal }}<i class="bi bi-currency-euro"></i></p>
                    </div>                      
                        <router-link class="btn btn-info btn-block btn-lg" to="/selectpayment">
                            Checkout
                        </router-link>

                    </div>
                </div>
    
                </div>
    
            </div>
    
            </div>
        </div>
        </div>
    </div>
    </div>
    </section>
    </template>
    <script>
    import CartAddRemove from '../components/CartAddRemove.vue';
    export default{
    components :{CartAddRemove},
    methods:{
        removeItem(item){
            this.$store.commit('addRemoveCart',{product:item,toAdd:false})
        },
    },
    mounted(){
    
    }
    
    }
    </script>