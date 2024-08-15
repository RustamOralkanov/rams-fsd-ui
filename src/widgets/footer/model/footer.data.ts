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
    id: number;
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
            id: 1,
            title: "Проекты",
            links: [
                { title: "Layan", path: "/" },
                { title: "Grande Vie", path: "/" },
                { title: "La Verde", path: "/" },
                { title: "Rams City", path: "/" },
            ],
        },
        {
            id: 2,
            title: "Способы покупки",
            links: [
                { title: "Ипотека", path: "/" },
                { title: "Рассрочка", path: "/" },
                { title: "Trade-In", path: "/" },
            ],
        },
        {
            id: 3,
            title: "Социальные сети",
            links: [
                { title: "Whatsapp", path: "/", icon: WhatsappIcon },
                { title: "Instagram", path: "/", icon: InstagramIcon },
                { title: "YouTube", path: "/", icon: YoutubeIcon },
                { title: "Facebook", path: "/", icon: FacebookIcon },
            ],
        },
        {
            id: 4,
            title: "Компания",
            links: [
                { title: "Новости и акции", path: "/" },
                { title: "Пресс-служба", path: "/" },
                { title: "Устойчивое развитие", path: "/" },
                { title: "Партнерам", path: "/" },
                { title: "Контакты", path: "/" },
                { title: "Отдел постпродажной поддержки", path: "/" },
                { title: "Карьера", path: "/" },
            ],
        },
        {
            id: 5,
            title: "Сервисы",
            links: [
                { title: "Ипотека", path: "/" },
                { title: "Рассрочка", path: "/" },
                { title: "Trade-In", path: "/" },
            ],
        },
    ],
};
