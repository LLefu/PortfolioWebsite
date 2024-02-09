<script lang="ts">
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 500);
  },
  methods: {
    openInstagram() {
      window.open("https://www.instagram.com/_tommy_1812/");
    },
    openLinkedIn() {
      window.open("https://www.linkedin.com/in/tommy-bank/");
    },
    openEmail() {
      window.open("mailto:tommybank1812@gmail.com?subject= &body= ");
    },
    openDiscord() {
      window.open("https://discord.com/users/176719288860672001");
    },
  },
};
</script>

<template>
  <Transition>
    <div v-if="show">
      <div class="centerContainer">
        <div class="logoCase">
          <img
            class="logo"
            @click="openLinkedIn"
            src="../assets/Logos/linkedin.png"
          />
          <img class="logo" @click="openEmail" src="../assets/mail.png" />
        </div>
        <img src="../assets/profileImage.jpg" class="profileImage" />
        <div class="logoCase">
          <img
            class="logo"
            @click="openInstagram"
            src="../assets/Logos/instagram.png"
          />
          <img
            class="logo"
            @click="openDiscord"
            src="../assets/Logos/discord.png"
          />
        </div>
      </div>
      <div class="mobileLogoCase">
        <img
          class="logo"
          @click="openLinkedIn"
          src="../assets/Logos/linkedin.png"
        />
        <img class="logo" @click="openEmail" src="../assets/mail.png" />
        <img
          class="logo"
          @click="openInstagram"
          src="../assets/Logos/instagram.png"
        />
        <img
          class="logo"
          @click="openDiscord"
          src="../assets/Logos/discord.png"
        />
      </div>
      <div class="textBox">
        <h1 class="primaryText nameText">Tommy Bank</h1>
        <p class="secondaryText subText">Software Engineer</p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.mobileLogoCase {
  display: none;
  justify-content: center;
}
.textBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nameText {
  font-size: 50px !important;
  margin-top: 20px;
  text-align: center;
}
.subText {
  font-size: 30px !important;
  margin-top: 20px;
  text-align: center;
}
.centerContainer {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.logoCase {
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  display: flex;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.logo {
  height: 40px;
  widows: 40px;
  cursor: pointer;
  margin: 10px;
}
.logo:hover {
  filter: invert(50%) sepia(40%) saturate(500%) hue-rotate(235deg);
}
.profileImage {
  border-radius: 100%;
  height: 20vw;
  width: 20vw;
  border-style: solid;
  border-color: #b183c7;
  border-width: 5px;
}
.showHover {
  display: none;
}
.showHover:hover {
  display: block;
}
@media (max-width: 600px) {
  .profileImage {
    border-radius: 100%;
    height: 70vw !important;
    width: 70vw !important;
    border-style: solid;
    border-color: #352542;
    border-width: 5px;
  }
  .logoCase {
    display: none;
  }
  .mobileLogoCase {
    display: flex;
  }
}
@media (max-width: 992px) {
  .profileImage {
    border-radius: 100%;
    height: 50vw;
    width: 50vw;
    border-style: solid;
    border-color: #352542;
    border-width: 5px;
  }
  .logoCase {
    display: none;
  }
  .mobileLogoCase {
    display: flex;
  }
}
</style>
