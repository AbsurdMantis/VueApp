<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View Recent Post</h3>
        <div class="blog-cards">
          <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register your account today!</h2>
        <router-link class="router-button" to="#">
          Register for FireBlogs
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue"
import BlogCards from "../components/BlogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: {
    BlogPost,
    BlogCards,
    Arrow
  },
  data() {
      return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekly blog articles with all things programming including HTML,CSS,JavaScript and more. Register today to never miss a post...",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filler Title!",
          blogHTML: "This is a filler blog post title!",
          blogCoverPhoto: "design for everyone",
        },
      ],
      sampleBlogCards: [
        {blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "October 15, 2021"},
        {blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "October 15, 2021"},
        {blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "October 15, 2021"},
        {blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "October 15, 2021"},
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px; 
  }
}
</style>
