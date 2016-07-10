export class Usercomment {
    content: string;
    username: string;
    usercommentId: string;
    userId: string;

    constructor (content: string, usercommentId?: string, username?: string, userId?: string) {
        this.content = content;
        this.usercommentId = usercommentId;
        this.username = username;
        this.userId = userId;
    }
}