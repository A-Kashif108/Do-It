document.getElementById("all").style.display = "block";
    function openTab(evt, tabName) {
  let i, task, tablinks;
  task = document.getElementsByClassName("tasks");
  for (i = 0; i < task.length; i++) {
    task[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}