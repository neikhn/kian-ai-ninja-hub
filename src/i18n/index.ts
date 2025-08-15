import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  vi: {
    translation: {
      // Navigation
      nav: {
        about: "Giới thiệu về tôi",
        program: "Chương trình Ninja AI",
        contact: "Liên hệ"
      },
      // Homepage
      hero: {
        title: "Nguyễn Hoàng Kiên",
        subtitle: "Lập Trình Viên, Nhà Sáng Lập & Mentor",
        vision: "Kết nối công nghệ với con người để tạo ra những trải nghiệm số đáng nhớ",
        cta: "Tìm hiểu chương trình Ninja AI"
      },
      strengths: {
        title: "Thế mạnh nổi bật",
        programming: {
          title: "Lập trình",
          description: "Chuyên sâu về AI, Full-stack development và kiến trúc hệ thống"
        },
        design: {
          title: "Thiết kế UI/UX",
          description: "Tạo ra những giao diện người dùng hiện đại và trải nghiệm tối ưu"
        },
        marketing: {
          title: "Marketing số",
          description: "Phát triển chiến lược marketing hiệu quả và growth hacking"
        },
        ai: {
          title: "AI & Machine Learning",
          description: "Ứng dụng AI vào giải pháp thực tế và automation"
        },
        hr: {
          title: "Quản lý nhân sự",
          description: "Xây dựng team mạnh và văn hóa công ty tích cực"
        }
      },
      projects: {
        title: "Dự án tiêu biểu",
        description: "Những sản phẩm và giải pháp đã được triển khai thành công"
      },
      workStyle: {
        title: "Phong cách làm việc",
        items: [
          "Tư duy sáng tạo và giải pháp đột phá",
          "Hợp tác chặt chẽ và giao tiếp hiệu quả",
          "Học hỏi liên tục và adapt nhanh",
          "Quality-first approach"
        ],
        inspiration: "\"Innovation distinguishes between a leader and a follower\" - Steve Jobs"
      },
      // Ninja AI Program
      program: {
        title: "Chương trình Ninja AI",
        subtitle: "Trở thành chuyên gia AI trong 6 tháng",
        goal: {
          title: "Mục tiêu chương trình",
          description: "Đào tạo thế hệ AI Engineers mới với kỹ năng thực chiến và tư duy sáng tạo"
        },
        method: {
          title: "Phương pháp đào tạo",
          items: [
            "Learning by doing - 80% thực hành, 20% lý thuyết",
            "Dự án thật với đối tác doanh nghiệp",
            "Mentorship 1-on-1 từ chuyên gia",
            "Cộng đồng học tập mạnh mẽ"
          ]
        },
        roadmap: {
          title: "Lộ trình học tập",
          month1: "Python & AI Foundations",
          month2: "Machine Learning Core",
          month3: "Deep Learning & Neural Networks",
          month4: "Computer Vision & NLP",
          month5: "AI Applications & APIs",
          month6: "Capstone Project & Deployment"
        },
        highlights: {
          title: "Điểm nổi bật",
          items: [
            "100% cam kết việc làm sau tốt nghiệp",
            "Lương khởi điểm 15-25 triệu/tháng",
            "Hỗ trợ tài chính học phí 0%",
            "Cộng đồng alumni mạnh mẽ"
          ]
        },
        target: {
          title: "Đối tượng phù hợp",
          items: [
            "Sinh viên IT năm 3, 4 hoặc mới tốt nghiệp",
            "Lập trình viên muốn chuyển sang AI",
            "Có passion về công nghệ và AI",
            "Cam kết full-time trong 6 tháng"
          ]
        },
        outcome: {
          title: "Đầu ra chương trình",
          items: [
            "AI Engineer với kỹ năng thực chiến",
            "Portfolio 5+ dự án AI đa dạng",
            "Chứng chỉ được công nhận trong ngành",
            "Network chuyên gia và cơ hội việc làm"
          ]
        },
        apply: {
          title: "Cách tham gia",
          description: "Gửi CV và thư động lực để được tham gia vòng phỏng vấn",
          form: {
            name: "Họ và tên",
            email: "Email",
            phone: "Số điện thoại",
            submit: "Gửi CV & Đơn ứng tuyển"
          }
        }
      },
      // Chatbot
      chatbot: {
        title: "Trợ lý của Kiên",
        placeholder: "Hỏi tôi bất cứ điều gì...",
        suggestions: [
          "Chương trình Ninja AI là gì?",
          "Kinh nghiệm làm việc của Kiên",
          "Cách apply chương trình",
          "Lộ trình học AI",
          "Cơ hội việc làm sau khóa học"
        ]
      },
      // Footer
      footer: {
        tagline: "Kết nối công nghệ với con người để tạo ra những trải nghiệm số đáng nhớ.",
        quickLinks: "Liên kết nhanh",
        aboutMe: "Giới thiệu về tôi",
        ninjaProgram: "Chương trình Ninja AI",
        contact: "Liên hệ",
        legal: "Pháp lý",
        privacyPolicy: "Chính sách bảo mật",
        termsOfUse: "Điều khoản sử dụng",
        connect: "Kết nối",
        copyright: "© 2024 Nguyễn Hoàng Kiên. All rights reserved.",
        madeWith: "Made with",
        inVietnam: "in Vietnam"
      },
      // Common
      common: {
        loading: "Đang tải...",
        send: "Gửi",
        close: "Đóng",
        back: "Quay lại",
        next: "Tiếp theo",
        previous: "Trước đó"
      }
    }
  },
  en: {
    translation: {
      // Navigation
      nav: {
        about: "About Me",
        program: "Ninja AI Program",
        contact: "Contact"
      },
      // Homepage
      hero: {
        title: "Nguyễn Hoàng Kiên",
        subtitle: "Developer, Founder & Mentor",
        vision: "Connecting technology with people to create memorable digital experiences",
        cta: "Learn about Ninja AI Program"
      },
      strengths: {
        title: "Core Strengths",
        programming: {
          title: "Programming",
          description: "Deep expertise in AI, Full-stack development and system architecture"
        },
        design: {
          title: "UI/UX Design",
          description: "Creating modern user interfaces and optimal user experiences"
        },
        marketing: {
          title: "Digital Marketing",
          description: "Developing effective marketing strategies and growth hacking"
        },
        ai: {
          title: "AI & Machine Learning",
          description: "Applying AI to real-world solutions and automation"
        },
        hr: {
          title: "HR Management",
          description: "Building strong teams and positive company culture"
        }
      },
      projects: {
        title: "Featured Projects",
        description: "Successfully deployed products and solutions"
      },
      workStyle: {
        title: "Work Style",
        items: [
          "Creative thinking and breakthrough solutions",
          "Close collaboration and effective communication",
          "Continuous learning and quick adaptation",
          "Quality-first approach"
        ],
        inspiration: "\"Innovation distinguishes between a leader and a follower\" - Steve Jobs"
      },
      // Ninja AI Program
      program: {
        title: "Ninja AI Program",
        subtitle: "Become an AI expert in 6 months",
        goal: {
          title: "Program Goal",
          description: "Training the next generation of AI Engineers with practical skills and creative thinking"
        },
        method: {
          title: "Training Method",
          items: [
            "Learning by doing - 80% practice, 20% theory",
            "Real projects with enterprise partners",
            "1-on-1 mentorship from experts",
            "Strong learning community"
          ]
        },
        roadmap: {
          title: "Learning Roadmap",
          month1: "Python & AI Foundations",
          month2: "Machine Learning Core",
          month3: "Deep Learning & Neural Networks",
          month4: "Computer Vision & NLP",
          month5: "AI Applications & APIs",
          month6: "Capstone Project & Deployment"
        },
        highlights: {
          title: "Key Highlights",
          items: [
            "100% job guarantee after graduation",
            "Starting salary 15-25 million VND/month",
            "0% tuition fee financial support",
            "Strong alumni network"
          ]
        },
        target: {
          title: "Target Audience",
          items: [
            "3rd, 4th year IT students or fresh graduates",
            "Developers wanting to transition to AI",
            "Passionate about technology and AI",
            "Commit full-time for 6 months"
          ]
        },
        outcome: {
          title: "Program Outcomes",
          items: [
            "AI Engineer with practical skills",
            "Portfolio of 5+ diverse AI projects",
            "Industry-recognized certification",
            "Expert network and job opportunities"
          ]
        },
        apply: {
          title: "How to Apply",
          description: "Send your CV and motivation letter to join the interview round",
          form: {
            name: "Full Name",
            email: "Email",
            phone: "Phone Number",
            submit: "Submit CV & Application"
          }
        }
      },
      // Chatbot
      chatbot: {
        title: "Kian's Assistant",
        placeholder: "Ask me anything...",
        suggestions: [
          "What is Ninja AI Program?",
          "Kian's work experience",
          "How to apply for the program",
          "AI learning roadmap",
          "Job opportunities after course"
        ]
      },
      // Footer
      footer: {
        tagline: "Connecting technology with people to create memorable digital experiences.",
        quickLinks: "Quick Links",
        aboutMe: "About Me",
        ninjaProgram: "Ninja AI Program",
        contact: "Contact",
        legal: "Legal",
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        connect: "Connect",
        copyright: "© 2024 Nguyễn Hoàng Kiên. All rights reserved.",
        madeWith: "Made with",
        inVietnam: "in Vietnam"
      },
      // Common
      common: {
        loading: "Loading...",
        send: "Send",
        close: "Close",
        back: "Back",
        next: "Next",
        previous: "Previous"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;