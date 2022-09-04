<template>
  <h2 class="title" :class="`${sectionName}__title`">{{ titleText }}</h2>
</template>

<script>
export default {
    name: "Title",
    props: {
        titleText: {
            type: String,
            default: 'title'
        },
        sectionName: {
            type: String,
            default: "section"
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: calc(30px + 40 * (100vw / 1920));
    color: var(--primary-color);
    text-transform: capitalize;
}

@media (min-width: 1920px) {
    .title {
        font-size: 70px;
    }
}
</style>