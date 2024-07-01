const { Kafka } = require("kafkajs");

const kafka = new Kafka({
	clientId: "my-app",
	brokers: ["localhost:9092"],
});
const producer = kafka.producer()

const publishMessage = async(topic, message) => {
    await producer.connect()
    await producer.send({
        topic: topic,
        messages: [{ value: message }],
    });

    await producer.disconnect()
}


//produce otp on login and signup
const publishLoginOTP = (email, otp) => {
    console.log("producer otp :::",otp)
    publishMessage("auth-otp-topic", JSON.stringify({email, otp}));
}

module.exports = {publishLoginOTP}