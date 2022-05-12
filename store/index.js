import Vuex from "vuex";
import Cookie from "js-cookie"


const createStore = () => {
    return new Vuex.Store({
        state: {
            authKey: null,
            fetchedPosts: []
        },
        // modules: {
        //     posts: postsModule
        // },
        mutations: {
            setAuthKey(state, authKey) {
                state.authKey = authKey
            },

            setPost(state, posts) {
                state.fetchedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
            },
            initAuth(vuexContext, req) {
                let token;
                if(req) {

                    // on server side
                    if(!req.headers.cookie) {
                        return;
                    }

                    // get Token over Cookie
                    token = req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey"))
                    if(token) {
                        token = token.split("=")[1]
                    }
                } else {
                    token = localStorage.getItem("authKey")
                    if(!token) {
                        return
                    }
                }

                vuexContext.commit("setAuthKey", token)
            },
            login(vuexContext, authKey) {
                Cookie.set("authKey", authKey);
                localStorage.setItem("authKey", authKey)
                vuexContext.commit("setAuthKey", authKey)
            },

            // only one time run on the server side
            nuxtServerInit(vuexContext, payload) {
                return payload.app.$axios.get("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
                            .then(res => {
                                let data = res.data;
                                let postArray = []
                                for(let key in data) {
                                    postArray.push({ id: key, ...data[key] });
                                }
                                vuexContext.commit("setPost", postArray)
                            })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPost", posts)
            }
        },
        getters: {
            isAuthenticated(state) {
                return state.authKey != null
            },
            getAuthKey(state) {
                return state.authKey
            },

            getPosts(state) {
                return state.fetchedPosts;
            }
        }
    })
}

export default createStore;


// const createStore = () => {
//     return new Vuex.Store({
//         state: {
//             fetchedPosts: []
//         },
//         mutations: {
//             setPost(state, posts) {
//                 state.fetchedPosts = posts
//             }
//         },
//         actions: {
//             // only one time run on the server side
//             nuxtServerInit(vuexContext, payload) {

//                 return payload.app.$axios.get("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
//                             .then(res => {
//                                 let data = res.data;
//                                 let postArray = []
//                                 for(let key in data) {
                                    
//                                     postArray.push({ id: key, ...data[key] });
//                                 }
//                                 vuexContext.commit("setPost", postArray)
//                             })
//             },
//             setPosts(vuexContext, posts) {
//                 vuexContext.commit("setPost", posts)
//             }
//         },
//         getters: {
//             getPosts(state) {
//                 return state.fetchedPosts;
//             }
//         }
//     })
// }
