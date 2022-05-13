<template>
  <div>
    
    <!-- Posts  -->
    <div>
      <!-- <PostList :posts="fetchedPosts"/> -->
    </div>

    <div class="container pt-3">
      <div class="row">
        <div class="col-md-6 offset-3 pt-3 card border border-success shadow">
          <h3 class="text-center mb-3 mt-3">localStorage</h3>
          <input type="text" class="form-control" v-model="storageValue">
          <div class="button-container mt-3 mb-3">
            <button @click="setValue" class="btn btn-success">Set Value</button>
            <button @click="getValue" class="btn btn-success">Get Value</button>
            <button @click="deleteValue" class="btn btn-success">Delete Value</button>
          </div>
          <div class="border p-1 mb-3 border-secondary d-flex justify-content-center align-items-center">
            <p class="m-0"> <strong>localStorage value :</strong> {{ fromStorage }}</p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6 offset-3 pt-3 card border border-primary shadow">
          <h3 class="text-center mb-3 mt-3">Cookie </h3>
          <input type="text" class="form-control" v-model="cookieValue">
          <div class="button-container mt-3 mb-3">
            <button @click="setCookie" class="btn btn-primary">Set Cookie Value</button>
            <button @click="getCookie" class="btn btn-primary">Get Cookie Value</button>
            <button @click="removeCookie" class="btn btn-primary">Remove Cookie</button>
          </div>
          <div class="border p-1 mb-3 border-secondary d-flex justify-content-center align-items-center">
            <p class="m-0"> <strong>Cookie value :</strong> {{ fromCookie }}</p>
          </div>
        </div>
      </div>
  </div>
    <!-- <About/> -->
  </div>
</template>

<script>
import Cookie from "js-cookie"

export default {
    middleware: ["session-control","auth"],

    data() {
        return {
          storageValue : null,
          cookieValue: null,
          fromStorage: null,
          fromCookie : null
        }
    },
    methods: {
      setValue() {
          localStorage.setItem("authKey", this.storageValue)
      },
      getValue() {
          this.fromStorage = localStorage.getItem("authKey")
      },
      deleteValue() {
          localStorage.removeItem("authKey")
      },

      setCookie(){
          Cookie.set("authKey", this.cookieValue)
      },
      getCookie(){
          this.fromCookie = Cookie.get("authKey")
      },
      removeCookie() {
          Cookie.remove("authKey")
      }
    },
    computed: {
      fetchedPosts() {
        return this.$store.getters['posts/getPosts']
      }
    },
    // components: {
    //     PostList,
    //     About
    // }, => from plugins

    // data() {
    //   return {
    //     fetchedPosts : []
    //   }
    // },

    // fetch(context) {
    //   return new Promise((resolve, reject) => {
    //       context.store.dispatch("setPosts", 
    //           [
    //             { 
    //               id: 4, 
    //               title: "deneme",
    //               subTitle: "subtitle",
    //               text: "some text",
    //               author: "mert"  
    //             },
    //             { 
    //               id: 5, 
    //               title: "deneme2",
    //               subTitle: "subtitle2",
    //               text: "some text2",
    //               author: "gorkem"  
    //             },
    //           ]
    //         )
    //       resolve();
    //   })
    //     .catch( e => {
    //       context.error(e);
    //     })
      
    // }

    //------ from nuxt , rendered on servers side, can't use this -------
    // asyncData(context) {
    //   return new Promise((resolve, reject) => {
    //       resolve({
    //         fetchedPosts : [
    //           { 
    //             id: 4, 
    //             title: "deneme",
    //             subTitle: "subtitle",
    //             text: "some text",
    //             author: "mert"  
    //           },
    //           { 
    //             id: 5, 
    //             title: "deneme2",
    //             subTitle: "subtitle2",
    //             text: "some text2",
    //             author: "gorkem"  
    //           },
    //         ]
    //       });
    //   })
    //     .then(data => {
    //         return data;
    //     })
    //     .catch( e => {
    //       context.error(e);
    //     })
    //   }
}
</script>