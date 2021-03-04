<template>
  <button class="jh-button">按钮</button>
</template>

<script>
export default {};
</script>

<style>
.jh-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--background-color);
}

.jh-button:hover {
  border-color: var(--border-color-hover);
}

.jh-button:active {
  background-color: var(--border-active-background-color);
}

.jh-button:focus {
  outline: none;
}
</style>