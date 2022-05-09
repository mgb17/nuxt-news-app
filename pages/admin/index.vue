<template>
    <div>
        <div class="container d-flex justify-content-center align-items-center">
            <button class="btn btn-dark">Yeni Bir Yazı Ekle</button>
        </div>
        <div>
            <PostList />
        </div>
    </div>
</template>

<script>
import PostList from "@/components/post/PostList.vue"

export default {
    layout: "admin",
    components: {
        PostList
    }
}

</script>