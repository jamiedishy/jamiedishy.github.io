<template>
  <div id="app">
    <b-container class="my-5">
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

<style>
.c-cream {
  color: #f9dc5c;
  text-decoration: none;
}
h1 {
  color: #f9dc5c;
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
