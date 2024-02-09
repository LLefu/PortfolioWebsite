<script lang="ts">
import R_Profile from "./R_Profile.vue";
import R_Experience from "./R_Experience.vue";
import R_Skills from "./R_Skills.vue";
import R_Contact from "./R_Contact.vue";

export default {
  data() {
    return {
      show: false,
      activeIndex: 0,
      components: [
        { name: "Profile", component: R_Profile },
        { name: "Experience", component: R_Experience },
        { name: "Skills", component: R_Skills },
        { name: "Contact", component: R_Contact },
      ],
      imagePaths: [
        "/src/assets/profileImage.jpg",
        "/src/assets/icons/experienceIcon.png",
        "/src/assets/icons/skillIcon.png",
        "/src/assets/icons/contactIcon.png",
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
        <div class="selector">
          <h1 class="arrow" @click="switchComponent(-1)">
            {{ activeIndex != 0 ? "<" : "<\\" }}
          </h1>
          <img
            :src="imagePaths[activeIndex]"
            :class="activeIndex < 1 ? 'profileImage' : 'iconImage'"
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
.arrow {
  padding: 20px;
  width: 100px;
  color: white;
  cursor: pointer;
}
.selector {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
}
.noOverflow {
  overflow: hidden;
}
.mainContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
.centerContainer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.profileImage {
  border-radius: 100%;
  height: 20vw;
  width: 20vw;
  border-style: solid;
  border-color: #b183c7;
  border-width: 5px;
}
.iconImage {
  border-radius: 100%;
  height: 20vw;
  width: 20vw;
  padding: 40px;
  border-style: solid;
  border-color: #b183c7;
  border-width: 5px;
  background-color: #151419;
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
</style>
