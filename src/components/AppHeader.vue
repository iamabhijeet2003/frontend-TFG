<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
    <li class="nav-item me-3">
      <router-link class="nav-link" :class="$route.name == 'Cart'? 'active':''" aria-current="page" :to="{ name: 'Cart' }">
        <i class="bi bi-cart3 h4"></i>
        <span v-if="$store.state.cart.length > 0" class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary">
          {{ $store.state.cart.length }}
        </span>
      </router-link>
    </li>
</ul>