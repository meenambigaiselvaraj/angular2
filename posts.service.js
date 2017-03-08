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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var postsService = (function () {
    function postsService(http) {
        this.http = http;
        console.log('Post service initialized.....');
    }
    postsService.prototype.getPosts1 = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    postsService.prototype.getposts = function () {
        return this.http.get('http://127.0.0.1:8000/meena')
            .map(function (res) { return res; });
    };
    postsService.prototype.getAdd = function (data1, data2) {
        console.log("test", data1, data2);
    };
    postsService.prototype.getPosts2 = function () {
        return this.http.get('demo.json')
            .map(function (res) { return res.json(); });
    };
    postsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], postsService);
    return postsService;
}());
exports.postsService = postsService;
//# sourceMappingURL=posts.service.js.map