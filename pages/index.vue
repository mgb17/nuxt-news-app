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
    created() {},
    // from nuxt , rendered on servers side, can't use this
    asyncData(context) {
      return new Promise((resolve, reject) => {
          resolve({
            fetchedPosts : [
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
            ]
          });
      })
        .then(data => {
            return data;
        })
        .catch( e => {
          context.error(e);
        })
      }
}

</script>