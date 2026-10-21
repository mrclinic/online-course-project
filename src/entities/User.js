import { EntitySchema } from "typeorm";


export const User = new EntitySchema(
    {
        name: "user",
        tableName: "users",
        columns: {
            _id: {
                primary: true,
                type: "objectId",
                generated: true, // let Mongodb generate it
                objectId: true

            },
            username: { type: "string" },
            password: { type: "string" },
            role: { type: "string", default: "user" }
        }
    }
)