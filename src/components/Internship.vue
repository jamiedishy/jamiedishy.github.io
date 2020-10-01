<template>
  <div>
    <b-row>
      <b-col>
        <header>
          <h1 class="display-3">Internships</h1>
        </header>
        <carousel
          paginationActiveColor="#ea4c4c"
          paginationColor="#f5e4c3"
          :perPageCustom="[
            [1, 1],
            [1200, 2]
          ]"
        >
          <slide>
            <b-card
              no-body
              class="mt-4 overflow-hidden background"
              style="max-width: 540px"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1397760804/0c8f2589508a0ac71a45b3f4d9937382.png"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      Support WebSphere Commerce deployment and integration with
                      Docker, SOLR, DB2, OMS, IHS and WAS. Identify defects
                      through log analysis and debugging code
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </slide>
          <slide>
            <b-card
              no-body
              class="mt-4 overflow-hidden background"
              style="max-width: 540px;"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://brandslogo.net/wp-content/uploads/2013/03/hcl-vector-logo.png"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </slide>
          <slide>
            <b-card
              no-body
              class="mt-4 mr-2 overflow-hidden background"
              style="max-width: 540px;"
            >
              <b-row no-gutters>
                <b-col md="6">
                  <b-card-img
                    src="https://lh3.googleusercontent.com/proxy/bmfpFnI_zDZfgxDAa8mKXcDzpNPI8GxxUGqIDaqgA88WdWl9apyfaoGjT8GwJ-XF_mlrk-IC4-QbsTYbRMq9XFdvIn_ORHU0t_6O6U4PvH8i6y1BT1XnXXeqH0GDvRHWGuYz7AoCPCuq_Y-FaxKQlozY1lv9"
                    alt="Image"
                    class="rounded-0"
                  ></b-card-img>
                </b-col>
                <b-col md="6">
                  <b-card-body title="Horizontal Card">
                    <b-card-text>
                      This is a wider card with supporting text as a natural
                      lead-in to additional content. This content is a little
                      bit longer.
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </slide>
        </carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Carousel from "./Carousel.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Internship",
  props: {
    msg: String
  },
  components: {
    carousel: Carousel,
    slide: Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  background-color: #0e2431;
  border-color: #ea4c4c;
}
</style>
