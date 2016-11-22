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
var HeroesComponent = (function () {
    function HeroesComponent() {
        this.title = "Dev Heroes";
        this.heroes = [
            { name: 'Manolo', alias: 'mcfresh' },
            { name: 'Andrew', alias: 'sleepy' },
            { name: 'Luis', alias: 'back2back' }
        ];
    }
    HeroesComponent.prototype.ngOnInit = function () {
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n\t<h1>{{title}}</h1>\n\t<ul>\n\t\t<li *ngFor=\"let hero of heroes\">\n\t\t\t<p>{{hero.name}}</p>\n\t\t\t<p>{{hero.alias}}</p>\n\t\t</li>\n\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map