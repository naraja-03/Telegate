import prisma from "@/prisma";
import { connectToDB } from "@/utils/serverHelper";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request: NextRequest) => {
    try {
        // Check the authorization token
        const authToken = request.headers.get('Authorization');
        if (authToken !== 'naraja03') {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        // Proceed with user creation if token is valid
        const { email, mobileNumber, password } = await request.json();
        if (!email || !mobileNumber || !password)
            return NextResponse.json({ message: 'Invalid Data' }, { status: 422 });
        
        await connectToDB();
        
        // Check if email or mobileNumber already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { email },
                    { mobileNumber },
                ],
            }
        });

        if (existingUser) {
            return NextResponse.json({ message: 'Email or mobile number already exists' }, { status: 409 });
        }

        // If email and mobile number are unique, proceed with user creation
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, mobileNumber, hashedPassword }
        });

        return NextResponse.json({ user }, { status: 201, statusText: 'User Created' });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500, statusText: 'Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};
