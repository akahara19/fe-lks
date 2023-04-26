<template>
    <main>
      <div class="card" style="margin-top: 50px;">
        <!-- form -->
        <form @submit.prevent="changePassword">
          <div class="input">
            <label for="old-password">Old Password</label>
            <input type="password" id="old-password" placeholder="Password" required class="inp">
          </div>
  
          <div class="input">
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" placeholder="Password" required class="inp">
          </div>    

          <div class="btn">
            <button type="submit" style="margin-top: 10px; padding: 4px 2px;">Change Password</button>  
          </div>
  
        </form>
      </div>
    </main>
  </template>
  
  <script>
  import axios from 'axios'
  import router from '@/router'
  
  export default {
    methods: {
      changePassword() {
        const old_password = document.getElementById('old-password').value
        const new_password = document.getElementById('new-password').value
        const token = localStorage.getItem('token')
  
        axios.post('http://localhost:8000/api/auth/reset_password', { old_password, new_password }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(() => {
            alert('Password changed successfully!')
            router.push('/')
          })
          .catch(error => {
            console.log(error)
            alert('Failed to change password')
          })
      }
    }
  }
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
  
  button{
    margin-left: 70px;
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

  button[type=submit]{
    margin: auto;
    width: 100%;
    display: inline-block;
    background-color:#fff;
    padding: 6px 12px;
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

  .btn{
    margin-top: 15px;
    margin-bottom: 20px;
  }
  </style>
  