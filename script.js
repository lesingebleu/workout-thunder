// =================================================================================
// SECTION 1: DATABASE AND STATE MANAGEMENT
// =================================================================================

// Exercise Database
// Exercise Database
const exerciseDB = {
  arms: [{
    name: "Bicep Curls",
    equipment: ["dumbbells", "kettlebells"],
    difficulty: 1,
    reps: 12
  }, {
    name: "Dumbbell Press (Close Grip)",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Rotational Bench Press",
    equipment: ["dumbbells", "mat"],
    difficulty: 3,
    reps: 10
  }, {
    name: "Dumbbell Tricep Extension",
    equipment: ["dumbbells", "plate"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Hammer Curls",
    equipment: ["dumbbells"],
    difficulty: 1,
    reps: 12
  }, {
    name: "Kettlebell Sumo High Pull",
    equipment: ["kettlebells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Overhead Press",
    equipment: ["dumbbells", "kettlebells", "plate"],
    difficulty: 2,
    reps: 10
  }, {
    name: "Push-ups",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Tricep Dips",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Tricep Push-up",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Weight Plate Front Raise",
    equipment: ["plate"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Weight Plate Hand Squeeze",
    equipment: ["plate"],
    difficulty: 1,
    reps: 15
  }, {
    name: "Weight Plate Reverse Curl",
    equipment: ["plate"],
    difficulty: 1,
    reps: 15
  }, ],
  chest: [{
    name: "Close Push-ups",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 12
  }, {
    name: "Decline Push-ups",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 15
  }, {
    name: "Deficit Push-ups",
    equipment: ["plate"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Dumbbell Bench Press",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Bench Press (Palms in)",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Fly",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Lying on Floor Chest Press",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Squeeze Bench Press",
    equipment: ["dumbbells", "mat"],
    difficulty: 3,
    reps: 10
  }, {
    name: "Incline Push-ups",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Kettlebell Lying on Floor Chest Press",
    equipment: ["kettlebells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Lying Hammer Press",
    equipment: ["dumbbells", "mat"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Plate Lying on Floor Chest Press",
    equipment: ["plate", "mat"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Plate Pinch Press",
    equipment: ["plate"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Push-ups",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Single-leg Push-ups",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 10
  }, {
    name: "Spider Push-ups",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Wide Push-ups",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 20
  }, ],
  back: [{
    name: "Bent Over Rows",
    equipment: ["dumbbells", "kettlebells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Bent-Over Row (Palms in)",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Deadlift",
    equipment: ["dumbbells"],
    difficulty: 3,
    reps: 10
  }, {
    name: "Reverse Flyes",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Superman",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 15
  }, {
    name: "Weighted Plate Shrug",
    equipment: ["plate"],
    difficulty: 1,
    reps: 15
  }, ],
  abs: [{
    name: "Alternating Heel Touch",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 20
  }, {
    name: "Bicycle Crunches",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 20
  }, {
    name: "Cross Body Crunch",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 20
  }, {
    name: "Crunch Reach Through the Leg",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Crunches",
    equipment: ["bodyweight", "plate"],
    difficulty: 1,
    reps: 25
  }, {
    name: "Crucifix",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 15
  }, {
    name: "Flutter Kicks",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 30
  }, {
    name: "Frog Sit-Up",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "High to Low Plank",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Knee to Elbow Plank",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 20
  }, {
    name: "Laying Hip Raises",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Leg Flutters",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 30
  }, {
    name: "Leg Raises",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Plank",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 60
  }, {
    name: "Reach Up",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 20
  }, {
    name: "Reverse Crunch",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Russian Twists",
    equipment: ["bodyweight", "plate", "kettlebell", "dumbbell"],
    difficulty: 2,
    reps: 20
  }, {
    name: "Seated In & Outs",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 20
  }, {
    name: "Side Bend",
    equipment: ["plate", "dumbbell", "kettlebell"],
    difficulty: 1,
    reps: 15
  }, {
    name: "Side Bridge (L)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Side Bridge (R)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Side Plank (L)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 45
  }, {
    name: "Side Plank (R)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 45
  }, {
    name: "Side Plank Reach Through (L)",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 12
  }, {
    name: "Side Plank Reach Through (R)",
    equipment: ["bodyweight"],
    difficulty: 3,
    reps: 12
  }, {
    name: "Sit-up",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 20
  }, {
    name: "Weighted Crunches",
    equipment: ["kettlebells", "plate", "dumbbell"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Weighted Russian Twists",
    equipment: ["plate", "kettlebell", "dumbbell"],
    difficulty: 3,
    reps: 20
  }, ],
  legs: [{
    name: "Calf Raises",
    equipment: ["bodyweight", "dumbbells", "plate"],
    difficulty: 1,
    reps: 25
  }, {
    name: "Dumbbell Calf Raise (L)",
    equipment: ["dumbbells"],
    difficulty: 1,
    reps: 15
  }, {
    name: "Dumbbell Calf Raise (R)",
    equipment: ["dumbbells"],
    difficulty: 1,
    reps: 15
  }, {
    name: "Dumbbell Lunge (L)",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Lunge (R)",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Plie Squat",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Dumbbell Reverse Lunge (L)",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Reverse Lunge (R)",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Dumbbell Squat",
    equipment: ["dumbbells"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Dumbbell Squat to Shoulder Press",
    equipment: ["dumbbells"],
    difficulty: 3,
    reps: 12
  }, {
    name: "Glute Bridge March",
    equipment: ["bodyweight"],
    difficulty: 1,
    reps: 20
  }, {
    name: "Glute Bridges",
    equipment: ["bodyweight", "plate"],
    difficulty: 1,
    reps: 20
  }, {
    name: "Kettlebell Goblet Squat",
    equipment: ["kettlebells"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Kettlebell Swings",
    equipment: ["kettlebells"],
    difficulty: 3,
    reps: 15
  }, {
    name: "Lunges (L)",
    equipment: ["bodyweight", "dumbbells", "kettlebells", "plate"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Lunges (R)",
    equipment: ["bodyweight", "dumbbells", "kettlebells", "plate"],
    difficulty: 2,
    reps: 12
  }, {
    name: "Single-leg Calf Raises (L)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Single-leg Calf Raises (R)",
    equipment: ["bodyweight"],
    difficulty: 2,
    reps: 15
  }, {
    name: "Squats",
    equipment: ["bodyweight", "kettlebells", "dumbbells"],
    difficulty: 2,
    reps: 20
  }, ],
};

const displayOrder = ["arms", "chest", "back", "abs", "legs"];

// Background Image System
const bgImages = {
  air: {
    a: [],
    ag: [],
  },
  ground: {
    g: [],
    gg: [],
  },
  displayedImages: {
    air: new Set(),
    ground: new Set(),
  },
};

let selectedImages = {
  airImage: null,
  groundImage: null,
  defaultImage: null,
};

// User State
const userState = {
  equipment: JSON.parse(localStorage.getItem("userEquipment")) || ["bodyweight"],
  battleType: "air",
  currentWorkout: JSON.parse(localStorage.getItem("currentWorkout")) || {
    exercises: {
      arms: [],
      chest: [],
      back: [],
      abs: [],
      legs: []
    }
  },
  weakMode: JSON.parse(localStorage.getItem("weakMode")) || {},
  lastTotalAssignedCount: 0,
  currentMuscleIndex: parseInt(localStorage.getItem("currentMuscleIndex")) || 0,
  completedWorkout: JSON.parse(localStorage.getItem("completedWorkout")) || false,
  lastCompletedCycleIndex: parseInt(localStorage.getItem("lastCompletedCycleIndex")) || 0,
  phraseMode: JSON.parse(localStorage.getItem("phraseMode")) || {
    air: "default",
    ground: "default"
  },
  collapsedGroups: JSON.parse(localStorage.getItem("collapsedGroups")) || {},
  indexBeforeLastAddition: parseInt(localStorage.getItem("indexBeforeLastAddition")) || 0,
  exerciseIndexes: JSON.parse(localStorage.getItem("exerciseIndexes")) || {
    arms: 0,
    chest: 0,
    back: 0,
    abs: 0,
    legs: 0
  },
};


// =================================================================================
// SECTION 2: DOM ELEMENT SELECTORS
// =================================================================================

const phraseToggleBtn = document.getElementById("phraseToggleBtn");
const deathCountInput = document.getElementById("deathCount");
const generateBtn = document.getElementById("generateBtn");
const addOneBtn = document.getElementById("addOneBtn");
const exercisesListEl = document.getElementById("exercisesList");
const deathTextEl = document.getElementById("deathText");
const deathTextEndEl = document.getElementById("deathTextEnd");
const airBattlesCheckbox = document.getElementById("airBattles");
const groundBattlesCheckbox = document.getElementById("groundBattles");
const workDoneBtn = document.getElementById("workDoneBtn");
const workoutDisplay = document.getElementById("workoutDisplay");
const toggleAllBtn = document.getElementById("toggleAllBtn");
const clearWorkoutBtn = document.getElementById("clearWorkoutBtn");
const completeAllBtn = document.getElementById("completeAllBtn");
const sessionSummaryContentEl = document.getElementById("sessionSummaryContent");
const spamWarningEl = document.querySelector(".spam-warning");
const numberWarningEl = document.querySelector(".number-warning");
const equipmentCheckboxes = document.querySelectorAll('.equipment-options input[type="checkbox"]');
const clearCacheLink = document.getElementById("clearCacheLink");
const customConfirmModal = document.getElementById('customConfirmModal');
const customConfirmMessage = document.getElementById('customConfirmMessage');
const customConfirmOkBtn = document.getElementById('customConfirmOkBtn');
const customConfirmCancelBtn = document.getElementById('customConfirmCancelBtn');
const wtToggle = document.getElementById("wtBackgroundToggle");
const backToTopBtn = document.getElementById("backToTopBtn");

let confirmModalOnOk = null;
let confirmModalOnCancel = null;
let lastGenerateClick = 0;


// =================================================================================
// SECTION 3: UTILITY AND CORE FUNCTIONS
// =================================================================================

// --- Background Image Functions ---

function initBackgrounds() {
  try {
    for (let i = 1; i <= 17; i++) bgImages.air.a.push(`./images/air/a${i}.png`);
    for (let i = 1; i <= 4; i++) bgImages.air.ag.push(`./images/air/ag${i}.png`);
    for (let i = 1; i <= 19; i++) bgImages.ground.g.push(`./images/ground/g${i}.png`);
    for (let i = 1; i <= 2; i++) bgImages.ground.gg.push(`./images/ground/gg${i}.png`);
  } catch (error) {
    console.error("Error initializing backgrounds:", error);
  }
}

function selectRandomImage(images, type) {
  try {
    const selected = images[Math.floor(Math.random() * images.length)];
    bgImages.displayedImages[type].add(selected);
    return selected;
  } catch (error) {
    console.error("Error in selectRandomImage:", error);
    return "./images/default.jpg";
  }
}

function getRandomAirImage() {
  try {
    const availableA = bgImages.air.a.filter((img) => !bgImages.displayedImages.air.has(img));
    const availableAG = bgImages.air.ag.filter((img) => !bgImages.displayedImages.air.has(img));

    if (availableA.length + availableAG.length === 0) {
      bgImages.displayedImages.air.clear();
      return getRandomAirImage();
    }

    const rand = Math.random();
    if (rand < 0.8 && availableA.length) {
      return selectRandomImage(availableA, "air");
    } else if (availableAG.length) {
      return selectRandomImage(availableAG, "air");
    }
    return "./images/others/default.jpg";
  } catch (error) {
    console.error("Error selecting air image:", error);
    return "./images/default.jpg";
  }
}

function getRandomGroundImage() {
  try {
    const allGround = [...bgImages.ground.g, ...bgImages.ground.gg].filter((img) => !bgImages.displayedImages.ground.has(img));

    if (allGround.length === 0) {
      bgImages.displayedImages.ground.clear();
      return getRandomGroundImage();
    }
    return selectRandomImage(allGround, "ground");
  } catch (error) {
    console.error("Error selecting ground image:", error);
    return "./images/default.jpg";
  }
}

function selectInitialBackgrounds() {
  try {
    if (!selectedImages.airImage) {
      selectedImages.airImage = getRandomAirImage();
    }
    if (!selectedImages.groundImage) {
      selectedImages.groundImage = getRandomGroundImage();
    }
    if (!selectedImages.defaultImage) {
      const defaultImages = ["./images/non-wt/img1.jpg", "./images/non-wt/img2.jpg", "./images/non-wt/img3.jpg", ];
      selectedImages.defaultImage = defaultImages[Math.floor(Math.random() * defaultImages.length)];
    }
    return selectedImages;
  } catch (error) {
    console.error("Error selecting initial backgrounds:", error);
    return {
      airImage: "./images/default.jpg",
      groundImage: "./images/default.jpg",
      defaultImage: "./images/default.jpg"
    };
  }
}

function updateBackground(specificImage = null) {
  try {
    const bgImage = document.getElementById("bgImage");
    const footerOptions = document.querySelector(".footer-options");
    if (!bgImage || !footerOptions) {
      console.error("Background image or footer options element not found");
      return;
    }

    userState.useWTBackgrounds = userState.useWTBackgrounds ?? JSON.parse(localStorage.getItem("useWTBackgrounds")) ?? false;
    userState.battleType = userState.battleType ?? localStorage.getItem("battleType") ?? "air";
    const {
      airImage,
      groundImage,
      defaultImage
    } = selectInitialBackgrounds();
    let imagePath;

    if (specificImage) {
      imagePath = specificImage;
    } else if (!userState.useWTBackgrounds) {
      imagePath = defaultImage;
      footerOptions.classList.remove("light-footer");
    } else {
      imagePath = userState.battleType === "air" ? airImage : groundImage;
      footerOptions.classList.add("light-footer");
    }

    if (!imagePath) {
      imagePath = defaultImage || "./images/default.jpg";
    }

    const img = new Image();
    img.onload = () => {
      bgImage.src = imagePath;
    };
    img.onerror = () => {
      console.error(`Failed to load image: ${imagePath}`);
      bgImage.src = "./images/default.jpg";
    };
    img.src = imagePath;
  } catch (error) {
    console.error("Error updating background:", error);
    const bgImage = document.getElementById("bgImage");
    if (bgImage) {
      bgImage.src = "./images/default.jpg";
    }
  }
}

// --- General Utility Functions ---

function generateUniqueId() {
  return `ex-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
}

function getTotalAssignedExercises() {
  let count = 0;
  if (userState.currentWorkout && userState.currentWorkout.exercises) {
    for (const muscle of displayOrder) {
      count += userState.currentWorkout.exercises[muscle]?.length || 0;
    }
  }
  return count;
}

function updateDeathText() {
  const battleType = userState.battleType;
  const phraseMode = userState.phraseMode[battleType] || "default";

  if (battleType === "air") {
    deathTextEl.textContent = phraseMode === "default" ? "I died" : "I lost";
    deathTextEndEl.textContent = phraseMode === "default" ? "times without getting any kills." : "matches.";
  } else {
    deathTextEl.textContent = phraseMode === "default" ? "I lost" : "I died";
    deathTextEndEl.textContent = phraseMode === "default" ? "matches." : "times.";
  }
}

function showCustomConfirm(message, onOkCallback, onCancelCallback) {
  customConfirmMessage.textContent = message;
  confirmModalOnOk = onOkCallback;
  confirmModalOnCancel = onCancelCallback;
  customConfirmModal.classList.add('visible');
}

// --- Core Application Logic ---

function clearAllWorkouts() {
  // Reverte o ponteiro da rotação PRINCIPAL para o estado antes da última adição
  userState.currentMuscleIndex = userState.indexBeforeLastAddition;
  localStorage.setItem("currentMuscleIndex", userState.currentMuscleIndex.toString());

  // Limpa a lista de exercícios e outros estados da sessão
  userState.currentWorkout = {
    exercises: {
      arms: [],
      chest: [],
      back: [],
      abs: [],
      legs: []
    },
  };
  userState.lastTotalAssignedCount = 0;
  userState.weakMode = {};
  userState.collapsedGroups = {};
  userState.completedWorkout = false;

  // Reinicia a rotação INTERNA de cada músculo para a próxima vez
  userState.exerciseIndexes = {
    arms: 0,
    chest: 0,
    back: 0,
    abs: 0,
    legs: 0
  };

  // Reseta o valor do input na tela
  deathCountInput.value = "1";

  // Salva as alterações
  localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
  localStorage.removeItem("weakMode");
  localStorage.removeItem("collapsedGroups");
  localStorage.removeItem("completedWorkout");
  localStorage.removeItem("exerciseIndexes");

  // Limpa a interface gráfica
  sessionSummaryContentEl.style.display = "none";
  workoutDisplay.classList.remove("showing-summary");
  workoutDisplay.style.display = "none";
  exercisesListEl.innerHTML = "";
  workDoneBtn.disabled = true;
  workDoneBtn.classList.remove("completed");

  if (toggleAllBtn) {
    toggleAllBtn.textContent = "Collapse All";
  }
  updateProgressBar();
}

function generateAdditionalExercises(countToAdd) {
  if (countToAdd <= 0) return;

  if (!userState.currentWorkout.exercises) {
    userState.currentWorkout.exercises = {
      arms: [],
      chest: [],
      back: [],
      abs: [],
      legs: []
    };
  }

  let mainCycleIndex = userState.currentMuscleIndex;
  let addedCount = 0;

  while (addedCount < countToAdd) {
    const muscle = displayOrder[mainCycleIndex % displayOrder.length];
    const availableExercises = (exerciseDB[muscle] || []).filter((ex) =>
      ex.equipment.some((e) => userState.equipment.includes(e))
    );

    if (availableExercises.length > 0) {
      let exercisePointer = userState.exerciseIndexes[muscle] || 0;
      const data = availableExercises[exercisePointer % availableExercises.length];

      if (!userState.currentWorkout.exercises[muscle]) {
        userState.currentWorkout.exercises[muscle] = [];
      }
      userState.currentWorkout.exercises[muscle].push({
        ...data,
        id: generateUniqueId(),
        reps: data.reps || 12,
        completed: false,
      });

      userState.exerciseIndexes[muscle] = exercisePointer + 1;
      addedCount++;
    } else {
      console.warn(`No available exercises for ${muscle} with current equipment. Skipping this cycle.`);
    }
    mainCycleIndex++;
  }

  userState.currentMuscleIndex = mainCycleIndex;
  userState.lastTotalAssignedCount = getTotalAssignedExercises();
  userState.completedWorkout = false;

  localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
  localStorage.setItem("currentMuscleIndex", userState.currentMuscleIndex.toString());
  localStorage.setItem("exerciseIndexes", JSON.stringify(userState.exerciseIndexes));
  localStorage.setItem("completedWorkout", "false");

  renderExercises();
}

function removeExcessExercises(countToRemove) {
  if (countToRemove <= 0 || !userState.currentWorkout.exercises) return;

  let removedCount = 0;
  let currentTotal = getTotalAssignedExercises();
  let cycleIndex = userState.currentMuscleIndex - 1;

  while (removedCount < countToRemove && currentTotal > 0) {
    const muscleIndex = ((cycleIndex % displayOrder.length) + displayOrder.length) % displayOrder.length;
    const muscle = displayOrder[muscleIndex];
    const exercises = userState.currentWorkout.exercises[muscle];

    if (exercises && exercises.length > 0) {
      let removedFromThisMuscle = false;
      for (let i = exercises.length - 1; i >= 0; i--) {
        if (!exercises[i].completed) {
          const removedEx = exercises.splice(i, 1)[0];
          if (userState.weakMode[removedEx.id]) {
            delete userState.weakMode[removedEx.id];
          }
          removedFromThisMuscle = true;
          break;
        }
      }
      if (!removedFromThisMuscle) {
        const removedEx = exercises.pop();
        if (userState.weakMode[removedEx.id]) {
          delete userState.weakMode[removedEx.id];
        }
      }

      if (userState.exerciseIndexes[muscle] > 0) {
        userState.exerciseIndexes[muscle]--;
      }

      removedCount++;
      currentTotal--;
    }
    cycleIndex--;
  }

  userState.currentMuscleIndex = Math.max(0, userState.currentMuscleIndex - removedCount);
  userState.lastTotalAssignedCount = currentTotal;
  localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
  localStorage.setItem("currentMuscleIndex", userState.currentMuscleIndex.toString());
  localStorage.setItem("exerciseIndexes", JSON.stringify(userState.exerciseIndexes));

  if (Object.keys(userState.weakMode).length > 0) {
    localStorage.setItem("weakMode", JSON.stringify(userState.weakMode));
  } else {
    localStorage.removeItem("weakMode");
  }
  renderExercises();
}

function generateWorkout() {
  // Guarda o estado ANTES de qualquer alteração
  if( (parseInt(deathCountInput.value) || 0) > userState.lastTotalAssignedCount ) {
    userState.indexBeforeLastAddition = userState.currentMuscleIndex;
    localStorage.setItem("indexBeforeLastAddition", userState.indexBeforeLastAddition.toString());
  }

  numberWarningEl.style.display = "none";
  spamWarningEl.style.display = "none";
  const deathCountValue = deathCountInput.value;

  if (deathCountValue === "" || deathCountValue === "0") {
    numberWarningEl.style.display = "block";
    setTimeout(() => (numberWarningEl.style.display = "none"), 2000);
    return;
  }
  const targetDeaths = parseInt(deathCountValue);
  if (isNaN(targetDeaths) || targetDeaths < 0) {
    numberWarningEl.style.display = "block";
    setTimeout(() => (numberWarningEl.style.display = "none"), 2000);
    return;
  }

  const currentCount = userState.lastTotalAssignedCount;
  if (targetDeaths < currentCount) {
    removeExcessExercises(currentCount - targetDeaths);
  } else if (targetDeaths > currentCount) {
    generateAdditionalExercises(targetDeaths - currentCount);
  } else {
    console.log("Generate called but count hasn't changed.");
    if (spamWarningEl.style.display !== "block") {
      spamWarningEl.style.display = "block";
      setTimeout(() => (spamWarningEl.style.display = "none"), 2000);
    }
  }
  if (targetDeaths !== currentCount) {
    userState.completedWorkout = false;
    localStorage.setItem("completedWorkout", "false");
  }
}

function toggleWeakMode(exerciseId) {
  userState.weakMode[exerciseId] = !userState.weakMode[exerciseId];
  localStorage.setItem("weakMode", JSON.stringify(userState.weakMode));
  updateExerciseDisplay(exerciseId);
}

function swapExercise(exerciseIdToSwap) {
  if (!userState.currentWorkout || !userState.currentWorkout.exercises) return;

  let oldExercise = null,
    muscleGroup = null,
    exerciseIndex = -1;

  for (const muscle of displayOrder) {
    if (!userState.currentWorkout.exercises[muscle]) continue;
    const index = userState.currentWorkout.exercises[muscle].findIndex((ex) => ex.id === exerciseIdToSwap);
    if (index !== -1) {
      oldExercise = userState.currentWorkout.exercises[muscle][index];
      muscleGroup = muscle;
      exerciseIndex = index;
      break;
    }
  }

  if (!oldExercise || oldExercise.completed) return;

  const potentialReplacements = (exerciseDB[muscleGroup] || []).filter(
    (ex) => ex.name !== oldExercise.name && ex.equipment.some((e) => userState.equipment.includes(e))
  );
  const currentNames = userState.currentWorkout.exercises[muscleGroup].map((ex) => ex.name);
  let availableReplacements = potentialReplacements.filter((ex) => !currentNames.includes(ex.name));

  if (availableReplacements.length === 0) {
    availableReplacements = potentialReplacements;
  }

  if (availableReplacements.length === 0) {
    const swapBtn = document.getElementById(exerciseIdToSwap)?.querySelector(".swap-exercise-btn");
    if (swapBtn) {
      swapBtn.disabled = true;
      swapBtn.textContent = "No Swaps";
      setTimeout(() => {
        const currentEx = userState.currentWorkout.exercises[muscleGroup]?.find((ex) => ex.id === exerciseIdToSwap);
        if (currentEx && !currentEx.completed && swapBtn) {
          swapBtn.disabled = false;
          swapBtn.innerHTML = "↻ Swap";
        }
      }, 1500);
    }
    console.log(`No valid swap found for ${oldExercise.name}. Removing.`);
    userState.currentWorkout.exercises[muscleGroup].splice(exerciseIndex, 1);
    if (userState.weakMode[exerciseIdToSwap]) {
      delete userState.weakMode[exerciseIdToSwap];
    }
    localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
    localStorage.setItem("weakMode", JSON.stringify(userState.weakMode));
    renderExercises();
    return;
  }

  const newExerciseData = availableReplacements[Math.floor(Math.random() * availableReplacements.length)];
  const newExercise = {
    ...newExerciseData,
    id: generateUniqueId(),
    reps: newExerciseData.reps || 12,
    completed: false,
  };
  userState.currentWorkout.exercises[muscleGroup].splice(exerciseIndex, 1, newExercise);
  if (userState.weakMode[exerciseIdToSwap]) {
    delete userState.weakMode[exerciseIdToSwap];
  }
  localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
  localStorage.setItem("weakMode", JSON.stringify(userState.weakMode));
  renderExercises();
}

function completeExercise(exerciseId) {
  const exerciseEl = document.getElementById(exerciseId);
  if (!exerciseEl) return;

  exerciseEl.classList.add("completed");
  const completeBtn = exerciseEl.querySelector(".complete-btn");
  const swapBtn = exerciseEl.querySelector(".swap-exercise-btn");
  const weakToggleCheckbox = exerciseEl.querySelector(".weak-toggle input");

  if (completeBtn) {
    completeBtn.textContent = "✓ Done";
    completeBtn.classList.add("completed");
    completeBtn.disabled = true;
  }
  if (swapBtn) {
    swapBtn.classList.add("disabled");
    swapBtn.disabled = true;
  }
  if (weakToggleCheckbox) {
    weakToggleCheckbox.disabled = true;
  }

  if (userState.currentWorkout && userState.currentWorkout.exercises) {
    for (const muscle of displayOrder) {
      if (!userState.currentWorkout.exercises[muscle]) continue;
      const exercise = userState.currentWorkout.exercises[muscle].find((ex) => ex.id === exerciseId);
      if (exercise) {
        exercise.completed = true;
        localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
        break;
      }
    }
  }
  
  const progressBarEl = document.getElementById('progressBar');
  if (progressBarEl) {
    // Adiciona a nova classe que ativa a animação de reflexo
    progressBarEl.classList.add('is-reflecting');
    
    // Remove a classe após a animação terminar (700ms)
    setTimeout(() => {
      progressBarEl.classList.remove('is-reflecting');
    }, 700);
  }
  
  collapseCompletedGroup(exerciseId);
  checkAllCompleted();
  updateProgressBar();
}

function completeAllExercises() {
  let changed = false;
  if (!userState.currentWorkout?.exercises) return;

  for (const muscle of displayOrder) {
    if (!userState.currentWorkout.exercises[muscle]) continue;
    userState.currentWorkout.exercises[muscle].forEach((ex) => {
      if (!ex.completed) {
        ex.completed = true;
        changed = true;
        const el = document.getElementById(ex.id);
        if (el) {
          completeExercise(ex.id);
        }
      }
    });
  }

  if (changed) {
    localStorage.setItem("currentWorkout", JSON.stringify(userState.currentWorkout));
    const groups = exercisesListEl.querySelectorAll(".exercise-group");
    groups.forEach((group) => {
      toggleExerciseGroup(group, false);
    });
	
	const allGroupCompleteButtons = document.querySelectorAll('.complete-group-btn');
    allGroupCompleteButtons.forEach(btn => {
      btn.disabled = true;
    });
	
    updateToggleAllButtonState();
  }
  checkAllCompleted();
}

function completeAllExercisesInGroup(muscleGroup, buttonElement, groupElement) {
  if (!userState.currentWorkout?.exercises || !userState.currentWorkout.exercises[muscleGroup]) {
    if (buttonElement) buttonElement.disabled = true;
    return;
  }

  const exercisesToComplete = userState.currentWorkout.exercises[muscleGroup];
  if (exercisesToComplete.length === 0) {
    if (buttonElement) buttonElement.disabled = true;
    return;
  }

  let anyActualCompletionsMade = false;
  exercisesToComplete.forEach((ex) => {
    if (!ex.completed) {
      completeExercise(ex.id);
      anyActualCompletionsMade = true;
    }
  });

  const allNowCompletedInGroup = exercisesToComplete.every(e => e.completed);

  if (buttonElement) {
    buttonElement.disabled = allNowCompletedInGroup;
  }

  if (groupElement && allNowCompletedInGroup) {
    const container = groupElement.querySelector(".exercises-container");
    if (container && container.style.display !== "none") {
      toggleExerciseGroup(groupElement, false);
    }
  }

  if (anyActualCompletionsMade) {
    updateToggleAllButtonState();
  }
}

function collapseCompletedGroup(exerciseId) {
  const exerciseEl = document.getElementById(exerciseId);
  if (!exerciseEl) return;
  const groupEl = exerciseEl.closest(".exercise-group");
  if (!groupEl) return;
  const muscle = groupEl.querySelector(".group-title span")?.textContent.toLowerCase();

  if (!muscle || !userState.currentWorkout.exercises[muscle]) return;

  const exercises = userState.currentWorkout.exercises[muscle];
  if (exercises.every((ex) => ex.completed)) {
	  
	  const groupCompleteBtn = groupEl.querySelector('.complete-group-btn');
    if (groupCompleteBtn) {
      groupCompleteBtn.disabled = true;
    }
	
    toggleExerciseGroup(groupEl, false);
  }
}

function checkAllCompleted() {
  if (!userState.currentWorkout?.exercises) {
    workDoneBtn.disabled = true;
    workDoneBtn.classList.remove("completed");
    return;
  }

  let allCompleted = true;
  const totalExercises = getTotalAssignedExercises();

  if (totalExercises === 0) {
    allCompleted = false;
  } else {
    for (const muscle of displayOrder) {
      if (!userState.currentWorkout.exercises[muscle]) continue;
      if (!userState.currentWorkout.exercises[muscle].every(ex => ex.completed)) {
        allCompleted = false;
        break;
      }
    }
  }

  const enableButton = totalExercises > 0 && allCompleted;
  workDoneBtn.disabled = !enableButton;
  workDoneBtn.classList.toggle("completed", enableButton);
	if (completeAllBtn) {
    completeAllBtn.disabled = enableButton;
  }
}

function toggleExerciseGroup(groupEl, forceExpand = null) {
  if (!groupEl) return;
  const container = groupEl.querySelector(".exercises-container");
  const toggle = groupEl.querySelector(".group-toggle");
  if (!container || !toggle) return;

  let expand;
  if (forceExpand !== null) {
    expand = forceExpand;
  } else {
    expand = container.style.display === "none";
  }

  container.style.display = expand ? "block" : "none";
  toggle.textContent = expand ? "🔺" : "🔻";

  if (!workoutDisplay.classList.contains("showing-summary")) {
    try {
      const muscleName = groupEl.querySelector('.group-title span')?.textContent.toLowerCase();
      if (muscleName) {
        userState.collapsedGroups[muscleName] = !expand;
        localStorage.setItem('collapsedGroups', JSON.stringify(userState.collapsedGroups));
      }
    } catch (error) {
      console.error("Failed to save group collapse state:", error);
    }
    updateToggleAllButtonState();
  }
}

function toggleAllGroups(contextElement = exercisesListEl, buttonElement = toggleAllBtn) {
  const groups = contextElement.querySelectorAll(".exercise-group");
  if (groups.length === 0) return;

  const firstGroupContainer = groups[0]?.querySelector(".exercises-container");
  const shouldExpand = !firstGroupContainer || firstGroupContainer.style.display === "none";

  groups.forEach((group) => {
    toggleExerciseGroup(group, shouldExpand);
  });
  buttonElement.textContent = shouldExpand ? "Collapse All" : "Expand All";
}

function updateToggleAllButtonState() {
  const allGroups = exercisesListEl.querySelectorAll(".exercise-group");
  let allCollapsed = true;

  if (allGroups.length > 0) {
    allGroups.forEach((g) => {
      const c = g.querySelector(".exercises-container");
      if (c && c.style.display !== "none") {
        allCollapsed = false;
      }
    });
    toggleAllBtn.textContent = allCollapsed ? "Expand All" : "Collapse All";
  } else {
    toggleAllBtn.textContent = "Collapse All";
  }
}

function formatWorkoutForSummary(workoutData) {
  const formatted = {
    total: 0,
    totalReps: 0, // NOVO: para o total geral de reps
    exercises: {}
  };
  if (!workoutData || !workoutData.exercises) return formatted;

  displayOrder.forEach((muscle) => {
    if (workoutData.exercises[muscle] && workoutData.exercises[muscle].length > 0) {
      const completedInGroup = [];
      let totalRepsInGroup = 0; // NOVO: para o total de reps do grupo

      workoutData.exercises[muscle].forEach((ex) => {
        if (ex.completed) {
          const baseReps = ex.reps || 12;
          const isWeak = userState.weakMode[ex.id] || false;
          const actualReps = isWeak ? Math.max(1, Math.floor(baseReps / 2)) : baseReps;
          const repsLabel = ex.name.toLowerCase().includes("plank") ? "sec" : "reps";

          completedInGroup.push({
            name: ex.name,
            reps: actualReps,
            label: repsLabel,
          });

          // Soma os reps, ignorando os segundos do exercício "Plank"
          if (repsLabel === "reps") {
            formatted.totalReps += actualReps;
            totalRepsInGroup += actualReps;
          }
          formatted.total++;
        }
      });

      if (completedInGroup.length > 0) {
        // Agora guardamos um objeto com os exercícios E o total de reps do grupo
        formatted.exercises[muscle] = {
          exerciseList: completedInGroup,
          groupReps: totalRepsInGroup
        };
      }
    }
  });
  return formatted;
}

function renderSummaryView(summaryData) {
  const summaryHtml = `
    <h2>Session Complete! (${summaryData.total} Exercises Done; ${summaryData.totalReps} reps)</h2>
    <img src="./images/others/Dale-Cooper_Thumbs_Up.gif" alt="Thumbs Up">
    <div class="summary-toggle-container">
         <button id="summaryToggleAllBtn" class="toggle-all-btn">Expand All</button>
     </div>
    <div class="summary-exercises-list">
        ${displayOrder
          .map((muscle) => {
            const muscleData = summaryData.exercises[muscle];
            if (muscleData && muscleData.exerciseList.length > 0) {
              return `
                    <div class="exercise-group">
                        <div class="group-header">
                            <div class="group-title">
                                <span>
                                    ${muscle}
                                    <span class="summary-group-reps">(${muscleData.groupReps} reps)</span>
                                </span>
                            </div>
                            <div class="group-toggle">🔻</div>
                        </div>
                        <div class="exercises-container" style="display: none;">
                            ${muscleData.exerciseList
                              .map((ex) => `
                                <div class="summary-exercise-item">
                                    <span class="exercise-name-text">
                                        ♦ ${ex.name}
                                        <span class="exercise-reps">(${ex.reps} ${ex.label})</span>
                                    </span>
                                </div>`)
                              .join("")}
                        </div>
                    </div>`;
            }
            return "";
          })
          .join("")}
    </div>
    <div class="summary-done-container">
        <button id="summaryDoneBtn" class="summary-done-btn">DONE</button>
    </div>`;

  sessionSummaryContentEl.innerHTML = summaryHtml;
  sessionSummaryContentEl.style.display = "block";
  workoutDisplay.style.display = "block";
  workoutDisplay.classList.add("showing-summary");

  sessionSummaryContentEl.querySelectorAll(".group-header").forEach((header) => {
    header.addEventListener("click", () => {
      const group = header.closest(".exercise-group");
      if (group) {
        toggleExerciseGroup(group);
      }
    });
  });

  const summaryDoneBtn = sessionSummaryContentEl.querySelector("#summaryDoneBtn");
  if (summaryDoneBtn) {
    summaryDoneBtn.addEventListener("click", clearAllWorkouts);
  }

  const summaryToggleBtn = sessionSummaryContentEl.querySelector("#summaryToggleAllBtn");
  if (summaryToggleBtn) {
    summaryToggleBtn.addEventListener("click", () => toggleAllGroups(sessionSummaryContentEl, summaryToggleBtn));
  }
}

function showSuccessMessage() {
  const summaryData = formatWorkoutForSummary(userState.currentWorkout);
  if (summaryData.total === 0) {
    console.log("No completed exercises.");
    return;
  }

  userState.lastCompletedCycleIndex = userState.currentMuscleIndex;
  localStorage.setItem("lastCompletedCycleIndex", userState.lastCompletedCycleIndex.toString());
  userState.completedWorkout = true;
  localStorage.setItem("completedWorkout", "true");

  renderSummaryView(summaryData);
}

function updateProgressBar() {
  const progressBarEl = document.getElementById('progressBar');
  if (!progressBarEl) return;

  const totalExercises = getTotalAssignedExercises();
  
  if (totalExercises === 0) {
    progressBarEl.style.width = '0%';
    return;
  }

  let completedCount = 0;
  for (const muscle in userState.currentWorkout.exercises) {
    userState.currentWorkout.exercises[muscle].forEach(ex => {
      if (ex.completed) {
        completedCount++;
      }
    });
  }

  const progressPercentage = (completedCount / totalExercises) * 100;
  progressBarEl.style.width = `${progressPercentage}%`;
}

function toggleBattleTypeVisibility() {
  // Encontra os elementos da interface
  const battleToggleEl = document.querySelector('.battle-toggle');
  const wtToggleCheckbox = document.getElementById('wtBackgroundToggle');

  if (battleToggleEl && wtToggleCheckbox) {
    // Se a checkbox estiver marcada, mostra o seletor. Se não, esconde.
    if (wtToggleCheckbox.checked) {
      battleToggleEl.style.display = 'flex';
    } else {
      battleToggleEl.style.display = 'none';
    }
  }
}

// =================================================================================
// SECTION 4: DOM MANIPULATION AND RENDERING
// =================================================================================

function updateExerciseDisplay(exerciseId) {
  const exerciseEl = document.getElementById(exerciseId);
  if (!exerciseEl) return;

  const repsElement = exerciseEl.querySelector(".exercise-reps");
  const exerciseNameElement = exerciseEl.querySelector(".exercise-name-text");
  const exerciseText = exerciseNameElement ? exerciseNameElement.firstChild.textContent.trim().toLowerCase() : "";

  if (repsElement) {
    const baseReps = parseInt(repsElement.dataset.baseReps);
    const isWeak = userState.weakMode[exerciseId] || false;
    const currentReps = isWeak ? Math.max(1, Math.floor(baseReps / 2)) : baseReps;
    const repsLabel = exerciseText.includes("plank") ? "sec" : "reps";
    repsElement.textContent = `(${currentReps} ${repsLabel})`;
  }
}

function renderExercises() {
  sessionSummaryContentEl.style.display = "none";
  workoutDisplay.classList.remove("showing-summary");
  exercisesListEl.innerHTML = "";
  if (!userState.currentWorkout?.exercises) return;

  let hasAnyVisibleExercises = false;

  displayOrder.forEach((muscle) => {
    const allExercisesInMuscleGroup = userState.currentWorkout.exercises[muscle];

    if (allExercisesInMuscleGroup && allExercisesInMuscleGroup.length > 0) {
      const visibleExercisesInGroup = allExercisesInMuscleGroup.filter(ex => {
        if (ex.completed) return true;
        if (!ex.equipment || ex.equipment.length === 0) return true;
        return ex.equipment.some(eq => userState.equipment.includes(eq));
      });

      if (visibleExercisesInGroup.length > 0) {
        hasAnyVisibleExercises = true;
        const groupEl = document.createElement("div");
        groupEl.className = "exercise-group";

        const headerWrapperEl = document.createElement("div");
        headerWrapperEl.className = "group-header-wrapper";

        const completeGroupBtn = document.createElement("button");
        completeGroupBtn.className = "complete-group-btn";
        completeGroupBtn.innerHTML = "✓✓";
        completeGroupBtn.title = `Complete all ${muscle} exercises`;
        
        const exercisesForThisGroupInState = allExercisesInMuscleGroup || [];
        const allInGroupStateCompleted = exercisesForThisGroupInState.length > 0 && exercisesForThisGroupInState.every(ex => ex.completed);
        if (allInGroupStateCompleted || exercisesForThisGroupInState.length === 0) {
          completeGroupBtn.disabled = true;
        }

        const headerEl = document.createElement("div");
        headerEl.className = "group-header";
        
        const titleEl = document.createElement("div");
        titleEl.className = "group-title";

        const muscleNameSpan = document.createElement("span");
        muscleNameSpan.textContent = muscle.charAt(0).toUpperCase() + muscle.slice(1);
        titleEl.appendChild(muscleNameSpan);

        const toggleEl = document.createElement("div");
        toggleEl.className = "group-toggle";
        headerEl.append(titleEl, toggleEl);

        headerWrapperEl.appendChild(completeGroupBtn);
        headerWrapperEl.appendChild(headerEl);
        groupEl.appendChild(headerWrapperEl);

        const exercisesContainerEl = document.createElement("div");
        exercisesContainerEl.className = "exercises-container";

        let isSavedAsCollapsed = userState.collapsedGroups[muscle] === true;
        let shouldThisGroupBeExpanded = !isSavedAsCollapsed;
        const allVisibleInGroupCompleted = visibleExercisesInGroup.every(ex => ex.completed);
        if (allVisibleInGroupCompleted && visibleExercisesInGroup.length > 0) {
          shouldThisGroupBeExpanded = false;
        }

        exercisesContainerEl.style.display = shouldThisGroupBeExpanded ? "block" : "none";
        const toggleVisualEl = groupEl.querySelector('.group-toggle');
        if (toggleVisualEl) {
          toggleVisualEl.textContent = shouldThisGroupBeExpanded ? "🔺" : "🔻";
        }

        visibleExercisesInGroup.forEach((ex) => {
          const el = document.createElement("div");
          el.className = `exercise ${ex.completed ? "completed" : ""}`;
          el.id = ex.id;
          const baseReps = ex.reps || 12,
            isWeak = userState.weakMode[ex.id] || false;
          const reps = isWeak ? Math.max(1, Math.floor(baseReps / 2)) : baseReps;
          const diffStars = "★".repeat(ex.difficulty || 1);
          const repsTxt = ex.name.toLowerCase().includes("plank") ? `${reps} sec` : `${reps} reps`;

          el.innerHTML = `
            <div class="exercise-top-row">
                <span class="exercise-name-text">
                    ${ex.name} <span class="exercise-reps" data-base-reps="${baseReps}">(${repsTxt})</span>
                </span>
                <span class="exercise-difficulty">${diffStars}</span>
            </div>
            <div class="exercise-bottom-row">
                <div class="exercise-action-buttons">
                    <button class="complete-btn ${ex.completed ? "completed" : ""}" ${ex.completed ? "disabled" : ""}>${ex.completed ? "✓ Done" : "Complete"}</button>
                    <button class="swap-exercise-btn ${ex.completed ? "disabled" : ""}" title="Swap Exercise" ${ex.completed ? "disabled" : ""}>↻ Swap</button>
                </div>
                <label class="checkbox-option weak-toggle">
                    <input type="checkbox" id="weak-${ex.id}" ${isWeak ? "checked" : ""} ${ex.completed ? "disabled" : ""}>
                    <span class="weak-toggle-text">I'm weak</span>
                    <span class="help-icon">?</span>
                </label>
            </div>`;
          exercisesContainerEl.appendChild(el);
        });

        groupEl.appendChild(exercisesContainerEl);
        exercisesListEl.appendChild(groupEl);
      }
    }
  });

  workoutDisplay.style.display = hasAnyVisibleExercises || sessionSummaryContentEl.style.display === "block" ? "block" : "none";
  updateToggleAllButtonState();
  checkAllCompleted();
  updateProgressBar();
}


// =================================================================================
// SECTION 5: EVENT HANDLERS
// =================================================================================

function handlePhraseToggle() {
  const battleType = userState.battleType;
  userState.phraseMode[battleType] = userState.phraseMode[battleType] === "default" ? "alternate" : "default";
  localStorage.setItem("phraseMode", JSON.stringify(userState.phraseMode));
  updateDeathText();
}

function handleGenerateClick() {
  const now = Date.now();
  numberWarningEl.style.display = "none";
  spamWarningEl.style.display = "none";
  const targetDeathsValue = deathCountInput.value;
  const targetDeaths = parseInt(targetDeathsValue);

  if (now - lastGenerateClick < 300) {
    console.log("Generate button clicked too quickly.");
    if (targetDeathsValue === "" || targetDeathsValue === "0" || isNaN(targetDeaths) || targetDeaths < 0) {
      if (numberWarningEl.style.display !== "block") {
        numberWarningEl.style.display = "block";
        setTimeout(() => (numberWarningEl.style.display = "none"), 1500);
      }
    } else if (targetDeaths > 0 && targetDeaths === userState.lastTotalAssignedCount) {
      if (spamWarningEl.style.display !== "block") {
        spamWarningEl.style.display = "block";
        setTimeout(() => (spamWarningEl.style.display = "none"), 1500);
      }
    }
    return;
  }
  lastGenerateClick = now;
  sessionSummaryContentEl.style.display = "none";
  workoutDisplay.classList.remove("showing-summary");

  if (userState.completedWorkout) {
    userState.completedWorkout = false;
    localStorage.setItem("completedWorkout", "false");
  }
  generateWorkout();
}

function handleEquipmentChange(event) {
  const checkbox = event.target;
  const equipmentType = checkbox.dataset.equipment;
  if (!equipmentType) return;

  if (checkbox.checked) {
    if (!userState.equipment.includes(equipmentType)) {
      userState.equipment.push(equipmentType);
    }
  } else {
    const index = userState.equipment.indexOf(equipmentType);
    if (index > -1) {
      userState.equipment.splice(index, 1);
    }
    if (userState.equipment.length === 0) {
      console.warn("Cannot uncheck the last piece of equipment. Re-checking.");
      checkbox.checked = true;
      userState.equipment.push(equipmentType);
      return;
    }
  }
  localStorage.setItem("userEquipment", JSON.stringify(userState.equipment));
  console.log("Updated equipment:", userState.equipment);
  renderExercises();
}

function handleAddOneClick() {
  // Guarda o estado atual antes de adicionar
  userState.indexBeforeLastAddition = userState.currentMuscleIndex;
  localStorage.setItem("indexBeforeLastAddition", userState.indexBeforeLastAddition.toString());

  numberWarningEl.style.display = "none";
  spamWarningEl.style.display = "none";
  let currentVal = parseInt(deathCountInput.value);

  if (isNaN(currentVal) || currentVal < 0) {
    currentVal = 0;
  }
  const newVal = currentVal + 1;
  deathCountInput.value = newVal;
  generateAdditionalExercises(1);
}

function handleBattleTypeToggle() {
  userState.battleType = airBattlesCheckbox.checked ? "air" : "ground";
  localStorage.setItem("battleType", userState.battleType);
  updateDeathText();
  updateBackground();
}


// =================================================================================
// SECTION 6: INITIALIZATION AND EVENT LISTENERS
// =================================================================================

// --- Event Listeners ---
generateBtn.addEventListener('click', handleGenerateClick);
addOneBtn.addEventListener('click', handleAddOneClick);
airBattlesCheckbox.addEventListener('change', handleBattleTypeToggle);
groundBattlesCheckbox.addEventListener('change', handleBattleTypeToggle);
workDoneBtn.addEventListener('click', showSuccessMessage);
toggleAllBtn.addEventListener('click', () => toggleAllGroups(exercisesListEl, toggleAllBtn));
completeAllBtn.addEventListener('click', completeAllExercises);
phraseToggleBtn.addEventListener("click", handlePhraseToggle);

customConfirmOkBtn.addEventListener('click', () => {
  if (typeof confirmModalOnOk === 'function') {
    confirmModalOnOk();
  }
  customConfirmModal.classList.remove('visible');
  confirmModalOnOk = null;
  confirmModalOnCancel = null;
});

customConfirmCancelBtn.addEventListener('click', () => {
  if (typeof confirmModalOnCancel === 'function') {
    confirmModalOnCancel();
  }
  customConfirmModal.classList.remove('visible');
  confirmModalOnOk = null;
  confirmModalOnCancel = null;
});

clearWorkoutBtn.addEventListener('click', () => {
  showCustomConfirm("This will delete all exercises. Do you want to proceed?", clearAllWorkouts);
});

clearCacheLink.addEventListener('click', () => {
  showCustomConfirm("Are you sure you want to clear all saved data (workout, equipment, etc)?", () => {
    localStorage.clear();
    location.reload();
  });
});

wtToggle.addEventListener("change", function() {
  try {
    userState.useWTBackgrounds = this.checked;
    localStorage.setItem("useWTBackgrounds", this.checked);
    updateBackground();
	toggleBattleTypeVisibility();
  } catch (error) {
    console.error("Error handling WT background toggle:", error);
  }
});

equipmentCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", handleEquipmentChange);
});

exercisesListEl.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('.weak-toggle input')) {
        const exerciseEl = target.closest('.exercise');
        if (exerciseEl) {
            toggleWeakMode(exerciseEl.id);
        }
    }
});

exercisesListEl.addEventListener('click', (event) => {
  const target = event.target; // O elemento exato que foi clicado

  // --- Caso 1: Botão "Complete Group" ('	) clicado ---
  if (target.matches('.complete-group-btn')) {
    event.stopPropagation(); // Impede que o clique também feche/abra a aba
    const groupEl = target.closest('.exercise-group');
    if (groupEl) {
      const muscle = groupEl.querySelector('.group-title span')?.textContent.toLowerCase();
      if (muscle) {
        completeAllExercisesInGroup(muscle, target, groupEl);
      }
    }
    return; // Ação tratada, termina aqui
  }

  // --- Caso 2: Cabeçalho do Grupo clicado para abrir/fechar ---
  const headerEl = target.closest('.group-header');
  if (headerEl) {
    const groupEl = headerEl.closest('.exercise-group');
    if (groupEl) {
      toggleExerciseGroup(groupEl);
    }
    return; // Ação tratada, termina aqui
  }
  
  // --- Caso 3: Botões dentro de um exercício individual ---
  const exerciseEl = target.closest('.exercise');
  if (exerciseEl) {
    const exerciseId = exerciseEl.id;
    if (target.matches('.complete-btn') && !target.disabled) {
      completeExercise(exerciseId);
    } else if (target.matches('.swap-exercise-btn') && !target.disabled) {
      swapExercise(exerciseId);
    }
  }
});

// Listener separado para o evento 'change' da checkbox "I'm weak"
exercisesListEl.addEventListener('change', (event) => {
  const target = event.target;
  if (target.matches('.weak-toggle input')) {
    const exerciseEl = target.closest('.exercise');
    if (exerciseEl) {
      toggleWeakMode(exerciseEl.id);
    }
  }
});

// --- Initial Page Load Setup ---
document.addEventListener("DOMContentLoaded", () => {
  initBackgrounds();

  const savedBattleType = localStorage.getItem("battleType");
  if (savedBattleType) {
    userState.battleType = savedBattleType;
    airBattlesCheckbox.checked = savedBattleType === "air";
    groundBattlesCheckbox.checked = savedBattleType === "ground";
  } else {
    airBattlesCheckbox.checked = true;
    localStorage.setItem("battleType", "air");
  }

  wtToggle.checked = JSON.parse(localStorage.getItem("useWTBackgrounds")) || false;
  updateBackground();
  updateDeathText();
  toggleBattleTypeVisibility();

  equipmentCheckboxes.forEach((checkbox) => {
    const equipmentType = checkbox.dataset.equipment;
    checkbox.checked = userState.equipment.includes(equipmentType);
  });

  if (userState.currentWorkout?.exercises && typeof userState.currentWorkout.exercises === "object") {
    displayOrder.forEach((m) => {
      if (!Array.isArray(userState.currentWorkout.exercises[m]))
        userState.currentWorkout.exercises[m] = [];
    });

    userState.lastTotalAssignedCount = getTotalAssignedExercises();
    deathCountInput.value = userState.lastTotalAssignedCount > 0 ? userState.lastTotalAssignedCount : "1";

    if (userState.lastTotalAssignedCount > 0) {
      if (userState.completedWorkout) {
        const lastSummary = formatWorkoutForSummary(userState.currentWorkout);
		if (lastSummary.total > 0) {
			renderSummaryView(lastSummary);
		} else {
			renderExercises();
		}
      } else {
        renderExercises();
      }
    }
  } else {
    clearAllWorkouts();
  }
  
  // Lógica para o botão "Voltar ao Topo"
window.addEventListener('scroll', () => {
  // Se o utilizador descer mais de 300 pixels na página
  if (window.scrollY > 300) {
    // Adiciona a classe .visible para mostrar o botão
    backToTopBtn.classList.add('visible');
  } else {
    // Remove a classe para esconder o botão
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  // Ao clicar, leva o utilizador de volta ao topo da página com uma animação suave
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
});