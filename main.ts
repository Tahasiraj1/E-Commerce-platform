import { createProduct, getProducts } from "./productcontroller";
import { registerUser, loginUser } from "./authController";

// Product Operations
const product1 = createProduct('Laptop', 'High-performance laptop', 1500, 'laptop.jpg');
const product2 = createProduct('Phone', 'Latest model smartphone', 800, 'phone.jpg');
console.log("ALL Products:", getProducts());

// User Operations
const main = async () => {
    const user = await registerUser('taha@example.com', 'password123');
    console.log('Register User:', user);

    const token = await loginUser('taha@example.com', 'password123');
    if(token) {
        console.log('Login Successful, Token:', token);
        
    } else {
        console.log('Login Failed');
    }
};

main();






