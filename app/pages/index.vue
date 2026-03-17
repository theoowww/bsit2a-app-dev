<template>
  <div class="d-flex justify-center align-center" 
    style="height: 100vh"> 
      <v-card width="400" class="text-center" elevation="12">
        <!-- LOGO -->
         <v-icon size="80" color="secondary" class="mt-10">mdi-apple</v-icon>
        <v-card-text class="py-10">
          <!-- Username TextField -->
           <v-text-field
           variant="outlined"
           v-model="username"
           flat 
           label="username" 
           prepend-icon="mdi-account"
           clearable
           ></v-text-field>
          <!-- Password TextField -->
           <v-text-field
           variant="outlined"
           flat 
           label="Password" 
           prepend-icon="mdi-lock"
           type="password"
           clearable
           ></v-text-field>
          <!-- Signin Button -->
           <v-btn color="primary" @click="login" block>SIGN IN</v-btn>
        </v-card-text>
      </v-card>
  </div>
</template>

<script setup>
definePageMeta({
    layout: 'auth',
})
const defaultUsername = ref("admin");
const defaultPassword = ref("admin123");
const username = ref("");
const password = ref("");


// Regular function 
function login() {
  alert("Login function called");
}
</script>