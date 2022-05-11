<template>
    <div>
        <PostForm 
            @activated="updatePost($event)"
            :post="takenPosts"
            :isEdit="true" />
    </div>

</template>

<script>
import PostForm from "@/components/admin/PostForm"
import axios from "axios"


export default {
    components: {
        PostForm
    },
    asyncData(context) {
        return axios.get("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts/" + context.params.postId + ".json")
                    .then(res => {
                        return {
                            takenPosts: res.data
                        }
                    })
    },
    methods: {
        updatePost(editedPost) {
            axios.put("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts/" + this.$route.params.postId + ".json", editedPost)
            .then(res => {
                this.$router.push("/admin")
            })
        }
    }
}
</script>