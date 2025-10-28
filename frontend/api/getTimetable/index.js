const { CosmosClient } = require("@azure/cosmos");

const endpoint = process.env.COSMOS_DB_CONNECTION_STRING; // This is your Azure environment variable
const client = new CosmosClient(endpoint);

const databaseId = "TimetableDB";
const containerId = "Entries";

module.exports = async function (context, req) {
    const database = client.database(databaseId);
    const container = database.container(containerId);

    if (req.method === "GET") {
        // Fetch all items in Entries
        const { resources: items } = await container.items.readAll().fetchAll();
        context.res = {
            status: 200,
            body: items
        };
    } else if (req.method === "POST") {
        // Add a new item
        const newItem = req.body;
        if (!newItem.id) {
            newItem.id = Date.now().toString();
        }
        const { resource: createdItem } = await container.items.create(newItem);
        context.res = {
            status: 201,
            body: createdItem
        };
    } else {
        context.res = {
            status: 405,
            body: "Method Not Allowed"
        };
    }
};
