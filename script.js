// Lista di ossiacidi e idracidi con le loro formule e nomi
const acidi = [
    { formula: "HCl", nome: "Acido cloridrico (Cl -1) Cloruro di idrogeno" },
    { formula: "H2S", nome: "Acido solfidrico (S -2) Solfuro di idrogeno" },
    { formula: "H2SO4", nome: "Acido solforico (S +6)" },
    { formula: "HNO3", nome: "Acido nitrico (N +5)" },
    { formula: "H2CO3", nome: "Acido carbonico (C +4)" },
    { formula: "H3PO4", nome: "Acido fosforico (P +5)" },
    { formula: "H2SO3", nome: "Acido solforoso (S +4)" },
    { formula: "HF", nome: "Acido fluoridrico (F -1) Fluoruro di idrogeno" },
    { formula: "HBr", nome: "Acido bromidrico (Br -1) Bromuro di idrogeno" },
    { formula: "HI", nome: "Acido iodidrico (I -1) Ioduro di idrogeno" },
    { formula: "HCN", nome: "Acido cianidrico (CN -1) Cianuro di idrogeno" },
    { formula: "HNO2", nome: "Acido nitroso (N +3)" },
    { formula: "HClO", nome: "Acido ipocloroso (Cl +1)" },
    { formula: "HClO2", nome: "Acido cloroso (Cl +3)" },
    { formula: "HClO3", nome: "Acido clorico (Cl +5)" },
    { formula: "HClO4", nome: "Acido perclorico (Cl +7)" },
    { formula: "H3BO3", nome: "Acido borico (B +3)" },
    { formula: "H2CrO4", nome: "Acido cromico (Cr +6)" },
    { formula: "H2Cr2O7", nome: "Acido dicromico (Cr +6)" },
    { formula: "H2MnO4", nome: "Acido manganico (Mn +6)" },
    { formula: "HMnO4", nome: "Acido permanganico (Mn +7)" }
];

let currentAcidIndex = 0;
let currentMode = 'formula';
let shuffledAcids = [];

// Mescola casualmente gli acidi
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById("startQuiz").addEventListener("click", function () {
    currentMode = document.getElementById("modalita").value;
    shuffledAcids = [...acidi]; // Copia l'array degli acidi
    shuffle(shuffledAcids);
    currentAcidIndex = 0;
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizAnswer").style.display = "none";
    showNextAcid();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("quizAnswer").style.display = "block";
});

function showNextAcid() {
    if (currentAcidIndex < shuffledAcids.length) {
        let acid = shuffledAcids[currentAcidIndex];
        let quizPrompt = currentMode === 'formula' ? `Formula: ${acid.formula}` : `Nome: ${acid.nome}`;
        let quizAnswer = currentMode === 'formula' ? `Nome: ${acid.nome}` : `Formula: ${acid.formula}`;

        document.getElementById("quizPrompt").textContent = quizPrompt;
        document.getElementById("quizAnswer").textContent = quizAnswer;
        document.getElementById("quizAnswer").style.display = "none";

        currentAcidIndex++;
    } else {
        document.getElementById("quizPrompt").textContent = "Quiz terminato!";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("quizAnswer").style.display = "none";
    }
}
