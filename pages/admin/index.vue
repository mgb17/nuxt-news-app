<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Add New Post</button>
        </div>
        <div>
            <PostList 
                :posts="takenPosts"
                :isAdmin="true" />
        </div>
    </div>
</template>

<script>
import PostList from "@/components/post/PostList.vue"

export default {
    head: {
        title: 'My Posts'
    },
    layout: "admin",
    components: {
        PostList
    },
    computed: {
        takenPosts() {
            return this.$store.getters['posts/getPosts']
        }
    }
}

</script>