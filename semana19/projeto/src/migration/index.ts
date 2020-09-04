import dotenv from 'dotenv';
import { UserTable } from "./UserTable.ts/UserTable";
import { ShowTable } from "./ShowTable.ts/ShowTable";
import { MusicalGroupTable } from "./MusicalGroup.ts/MusicalGroupTable";

dotenv.config();

const userTable = new UserTable();
const showTable = new ShowTable();
const musicalGroupTable = new MusicalGroupTable();

async function createTables() {
    await userTable.createTable();
    await musicalGroupTable.createTable();
    await showTable.createTable();
}

createTables();