<template>
    <div class="h-16 m-4 gap-4">
        <div class="h-6">
            <p class="text-center">Fråga {{currentQuestion}} av {{numQuestions}}</p>
        </div>
        <div class="border-dashed border-2 rounded-lg h-6 p-1 ">
            <div class="bg-black h-full transition-[width] rounded-lg duration-500"
                 :style="progressWidth">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ProgressBar",
        props: {
            numQuestions: {required: true, type: Number},
            currentQuestion: {required: true, type: Number}
        },
        computed: {
            progressWidth () {
                let percentage =  (this.currentQuestion / this.numQuestions) * 100;
                return "width: " + percentage + "%";
            }
        }

    }
</script>
