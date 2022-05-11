<template>
    <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
        <form @submit.prevent="onSubmit" style="width: 500px">
            <fieldset>
                <legend v-if="isEdit">EDIT POST</legend>
                <legend v-else >NEW POST</legend>
                <div class="form-group">
                    <label>author</label>
                    <input v-model="post.author" type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label>title</label>
                    <input v-model="post.title" type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label>sub Title</label>
                    <input v-model="post.subTitle" type="text" class="form-control" placeholder="">
                </div>
                <div class="form-group">
                    <label for="exampleTextarea">text</label>
                    <textarea v-model="post.text" class="form-control" rows="5"></textarea>
                </div>
                <button @click="$router.push('/admin')" class="btn btn-danger">Cancel</button>
                <button type="submit" class="btn btn-primary">Save</button>
            </fieldset>
        </form>
    </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         post: {
    //             title: null,
    //             subTitle: null,
    //             author: null,
    //             text: null
    //         }
    //     }
    // },
    created() {
        this.post = this.post ? this.post : this.post.default
            
    },
    props: {
        isEdit: {
            type: Boolean,
            required: false,
        },
        post: {
            type: Object,
            required: false,
            default() {
                return {
                    title: null,
                    subTitle: null,
                    author: null,
                    text: null
                }
            }
        }
    },
    methods: {
        onSubmit() {
            this.$emit("activated", this.post);
        }
    }
}

</script>