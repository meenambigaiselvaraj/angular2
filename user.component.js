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
var core_1 = require('@angular/core');
var posts_service_1 = require('../services/posts.service');
var UserComponent = (function () {
    function UserComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.name = 'Meena';
        this.email = 'meena@gmail.com';
        this.address = {
            st: 'No.12 Valluvar south street',
            city: 'Madurai',
            state: 'TamilNadu',
        };
        this.hobbies = ['music', 'singing'];
        this.showHobbies = false;
        this.postsService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
            console.log(posts);
        });
    }
    UserComponent.prototype.show = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    UserComponent.prototype.addHobby = function (hobby) {
        this.hobbies.push(hobby);
        //this.hobbies.insert(hobby); 
    };
    UserComponent.prototype.delete = function (i) {
        this.hobbies.splice(i, 1);
        //  this.hobbies.pop(i);
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user',
            templateUrl: 'user.component.html',
            providers: [posts_service_1.postsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.postsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map