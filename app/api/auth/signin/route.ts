import prisma from "@/prisma";
import { connectToDB } from "@/utils/serverHelper";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export const POST = async (request: NextRequest) => {
    try {
        const { userCredential, password } = await request.json();
        if (!userCredential || !password)
            return NextResponse.json({ message: 'Invalid Data' }, { status: 422 });

        await connectToDB();
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: { contains: userCredential }, },
                    { mobileNumber: { contains: userCredential }, },
                ],
            }
        });

        if (!user)
            return NextResponse.json({ message: 'User not found' }, { status: 404 });

        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword || '');
        if (!isPasswordValid)
            return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });


        return NextResponse.json({ user, message: 'Login Successfully' }, { status: 200, statusText: 'Success' });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500, statusText: 'Server Error' });
    } finally {
        await prisma.$disconnect();
    }
};
