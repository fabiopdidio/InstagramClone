<template>
  <form @submit.prevent="handleLogin" class="form-login">
    <input type="text" placeholder="Digite seu email" v-model="email" />
    <input type="password" placeholder="Digite sua senha" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {}
  }
}
</script>

<style scoped>
.form-login {
  margin: 40px auto;
  width: 40%;
  border-radius: 4px;
  border: 1px solid #383737;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
}

.input-area {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.input-area input {
  width: 100%;
}

.texto-erro {
  color: red;
  margin: 4px;
}

input {
  height: 54px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #756767;
  outline: none;
}

button {
  width: 80%;
  height: 54px;
  background-color: #3578e5;
  color: white;
  font-size: 18px;
  border-radius: 8px;
  border: none;
}

button:hover {
  background-color: #286ee0;
}

.input-error {
  border-color: red;
}
</style>
