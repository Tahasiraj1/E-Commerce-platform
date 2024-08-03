import {v4 as uuidv4} from 'uuid';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './User';
import users from './users';


export const registerUser = async (email: string, password: string): Promise<User> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {id: uuidv4(), email, password: hashedPassword};
    users.push(newUser);
    return newUser;
};

export const loginUser =  async (email: string, password: string): Promise<string | null> => {
    const user = users.find(user => user.email === email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!user) return null;

    const token = jwt.sign({id: user.id}, 'dskfjslkfjsdlfkjwoeiruweirwoeirwoeir2309r238r3298r3298r32');
    return token;
}
