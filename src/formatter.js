export const formatGameObj = (item) => {
    let randomAnswerPos = Math.floor((Math.random() * 4));
    let obj = {};
    obj.question = item.question;
    obj.category = item.category;
    obj.correctAnswer = item.correct_answer;
    obj.wrongAnswers = item.incorrect_answers;
    obj.allAnswers = [];
    obj.lvl = item.difficulty;
    obj.wrongAnswers.map((item, index) => {
    obj.allAnswers.push(item)
    })
    obj.allAnswers.splice(randomAnswerPos, 0, obj.correctAnswer)
    return obj;
}