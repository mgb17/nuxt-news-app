<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button @click="$router.push('/admin/new-post')" class="btn btn-dark">Yeni Bir Yazı Ekle</button>
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
    layout: "admin",
    components: {
        PostList
    },
    computed: {
        takenPosts() {
            return this.$store.getters.getPosts
        }
    }
}

</script>