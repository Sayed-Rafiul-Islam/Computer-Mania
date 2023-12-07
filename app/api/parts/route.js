import connectMongoDB from "@/libs/mongodb"
import Parts from "@/models/parts"
import { NextResponse } from "next/server"

// export async function PUT(request) {
//     const {email,role,name} = await request.json()
//     const filter = {email : email}
//     await connectMongoDB()
//     const doc = await Users.findOne(filter)
//     if (!doc) {
//         await Users.create({name,email,role})
//         return NextResponse.json({messege : "user added"}, { status : 200})
//     }
//     else {
//         return NextResponse.json({messege : "already exists"}, { status : 200})
//     }
// }

export async function GET(request) {
    await connectMongoDB()
    const parts = await Parts.find()
    return NextResponse.json({parts}, { status : 200})   
}
