<template>
  <div class="container">
      <div class="row  mt-5">
        <div class="col-md-4 offset-4 card card-primary p-3 border" :class="{'border-primary' : isUser, 'border-success' : !isUser }">
          <h3
            :class="{'text-primary' : isUser, 'text-success' : !isUser }"
            class="text-center mb-3 mt-3">Nuxt.js | Auth</h3>
          <hr>

          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label>E-mail</label>
              <input v-model="user.email" type="email" class="form-control" placeholder="E-posta adresinizi giriniz">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input v-model="user.password" type="password" class="form-control" placeholder="Şifreniz...">
            </div>
            <div class="button-container d-flex flex-column align-items-center">
              <button type="submit" :class="{'btn-primary' : isUser, 'btn-success' : !isUser }" class="btn btn-block mb-2">
                {{ isUser ? 'Log in' : 'Sign in' }}
              </button>
              <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                {{ isUser ? 'dont have account' : 'i have account :)'}}
              </a>
            </div>
          </form>

        </div>
      </div>
    </div>
</template>
<script>
import axios from "axios"

  export default {
    data(){
      return {
        user : {
          email : null,
          password : null
        },
        isUser : false
      }
    },
    methods : {
      onSubmit(){
        let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
        if(this.isUser) {
          authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
        }

        axios.post(authLink + process.env.firebaseAPIKey, {
            email: this.user.email, 
            password: this.user.password, 
            returnSecureToken: true
        }).then(res => {
            this.$store.dispatch("login", res.data.idToken)
            this.$router.push("/")
        })

      }
    }
  }
</script>
