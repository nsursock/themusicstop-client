<template>
  <div class="ml-4">
    <div class="text-sm font-medium text-gray-900">
      {{ row.firstName }} {{ row.lastName }}
    </div>
    <div class="text-sm text-gray-500">
      {{ row.email}}
    </div>
  </div>
</template>

<script>
export default {
  props: ['info'],
}
</script>
