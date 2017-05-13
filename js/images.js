/**
 * Created by tomek on 13.05.2017.
 */
define(() => {
"use strict";

let component = {
    name:"il-images"
};

component.template = `
<div class="images">
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
                    <button>Filtruj</button>
                </li>
            </ul>
        </div>
    </div>
    <div class="img-list">
    
    </div>
</div>
`;

return component;

});
