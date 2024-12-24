import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rwanda from "../assets/flags/rwanda.png";
import india from "../assets/flags/india.png";
import china from "../assets/flags/china.png";
import malaysia from "../assets/flags/malaysia.png";
import philippines from "../assets/flags/philippines.png";
import cyprus from "../assets/flags/cyprus.png";
import russia from "../assets/flags/russia.png";
import georgia from "../assets/flags/georgia.png";
import turkey from "../assets/flags/turkey.png";
const scholarData = [
  // {
  //   country: "الصين",
  //   university: "جامعة بكين",
  //   major: "الطب",
  //   price: "10,000 دولار",
  //   notes: "تشمل المنحة الإقامة والتأمين الطبي.",
  //   flag: china,
  // },
  // {
  //   country: "رواندا",
  //   university: "جامعة كيغالي",
  //   major: "الهندسة",
  //   price: "8,000 دولار",
  //   notes: "تغطية الرسوم الدراسية بالكامل.",
  //   flag: rwanda,
  // },
  // {
  //   country: "ماليزيا",
  //   university: "جامعة مالايا",
  //   major: "العلوم",
  //   price: "12,000 دولار",
  //   notes: "تأمين صحي وإقامة مجانية.",
  //   flag: malaysia,
  // },
  // {
  //   country: "الهند",
  //   university: "جامعة دلهي",
  //   major: "إدارة الأعمال",
  //   price: "9,000 دولار",
  //   notes: "تشمل المنحة مصاريف السفر.",
  //   flag: india,
  // },
    {
      country: "الصين",
      university: "Sanquan",
      major: "الطب البشري",
      price: "$1400-2400",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "Jining",
      major: "الطب البشري",
      price: "$1860-2000",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "Xuzhou",
      major: "الطب البشري",
      price: "$4700",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "China 3 Gorger",
      major: "الطب البشري",
      price: "$3500",
      notes: "",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "جامعة البحر الأسود",
      major: "الطب البشري",
      price: "$200",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "القوقاز",
      major: "الطب البشري",
      price: "$6000",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "الأوروبية",
      major: "الطب البشري",
      price: "$5500",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "Alti",
      major: "الطب البشري",
      price: "$5500",
      notes: "",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "الأدنى الشرق",
      major: "الطب البشري",
      price: "€11800",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "الدولية قبرص",
      major: "الطب البشري",
      price: "€6894",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "الأمريكية غيرنا",
      major: "الطب البشري",
      price: "€4950",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "كيرينيا",
      major: "الطب البشري",
      price: "€7300",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "الطب البشري",
      price: "$7600",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kazan",
      major: "الطب البشري",
      price: "$4500",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "St. Peter",
      major: "الطب البشري",
      price: "$3600",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kirov",
      major: "الطب البشري",
      price: "$2370",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "Central Manila",
      major: "الطب البشري",
      price: "$5200",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "Scholars Centro",
      major: "الطب البشري",
      price: "$4800",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "Emilo",
      major: "الطب البشري",
      price: "$4400",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "Santo Tomas",
      major: "الطب البشري",
      price: "$5200",
      notes: "",
      flag: philippines,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "الطب البشري",
      price: "$14000",
      notes: "",
      flag: malaysia,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "الطب البشري",
      price: "$20500",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Uskudar",
      major: "الطب البشري",
      price: "$21290",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Altinbas",
      major: "الطب البشري",
      price: "$21000",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Bolo",
      major: "الطب البشري",
      price: "$7300",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Karabuk",
      major: "الطب البشري",
      price: "$5900",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gaziantep",
      major: "الطب البشري",
      price: "$9800",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "الطب البشري",
      price: "$14000",
      notes: "",
      flag: malaysia,
    },
    {
      country: "الصين",
      university: "Shandong",
      major: "طب الأسنان",
      price: "$2570",
      notes: "",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "جامعة القوقاز",
      major: "طب الأسنان",
      price: "$5500",
      notes: "جامعة القوقاز الرسوم بالتقسيط على 6 أقساط، وجورجيا 4 أقساط مع جامعات خاصة.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "جامعة البحر الأسود",
      major: "طب الأسنان",
      price: "$4500",
      notes: "الرسوم $200 مطلوبة للتسجيل.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "القوقاز",
      major: "طب الأسنان",
      price: "$5000",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "الأوروبية",
      major: "طب الأسنان",
      price: "$4500",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "Alti",
      major: "طب الأسنان",
      price: "$4500",
      notes: "",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "جامعة الشرق الأدنى",
      major: "طب الأسنان",
      price: "€10600",
      notes: "الرسوم المذكورة بالواجهة الإنجليزية.",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الدولية",
      major: "طب الأسنان",
      price: "€5594",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة غيرتا الأمريكية",
      major: "طب الأسنان",
      price: "-",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة كيرينيا",
      major: "طب الأسنان",
      price: "$4690",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "طب الأسنان",
      price: "$6700",
      notes: "يوجد هناك سنة تحضيرية في الجامعة.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kazan",
      major: "طب الأسنان",
      price: "$4450",
      notes: "تكاليف سنة تحضيرية $1300 و بينزا $1500.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "St. Peter",
      major: "طب الأسنان",
      price: "$2770",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kirov",
      major: "طب الأسنان",
      price: "$1950",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Ural",
      major: "طب الأسنان",
      price: "$3250",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "المركزية مانيلا",
      major: "طب الأسنان",
      price: "$2000",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "سنترو سكر",
      major: "طب الأسنان",
      price: "$2600",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "الشرق",
      major: "طب الأسنان",
      price: "$3500",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "الوطنية",
      major: "طب الأسنان",
      price: "$1400",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "جامعة اميليو",
      major: "طب الأسنان",
      price: "$900",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "طب الأسنان",
      price: "$18000",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Uskudar",
      major: "طب الأسنان",
      price: "$18810",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Altinbas",
      major: "طب الأسنان",
      price: "$16000",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Bolo",
      major: "طب الأسنان",
      price: "$5300",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Karabuk",
      major: "طب الأسنان",
      price: "$4100",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gaziantep",
      major: "طب الأسنان",
      price: "$3500",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "طب الأسنان",
      price: "$14000",
      notes: "",
      flag: malaysia,
    },
    {
      country: "الصين",
      university: "Taizhou",
      major: "الصيدلة",
      price: "$1970",
      notes: "",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "جورجيا",
      major: "الصيدلة",
      price: "$4500",
      notes: "جامعة جورجيا 4 أقساط وفي جامعة حكومية.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "تبليسي",
      major: "الصيدلة",
      price: "$3500",
      notes: "جامعة حكومية، ومتطلب القبول امتحان اللغة الإنجليزية، تكلفته 55 يورو.",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "جامعة الشرق الأدنى",
      major: "الصيدلة",
      price: "$4300",
      notes: "الرسوم المذكورة بالواجهة الإنجليزية.",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الدولية",
      major: "الصيدلة",
      price: "$3445",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الأمريكية",
      major: "الصيدلة",
      price: "$2500",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة كيرينيا",
      major: "الصيدلة",
      price: "$3090",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "الصيدلة",
      price: "$3350",
      notes: "يوجد هناك سنة تحضيرية في الجامعة، تكاليفها $1300 و بينزا $1500.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Perm",
      major: "الصيدلة",
      price: "$2500",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Novgorod",
      major: "الصيدلة",
      price: "$2700",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Tver",
      major: "الصيدلة",
      price: "$2000",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Russian National",
      major: "الصيدلة",
      price: "$3800",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "المركزية مانيلا",
      major: "الصيدلة",
      price: "$1600",
      notes: "لا يوجد رسوم للطلاب الأجانب.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "سنترو سكر",
      major: "الصيدلة",
      price: "$1600",
      notes: "لا يوجد رسوم للطلاب الأجانب.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "باربتول",
      major: "الصيدلة",
      price: "$1400",
      notes: "لا يوجد رسوم للطلاب الأجانب.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "ترينيتي",
      major: "الصيدلة",
      price: "$1500",
      notes: "لا يوجد رسوم للطلاب الأجانب.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "اميليو",
      major: "الصيدلة",
      price: "$1400",
      notes: "لا يوجد رسوم للطلاب الأجانب.",
      flag: philippines,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "الصيدلة",
      price: "$6500",
      notes: "جامعات خاصة ولديها الدراسة باللغة التركية وعليها اعتماد باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Lokman Hekim",
      major: "الصيدلة",
      price: "$8850",
      notes: "جامعات خاصة ولديها الدراسة باللغة التركية وعليها اعتماد باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Fenerbahce",
      major: "الصيدلة",
      price: "$7125",
      notes: "جامعات خاصة ولديها الدراسة باللغة التركية وعليها اعتماد باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "الصيدلة",
      price: "$3000",
      notes: "",
      flag: malaysia,
    },
    {
      country: "الصين",
      university: "Shandong",
      major: "التمريض",
      price: "$2100",
      notes: "",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "جورجيا",
      major: "التمريض",
      price: "$3500",
      notes: "جامعة جورجيا 4 أقساط في جامعة حكومية.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "تبليسي",
      major: "التمريض",
      price: "$3000",
      notes: "جامعة حكومية، متطلب القبول امتحان اللغة الإنجليزية، تكلفته 55 يورو.",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "جامعة الشرق الأدنى",
      major: "التمريض",
      price: "€2800",
      notes: "الرسوم المذكورة بالواجهة الإنجليزية.",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الدولية",
      major: "التمريض",
      price: "€2645",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الأمريكية",
      major: "التمريض",
      price: "€1500",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "التمريض",
      price: "$3350",
      notes: "يوجد هناك سنة تحضيرية في الجامعة، تكلفتها $1300 و بينزا $1500.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Perm",
      major: "التمريض",
      price: "$2500",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Novgorod",
      major: "التمريض",
      price: "$2700",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Tver",
      major: "التمريض",
      price: "$2000",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Russian National",
      major: "التمريض",
      price: "$3800",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "المركزية مانيلا",
      major: "التمريض",
      price: "$1400",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $1000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "سنترو سكر",
      major: "التمريض",
      price: "$1900",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "ترينيتي",
      major: "التمريض",
      price: "$1600",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "ريزال",
      major: "التمريض",
      price: "$1400",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "AMA",
      major: "التمريض",
      price: "$1200",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "اميليو",
      major: "التمريض",
      price: "$1400",
      notes: "",
      flag: philippines,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "التمريض",
      price: "$4500",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Medipol",
      major: "التمريض",
      price: "$4000",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gelisim",
      major: "التمريض",
      price: "$3700",
      notes: "جامعات خاصة والدراسة باللغة الإنجليزية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Bolo",
      major: "التمريض",
      price: "$1750",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Sakarya",
      major: "التمريض",
      price: "$620",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gaziantep",
      major: "التمريض",
      price: "$1000",
      notes: "جامعة حكومية لديها سعر قبول معين والدراسة باللغة التركية.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "التمريض",
      price: "$3000",
      notes: "",
      flag: malaysia,
    },
    {
      country: "الصين",
      university: "Taizhou",
      major: "الهندسة",
      price: "$1970",
      notes: "Liaoning: ميكانيكا - مدني - حلوية - ذكاء اصطناعي - تجهيزات.",
      flag: china,
    },
    {
      country: "الصين",
      university: "Liaoning",
      major: "الهندسة",
      price: "$2525",
      notes: "Liaoning: ميكانيكا - مدني - حلوية - ذكاء اصطناعي - تجهيزات.",
      flag: china,
    },
    {
      country: "الصين",
      university: "Bohai",
      major: "الهندسة",
      price: "$1825",
      notes: "Bohai: برمجيات.",
      flag: china,
    },
    {
      country: "الصين",
      university: "Theast Forestry",
      major: "الهندسة",
      price: "$1205",
      notes: "Theast Forestry: معدات - عمارة.",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "التقنية جورجيا",
      major: "الهندسة",
      price: "$4800",
      notes: "هندسة الميكانيكا - تصميم طبيبة.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "إيليا",
      major: "الهندسة",
      price: "$3700",
      notes: "كهرباء - مدنية.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "جورجيا",
      major: "الهندسة",
      price: "$4000",
      notes: "عمارة - البحر الأسود. $200 رسوم مطلوبة للتسجيل.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "البحر الأسود",
      major: "الهندسة",
      price: "$4500",
      notes: "",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "جامعة الشرق الأدنى",
      major: "الهندسة",
      price: "$2800",
      notes: "الرسوم المذكورة بالواجهة الإنجليزية.",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الدولية",
      major: "الهندسة",
      price: "$2645",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الأمريكية",
      major: "الهندسة",
      price: "$1500",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة كيرينيا",
      major: "الهندسة",
      price: "$1790",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "الهندسة",
      price: "$4000",
      notes: "يوجد هناك سنة تحضيرية في الجامعة تكلفتها $1300 و بينزا $1500.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kazan",
      major: "الهندسة",
      price: "$4000",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "St. Peter",
      major: "الهندسة",
      price: "$2000",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Mordovain",
      major: "الهندسة",
      price: "$1900",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Tver",
      major: "الهندسة",
      price: "$2000",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "المركزية مانيلا",
      major: "الهندسة",
      price: "$2400",
      notes: "يوجد رسوم للطلاب الأجانب تبلغ مرة واحدة تتراوح بين $2000-$3000 وتكون على السنة.",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "Polytechnic",
      major: "الهندسة",
      price: "$1600",
      notes: "",
      flag: philippines,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "الهندسة",
      price: "$4500",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Uskudar",
      major: "الهندسة",
      price: "$4500",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Altinbas",
      major: "الهندسة",
      price: "$4500",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Bolo",
      major: "الهندسة",
      price: "$1900",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Karabuk",
      major: "الهندسة",
      price: "$1750",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gaziantep",
      major: "الهندسة",
      price: "$1950",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "الهندسة",
      price: "$2250",
      notes: "",
      flag: malaysia,
    },
    {
      country: "الصين",
      university: "Harbin Normal",
      major: "التخصصات الأدبية",
      price: "$2175",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "Bohai",
      major: "التخصصات الأدبية",
      price: "$2105",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "Jiagsu",
      major: "التخصصات الأدبية",
      price: "$2525",
      notes: "",
      flag: china,
    },
    {
      country: "الصين",
      university: "Shandong",
      major: "التخصصات الأدبية",
      price: "$2525",
      notes: "",
      flag: china,
    },
    {
      country: "جورجيا",
      university: "جورجيا",
      major: "التخصصات الأدبية",
      price: "$4000",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "البحر الأسود",
      major: "التخصصات الأدبية",
      price: "$4500",
      notes: "جامعة البحر الأسود مطلوب $200 للتسجيل وتوفر تخصصات بعلاقات دولية وسياحة وتمويل واقتصاد.",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "إيليا",
      major: "التخصصات الأدبية",
      price: "$3200",
      notes: "",
      flag: georgia,
    },
    {
      country: "جورجيا",
      university: "جورجيا التقنية",
      major: "التخصصات الأدبية",
      price: "$4500",
      notes: "",
      flag: georgia,
    },
    {
      country: "قبرص",
      university: "جامعة الشرق الأدنى",
      major: "التخصصات الأدبية",
      price: "€2800",
      notes: "الرسوم المذكورة بالواجهة الإنجليزية.",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الدولية",
      major: "التخصصات الأدبية",
      price: "€2645",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة قبرص الأمريكية",
      major: "التخصصات الأدبية",
      price: "€1500",
      notes: "",
      flag: cyprus,
    },
    {
      country: "قبرص",
      university: "جامعة كيرينيا",
      major: "التخصصات الأدبية",
      price: "€1790",
      notes: "",
      flag: cyprus,
    },
    {
      country: "روسيا",
      university: "Moscow",
      major: "التخصصات الأدبية",
      price: "$1700",
      notes: "يوجد هناك سنة تحضيرية في الجامعة تكلفتها $1300 و بينزا $1500.",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Kazan",
      major: "التخصصات الأدبية",
      price: "$1700",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Mordovain",
      major: "التخصصات الأدبية",
      price: "$1500",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Nizhy",
      major: "التخصصات الأدبية",
      price: "$1500",
      notes: "",
      flag: russia,
    },
    {
      country: "روسيا",
      university: "Tver",
      major: "التخصصات الأدبية",
      price: "$1700",
      notes: "",
      flag: russia,
    },
    {
      country: "الفلبين",
      university: "المركزية مانيلا",
      major: "التخصصات الأدبية",
      price: "$2000",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "سنترو سكر",
      major: "التخصصات الأدبية",
      price: "$1400",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "الشرق",
      major: "التخصصات الأدبية",
      price: "$1900",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "AMA",
      major: "التخصصات الأدبية",
      price: "$1000",
      notes: "",
      flag: philippines,
    },
    {
      country: "الفلبين",
      university: "جامعة اميليو",
      major: "التخصصات الأدبية",
      price: "$900",
      notes: "",
      flag: philippines,
    },
    {
      country: "تركيا",
      university: "Okan",
      major: "التخصصات الأدبية",
      price: "$4500",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Uskudar",
      major: "التخصصات الأدبية",
      price: "$3700",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Altinbas",
      major: "التخصصات الأدبية",
      price: "$4500",
      notes: "جامعات خاصة.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Bolo",
      major: "التخصصات الأدبية",
      price: "$1460",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Karabuk",
      major: "التخصصات الأدبية",
      price: "$875",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "تركيا",
      university: "Gaziantep",
      major: "التخصصات الأدبية",
      price: "$600",
      notes: "جامعة حكومية لديها سعر قبول.",
      flag: turkey,
    },
    {
      country: "ماليزيا",
      university: "Lincoln",
      major: "التخصصات الأدبية",
      price: "$2333",
      notes: "",
      flag: malaysia,
    },
];

const ScholarPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedMajor, setSelectedMajor] = useState("");
  const [searchMajor, setSearchMajor] = useState("");

  const countries = [...new Set(scholarData.map((item) => item.country))];
  const majors = [...new Set(scholarData.map((item) => item.major))];

  const filteredData = scholarData.filter((item) => {
    return (
      (!selectedCountry || item.country === selectedCountry) &&
      (!selectedMajor || item.major === selectedMajor)
    );
  });

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="py-5 text-center"
        style={{
          backgroundColor: "var(--primary-color)",
          color: "white",
          padding: "50px 20px",
          position: "relative",
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
          المنح الدراسية
        </h1>
        <p style={{ fontSize: "1.3rem" ,color:"white"}}>
          استكشف أفضل الفرص الدراسية في مختلف الدول والتخصصات.
        </p>
        <div
    className="floating-circle"
    style={{
      position: "absolute",
      top: "15%",
      left: "5%",
      width: "100px",
      height: "100px",
      backgroundColor: "var(--background-color)",
      borderRadius: "50%",
      animation: "floating 8s infinite ease-in-out reverse",
      opacity: "0.4",
    }}
  ></div>
  <div
    className="floating-circle"
    style={{
      position: "absolute",
      bottom: "10%",
      right: "5%",
      width: "100px",
      height: "100px",
      backgroundColor: "var(--background-color)",
      borderRadius: "50%",
      animation: "floating 8s infinite ease-in-out reverse",
      opacity: "0.4",
    }}
  ></div>
      </div>

      {/* Filters Section */}
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-6">
            <label htmlFor="countryFilter" className="form-label fw-bold">
              اختر الدولة :
            </label>
            <select
              id="countryFilter"
              className="form-select"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">كل الدول</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="majorFilter" className="form-label fw-bold">
              اختر التخصص :
            </label>
            <input
              type="text"
              id="majorSearch"
              className="form-control mb-2"
              placeholder="اكتب للبحث عن تخصص"
              value={searchMajor}
              onChange={(e) => setSearchMajor(e.target.value)}
            />
            <select
              id="majorFilter"
              className="form-select"
              value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}
            >
              <option value="">كل التخصصات</option>
              {majors
                .filter((major) =>
                  major.toLowerCase().includes(searchMajor.toLowerCase())
                )
                .map((major, index) => (
                  <option key={index} value={major}>
                    {major}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Scholarships Display Section */}
        <div className="row">
  {filteredData.map((item, index) => (
    <div
      key={index}
      className="col-md-6 col-lg-4 mb-4 animate__animated animate__fadeInUp"
    >
      <div
        className="card shadow-lg h-100"
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          backgroundColor: "var(--background-light-color)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 10px 10px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={item.flag}
          alt={item.country}
          className="card-img-top"
          style={{
            height: "150px",
            objectFit: "cover",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        />
        <div
          className="card-body"
          style={{
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          <h5
            className="card-title mb-3"
            style={{
              color: "var(--primary-color)",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {item.university}
          </h5>
          <p
            className="card-text mb-2"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>الدولة:</strong> {item.country}
          </p>
          <p
            className="card-text mb-2"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>التخصص:</strong> {item.major}
          </p>
          <p
            className="card-text mb-3"
            style={{
              fontSize: "1.2rem",
              color: "var(--text-dark)",
            }}
          >
            <strong>التكلفة:</strong> {item.price}
          </p>
          <p
            className="card-text text-muted"
            style={{
              fontSize: "1rem",
            }}
          >
            {item.notes}
          </p>
          <a href="/student-form">
          <button
      className="btn btn-lg px-5 py-3"
      style={{
        backgroundColor: "var(--primary-color)",
        color: "white",
        borderRadius: "50px",
        boxShadow: "0 5px 5px rgba(136, 137, 138, 0.3)",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      التقديم الان
    </button>
    </a>
        </div>
      </div>
    </div>
  ))}
  {filteredData.length === 0 && (
    <p className="text-center text-muted" style={{ fontSize: "1.3rem" }}>
      لا توجد منح مطابقة للبحث
    </p>
  )}
  
</div>
</div>


      <Footer />
    </div>
  );
};

export default ScholarPage;
