<template>
  <div>
    <div>
      <PostList :posts="fetchedPosts"/>
    </div>
    <About/>
  </div>
</template>

<script>
import PostList from "@/components/post/PostList"
import About from "@/components/home/About"

export default {
    components: {
        PostList,
        About
    },
    data() {
      return {
        fetchedPosts : []
      }
    },
    created() {
      // setTimeout(() => {
      //   this.fetchedPosts = [
      //     { 
      //       id: 1, 
      //       title: "deneme",
      //       subTitle: "subtitle",
      //       text: "some text",
      //       author: "mert"  
      //     },
      //     { 
      //       id: 2, 
      //       title: "deneme2",
      //       subTitle: "subtitle2",
      //       text: "some text2",
      //       author: "gorkem"  
      //     },
      //   ]
        
      // }, 2000)
    },
    // from nuxt , rendered on servers side, can't use this
    asyncData(context, callback) {
      console.log("asynch calisti")
        callback(null, {
          fetchedPosts : [
            { 
              id: 1, 
              title: "deneme",
              subTitle: "subtitle",
              text: "some text",
              author: "mert"  
            },
            { 
              id: 2, 
              title: "deneme2",
              subTitle: "subtitle2",
              text: "some text2",
              author: "gorkem"  
            },
          ]
        })
      }
}

</script>