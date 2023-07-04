<template>
  <section class="questions-header">
    <div class="title-container">
      <ArrowLeftIcon @click="$router.back()" class="icon-back" :size="50" />
      <p>{{ titleExam }}</p>
    </div>

    <div class="beetcoins">
      <span>$</span>
      {{ beetcoins }} / {{ beetcoinsAchieved }}
    </div>

    <div class="more">
      <span>BeeFree - Orgulho LGBTQIA+</span>
      <span>Conheça mais do beedoo</span>
    </div>
  </section>
</template>

<script setup lang="ts">
  import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue';

  defineProps({
    titleExam: {
      type: String,
      required: true
    },

    beetcoins: {
      type: Number,
      required: true
    },

    beetcoinsAchieved: {
      type: Number,
      required: true
    }
  })

</script>

<style scoped lang="scss">
  .questions-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $color-border;
    box-sizing: border-box;
    padding: 15px 0;

    .title-container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .icon-back {
        cursor: pointer;
      }

      p {
        margin: auto;
      }
    }

    .beetcoins {
      width: fit-content;
      border: 1px solid $color-border;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 5px 15px;
      margin-bottom: 20px;

      span {
        margin-right: 15px;
        color: $color-detail;
      }
    }

    .more {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      span {
        width: fit-content;
        border: 1px solid $color-border;
        padding: 5px;
        border-radius: 15px;
        box-sizing: border-box;
      }
    }
  }
</style>