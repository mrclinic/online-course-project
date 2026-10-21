import { EntitySchema } from "typeorm";

export const Task = new EntitySchema({
    name: "Task",
    tableName: "tasks",
    columns: {
        _id: {
            primary: true,
            type: "objectId",
            generated: true, // let Mongodb generate it
            objectId: true
        },
        title: {
            type: "string" // required
        },
        description: {
            type: "string",//optional
            nullable: true
        },
        completed: {
            type: "boolean",
            default: false
        },
        deleted: {
            type: "boolean",
            default: false
        },
        createdBy: {
            type: "string",
            nullable: true
        },
        updatedBy: {
            type: "string",
            nullable: true
        },
        createdAt: {
            type: "timestamp",
            createDate: true //auto set when created
        },
        updatedAt: {
            type: "timestamp",
            updateDate: true //auto set when updated
        }
    }
});