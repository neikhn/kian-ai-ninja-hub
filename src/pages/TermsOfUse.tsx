import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, User, CreditCard, AlertTriangle, Scale, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

export function TermsOfUse() {
  const { t } = useTranslation();

  const sections = [
    {
      icon: User,
      title: "1. Chấp nhận điều khoản",
      content: [
        "Bằng việc truy cập và sử dụng website này, bạn đồng ý tuân thủ các điều khoản sử dụng.",
        "Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không sử dụng dịch vụ của chúng tôi.",
        "Chúng tôi có quyền thay đổi điều khoản này bất cứ lúc nào mà không cần thông báo trước.",
        "Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận điều khoản mới."
      ]
    },
    {
      icon: CreditCard,
      title: "2. Dịch vụ và phí",
      content: [
        "Chương trình Ninja AI là khóa đào tạo trả phí với các gói học phí được công bố rõ ràng.",
        "Học phí phải được thanh toán đầy đủ trước khi bắt đầu khóa học.",
        "Chúng tôi hỗ trợ các hình thức thanh toán: chuyển khoản, thẻ tín dụng, ví điện tử.",
        "Mọi khoản phí đã thanh toán sẽ không được hoàn trả trừ các trường hợp đặc biệt được quy định.",
        "Giá cả có thể thay đổi cho các khóa học trong tương lai mà không cần thông báo trước."
      ]
    },
    {
      icon: AlertTriangle,
      title: "3. Quy định sử dụng",
      content: [
        "Bạn cam kết sử dụng dịch vụ cho mục đích hợp pháp và không vi phạm quyền của người khác.",
        "Nghiêm cấm việc sao chép, phân phối tài liệu khóa học mà không có sự đồng ý bằng văn bản.",
        "Không được sử dụng dịch vụ để spam, phát tán virus hoặc nội dung có hại.",
        "Tài khoản học viên không được chuyển nhượng cho bên thứ ba.",
        "Vi phạm các quy định có thể dẫn đến việc chấm dứt tài khoản mà không hoàn lại học phí."
      ]
    },
    {
      icon: Scale,
      title: "4. Quyền sở hữu trí tuệ",
      content: [
        "Tất cả nội dung khóa học, video, tài liệu đều thuộc sở hữu của Ninja AI Academy.",
        "Bạn được cấp quyền sử dụng tài liệu chỉ cho mục đích học tập cá nhân.",
        "Nghiêm cấm việc tái sử dụng, chỉnh sửa hoặc phân phối nội dung cho mục đích thương mại.",
        "Logo, tên thương hiệu Ninja AI được bảo hộ bởi luật sở hữu trí tuệ.",
        "Vi phạm bản quyền sẽ bị xử lý theo quy định của pháp luật."
      ]
    },
    {
      icon: FileText,
      title: "5. Cam kết và bảo đảm",
      content: [
        "Chúng tôi cam kết cung cấp chương trình đào tạo chất lượng cao với đội ngũ giảng viên kinh nghiệm.",
        "Cam kết hỗ trợ việc làm cho học viên hoàn thành khóa học với kết quả tốt.",
        "Tuy nhiên, chúng tôi không đảm bảo 100% việc làm do phụ thuộc vào nhiều yếu tố khách quan.",
        "Không chịu tr책nhậm cho các thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ.",
        "Trách nhiệm pháp lý của chúng tôi được giới hạn trong phạm vi học phí đã thanh toán."
      ]
    },
    {
      icon: Phone,
      title: "6. Liên hệ và giải quyết tranh chấp",
      content: [
        "Mọi khiếu nại, thắc mắc vui lòng gửi về email: support@ninjaai.com",
        "Chúng tôi cam kết phản hồi trong vòng 24 giờ làm việc.",
        "Tranh chấp sẽ được giải quyết thông qua thương lượng, hòa giải trước khi đưa ra tòa án.",
        "Điều khoản này được điều chỉnh bởi luật pháp Việt Nam.",
        "Tòa án có thẩm quyền tại Hà Nội sẽ giải quyết các tranh chấp không thể hòa giải."
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Điều khoản sử dụng
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vui lòng đọc kỹ các điều khoản sử dụng trước khi đăng ký và sử dụng dịch vụ của chúng tôi. 
            Các điều khoản này có tính pháp lý ràng buộc.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Có hiệu lực từ: 01/01/2024
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

        {/* Important Notice */}
        <Card className="mt-12 border-0 shadow-card bg-gradient-subtle">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Lưu ý quan trọng
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bằng việc đăng ký khóa học hoặc sử dụng bất kỳ dịch vụ nào của Ninja AI Academy, 
                  bạn xác nhận rằng đã đọc, hiểu và đồng ý với tất cả các điều khoản sử dụng này. 
                  Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi trước khi sử dụng dịch vụ.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-8 border-0 shadow-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cần hỗ trợ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nếu bạn có thắc mắc về các điều khoản này, đừng ngần ngại liên hệ với chúng tôi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hover-lift">
                <a href="mailto:support@ninjaai.com">
                  <Phone className="mr-2 h-5 w-5" />
                  Liên hệ hỗ trợ
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