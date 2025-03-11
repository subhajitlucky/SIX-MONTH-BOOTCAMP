// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Light Mode';
    } else {
        themeToggle.textContent = 'Dark Mode';
    }
});

// Project data
const projects = [
    {
        title: 'Portfolio Website',
        description: 'A responsive personal portfolio showcasing my web development skills.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        type: 'web',
        github: 'https://github.com/your-username/portfolio-website'
    },
    {
        title: 'Hello World Mobile App',
        description: 'A simple React Native app with interactive components and state management.',
        technologies: ['React Native', 'Expo'],
        type: 'mobile',
        github: 'https://github.com/your-username/react-native-hello-world'
    },
    {
        title: 'Blockchain Greeter Contract',
        description: 'A Solidity smart contract with testing and deployment to Ethereum testnet.',
        technologies: ['Solidity', 'Hardhat'],
        type: 'blockchain',
        github: 'https://github.com/your-username/blockchain-basics'
    }
];

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const projectContainer = document.querySelector('.project-container');

// Function to render projects based on filter
function renderProjects(filter = 'all') {
    projectContainer.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.type === filter);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join(' ')}
            </div>
            <a href="${project.github}" target="_blank">View on GitHub</a>
        `;
        projectContainer.appendChild(projectCard);
    });
}

// Add active class to filter buttons
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderProjects(button.dataset.filter);
    });
});

// Initial render
renderProjects();

// Contact form validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.elements;
    
    // Simple validation
    if (inputs[0].value && inputs[1].value && inputs[2].value) {
        alert('Message sent successfully!');
        contactForm.reset();
    } else {
        alert('Please fill in all fields');
    }
});