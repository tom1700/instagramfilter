<template>
<div class="images">
    <div class="header">
        <div class="row">
            <div class="logo">Instagramfilter</div>
            <div class="logout" v-on:click="logout">Wyloguj</div>
        </div>
    </div>
    <div class="content">
        <div class="row menu">
            <div class="col">
                <ul>
                    <li>
                        <span class="label categories">Kategorie:</span>
                    </li>
                    <li>
                        <span class="label">Oczy</span>
                        <input type="checkbox">
                    </li>
                    <li>
                        <span class="label">Usta</span>
                        <input type="checkbox">
                    </li>
                    <li>
                        <span class="label">Twarz</span>
                        <input type="checkbox">
                    </li>
                    <li class="filter">
                        <button v-on:click="log()">Filtruj</button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="img-list">
            <div v-for="image in imageList" class="img-container">
                <img v-bind:src="image.images.standard_resolution.url" alt="">
            </div>
        </div>
    </div>
</div>
</template>


<script>
import jsonp from "jsonp";

export default {
    name : "il-images",
    data () {
        return {
            imageList : []
        }
    },
    mounted () {
        if (this.$route.hash) {
            let access_token = this.$route.hash.replace("#access_token=","");
            this.$store.commit("AUTH_TOKEN", access_token);
        }
        else {
            this.$store.commit("AUTH_TOKEN", null);
            this.$router.push({ name : "home" });    
        }
        jsonp(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.$store.state.auth.token}`,
            null,
            (err, data) => {
                if (err) {
                    console.error(err.message);
                } else {
                    this.imageList = data.data;
                }
            }
        );
    },
    methods : {
        logout () {
            this.$store.commit("AUTH_TOKEN", null);
            this.$router.push({ name : "home" });
        }
    }
};

</script>



<style scoped>
.row {
    width:100%;
    overflow:auto;
    box-sizing:border-box;
    padding:1em;
}

.header {
    background-color: #fccc63;
}

.header .row {
    max-width: 1080px;
    margin:0 auto;
}

.header .logo {
    float: left;
    color: #fff;
    font-size: 1.75em;
    font-weight: 700;
}

.header .logout {
    float: right;
    padding: 0.5em 1em;
    color: #fff;
    background-color: #fbad50;
    font-weight: 700;
    cursor:pointer;
    text-transform:uppercase;
}

.content {
    max-width: 1080px;
    margin:0 auto;
    padding:0 1%;
    text-transform: uppercase;
}

.content .menu {
    margin-top:5em;
    background-color:#ffffff;
    border:solid 1px #eeeeee;
}

.content .menu .categories{
    font-weight: 600;
}

.content .menu ul {
    padding:0;
    margin:0;
    list-style: none;
}

.content .menu li {
    float:left;
}

.content .menu .label {
    padding:0.5em 1em;
    display:inline-block;
}

.content .menu input[type="checkbox"] {
    margin-top:0.2em;
    background-color: #fff;
}

.content .menu .filter {
    float:right;
}

.content .menu button {
    background-color: #4c68d7;
    color:#fff;
    border:none;
    font-size:1.1em;
    font-weight: 600;
    padding:0.5em 1em;
    text-transform: uppercase;
    cursor:pointer;
}

.content .img-list .img-container {
    margin: 0 auto;
    max-width:640px;
}
</style>