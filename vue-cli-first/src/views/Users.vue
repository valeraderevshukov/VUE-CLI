<template>
  <div class="users">
    <UserList :users="list" @remove="remove" @save="save" />
  </div>
</template>

<script>
import axios from "axios";
import UserList from "@/components/UserList.vue";

export default {
  name: "UsersPage",
  components: { UserList },
  data() {
    return {
      list: []
    };
  },
  computed: {
    activeUsers() {
      return this.list.filter(item => item.isActive);
    }
  },
  watch: {
    // condition: {
    //   hendler: 'conditionChanged',
    //   deep: true
    // }
  },
  mounted() {
    this.loadList();
  },
  methods: {
    remove(id) {
      this.list = this.list.filter(item => item.id !== id);
    },
    save(item) {
      axios
        .patch(`http://localhost:3004/users/${item.id}`, {
          firstName: item.firstName,
          lastName: item.lastName
        })
        .catch(error => console.error(error));
    },
    loadList: function() {
      axios
        .get("http://localhost:3004/users")
        .then(response => (this.list = response.data))
        .catch(error => console.error(error));
    }
  }
};
</script>
