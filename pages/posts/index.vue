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
    middleware: ["session-control","auth"],
    components: {
        PostList
    },
    computed: {
        fetchedPosts() {
            return this.$store.getters.getPosts

        }
    }
}

</script>