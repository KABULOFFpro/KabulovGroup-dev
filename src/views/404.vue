<template>
  <Nav/>
  
  <main class="main">
    <div class="container">
        <div class="row">
            
            <p class="error-num">404</p>
            <p class="error-subtitle">cтраница не найдена</p>
            <p class="error-text">мы не смогли найти страницу с таким адресом, попробуйте перейти на главную или напишите нам.</p>
            
            <router-link to="/" class="back-home-link">вернуться на главную</router-link>
            
        </div>
    </div>
  </main>
  
  <Footer/>
</template>

<script>
import NavVue from '@/components/Nav.vue'
import footerVue from '@/components/footer.vue'

export default {
    name: "404",
    components: {
        Nav: NavVue,
        Footer: footerVue
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    padding: 100px 0 150px;
    
    .row {
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
        text-align: center;
    }
    
    .error-num {
        font-size: calc(90px + 110 * (100vw / 1920));
        color: var(--primary-color);
        font-weight: 700;
    }
    
    .error-subtitle {
        font-size: 28px;
        color: var(--primary-color);
        font-weight: 700;
        
        &::first-letter {
            text-transform: uppercase;
        }
    }
    
    .error-text {
        max-width: 480px;
        width: 100%;
        font-size: 17px;
        color: var(--primary-color);
        font-weight: 700;
        
        &::first-letter {
            text-transform: uppercase;
        }
    }
    
    .back-home-link {
        padding: 12px 25px;
        background: var(--primary-color);
        border: 0;
        color: var(--second-color);
        text-transform: capitalize;
        font-size: 17px;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
    }
}

@media (min-width: 1920px) {
    .error-num {
        font-size: 300px !important;
    }
}

@media (max-width: 320px) {
    .error-num {
        font-size: calc(90px + (110 + 110 * 0.7) * ((100vw - 320px)/ 1920));
    }
}
</style>