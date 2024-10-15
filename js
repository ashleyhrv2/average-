window.addEventListener("load",addListener);
var fullname, osis, courses;
function addListener()
{
	document.getElementById("btnSubmit").addEventListener("click",check);
}

function check()
{
	fullname = document.getElementById("txtfullname").value;
	osis = document.getElementById("txtosis").value;
	courses = document.getElementById("txtcourses").value;
	if(fullname == " " || osis == " " || courses == " ")
	{
		alert("either the full name, osis or  course name is missing");
		checkfocus();
	}
	else
	{
		fullinfo = fullname + " " + osis + " " + courses;
		document.getElementById("lblmessage").textContent = "You entered " + fullinfo;
	}
}

function checkfocus()
{
	if (fullname == "")
	{
		document.getElementById("txtfullname").focus();
	}
	else
	{
		document.getElementById("txtcourses").focus();
	}
		
		
}




		
}
