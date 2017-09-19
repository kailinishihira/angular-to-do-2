"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Angular Homework';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        this.tasks = [
            new Task('Finish weekend Angular homework for Epicodus course', 3),
            new Task('Begin brainstorming possible JavaScript group projects', 2),
            new Task('Add README file to last few Angular repos on GitHub', 1)
        ];
        this.selectedTask = null;
    }
    AppComponent.prototype.editTask = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    AppComponent.prototype.isDone = function (clickedTask) {
        if (clickedTask.done === true) {
            alert("this task is completed/done");
        }
        else {
            alert("this task is not done/completed");
        }
    };
    AppComponent.prototype.priorityColor = function (currentTask) {
        if (currentTask.priority === 3) {
            return "bg-danger";
        }
        else if (currentTask.priority === 2) {
            return "bg-warning";
        }
        else {
            return "bg-info";
        }
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedTask = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>\n      <h3>{{currentFocus}}</h3>\n      <ul>\n       <li [class]=\"priorityColor(currentTask)\" (click) = \"isDone(currentTask)\" *ngFor=\"let currentTask of tasks\"> {{currentTask.description}}  <button (click)=\"editTask(currentTask)\">Edit!</button></li>\n     </ul>\n     <div>\n      <div *ngIf=\"selectedTask\">\n        <h3>{{selectedTask.description}}</h3>\n        <p>Task Complete? {{selectedTask.done}}</p>\n        <h3>Edit Task</h3>\n        <label>Enter Task Description:</label>\n        <input [(ngModel)]=\"selectedTask.description\">\n        <label>Enter Task Priority (1-3):</label>\n        <br>\n        <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"1\">1 (Low Priority)<br>\n        <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"2\">2 (Medium Priority)<br>\n        <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"3\">3 (High Priority)\n        <button (click)=\"finishedEditing()\">Done</button>\n      </div>\n     </div>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=app.component.js.map