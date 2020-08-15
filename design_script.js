            
			var current_name; // current displayed student.
			var student_list = new Array();
			var d = new Date;

			// code to run when page first loads.
			function get_started(){
				document.getElementById("names_count").innerHTML = "Amount of Students: " + student_list.length;
				document.getElementById("c_date").innerHTML = "Date: " + date_maker();
				dayMaker();
				startTime();
			}
			
			// adds student details to list
			function studentDbAdd(){
				var name_inputted = document.getElementById("student_add").value;
				var dob_inputted = document.getElementById("dob_add").value;
				var course_inputted = document.getElementById("course_add").value;
				var year_list_inputted = document.getElementById("year_list_add").value;
				var notes_inputted = document.getElementById("notes add").value;
				student_c = new Student(name_inputted, dob_inputted, course_inputted, year_list_inputted, notes_inputted);
				
				student_list.push(student_c);
				document.getElementById("names_count").innerHTML = "Amount of Students: " + student_list.length;
				clearFormInputs();	
			}// function to clear student details form.
			function clearFormInputs(){
				document.getElementById("student_add").innerHTML = "";
				document.getElementById("dob_add").innerHTML = "";
				document.getElementById("course_add").innerHTML = "";
				document.getElementById("year_list_add").innerHTML = "";
				document.getElementById("notes_add").innerHTML = "";	
			}
			
			// display all list
			function displayAllList(){
				for (n in student_list) {
					document.getElementById("head").innerHTML = "Student Details: " + n.name + n.dob
					+ n.course + n.year + n.notes;
				}

			}
			
			
			// function  to display student details of selected button.
			function studentDetails(name, bio){
				document.getElementById("head").innerHTML = "Student Details";
				document.getElementById("name").innerHTML = "Student Name: " + name;
				document.getElementById("bio").innerHTML = bio;
				document.getElementById("bio_header").innerHTML = "Student Bio: ";
				
				current_name = name;
				if (list_check(current_name) != true){
					name_list.push(current_name);
				}
				names_list_add();
			}
			
			// alert to display current displayed student.
			function alertbox(){
				window.alert(current_name)
			}
			
			// displays student names in unordered list and amount of students in db.
			function names_list_add(){
				var text;
				text = "<ul>";
				for (i=0; i<name_list.length; i++){
					text += "<li>" + name_list[i] + "</li>";
				}
				text += "</ul>";
				document.getElementById("list").innerHTML = text;
				document.getElementById("names_count").innerHTML = "Amount of Students: " + name_list.length;
			}
			
			// clears name_list db of student names, resets and clears displayed unordered list.
			function clear_list(){
				name_list = [];
				names_list_add();
			}
			
			// returns true if student name already in name_list db.
			function list_check(cur_name){
				return name_list.includes(cur_name);
			}
			
			function date_maker(){
				new_m = d.getMonth() + 1
				formatted_date = d.getDate() + "." + new_m + "." + d.getFullYear();
				return formatted_date;
			}
			
			function monthMaker(){
				m = d.getMonth()
				return m;
			}
			
			function dayMaker(){
				switch (d.getDay()) {
				  case 0:
					day = "Sunday";
					break;
				  case 1:
					day = "Monday";
					break;
				  case 2:
					day = "Tuesday";
					break;
				  case 3:
					day = "Wednesday";
					break;
				  case 4:
					day = "Thursday";
					break;
				  case 5:
					day = "Friday";
					break;
				  case  6:
					day = "Saturday";
				}
				document.getElementById("printed_day").innerHTML = "Today is " + day;
			}
			
			// displays a live updating current time.
			function startTime() {
			  var today = new Date();
			  var h = today.getHours();
			  var m = today.getMinutes();
			  var s = today.getSeconds();
			  m = checkTime(m);
			  s = checkTime(s);
			  document.getElementById('txt').innerHTML = "Time: " +
			  h + ":" + m + ":" + s;
			  var t = setTimeout(startTime, 500);
			} // works with startTime function.
			function checkTime(i) {
			  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			  return i;
			}
			
			// -------------------------------------------------------------------------------------
			// student object
			//---------------------------------------------------------------------------------------
			// constructor for student objects

			function Student(name, dob, course, year, notes) {
				this.name = name;
				this.dob = dob;
				this.course = course;
				this.year = year;
				this.notes = notes;
			}