<template>
    <div class="-z-50 bg-indigo-300 -skew-y-12">
        <h1 class="text-48 text-bold text-center">&#x2606;QUIZ&#x2606;</h1>
    </div>
    <div class="relative z-50 bg-yellow-200 my-8 mx-16 drop-shadow-lg px-8 py-8">
        <div class="p-8 gap-8 flex flex-col items-center" v-show="visibility.start">
            <h2 class="text-32">Välkommen till quizet</h2>
            <button class="rounded-lg border-2 border-dotted border-black px-4 py-1 hover:bg-black hover:text-yellow-200" @click="initGame">Starta</button>
        </div>
        <div class="flex flex-col justify-center" v-show="visibility.question" v-if="questionList.length" >
            <question :questiontext="questionList[qIndex].question"
                      :category="questionList[qIndex].category"
                      :answer="questionList[qIndex].answer"
                      @question-answered="scoreAnswer($event)"
                      ></question>
        </div>
        <div class="flex flex-col items-center" v-show="visibility.result">
            <h2 class="text-32 text-center font-bold">Resultat</h2>
            <p class="text-32 text-center">{{totalPoints}} poäng av {{numQuestions}}</p>
            <div class="grid grid-cols-2 grid-rows-[repeat(7, 1fr)] gap-x-4 my-8">
                <category-result v-for="(score, index) in points" 
                                 :categoryScore="score" 
                                 :category="categories[index]">
                </category-result>
            </div>
            <button class="rounded-lg border-2 border-dotted border-black px-4 py-1 hover:bg-black hover:text-yellow-200" @click="initGame">Omspel?</button>
        </div>
        <progress-bar v-show="visibility.question"
                      :numQuestions="numQuestions"
                      :currentQuestion="qIndex + 1"></progress-bar>
    </div>
</template>
<script>
    import Question from "./components/Question.vue";
    import CategoryResult from "./components/CategoryResult.vue";
    import ProgressBar from "./components/ProgressBar.vue";
    export default {
        name: 'App',
        components: {
            Question,
            CategoryResult,
            ProgressBar
        },
        data() {
            return {
                numQuestions: 35,
                qIndex: 0,
                categories: ['Film & TV', 'Geografi', 'Historia', 'Musik', 'Övrigt', 'Vetenskap', 'Sport'],
                points: [0, 0, 0, 0, 0, 0, 0],
                totalPoints: 0,
                visibility: {start: true, question: false, result: false},
                questionList: []
                /*questionList: [
                    {
                        category: "Geografi",
                        question: "I vilket hav har floden Wisla sitt utlopp?",
                        answer: "Östersjön"
                    },
                    {
                        category: "Vetenskap",
                        question: "Vilken användbar hushållsprodukt var förr tillverkade av det giftiga ämnet naftalen?",
                        answer: "Malkulor"
                    },
                    {
                        category: "Historia",
                        question: "Vem förstörde Jerusalem och Salomos tempel år 587 f.Kr?",
                        answer: "Nebukadnessar II"
                    },
                    {
                        category: "Vetenskap",
                        question: "Vad heter den sista bokstaven i det grekiska alfabetet?",
                        answer: "Omega"
                    }
                ]*/
            }
        },
        methods: {
            async initGame() {
                this.points = [0, 0, 0, 0, 0, 0, 0];
                this.totalPoints = 0;
                this.qIndex = 0;
                console.log(this.questionList);
                this.questionList.length = 0;
                this.questionList.push(...await this.fetchQuestions());
                console.log(this.questionList);
                this.visibility.start = false;
                this.visibility.result = false;
                this.visibility.question = true;
            },
            async fetchQuestions() {
                const response = await axios.get('http://localhost/questions');
                console.log('response', response.data);
                console.log('response2', this.questionList);
                return response.data;
            },
            scoreAnswer(isCorrect) {
                if (isCorrect === true) {
                    this.points[this.categories.indexOf(this.questionList[this.qIndex].category)]++;
                }
                if (this.qIndex === this.numQuestions - 1) {
                    this.showResults();
                } else {
                    this.qIndex++;
                }
            },
            showResults() {
                for (let cpoint of this.points) {
                    this.totalPoints += cpoint;
                    this.visibility.question = false;
                    this.visibility.result = true;
                }
            }
        }
    }
    
</script>
