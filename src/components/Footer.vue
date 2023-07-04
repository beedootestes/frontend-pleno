<template>
  <section class="footer">
    <Link
      to="feed"
      title="Feed"
      class="feed"
      :class="{ active: isActive === 'feed' }"
      @click="activeMenu('feed')">
      <rss-icon class="icon-menu-bar" :size="50" />
    </Link>

    <Link
      to="wiki"
      title="Wiki"
      class="wiki"
      :class="{ active: isActive === 'wiki' }"
      @click="activeMenu('wiki')">
      <light-bulb-outline-icon class="icon-menu-bar" :size="50" />
    </Link>

    <div class="main-link">
      <router-link to="/">
        <img src="../assets/icon-beebot.png" />
      </router-link>
    </div>

    <Link
      to="exam"
      title="Teste relã..."
      class="exam"
      :class="{ active: isActive === 'exam' }"
      @click="activeMenu('exam')">
      <lightning-bolt-outline-icon class="icon-menu-bar" :size="50" />
    </Link>

    <Link
      to="courses"
      title="Cursos"
      class="courses"
      :class="{ active: isActive === 'courses' }"
      @click="activeMenu('courses')">
      <checkbox-marked-outline-icon class="icon-menu-bar" :size="50" />
    </Link>
  </section>
</template>

<script setup lang="ts">
import RssIcon from 'vue-material-design-icons/Rss.vue';
import LightBulbOutlineIcon from 'vue-material-design-icons/LightbulbOutline.vue';
import LightningBoltOutlineIcon from 'vue-material-design-icons/LightningBoltOutline.vue';
import CheckboxMarkedOutlineIcon from 'vue-material-design-icons/CheckboxMarkedOutline.vue';
import Link from "./Link.vue";
import { ref } from "vue";

const isActive = ref<String>('')
const activeMenu = (menu: String): void => { isActive.value = menu }
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  border-top: 1px solid $color-border;
  justify-content: space-between;
  height: 84px;
  box-sizing: border-box;

  .icon-menu-bar {
    margin-bottom: 5px;
  }

  .main-link {
    width: 195px;
    height: 100%;
    background-color: $bg-color-gray;
    border-top-left-radius: 85px 85px;
    border-top-right-radius: 85px 85px;

    img {
      height: 100%;
      display: block;
      margin: auto;
    }
  }
}
</style>