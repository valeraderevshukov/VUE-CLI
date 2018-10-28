<template>
  <div>
    <input type="text" v-model="user.firstName" >
    <input type="text" v-model="user.lastName" >
  </div>
</template>

<script>
export default {
  name: "UserForm",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
