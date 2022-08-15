<template>
<div class="form-add">
  <v-text-field label="Tên" v-model="name"></v-text-field>
  <v-text-field label="Địa chỉ" v-model="address"></v-text-field>
  <v-text-field label="Tuổi" v-model="old"></v-text-field>
  <v-btn
      color="primary"
      text
      @click="btnStatus==='add'?storeUser():updateUser()"
  >
    {{btnStatus}}
  </v-btn>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddForm",
  data(){
    return {
      users: [],
      user: {},
      name: '',
      address:'',
      old:'',
      btnStatus:'add',
      id:""
    };
  },
  methods:{
    async storeUser() {
      try {
        const user = await axios.post("http://localhost:8090/student",
            {
              name: this.name,
              address: this.address,
              old: this.old,
            }
        );
        window.location.reload()
        console.log(user)
      } catch(e) {
        console.log(e);
      }
    },

  }
}
</script>

<style scoped>
.form-add{
  width: 50%;
  margin: 0 auto;
}
</style>