import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Settings, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export function PrivacyPolicy() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Shield,
      title: "1. Thông tin chúng tôi thu thập",
      content: [
        "Thông tin cá nhân: Họ tên, địa chỉ email, số điện thoại khi bạn đăng ký chương trình hoặc liên hệ với chúng tôi.",
        "Thông tin học tập: Tiến độ học tập, kết quả bài tập, tương tác với nội dung khóa học.",
        "Thông tin kỹ thuật: Địa chỉ IP, loại trình duyệt, thiết bị sử dụng, thời gian truy cập.",
        "Thông tin cookie: Chúng tôi sử dụng cookie để cải thiện trải nghiệm người dùng và phân tích lưu lượng truy cập."
      ]
    },
    {
      icon: Eye,
      title: "2. Cách chúng tôi sử dụng thông tin",
      content: [
        "Cung cấp và cải thiện chất lượng dịch vụ giáo dục.",
        "Gửi thông tin về khóa học, cập nhật chương trình và tài liệu học tập.",
        "Hỗ trợ kỹ thuật và giải đáp thắc mắc của học viên.",
        "Phân tích và thống kê để nâng cao hiệu quả đào tạo.",
        "Tuân thủ các yêu cầu pháp lý và bảo vệ quyền lợi của chúng tôi."
      ]
    },
    {
      icon: Lock,
      title: "3. Bảo mật thông tin",
      content: [
        "Chúng tôi sử dụng các biện pháp bảo mật tiên tiến như mã hóa SSL/TLS.",
        "Thông tin được lưu trữ trên các máy chủ an toàn với kiểm soát truy cập nghiêm ngặt.",
        "Nhân viên chỉ được truy cập thông tin khi cần thiết cho công việc.",
        "Thường xuyên kiểm tra và cập nhật các biện pháp bảo mật.",
        "Backup dữ liệu định kỳ để đảm bảo tính toàn vẹn thông tin."
      ]
    },
    {
      icon: Settings,
      title: "4. Quyền của người dùng",
      content: [
        "Quyền truy cập: Yêu cầu xem thông tin cá nhân chúng tôi lưu trữ về bạn.",
        "Quyền chỉnh sửa: Cập nhật hoặc sửa đổi thông tin cá nhân không chính xác.",
        "Quyền xóa: Yêu cầu xóa thông tin cá nhân khi không còn cần thiết.",
        "Quyền hạn chế: Yêu cầu hạn chế việc xử lý thông tin cá nhân.",
        "Quyền phản đối: Từ chối việc xử lý thông tin cho mục đích tiếp thị."
      ]
    },
    {
      icon: Mail,
      title: "5. Chia sẻ thông tin với bên thứ ba",
      content: [
        "Chúng tôi không bán, trao đổi hoặc chuyển giao thông tin cá nhân cho bên thứ ba.",
        "Có thể chia sẻ với đối tác tin cậy để hỗ trợ vận hành website (hosting, analytics).",
        "Tiết lộ khi được yêu cầu bởi pháp luật hoặc cơ quan có thẩm quyền.",
        "Trong trường hợp sáp nhập hoặc chuyển nhượng doanh nghiệp.",
        "Tất cả bên thứ ba đều cam kết bảo mật thông tin theo tiêu chuẩn cao."
      ]
    },
    {
      icon: Clock,
      title: "6. Thời gian lưu trữ và liên hệ",
      content: [
        "Thông tin học viên được lưu trữ trong suốt thời gian học và 5 năm sau khi kết thúc khóa học.",
        "Thông tin liên hệ được giữ cho đến khi có yêu cầu xóa từ người dùng.",
        "Cookie được lưu tối đa 12 tháng, có thể xóa thông qua cài đặt trình duyệt.",
        "Bạn có thể liên hệ với chúng tôi qua email: privacy@ninjaai.com",
        "Chính sách này có hiệu lực từ ngày 01/01/2024 và được cập nhật định kỳ."
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Chính sách bảo mật
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. 
            Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo mật thông tin của bạn.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Cập nhật lần cuối: 01/01/2024
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="border-0 shadow-card hover-lift"
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-4 text-xl">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card className="mt-12 border-0 shadow-card bg-gradient-subtle">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Có câu hỏi về chính sách bảo mật?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nếu bạn có bất kỳ thắc mắc nào về chính sách bảo mật này hoặc cách chúng tôi 
              xử lý thông tin cá nhân của bạn, vui lòng liên hệ với chúng tôi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <a href="mailto:privacy@ninjaai.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Gửi email cho chúng tôi
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <NavLink to="/">
                  Quay lại trang chủ
                </NavLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}