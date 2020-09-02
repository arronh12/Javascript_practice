            
			var current_name; // current displayed student.
			var d = new Date;
			let student_list = [];

			// code to run when page first loads.
			function get_started() {
				document.getElementById("c_date").innerHTML = "Date: " + date_maker();
				dayMaker();
				startTime();
				window.alert("Reset");
			}
			
			// adds student details to list
			function studentDbAdd() {
				var name_inputted = document.getElementById("student_add").value;
				var dob_inputted = document.getElementById("dob_add").value;
				var course_inputted = document.getElementById("course_add").value;
				var year_list_inputted = document.getElementById("year_list_add").value;
				var notes_inputted = document.getElementById("notes_add").value;
				
				var student_c = new Student(name_inputted, dob_inputted, course_inputted, year_list_inputted, notes_inputted);
				student_list.push(student_c);
				document.getElementById("names_count").innerHTML = "Amount of Students: " + student_list.length;
			}

			// function to clear student details form.
			function clearFormInputs(){
				document.getElementById("student_add").value = "";
				document.getElementById("dob_add").value = "";
				document.getElementById("course_add").value = "";
				document.getElementById("year_list_add").value = "";
				document.getElementById("notes_add").value = '';	
			}

			function go_list() {
				var text;
				for(var i=0; i < student_list.length; i++){
					text += student_list[i].sname + ", ";
				}
				document.getElementById("allStudentsNames").innerHTML = text;
			}
			
			// display all list
			function displayAllList(){
					var text;
					var len = student_list.length;
					for(x in student_list){
						text += student_list[x].name + ": ";
					}
					document.getElementById("studentOutputList").innerHTML = "Student Details: " + text;
					window.alert(text);
			}
			
			
			// alert to display current displayed student.
			function alertbox(){
				window.alert(current_name);
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
					break;
				  default:
				    day = "unknown";
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
			// student Class
			//---------------------------------------------------------------------------------------
			// constructor for student objects

			class Student {
				constructor(name, dob, course, year, notes) {
				this.name = name;
				this.dob = dob;
				this.course = course;
				this.year = year;
				this.notes = notes;
				}	

				// Student class getters.
				get sname() {
					return this.name;
				}

				get sdob() {
					return this.dob;
				}

				get scourse() {
					return this.course;
				}

				get syear() {
					return this.year;
				}

				get snotes() {
					return this.notes;
				}

				// Student class setters.
				set sname(x) {
					this.name = x;
				}

				set sdob(x) {
					this.dob = x;
				}

				set scourse(x) {
					this.course = x;
				}

				set syear(x) {
					this.year = x;
				}

				set snotes(x){
					this.notes = x;
				}
			}