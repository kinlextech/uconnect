<template>
    <div><nuxt-link to="/inspire" prefetch>About page pre-fetched</nuxt-link></div>
</template>
<script>
export default {
    middleware: "auth",
}
</script>