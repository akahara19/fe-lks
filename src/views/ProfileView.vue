<template>
    <div class="container">
      <h1>Hello {{ name }}</h1>
  
  
      <button type="submit" class="buttonLogout" @click="logout">Logout</button>
      
      <!-- <select >
        <option>
          
        </option>
      </select> -->

      <a href="/changepass" class="change">Change Password</a>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from '@/router';

  export default {
    data() {
      return {
        name: '',
      };
    },
    mounted() {
        const token = localStorage.getItem('token') // Mengambil nilai token dari local storage

        axios.post('http://localhost:8000/api/auth/me', null, { // Menambahkan header Authorization
        headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            this.name = response.data.name;
        })
        .catch(error => {
            console.log(error);
        });
    },
    methods: {
        logout() {
            const token = localStorage.getItem('token');
            axios.post('http://localhost:8000/api/auth/logout', null, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            })
            .then(response => {
                localStorage.removeItem('token'); // hapus token dari local storage saat berhasil logout
                router.push('/', {reload: true});
                alert('logout success')
                // tambahkan kode untuk mengarahkan pengguna ke halaman login setelah logout berhasil
            })
            .catch(error => {
                alert('login dulu')
            });
        },
    },

    
};
  </script>
  
  <style>
    button{
        padding: 6px 100px;
        background-color: #00BD7E;
        color: #fff;
        position: absolute;
        bottom: 300px;
        left: 300px;
        width: 10px;
        text-align: center;
    }


    .container{
      display: flex;
      place-items: center;
      flex-direction: column;
      position: relative;
    }

    h1{
      right: 40%;
    }

    .change{  
      align-self: flex-end;
      top: 360px;
      left: 360px;
    }

   
  </style>
  