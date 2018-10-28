<template>
  <div>
    <h3 class="text-center">{{ title }}</h3>
    <hr>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th score="col">Form</th>
          <th scope="col">Handle</th>
          <th/>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="item.id">
          <th scope="row">{{ index }}</th>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>
            <UserForm :user="item" />
          </td>
          <td>
            <button class="btn btn-primary" type="button" @click="$emit('remove', item.id)">Удалить</button>
          </td>
          <td>
            <button class="btn btn-primary" type="button" @click="save(item)">Сохранить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UserForm from "@/components/UserForm.vue";

export default {
  name: "UserList",
  components: { UserForm },
  props: {
    users: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: "Список пользователей"
    }
  },
  methods: {
    save(item) {
      this.$emit("save", item);
    }
  }
};
</script>
