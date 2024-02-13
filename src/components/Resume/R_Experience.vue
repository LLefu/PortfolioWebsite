<script lang="ts">
export default {
  data() {
    return {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      clickedExperience: -1,
      experiences: [
        {
          name: "Havo",
          beginDate: new Date(2014, 8),
          endDate: new Date(2019, 6),
          icon: "/Icons/school.png",
          description: "With ICT as elective",
        },
        {
          name: "HBO",
          beginDate: new Date(2019, 8),
          endDate: new Date(2024, 6),
          icon: "/Icons/school.png",
          description:
            "During this study I am learning how to write code, make databases, build applications and analyse business processes. I also look at how companies operate and how IT-Solutions can help them. Ive created multiple web applications during this study and learned how to work with agile development.",
        },
        {
          name: "Internship AH",
          beginDate: new Date(2022, 8),
          endDate: new Date(2023, 1),
          icon: "/Icons/internship.png",
          description:
            "At AH tech labs I learned how to develop flutter applications while focussing on frontend. The internship also developed my agile skills and taught me what its like to work in a large company environment.",
        },
        {
          name: "Internship Arlanet",
          beginDate: new Date(2024, 1),
          endDate: new Date(2024, 6),
          icon: "/Icons/internship.png",
          description:
            "My graduation internship at Arlanet focusses on improving their onboarding processes, specifically when joining any ongoing projects. I will also be participating in projects to develop my skills and work experience.",
        },
      ],
    };
  },
  methods: {
    setSelectedExperience(index: number) {
      if (this.clickedExperience == index) {
        this.clickedExperience = -1;
        return;
      }
      this.clickedExperience = index;
    },
  },
};
</script>

<template>
  <div class="timeline">
    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="experiences"
    >
      <div class="d-flex experience" @click="setSelectedExperience(index)">
        <hr class="line2" />
        <p class="secondaryText" v-if="clickedExperience != index">
          {{
            months[experience.beginDate.getMonth()] +
            " " +
            experience.beginDate.getFullYear() +
            " - " +
            months[experience.endDate.getMonth()] +
            " " +
            experience.endDate.getFullYear()
          }}
        </p>
        <hr class="line1" />
        <div class="dot"></div>
        <div class="label" v-if="clickedExperience != index">
          <img :src="experience.icon" class="icon" />
          <h1 class="primaryText">{{ experience.name }}</h1>
        </div>
        <div v-else class="label">
          <p class="secondaryText">{{ experience.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.label {
  padding: 20px;
}
.modal-content {
  background-color: #000000;
  color: white;
}
.modal-dialog {
  display: flex;
  align-items: center;
  min-height: calc(100% - var(--bs-modal-margin) * 2);
}
.modal-backdrop {
  display: none;
}
.timeline {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.line2 {
  display: none;
  width: 100%;
  height: 3px;
  background-color: white;
  margin-top: 40px;
}
.line1 {
  width: 100%;
  height: 3px;
  background-color: white;
  margin-top: 40px;
}
.experiences {
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.experience {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}
.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: gray;
  margin-left: 15px;
  top: -22px;
  position: relative;
}
.icon {
  width: 40px;
}
.primaryText {
  font-size: 20px;
}

@media (max-width: 992px) {
  .timeline {
    flex-direction: column;
  }
  .line1 {
    display: none;
  }
  .line2 {
    display: block;
  }
  .dot {
    display: none;
  }
}
</style>
