<template>
    <h1>QUIZ</h1>
    <div v-show="visibility.start">
        <h2>Välkommen till quizet</h2>
        <button @click="initGame">Starta</button>
    </div>
    <div v-show="visibility.question">
        <question :questiontext="questionList[qIndex].question"
                  :category="questionList[qIndex].category"
                  :answer="questionList[qIndex].answer"
                  @question-answered="scoreAnswer($event)"
                  ></question>
    </div>
    <div v-show="visibility.result">
        <h2>Resultat</h2>
        <p>{{totalPoints}} poäng av {{numQuestions}}</p>
        <ul>
            <category-result v-for="(score, index) in points" 
                             :categoryScore="score" 
                             :category="categories[index]">
            </category-result>
        </ul>
        <button @click="initGame">Omspel?</button>
    </div>    
</template>
<script>
    import Question from "./components/Question.vue";
    import CategoryResult from "./components/CategoryResult.vue";
    export default {
        name: 'App',
        components: {
            Question,
            CategoryResult
        },
        data() {
            return {
                numQuestions: 4,
                qIndex: 0,
                categories: ['Film & TV', 'Geografi', 'Historia', 'Musik', 'Övrigt', 'Vetenskap', 'Sport'],
                points: [0, 0, 0, 0, 0, 0, 0],
                totalPoints: 0,
                visibility: {start: true, question: false, result: false},
                questionList: [
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
                ]
            }
        },
        methods: {
            initGame() {
                this.points = [0, 0, 0, 0, 0, 0, 0];
                this.totalPoints = 0;
                this.qIndex = 0;
                //FIXME questions
                this.visibility.start = false;
                this.visibility.result = false;
                this.visibility.question = true;
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
