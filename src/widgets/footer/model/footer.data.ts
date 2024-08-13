import WhatsappIcon from "../../../app/assets/icons/socials/whatsapp.svg";
import InstagramIcon from "../../../app/assets/icons/socials/instagram.svg";
import YoutubeIcon from "../../../app/assets/icons/socials/youtube.svg";
import FacebookIcon from "../../../app/assets/icons/socials/facebook.svg";

interface Link {
    title: string;
    path: string;
    icon?: string;
}

interface Section {
    title: string;
    links: Link[];
}

interface FooterData {
    agreements: Link[];
    pages: Section[];
}

export const footerDatas: FooterData = {
    agreements: [
        {
            title: "Условия",
            path: "/",
        },
        {
            title: "Политика конфиденциальности  ",
            path: "/",
        },
        {
            title: "Политика в отношении файлов cookie",
            path: "/",
        },
    ],
    pages: [
        {
            title: "Проекты",
            links: [
                { title: "Layan", path: "/" },
                { title: "Grande Vie", path: "/" },
                { title: "La Verde", path: "/" },
                { title: "Rams City", path: "/" },
            ],
        },
        {
            title: "Способы покупки",
            links: [
                { title: "Ипотека", path: "/" },
                { title: "Рассрочка", path: "/" },
                { title: "Trade-In", path: "/" },
            ],
        },
        {
            title: "Социальные сети",
            links: [
                { title: "Whatsapp", path: "/", icon: WhatsappIcon },
                { title: "Instagram", path: "/", icon: InstagramIcon },
                { title: "YouTube", path: "/", icon: YoutubeIcon },
                { title: "Facebook", path: "/", icon: FacebookIcon },
            ],
        },
    ],
};
