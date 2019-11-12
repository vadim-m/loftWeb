<template lang="pug">
  .page-template
    router-view
</template>

<script>
import page from './page';
import login from './login';

export default {
  name: 'app',
  components: {
    page, login
  },
}
</script>

