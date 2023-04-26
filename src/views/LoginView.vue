<template>
  <main>
    <div class="card" style="margin-top: 50px;">
      <!-- form -->
      <form action="" @submit.prevent="submitLogin">
        <div class="">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" v-model="form.username" placeholder="Username" autocomplete="off" required class="inp">
        </div>
        <div class="">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" required class="inp" v-model="form.password">
        </div>

        <div class="btn">
          <button type="submit" style="margin-top: 10px; padding: 4px 2px;">Login</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import router from '@/router';

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    submitLogin() {
      axios.post('http://localhost:8000/api/auth/login', this.form)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          router.push('/profile');
          // handle success response here
        })
        .catch(error => {
          alert('Username or passwrod incorrect!')
          // handle error response here
        });
    },
  },
};
</script>

<style>
  .card{
    background: rgba(0, 189, 126);
    width: 300px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    margin-left: -30%;
  }

  button[type=submit]{
    margin: auto;
    width: 100%;
    display: inline-block;
    background-color:#fff;
    padding: 10px 12px;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #000;
    border-color: rgba(0, 189, 126);
    border-radius: 0.25rem;
  }

  button:hover{
    margin: auto;
    width: 100%;
    color: #fff;
    background-color:green;
    border-color: #000;
    
  }
  

  label{
    color: #000;
    display: block;
    text-align: center;
    margin-bottom: 5px;
    margin-top: 15px;
    font-weight: 600;
  }

  .inp{
    text-align: center;
    padding: 4px 10px;
    width: 100%;
    border-radius: 5px;
    outline: none;
  }

  .btn{
    margin-top: 15px;
    margin-bottom: 20px;
  }
</style>



