'use strict';
var Task = function(name, description, deadline) {
  this.name = name,
  this.description = description,
  this.deadline = deadline
}

$(function() {
  $("#new-task").submit(function(event) {
    event.preventDefault();

    var name = $("#task-name").val();
    var description = $("#task-description").val();
    var deadline = $("#task-deadline").val();

    var task = new Task(name, description, deadline);

    // Create new clickable list item in not-done area

    $("#not-done").append("<li><span class='detail'>" + task.name + "</span>" +
                          "<span class='btn btn-info btn-sm complete'>Done</span>" +
                          "<span class='btn btn-warning btn-sm delete'>Delete</span>" +
                            "<ul class='details'>" +
                              "<li>" + task.description + "</li>" +
                              "<li>" + task.deadline + "</li>" +
                            "</ul></li>");

    // Completes a task when clicked, moving it to the done area, and hides the button

    $(".complete").click(function() {
      $("#done").append($(this).parent());
      $(this).hide();
    });

    // Deletes the task

    $(".delete").click(function() {
      $(this).parent().remove();
    });

    // Shows and hides task details when clicked

    $(".detail").last().click(function() {
      $(this).nextAll(".details").toggle();
    });
  });

});
