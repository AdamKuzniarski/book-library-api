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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const book_entity_1 = require("./entities/book.entity");
const crypto_1 = require("crypto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let BooksService = class BooksService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    findAll() {
        return this.repo.find();
    }
    create(dto) {
        const entity = this.repo.create({ id: (0, crypto_1.randomUUID)(), ...dto });
        return this.repo.save(entity);
    }
    async findOne(id) {
        const book = await this.repo.findOne({ where: { id } });
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        return book;
    }
    async update(id, dto) {
        const exists = await this.repo.findOne({ where: { id } });
        if (!exists)
            throw new common_1.NotFoundException('Book not found');
        return this.repo.save({ ...exists, ...dto, id });
    }
    async remove(id) {
        const res = await this.repo.delete(id);
        if (res.affected === 0)
            throw new common_1.NotFoundException('Book not found');
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map