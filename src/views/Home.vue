<template>
  <div class="home">
    <b-row>
      <b-col>
        <header class="text-center">
          <img
            @mouseover="change4 = true"
            @mouseleave="change4 = false"
            alt="coffee cup"
            src="../assets/coffee.png"
          />
          <h1 class="mt-2 display-3">Hi I'm Jamie!</h1>
          <p class="my-3">
            I'm a passionate, curious and driven software engineering student
            who's notorious for
            <span :class="{ 'c-red': change4, 'c-cream': !change4 }"
              >lipstick-stained</span
            >
            coffee cups.
          </p>
          <hr class="my-5 header-rule" />
        </header>

        <section class="text-center mt-2 mb-5">
          <b-row>
            <b-col>
              <span @mouseover="change1 = true" @mouseleave="change1 = false">
                <b-link
                  :class="{ 'c-red': change1, 'c-cream': !change1 }"
                  to="/about/internship"
                >
                  <font-awesome-icon icon="coffee" class="mr-2" />Internships
                </b-link>
              </span>
              <span
                @mouseover="change2 = true"
                @mouseleave="change2 = false"
                class="mr-2 ml-2"
              >
                <b-link
                  :class="{ 'c-red': change2, 'c-cream': !change2 }"
                  to="/about/projects"
                >
                  <font-awesome-icon icon="coffee" class="mr-2" />Projects
                </b-link></span
              >
              <span @mouseover="change3 = true" @mouseleave="change3 = false">
                <b-link
                  :class="{ 'c-red': change3, 'c-cream': !change3 }"
                  to="/about/education"
                >
                  <font-awesome-icon icon="coffee" class="mr-2" />Education
                </b-link></span
              >
            </b-col>
          </b-row>
        </section>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  props: ["dynamicComponentName"],
  components: {
    // HelloWorld
  },
  data() {
    return {
      change1: false,
      change2: false,
      change3: false,
      change4: false
    };
  },
  methods: {}
};
</script>

<style scoped>
.c-red {
  color: #ea4c4c;
  text-decoration: none;
}
.c-cream {
  color: #f5e4c3;
  text-decoration: none;
}
img {
  width: 20%;
}
.coffee {
  list-style-image: url("../assets/coffee.png");
  width: 10%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
