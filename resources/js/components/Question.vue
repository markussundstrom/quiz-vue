<template>
    <div>
        <h2>{{category}}</h2>
        <p>{{questiontext}}</p>
        <button @click="revealAnswer" v-show="!showAnswer">Visa svar</button>
    </div>
    <div v-show="showAnswer">
        <p>{{answer}}</p>
        <p>Svarade du rätt?</p>
        <button @click="qAnswered(true)">Ja</button>
        <button @click="qAnswered(false)">Nej</button>
    </div>
</template>
<script>
    export default {
        name: "Question",
        emits: ["question-answered"],
        props: {
            questiontext: {required: true, type: String},
            answer: {required: true, type: String},
            category: {required: true, type: String}
        },
        data() {
            return {
                showAnswer: false
            }
        },
        methods: {
            revealAnswer() {
                this.showAnswer = true;
            },
            qAnswered(isCorrect) {
                this.$emit("question-answered", isCorrect);
                this.showAnswer = false;
            }
        }
    }
</script>
