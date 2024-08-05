export default class About {
    render() {
        const main = document.querySelector("main");
        const section = document.createElement("section");
        section.innerHTML = `
        <div class="about__section about__section--intro">
            <h1 class="about__heading">About TaskTrack</h1>
            <p class="about__section-text">Welcome to TaskTrack, your ultimate solution for managing tasks efficiently and staying organized!</p>
            <p class="about__section-text">At TaskTrack, we understand the importance of productivity and the need for a reliable tool to keep track of your to-do lists. Our app is designed to simplify task management, helping you prioritize, organize, and accomplish your goals with ease.</p>
        </div>
        <div class="about__section about__section--mission">
            <h2 class="about__section-heading">Our Mission</h2>
            <p class="about__section-text">Our mission is to empower individuals and teams to achieve their best by providing a user-friendly and intuitive task management app. We believe that by staying organized, you can unlock your full potential and make the most of your time.</p>
        </div>
        <div class="about__section about__section--features">
            <h2 class="about__section-heading">Key Features</h2>
            <ul class="about__features-list">
                <li class="about__features-item">Simple and Intuitive Interface: TaskTrack offers a clean and straightforward interface, making it easy for you to add, edit, and manage your tasks without any hassle.</li>
                <li class="about__features-item">Customizable Lists: Create multiple lists to categorize your tasks and stay organized. Whether it's for work, personal projects, or daily errands, TaskTrack has you covered.</li>
                <li class="about__features-item">Priority Levels: Assign priority levels to your tasks to ensure that the most important items get your attention first.</li>
                <li class="about__features-item">Due Dates and Reminders: Never miss a deadline again. Set due dates and reminders to keep your tasks on track and ensure timely completion.</li>
                <li class="about__features-item">Progress Tracking: Monitor your progress and stay motivated by checking off completed tasks. TaskTrack provides a visual representation of your accomplishments.</li>
                <li class="about__features-item">Collaboration: Work together with your team by sharing task lists and collaborating on projects. TaskTrack makes teamwork seamless and efficient.</li>
            </ul>
        </div>
        <div class="about__section about__section--why-choose">
            <h2 class="about__section-heading">Why Choose TaskTrack?</h2>
            <p class="about__section-text">TaskTrack is more than just a to-do app; it's your partner in productivity. Our goal is to help you stay organized, reduce stress, and achieve your goals. Whether you're managing daily tasks or planning a major project, TaskTrack provides the tools you need to stay on top of your responsibilities.</p>
            <p class="about__section-text">Join the TaskTrack community today and experience the difference in your productivity. Start organizing, prioritizing, and accomplishing your tasks with confidence and ease.</p>
        </div>
        <div class="about__section about__section--thank-you">
            <p class="about__section-text">Thank you for choosing TaskTrack. Let's get things done, together!</p>
        </div>`;
        section.className = "about";
        main.appendChild(section);

    }
}