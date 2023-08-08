<template>
  <form @submit="handleLogin" class="form-login">
    <input type="text" placeholder="Digite seu email" v-model="email" />
    <input type="password" placeholder="Digite sua senha" v-model="password" />
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
  width: 100%;
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
</style>
