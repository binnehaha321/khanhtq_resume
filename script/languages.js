const LANGUAGES = {
  en: {
    navItems: ["Home", "Activities", "Certificate", "Edu & Exp"],
    resumeDownload: "My Resume",
    introduction: {
      state: "My name is",
      fullname: "Quoc Khanh Truong",
      bio: "I am a Frontend developer with beloving composing music. ❤",
    },
    hireBtn: "Hire Me",
    activities: {
      title: "Activities",
      activity: [
        {
          id: 1,
          subtitle: "Netcompany Case Study",
          desc: "During the Netcompany visit on April 2021, we received a case study of Hamber company losing customers a year to year. We had an hour to group work to find solutions to this. My teams had been efforts to brainstorm and come up with many ideas such as improving UI, enhancing the search tool's effectiveness, analyzing users' behavior, integrating AI tech, etc. I was in charge of analyzing charts and modelizing. This is one of the most fantastic realistic experiences.",
          showMediaBtn: "Solution",
        },
        {
          id: 2,
          subtitle: "Greenwich experience on HTV7",
          desc: "I was honored to be invited to make a reportage about my university. I have earned lots of experience and skills through overseas trips, outside activities, and presentation days. Moreover, the thing that wasn't lacking was my confidence, I felt it strongly improved day to day.",
          showMediaBtn: "Watch it!",
        },
        {
          id: 3,
          subtitle: "KAO entertainment",
          desc: "I played the role of music director at KAO Entertainment. KAO Entertainment is a start-up of my friend, he is talented and passionate. We had together a mini music show that raise funds for charity on Christmas eve 2021.",
          showMediaBtn: "Our journey",
        },
      ],
    },
    certificates: {
      title: "certificate",
    },
    eduexp: {
      title: "Edu & Exp",
      tableTitle: "title",
      tableDuration: "duration",
      table: [
        {
          place: "greenwich",
          title: "Student",
          duration: "Sep 2019 - Present",
        },
        {
          place: "splus",
          title: "Frontend Developer",
          duration: "Nov 2021 - May 2022",
        },
        {
          place: "btec",
          title: "Lecturer",
          duration: "Sep 2022 - Present",
        },
      ],
    },
    contactForm: {
      title: "contact me",
      location: "Ho chi minh city, vietnam",
      fullname: "Fullname",
      email: "Email",
      msg: "your message...",
      cancelBtn: "cancel",
      submitBtn: "submit",
    },
  },

  vi: {
    navItems: ["Giới thiệu", "Hoạt động", "Chứng nhận", "Kinh nghiệm"],
    resumeDownload: "Xem CV",
    introduction: {
      state: "Tôi là",
      fullname: "Trương Quốc Khánh",
      bio: "Là một lập trình viên Frontend với niềm đam mê sáng tác âm nhạc. ❤",
    },
    hireBtn: "Liên hệ",
    activities: {
      title: "Hoạt động",
      activity: [
        {
          subtitle: "Netcompany Case Study",
          desc: "Trong chuyến tham quan công ty Netcompany vào tháng 4 năm 2021, chúng tôi được giao một case study về công ty Hamber, họ đang phải đối mặt với việc sụt giảm khách hàng ngày càng tăng qua từng năm. Trong vòng 1 giờ chúng tôi cần phải thảo luận và đưa ra nhiều phương án giải quyết nhất có thể. Những giải pháp như cải thiện giao diện người dùng, nâng cao hiệu quả của công cụ tìm kiếm, phân tích hành vi người dùng và thậm chí tích hợp AI vào hệ thống,... Tôi đảm nhiệm tác vụ thực tế hóa những phương pháp đó bằng cách đưa ra các biểu đồ phân tích lý do Hamber mất khách hàng song song với cách giải quyết. Đây là một trải nghiệm cực kỳ thú vị và đáng nhớ đối với tôi.",
          showMediaBtn: "Giải pháp",
        },
        {
          subtitle: "Phóng sự về UOG trên HTV7",
          desc: "Tôi đã vinh dự được mời đến để làm một cuộc phóng sự về trường Đại học Greenwich Việt Nam, nơi tôi đang học (cơ sở Hồ Chí Minh). Thời gian học tập tại trường, tôi đã trải nghiệm và gặt hái được nhiều kinh nghiệm qua những chuyến trao đổi học sinh, hoạt động ngoại khóa và những buổi thuyết trình về dự án của mình. Trước đây tôi từng là một người rất thiếu tự tin, nhưng qua từng năm học, tôi cảm nhận được rõ rệt sự thay đổi của bản thân đang dần tích cực hơn.",
          showMediaBtn: "Xem ngay!",
        },
        {
          subtitle: "KAO entertainment",
          desc: 'Tôi từng đảm nhiệm vai trò Giám đốc âm nhạc tại KAO Entertainment. KAO Entertainment là một công ty giải trí - một "start-up" từ sớm của bạn tôi. Cậu ấy là một người đa tài, nhiệt huyết và đam mê. Chúng tôi đã cùng nhau tổ chức một đêm nhạc nhằm gây quỹ từ thiện vào dịp Giáng sinh năm 2021.',
          showMediaBtn: "Hành trình",
        },
      ],
    },
    certificates: {
      title: "Chứng nhận",
    },
    eduexp: {
      title: "Kinh nghiệm",
      tableTitle: "vị trí",
      tableDuration: "thời gian",
      table: [
        {
          place: "greenwich",
          title: "sinh viên",
          duration: "09/2019 - Hiện tại",
        },
        {
          place: "splus",
          title: "Lập trình viên Frontend",
          duration: "11/2021 - 05/2022",
        },
        {
          place: "btec",
          title: "Giảng viên",
          duration: "09/2022 - Hiện tại",
        },
      ],
    },
    contactForm: {
      title: "Liên hệ",
      location: "thành phố hồ chí minh, VN",
      fullname: "Họ và tên",
      email: "Email",
      msg: "Nội dung...",
      cancelBtn: "hủy",
      submitBtn: "gửi",
    },
  },
};

export default LANGUAGES;
