<template>
<div class="blog-card-wrap">
    <div class="blog-cards container">
        <div class="toggle-edit">
            <span>Toggle Editing</span>
            <input type="checkbox" v-model="editPost">
        </div>
        <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
    </div>
</div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
export default{
    name: "blogs",
    components: {},
    computed: {
        sampleBlogCards(){
            return this.$store.state.sampleBlogCards
        }
    }
}
</script>

<style lang="scss" scoped>
input[type="checkbox"]{
    position: relative;
    border: none;
    -webkit-appearance: none;
    background: white;
    outline: none;
    width: 80px;
    height: 30px

}
</style>