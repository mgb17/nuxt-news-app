<template>
    <div>
        <PostForm @activated="savePost($event)" />
    </div>

</template>

<script>
import PostForm from "@/components/admin/PostForm"

export default {
    components: {
        PostForm
    },
    methods: {
        savePost(post) {
            console.log(post)
        }
    }
}

</script>