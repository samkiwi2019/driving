<template>
    <div class="container-main">
        <header-img focus="top right" content="Welcome, Driving Test"
                    img="https://www.newzealand.com/assets/Tourism-NZ/Queenstown/img-1536039393-6885-4205-p-DDDFB457-FA17-8DF8-621925CCB0B0967B-2544003__aWxvdmVrZWxseQo_FocalPointCropWzUyOCwxNTM2LDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg"></header-img>
        <v-container fluid>
            <v-row>
                <v-col cols="12">
                    <div class="font-weight-light mt-1" style="font-size: 25px;">Learning Rules</div>
                </v-col>
                <v-col cols="12" md="3" sm="6" v-for="(item, index) in learnItems" :key="`item-` + index">
                    <v-card class="v-card--material pa-3">
                        <v-img
                            class="mb-n6 v-card--material__heading elevation-6"
                            style="border-radius: 6px"
                            height="150"
                            :src="item.img"
                        >
                        </v-img>

                        <v-card-text class="pb-0 text--primary">{{item.title}}</v-card-text>
                        <v-card-subtitle>
                            {{item.subtitle}}
                        </v-card-subtitle>
                        <v-divider inset ></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text color="deep-purple accent-4" :to="item.to">
                                Let's go
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <div class="font-weight-light mt-1" style="font-size: 25px;">Mock tests</div>
                </v-col>
                <feed-card
                    v-for="(mock, i) in mockItems"
                    :key="`mock-` + i"
                    :value="mock"
                />
            </v-row>

        </v-container>
    </div>
</template>

<script>
    import HeaderImg from "_c/HeaderImg";
    import FeedCard from "_c/FeedCard";
    import core from "../data/core"
    import behaviour from "../data/behaviour"
    import parking from "../data/parking"
    import emergencies from "../data/emergencies"
    import roadPosition from "../data/roadPosition"
    import intersection from "../data/intersection"
    import theory from "../data/theory"
    import signs from "../data/signs"
    import { createQuizzes } from '_a/admin'

    export default {
        name: "Home",
        components: {HeaderImg,FeedCard},
        data: () => ({
            learnItems: [
                {title: 'Core', to: '/learn/1', subtitle:"About 12 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/core-road-code.jpg"},
                {title: 'Behavior', to: '/learn/2', subtitle:"About 15 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/behaviour.jpg"},
                {title: 'Parking', to: '/learn/3', subtitle:"About 5 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/parking.jpg"},
                {title: 'Emergencies', to: '/learn/4', subtitle:"About 6 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/emergencies.jpg"},
                {title: 'Road Position', to: '/learn/5',subtitle:"About 5 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/road-position.jpg"},
                {title: 'Intersection', to: '/learn/6', subtitle:"About 13 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/intersection.jpg"},
                {title: 'Theory', to: '/learn/7', subtitle:"About 8 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/theory.jpg"},
                {title: 'Signs', to: '/learn/8', subtitle:"About 11 minutes" , img:"https://www.drivingtests.co.nz/media/module-images/signs.jpg"},
            ],
            mockItems:[
                {
                    category:"Mock",
                    title: "30 Questions at random",
                    img: "autumnclouds.jpg",
                    to: "/mock/30",
                },
                {
                    category:"Mock",
                    title: "50 Questions at random",
                    img: "july4.jpg",
                    to: "/mock/50",
                }
            ]
        })
    }
</script>
