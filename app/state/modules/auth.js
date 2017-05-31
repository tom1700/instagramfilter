import { AUTH_TOKEN } from '../mutations';

const state = {
    token: null
};

const mutations = {
    [AUTH_TOKEN](state, token) {
        state.token = token;
    }
};

const actions = {
    [AUTH_TOKEN](context, token, $db) {
        return $db.get( AUTH_TOKEN).then(
            (doc) => $db.put({
                    _id: AUTH_TOKEN,
                    data: token,
                    _rev: doc._rev
            }), 
            (err) => err.name === "not_found" ? $db.put({
                    _id: AUTH_TOKEN,
                    data: token,
            }) : null
        ).then( result => context.commit("AUTH_TOKEN"), token );
    }
};

export default {
    state,
    mutations,
    actions
}

/*

    const loadFromDb = (dbName, id) => {
        return $db.get('AUTH_TOKEN').then((doc) => {
            return doc.data;
        }).catch((err) => {
            console.log(id, "Not found");
            return err;
        });
    }
    */