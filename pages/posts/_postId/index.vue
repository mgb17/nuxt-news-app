<template>
    <div>
        <PostDetail :post="postTaken" />
    </div>
</template>

<script>
import PostDetail from "@/components/post/PostDetail"
import axios from "axios"

export default {
    components: {
        PostDetail
    },
    asyncData(context) {
        return axios.get("https://nuxt-blog-app-3ebfb-default-rtdb.europe-west1.firebasedatabase.app/posts/" + context.params.postId + ".json")
                    .then(res => {
                        return {
                            postTaken: res.data
                        }
                    })
    }

    // asyncData(context, callback) {
    //     setTimeout(() => {
    //         callback(null, {
    //             postTaken: {
    //                 id: 1,
    //                 title: "future-17 ID =>(" + context.params.postId + ")",
    //                 subTitle: "ready for the future",
    //                 text: "some texttt",
    //                 author: "Mert"
    //             }
    //         })
    //     }, 1000)
    // }
}
</script>