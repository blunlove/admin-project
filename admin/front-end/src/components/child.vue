<template>
    <div class="child">
        <div class="child-word">{{ message }}</div>
    </div>
</template>

<script>
    export default {
        name: 'child',
        props: [
            'message'
        ]
    }
</script>
