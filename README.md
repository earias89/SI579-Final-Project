# SI579-Final-Project

Project Title: Addressing Reproductive Coercion: A Digital Health Application

Project Members: Erika Arias

Introduction: This project was a follow-up to a project I worked on over the summer called C-ARCHES, an app that is intended to address reproductive coercion in health settings. C-ARCHES is part of a pilot NIH health study, where the focus is more on research, and less on launching a new application for continued use. Thus, users will have limited interaction with the app, and a main aim for this project was to provide users with access to this information, regardless of their participation in the NIH study. Likewise, I set out to create an application with interactive features that the original app will not include due to time and resource constraints. The content and information structure of this application was also reframed to reflect a more gamified version of the original app.
* A special thanks to my adviser, Yasamin Kusunoki for inspriing this project.

Core Functionality: This application uses core concepts used in my SI579 class on Vanilla JS. In particular, assignment 3 will be most useful for displaying a drop down menu with different options for users to select from on the page. When users select each option, a new question and choice options will appear that pertain to that topic. Additionally, assignment 2 will be helpful for implementing different click and hover event handling options. This app will focus on DOM manipulation to increase interactive learning (Section A), scenario-based learning, user interaction, user feedback (Section B), and will provide resource links for community support (section C). Additional concepts used from class will include implementation of a setInterval() function and fetching using asynchronous functions to fetch an image of a persona that will be used in Section B.

Features:


Section A:

Aim 1: To educate users on violence prevention, including what is reproductive coercion. 

Aim 2: To create an interactive and gamified experience using low-pressure quizzes related the following topics: 

(1) Healthy Relationships vs. Unhealthy Relationships 


(2) Intimate Partner Violence 


(3) Pregnancy Coercion 


(4) Birth Control Sabotage 


  • When users click on one of these options, the page updates with a new question and choice options. 

  
  • Each choice option is represented with a button, so when users click on any choice, the page content will update to 
    show whether the user answered correctly or incorrectly. 

    
  • Using setInterval, a timer was added at the bottom of the question space. o setInterval was used to include a low 
    pressure timer that counts to 10 seconds and then stops with an encouraging message for users to continue at their 
    own pace.
    

Section B:


Aim 3: To depict an example of reproductive coercion. 


  • Reproductive coercion is a specific type of intimate partner violence, and poses social and health risks at the 
    individual, community, and structural levels. 

    
  • Many do not know how to recognize instances of this in their own relationships or in the relationships of loved 
    ones. 

    
  • When users click on the scenario button, an image of a persona is fetched so that users are able to read through a 
    (fictional) experience that depicts an example of reproductive coercion. o This section relies on class topics 
    related to fetching data and asynchronous functions.

    

Section C: 

Aim 4: To provide users with community resources and support. 

  • When users hover over each resource listed, more information about the specific resource like the website link 
    and/or contact number becomes visible.
    

Additional Feature Added: 


Aim 5: To create a personalized interactive experience for users.


  • When users input their name inside of the input box at the top of the page, a personalized welcome message appears, 
    and the user’s name is stored in local storage.

* Parts of this application were more complicated for me, and particularly, getting my drop-down menu to function according to plan took some help from Chat-GPT.
  
