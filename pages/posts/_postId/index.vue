<template>
    <div>
        <PostDetail :post="postTaken" />
    </div>
</template>

<script>
import PostDetail from "@/components/post/PostDetail"

export default {
    components: {
        PostDetail
    },
    asyncData(context, callback) {
        setTimeout(() => {
            callback(null, {
                postTaken: {
                    id: 1,
                    title: "future-17 ID =>(" + context.params.postId + ")",
                    subTitle: "ready for the future",
                    text: "some texttt",
                    author: "Mert"
                }
            })
        }, 1000)
    }
}
</script>