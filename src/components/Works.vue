<script lang="ts">
export default {
  data() {
    return {
      show: false,

      works: [
        {
          title: "Kapperij de Passage",
          link: "https://www.kapperijdepassage.nl/",
          image: "/src/assets/works/passage.png",
        },
        {
          title: "Portfolio",
          link: "http://localhost:5173/profile",
          image: "/src/assets/works/portfolio.png",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
};
</script>

<template>
  <Transition>
    <div v-if="show" class="workCase">
      <a
        v-for="(work, index) in works"
        :key="index"
        class="work"
        :href="work.link"
      >
        <img :src="work.image" />
        <h1 class="primaryText">{{ work.title }}</h1>
      </a>
    </div>
  </Transition>
</template>

<style scoped>
.workCase {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
a:link {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
.primaryText {
  font-size: 25px;
}
.work {
  background-color: rgba(0, 0, 0, 0.425);
  margin: 20px;
  border-radius: 20px;
}

.work img {
  border-radius: 30px;
  padding: 20px;
  width: 400px;
  height: 250px;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
