# Project Charter: [C&G Coatings Estimator]

This is the project charter for the C&G Coatings Estimator Project.
This application will be delivered as a  web application. (e.g. web, iOS, Android)

- [Source Code](https://github.com/vijaythecoder/c-g-coatings-estimator-api)

Update the links above and add team name, year, semester, course, or other important project information

## Client

Clients include:

- Curt Carpenter
- curt.carpenter0@gmail.com
- C&G Coatings 
- cgcoatings@kcnet.com

## Mentor

Mentors include:

- Dr. Denise Case, dcase@nwmissouri.edu

## Project Purpose
- The purpose of this project is to develop an app to quickly estimate and quote job costs.The app needs to be fast and easy for a non-technical client. 

## Collaborators
- Vijay Tupakula, <s531507@nwmissouri.edu>
- Satya Sai Ram Vankina, <s531508@nwmissouri.edu>
- Sai Sirisha Devineni, <s531367@nwmissouri.edu>
- Saicharan Gurudu, <s531499@nwmissouri.edu>
- Dattu Bhargav Medarametla, <s531439@nwmissouri.edu>

## Benefits
- An user can quickly create and calculate the estimates.
## User Roles

This application is used by two types of users.

1. Administrator
2. User


## Stories by Role

- As a user, I want to see a public page with contact information for the company and link to their Facebook page and/or website.
- As an administrator, I want to log in (so only authorized users can create estimates).
- As an administrator, I want to see an opening page showing cards with recent estimates (name, location, year, month), with the most recent estimate at the top.
- As an administrator, from the opening page, I want an easy way to create a new estimate, either by starting with the default values or by copying from an existing estimate. (We could put a + at the top to create with default values and a + button on each estimate card to copy from that estimate.)
- As an administrator, when copying from an existing estimate, I want to be redirected to the create estimate page with all fields transferred over exactly, except the unique job name, which should be the same, except with a (1) after it to make it unique. 
- As an administrator, when creating a new estimate, I want to enter:
unique job name string
- - location string
- - int number of square feet (default = , min = 0, mas = )
- - list of materials (product string, int unit cost, int coverage per sq ft)
- - int number of days (default = )
- - int hours worked per day (per worker)
- - int labor dollars per hour
- - int number of hotel rooms
- - int number of hotel nights
- - int hotel dollars per night
- - int food dollars per day (per worker)
- - int number of vehicles 
- - int number of miles per vehicle
- - float dollars per mile
- - list of miscellaneous costs (string desc, int dollars)
- - float multiplier
- As an administrator, while creating a new estimate, I want to see the job cost in dollars and $/sqft while I change the entries. (Could we put this in a footer bar so as numbers change, the costs change as the user changes numbers - e.g. watch price change as sqft increases).
- Optional: As an administrator, I want my work saved after every modification (please don't make me click save - I might forget and my estimate would be lost). 

## Team Organization

This team is organized as follows.

|                        | Primary       | Secondary   | Content |
| ---------------------- | --------------| ------------------ |---------|
| Team Lead              | Vijay         |                    |Repo, intro, budget, schedule, risk, coordination   |
| Architect              | Sirisha       | Sairam, SaiCharan  | E-R diagram |
| Data                   | SaiCharan     | Sairam, Sirisha    | Sample data |
| UX                     | Sairam        |                    | Sketches  |
| Testing & Acceptance   | Dattu         |                    | Stories, acceptance criteria |


## Schedule

The following general schedule will be followed:

- MVP 1 completed and presented at the end of this semester. 
- Client feedback and updates completed at the end of this semester.


You will develop the schedule for next semester as part of this work. 

The complete schedule is shown in the following:
- MVP 2 and MVP 3 is planned for next semester.
- Client feedback and updates will be completed at the end of next semester.


## Budget

Present project budget table here. 

- Budget must be by phase by team role.
- For each role, assume each contributor will be working 10-12 billable hours per week for 15 weeks per semester
- Use real-world billing rates. A company must bill you at twice your salary or more - practice proving your worth. 
- Within the team, be specific on what each role will contribute to the budget and how this will be documented.

## Risk

The following have been identified as risks that could contribute to not making scope, budget, or schedule:

- The client changes requirements mid-project.

## Acceptance criteria

- As a user, I can see a public page with contact information for the company and link to their Facebook page and/or website.
- As an administrator, I can log in (so only authorized users can create estimates).
- As an administrator, I can see an opening page showing cards with recent estimates (name, location, year, month), with the most recent estimate at the top.
- As an administrator, from the opening page, I can easily create a new estimate, either by starting with the default values or by copying from an existing estimate. 
- As an administrator, when copying from an existing estimate, I'm redirected to the create estimate page with all fields transferred over exactly, except the unique job name, which should be the same, except with a (1) after it to make it unique. 
- As an administrator, when creating a new estimate, I can enter:
- - unique job name string
- - location string
- - int number of square feet (default = , min = 0, mas = )
- - list of materials (product string, int unit cost, int coverage per sq ft)
- - int number of days (default = )
- - int hours worked per day (per worker)
- - int labor dollars per hour
- - int number of hotel rooms
- - int number of hotel nights
- - int hotel dollars per night
- - int food dollars per day (per worker)
- - int number of vehicles 
- - int number of miles per vehicle
- - float dollars per mile
- - list of miscellaneous costs (string desc, int dollars)
- - float multiplier
- As an administrator, while creating a new estimate, I can see the job cost in dollars and $/sqft while I change the entries. (Could we put this in a footer bar so as numbers change, the costs change as the user changes numbers - e.g. watch price change as sqft increases).
- Optional: As an administrator, I can save my after every modification (please don't make me click save - I might forget and my estimate would be lost). 

