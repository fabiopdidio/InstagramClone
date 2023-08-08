<template>
  <form @submit.prevent="handleLogin" class="form-login">
    <div class="error-box">
      <ul>
        <li v-if="errorInputEmail">{{ errorInputEmail }}</li>
        <li v-if="errorInputPassword">{{ errorInputPassword }}</li>
      </ul>
    </div>
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
      password: '',
      // Variáveis para poder manipular erros
      errorInputEmail: '',
      errorInputPassword: ''
    }
  },
  methods: {
    handleLogin() {
      //Limpa os erros:
      this.errorInputEmail = ''
      this.errorInputPassword = ''
      // No caso do usuário não preencher o campo aparece o erro
      if (this.email === '') {
        this.errorInputEmail = 'Digite seu email'
      }
      if (this.password === '') {
        this.errorInputPassword = 'Digite sua senha'
      }
    }
  }
}
</script>

<style scoped>
.error-box {
  background-color: tomato;
  width: 80%;
  color: white;
}
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
