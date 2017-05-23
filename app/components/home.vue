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
            const url = "https://api.instagram.com/oauth/authorize/";
            const client_id = "458a7a8e2850426699015a9e75813a43";
            const redirect_uri = "https://tom1700.github.io/instagramfilter/#/images";
            location.href = `${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;
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

.images {
    max-width: 1080px;
    margin:0 auto;
    padding:0 1%;
    text-transform: uppercase;
}

.images .menu {
    margin-top:5em;
    background-color:#ffffff;
    overflow: auto;
    padding:1em;
    border:solid 1px #eeeeee;
}

.images .menu .categories{
    font-weight: 600;
}

.images .menu ul {
    padding:0;
    margin:0;
    list-style: none;
}

.images .menu li {
    float:left;
}

.images .menu .label {
    padding:0.5em 1em;
    display:inline-block;
}

.images .menu input[type="checkbox"] {
    margin-top:0.2em;
    background-color: #fff;
}

.images .menu .filter {
    float:right;
}

.images .menu button {
    background-color: #3897f0;
    color:#fff;
    border:none;
    font-size:1.1em;
    font-weight: 600;
    padding:0.5em 1em;
    text-transform: uppercase;
    cursor:pointer;
}

</style>