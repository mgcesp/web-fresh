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
var pets_service_1 = require('../pets.service');
var CatListComponent = (function () {
    function CatListComponent(petService) {
        this.petService = petService;
    }
    CatListComponent.prototype.ngOnInit = function () {
        this.cats = this.petService.findPets('cat');
    };
    CatListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: "\n\t<h2>Cats</h2>\n\t<p>List of cats</p>\n\t<ul>\n\t\t<li *ngFor=\"let cat of cats | async\">\n\t\t\t<a [routerLink]=\"['/cats', cat.id.$t]\">{{cat.name.$t}}</a>\n\t\t</li>\n\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [pets_service_1.PetService])
    ], CatListComponent);
    return CatListComponent;
}());
exports.CatListComponent = CatListComponent;
//# sourceMappingURL=cat-list.component.js.map