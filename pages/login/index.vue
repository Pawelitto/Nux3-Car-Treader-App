<script setup>
definePageMeta({
  layout: 'custom',
});
</script>
<template>
  <div class="form">
    <div class="form__c">
      <h3>Log In</h3>
      <hr />
      <span>Email</span>
      <input class="form__i" type="email" />
      <span>Password</span>
      <input class="form__i" type="password" />
      <button type="submit">Log In</button>
    </div>
    <div class="form__c">
      <h3>Sign In</h3>
      <hr />
      <span>Email</span>
      <input class="form__i" type="email" />
      <span>Password</span>
      <input class="form__i" type="password" />
      <span>Repeat password</span>
      <input class="form__i" type="password" />
      <button type="submit">Sign In</button>
    </div>
  </div>
</template>
