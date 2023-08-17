"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = __importDefault(require("./singleton"));
console.log('\tCreational design patterns\n');
function run() {
    console.log('01 - Singleton');
    (0, singleton_1.default)();
}
exports.default = run;
