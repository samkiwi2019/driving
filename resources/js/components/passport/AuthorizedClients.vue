<template>
    <div>
        <input type="email" v-model="userInfo.email" placeholder="请输入邮箱">
        <input type="password" v-model="userInfo.password" placeholder="请输入密码">
        <button @click.prevent="submit">登 录</button>

        <button @click="getItems">get user</button>
        <br>
        <br>
        <br>
        <br>
        <br>
        <button @click="getClients">get clients</button>
        <br>
        <br>
        <br>
        <br>
        <button @click="generateClient">generate clients</button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                const data = {
                    grant_type: 'password', //oauth的模式
                    client_id: 22,   //上面所说的client_id
                    client_secret: "ap2poeCu2TBRwPLNKYLTttqsixXEvRuJrA8RIiY1",//同上
                    username: this.userInfo.email,
                    password: this.userInfo.password,
                }
                axios.post('http://127.0.0.1:8000/oauth/token', data)
                    .then(res => {
                        console.log(res)
                        if(res.status === 200) { //如果成功了
                            //将收到的token_type和access_token存到localStorage里
                            localStorage.token_type = res.data.token_type
                            localStorage.access_token = res.data.access_token
                        }
                    })
            },
            getItems(){
                axios.get('http://127.0.0.1:8000/api/user')
                    .then(res => {
                        console.log(res)
                    })
            },
            getClients(){
                axios.get('http://127.0.0.1:8000/oauth/clients')
                    .then(res => {
                        console.log(res)
                    })
            },
            generateClient(){
                axios.post('http://127.0.0.1:8000/oauth/clients',{name:'98',redirect: 'http://127.0.0.1/home',grant_type:'password_client'})
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>
