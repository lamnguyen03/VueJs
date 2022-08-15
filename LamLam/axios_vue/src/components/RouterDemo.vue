<template>
  <div class="menu">
    <router-link to="/show">
      <p class="item-menu">
        Show
      </p>
    </router-link>

    <router-link to="/add">
      <p class="item-menu">
        Add
      </p>
    </router-link>
  </div>

</template>

<script>
export default {
  name: "RouterDemo"
}
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
}

.item-menu {
  margin: 10px;
  font-size: large;
  cursor: pointer;
  font-weight: 600;
}

.link {
  color: inherit;
  text-decoration: none;
}
</style>