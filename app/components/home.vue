<template>

<div class="home">
    <div class="flex-container">
        <div class="flex-content">
            <h1>Witamy w aplikacji InstagramFilter</h1>
            <h2>Kliknij poniżej aby zalogować się na swoje konto</h2>
            <button v-on:click="login()">Zaloguj</button>
        </div>
    </div>
</div>

</template>



<script>

export default {
    name :"il-home",
    methods : {
        login () {
            const base = "https://api.instagram.com/oauth/authorize/";
            const client_id = "458a7a8e2850426699015a9e75813a43";
            const redirect_uri = "http://morson.esy.es/images";
            const url = `${base}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
            location.href = url;
        }
    },
    mounted () {
        if (this.$store.state.auth.token) {
            this.$router.push({ name : "images" });
        }
    },
    data : () => { return {}; }
};

</script>



<style scoped>

.home .flex-container {
    display:flex;
    height:100vh;
    width:100%;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
}
.home .flex-container .flex-content{
    flex-direction: column;
    text-align: center;
}

.home .flex-container .flex-content button{
    background-color: #3897f0;
    color:#fff;
    text-transform: uppercase;
    font-weight:600;
    font-size:1.5em;
    padding:0.5em 1em;
    cursor:pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    border:none;
}

.home .flex-container .flex-content button:hover {
    background-color: #4aA9f2;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

</style>