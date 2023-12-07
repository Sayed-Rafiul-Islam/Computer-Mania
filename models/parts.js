import mongoose, { Schema, models } from "mongoose"

const partsSchema = new Schema(
        {
            email : {
                type : String,
                required : true
            }
                ,
                displayName : {
                    type : String,
                    required : true
                },
                name : {
                    type : String,
                    required : true
                },
                image : {
                    type : String,
                    required : true
                },
                description : {
                    type : String,
                    required : true
                },
                minimumQuantity : {
                    type : String,
                    required : true
                },
                quantity : {
                    type : String,
                    required : true
                },
                price : {
                    type : String,
                    required : true
                }
            },
        {
            timestamps : true
        }

)

const Parts = models.Parts || mongoose.model("Parts", partsSchema)

export default Parts