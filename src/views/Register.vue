<template>
  <div class="register">
    <div class="row">
      <div class="card mx-auto">
        <div class="card-header text-black">
          <h4>Register</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="username">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                v-model="name"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                v-model="email"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                id="password"
                v-model="password"
              />
            </div>
            <button class="btn btn-primary">Register</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link"
              >Already have an account?</router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        password: this.password,
        email: this.email,
        name: this.name,
      };
      this.register(user).then(() => {
        this.$router.push("login");
      });
    },
  },
};
</script>

<style scoped>
h4 {
  text-align: center;
}
.register {
  margin: 150px 0px 0px 0px;
}
.card {
  width: 60%;
  padding: 0;
}
.btn {
  border-radius: 0;
}
.form-control {
  border-radius: 0;
}
.card-header {
  background-color: white;
  display: flex;
  justify-content: center;
}
</style>