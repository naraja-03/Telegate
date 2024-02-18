// import prisma from "@/prisma";
// import { connectToDB } from "@/utils/serverHelper";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from 'bcrypt'

// export const POST = async (request: NextRequest) => {
//     try {
//         const { email, password } = await request.json();
//         if (!email || !password)
//             return NextResponse.json({ message: 'Invalid Data' }, { status: 422 });

//         await connectToDB();
//         const user = await prisma.user.findFirst({
//             where: { email }
//         });
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10)
//         await prisma.user.update({
//             where: { email },
//             data: { hashedPassword }
//         });

//         return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: error }, { status: 500, statusText: 'Server Error' });
//     } finally {
//         await prisma.$disconnect();
//     }
// };