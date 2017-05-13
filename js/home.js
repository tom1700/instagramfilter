/**
 * Created by tomek on 13.05.2017.
 */
define(() => {
"use strict";

let component = {
    name:"il-home"
};

component.methods = {};

component.data = () => { return {}; };

component.template = `
<div class="home">
    <div class="flex-container">
        <div class="flex-content">
            <h1>Witamy w aplikacji InstagramFilter</h1>
            <h2>Kliknij poniżej aby zalogować się na swoje konto</h2>
            <router-link to="/images">
                <button>Zaloguj</button>
            </router-link>
        </div>
    </div>
</div>
`;

return component;

});
