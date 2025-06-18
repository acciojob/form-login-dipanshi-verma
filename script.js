function getFormvalue() {
  const form = document.getElementById("form1");
  const firstName = form.fname.value.trim();
  const lastName = form.lname.value.trim();

  alert(`${firstName} ${lastName}`);
  
  // Prevent default form submission
  return false;
}
