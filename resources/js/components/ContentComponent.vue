<template>
    <header class="dash-toolbar">
        <a href="" class="menu-toggle" @click="menuToggle">
            <i class="fas fa-bars"></i>
        </a>
        <div class="tools">
<!--            <a href="/admin" target="_blank" class="tools-item">-->
<!--                <i class="fab fa-github"></i>-->
<!--            </a>-->
            <a href="" class="tools-item">
                <i class="fas fa-bell"></i>
                <i class="tools-item-count">4</i>
            </a>
            <div class="dropdown tools-item">
                <a href="#" class="" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                    <i class="fas fa-user"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
<!--                    <a class="dropdown-item" href="#!">Profile</a>-->
                    <a class="dropdown-item" href="/logout" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">Logout</a>
                </div>
            </div>
        </div>
    </header>
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
