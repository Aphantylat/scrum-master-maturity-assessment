// scripts.js
import { assessmentQuestions } from './questions.js';
import { scrumMasterLevels } from './levels.js';

// Image mapping for results
const levelImages = {
    clerk: 'clerk.jpg',
    puppetMaster: 'puppet-master.jpg',
    organizer: 'organizer.jpg',
    coach: 'coach.jpg',
    advisor: 'advisor.jpg',
    expert: 'expert.jpg'
};

// Store quiz state globally for sharing
window.quizAnswers = {};
window.finalScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('scrumQuiz');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const container = document.getElementById('questionsContainer');
    let currentSection = 0;
    
    // Generate questions HTML
    function generateQuestions() {
        assessmentQuestions.sections.forEach((section, index) => {
            const sectionElement = document.createElement('section');
            sectionElement.id = section.id;
            sectionElement.style.display = index === 0 ? 'block' : 'none';
            
            sectionElement.innerHTML = `
                <h2>${section.title}</h2>
                ${section.questions.map(question => `
                    <div class="question-group">
                        <span class="category-tag">${question.category}</span>
                        <h3>
                            ${question.text}
                            ${question.tooltip ? `
                                <span class="tooltip">ℹ️
                                    <span class="tooltip-text">${question.tooltip}</span>
                                </span>
                            ` : ''}
                        </h3>
                        <div class="radio-group">
                            ${question.options.map(option => `
                                <label>
                                    <input type="radio" name="${question.id}" value="${option.value}" ${question.required ? 'required' : ''}>
                                    ${option.text}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            `;
            
            container.appendChild(sectionElement);
        });
    }

    function updateNavigation() {
        const sections = document.querySelectorAll('section');
        prevBtn.style.display = currentSection === 0 ? 'none' : 'block';
        nextBtn.style.display = currentSection === sections.length - 1 ? 'none' : 'block';
        submitBtn.style.display = currentSection === sections.length - 1 ? 'block' : 'none';
        
        const progress = ((currentSection + 1) / sections.length) * 100;
        document.querySelector('.progress-bar').style.width = `${progress}%`;
        document.querySelector('.progress-text').textContent = `${Math.round(progress)}%`;
    }

    function validateSection(section) {
        const requiredInputs = section.querySelectorAll('input[required]');
        let allAnswered = true;
        requiredInputs.forEach(input => {
            const name = input.getAttribute('name');
            if (!section.querySelector(`input[name="${name}"]:checked`)) {
                allAnswered = false;
            }
        });
        return allAnswered;
    }

    function handleNavigation() {
        nextBtn.addEventListener('click', () => {
            const sections = document.querySelectorAll('section');
            if (!validateSection(sections[currentSection])) {
                alert('Please answer all questions in this section before proceeding.');
                return;
            }

            if (currentSection < sections.length - 1) {
                sections[currentSection].style.display = 'none';
                currentSection++;
                sections[currentSection].style.display = 'block';
                updateNavigation();
            }
        });

        prevBtn.addEventListener('click', () => {
            const sections = document.querySelectorAll('section');
            if (currentSection > 0) {
                sections[currentSection].style.display = 'none';
                currentSection--;
                sections[currentSection].style.display = 'block';
                updateNavigation();
            }
        });
    }

    function calculateResult(formData) {
        let totalScore = 0;
        let questionCount = 0;
        
        // Store answers for sharing
        formData.forEach((value, key) => {
            window.quizAnswers[key] = value;
            totalScore += parseInt(value);
            questionCount++;
        });

        // Calculate raw score (1-5 scale)
        const averageScore = totalScore / questionCount;
        
        // Map the 1-5 scale to the 20-140 scale
        const normalizedScore = Math.round(20 + (averageScore - 1) * 30);
        window.finalScore = normalizedScore;

        // Find matching result
        let result;
        for (const [key, level] of Object.entries(scrumMasterLevels)) {
            if (normalizedScore >= level.minScore && normalizedScore <= level.maxScore) {
                result = {key, ...level};
                break;
            }
        }

        // Fallback with proper logging
        if (!result) {
            console.log('Score:', normalizedScore, 'No direct match found');
            if (normalizedScore < 20) {
                result = {key: 'clerk', ...Object.values(scrumMasterLevels)[0]};
            } else {
                result = {key: 'expert', ...Object.values(scrumMasterLevels)[5]};
            }
        }

        return result;
    }

    function displayResult(result) {
        document.querySelector('.quiz-container').style.display = 'none';
        const resultsContainer = document.getElementById('results');
        resultsContainer.style.display = 'block';
        
        const resultImage = document.getElementById('resultImage');
        resultImage.src = `images/${levelImages[result.key]}`;
        resultImage.alt = result.title;
        resultImage.onerror = () => {
            resultImage.src = 'images/placeholder.jpg';
        };

        document.getElementById('resultTitle').textContent = result.title;
        document.getElementById('resultDescription').innerHTML = result.description;
    }

    // LinkedIn sharing
	document.getElementById('shareLinkedIn').addEventListener('click', () => {
	    const level = document.getElementById('resultTitle').textContent;
	    const shareUrl = window.location.href.split('#')[0]; // Remove any hash from the URL
	    
	    // Create the sharing URL for LinkedIn
	    const shareText = `Holy cow! I just found out I'm a "${level}" Scrum Master! 🎮\n\nJust took this awesome Scrum Master assessment.\n\nWant to know your level? Take the quiz here:\n${shareUrl}`;
	    
	    // For LinkedIn, we'll open a new window with a pre-filled post
	    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
	    
	    // Copy text to clipboard for easy pasting
	    navigator.clipboard.writeText(shareText).then(() => {
	        alert('Share text copied to clipboard! You can paste it into your LinkedIn post.\n\nOpening LinkedIn sharing window...');
	        window.open(linkedInUrl, '_blank', 'width=600,height=600');
	    }).catch(() => {
	        // If clipboard copy fails, still open LinkedIn
	        window.open(linkedInUrl, '_blank', 'width=600,height=600');
	    });
	});

    // Feedback sharing
    document.getElementById('shareFeedback').addEventListener('click', () => {
        document.getElementById('feedbackDialog').showModal();
    });

    // Handle feedback form submission
    document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Create a clean answers object with question text and selected answer
        const cleanAnswers = {};
        for (const [questionId, value] of Object.entries(window.quizAnswers)) {
            // Find the corresponding question from assessmentQuestions
            const question = assessmentQuestions.sections
                .flatMap(section => section.questions)
                .find(q => q.id === questionId);
                
            if (question) {
                // Find the selected option text
                const selectedOption = question.options.find(opt => opt.value.toString() === value.toString());
                cleanAnswers[question.text] = selectedOption ? selectedOption.text : value;
            }
        }

        const formData = {
            name: document.getElementById('name').value || 'Anonymous',
            email: document.getElementById('email').value || 'Not provided',
            level: document.getElementById('resultTitle').textContent,
            score: window.finalScore,
            answers: JSON.stringify(cleanAnswers),
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('store-results.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you for sharing your results!');
                document.getElementById('feedbackDialog').close();
            } else {
                alert('There was an error sharing your results. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error sharing your results. Please try again.');
        }
    });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const result = calculateResult(formData);
        displayResult(result);

        // Log for debugging
        console.log('Total Score:', window.finalScore);
        console.log('Result Level:', result.title);
        console.log('Answers:', window.quizAnswers);
    });

    // Initialize the quiz
    generateQuestions();
    handleNavigation();
    updateNavigation();
});