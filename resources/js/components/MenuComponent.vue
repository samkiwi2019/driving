<template>
    <div :class="['dash-nav', 'dash-nav-dark', `${showMobileMenu ? 'mobile-show' : ''}`]">
        <header @click="toggleMobilMenu">
            <a href="" class="menu-toggle">
                <i class="fas fa-bars"></i>
            </a>
            <a href="/admin" class="spur-logo"><i class="fas fa-bolt"></i> <span>Driving Test</span></a>
        </header>
        <nav class="dash-nav-list">
            <a href="/admin" class="dash-nav-item">
                <i class="fas fa-home"></i> Dashboard </a>
            <div :class="['dash-nav-dropdown',`${this.show ? 'show' : ''}`]">
                <a :class="['dash-nav-item', 'dash-nav-dropdown-toggle']" @click="toggle">
                    <i class="fas fa-chart-bar"></i> Quiz </a>
                <div class="dash-nav-dropdown-menu">
                    <a href="/admin/quizzes" :class="['dash-nav-dropdown-item', `${active('quizzes') ? 'on' : ''}`]">Quiz List</a>
                </div>
                <div class="dash-nav-dropdown-menu">
                    <a href="/admin/addquiz" :class="['dash-nav-dropdown-item', `${active('addquiz') ? 'on' : ''}`]">Add Quiz</a>
                </div>
                <div class="dash-nav-dropdown-menu">
                    <a href="/admin/editquiz" :class="['dash-nav-dropdown-item', `${active('editquiz') ? 'on' : ''}`]">Edit Quiz</a>
                </div>
            </div>
            <div class="dash-nav-dropdown">
                <a href="/admin/about" class="dash-nav-item">
                    <i class="fas fa-info"></i> About </a>
            </div>
        </nav>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from 'vuex'

    const {mapState, mapActions} = createNamespacedHelpers('config');

    export default {
        props:['currPath'],
        data() {
            return {
                show: this.active('quiz') ,
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
