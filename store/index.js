import Vuex from "vuex";
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPost(state, posts) {
                state.fetchedPosts = posts
            }
        },
        actions: {
            // only one time run on the server side
            nuxtServerInit(vuexContext, payload) {

                return axios.get("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
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
            getPosts(state) {
                return state.fetchedPosts;
            }
        }
    })
}

export default createStore;