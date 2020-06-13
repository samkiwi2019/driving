<template>
    <div>menu</div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'

    const {mapState, mapActions} = createNamespacedHelpers('config');

    export default {
        // props:['currPath'],
        data() {
            return {
                // show: this.active('quiz') ,
            }
        },
        computed: {
            ...mapState({
                isMobileBreakpoint: state => state.isMobileBreakpoint,
                showMobileMenu: state => state.showMobileMenu,
            }),
        },
        methods: {
            ...mapActions([
                'setShowMobileMenu'
            ]),
            toggle(evt) {
                evt.preventDefault();
                this.show = !this.show;
            },
            toggleMobilMenu(evt) {
                evt.preventDefault();
                this.setShowMobileMenu(!this.showMobileMenu)
            },
            active(str){
                return this.currPath.indexOf(str,'i') > -1;
            }

        },
        mounted() {
            console.log('Component mounted.')
        },
    }
</script>

<style lang="scss" scoped>

</style>
