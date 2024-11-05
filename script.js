document.getElementById('certificateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const interest = document.getElementById('interest').value.toLowerCase();
    const course = document.getElementById('course').value.toLowerCase();
    const tasks = document.getElementById('tasks').value.toLowerCase();
    const assignments = document.getElementById('assignments').value.toLowerCase();
    const result = document.getElementById('results'); // Corrected comment placement

    // Debugging statements
    console.log('Interest:', interest);
    console.log('Course:', course);
    console.log('Tasks:', tasks);
    console.log('Assignments:', assignments);

    if (interest.includes('python certificate')) {
        if (course === 'yes') {
            if (tasks === 'yes') {
                if (assignments === 'yes') {
                    result.textContent = 'Congratulations! You qualify for the Python certificate.';
                } else {
                    result.textContent = 'Please complete all your assignments.';
                }
            } else {
                result.textContent = 'Please complete all your tasks.';
            }
        } else {
            result.textContent = 'Please complete your course.';
        }
    } else {
        result.textContent = 'Invalid input.';
    }
});
