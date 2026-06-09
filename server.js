
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const resources = [
  {
    id: 1,
    subject: "HTML & CSS",
    description: "Frontend development basics and responsive web design.",
    link: "https://developer.mozilla.org/en-US/docs/Learn"
  },
  {
    id: 2,
    subject: "JavaScript",
    description: "JavaScript tutorials and interactive examples.",
    link: "https://javascript.info/"
  },
  {
    id: 3,
    subject: "Python",
    description: "Python programming concepts and projects.",
    link: "https://www.w3schools.com/python/"
  },
  {
    id: 4,
    subject: "Java",
    description: "Object-oriented programming with Java.",
    link: "https://www.javatpoint.com/java-tutorial"
  },
  {
    id: 5,
    subject: "DBMS",
    description: "Database Management Systems notes and tutorials.",
    link: "https://www.geeksforgeeks.org/dbms/"
  },
  {
    id: 6,
    subject: "Operating Systems",
    description: "OS concepts including scheduling and memory management.",
    link: "https://www.tutorialspoint.com/operating_system/index.htm"
  },
  {
    id: 7,
    subject: "Computer Networks",
    description: "Networking protocols and communication concepts.",
    link: "https://www.geeksforgeeks.org/computer-network-tutorials/"
  },
  {
    id: 8,
    subject: "Data Structures",
    description: "Study materials and coding resources.",
    link: "https://www.geeksforgeeks.org/data-structures/"
  },
  {
    id: 9,
    subject: "Machine Learning",
    description: "ML algorithms and practical learning resources.",
    link: "https://developers.google.com/machine-learning/crash-course"
  },
  {
    id: 10,
    subject: "Cyber Security",
    description: "Security fundamentals and ethical hacking basics.",
    link: "https://www.coursera.org/learn/intro-cyber-security"
  }
];

app.get('/api/resources', (req, res) => {
  res.json(resources);
});

app.post('/api/resources', (req, res) => {
  const newResource = {
    id: resources.length + 1,
    ...req.body
  };

  resources.push(newResource);
  res.status(201).json(newResource);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
