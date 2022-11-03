<template>
    <div class="p-4  flex flex-col items-center">
        <h2 class="text-24 text-stone-600 text-center mb-4">{{category}}</h2>
        <p class="mb-8 text-24">{{questiontext}}</p>
        <button class="rounded-lg border-2 border-dotted border-black px-4 py-1 hover:bg-black hover:text-yellow-200" 
                @click="revealAnswer" v-show="!showAnswer">Visa svar</button>
    </div>
    <div class="gap-8 p-4 flex flex-col items-center" v-show="showAnswer">
        <div class="border-black border-dashed border-2 rounded-xl">
        <p class="text-32 font-bold px-2">{{answer}}</p>
        </div>
        <p class="text-24">Svarade du rätt?</p>
        <div class="w-1/2 flex flex-row justify-around">
            <button class="rounded-lg border-2 border-dotted border-black px-4 py-1 hover:bg-green-500 hover:text-white" 
                    @click="qAnswered(true)">Ja</button>
            <button class="rounded-lg border-2 border-dotted border-black px-4 py-1 hover:bg-red-500 hover:text-white" 
                    @click="qAnswered(false)">Nej</button>
        </div>
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
