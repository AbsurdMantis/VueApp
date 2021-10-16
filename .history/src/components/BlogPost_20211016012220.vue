<template>
  <div class="blog-wrapper">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
        <h2 v-else>{{post.title}}</h2>
        <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
        <p class="content-preview" v-else>{{post.blogHTML}}</p>
        <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
          Log In/Register<arrow class="arrow arrow-light" />
        </router-link>
        <router-link class="link link-light" v-else to="#">
          View Post<arrow class="arrow arrow-light" />
        </router-link>
      </div>
      <div class="blog-photo">
        <img v-if="post.welcomeScreen" :src="requite('../assets/blogPhotos/${post.photo}.jpg')" alt="Image not avaiable" />
        <img v-else :src="requite('../assets/blogPhotos/${post.blogCoverPhoto}.jpg')" alt="Image not avaiable" />
      </div>
    </div>
  </div>
</template>

<script>
import arrow from "../assets/Icons/arrow-right-light.svg"
export default {
    name: "blogPost",
    props: ["post"],
}
</script>

<style lang="scss" scoped>

</style>