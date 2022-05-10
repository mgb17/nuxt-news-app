import Vuex from "vuex";

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
                vuexContext.commit("setPost",  [
                                { 
                                  id: 4, 
                                  title: "deneme",
                                  subTitle: "subtitle",
                                  text: "some text",
                                  author: "mert"  
                                },
                                { 
                                  id: 5, 
                                  title: "deneme2",
                                  subTitle: "subtitle2",
                                  text: "some text2",
                                  author: "gorkem"  
                                },
                              ])
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