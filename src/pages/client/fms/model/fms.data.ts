import Blueprint from "@/app/assets/icons/fms/blueprint.svg";
import Calculator from "@/app/assets/icons/fms/calculator.svg";
import Dialog from "@/app/assets/icons/fms/comment.svg";
import Computer from "@/app/assets/icons/fms/computer.svg";
import Desktop from "@/app/assets/icons/fms/desktop-arrow.svg";
import Employees from "@/app/assets/icons/fms/employees.svg";
import Memo from "@/app/assets/icons/fms/memo-circle-check.svg";
import Reservation from "@/app/assets/icons/fms/reservation.svg";

import Builder from "@/app/assets/images/fms/builder.webp";
import Cleaner from "@/app/assets/images/fms/cleaner.webp";
import Electrician from "@/app/assets/images/fms/electrician.webp";
import Plumber from "@/app/assets/images/fms/plumber.webp";

export const fmsServices = [
    {
        id: 0,
        image: Plumber,
        title: "Сантехнические услуги",
        description: "Мы обеспечиваем безупречное функционирование систем отопления, водоснабжения и канализации, чтобы каждый день в вашем доме был комфортным и без забот",
    },
    {
        id: 1,
        image: Electrician,
        title: "Электротехнические услуги",
        description:
            "Наша команда электриков гарантирует надежную и бесперебойную работу всех электрических сетей и электрооборудования. Ваш дом всегда будет светлым, безопасным и энергоэффективным",
    },
    {
        id: 2,
        image: Builder,
        title: "Услуги специалиста по общестроительным работам",
        description:
            "Наши высококвалифицированные специалисты будут выполнять общестроительные работы любого масштаба – от ремонта дверей и элементов благоустройства до ремонта стен и других конструктивов",
    },
    {
        id: 3,
        image: Cleaner,
        title: "Клининг",
        description: "Поддерживаем идеальную чистоту, проводя регулярную уборку всей территории ЖК. Наша цель – создать уютную и гигиенически чистую среду для всех жителей",
    },
];

export const fmsOffers = [
    {
        id: 0,
        icon: Employees,
        title: "Команду опытных специалистов",
    },
    {
        id: 1,
        icon: Reservation,
        title: "Единую систему учета",
    },
    {
        id: 2,
        icon: Calculator,
        title: "Оптимизацию и контроль расходов",
    },
    {
        id: 3,
        icon: Computer,
        title: "Четкую программу управления объектами",
    },
    {
        id: 4,
        icon: Blueprint,
        title: "Техническую эксплуатационную программу",
    },
];

export const fmsFeatures = [
    {
        id: 0,
        icon: Memo,
        title: "Прозрачная отчетность",
        description: "Мы предоставляем онлайн-отчеты о текущих и завершенных работах по домам и своевременно проводим собрания с жителями",
    },
    {
        id: 1,
        icon: Dialog,
        title: "Открытый диалог",
        description: "За каждым домом закреплен менеджер, который выслушивает вопросы жителей, предлагает варианты решения и контролирует исполнение работ",
    },
    {
        id: 2,
        icon: Desktop,
        title: "Внимание к деталям",
        description: "Каждый запрос от жителей фиксируется в CRM-системе и передается исполнителям. Ни одно обращение не остается без внимания",
    },
];
