"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    function SampleComponent() {
        this.name = "Papa srinivas";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.realName = "puspalata";
        this.showHeader = true;
        this.items = ["pooja", "liza", "mansi"];
    }
    SampleComponent.prototype.getValues = function (uma) {
        this.value = uma.target.value;
        console.log(uma.target.value);
    };
    SampleComponent.prototype.runMe = function () {
        console.log("hey wait !!!, did you click me?");
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        selector: 'sample',
        template: "\n\t           <div class=\"container\" *ngIf = \"showHeader\">\n                <h1>This is my sample page</h1>\n                <br>\n                He is {{name}}\n                <img [src] = \"imageUrl\" /><br>\n                 <input type=\"text\"  [(ngModel)]=\"realName\" (keyup.enter)=\"getValues($event)\">\n                <button class =\"btn btn-primary\" (click) = \"runMe()\">Click Me</button>\n               \n               {{realName}}\n               <br>\n               <ul *ngFor = \" let item of items \">\n               <li>{{item}}</li>\n               </ul>\n                </div>\n\t            "
    }),
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map