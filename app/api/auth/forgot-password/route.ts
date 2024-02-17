// import prisma from "@/prisma";
// import { connectToDB } from "@/utils/serverHelper";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async (request: NextRequest) => {
//     try {
//         const { email } = await request.json();
//         if (!email)
//             return NextResponse.json({ message: 'Invalid Data' }, { status: 422 });

//         await connectToDB();
//         const user = await prisma.user.findFirst({
//             where: { email }
//         });
//         if (!user) {
//             return NextResponse.json({ message: 'User not found' }, { status: 404 });
//         }

//         return NextResponse.json({ message: 'Reset password email sent successfully' }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: error }, { status: 500, statusText: 'Server Error' });
//     } finally {
//         await prisma.$disconnect();
//     }
// };