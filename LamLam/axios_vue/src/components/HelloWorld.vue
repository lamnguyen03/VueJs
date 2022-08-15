<template>


  <div class="form-input">
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
    <v-btn
        class="show-button"
        flat color="secondary"
        @click ="getUsers"
    >
      Show user
    </v-btn>


    <v-list-item>
      <v-list-item-content>
        <v-text-field v-model="searchTerm" placeholder="Search" @input="searchFruits"></v-text-field>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="mt-2"></v-divider>

    <v-table height="300px">
      <thead>
      <tr>
        <th class="text-left">
          Tên
        </th>
        <th class="text-left">
          Địa chỉ
        </th>
        <th class="text-left">
          Tuổi
        </th>
        <th class="text-left">

        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="user in users" :key="user.id"
      >
        <td>{{ user.name }}</td>
        <td>{{ user.address }}</td>
        <td>{{ user.old }}</td>

        <td>
          <v-btn
              class="mr-4"
              color="grey"
              @click="editUser(user.id)"
          >

          Update
          </v-btn>


          <v-btn
              class="mr-4"
              color="error"
              @click="deleteUser(user.id)"
          >
            Delete
          </v-btn>
        </td>

      </tr>
      </tbody>
    </v-table>

  </div>


</template>



<script>
import axios from "axios";
export default {
  name: "App",
  data() {
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
  methods: {
    async getUsers() {
      try {
        const users = await axios.get("http://localhost:8090/student");
        this.users = users.data;
        console.log(users.data)
      } catch (e) {
        console.log(e);
      }
    },
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

    async deleteUser(id) {
      let x = window.confirm("Do you want to delete the user?");
      if (x) {
        const user = await axios.delete(
            "http://localhost:8090/student/" + id
        );
        window.location.reload()
        console.log(user);

      }
    },

      async editUser(id) {
      try {
        const user = await axios.get("http://localhost:8090/student/" + id);

        this.user = user.data;
        this.btnStatus = "update";
        this.name= user.data.name ;
        this.address= user.data.address ;
        this.old= user.data.old ;
        this.id = id;
      } catch (e) {
        console.log(e);
      }
    },
    async updateUser() {
      console.log('http://localhost:8090/student/'+this.id);
      await  axios.put('http://localhost:8090/student/'+this.id,
          {"address":this.address,"name":this.name,"old":this.old,'id':this.id})
          .then(res=>alert('Updated success user '+ res.data.name))
          .catch(err=>alert(err))
      window.location.reload()

    },

  },

};
</script>


<style>
.form-input{
  width: 50%;
  margin: 0 auto;
  position: relative;
}
.show-button{
  position: absolute;
  right: 0;
}
</style>