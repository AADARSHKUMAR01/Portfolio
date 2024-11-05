
// Simple Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for project cards
            if (entry.target.classList.contains('projects')) {
                const cards = entry.target.querySelectorAll('.project-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
            }
            
            // Add staggered animation for skills
            if (entry.target.classList.contains('skills')) {
                const skills = entry.target.querySelectorAll('.skill-tag');
                skills.forEach((skill, index) => {
                    setTimeout(() => {
                        skill.classList.add('visible');
                    }, index * 50);
                });
            }
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections and elements that need animations
document.querySelectorAll('section, .projects, .skills').forEach(section => {
    observer.observe(section);
});
