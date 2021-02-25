#!/usr/bin/env node

require("dotenv/config");
const { ServiceBusClient } = require("@azure/service-bus");
const fs = require("fs");
const path = require("path");

const connectionString = process.env.SB_CONNECTION_STRING
const topicName = process.env.SB_TOPIC

async function main(fileName) {
    if (!connectionString) {
        throw new Error("missing SB_CONNECTION_STRING")
    }

    if (!topicName) {
        throw new Error("missing SB_TOPIC")
    }

    if (!fileName) {
        throw new Error("missing filename");
    }

    const filePath = path.resolve(fileName);
    const message = require(filePath);
    message.body = JSON.stringify(message.body, null, 4);

    const client = new ServiceBusClient(connectionString);
    const sender = client.createSender(topicName);

    await sender.sendMessages(message)
}


main(process.argv[2])
    .then(() => {
        process.exit(0)
    })
    .catch(e => {
        console.error(e);
        process.exit(1)
    })
