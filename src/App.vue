<template>
  <div id="app">
    <b-container class="my-5">
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
div {
  color: #f9dc5c;
}
.c-red {
  color: #ea4c4c;
  text-decoration: none;
}
.c-cream {
  color: #f9dc5c;
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
