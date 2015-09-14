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
    $("#not-done").append("<li><span class='detail'>" + task.name + "</span>" +
                          "<span class='btn btn-info btn-sm complete'>Done</span>" +
                            "<ul class='details'>" +
                              "<li>" + task.description + "</li>" +
                              "<li>" + task.deadline + "</li>" +
                            "</ul></li>");

    $(".complete").click(function() {
      $("#done").append($(this).parent());
      $(this).hide();
    });

    $(".detail").last().click(function() {
      $(this).next().next().toggle();
    });
  });

});
