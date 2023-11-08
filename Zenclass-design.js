/*
    Database design for guvi zenclass

        - Students table contains the details of the students who are all enrolled for the zenClass and which courses.
        - Courses table holds the course details like course name, course duration, course fees.
        - Batches table contains the details of the each batch mentor,batch coordinator,batch starting date.
        - Mentors tables holds the details of the each mentor's name,email,phone,address.
        - Coorinators table contains the details of the coordinator details like name,email,phone,address.
        - placement_coorinators table contains the details of the placement coordinator details like name,email,phone,address.
        - Roadmap table holds the contents of the sessions for each day,joining link,recording link,feedback link.
        - Dashboard table holds the details of the students attendence in the session,activity in codekata and webkata,Submitted tasks,pending tasks,Mock interview score.
        - Task table contains the details of the each tasks submitted by the students.
        - Queries table contains the details of the query like doubt in zenclass or coordination doubt along with the student details who raised the query.
        - Requirements table hold the details about the company like opening position role,ctc,apply link,company website.
        - LeaveApplication table holds the details of the student who apply for the leave and reason for the leave along with the permission.
        - MockInterview table contains the mock interview details of the students.
        - LeaderBoard table holds the details of the each batch students task completion and score percentage.
        - Syllabus table contains the syllabus for each courses are available in the zenclass.
        - PlacementBoard table holds the details of the students name along with in which company they get placed through guvi or own.



    List of tables :

        1. Students
        2. Courses
        3. Batches
        4. Mentors
        5. Coordinators
        6. Placement_coordinators
        7. Roadmap
        8. Dashboard
        9. Task
        10. Queries
        11. Requirements
        12. LeaveApplication
        13. MockInterview
        14. Leaderboard
        15. Syllabus
        16. PlacementBoard

    List of tables and columns :

        1. Students :
            - Student_id: int, primary key, auto_increment
            - Student_name: varchar(255), not null
            - Student_email: varchar(255), not null, unique
            - Student_phone: varchar(255), not null, unique
            - Student_address: varchar(255), not null
            - Student_education: varchar(255), not null
            - enrolled_course: varchar(255), not null

        2. Courses : 
            - Course_id: int, primary key, auto_increment
            - Course_name: varchar(255), not null, unique
            - Course_duration: varchar(255), not null
            - Course_fee: varchar(255), not null

        3. Batches :
            - Batch_id: int, primary key, auto_increment
            - Batch_name: varchar(255), not null, unique
            - students_id: int, not null, foreign key reference Students(Students_id)
            - Mentor_id: int, not null, foreign key reference Mentors(Mentor_id)
            - Coordinator_id: int, not null, foreign key reference Coordinators(Coordinator_id)
        
        4. Mentors :
            - Mentor_id: int, primary key, auto_increment
            - Mentor_name: varchar(255), not null
            - Mentor_email: varchar(255), not null, unique
            - Mentor_phone: varchar(255), not null, unique
            - Mentor_address: varchar(255), not null

        5. Coordinators :
            - Coordinator_id: int, primary key, auto_increment
            - Coordinator_name: varchar(255), not null
            - Coordinator_email: varchar(255), not null, unique
            - Coordinator_phone: varchar(255), not null, unique
            - Coordinator_address: varchar(255), not null

        6. Placement_coordinators :
            - Placement_coordinator_id: int, primary key, auto_increment
            - Placement_coordinator_name: varchar(255), not null
            - Placement_coordinator_email: varchar(255), not null, unique
            - Placement_coordinator_phone: varchar(255), not null, unique
            - Placement_coordinator_address: varchar(255), not null

        7. Roadmap :
            - Roadmap_Day: int, primary key
            - contents: varchar(255), not null
            - preread: varchar(255), not null
            - joining_link: varchar(255), not null
            - recording_link: varchar(255), not null
            - feedback_link: varchar(255), not null

        8. Dashboard :
            - Dashboardnumber: int, primary key, auto_increment
            - Student_id: int, not null
            - attendance: int, not null
            - codekata_solved: int
            - webkata_solved: int
            - submited_task: int
            - pending_task: int
            - mock_interview_score: float

        9. Task :
            - Tasknumber: int, primary key, auto_increment
            - Student_id: int, not null
            - Source_code_link: varchar(255), not null
            - Deloyed_link: varchar(255), not null
            - comments: varchar(255), not null
            - Score: float not null
        
        10. Queries :
            - Querynumber: int, primary key, auto_increment
            - Student_id: int, not null
            - category: varchar(255), not null
            - sub-category: varchar(255), not null
            - language: varchar(255), not null
            - Query_title: varchar(255), not null
            - Query_description: varchar(255), not null
            - Available_time_from: time, not null
            - Available_time_to: time, not null
            - Mentor_id: int, foreign key reference Mentors(Mentor_id)
            - Coordinator_id: int, foreign key reference Coordinators(Coordinator_id)
            - Placement_coordinator_id: int, foreign key reference Placement_coordinators(placement_coordinator_id)
            - Query_status: varchar(255), not null
        
        11. Requirements :
            - Requirment_number: int, primary key, auto_increment
            - CompanyName: varchar(255), not null
            - CompanyWebsite: varchar(255), not null
            - Role: varchar(255), not null
            - Nature_of_job: varchar(255), not null
            - deadline: varchar(255), not null
            - program: varchar(255), not null
            - CTC: int, not null
            - Number_of_openings: int, not null

        12. LeaveApplication
            - ApplicationNumber: int, primary key,auto_increment
            - Student_id: int, not null
            - Leave_from: varchar(255), not null
            - Leave_to: varchar(255), not null
            - Reason: varchar(255), not null
            - approvedStatus: varchar(255), not null

        13. MockInterview :
            - mockId: int, primary key, auto_increment
            - Student_id: int, not null
            - Mock_round: varchar(255), not null
            - Interview_date: varchar(255), not null
            - logical_score: int, not null
            - Overall_score: float, not null
            - recording_url: varchar(255), not null
            - Comments: varchar(255), not null
            - Attending_status: varchar(255), not null
            - Topicswise_heading: varchar(255), not null
            - Topicswise_score: float, not null
            - Mentor_id: int

        14. Leaderboard :
            - boardId: int,primary key,auto_increment
            - Student_id: int, not null foreign key reference Students(Students_id)
            - TaskScore: float not null foreign key references Task(Score)
            - Batch_id: int, foreign key references Batches(Batch_id)
        
        15. Syllabus :
            - Syllabus_id: int,primary key,auto_increment
            - Course_id: int, foreign key references Courses(Course_id)
            - Syllabus: varchar(255), not null
        
        16. PlacementBoard :
            - placement_id: int, primary key, auto_increment
            - Student_id: int, not null foreign key reference Students(Students_id)
            - company_name: varchar(255), not null
            - CTC: int, not null
            - Placed_through: varchar(255), not null


*/
