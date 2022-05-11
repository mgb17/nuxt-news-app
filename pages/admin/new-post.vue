<template>
    <div>
        <PostForm @activated="savePost($event)" />
    </div>

</template>

<script>
import axios from "axios"
import PostForm from "@/components/admin/PostForm"

export default {
    components: {
        PostForm
    },
    methods: {
        savePost(post) {
            axios.post("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts.json", post)
            .then(res => {
                this.$router.push("/admin")
            })
        }
    }
}

</script>