<template>
    <li>{{category}}: {{categoryScore}}</li>
</template>
<script>
    export default {
        name: 'CategoryResult',
        props: {
            category: {required: true, type: String},
            categoryScore: {required: true, type: Number}
        }
    }

</script>
