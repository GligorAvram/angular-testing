import {MessageService} from "./message.service";

describe('MessageService', () => {
    let messageService: MessageService;
    beforeEach(() => {
        messageService = new MessageService()
    })

    it('Adds a message to the message queue', () => {
        const testMessage = "some message"
        expect(messageService.messages.length).toEqual(0);
        messageService.add(testMessage);
        expect(messageService.messages.pop()).toEqual(testMessage);
    })

    it('Clears all messages from the queue', () => {
        for (let i = 0; i < 10; i++) {
            messageService.add("some message " + Math.floor(Math.random() * 10));
        }

        expect(messageService.messages.length).toBeGreaterThan(0);
        messageService.clear();
        expect(messageService.messages.length).toEqual(0);
    })
})
