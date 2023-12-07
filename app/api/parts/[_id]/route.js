import connectMongoDB from "@/libs/mongodb"
import Parts from "@/models/parts"
import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const id = params._id
    const filter = {_id : id}
    await connectMongoDB()
    const part = await Parts.findOne(filter) 
    return NextResponse.json(part, { status : 200})
}