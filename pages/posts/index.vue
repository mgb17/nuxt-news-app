<template>
    <div>
        <div>
            <PostList :posts="fetchedPosts" />
        </div>
    </div>
</template>

<script>
import PostList from "@/components/post/PostList.vue"

export default {
    components: {
        PostList
    },
    computed: {
        fetchedPosts() {
            return this.$store.getters['posts/getPosts']

        }
    }
}

</script>