<template>
  <section id="hero">
    <v-parallax dark src="#" height="1150" >
      <v-row align="center" justify="center">
        <v-col cols="12">
          <v-row align="center" justify="center" class="parallax">
            <v-col cols="12" style="text-align: center; padding-top: 100px;">
              <h1 class="display-2 font-weight-bold mb-4">Generator Number</h1>
              <h1 class="font-weight-light">
                This is an application to generate random numbers according to certain selected criteria. <br />
                In order to fulfill the recruitment test task.<br />
                Thank you.
              </h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <tab />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="svg-border-waves">
      <img src="~@/assets/img/wave2.svg" />
    </div>
    <about/>
  </section>
</template>

<script>

import about from "./AboutSection.vue";
import tab from "./TabSection.vue";

export default {

  name: "Home",
  components: {
    about,
    tab
  },
  data() {
    return {
      dialog: false,
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">

.parallax {
  color: #171B34 !important;
}

.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
