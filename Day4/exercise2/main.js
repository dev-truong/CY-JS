const questions = [
    {
        content: "Câu hỏi 1: Đông Lào là nước nào ?",
        answers: [
            "A.Việt Nam",
            "B.Lào",
            "C.Philipine",
            "D.Indonesia"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 2: Tây Lào là nước nào",
        answers: [
            "A.Miến Điện",
            "B.Ấn Độ",
            "C.Nepal",
            "D.Thái Lan"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 3: Nam Lào là nước nào",
        answers: [
            "A.Campuchia",
            "B.Malaysia",
            "C.Singapore",
            "D.Việt Nam"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 4: Bắc Lào là nước nào",
        answers: [
            "A.Trung Quốc",
            "B.Hàn Quốc",
            "C.Nhật Bản",
            "D.Hoa Kỳ"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 5: Lào có bao nhiêu tỉnh thành",
        answers: [
            "A.14",
            "B.15",
            "C.16",
            "D.17"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 6: Đâu là thủ đô của Lào",
        answers: [
            "A.Hà Nội",
            "B.Bangkok",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 7: Lào có biển không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 1
    },
    {
        content: "Câu hỏi 8: Lào có sân bay quốc tế không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 9: Lào có biên giới với Việt Nam không",
        answers: [
            "A.Có",
            "B.Không",
            "C.Có và không",
            "D.Không và có"
        ],
        correctAnswer: 0
    },
    {
        content: "Câu hỏi 10: Thủ đô của Brueni là gì",
        answers: [
            "A.Bangkok",
            "B.Bandar Seri Begawan",
            "C.Vientiane",
            "D.Phnom Penh"
        ],
        correctAnswer: 1
    }
];

const questionCurrent = document.querySelector(".question");
const answerCurrent = document.querySelectorAll(".answer");
const score = document.querySelector(".score span").innerText;

let indexQuestions = 0;
let sumScore = 0;
//thay doi cau hoi va lua chon
function nextQuestion() {
//thay doi cau hoi
    indexQuestions = indexQuestions + 1;
    questionCurrent.innerHTML = questions[indexQuestions].content;
//thay doi lua chon
    answerCurrent.forEach((answer, index) => {
        answer.innerHTML = questions[indexQuestions].answers[index];
    })
}

//kiem tra cau tra loi dung
answerCurrent.forEach((answer, index) => {
    answer.addEventListener("click", () => {
        if(index === questions[indexQuestions].correctAnswer) {
            alert("Bạn đã trả lời đúng");
            score.innerText = sumScore + 10;
        } else {
            alert("Bạn đã trả lời sai");
            answerCurrent[questions[indexQuestions].correctAnswer].style.backgroundColor = "blue";
        }
    answerCurrent.forEach((answer, index) => {
        answer.style.pointerEvents = "none";
    })
        
    })
});

