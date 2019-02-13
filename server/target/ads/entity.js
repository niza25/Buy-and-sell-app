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
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("typeorm/repository/BaseEntity");
const class_validator_1 = require("class-validator");
let Ad = class Ad extends BaseEntity_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ad.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(3, 15),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Ad.prototype, "title", void 0);
__decorate([
    class_validator_1.IsInt(),
    typeorm_1.Column('text'),
    __metadata("design:type", Number)
], Ad.prototype, "price", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.Length(15, 250),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Ad.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Ad.prototype, "photoUrl", void 0);
__decorate([
    class_validator_1.IsEmail(),
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Ad.prototype, "email", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Number)
], Ad.prototype, "phone", void 0);
Ad = __decorate([
    typeorm_1.Entity()
], Ad);
exports.default = Ad;
//# sourceMappingURL=entity.js.map