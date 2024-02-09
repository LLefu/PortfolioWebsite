<script lang="ts">
export default {
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
  <div class="mainContent">
    <div class="primaryBackground wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark colBackground">
        <div class="container-fluid">
          <a class="navbar-brand primaryText" href="#">
            <img src="../assets/Logos/TommyLogo.png" class="mainLogo" />
            Tommy Bank
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="../assets/hamburger.png" class="hamburgerButton" />
          </button>
          <div
            class="collapse navbar-collapse textContent"
            id="navbarSupportedContent"
          >
            <p class="componentInvisible">Invisible :D</p>
            <form class="d-flex">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown secondaryText">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Socials
                  </a>
                  <ul
                    class="dropdown-menu animate slideIn"
                    aria-labelledby="navbarDropdown"
                  >
                    <li @click="openLinkedIn" class="d-flex socialLinks">
                      <img class="logo" src="../assets/Logos/linkedin.png" />
                      <a class="dropdown-item align-self-center" href="#"
                        >LinkedIn</a
                      >
                    </li>
                    <li @click="openInstagram" class="d-flex socialLinks">
                      <img class="logo" src="../assets/Logos/instagram.png" />
                      <a class="dropdown-item align-self-center" href="#"
                        >Instagram</a
                      >
                    </li>
                    <li @click="openDiscord" class="d-flex socialLinks">
                      <img class="logo" src="../assets/Logos/discord.png" />
                      <a class="dropdown-item align-self-center" href="#"
                        >Discord</a
                      >
                    </li>
                    <li @click="openEmail" class="d-flex socialLinks">
                      <img class="logo" src="../assets/mail.png" />
                      <a class="dropdown-item align-self-center" href="#"
                        >Email</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link secondaryText" href="#">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link secondaryText" href="#">Works</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div class="facade primaryComponent"></div>
    </div>
  </div>
</template>

<style scoped>
.socialLinks {
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
}
.socialLinks:hover {
  filter: invert(50%) sepia(40%) saturate(500%) hue-rotate(235deg);
}
@keyframes slideIn {
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }

  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}
.logo {
  height: 20px !important;
  width: 20px !important;
  padding-top: 0px;
  margin: 10px;
}
.navbar-toggler {
  border-width: 0px;
  color: transparent;
}
.hamburgerButton {
  height: 40px;
}
.hamburgerButton:hover {
  filter: brightness(0.5);
}
.animate {
  animation-duration: 0.3s;
  -webkit-animation-duration: 0.3s;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
}
.slideIn {
  -webkit-animation-name: slideIn;
  animation-name: slideIn;
}

.facade {
  width: 100vw;
  height: 40px;
  border-top-right-radius: 150px;
  border-top-left-radius: 150px;
}
.mainLogo {
  height: 50px;
}
.textContent {
  justify-content: space-between;
}
.navbar {
  padding: 10px;
}
.dropdown-item {
  margin-left: 0px;
  padding-left: 0px;
}
.dropdown-menu {
  background-color: #151419;
  border-width: 0px;
  padding: 0px;
  padding-right: 116px;
  margin-top: 0px !important;
  --bs-dropdown-link-active-bg: transparent;
  --bs-dropdown-link-hover-bg: transparent;
  --bs-dropdown-link-color: #80838a;
}
.nav-link:hover {
  color: #b183c7 !important;
}
@media (max-width: 992px) {
  .dropdown-menu {
    background-color: transparent;
    padding: 0px;
  }
  .wrapper {
    border-radius: 0px;
  }
}
</style>
