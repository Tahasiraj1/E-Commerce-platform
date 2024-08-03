"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productcontroller_1 = require("./productcontroller");
const authController_1 = require("./authController");
// Product Operations
const product1 = (0, productcontroller_1.createProduct)('Laptop', 'High-performance laptop', 1500, 'laptop.jpg');
const product2 = (0, productcontroller_1.createProduct)('Phone', 'Latest model smartphone', 800, 'phone.jpg');
console.log("ALL Products:", (0, productcontroller_1.getProducts)());
// User Operations
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, authController_1.registerUser)('taha@example.com', 'password123');
    console.log('Register User:', user);
    const token = yield (0, authController_1.loginUser)('taha@example.com', 'password123');
    if (token) {
        console.log('Login Successful, Token:', token);
    }
    else {
        console.log('Login Failed');
    }
});
main();
