System.register(['../../node_modules/angular2/core', './../services/davis-cup.service', '../../node_modules/angular2/http'], function (exports_1) {
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
    var core_1, davis_cup_service_1, http_1;
    var AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (davis_cup_service_1_1) {
                davis_cup_service_1 = davis_cup_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function () {
            AppComponent = (function () {
                function AppComponent(_davisService) {
                    this._davisService = _davisService;
                    this.title = 'Davis Cup Final Results';
                }
                AppComponent.prototype.getDavisCups = function () {
                    var _this = this;
                    /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
                    this._davisService.getDavisCups().subscribe(function (davis) {
                        return _this.davisCups = davis;
                    }, function (error) {
                        return _this.errorMessage = error;
                    });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getDavisCups();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<h1>{{title}}</h1>\n      <h2>Spring + AngularJS 2 + TypeScript</h2>\n        <ul>\n                <li *ngFor=\"#davis of davisCups\">\n                   {{davis.year}} : {{davis.winner}} defeated  {{davis.runnerUp}} {{davis.score}}\n                </li>\n        </ul>\n     ",
                        providers: [http_1.HTTP_PROVIDERS, davis_cup_service_1.DavisCupService]
                    }), 
                    __metadata('design:paramtypes', [davis_cup_service_1.DavisCupService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); // export -> create a module
        }
    }
});
//# sourceMappingURL=app.component.js.map