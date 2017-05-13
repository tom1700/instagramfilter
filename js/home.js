/**
 * Created by tomek on 13.05.2017.
 */
define(["vendor/axios"],(axios) => {
"use strict";

let component = {
    name:"il-home"
};

component.methods = {
    login () {
        const url = "https://api.instagram.com/oauth/authorize/";
        const client_id = "458a7a8e2850426699015a9e75813a43";
        const redirect_uri = "https://tom1700.github.io/instagramfilter/images";
        location.href = `${url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`;
    }
};

component.data = () => { return {}; };

component.template = `
<div class="home">
    <div class="flex-container">
        <div class="flex-content">
            <h1>Witamy w aplikacji InstagramFilter</h1>
            <h2>Kliknij poniżej aby zalogować się na swoje konto</h2>
            <button v-on:click="login()">Zaloguj</button>
        </div>
    </div>
</div>
`;

return component;

});
