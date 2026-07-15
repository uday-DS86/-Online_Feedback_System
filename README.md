<h1 align="center">📝 Online Feedback System</h1>

<p align="center">
A Full Stack Web Application developed using <b>React</b>, <b>Spring Boot</b>, and <b>MariaDB</b>.
</p>

<hr>

<h2>📖 Project Description</h2>

<p>
The <b>Online Feedback System</b> is a web application that allows users to submit feedback through a simple interface.
The feedback is stored in a MariaDB database using Spring Boot REST APIs.
Administrators can view and delete feedback records.
</p>

<hr>

<h2>📋 Project Information</h2>

<table border="1" cellspacing="0" cellpadding="8">
<tr>
<th>Property</th>
<th>Details</th>
</tr>

<tr>
<td><b>Project Name</b></td>
<td>Online Feedback System</td>
</tr>

<tr>
<td><b>Project Type</b></td>
<td>Full Stack Web Application</td>
</tr>

<tr>
<td><b>Frontend</b></td>
<td>React, Vite, JavaScript, CSS, Axios</td>
</tr>

<tr>
<td><b>Backend</b></td>
<td>Spring Boot, Spring Data JPA, Hibernate</td>
</tr>

<tr>
<td><b>Database</b></td>
<td>MariaDB</td>
</tr>

<tr>
<td><b>Build Tool</b></td>
<td>Maven</td>
</tr>

<tr>
<td><b>API Testing</b></td>
<td>Postman</td>
</tr>

<tr>
<td><b>IDE</b></td>
<td>Visual Studio Code</td>
</tr>

</table>

<hr>

<h2>✨ Features</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Feature</th>
<th>Description</th>
</tr>

<tr>
<td>Submit Feedback</td>
<td>Users can submit feedback using an online form.</td>
</tr>

<tr>
<td>View Feedback</td>
<td>Administrator can view all submitted feedback.</td>
</tr>

<tr>
<td>Delete Feedback</td>
<td>Administrator can delete feedback records.</td>
</tr>

<tr>
<td>REST API Integration</td>
<td>Frontend communicates with backend using REST APIs.</td>
</tr>

<tr>
<td>Database Storage</td>
<td>All feedback is stored in MariaDB.</td>
</tr>

</table>

<hr>

<h2>🛠 Technologies Used</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Category</th>
<th>Technology</th>
</tr>

<tr>
<td>Frontend</td>
<td>React, JavaScript, Axios, CSS</td>
</tr>

<tr>
<td>Backend</td>
<td>Spring Boot, Spring MVC, Spring Data JPA, Hibernate</td>
</tr>

<tr>
<td>Database</td>
<td>MariaDB</td>
</tr>

<tr>
<td>Tools</td>
<td>VS Code, Git, GitHub, Postman</td>
</tr>

</table>

<hr>

<h2>📂 Project Structure</h2>

<pre>
OnlineFeedbackSystem
│
├── Backend
│   ├── Controller
│   ├── Entity
│   ├── Repository
│   ├── demo
│   └── application.properties
│
├── Frontend
│   ├── src
│   ├── services
│   ├── App.jsx
│   ├── main.jsx
│   └── package.json
│
└── README.md
</pre>

<hr>

<h2>🔄 Application Workflow</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Step</th>
<th>Description</th>
</tr>

<tr>
<td>1</td>
<td>User enters feedback details in the React application.</td>
</tr>

<tr>
<td>2</td>
<td>React sends the request to the Spring Boot REST API using Axios.</td>
</tr>

<tr>
<td>3</td>
<td>Controller receives the request.</td>
</tr>

<tr>
<td>4</td>
<td>Repository stores the feedback in the MariaDB database.</td>
</tr>

<tr>
<td>5</td>
<td>Administrator views all feedback.</td>
</tr>

<tr>
<td>6</td>
<td>Administrator deletes unwanted feedback.</td>
</tr>

</table>

<hr>

<h2>🌐 REST API Endpoints</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Method</th>
<th>Endpoint</th>
<th>Description</th>
</tr>

<tr>
<td>POST</td>
<td>/feedback/save</td>
<td>Save feedback</td>
</tr>

<tr>
<td>GET</td>
<td>/feedback/all</td>
<td>Retrieve all feedback</td>
</tr>

<tr>
<td>DELETE</td>
<td>/feedback/delete/{id}</td>
<td>Delete feedback</td>
</tr>

</table>

<hr>

<h2>🗄 Database Table</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Column</th>
<th>Type</th>
</tr>

<tr>
<td>id</td>
<td>Long</td>
</tr>

<tr>
<td>name</td>
<td>String</td>
</tr>

<tr>
<td>email</td>
<td>String</td>
</tr>

<tr>
<td>message</td>
<td>String</td>
</tr>

</table>

<hr>

<h2>⚙ Installation</h2>

<h3>Backend</h3>

<pre>
mvn clean install
mvn spring-boot:run
</pre>

<h3>Frontend</h3>

<pre>
cd fakeapi
npm install
npm run dev
</pre>

<hr>

<h2>🚀 Future Enhancements</h2>

<ul>
<li>Update Feedback</li>
<li>Search Feedback</li>
<li>Admin Authentication</li>
<li>User Login</li>
<li>Dashboard Analytics</li>
<li>Email Notifications</li>
</ul>

<hr>

<h2>👨‍💻 Team Members</h2>

<table border="1" cellspacing="0" cellpadding="8">

<tr>
<th>Name</th>
<th>Role</th>
</tr>

<tr>
<td>Uday Vagmode</td>
<td>Full Stack Developer</td>
</tr>

<tr>
<td>Yerramalli Abhishek</td>
<td>Team Member</td>
</tr>

<tr>
<td>MD Farhan</td>
<td>Team Member</td>
</tr>

<tr>
<td>Y Ravi Teja</td>
<td>Team Member</td>
</tr>

</table>

<hr>

<h2>📜 License</h2>

<p>
This project is developed for educational purposes as part of a B.Tech Full Stack Development project.
</p>
