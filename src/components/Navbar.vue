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
    <div class="wrapper">
      <nav
        class="navbar primaryBackground navbar-expand-lg navbar-dark colBackground"
      >
        <div class="container-fluid">
          <router-link class="navbar-brand primaryText" to="/profile">
            <img src="../assets/Logos/TommyLogo.png" class="mainLogo" />
            Tommy Bank
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="../assets/icons/hamburger.png" class="hamburgerButton" />
          </button>
          <div
            class="collapse navbar-collapse textContent"
            id="navbarSupportedContent"
          >
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
                      <img class="logo" src="../assets/icons/mail.png" />
                      <a class="dropdown-item align-self-center" href="#"
                        >Email</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link secondaryText" to="/resume"
                    >Resume</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link class="nav-link secondaryText" to="/works"
                    >Works</router-link
                  >
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
      <div class="facade"></div>
    </div>
  </div>
</template>

<style scoped>
.navbar-collapse {
  flex-grow: 0;
}
.mainContent {
  margin-bottom: 20px;
  width: 100vw;
}
.navbar-brand {
  padding-top: 10px;
}
.facade {
  width: 100vw;
  height: 34px;
  top: -5px;
  position: relative;
  background-image: url('data:image/svg+xml;charset=utf8, <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35.28 2.17" preserveAspectRatio="none"><path d="M0 .5c3.07.55 9.27-.42 16.14 0 6.88.4 13.75.57 19.14-.11V0H0z" fill="%23000000"/><path d="M0 1c3.17.8 7.29-.38 10.04-.55 2.75-.17 9.25 1.47 12.67 1.3 3.43-.17 4.65-.84 7.05-.87 2.4-.02 5.52.88 5.52.88V0H0z" opacity=".5" fill="%23000000"/><path d="M0 1.85c2.56-.83 7.68-.3 11.79-.42 4.1-.12 6.86-.61 9.58-.28 2.73.33 5.61 1.17 8.61 1 3-.19 4.73-.82 5.3-.84V.1H0z" opacity=".5" fill="%23000000"/></svg>');
}
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
.mainLogo {
  height: 50px;
}
.textContent {
  justify-content: space-between;
}
.dropdown-item {
  margin-left: 0px;
  padding-left: 0px;
}
.dropdown-menu {
  background-color: #000000;
  border-width: 0px;
  padding: 0px;
  padding-right: 94px;
  margin-top: 0px !important;
  --bs-dropdown-link-active-bg: transparent;
  --bs-dropdown-link-hover-bg: transparent;
  --bs-dropdown-link-color: #80838a;
  z-index: 999;
}
.nav-link:hover {
  color: #b183c7 !important;
}

@media (max-width: 992px) {
  .navbar-brand {
    padding-top: 0px;
  }
  .dropdown-menu {
    background-color: transparent;
    padding: 0px;
  }
  .wrapper {
    border-radius: 0px;
  }
}
</style>
