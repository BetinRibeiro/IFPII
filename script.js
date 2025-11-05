
// Personality Quiz Data
const personalityQuestions = [
		["Gosto de fazer coisas que outras pessoas consideram fora do comum","AUTONOMIA"],
		["Gostaria de realizar um grande feito ou grande obra na minha vida","DESEMPENHO"],
		["Gostaria de experimentar novidades e MUDANÇAs em meu dia a dia","MUDANÇA"],
		["Não gosto de situações em que se exige que eu me comporte de determinada maneira","AUTONOMIA"],
		["Gosto de dizer o que eu penso a respeito das coisas","AUTONOMIA"],
		["Gosto de saber o que grandes personalidades disseram sobre os problemas pelos quais eu me interesso","DEFERENCIA"],
		["Gosto de ser capaz de fazer as coisas melhor do que as outras pessoas","DESEMPENHO"],
		["Gosto de concluir qualquer trabalho ou tarefa que tenha começado","PERSISTENCIA"],
		["Gosto de ajudar meus amigos quando eles estão com problemas","ASSISTENCIA"],
		["Não costumo abandonar um quebra-cabeça ou problema antes que consiga resolvê-lo","PERSISTENCIA"],
		["Gosto de dizer aos outros com o fazer seus trabalhos","DOMINANCIA"],
		["Gostaria de ser considerado uma autoridade em algum trabalho, profissão ou campo de especialização","DESEMPENHO"],
		["Gostaria de experimentar e provar coisas novas","MUDANÇA"],
		["Quando tenho alguma tarefa para fazer, gosto de começar logo e permanecer trabalhando até completá-la","PERSISTENCIA"],
		["Aceito com prazer a liderança das pessoas que admiro","DEFERENCIA"],
		["Gosto de trabalhar horas a fio sem ser interrompido","PERSISTENCIA"],
		["Gosto que meus amigos me dêem muita atenção quando estou sofrendo ou doente","AFAGO"],
		["Costumo analisar minhas intenções e sentimentos","INTRACEPÇÃO"],
		["Gosto de fazer com carinho pequenos favores a meus amigos","AFILIAÇÃO"],
		["Gosto de ficar acordado até tarde para terminar um trabalho","PERSISTENCIA"],
		["Gosto de andar pelo pais  e viver em lugares diferentes","MUDANÇA"],
		["Gosto de analisar os sentimentos e intenções dos outros","INTRACEPÇÃO"],
		["Gosto de fazer gozação com pessoas que fazem coisas que eu considero estúpidas","AGRESSIVIDADE"],
		["Tenho vontade de me vingar quando alguém me insulta","AGRESSIVIDADE"],
		["Gosto de pensar sobre o caráter dos meus amigos e tentar descobrir o que os faz serem como são","INTRACEPÇÃO"],
		["Sou leal aos meus amigos","AFILIAÇÃO"],
		["Gosto de levar trabalho ou tarefa até o fim antes de começar outro","PERSISTENCIA"],
		["Gosto de dizer aos meus superiores que eles fizeram um bom trabalho, quando acredito nisso","DEFERENCIA"],
		["Gosto que meus amigos sejam solidários comigo e me animem quando estou deprimido","AFAGO"],
		["Antes de começa um trabalho, gosto de organizá-lo e planejá-lo","ORDEM"],
		["Gosto que meus amigos demonstrem muito afeto por mim","AFAGO"],
		["Gosto de realizar tarefas que, na opinião dos outros, exigem habilidade e esforço","DESEMPENHO"],
		["Gosto de ser bem sucedido nas coisas que faço","DESEMPENHO"],
		["Gosto de fazer amizades","AFILIAÇÃO"],
		["Gosto de ser considerado um líder pelos outros","DOMINANCIA"],
		["Gosto de realizar com afinco (sem descanso) qualquer trabalho que faço","PERSISTENCIA"],
		["Gosto de participar de grupos cujos membros se tratem com afeto e amizade","AFILIAÇÃO"],
		["Sinto-me satisfeito quando realizo bem um trabalho difícil","DESEMPENHO"],
		["Tenho vontade de mandar os outros calarem a boca quando discordo deles","AGRESSIVIDADE"],
		["Gosto de fazer coisas do meu jeito sem me importar com o que os outros possam pensar","AUTONOMIA"],
		["Gosto de viajar e conhecer o país","MUDANÇA"],
		["Gosto de me fixar em um trabalho ou problema mesmo quando a solução pareça extremamente difícil","PERSISTENCIA"],
		["Gosto de conhecer pessoas novas","MUDANÇA"],
		["Gosto de dividir coisas com os outros","ASSISTENCIA"],
		["Sinto-me satisfeito quando consigo convencer e influenciar os outros","DOMINANCIA"],
		["Gosto de demonstrar muita afeição por meus amigos","AFILIAÇÃO"],
		["Gosto de prestar favores aos outros","ASSISTENCIA"],
		["Gosto de seguir instruções e fazer o que é esperado de mim","DEFERENCIA"],
		["Gosto de elogiar alguém que admiro","DEFERENCIA"],
		["Quando planejo alguma coisa, procuro sugestões de pessoas que respeito","DEFERENCIA"],
		["Gosto de manter minhas coisas limpas e ordenadas em minha escrivaninha ou em meu local de trabalho","ORDEM"],
		["Gosto de manter fortes laços de amizade","AFILIAÇÃO"],
		["Gosto que meus amigos me ajudem quando estou com problema","AFAGO"],
		["Gosto que meus amigos mostrem boa vontade em me prestar pequenos favores","AFAGO"],
		["Gosto de manter minhas cartas, contas e outros papéis bem arrumados e arquivados de acordo com algum sistema","ORDEM"],
		["Gosto que meus amigos sejam solidários e compreensivos quando tenho problemas","AFAGO"],
		["Prefiro fazer coisas com meus amigos a fazer sozinho","AFILIAÇÃO"],
		["Gosto de tratar outras pessoas com bondade e compaixão","ASSISTENCIA"],
		["Gosto de comer em restaurantes novo e exóticos (diferentes)","MUDANÇA"],
		["Procuro entender como meus amigos se sentem a respeito de problemas que eles enfrentam","INTRACEPÇÃO"],
		["Gosto de ser o centro das atenções em um grupo","EXIBIÇÃO"],
		["Gosto de ser um dos líderes nas organizações e grupos aos quais pertenço","DOMINANCIA"],
		["Gosto de ser independente dos outros para decidir o que quero fazer","AUTONOMIA"],
		["Gosto de me manter em contato com meus amigos","AFILIAÇÃO"],
		["Quando participo de uma comissão (reunião), gosto de ser indicado ou eleito presidente","DOMINANCIA"],
		["Gosto de fazer tantos amigos quanto possível","AFILIAÇÃO"],
		["Gosto de observar como uma pessoa se sente numa determinada situação","INTRACEPÇÃO"],
		["Quando estou em um grupo, aceito com prazer a liderança de outra pessoa para decidir o que o grupo fará","DEFERENCIA"],
		["Não gosto de me sentir pressionado por responsabilidades e deveres","AUTONOMIA"],
		["Às vezes, fico tão irritado que sinto vontade de jogar e quebrar coisas","AGRESSIVIDADE"],
		["Gosto de fazer perguntas que ninguém será capaz de responder","EXIBIÇÃO"],
		["Às vezes, gosto de fazer coisas simplesmente para ver o efeito que terão sobre os outros","EXIBIÇÃO"],
		["Sou solidário com meus amigos quando machucados ou doentes","ASSISTENCIA"],
		["Não tenho medo de criticar pessoas que ocupam posições de autoridade","AUTONOMIA"],
		["Gosto de fiscalizar e dirigir os atos dos outros sempre que posso","DOMINANCIA"],
		["Culpo os outros quando as coisas dão errado comigo","AGRESSIVIDADE"],
		["Gosto de ajudar pessoas que têm menos sorte do que eu","ASSISTENCIA"],
		["Gosto de planejar e organizar, em todos os detalhes, qualquer trabalho que eu faço","ORDEM"],
		["Gosto de fazer coisas novas e diferentes","MUDANÇA"],
		["Gostaria de realizar com sucesso alguma coisa de grande importância","DESEMPENHO"],
		["Quando estou com um grupo de pessoas, gosto de decidir sobre o que vamos fazer","DOMINANCIA"],
		["Interesso-me em conhecer a vida de grandes personalidades","DEFERENCIA"],
		["Procuro me adaptar ao modo de ser das pessoas que admiro","DEFERENCIA"],
		["Gosto de resolver quebra-cabeças e problemas com os quais outras pessoas têm dificuldades","DESEMPENHO"],
		["Gosto de falar sobre os meus sucessos","EXIBIÇÃO"],
		["Gosto de dar o melhor de mim em tudo que faço","DESEMPENHO"],
		["Gosto de estudar e analisar o comportamento dos outros","INTRACEPÇÃO"],
		["Gosto de contar aos outros aventuras e coisas estranhas que acontecem comigo","EXIBIÇÃO"],
		["Perdôo as pessoas que às vezes possam me magoar","ASSISTENCIA"],
		["Gosto de prever (entender) como meus amigos irão agir em diferentes situações","INTRACEPÇÃO"],
		["Gosto de me sentir livre para fazer o que quero","AUTONOMIA"],
		["Gosto de me sentir livre para ir e vir quando quiser","AUTONOMIA"],
		["Gosto de usar palavras cujo significado as outras pessoas desconhecem","EXIBIÇÃO"]
	]

