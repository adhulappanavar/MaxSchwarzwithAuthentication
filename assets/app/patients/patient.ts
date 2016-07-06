export class Patient {
    content: string;
    username: string;
    patientId: string;
    userId: string;

    constructor (content: string, patientId?: string, username?: string, userId?: string) {
        this.content = content;
        this.patientId = patientId;
        this.username = username;
        this.userId = userId;
    }
}