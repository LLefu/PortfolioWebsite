<script lang="ts">
export default {
  data() {
    return {
      skills: [
        {
          name: "Javascript",
          icon: "/src/assets/Icons/javascript.svg",
        },
        {
          name: "Css",
          icon: "/src/assets/Icons/css.png",
        },
        {
          name: "HTML",
          icon: "/src/assets/Icons/html.png",
        },
        {
          name: "Kotlin",
          icon: "/src/assets/Icons/kotlin.png",
        },
        {
          name: "Flutter",
          icon: "/src/assets/Icons/flutter.png",
        },
        {
          name: "React",
          icon: "/src/assets/Icons/react.png",
        },
        {
          name: "Next.js",
          icon: "/src/assets/Icons/next.png",
        },
        {
          name: "Vue.js",
          icon: "/src/assets/Icons/vue.png",
        },
        {
          name: "Vite",
          icon: "/src/assets/Icons/vite.svg",
        },
        {
          name: "Angular",
          icon: "/src/assets/Icons/angular.png",
        },
        {
          name: "Java",
          icon: "/src/assets/Icons/java.png",
        },
        {
          name: "Photoshop",
          icon: "/src/assets/Icons/photoshop.png",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="skillCase">
    <div v-for="(skill, index) in skills" :key="index" class="skill">
      <img class="skillIcon" :src="skill.icon" />
      <h1 class="skillTitle">{{ skill.name }}</h1>
    </div>
  </div>
</template>

<style>
.skillCase {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.skill {
  background-color: rgba(0, 0, 0, 0.425);
  border-radius: 20px;
  padding: 10px;
  width: 100px;
  height: 100px;
  margin: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill:hover .skillIcon {
  opacity: 0.2;
}
.skill:hover .skillTitle {
  display: block;
}
.skillIcon {
  padding: 10px;
  height: 80px;
}
.skillTitle {
  padding: 20px;
  font-size: 15px;
  font-weight: bolder;
  display: none;
  color: white;
  position: absolute;
  text-align: center;
}
</style>