const personalityStandards = [
	["ASSISTENCIA",">=40"],
	["INTRACEPÇÃO","<=70"],
	["AFAGO","<=70"],
	["DEFERENCIA",">=30"],
	["AFILIAÇÃO",">=40"],
	["DOMINANCIA","<=60"],
	["DESEMPENHO",">=40"],
	["EXIBIÇÃO","<=50"],
	["AGRESSIVIDADE",">=30 && <=70"],
	["ORDEM",">=40"],
	["PERSISTENCIA",">=60 && <=90"],
	["MUDANÇA","<=60"],
	["AUTONOMIA",">=30 && <=70"]
];
// Quiz app script reescrito corretamente e sem listas internas
// As listas/questions devem ser definidas fora deste arquivo, como você pediu

let currentQuestion = 0;
let userAnswers = [];
let categoryAverages = {};

// Variáveis de interface
const questionText = document.getElementById("question-text");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const resultsSection = document.getElementById("results-section");
const quizSection = document.getElementById("quiz-section");
const welcomeSection = document.getElementById("welcome-section");

// Initialize user answers array
function initQuiz() {
    userAnswers = new Array(personalityQuestions.length).fill(null);
    currentQuestion = 0;
}
// Start the quiz
function startQuiz() {
    initQuiz();
    welcomeSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    showQuestion();
}
// Mostra a pergunta atual
function showQuestion() {
    if (personalityQuestions[currentQuestion]) {
        questionText.textContent = personalityQuestions[currentQuestion][0];
        const categoryElement = document.getElementById("question-category");
        categoryElement.textContent = `Categoria: ${personalityQuestions[currentQuestion][1]}`;
        progressText.textContent = `${currentQuestion + 1}/${personalityQuestions.length}`;
document.querySelectorAll('.rating-btn').forEach((btn, index) => {
            const rating = index + 1;
            if (userAnswers[currentQuestion] === rating) {
                btn.classList.add('border-indigo-500', 'bg-indigo-50', 'scale-105');
                btn.classList.remove('border-gray-300');
            } else {
                btn.classList.remove('border-indigo-500', 'bg-indigo-50', 'scale-105');
                btn.classList.add('border-gray-300');
            }
        });

        const hasAnswer = userAnswers[currentQuestion] !== null && userAnswers[currentQuestion] !== undefined;
        nextBtn.disabled = !hasAnswer;
        nextBtn.classList.toggle('opacity-50', !hasAnswer);
        nextBtn.classList.toggle('cursor-not-allowed', !hasAnswer);

        prevBtn.style.visibility = currentQuestion === 0 ? "hidden" : "visible";
        prevBtn.disabled = currentQuestion === 0;
        prevBtn.classList.toggle('opacity-50', currentQuestion === 0);
        prevBtn.classList.toggle('cursor-not-allowed', currentQuestion === 0);

        const progress = ((currentQuestion + 1) / personalityQuestions.length) * 100;
        progressBar.style.width = progress + "%";
    }
}
// Selecionar resposta
function selectRating(rating) {
    userAnswers[currentQuestion] = rating;
    showQuestion();
}

