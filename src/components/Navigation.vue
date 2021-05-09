<template>
  <header class="header">
    <div class="nav-wrapper stroke">
      <router-link to="/" href="#" class="brand-logo">TheBook</router-link>
      <div class="nav-menu" :class="{ active: active }" @click="addActive">
        <ul id="nav" class="navv">
          <li class="nav-item">
            <router-link to="/" exact active-class="active" class="nav-link" >
              Библиотека
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/catalog" active-class="active" class="nav-link">
              Каталог
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link
              to="/login"
              active-class="active"
              class="nav-link"
            >
              Вход
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link
              to="/register"
              active-class="active"
              class="nav-link"
            >
              Регистрация
            </router-link>
          </li>
          <!-- <li class="nav-item" v-if="isLoggedIn">
            <router-link
              to="/profile"
              active-class="active"
              class="nav-link"
            >
              Профиль
            </router-link>
          </li> -->
          <li class="nav-item" v-if="isLoggedIn">
            <a
              to="/logout"
              active-class="active"
              class="nav-link"
              @click.prevent="logout"
            >
              Выход
            </a>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link
              to="/admin"
              active-class="active"
              class="nav-link"
              
            >
              admin
            </router-link>
          </li>
        </ul>
      </div>
      <div
        id="menuToggle"
        class="menuToggle"
        :class="{ active: active }"
        @click="addActive"
      >
        <input type="checkbox" />
        <span id="span1"></span>
        <span id="span2"></span>
        <span id="span3"></span>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      active: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  methods: {
      ...mapActions(["logout"]),
    addActive() {
      this.active = !this.active;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap");

.header {
  width: 100%;
  padding: 10px 0px;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffa500;
  z-index: 3;
}
.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
}
.navv {
  display: flex;
  position: relative;
  z-index: 10;
  margin: 0px 30px 0px 0px;
}

.nav-item {
  margin-right: 20px;
  padding: 0px;
  margin: 0px;
}
.nav-link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
}
.brand-logo {
  text-decoration: none;
  color: white;
  font-size: 36px;
  overflow: hidden;
  position: relative;
  margin: 0px 0px 0px 10px;
  z-index: 10;
}
#menuToggle {
  overflow: hidden;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

#menuToggle input {
  display: flex;
  width: 60px;
  height: 60px;
  position: absolute;
  cursor: pointer;
  opacity: 0; /* hide input */
  z-index: 1; /* top of the menu */
}

#menuToggle span {
  width: 55px;
  height: 8px;
  margin-bottom: 10px;
  background: white;
  border-radius: 4px;
  -webkit-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -moz-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -ms-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  -o-transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
  transition: all 0.5s cubic-bezier(0.08, 0.81, 0.87, 0.71);
}

#span1 {
  transform-origin: 4px 0px;
}

#span3 {
  transform-origin: bottom right;
}

#menuToggle input:checked ~ #span1 {
  background-color: white;
  transform: rotate(45deg) translate(8px);
}
#menuToggle input:checked ~ #span2 {
  background-color: white;
  transform: rotate(495deg) translate(4px);
}
#menuToggle input:checked ~ #span3 {
  background-color: white;
  transform: rotate(45deg);
  opacity: 0;
}

.nav-item {
  display: inline-block;
  padding: 0px;
}
.nav-link {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  margin: 0 10px;
}
.nav-link:hover {
  text-decoration: underline;
}

@media (max-width: 800px) {
  body {
    overflow: hidden;
  }
  .logo {
    margin-left: 60px;
  }

  #menuToggle {
    display: flex;
    position: relative;
    z-index: 9;
  }
  .nav {
    display: none;
  }

  .navv {
    position: relative;
    z-index: 3;
    display: flex;
  }
  .nav.active {
    top: 50px;
  }

  .nav-item {
    display: block;
  }
  .nav-item li {
    display: block;
    padding: 20px;
  }
  .nav-menu {
    position: fixed;
    top: -110%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease 0s;
    background-color: aqua;
    padding: 90px 0px 0px 0px;
  }
  .nav-menu.active {
    top: 0;
  }
  .navv {
    display: block;
    padding: 10px;
  }
  .brand-logo {
    margin: 0px 0px 0px 0px;
  }
  .nav-wrapper {
    padding: 0px 15px;
  }
}
</style>