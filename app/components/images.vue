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
                            <input type="checkbox" v-model="eyes">
                        </li>
                        <li>
                            <span class="label">Usta</span>
                            <input type="checkbox" v-model="mouth">
                        </li>
                        <li>
                            <span class="label">Twarz</span>
                            <input type="checkbox" v-model="face">
                        </li>
                        <li>
                            <span class="label">Inne</span>
                            <input type="checkbox" v-model="other">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="img-list">
                <div v-for="image in imageList" class="img-container">
                    <img
                        v-bind:src="image.images.standard_resolution.url"
                        v-bind:class="{ active : isActive(image), animating : animating }"
                        v-bind:id="image.id"
                        :width="image.images.standard_resolution.width"
                        :height="image.images.standard_resolution.height"
                        alt="">
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    import jsonp from "jsonp";
    import Vue from 'vue';

    const initTrackers = (el) => {
        //let colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
        let face = new tracking.ObjectTracker(['face']);
        let mouth = new tracking.ObjectTracker(['mouth']);
        let eye = new tracking.ObjectTracker(['eye']);

        /*colors.on('track', function(event) {
            if (event.data.length === 0) {
                console.log("No colors detected");
            } else {
                console.log(event);
                event.data.forEach(function(rect) {
                    console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
                });
            }
        });*/

        face.on('track', (event) => el.face = event.data.length > 0 ? true : false);
        mouth.on('track', (event) => el.mouth = event.data.length > 0 ? true : false);
        eye.on('track', (event) => el.eye = event.data.length > 0 ? true : false);
        //tracking.track('#'+el.id, colors);

        tracking.track('#'+el.id, face);
        tracking.track('#'+el.id, mouth);
        tracking.track('#'+el.id, eye);
    };

    export default {
        name : "il-images",
        data () {
            return {
                imageList : [],
                eyes : true,
                mouth : true,
                face : true,
                other : true
            }
        },
        mounted () {/*
            if (this.$route.hash) {
                let access_token = this.$route.hash.replace("#access_token=","");
                this.$store.dispatch('AUTH_TOKEN', access_token, this.$db);
            }
            else {
                this.$db.get('AUTH_TOKEN').then((doc) => {
                    return doc.data;
                }
            }*/
            if (!this.$store.state.auth.token) {
                if (this.$route.hash) {
                    let access_token = this.$route.hash.replace("#access_token=","");
                    this.$store.commit("AUTH_TOKEN", access_token);
                }
                else {
                    this.$store.commit("AUTH_TOKEN", null);
                    this.$router.push({ name : "home" });
                }
            }
            jsonp(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${this.$store.state.auth.token}`,
                null,
                (err, data) => {
                    if (err) {
                        console.error(err.message);
                    } else {
                        this.imageList = data.data.map(el => {
                            el.eyes = false;
                            el.mouth = false;
                            el.face = false;
                            el.other = true;
                            el.id = "image"+el.id;
                            return el;
                        });
                        setTimeout(() => {
                            this.imageList.forEach((el) => {
                                initTrackers(el);
                            });
                        },1000);
                    }
                }
            );

        },
        methods : {
            logout () {
                this.$store.commit("AUTH_TOKEN", null);
                this.$router.push({ name : "home" });
            },
            isActive (img) {
                return (this.eyes && img.eyes) ||
                    (this.mouth && img.mouth) ||
                    (this.face && img.face) ||
                    (this.other && img.other);
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
        padding: 0.4em 1em 0.5em 1em;
        color: #fff;
        background-color: #fbad50;
        font-weight: 700;
        cursor:pointer;
        text-transform:uppercase;
        transition: all 0.3s;
    }

    .header .logout:hover {
        background-color: #eb9d40;
        transition: all 0.3s;
    }

    .content {
        max-width: 1080px;
        margin:0 auto;
        padding:0 1%;
        text-transform: uppercase;
    }

    .content .menu {
        margin:3em 0;
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

    .content .img-list {
        width:100%;
    }

    @keyframes hide {
        0% { opacity : 1.0; }
        50% { opacity : 0; width : 25%;}
        100% { opacity : 0.0; width : 0;}
    }

    @keyframes show {
        0% { opacity : 0.0; width : 0;}
        50% { opacity : 0.0; width : 25%; }
        100% { opacity : 1.0; width : 25%;}
    }
    .content .img-list .img-container {

    }
    .content .img-list .img-container img {
        opacity:1.0;
        width:25%;
        height:auto;
        float:left;
        animation: hide 1s forwards;
        animation-fill-mode:forwards;
    }

    .content .img-list .img-container img.active {
        opacity:0.0;
        width:0;
        animation: show 1s forwards;
        animation-fill-mode:forwards;
    }

</style>
