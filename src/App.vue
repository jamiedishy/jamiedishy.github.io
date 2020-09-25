<template>
  <div id="app">
    <b-container class="mt-3 mb-5">
      <b-navbar variant="faded">
        <b-navbar-brand to="/">
          <font-awesome-icon
            @mouseover="logo = true"
            @mouseleave="logo = false"
            :class="{ 'c-red': logo, 'c-cream': !logo }"
            icon="coffee"
          />
        </b-navbar-brand>
      </b-navbar>
      <b-row>
        <b-col>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      logo: false
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald|Sacramento&display=swap");
h1 {
  font-family: "Sacramento";
}
p {
  font-family: "Oswald";
  font-size: 1.25rem;
  letter-spacing: 2px;
}
section {
  font-family: "Sacramento";
  font-size: 2rem;
}
div {
  color: #f5e4c3;
}
.c-red {
  color: #ea4c4c;
  text-decoration: none;
}
.c-cream {
  color: #f5e4c3;
  text-decoration: none;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-leave-to {
  opacity: 0;
}
</style>
