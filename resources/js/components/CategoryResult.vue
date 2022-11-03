<template>
    <div class="flex justify-end items-center">
        <p class="text-24">{{category}}:</p>
    </div>
    <div class="flex justify-start items-center">
        <span class="font-mono text-32 text-green-500" v-html="correctScore"></span>
        <span class="font-mono text-32 text-red-500" v-html="incorrectScore"></span>
    </div>

</template>
<script>
    export default {
        name: 'CategoryResult',
        props: {
            category: {required: true, type: String},
            categoryScore: {required: true, type: Number}
        },
        computed: {
            correctScore() {
                let correctString = "";
                for (let i = 0; i < this.categoryScore; i++) {
                    correctString += "&#x2714;";
                }
                return correctString;
            },
            incorrectScore() {
                let incorrectString = "";
                for (let i = 0; i < 5 - this.categoryScore; i++) {
                    incorrectString += "&#x2718;";
                }
                return incorrectString;
            }
        }

    }

</script>
