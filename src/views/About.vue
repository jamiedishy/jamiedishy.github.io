<template>
  <div class="about">
    <div class="mt-3 home">
      <b-row>
        <b-col>
          <component :is="dynamicComponentName" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Internship from "@/components/Internship.vue";
import Education from "@/components/Education.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "About",
  props: ["dynamicComponentName"],
  components: {
    internship: Internship,
    education: Education,
    projects: Projects
  }
};
</script>

<style scoped>
h1 {
  color: #f5e4c3;
}
</style>
