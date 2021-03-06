# the-mindful-blurb-journal
Journaling app where user makes many micro-entries that add to a daily collection

**Abstract:** 
Practice being mindful with brevity as you write micro-journal entries. This is for those looking to be more present in their day, by letting you get “it” off your chest while helping articulate your state of mind clearly by forcing you to be brief (similar to twitter). The idea is to spend a minute or two at a time, but compile entries by day allowing you to track how your day went. If you are looking for an app that helps collect accurate data of your mental-state over the course of time, this is for you!  
**Experience:** 
In this first release users will have a form where they will select a subject(school/work, relationships, family, musings, philosophy/ religion, etc), a mood, and write about their thoughts at the moment. The app will automatically timestamp the record and post it to the users wall.
Users land on their current day’s wall, where all their posts will display in chronological order, or show “No posts today”. There will be a form button where the user can record their entry and post to the db. There will also be a jump to date toggle, where users can jump to a particular date.
There will also be a search function where users can filter by topic, mood, or search subject lines for entries. This will display chronological.  
Users will be able to see graph metrics through chartsjs data visualization and future implementations may add markdown ability to the body of posts using markedjs library.   
**Tech:**
React, Cypress, ChartJS, Node, Express, Knex, PostgreSQL, Bootstrap


**Experience Notes** 
- User lands on page displaying the CURRENT DAY'S entries
- Page Has a Navbar with user login, title, date, animated thought bubble, and link to an about page 
- Body has 2 ```<a>``` tags centered with titles of ```Today's Entries``` and ```Entries From...```
- ```Today's Entries``` links back to main with todays entries (only rerenders entries though)
- ```Entries From...``` will launch a dropdown calendar modal to select from or the user can input a ```mm/dd/yy``` only requiring the month and year (can be later added feature)
- There is a ```New Entry``` WIDGET similar to the ones for gmail in the [LowerRightCorner] which moves with the body scroll always at the same position on the window
- On click the new entry widget will pop out a module with an input for a title and dropdowns for emotion and topic (manual input in future versions), along with a character-limited text area to write the blurb
- About page acessed without needing to login, has links to sign up/login on page. About tells the purpose of and how to use the app
- has a footer with emoticons for cats, coffee, cars, code, etc. 