// Botão avançar
function nextQuestion() {
    if (currentQuestion < personalityQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

// Botão voltar
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Finalizar e mostrar resultado
function finishQuiz() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    showResults();
}
// Mostrar resultados
function showResults() {
    const resultsGrid = document.getElementById("results-grid");
    resultsGrid.innerHTML = '';
    
    // Calculate scores for each category
    const categoryScores = {};
    
    personalityQuestions.forEach((question, index) => {
        const category = question[1];
        const answer = userAnswers[index];
        
        if (answer !== null && answer !== undefined) {
            if (!categoryScores[category]) {
                categoryScores[category] = [];
            }
            categoryScores[category].push(answer);
        }
    });
    
    // Calculate average for each category
    categoryAverages = {};
    Object.keys(categoryScores).forEach(category => {
        const scores = categoryScores[category];
        const sum = scores.reduce((a, b) => a + b, 0);
        categoryAverages[category] = (sum / scores.length).toFixed(2);
    });
    
    // Display results with color coding based on standards
    Object.keys(categoryAverages).forEach(category => {
        const score = categoryAverages[category];
        const percentage = (score / 5 * 100).toFixed(0);
        
        // Find the standard for this category
        const standard = personalityStandards.find(s => s[0].toUpperCase() === category.toUpperCase());
        let isApto = false;
        let statusText = "Não Apto";
        let statusColor = "red";
        
        if (standard) {
            const condition = standard[1];
            const numericScore = parseFloat(score);
            
            // Evaluate the condition
            if (condition.includes(">=") && condition.includes("<=")) {
                const parts = condition.split("&&");
                const min = parseFloat(parts[0].replace(">=", "").trim());
            const max = parseFloat(parts[1].replace("<=", "").trim());
                isApto = numericScore >= min && numericScore <= max;
            } else if (condition.includes(">=")) {
                const min = parseFloat(condition.replace(">=", "").trim());
                isApto = numericScore >= min;
            } else if (condition.includes("<=")) {
                const max = parseFloat(condition.replace("<=", "").trim());
                isApto = numericScore <= max;
            }
            
            statusText = isApto ? "Apto" : "Não Apto";
            statusColor = isApto ? "green" : "red";
        }
        
        const resultCard = document.createElement('div');
        resultCard.className = 'bg-white rounded-xl p-6 border border-gray-200 shadow-sm';
        resultCard.innerHTML = `
            <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-gray-800">${category}</h3>
                <div class="flex items-center space-x-2">
                    <span class="text-2xl font-bold text-${statusColor}-600">${score}</span>
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800">${statusText}</span>
                </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div class="bg-gradient-to-r from-${statusColor}-500 to-${statusColor}-600 h-3 rounded-full transition-all duration-500" style="width: ${percentage}%"></div>
            <p class="text-sm text-gray-600">Média: ${score}/5 (${percentage}%)</p>
        `;
        resultsGrid.appendChild(resultCard);
    });
}
// Reiniciar quiz
function restartQuiz() {
    resultsSection.classList.add("hidden");
    welcomeSection.classList.remove("hidden");
    initQuiz();
}
// Baixar resultados
function downloadResults() {
    const results = Object.keys(categoryAverages).map(category => 
        `${category}: ${categoryAverages[category]}/5`
    ).join('\n');
    
    const blob = new Blob([results], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultados-personalidade.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});
