<template>
  <div>
      <router-link to="/admin/menu">meny</router-link>
  </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'

    const {mapState, mapActions} = createNamespacedHelpers('config');

    export default {
        computed: {
            ...mapState({
                isMobileBreakpoint: state => state.isMobileBreakpoint,
            }),
        },
        methods: {
            ...mapActions([
                'setMobileBreakpoint',
            ]),
            menuToggle(evt) {
                evt.preventDefault();
                this.setMobileBreakpoint()
            }
        },
        mounted() {
            console.log('Component mounted.')
        }

    }
</script>
