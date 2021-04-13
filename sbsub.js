#!/usr/bin/env node

require("dotenv/config");
const { ServiceBusClient, delay } = require("@azure/service-bus");

const connectionString = process.env.SB_CONNECTION_STRING
const topicName = process.env.SB_TOPIC
const subscriptionName = process.env.SB_SUB

async function main() {
    if (!connectionString) {
        throw new Error("missing SB_CONNECTION_STRING")
    }

    if (!topicName) {
        throw new Error("missing SB_TOPIC")
    }

    if (!subscriptionName) {
        throw new Error("missing SB_SUB")
    }


    const client = new ServiceBusClient(connectionString);
    const receiver = client.createReceiver(topicName, subscriptionName);

    // function to handle messages
    const myMessageHandler = async (messageReceived) => {
        console.log(`Received message: ${JSON.stringify(messageReceived.body, null, 4)}`);
    };

    // function to handle any errors
    const myErrorHandler = async (error) => {
        console.log(error);
    };

    receiver.subscribe({
        processMessage: myMessageHandler,
        processError: myErrorHandler,
    });

    await delay(99999999);
}

main(process.argv[2])
    .then(() => {
        process.exit(0)
    })
    .catch(e => {
        console.error(e);
        process.exit(1)
    })
