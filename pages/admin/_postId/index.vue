<template>
    <div>
        <PostForm :isEdit="true" />
    </div>

</template>

<script>
import PostForm from "@/components/admin/PostForm"

export default {
    components: {
        PostForm
    }
}

</script>