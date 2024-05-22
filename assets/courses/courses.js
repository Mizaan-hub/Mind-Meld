const container = document.querySelector(".courses__container");

const titles = [
  "Learn SEO From The Best",
  "Master Web Development",
  "Become a Python Expert",
  "Learn React in 30 Days",
  "Master JavaScript",
  "Learn Node.js",
  "Become a Full-Stack Developer",
  "Learn Angular",
  "Master CSS",
  "Learn HTML5",
  "Master Web Development with React and Redux",
  "Learn Python for Data Science",
  "Master JavaScript Algorithms and Data Structures",
  "Become a Full-Stack Developer with Node.js and Express",
  "Learn Angular from Scratch",
  "Master CSS Grid and Flex box",
  "Learn HTML5 and CSS3 from Scratch",
  "Build a Full-Stack App with Vue.js and Firebase",
  "Learn React Native for Mobile App Development",
  "Master TypeScript for Modern JavaScript Development",
  "Learn Node.js for Backend Development",
  "Master Git and GitHub for Version Control",
  "Learn Docker for DevOps and Deployment",
  "Master SQL for Data Analysis",
  "Learn MongoDB for Node.js Developers",
  "Master AWS for Cloud Computing",
  "Learn Google Cloud Platform for Cloud Computing",
  "Master Azure for Cloud Computing",
  "Learn Terraform for Infrastructure as Code",
  "Master Kubernetes for Container Orchestration",
  "Learn Jenkins for Continuous Integration and Deployment",
];

const images = [
    "../pics/course-1.webp",
    "../pics/course-2.webp",
    "../pics/course-3.jpeg",
    "../pics/course-4.webp",
    "../pics/course-5.jpeg",
    "../pics/course-6.webp",
    "../pics/course-7.webp",
    "../pics/course-8.jpeg",
    "../pics/course-9.jpeg",
    "../pics/course-12.webp",
    "../pics/course-13.jpeg",
    "../pics/course-14.webp",
    "../pics/course-15.webp",
    "../pics/course-16.jpeg",
    "../pics/course-17.jpeg",
    "../pics/course-18.webp",
    "../pics/course-19.webp",
    "../pics/course-20.webp",
  ];

  

for (let i = 0; i < 80; i++) {
  // Create the course element
  const course = document.createElement("article");
  course.classList.add("course");

  // Create the course__img element
  const courseImg = document.createElement("div");
  courseImg.classList.add("course__img");

  // Create the img element
  const img = document.createElement("img");
  img.src = images[Math.floor(Math.random() * images.length)];
  courseImg.appendChild(img);

  // Create the course__info element
  const courseInfo = document.createElement("div");
  courseInfo.classList.add("course__info");

  // Create the h4 element
  const h4 = document.createElement("h4");
  h4.textContent = titles[Math.floor(Math.random() * titles.length)];

  // Create the p element
  const p = document.createElement("p");
  p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet explicabo accusamus accusantium, alias laborum quae amet!";

  // Create the a element
  const a = document.createElement("a");
  a.classList.add("btn", "btn-primary");
  a.textContent = "Learn More";
  a.href = "../thiscourse/thiscourse.html";

  // Append the elements to the course__info element
  courseInfo.appendChild(h4);
  courseInfo.appendChild(p);
  courseInfo.appendChild(a);

  // Append the course__img and course__info elements to the course element
  course.appendChild(courseImg);
  course.appendChild(courseInfo);

  // Append the course element to the container element
  container.appendChild(course);
}