"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
const uuid_1 = require("uuid");
const products_1 = __importDefault(require("./products"));
const getProducts = () => {
    return products_1.default;
};
exports.getProducts = getProducts;
const createProduct = (name, description, price, image) => {
    const newProduct = { id: (0, uuid_1.v4)(), name, description, price, image };
    products_1.default.push(newProduct);
    return newProduct;
};
exports.createProduct = createProduct;
