<template>
  <div class="mt-5 home">
    <b-row>
      <b-col>
        <header class="text-center">
          <img alt="coffee cup" src="../assets/coffee.png" />
          <h1 class="display-3">Hi I'm Jamie!</h1>
          <p class="my-3 lead ">
            I'm a passionate, curious and driven software engineering student
            who can always be caught with a lipstick-stained coffee cup in hand.
          </p>
        </header>
        <section class="my-5">
          <ul>
            <li
              @mouseover="change1 = true"
              @mouseleave="change1 = false"
              class="lead mb-2"
            >
              <b-link
                :class="{ 'c-red': change1, 'c-cream': !change1 }"
                class="c-cream"
                to="/about/internship"
              >
                <font-awesome-icon icon="coffee" class="mr-2" />Internships
              </b-link>
            </li>
            <li
              @mouseover="change2 = !change2"
              @mouseleave="change2 = !change2"
              class="lead mb-2"
            >
              <b-link
                :class="{ 'c-red': change2, 'c-cream': !change2 }"
                class="c-cream"
                to="/about/projects"
              >
                <font-awesome-icon icon="coffee" class="mr-2" />Projects
              </b-link>
            </li>
            <li
              @mouseover="change3 = !change3"
              @mouseleave="change3 = !change3"
              class="lead mb-2"
            >
              <b-link
                :class="{ 'c-red': change3, 'c-cream': !change3 }"
                to="/about/education"
              >
                <font-awesome-icon icon="coffee" class="mr-2" />Education
              </b-link>
            </li>
          </ul>
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
      change3: false
    };
  },
  methods: {}
};
</script>

<style scoped>
img {
  width: 15%;
}
.c-red {
  color: #ea4c4c;
}
.bg-blue {
  background-color: rgb(14, 36, 49);
  border-color: #f9dc5c;
}
div {
  color: #f9dc5c;
}
.c-cream {
  color: #f9dc5c;
  text-decoration: none;
}
ul {
  list-style-type: none;
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
