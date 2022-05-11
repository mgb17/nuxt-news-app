<template>
  <div>
    <div>
      <PostList :posts="fetchedPosts"/>
    </div>
    <About/>
  </div>
</template>

<script>


export default {
    // components: {
    //     PostList,
    //     About
    // }, => from plugins

    // data() {
    //   return {
    //     fetchedPosts : []
    //   }
    // },
    computed: {
      fetchedPosts() {
        return this.$store.getters.getPosts
      }
    },
    created() {
      // this.$store.dispatch("setPosts", this.fetchedPosts )
    },

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