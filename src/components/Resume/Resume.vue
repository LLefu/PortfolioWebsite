<script lang="ts">
import R_Profile from "./R_Profile.vue";
import R_Experience from "./R_Experience.vue";
import R_Skills from "./R_Skills.vue";

export default {
  data() {
    return {
      show: false,
      activeIndex: 1,
      components: [
        { name: "Experience", component: R_Experience },
        { name: "Profile", component: R_Profile },
        { name: "Skills", component: R_Skills },
      ],
      imagePaths: [
        "/src/assets/icons/experienceIcon.png",
        "/src/assets/profileImage.jpg",
        "/src/assets/icons/skillIcon.png",
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    switchComponent(direction: number) {
      if (direction == 0) {
        this.activeIndex = 0;
        document.documentElement.style.setProperty("--direction", "-1");
        return;
      }
      if (direction == 2) {
        this.activeIndex = this.components.length - 1;
        document.documentElement.style.setProperty("--direction", "1");
        return;
      }
      const newIndex = this.activeIndex + direction;
      if (newIndex >= 0 && newIndex < this.components.length) {
        this.activeIndex = newIndex;
        document.documentElement.style.setProperty(
          "--direction",
          direction === 1 ? "-1" : "1"
        );
      }
    },
  },
  computed: {
    activeComponent() {
      return this.components[this.activeIndex];
    },
  },
  components: { R_Profile, R_Experience },
};
</script>

<template>
  <Transition>
    <div v-if="show" class="mainContainer">
      <div class="content">
        <a
          class="downloadButton"
          href="/src/assets/TommyBankCV2024.pdf"
          download="TommyBankCV2024.pdf"
        >
          <img src="../../assets/icons/downloads.png" class="smallIcon" />
          <p>Download Resume</p></a
        >
        <div class="selectorDesktop">
          <img
            v-if="activeIndex != 0"
            @click="switchComponent(-1)"
            :src="imagePaths[activeIndex - 1]"
            class="iconImage smaller"
          />
          <img
            v-else
            @click="switchComponent(2)"
            :src="imagePaths[imagePaths.length - 1]"
            class="iconImage smaller"
          />
          <img
            :src="imagePaths[activeIndex]"
            :class="activeIndex == 1 ? 'iconImage p-0' : 'iconImage'"
          />
          <img
            v-if="activeIndex < components.length - 1"
            @click="switchComponent(1)"
            :src="imagePaths[activeIndex + 1]"
            class="iconImage smaller"
          />
          <img
            v-else
            @click="switchComponent(0)"
            :src="imagePaths[0]"
            class="iconImage smaller"
          />
        </div>
        <div class="selectorMobile">
          <h1 class="arrow" @click="switchComponent(-1)">
            {{ activeIndex != 0 ? "<" : "<\\" }}
          </h1>
          <img
            :src="imagePaths[activeIndex]"
            :class="activeIndex < 1 ? 'iconImage p-0' : 'iconImage'"
          />
          <h1 class="arrow" @click="switchComponent(1)">
            {{ activeIndex < components.length - 1 ? ">" : "/>" }}
          </h1>
        </div>
        <Transition name="slide" class="slide">
          <component :is="activeComponent.component" />
        </Transition>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.smallIcon {
  width: 20px;
  height: 20px;
  padding: 2px;
  margin: 10px;
}
.downloadButton {
  display: flex;
  align-items: center;
  background-color: rgba(141, 172, 230, 0.425);
  border-radius: 5000px;
  text-decoration: none;
  color: white;
  position: relative;
  right: -80%;
  padding-left: 10px;
  padding-right: 10px;
}

.downloadButton p {
  margin-top: revert;
}

.arrow {
  padding: 20px;
  width: 100px;
  color: white;
  cursor: pointer;
}
.hidden {
  opacity: 0;
  width: 10vw !important;
  height: 10vw !important;
  margin: 10px;
}
.smaller {
  cursor: pointer;
  width: 10vw !important;
  height: 10vw !important;
  border-color: transparent !important;
  margin: 10px;
}
.smaller:hover {
  padding: 20px !important;
}
.selectorDesktop {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.selectorMobile {
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
}
.content {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  text-align: center;
}
.iconImage {
  flex: 1;
  border-radius: 100%;
  height: 15vw;
  width: 15vw;
  padding: 40px;
  border-style: solid;
  border-color: #b183c7;
  border-width: 5px;
  background-color: rgba(0, 0, 0, 0.425);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.slide {
  margin-top: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(calc(-100% * var(--direction)));
}

@media (max-width: 992px) {
  .iconImage {
    padding: 10px;
    border-width: 2px;
    width: 30vw;
    height: 30vw;
  }
  .selectorMobile {
    display: flex;
  }
  .selectorDesktop {
    display: none;
  }
  .downloadButton p {
    display: none;
  }
}
</style>
