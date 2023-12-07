# Pomo

Install MongoDB locally and start server (MongoDB can be installed using Homebrew on macOS machines).

Start by running npm i in both api and pomo directory to install all dependencies.

To run the front end, go to the pomo directory and run npm run dev

To run the back end, go to the api directory and run npm start

Project Pitch Slidedeck: https://docs.google.com/presentation/d/1NQCGvrGVqeObl3ZiJrulwMm4XHdR9-gMWOFTFyNgtZM/edit#slide=id.g27c1dc88024_0_22

Functinalities List:
1. Timer that is divded into sections: 
    repeat 4 times {
        a. 25 minutes (work)
        b. 5 minutes (break)
    }
        c. 30 minutes (break)

2. Plant 
    a. growing as you check off tasks/as timer goes on
    b. can be changed

3. User authentication 
    a. i think we have to use JWT but i'm not sure how the tasks list for this would look like yet

4. Task List
    a. user can check off tasks (maybe tasks get cross off or fade when completed)
    b. user can add tasks
    c. user can modify tasks
    d. user can delete tasks

5. Plant Growth 
    a. plant reder speed based on amount of tasks
        i. can be changed depending on user changes to number of tasks

