import { createTransport } from "nodemailer";

class MailService {
    transporter: any;
    constructor() {
        this.transporter = createTransport({
            service: "gmail",
            host: process.env.SMTP_HOST,
            port: +process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: `Activation account on ${process.env.API_URL}`,
            text: "",
            html: htmlTemplate(link),
        });
    }
}

export default new MailService();

const htmlTemplate = (link: string) => {
    return `
                <div>
                    <h1>To activate account follow link</h1>
                    <a href="${link}">${link}</a>
                 </div>
            `;
}
