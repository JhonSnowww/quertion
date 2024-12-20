<template>
  <div v-if="visible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <slot></slot> <!-- 用于插入内容 -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style scoped>
.modal-overlay {
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 0px;
  width: 400px;
  height: 400px;
  max-width: 100%;
}

.close-button {
  margin-bottom: 10px;
}
</style>
