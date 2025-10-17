import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  // MODULE 1: NỀN TẢNG CỐT LÕI (1-15)
  {
    id: 1,
    title: 'Làm Quen Dụng Cụ',
    summary: 'Tìm hiểu các công cụ thiết yếu của một họa sĩ, từ bút chì, giấy vẽ đến gôm tẩy.',
    icon: '✏️',
    steps: [
      {
        title: 'Bút Chì: Người Bạn Đồng Hành Đầu Tiên',
        content:
          'Bút chì được phân loại theo độ cứng của lõi than. Ký hiệu "H" (Hard) là cứng, cho nét nhạt. "B" (Black) là mềm, cho nét đậm. "HB" là loại trung bình, phù hợp cho cả viết và vẽ. Người mới bắt đầu nên có ít nhất 3 loại: HB (phác thảo), 2B (đi nét, đánh bóng nhẹ), và 6B (đánh bóng vùng tối sâu).',
      },
      {
        title: 'Giấy Vẽ: Nền Tảng Của Tác Phẩm',
        content:
          'Giấy vẽ có nhiều định lượng (độ dày), đo bằng gsm. Giấy từ 120gsm trở lên là lý tưởng để không bị rách khi tẩy xóa. Bề mặt giấy cũng quan trọng: giấy mịn (smooth) cho vẽ chi tiết, giấy vân (textured) tạo hiệu ứng thú vị khi đánh bóng.',
      },
      {
        title: 'Gôm Tẩy: Không Chỉ Để Sửa Lỗi',
        content:
          'Có hai loại gôm chính: gôm cứng (vinyl) để tẩy sạch các mảng lớn và gôm dẻo (kneaded eraser) có thể nhào nặn để chấm lấy chì, tạo ra các vùng sáng (highlight) một cách mềm mại.',
      },
    ],
  },
  {
    id: 2,
    title: 'Nét Vẽ & Lực Tay',
    summary: 'Làm chủ các nét vẽ cơ bản và học cách kiểm soát lực tay để tạo ra sự đa dạng trong tác phẩm.',
    icon: '✍️',
    steps: [
        {
            title: 'Các Kiểu Cầm Bút',
            content: '1. Kiểu cầm để viết (Tripod Grip): Dùng để vẽ các chi tiết nhỏ, cần độ chính xác cao. 2. Kiểu cầm úp lòng bàn tay (Overhand Grip): Dùng để phác thảo các đường nét dài, phóng khoáng và đánh bóng các mảng lớn.'
        },
        {
            title: 'Luyện Tập Nét Cơ Bản',
            content: 'Lấy một tờ giấy và lấp đầy nó bằng các loại nét khác nhau: nét thẳng, nét cong, đường ziczac, đường lượn sóng. Cố gắng vẽ các đường thẳng song song và các vòng tròn đều nhau.'
        },
        {
            title: 'Kiểm Soát Lực Tay',
            content: 'Dùng bút chì 2B, vẽ một dải hình chữ nhật. Bắt đầu tô từ một đầu với lực ấn nhẹ nhất có thể, sau đó tăng dần lực ấn để dải màu đậm dần về phía cuối.'
        }
    ]
  },
  {
    id: 3,
    title: 'Nhìn Mọi Thứ Bằng Hình Khối',
    summary: 'Học cách phân rã các vật thể phức tạp thành những hình khối đơn giản.',
    icon: '🧊',
    steps: [
        {
            title: 'Sức Mạnh Của Hình Khối Cơ Bản',
            content: 'Mọi vật thể trong thế giới thực, dù phức tạp đến đâu, đều có thể được cấu thành từ bốn hình khối cơ bản: khối cầu (sphere), khối lập phương (cube), khối trụ (cylinder), và khối nón (cone).'
        },
        {
            title: 'Bài Tập Quan Sát',
            content: 'Nhìn xung quanh bạn. Một cái cốc là một khối trụ. Một quả cam là một khối cầu. Hãy thử phác thảo nhanh 5 đồ vật bạn thấy và quy chúng về các hình khối cơ bản.'
        },
        {
            title: 'Dựng Hình Từ Khối',
            content: 'Trước khi vẽ chi tiết, hãy phác thảo vật thể bằng các hình khối cơ bản. Kỹ thuật này giúp bạn đảm bảo tỷ lệ và hình dáng tổng thể đúng ngay từ đầu.'
        }
    ]
  },
  {
    id: 4,
    title: 'Nguyên Lý Ánh Sáng & Bóng Đổ',
    summary: 'Hiểu cách ánh sáng tương tác với vật thể để tạo ra ảo giác về không gian ba chiều.',
    icon: '💡',
    steps: [
        {
            title: 'Xác Định Nguồn Sáng',
            content: 'Trong mọi bức vẽ, điều đầu tiên cần làm là xác định nguồn sáng chính. Ánh sáng đến từ đâu (trên, dưới, trái, phải)?'
        },
        {
            title: '5 Vùng Sáng Tối Cần Nhớ',
            content: '1. Vùng sáng nhất (Highlight) 2. Trung gian (Mid-tone) 3. Vùng tối (Core Shadow) 4. Phản quang (Reflected Light) 5. Bóng đổ (Cast Shadow).'
        },
        {
            title: 'Thực Hành Với Khối Cầu',
            content: 'Vẽ một vòng tròn. Tưởng tượng một nguồn sáng và áp dụng 5 vùng sáng tối để đánh bóng, biến vòng tròn phẳng thành một khối cầu có chiều sâu.'
        }
    ]
  },
  {
    id: 5,
    title: 'Kỹ Thuật Đánh Bóng',
    summary: 'Khám phá các phương pháp đánh bóng khác nhau để tạo ra chất liệu và chiều sâu.',
    icon: '🎨',
    steps: [
      {
        title: 'Gạch Nét (Hatching) & Đan Nét (Cross-Hatching)',
        content: 'Là kỹ thuật dùng các đường thẳng song song hoặc đan chéo để tạo bóng. Các đường nét càng gần nhau, vùng bóng càng tối.'
      },
      {
        title: 'Di Chì (Blending)',
        content: 'Dùng que di chì hoặc ngón tay xoa nhẹ lên bề mặt chì để tạo ra sự chuyển tiếp sắc độ mượt mà, phù hợp để tả các bề mặt nhẵn.'
      },
       {
        title: 'Vẽ Chấm (Stippling)',
        content: 'Sử dụng hàng ngàn chấm nhỏ để tạo nên hình ảnh. Mật độ chấm càng dày, vùng đó càng tối. Kỹ thuật này tốn thời gian nhưng tạo hiệu ứng độc đáo.'
      }
    ]
  },
   {
    id: 6,
    title: 'Phối Cảnh 1 Điểm Tụ',
    summary: 'Tạo chiều sâu cho không gian bằng nguyên tắc phối cảnh cơ bản nhất.',
    icon: '🛤️',
    steps: [
      {
        title: 'Đường Chân Trời và Điểm Tụ',
        content: 'Đường chân trời (Horizon Line) là đường thẳng ngang tầm mắt. Điểm tụ (Vanishing Point) là điểm trên đường chân trời nơi tất cả các đường thẳng song song dường như hội tụ lại.'
      },
      {
        title: 'Vẽ Con Đường Thẳng',
        content: 'Vẽ đường chân trời và một điểm tụ. Từ điểm tụ, vẽ hai đường thẳng chéo xuống hai góc dưới của trang giấy để tạo ra hai mép của con đường.'
      }
    ]
  },
  {
    id: 7,
    title: 'Phối Cảnh 2 Điểm Tụ',
    summary: 'Vẽ vật thể từ góc nhìn, tạo ra cảm giác không gian thực tế và sống động hơn.',
    icon: '🏢',
    steps: [
      {
        title: 'Sử Dụng Hai Điểm Tụ',
        content: 'Vẽ đường chân trời và hai điểm tụ ở hai đầu. Phối cảnh hai điểm tụ được sử dụng khi bạn nhìn vào một góc của vật thể, ví dụ như góc của một tòa nhà.'
      },
      {
        title: 'Vẽ Góc Tòa Nhà',
        content: 'Bắt đầu bằng một đường thẳng đứng (góc tòa nhà). Từ đỉnh và đáy của đường này, kẻ các đường thẳng hướng về cả hai điểm tụ để tạo thành các mặt của tòa nhà.'
      }
    ]
  },
  {
    id: 8,
    title: 'Phối Cảnh 3 Điểm Tụ',
    summary: 'Vẽ những góc nhìn ấn tượng và hùng vĩ bằng cách nhìn lên hoặc nhìn xuống vật thể.',
    icon: '🏙️',
    steps: [
      {
        title: 'Điểm Tụ Thứ Ba',
        content: 'Ngoài hai điểm tụ trên đường chân trời, điểm tụ thứ ba được đặt ở trên (góc nhìn con giun) hoặc dưới (góc nhìn con chim) đường chân trời.'
      },
      {
        title: 'Ứng Dụng',
        content: 'Góc nhìn con giun làm cho vật thể trông cao lớn và hùng vĩ. Góc nhìn con chim cho phép người xem bao quát một không gian rộng lớn từ trên cao.'
      }
    ]
  },
  {
    id: 9,
    title: 'Vẽ Tĩnh Vật Đầu Tiên',
    summary: 'Tổng hợp các kỹ năng đã học để tạo ra một bức tranh tĩnh vật hoàn chỉnh.',
    icon: '🍎',
    steps: [
      {
        title: 'Sắp Xếp Bố Cục',
        content: 'Chọn 2-3 vật thể đơn giản (quả táo, cái ly, cuốn sách). Sắp xếp chúng sao cho có vật ở trước, vật ở sau để tạo chiều sâu.'
      },
      {
        title: 'Quy Trình Vẽ',
        content: '1. Phác thảo bằng hình khối. 2. Tinh chỉnh đường nét. 3. Đánh bóng các vùng tối trước. 4. Thêm sắc độ trung gian. 5. Dùng gôm lấy sáng ở vùng highlight.'
      }
    ]
  },
  {
    id: 10,
    title: 'Bố Cục Trong Hội Họa',
    summary: 'Học cách sắp xếp các yếu tố trong tranh để thu hút và dẫn dắt mắt người xem.',
    icon: '🖼️',
    steps: [
      {
        title: 'Quy Tắc 1/3 (Rule of Thirds)',
        content: 'Chia bức tranh thành 9 phần bằng nhau. Đặt các yếu tố quan trọng dọc theo các đường kẻ hoặc tại giao điểm của chúng để tạo ra sự cân bằng và tự nhiên.'
      },
      {
        title: 'Đường Dẫn (Leading Lines)',
        content: 'Sử dụng các đường thẳng hoặc cong (con đường, hàng rào) để dẫn mắt người xem đi vào trong bức tranh, thường là hướng tới chủ thể chính.'
      }
    ]
  },
  {
    id: 11,
    title: 'Phối Cảnh Khí Quyển',
    summary: 'Tạo ra ảo giác về chiều sâu trong tranh phong cảnh bằng màu sắc và độ chi tiết.',
    icon: '🏞️',
    steps: [
      {
        title: 'Nguyên Tắc',
        content: 'Do ảnh hưởng của các hạt trong khí quyển, các vật thể ở xa trông sẽ mờ hơn, nhạt màu hơn và có xu hướng ngả sang màu xanh lam.'
      },
      {
        title: 'Ứng Dụng',
        content: 'Khi vẽ một dãy núi, hãy vẽ ngọn núi gần nhất với màu sắc đậm và chi tiết rõ ràng, các ngọn núi xa hơn sẽ nhạt dần và ít chi tiết hơn.'
      }
    ]
  },
  {
    id: 12,
    title: 'Đo Lường và Dóng Tỷ Lệ',
    summary: 'Sử dụng bút chì của bạn như một công cụ đo lường để vẽ tỷ lệ chính xác.',
    icon: '📏',
    steps: [
      {
        title: 'Kỹ Thuật',
        content: 'Duỗi thẳng tay, nhắm một mắt và dùng bút chì để "đo" chiều cao hoặc chiều rộng của một vật thể. Sau đó, sử dụng đơn vị đo đó để so sánh và vẽ các vật thể khác.'
      },
      {
        title: 'Thực Hành',
        content: 'Thử vẽ một cái ghế. Dùng chiều rộng của mặt ghế làm đơn vị đo, xem chiều cao của chân ghế và lưng ghế bằng bao nhiêu lần đơn vị đó.'
      }
    ]
  },
  {
    id: 13,
    title: 'Vẽ Hình Elip',
    summary: 'Nắm vững cách vẽ các hình tròn trong không gian phối cảnh, chẳng hạn như miệng cốc hoặc bánh xe.',
    icon: 'Ellipse',
    steps: [
      {
        title: 'Elip và Phối Cảnh',
        content: 'Một hình tròn khi nhìn ở một góc độ sẽ trở thành một hình elip. Elip càng gần đường chân trời, nó sẽ càng dẹt.'
      },
      {
        title: 'Vẽ Elip Chính Xác',
        content: 'Vẽ một hình vuông trong không gian phối cảnh. Kẻ hai đường chéo để tìm tâm. Hình elip sẽ tiếp xúc với bốn cạnh của hình vuông đó.'
      }
    ]
  },
  {
    id: 14,
    title: 'Vẽ Vật Thể Hữu Cơ',
    summary: 'Áp dụng các kỹ năng về hình khối và ánh sáng để vẽ các vật thể tự nhiên như trái cây, rau củ.',
    icon: '🍓',
    steps: [
      {
        title: 'Đường Cong và Sự Bất Đối Xứng',
        content: 'Vật thể hữu cơ hiếm khi hoàn hảo. Hãy tìm kiếm những đường cong tự nhiên và sự không hoàn hảo để làm cho bức vẽ của bạn trông thật hơn.'
      },
      {
        title: 'Chất Liệu Bề Mặt',
        content: 'Quan sát kỹ bề mặt của vật thể. Vỏ cam sần sùi sẽ khác với vỏ táo bóng loáng. Sử dụng các kỹ thuật đánh bóng khác nhau để thể hiện điều này.'
      }
    ]
  },
  {
    id: 15,
    title: 'Dự Án Module 1: Bàn Tĩnh Vật',
    summary: 'Áp dụng tất cả các kiến thức nền tảng đã học để hoàn thành một bức tranh tĩnh vật phức tạp hơn.',
    icon: '🏆',
    steps: [
      {
        title: 'Thiết Lập',
        content: 'Chọn 3-5 vật thể có hình khối và chất liệu khác nhau. Sắp xếp chúng trên một chiếc bàn có trải khăn để thực hành vẽ nếp gấp.'
      },
      {
        title: 'Tập Trung',
        content: 'Hãy chú trọng vào bố cục, tỷ lệ chính xác, nguồn sáng nhất quán và sự đa dạng trong kỹ thuật đánh bóng để thể hiện các chất liệu khác nhau.'
      }
    ]
  },
  // MODULE 2: VẼ THẾ GIỚI XUNG QUANH (16-35)
  {
    id: 16,
    title: 'Vẽ Chất Liệu: Vải Vóc và Nếp Gấp',
    summary: 'Nắm vững bí quyết vẽ các loại nếp gấp vải một cách chân thực và mềm mại.',
    icon: '👗',
    steps: [
      {
        title: '7 Loại Nếp Gấp Cơ Bản',
        content: 'Tìm hiểu các loại nếp gấp chính: ống (pipe), zig-zag, xoắn ốc (spiral), bán nguyệt (half-lock), pa-ra-bol (diaper), và nếp gấp quán tính (inert).'
      },
      {
        title: 'Ánh Sáng Trên Vải',
        content: 'Nếp gấp tạo ra các vùng sáng và tối. Đỉnh của nếp gấp sẽ bắt sáng, trong khi phần lõm vào sẽ là vùng tối.'
      }
    ]
  },
  {
    id: 17,
    title: 'Vẽ Chất Liệu: Kim Loại & Thủy Tinh',
    summary: 'Chinh phục thử thách vẽ các bề mặt phản chiếu và trong suốt.',
    icon: '✨',
    steps: [
      {
        title: 'Kim Loại và Sự Tương Phản',
        content: 'Kim loại có đặc điểm là sự tương phản gay gắt giữa vùng sáng chói (highlight) và vùng tối sẫm. Đừng ngại dùng mảng đen và để lại mảng trắng của giấy.'
      },
      {
        title: 'Thủy Tinh và Sự Trong Suốt',
        content: 'Với thủy tinh, bạn vẽ những gì bạn nhìn thấy xuyên qua nó và cách ánh sáng bị bẻ cong. Vùng highlight sắc nét là chìa khóa để tạo cảm giác bóng loáng.'
      }
    ]
  },
  {
    id: 18,
    title: 'Vẽ Chất Liệu: Gỗ',
    summary: 'Học cách thể hiện vân gỗ và sự thô ráp của bề mặt gỗ.',
    icon: '🪵',
    steps: [
      {
        title: 'Vân Gỗ',
        content: 'Vẽ các đường cong dài, không đều và song song để tạo ra vân gỗ. Thêm các "mắt gỗ" (hình elip) để tăng tính chân thực.'
      },
      {
        title: 'Sự Thô Mộc',
        content: 'Sử dụng kỹ thuật gạch nét (hatching) và tránh di chì quá nhiều để giữ được cảm giác thô ráp của bề mặt gỗ.'
      }
    ]
  },
  {
    id: 19,
    title: 'Vẽ Chất Liệu: Đá và Gạch',
    summary: 'Tạo ra cảm giác về khối lượng và sự cứng cáp của đá và gạch.',
    icon: '🧱',
    steps: [
      {
        title: 'Hình Dạng và Góc Cạnh',
        content: 'Đá và gạch thường có các góc cạnh sắc nét và các mặt phẳng. Hãy chú ý đến cách ánh sáng tạo ra các mảng sáng tối rõ rệt trên các mặt này.'
      },
      {
        title: 'Bề Mặt',
        content: 'Sử dụng kỹ thuật chấm (stippling) hoặc các nét vẽ ngẫu nhiên để tạo ra bề mặt lởm chởm, không đồng đều của đá.'
      }
    ]
  },
  {
    id: 20,
    title: 'Vẽ Mây và Bầu Trời',
    summary: 'Thổi hồn vào tranh phong cảnh với mây và bầu trời sống động.',
    icon: '☁️',
    steps: [
      {
        title: 'Hình Khối Của Mây',
        content: 'Hãy tưởng tượng mây là những khối cầu hoặc khối hộp mềm mại được ánh sáng chiếu vào. Chúng cũng có vùng sáng, vùng tối và phản quang.'
      },
      {
        title: 'Kỹ Thuật Tạo Độ Mềm Mại',
        content: 'Sử dụng kỹ thuật di chì (blending) hoặc cạnh của bút chì để tạo ra những mảng mây xốp. Gôm dẻo là công cụ tuyệt vời để "vẽ" ra những vệt mây sáng.'
      }
    ]
  },
  {
    id: 21,
    title: 'Vẽ Nước',
    summary: 'Nắm bắt sự phản chiếu, trong suốt và chuyển động của mặt nước.',
    icon: '💧',
    steps: [
      {
        title: 'Phản Chiếu',
        content: 'Mặt nước phẳng lặng hoạt động như một tấm gương. Hình ảnh phản chiếu sẽ bị bóp méo và tối hơn một chút so với vật thể thật.'
      },
      {
        title: 'Gợn Sóng',
        content: 'Vẽ các đường elip ngang để thể hiện những gợn sóng. Ánh sáng sẽ tạo ra các vệt sáng và tối xen kẽ trên các gợn sóng này.'
      }
    ]
  },
  {
    id: 22,
    title: 'Vẽ Cây Cối và Thực Vật',
    summary: 'Học cách vẽ các loại cây và thảm thực vật đa dạng, từ thân cây đến tán lá.',
    icon: '🌳',
    steps: [
      {
        title: 'Cấu Trúc Của Cây',
        content: 'Bắt đầu với thân cây và các cành chính. Hãy nghĩ về chúng như những khối trụ nhỏ dần về phía ngọn.'
      },
      {
        title: 'Vẽ Tán Lá Như Một Khối',
        content: 'Đừng cố vẽ từng chiếc lá một. Hãy nhóm chúng lại thành những khối lớn và đánh bóng các khối lá này để tạo ra chiều sâu cho tán cây.'
      }
    ]
  },
  {
    id: 23,
    title: 'Vẽ Hoa và Lá',
    summary: 'Nắm bắt vẻ đẹp mỏng manh và cấu trúc phức tạp của các loài hoa.',
    icon: '🌸',
    steps: [
      {
        title: 'Đơn Giản Hóa Hình Dạng',
        content: 'Bắt đầu bằng cách phác thảo hình dạng tổng thể của bông hoa (hình tròn, hình nón) trước khi vẽ các cánh hoa riêng lẻ.'
      },
      {
        title: 'Đường Cong Tự Nhiên',
        content: 'Cánh hoa và lá cây có những đường cong mềm mại. Hãy sử dụng những nét vẽ uyển chuyển và tránh các đường thẳng cứng nhắc.'
      }
    ]
  },
  {
    id: 24,
    title: 'Vẽ Phong Cảnh: Tiền, Trung, Hậu Cảnh',
    summary: 'Tạo ra chiều sâu và quy mô trong tranh phong cảnh bằng cách chia không gian thành các lớp.',
    icon: '🌄',
    steps: [
      {
        title: 'Ba Lớp Không Gian',
        content: 'Tiền cảnh (foreground) là những gì gần bạn nhất, có độ chi tiết và tương phản cao nhất. Trung cảnh (middle ground) là nơi chủ thể thường tọa lạc. Hậu cảnh (background) là phần xa nhất, mờ và nhạt nhất.'
      },
      {
        title: 'Tạo Sự Chồng Lớp',
        content: 'Vẽ các vật thể chồng lên nhau (ví dụ: một cái cây che một phần ngọn núi) là một cách hiệu quả để tạo ra cảm giác về khoảng cách.'
      }
    ]
  },
  {
    id: 25,
    title: 'Ký Họa Đô Thị (Urban Sketching)',
    summary: 'Ghi lại năng lượng và cuộc sống của thành phố qua những nét vẽ nhanh và phóng khoáng.',
    icon: '🏘️',
    steps: [
      {
        title: 'Vẽ Tại Chỗ',
        content: 'Mục đích của ký họa đô thị là vẽ trực tiếp từ cuộc sống. Tìm một địa điểm thú vị, ngồi xuống và ghi lại những gì bạn thấy.'
      },
      {
        title: 'Tập Trung Vào Bức Tranh Lớn',
        content: 'Đừng sa đà vào chi tiết. Cố gắng nắm bắt không khí chung, ánh sáng, và những hình khối chính của khung cảnh.'
      }
    ]
  },
  {
    id: 26,
    title: 'Vẽ Kiến Trúc Cơ Bản',
    summary: 'Áp dụng các quy tắc phối cảnh để vẽ các tòa nhà và công trình kiến trúc một cách chính xác.',
    icon: '🏛️',
    steps: [
      {
        title: 'Phối Cảnh Là Chìa Khóa',
        content: 'Phối cảnh 1, 2 và 3 điểm tụ là kỹ năng bắt buộc để vẽ kiến trúc. Hãy xác định đường chân trời và các điểm tụ trước khi bắt đầu.'
      },
      {
        title: 'Sự Lặp Lại và Họa Tiết',
        content: 'Kiến trúc thường có các yếu tố lặp lại như cửa sổ, cột nhà. Hãy vẽ một cái thật cẩn thận và sau đó sử dụng nó làm tham chiếu cho những cái còn lại.'
      }
    ]
  },
  {
    id: 27,
    title: 'Vẽ Động Vật: Xây Dựng Hình Khối',
    summary: 'Nắm bắt hình dáng và chuyển động của các loài động vật qua hình khối đơn giản.',
    icon: '🐕',
    steps: [
      {
        title: 'Xây Dựng Từ Hình Khối',
        content: 'Tương tự như vẽ người, hãy bắt đầu bằng các hình khối cơ bản: khối cầu cho đầu, lồng ngực và hông; khối trụ cho chân và cổ.'
      },
      {
        title: 'Đường Chuyển Động',
        content: 'Trước khi vẽ chi tiết, hãy vẽ một đường cong duy nhất để thể hiện chuyển động chính của con vật (ví dụ: đường cong của xương sống).'
      }
    ]
  },
  {
    id: 28,
    title: 'Vẽ Lông và Vảy',
    summary: 'Học các kỹ thuật để thể hiện chất liệu bề mặt của động vật.',
    icon: ' textura',
    steps: [
      {
        title: 'Vẽ Lông',
        content: 'Vẽ các nét theo hướng lông mọc. Lông ngắn có thể được thể hiện bằng các nét ngắn và dày đặc. Lông dài cần những nét vẽ uyển chuyển và dài hơn.'
      },
      {
        title: 'Vẽ Vảy',
        content: 'Vẽ một lớp vảy cơ bản bằng các hình bán nguyệt hoặc kim cương xếp chồng lên nhau. Sau đó, thêm bóng đổ cho từng chiếc vảy để tạo ra chiều sâu.'
      }
    ]
  },
  {
    id: 29,
    title: 'Vẽ Chim',
    summary: 'Nắm bắt hình dáng và sự tinh tế của các loài chim.',
    icon: '🐦',
    steps: [
      {
        title: 'Hình Dạng Cơ Bản',
        content: 'Thân chim có thể được đơn giản hóa thành một hình bầu dục, và đầu là một hình tròn nhỏ hơn. Chú ý đến hình dạng đặc trưng của mỏ và đuôi.'
      },
      {
        title: 'Vẽ Lông Vũ',
        content: 'Lông vũ ở cánh và đuôi dài và có cấu trúc rõ ràng. Lông ở thân ngắn và mềm mại hơn, có thể được thể hiện bằng cách đánh bóng nhẹ.'
      }
    ]
  },
  {
    id: 30,
    title: 'Vẽ Động Vật Có Vú',
    summary: 'Tập trung vào giải phẫu và chuyển động của các loài động vật bốn chân như chó, mèo, ngựa.',
    icon: '🐎',
    steps: [
      {
        title: 'Cấu Trúc Xương',
        content: 'Hiểu biết cơ bản về cấu trúc xương của động vật bốn chân sẽ giúp bạn vẽ các khớp chân một cách chính xác. Chú ý đến "khuỷu tay" và "đầu gối" ngược của chúng.'
      },
      {
        title: 'Dáng Đi',
        content: 'Nghiên cứu các chu kỳ đi, chạy của động vật để vẽ chúng trong các tư thế chuyển động tự nhiên và thuyết phục.'
      }
    ]
  },
  {
    id: 31,
    title: 'Vẽ Côn Trùng',
    summary: 'Khám phá thế giới vi mô và vẽ các chi tiết phức tạp của côn trùng.',
    icon: '🦋',
    steps: [
      {
        title: 'Ba Phần Cơ Thể',
        content: 'Hầu hết côn trùng đều có ba phần cơ thể chính: đầu, ngực và bụng. Hãy bắt đầu bằng cách phác thảo ba hình khối này.'
      },
      {
        title: 'Đối Xứng và Chi Tiết',
        content: 'Côn trùng thường có tính đối xứng cao. Hãy vẽ một bên trước và sau đó lật hoặc sao chép sang bên còn lại. Tập trung vào các chi tiết nhỏ như râu, chân và hoa văn trên cánh.'
      }
    ]
  },
  {
    id: 32,
    title: 'Bố Cục Nâng Cao: Tỷ Lệ Vàng',
    summary: 'Sử dụng tỷ lệ toán học cổ điển để tạo ra các tác phẩm có sự hài hòa tự nhiên.',
    icon: '🌀',
    steps: [
      {
        title: 'Đường Xoắn Ốc Vàng',
        content: 'Tỷ lệ vàng tạo ra một đường xoắn ốc. Đặt điểm nhấn của bạn vào tâm của đường xoắn ốc này để tạo ra một bố cục tự nhiên và dễ chịu cho mắt người xem.'
      },
      {
        title: 'Không Chỉ Là Quy Tắc',
        content: 'Tỷ lệ vàng là một công cụ hướng dẫn, không phải là một quy tắc cứng nhắc. Sử dụng nó để cải thiện bố cục của bạn, nhưng đừng để nó giới hạn sự sáng tạo.'
      }
    ]
  },
  {
    id: 33,
    title: 'Bố Cục Nâng Cao: Dẫn Dắt Ánh Nhìn',
    summary: 'Kiểm soát cách người xem trải nghiệm bức tranh của bạn.',
    icon: '👀',
    steps: [
      {
        title: 'Tam Giác Thị Giác',
        content: 'Sắp xếp ba điểm nhấn trong tranh của bạn thành một hình tam giác. Mắt người xem sẽ tự nhiên di chuyển giữa ba điểm này, giữ họ tương tác với tác phẩm lâu hơn.'
      },
      {
        title: 'Nhịp Điệu và Sự Lặp Lại',
        content: 'Lặp lại các hình dạng, màu sắc hoặc đường nét trong tranh có thể tạo ra một nhịp điệu thị giác, dẫn dắt mắt người xem qua tác phẩm một cách mượt mà.'
      }
    ]
  },
  {
    id: 34,
    title: 'Bố Cục Nâng Cao: Không Gian Âm',
    summary: 'Học cách sử dụng không gian xung quanh chủ thể để làm nổi bật nó.',
    icon: '⚫️',
    steps: [
      {
        title: 'Không Gian Âm Là Gì?',
        content: 'Không gian âm (Negative Space) là khu vực xung quanh và giữa các chủ thể của một hình ảnh. Nó cũng quan trọng như chính chủ thể (Không gian dương).'
      },
      {
        title: 'Tạo Sự Cân Bằng',
        content: 'Sử dụng không gian âm một cách có chủ ý để tạo ra sự cân bằng và làm cho chủ thể chính của bạn nổi bật hơn. Đôi khi, hình dạng của không gian âm cũng có thể kể một câu chuyện.'
      }
    ]
  },
  {
    id: 35,
    title: 'Dự Án Module 2: Một Góc Phố',
    summary: 'Kết hợp kỹ năng vẽ kiến trúc, phối cảnh và ký họa để ghi lại một khung cảnh đô thị sống động.',
    icon: '🏤',
    steps: [
      {
        title: 'Chọn Khung Cảnh',
        content: 'Tìm một góc phố có sự kết hợp thú vị giữa kiến trúc, cây cối và có thể là cả con người hoặc phương tiện giao thông.'
      },
      {
        title: 'Tập Trung',
        content: 'Áp dụng phối cảnh hai điểm tụ, chú ý đến các chất liệu khác nhau (gạch, kính, kim loại) và sử dụng phối cảnh khí quyển để tạo chiều sâu cho con phố.'
      }
    ]
  },
  // MODULE 3: CHINH PHỤC DÁNG NGƯỜI (36-60)
  {
    id: 36,
    title: 'Vẽ Phác Thảo Dáng (Gesture Drawing)',
    summary: 'Nắm bắt chuyển động và năng lượng của cơ thể người qua những nét vẽ nhanh.',
    icon: '🏃',
    steps: [
      {
        title: 'Đường Chuyển Động',
        content: 'Tìm và vẽ "đường chuyển động" (line of action) - một đường cong duy nhất chạy dọc cơ thể để thể hiện tư thế chính. Đây là bước đầu tiên và quan trọng nhất.'
      },
      {
        title: 'Thời Gian Là Vàng',
        content: 'Thực hành với các bài vẽ có giới hạn thời gian (30 giây, 1 phút, 2 phút). Điều này buộc bạn phải tập trung vào năng lượng của dáng người thay vì chi tiết.'
      }
    ]
  },
  {
    id: 37,
    title: 'Tỷ Lệ Cơ Thể Người',
    summary: 'Học các quy tắc kinh điển để vẽ một cơ thể người cân đối.',
    icon: '🚶',
    steps: [
      {
        title: 'Tỷ Lệ 8 Đầu',
        content: 'Một quy tắc phổ biến là cơ thể người trưởng thành cao khoảng 7.5 đến 8 lần chiều cao của đầu. Sử dụng chiều cao của đầu làm đơn vị đo để xác định vị trí của các bộ phận khác.'
      },
      {
        title: 'Các Mốc Quan Trọng',
        content: 'Ghi nhớ các mốc quan trọng: vai rộng khoảng 2-3 lần chiều rộng đầu, khuỷu tay ngang với eo, đầu ngón tay chạm đến giữa đùi.'
      }
    ]
  },
  {
    id: 38,
    title: 'Xây Dựng Hình Nhân (Mannequinization)',
    summary: 'Sử dụng các hình khối 3D đơn giản để xây dựng cấu trúc cơ thể người.',
    icon: '🤖',
    steps: [
      {
        title: 'Từ Người Que Đến Người Khối',
        content: 'Bắt đầu bằng người que để xác định dáng, sau đó thêm các hình khối đơn giản: hình cầu cho khớp, khối trụ cho tay chân, và các khối hộp cho lồng ngực và xương chậu.'
      },
      {
        title: 'Vẽ Từ Mọi Góc Độ',
        content: 'Kỹ thuật này giúp bạn dễ dàng hình dung và vẽ cơ thể người từ bất kỳ góc độ nào, tạo ra cảm giác về khối lượng và chiều sâu.'
      }
    ]
  },
  {
    id: 39,
    title: 'Cấu Trúc Hộp Sọ',
    summary: 'Hiểu cấu trúc xương bên dưới để vẽ đầu và mặt một cách chính xác.',
    icon: '💀',
    steps: [
      {
        title: 'Phương Pháp Loomis',
        content: 'Bắt đầu với một khối cầu, sau đó cắt bỏ hai bên và thêm phần hàm. Phương pháp này giúp xác định các mặt phẳng của đầu và vị trí của các đặc điểm trên khuôn mặt.'
      },
      {
        title: 'Các Mốc Xương',
        content: 'Xác định các mốc xương quan trọng như gò má, cung mày và đường hàm. Chúng sẽ không thay đổi ngay cả khi biểu cảm trên khuôn mặt thay đổi.'
      }
    ]
  },
  {
    id: 40,
    title: 'Tỷ Lệ Gương Mặt Chi Tiết',
    summary: 'Học các quy tắc cơ bản để đặt mắt, mũi, miệng đúng vị trí.',
    icon: '👤',
    steps: [
      {
        title: 'Các Đường Gióng Ngang',
        content: 'Chia khuôn mặt thành ba phần bằng nhau: từ chân tóc đến lông mày, từ lông mày đến đáy mũi, và từ đáy mũi đến cằm.'
      },
      {
        title: 'Các Đường Gióng Dọc',
        content: 'Mắt nằm trên đường kẻ ngang giữa. Khoảng cách giữa hai mắt bằng chiều rộng của một con mắt. Khóe miệng thường thẳng hàng với con ngươi.'
      }
    ]
  },
  {
    id: 41,
    title: 'Vẽ Mắt',
    summary: 'Học cách vẽ đôi mắt có hồn và thể hiện cảm xúc.',
    icon: '👁️',
    steps: [
      {
        title: 'Mắt Là Một Khối Cầu',
        content: 'Luôn nhớ rằng nhãn cầu là một khối cầu nằm trong hốc mắt. Mí mắt sẽ cong theo hình dạng của khối cầu này.'
      },
      {
        title: 'Ánh Sáng và Phản Chiếu',
        content: 'Thêm một điểm sáng nhỏ (catchlight) trong con ngươi để làm cho đôi mắt trông sống động. Đừng quên vẽ bóng đổ của mí mắt trên lên nhãn cầu.'
      }
    ]
  },
  {
    id: 42,
    title: 'Vẽ Mũi',
    summary: 'Đơn giản hóa cấu trúc phức tạp của mũi thành các mặt phẳng và hình khối.',
    icon: '👃',
    steps: [
      {
        title: 'Cấu Trúc Hình Nêm',
        content: 'Hãy nghĩ về mũi như một khối hình nêm với các mặt phẳng trên, hai bên và dưới. Điều này giúp bạn xác định các vùng sáng tối một cách dễ dàng.'
      },
      {
        title: 'Lỗ Mũi và Cánh Mũi',
        content: 'Lỗ mũi là phần tối nhất. Cánh mũi là những hình cầu nhỏ ở hai bên. Chú ý đến cách chúng kết nối với khuôn mặt.'
      }
    ]
  },
  {
    id: 43,
    title: 'Vẽ Miệng và Răng',
    summary: 'Nắm bắt sự đa dạng của các hình dạng miệng và cách thể hiện nụ cười.',
    icon: '👄',
    steps: [
      {
        title: 'Cấu Trúc 3 Phần Của Môi',
        content: 'Môi trên thường được chia thành hai phần nhỏ, và môi dưới là một khối lớn hơn. Môi trên thường tối hơn môi dưới vì nó ít bắt sáng hơn.'
      },
      {
        title: 'Vẽ Răng',
        content: 'Đừng vẽ từng chiếc răng một. Hãy vẽ chúng như một khối và chỉ gợi ý sự phân chia giữa các răng. Răng thường nằm trong bóng tối của miệng.'
      }
    ]
  },
  {
    id: 44,
    title: 'Vẽ Tai',
    summary: 'Khám phá cấu trúc sụn phức tạp của tai.',
    icon: '👂',
    steps: [
      {
        title: 'Hình Dạng Chữ C và Chữ Y',
        content: 'Đơn giản hóa cấu trúc của tai thành một hình chữ C lớn bên ngoài và một hình chữ Y nhỏ hơn bên trong. Đây là khung sườn để bạn thêm các chi tiết khác.'
      },
      {
        title: 'Vị Trí',
        content: 'Tai thường nằm trong khoảng từ đường kẻ lông mày đến đáy mũi. Khi nhìn nghiêng, tai nằm ở phía sau đường chia đôi khuôn mặt.'
      }
    ]
  },
  {
    id: 45,
    title: 'Vẽ Tóc',
    summary: 'Học cách vẽ tóc như những khối lớn thay vì từng sợi một.',
    icon: '👱',
    steps: [
      {
        title: 'Vẽ Khối Tóc',
        content: 'Xác định hình dạng tổng thể của mái tóc và chia nó thành các lọn hoặc mảng lớn. Đánh bóng các mảng này để tạo ra chiều sâu.'
      },
      {
        title: 'Thêm Chi Tiết',
        content: 'Sau khi đã có khối, hãy vẽ một vài sợi tóc riêng lẻ ở rìa để tạo cảm giác mềm mại và tự nhiên. Dùng gôm để tạo các vệt sáng (highlight) trên tóc.'
      }
    ]
  },
  {
    id: 46,
    title: 'Biểu Cảm Gương Mặt',
    summary: 'Truyền tải cảm xúc và tính cách vào các bức chân dung của bạn.',
    icon: '😊',
    steps: [
      {
        title: 'Chìa Khóa Nằm Ở Lông Mày và Miệng',
        content: 'Lông mày và miệng là hai yếu tố biểu cảm mạnh nhất. Sự thay đổi nhỏ về độ cong và góc của chúng có thể biến một khuôn mặt vui vẻ thành buồn bã hoặc tức giận.'
      },
      {
        title: 'Vẽ Các Cảm Xúc Cơ Bản',
        content: 'Thực hành vẽ 6 cảm xúc cơ bản: Vui, Buồn, Giận, Sợ, Ngạc nhiên, và Khinh bỉ. Quan sát trong gương xem các cơ mặt của bạn thay đổi như thế nào.'
      }
    ]
  },
  {
    id: 47,
    title: 'Vẽ Chân Dung từ các Góc Độ',
    summary: 'Áp dụng kiến thức về cấu trúc đầu để vẽ chân dung từ góc nhìn 3/4, nhìn lên và nhìn xuống.',
    icon: '🧐',
    steps: [
      {
        title: 'Góc 3/4',
        content: 'Đây là góc nhìn phổ biến nhất trong chân dung. Chú ý đến sự chồng chéo của các đặc điểm. Mắt và má ở xa sẽ bị che khuất một phần.'
      },
      {
        title: 'Nhìn Lên và Nhìn Xuống',
        content: 'Khi nhìn lên, bạn sẽ thấy nhiều phần dưới cằm và mũi. Khi nhìn xuống, trán và đỉnh đầu sẽ chiếm nhiều diện tích hơn.'
      }
    ]
  },
  {
    id: 48,
    title: 'Giải Phẫu: Thân Trên',
    summary: 'Tìm hiểu về xương đòn, lồng ngực, và các nhóm cơ chính ở ngực và lưng.',
    icon: '👕',
    steps: [
      {
        title: 'Lồng Ngực Hình Quả Trứng',
        content: 'Đơn giản hóa lồng ngực thành một hình quả trứng lớn. Đây là khối chính để bạn gắn các bộ phận khác như đầu, tay và xương chậu.'
      },
      {
        title: 'Các Nhóm Cơ Chính',
        content: 'Nắm được hình dạng cơ bản của cơ ngực (pectoralis), cơ delta (deltoids) ở vai, và cơ thang (trapezius) ở lưng trên.'
      }
    ]
  },
  {
    id: 49,
    title: 'Giải Phẫu: Cánh Tay',
    summary: 'Nghiên cứu các cơ bắp tay trước, bắp tay sau và cẳng tay.',
    icon: '💪',
    steps: [
      {
        title: 'Bắp Tay và Cẳng Tay',
        content: 'Cánh tay được chia thành hai phần chính: bắp tay (một khối) và cẳng tay (một khối thuôn dài, dày hơn ở gần khuỷu tay).'
      },
      {
        title: 'Sấp và Ngửa',
        content: 'Hiểu cách các cơ ở cẳng tay xoắn vào nhau khi bạn lật ngửa hoặc úp bàn tay. Điều này rất quan trọng để vẽ tay một cách tự nhiên.'
      }
    ]
  },
  {
    id: 50,
    title: 'Giải Phẫu: Chân',
    summary: 'Tìm hiểu về xương chậu và các nhóm cơ lớn ở đùi và bắp chân.',
    icon: '🦵',
    steps: [
      {
        title: 'Xương Chậu Như Cái Bát',
        content: 'Hãy nghĩ về xương chậu như một cái bát hoặc một khối hộp. Đây là điểm kết nối giữa thân trên và chân.'
      },
      {
        title: 'Các Cơ Lớn',
        content: 'Nắm được hình dạng của cơ tứ đầu (quadriceps) ở phía trước đùi, cơ gân kheo (hamstrings) ở phía sau, và cơ bắp chân (calf muscles).'
      }
    ]
  },
  {
    id: 51,
    title: 'Vẽ Bàn Tay Chi Tiết',
    summary: 'Chinh phục một trong những bộ phận khó vẽ nhất trên cơ thể người.',
    icon: '✋',
    steps: [
      {
        title: 'Cấu Trúc Hộp Của Lòng Bàn Tay',
        content: 'Đơn giản hóa lòng bàn tay thành một khối hộp dẹt. Các ngón tay sẽ mọc ra từ một cạnh của khối hộp này.'
      },
      {
        title: 'Các Đốt Ngón Tay',
        content: 'Mỗi ngón tay (trừ ngón cái) có ba đốt. Hãy vẽ chúng như ba khối trụ nhỏ nối tiếp nhau. Chú ý rằng các ngón tay có độ dài khác nhau.'
      }
    ]
  },
  {
    id: 52,
    title: 'Vẽ Bàn Chân Chi Tiết',
    summary: 'Học cách vẽ bàn chân từ các góc độ khác nhau.',
    icon: '👣',
    steps: [
      {
        title: 'Đơn Giản Hóa Bàn Chân',
        content: 'Hãy nghĩ về bàn chân như một khối hình nêm, kết hợp với một khối trụ cho gót chân và các khối nhỏ cho ngón chân.'
      },
      {
        title: 'Vòm Bàn Chân',
        content: 'Chú ý đến vòm ở lòng bàn chân. Nó tạo ra một khoảng trống bên dưới bàn chân khi đứng, đây là một đặc điểm quan trọng.'
      }
    ]
  },
  {
    id: 53,
    title: 'Vẽ Người Trong Chuyển Động',
    summary: 'Áp dụng phác thảo dáng và kiến thức giải phẫu để vẽ các tư thế hành động.',
    icon: '🤸',
    steps: [
      {
        title: 'Đối Trọng (Contrapposto)',
        content: 'Đây là tư thế đứng tự nhiên khi trọng lượng cơ thể dồn vào một chân, tạo ra sự nghiêng của hông và vai. Nắm vững tư thế này sẽ làm cho dáng người của bạn trông tự nhiên hơn.'
      },
      {
        title: 'Cường Điệu Hóa Chuyển Động',
        content: 'Để tạo ra cảm giác hành động mạnh mẽ, hãy cường điệu hóa đường chuyển động và các tư thế. Đừng ngại bẻ cong các quy tắc một chút.'
      }
    ]
  },
  {
    id: 54,
    title: 'Vẽ Quần Áo Trên Cơ Thể Người',
    summary: 'Học cách vẽ quần áo tuân theo hình khối của cơ thể và các quy tắc về nếp gấp.',
    icon: '🧥',
    steps: [
      {
        title: 'Quần Áo Bọc Lấy Cơ Thể',
        content: 'Luôn vẽ hình dáng cơ thể bên dưới trước, sau đó mới "mặc" quần áo lên. Điều này đảm bảo quần áo có cảm giác về khối lượng và không bị "phẳng".'
      },
      {
        title: 'Điểm Căng và Nếp Gấp',
        content: 'Nếp gấp thường xuất phát từ các "điểm căng" (ví dụ: vai, khuỷu tay, đầu gối) hoặc các "điểm treo" (ví dụ: vai áo).'
      }
    ]
  },
  {
    id: 55,
    title: 'Tương Tác Giữa Các Nhân Vật',
    summary: 'Vẽ hai hoặc nhiều nhân vật trong cùng một khung cảnh và thể hiện mối quan hệ giữa họ.',
    icon: '👨‍👩‍👧',
    steps: [
      {
        title: 'Ngôn Ngữ Cơ Thể',
        content: 'Sử dụng ngôn ngữ cơ thể để thể hiện sự tương tác: một cái ôm, một cuộc cãi vã, một cuộc trò chuyện. Khoảng cách giữa các nhân vật cũng nói lên nhiều điều.'
      },
      {
        title: 'Đường Nhìn',
        content: 'Hướng nhìn của các nhân vật rất quan trọng. Họ đang nhìn nhau hay nhìn đi chỗ khác? Điều này tạo ra một câu chuyện.'
      }
    ]
  },
  {
    id: 56,
    title: 'Vẽ Chibi và Nhân Vật Cách Điệu',
    summary: 'Khám phá thế giới của việc đơn giản hóa và cường điệu hóa tỷ lệ cơ thể.',
    icon: '🥰',
    steps: [
      {
        title: 'Tỷ Lệ "Dễ Thương"',
        content: 'Nhân vật Chibi thường có tỷ lệ 2-3 đầu. Đầu to, mắt lớn, và thân hình nhỏ nhắn là những đặc điểm chính.'
      },
      {
        title: 'Đơn Giản Hóa Chi Tiết',
        content: 'Bỏ qua các chi tiết giải phẫu phức tạp và tập trung vào các hình dạng đơn giản, rõ ràng và biểu cảm trên khuôn mặt.'
      }
    ]
  },
  {
    id: 57,
    title: 'Nhập Môn Thiết Kế Nhân Vật',
    summary: 'Tạo ra những nhân vật độc đáo và đáng nhớ của riêng bạn.',
    icon: '🦸',
    steps: [
      {
        title: 'Hình Dáng (Silhouette)',
        content: 'Một thiết kế nhân vật tốt thường có một hình dáng dễ nhận biết. Hãy thử vẽ bóng của nhân vật bạn trước.'
      },
      {
        title: 'Kể Chuyện Qua Thiết Kế',
        content: 'Trang phục, phụ kiện và biểu cảm của nhân vật nên kể một câu chuyện về họ là ai, họ đến từ đâu và họ làm gì.'
      }
    ]
  },
  {
    id: 58,
    title: 'Vẽ Chân Dung Tự Họa',
    summary: 'Quan sát và vẽ lại chính mình, một bài tập quan trọng cho mọi họa sĩ.',
    icon: '🤳',
    steps: [
      {
        title: 'Sử Dụng Gương',
        content: 'Vẽ từ một chiếc gương thay vì ảnh chụp sẽ giúp bạn hiểu rõ hơn về các mặt phẳng và hình khối của khuôn mặt mình.'
      },
      {
        title: 'Trung Thực và Cách Điệu',
        content: 'Bạn có thể chọn vẽ một bức chân dung tự họa chân thực hoặc thử nghiệm với việc cách điệu hóa các đặc điểm của mình để thể hiện cá tính.'
      }
    ]
  },
  {
    id: 59,
    title: 'Vẽ Người Trong Bối Cảnh',
    summary: 'Tích hợp nhân vật vào một môi trường để tạo ra một bức tranh hoàn chỉnh.',
    icon: '🚶‍♀️',
    steps: [
      {
        title: 'Tỷ Lệ và Phối Cảnh',
        content: 'Đảm bảo tỷ lệ của nhân vật phù hợp với bối cảnh. Người ở xa sẽ nhỏ hơn và tuân theo các quy tắc phối cảnh.'
      },
      {
        title: 'Ánh Sáng Nhất Quán',
        content: 'Ánh sáng chiếu lên nhân vật phải đến từ cùng một nguồn sáng với ánh sáng của bối cảnh để tạo ra sự thống nhất.'
      }
    ]
  },
  {
    id: 60,
    title: 'Dự Án Module 3: Cảnh Sinh Hoạt',
    summary: 'Vẽ một bức tranh có ít nhất hai nhân vật đang tương tác trong một bối cảnh cụ thể.',
    icon: '🎬',
    steps: [
      {
        title: 'Lên Ý Tưởng',
        content: 'Hãy nghĩ về một câu chuyện nhỏ: hai người bạn đang uống cà phê, một gia đình đang đi dạo trong công viên, v.v.'
      },
      {
        title: 'Tập Trung',
        content: 'Áp dụng tất cả kiến thức về giải phẫu, phác thảo dáng, biểu cảm, phối cảnh và bố cục để tạo ra một tác phẩm kể chuyện.'
      }
    ]
  },
  // MODULE 4: SẮC MÀU KỲ DIỆU (61-80)
  {
    id: 61,
    title: 'Lý Thuyết Màu Sắc Cơ Bản',
    summary: 'Hiểu ngôn ngữ của màu sắc để tạo ra những tác phẩm hài hòa và có cảm xúc.',
    icon: '🌈',
    steps: [
      {
        title: 'Bánh Xe Màu Sắc',
        content: 'Bao gồm màu cơ bản (Đỏ, Vàng, Xanh dương), màu thứ cấp (Cam, Xanh lá, Tím), và màu tam cấp. Hiểu cách chúng được tạo ra là nền tảng.'
      },
      {
        title: 'Màu Nóng và Màu Lạnh',
        content: 'Màu nóng (Đỏ, Cam, Vàng) tạo cảm giác ấm áp, năng lượng. Màu lạnh (Xanh dương, Xanh lá, Tím) tạo cảm giác mát mẻ, yên bình.'
      }
    ]
  },
  {
    id: 62,
    title: 'Tâm Lý Học Màu Sắc',
    summary: 'Tìm hiểu cách các màu sắc khác nhau có thể gợi lên những cảm xúc và ý nghĩa cụ thể.',
    icon: '❤️',
    steps: [
      {
        title: 'Màu Sắc và Cảm Xúc',
        content: 'Ví dụ: Màu đỏ có thể tượng trưng cho tình yêu, sự giận dữ hoặc nguy hiểm. Màu xanh dương thường gắn liền với sự bình yên, tin tưởng hoặc nỗi buồn.'
      },
      {
        title: 'Sử Dụng Màu Sắc Có Chủ Đích',
        content: 'Chọn bảng màu của bạn một cách có chủ ý để truyền tải tâm trạng hoặc thông điệp mà bạn mong muốn trong tác phẩm.'
      }
    ]
  },
  {
    id: 63,
    title: 'Các Hòa Sắc Phổ Biến',
    summary: 'Học các công thức kết hợp màu sắc để tạo ra sự hài hòa.',
    icon: '🎨',
    steps: [
      {
        title: 'Màu Bổ Túc',
        content: 'Là các cặp màu đối diện nhau trên bánh xe màu (ví dụ: Đỏ và Xanh lá). Chúng tạo ra độ tương phản cao và làm nổi bật lẫn nhau.'
      },
      {
        title: 'Màu Tương Đồng',
        content: 'Là các màu nằm cạnh nhau trên bánh xe màu (ví dụ: Vàng, Vàng cam, Cam). Chúng tạo ra cảm giác nhẹ nhàng và thư thái.'
      }
    ]
  },
  {
    id: 64,
    title: 'Giá Trị và Độ Bão Hòa',
    summary: 'Hiểu hai yếu tố quan trọng khác của màu sắc ngoài tông màu.',
    icon: '📊',
    steps: [
      {
        title: 'Giá Trị (Value)',
        content: 'Là độ sáng tối của một màu. Một bức tranh có dải giá trị rộng (từ trắng đến đen) thường có chiều sâu và ấn tượng hơn.'
      },
      {
        title: 'Độ Bão Hòa (Saturation)',
        content: 'Là độ tinh khiết hoặc cường độ của một màu. Màu có độ bão hòa cao thì rực rỡ, trong khi màu có độ bão hòa thấp thì xỉn và gần với màu xám hơn.'
      }
    ]
  },
  {
    id: 65,
    title: 'Nhập Môn Bút Chì Màu',
    summary: 'Khám phá sự linh hoạt của bút chì màu, từ những lớp màu mỏng đến những mảng màu rực rỡ.',
    icon: '🖍️',
    steps: [
      {
        title: 'Các Loại Chì Màu',
        content: 'Có hai loại chính: chì gốc sáp (phổ biến, dễ pha trộn) và chì gốc dầu (cứng hơn, ít bị gãy, tốt cho chi tiết).'
      },
      {
        title: 'Kiểm Soát Lực Tay',
        content: 'Tương tự như bút chì than, lực tay quyết định độ đậm nhạt của màu. Hãy luyện tập tô các dải màu chuyển sắc.'
      }
    ]
  },
  {
    id: 66,
    title: 'Kỹ Thuật Chồng Lớp Bút Chì Màu',
    summary: 'Tạo ra các màu sắc mới và chiều sâu bằng cách chồng nhiều lớp màu lên nhau.',
    icon: '📚',
    steps: [
      {
        title: 'Chồng Màu (Layering)',
        content: 'Tô nhẹ nhàng nhiều lớp màu khác nhau lên nhau. Ví dụ, tô một lớp màu vàng, sau đó là một lớp màu xanh dương để tạo ra màu xanh lá cây có chiều sâu.'
      },
      {
        title: 'Burnishing',
        content: 'Sau khi đã chồng nhiều lớp, dùng một cây chì màu trắng hoặc màu sáng ấn mạnh để làm mịn bề mặt, trộn các màu lại với nhau và tạo ra vẻ ngoài bóng loáng.'
      }
    ]
  },
  {
    id: 67,
    title: 'Nhập Môn Phấn Tiên (Pastels)',
    summary: 'Làm quen với chất liệu phấn tiên rực rỡ và đầy biểu cảm.',
    icon: '✨',
    steps: [
      {
        title: 'Các Loại Phấn Tiên',
        content: 'Có phấn tiên cứng (tốt cho chi tiết), phấn tiên mềm (dễ pha trộn, màu sắc rực rỡ), và bút chì phấn tiên (dùng để đi nét).'
      },
      {
        title: 'Giấy Vẽ Chuyên Dụng',
        content: 'Phấn tiên cần giấy có bề mặt nhám (toothed paper) để các hạt phấn có thể bám vào. Giấy Canson Mi-Teintes là một lựa chọn phổ biến.'
      }
    ]
  },
  {
    id: 68,
    title: 'Kỹ Thuật Di Phấn',
    summary: 'Học cách pha trộn và tạo ra các hiệu ứng mượt mà với phấn tiên.',
    icon: '💨',
    steps: [
      {
        title: 'Pha Trộn',
        content: 'Dùng ngón tay, que di chì hoặc một miếng mút để xoa nhẹ lên các mảng màu phấn tiên, tạo ra sự chuyển tiếp màu sắc mượt mà.'
      },
      {
        title: 'Chồng Lớp và Cố Định',
        content: 'Bạn có thể chồng nhiều lớp phấn tiên. Sau mỗi vài lớp, hãy sử dụng bình xịt cố định (fixative) để ngăn các lớp màu bị trộn lẫn vào nhau.'
      }
    ]
  },
  {
    id: 69,
    title: 'Nhập Môn Màu Nước',
    summary: 'Bước đầu tiên vào thế giới màu nước trong trẻo và đầy mê hoặc.',
    icon: '💧',
    steps: [
      {
        title: 'Làm Quen Vật Liệu',
        content: 'Màu nước cần giấy có định lượng cao (từ 300gsm là tốt nhất) để không bị cong vênh. Cọ vẽ màu nước thường làm từ lông tự nhiên hoặc sợi tổng hợp mềm để giữ nước tốt.'
      },
      {
        title: 'Kiểm Soát Lượng Nước',
        content: 'Lượng nước bạn sử dụng là yếu tố quan trọng nhất trong màu nước. Càng nhiều nước, màu càng nhạt và loang rộng. Càng ít nước, màu càng đậm và nét vẽ càng rõ.'
      }
    ]
  },
  {
    id: 70,
    title: 'Kỹ Thuật Màu Nước: Ướt trên Ướt, Ướt trên Khô',
    summary: 'Nắm vững hai kỹ thuật nền tảng của màu nước.',
    icon: '💦',
    steps: [
      {
        title: 'Ướt trên Ướt (Wet-on-Wet)',
        content: 'Làm ướt giấy bằng nước sạch trước, sau đó vẽ màu lên. Màu sẽ loang ra một cách mềm mại, lý tưởng để vẽ bầu trời hoặc nền.'
      },
      {
        title: 'Ướt trên Khô (Wet-on-Dry)',
        content: 'Vẽ màu lên bề mặt giấy khô. Kỹ thuật này cho phép bạn kiểm soát nét vẽ và tạo ra các chi tiết sắc nét.'
      }
    ]
  },
  {
    id: 71,
    title: 'Kỹ Thuật Màu Nước: Glazing và Lifting',
    summary: 'Tạo ra chiều sâu và chỉnh sửa lỗi với các kỹ thuật nâng cao.',
    icon: '🪄',
    steps: [
      {
        title: 'Glazing',
        content: 'Chồng các lớp màu trong suốt lên nhau sau khi lớp màu bên dưới đã khô hoàn toàn. Kỹ thuật này tạo ra các màu sắc phong phú và có chiều sâu.'
      },
      {
        title: 'Lifting',
        content: 'Dùng cọ ẩm, miếng bọt biển hoặc khăn giấy để "nhấc" màu ra khỏi giấy khi màu còn ướt hoặc đã khô. Kỹ thuật này dùng để tạo highlight hoặc sửa lỗi.'
      }
    ]
  },
  {
    id: 72,
    title: 'Nhập Môn Màu Gouache',
    summary: 'Khám phá chất liệu màu độc đáo nằm giữa màu nước và acrylic.',
    icon: ' opaque',
    steps: [
      {
        title: 'Đặc Tính',
        content: 'Gouache là một loại màu gốc nước nhưng có tính che phủ (opaque) giống acrylic. Nó khô lại thành một bề mặt mịn, mờ (matte).'
      },
      {
        title: 'Khả Năng Kích Hoạt Lại',
        content: 'Không giống như acrylic, bạn có thể dùng nước để kích hoạt lại màu gouache đã khô, cho phép bạn tiếp tục pha trộn và chỉnh sửa.'
      }
    ]
  },
  {
    id: 73,
    title: 'Nhập Môn Màu Acrylic',
    summary: 'Khám phá thế giới đa dạng và rực rỡ của chất liệu sơn acrylic.',
    icon: ' acrylic',
    steps: [
      {
        title: 'Dụng Cụ Cần Thiết',
        content: 'Bạn sẽ cần một bộ màu acrylic cơ bản, vài cây cọ sợi tổng hợp, một bảng pha màu (palette), và giấy vẽ dày hoặc toan (canvas).'
      },
      {
        title: 'Khô Nhanh và Bền',
        content: 'Acrylic khô rất nhanh và không thấm nước sau khi khô, cho phép bạn chồng nhiều lớp màu lên nhau mà không sợ làm hỏng lớp bên dưới.'
      }
    ]
  },
  {
    id: 74,
    title: 'Kỹ Thuật Acrylic: Blending và Impasto',
    summary: 'Học cách tạo ra sự chuyển tiếp mượt mà và các lớp sơn dày với acrylic.',
    icon: ' textural',
    steps: [
      {
        title: 'Blending',
        content: 'Vì acrylic khô nhanh, việc pha trộn màu trực tiếp trên toan đòi hỏi tốc độ. Bạn có thể sử dụng các dung môi làm chậm khô (retarder) để có thêm thời gian.'
      },
      {
        title: 'Impasto',
        content: 'Sử dụng sơn đặc trực tiếp từ tuýp hoặc pha với gel đặc để tạo ra các lớp sơn dày, nổi cộm trên bề mặt tranh, tạo ra hiệu ứng 3D.'
      }
    ]
  },
  {
    id: 75,
    title: 'Nhập Môn Sơn Dầu',
    summary: 'Bước vào thế giới cổ điển của sơn dầu với khả năng pha trộn tuyệt vời.',
    icon: '🪔',
    steps: [
      {
        title: 'Chất Liệu',
        content: 'Sơn dầu được làm từ bột màu pha với dầu (thường là dầu lanh). Nó cần dung môi như turpentine để pha loãng và rửa cọ.'
      },
      {
        title: 'Thời Gian Khô Lâu',
        content: 'Sơn dầu khô rất chậm (vài ngày đến vài tuần), cho phép bạn có nhiều thời gian để pha trộn, chỉnh sửa và tạo ra các hiệu ứng mượt mà.'
      }
    ]
  },
  {
    id: 76,
    title: 'Kỹ Thuật Sơn Dầu: Alla Prima và Glazing',
    summary: 'Khám phá hai phương pháp tiếp cận chính trong hội họa sơn dầu.',
    icon: '🕰️',
    steps: [
      {
        title: 'Alla Prima (Wet-on-Wet)',
        content: 'Là kỹ thuật hoàn thành bức tranh trong một lần vẽ, khi các lớp sơn vẫn còn ướt. Kỹ thuật này tạo ra cảm giác tươi mới và đầy năng lượng.'
      },
      {
        title: 'Glazing',
        content: 'Tương tự như màu nước, đây là kỹ thuật chồng các lớp sơn mỏng, trong suốt lên nhau sau khi lớp bên dưới đã khô, tạo ra chiều sâu và sự phong phú cho màu sắc.'
      }
    ]
  },
  {
    id: 77,
    title: 'Sử Dụng Bảng Màu Giới Hạn',
    summary: 'Học cách tạo ra sự hài hòa và thống nhất bằng cách chỉ sử dụng một vài màu cơ bản.',
    icon: '🎨',
    steps: [
      {
        title: 'Bảng Màu Zorn',
        content: 'Một bảng màu nổi tiếng chỉ sử dụng bốn màu: Vàng Ochre, Đỏ Cadmium, Đen Ivory, và Trắng Titan. Bạn có thể tạo ra gần như mọi tông màu da và màu sắc tự nhiên từ bảng màu này.'
      },
      {
        title: 'Lợi Ích',
        content: 'Sử dụng bảng màu giới hạn buộc bạn phải tập trung vào giá trị (sáng tối) và cách pha màu, giúp tác phẩm của bạn trông chuyên nghiệp và thống nhất hơn.'
      }
    ]
  },
  {
    id: 78,
    title: 'Vẽ Tranh Đơn Sắc',
    summary: 'Tạo ra một bức tranh chỉ sử dụng các sắc độ khác nhau của cùng một màu.',
    icon: '⚫️⚪️',
    steps: [
      {
        title: 'Tập Trung Vào Giá Trị',
        content: 'Khi không có sự phân tâm của các màu sắc khác nhau, bạn có thể hoàn toàn tập trung vào giá trị (sáng tối), hình khối và bố cục. Đây là một bài tập tuyệt vời.'
      },
      {
        title: 'Tạo Tâm Trạng',
        content: 'Tranh đơn sắc có thể tạo ra một tâm trạng mạnh mẽ và đầy kịch tính. Ví dụ, một bức tranh đơn sắc xanh dương có thể gợi cảm giác buồn bã hoặc yên bình.'
      }
    ]
  },
  {
    id: 79,
    title: 'Ánh Sáng và Màu Sắc',
    summary: 'Tìm hiểu cách màu sắc của ánh sáng ảnh hưởng đến màu sắc của vật thể.',
    icon: '☀️',
    steps: [
      {
        title: 'Màu Của Ánh Sáng',
        content: 'Ánh sáng không phải lúc nào cũng màu trắng. Ánh sáng ban ngày có màu xanh nhẹ, trong khi ánh sáng hoàng hôn có màu cam và đỏ.'
      },
      {
        title: 'Màu Của Bóng Đổ',
        content: 'Bóng đổ không phải màu đen hoặc xám. Chúng thường có màu bổ túc với màu của ánh sáng. Ví dụ, dưới ánh sáng vàng, bóng đổ sẽ có xu hướng ngả sang màu tím.'
      }
    ]
  },
  {
    id: 80,
    title: 'Dự Án Module 4: Tĩnh Vật Màu',
    summary: 'Chọn một chất liệu màu bạn yêu thích và vẽ lại một bức tranh tĩnh vật, tập trung vào hòa sắc và ánh sáng.',
    icon: '🍇',
    steps: [
      {
        title: 'Thiết Lập',
        content: 'Chọn các vật thể có màu sắc thú vị và bổ sung cho nhau. Thử nghiệm với các nguồn sáng có màu khác nhau (ví dụ: đèn vàng).'
      },
      {
        title: 'Tập Trung',
        content: 'Áp dụng kiến thức về lý thuyết màu sắc, hòa sắc, và cách ánh sáng ảnh hưởng đến màu sắc để tạo ra một tác phẩm sống động và hài hòa.'
      }
    ]
  },
  // MODULE 5: KỶ NGUYÊN SỐ & SÁNG TẠO (81-100)
  {
    id: 81,
    title: 'Nhập Môn Vẽ Kỹ Thuật Số',
    summary: 'Bước chân vào nghệ thuật số với các công cụ và kỹ thuật cơ bản.',
    icon: '💻',
    steps: [
      {
        title: 'Phần Cứng và Phần Mềm',
        content: 'Bạn có thể bắt đầu với một bảng vẽ điện tử (drawing tablet) và một phần mềm vẽ miễn phí như Krita hoặc trả phí như Procreate (iPad) hay Photoshop (máy tính).'
      },
      {
        title: 'Làm Quen Giao Diện',
        content: 'Tìm hiểu các công cụ cơ bản: bút vẽ, tẩy, công cụ chọn vùng, và bảng màu. Đừng ngại thử nghiệm tất cả các tính năng.'
      }
    ]
  },
  {
    id: 82,
    title: 'Làm Chủ Layers và Mặt Nạ',
    summary: 'Hiểu hai khái niệm quan trọng nhất giúp bạn vẽ kỹ thuật số một cách linh hoạt.',
    icon: '📑',
    steps: [
      {
        title: 'Layers (Lớp)',
        content: 'Giống như những tờ giấy trong suốt xếp chồng lên nhau. Bạn có thể vẽ nét ở một layer, tô màu ở layer khác, và vẽ bóng ở một layer khác nữa, giúp việc chỉnh sửa trở nên dễ dàng.'
      },
      {
        title: 'Mặt Nạ (Masks)',
        content: 'Cho phép bạn che hoặc hiện một phần của layer mà không cần phải xóa vĩnh viễn. Đây là một công cụ cực kỳ mạnh mẽ để chỉnh sửa và pha trộn.'
      }
    ]
  },
  {
    id: 83,
    title: 'Tùy Chỉnh Brush và Texture',
    summary: 'Khám phá thế giới vô tận của các loại cọ vẽ kỹ thuật số và tạo ra bộ cọ của riêng bạn.',
    icon: '🖌️',
    steps: [
      {
        title: 'Các Loại Cọ',
        content: 'Làm quen với các loại cọ cơ bản: cọ tròn cứng để đi nét, cọ mềm để tô màu và đổ bóng, và các cọ có texture để tạo chất liệu.'
      },
      {
        title: 'Tùy Chỉnh Cọ',
        content: 'Hầu hết các phần mềm đều cho phép bạn tùy chỉnh các thiết lập của cọ như độ cứng, khoảng cách, và phản ứng với lực nhấn. Bạn cũng có thể tạo ra các cọ mới từ hình ảnh hoặc texture.'
      }
    ]
  },
  {
    id: 84,
    title: 'Chế Độ Hòa Trộn (Blending Modes)',
    summary: 'Sử dụng các chế độ hòa trộn của layer để tạo ra các hiệu ứng ánh sáng, bóng đổ và màu sắc phức tạp.',
    icon: '🔄',
    steps: [
      {
        title: 'Các Chế Độ Phổ Biến',
        content: 'Multiply: làm tối và tạo bóng. Screen: làm sáng và tạo highlight. Overlay: tăng độ tương phản. Color: áp dụng màu của layer trên lên giá trị sáng tối của layer dưới.'
      },
      {
        title: 'Thử Nghiệm',
        content: 'Cách tốt nhất để học các chế độ hòa trộn là thử nghiệm chúng. Tạo hai layer với màu sắc khác nhau và xem điều gì xảy ra khi bạn thay đổi chế độ hòa trộn của layer trên cùng.'
      }
    ]
  },
  {
    id: 85,
    title: 'Tô Màu Cho Tranh Chì',
    summary: 'Học cách kết hợp nghệ thuật truyền thống và kỹ thuật số bằng cách tô màu cho bức vẽ chì của bạn.',
    icon: '🎨',
    steps: [
      {
        title: 'Scan và Chuẩn Bị',
        content: 'Scan hoặc chụp lại bức vẽ chì của bạn ở độ phân giải cao. Trong phần mềm vẽ, làm sạch và tăng độ tương phản của lớp nét vẽ.'
      },
      {
        title: 'Sử Dụng Multiply',
        content: 'Đặt layer nét vẽ của bạn ở chế độ hòa trộn Multiply. Điều này sẽ làm cho các vùng trắng của layer trở nên trong suốt, cho phép bạn tô màu trên các layer bên dưới mà không làm mất đi nét vẽ.'
      }
    ]
  },
  {
    id: 86,
    title: 'Ánh Sáng Nâng Cao: Ánh Sáng Rìa, Ánh Sáng Nảy',
    summary: 'Tạo ra những bức tranh có chiều sâu và không khí hơn với các kỹ thuật chiếu sáng phức tạp.',
    icon: '🌟',
    steps: [
      {
        title: 'Ánh Sáng Rìa (Rim Light)',
        content: 'Là một nguồn sáng mạnh từ phía sau, tạo ra một viền sáng xung quanh chủ thể, giúp tách chủ thể ra khỏi nền.'
      },
      {
        title: 'Ánh Sáng Nảy (Bounce Light)',
        content: 'Là ánh sáng từ nguồn sáng chính dội lại từ các bề mặt xung quanh (ví dụ: mặt đất, tường) và chiếu sáng nhẹ vào các vùng tối của chủ thể.'
      }
    ]
  },
  {
    id: 87,
    title: 'Kể Chuyện Bằng Hình Ảnh',
    summary: 'Học cách sử dụng bố cục, nhân vật và bối cảnh để kể một câu chuyện.',
    icon: '📖',
    steps: [
      {
        title: 'Bố Cục Kể Chuyện',
        content: 'Sử dụng các quy tắc bố cục để dẫn dắt mắt người xem qua câu chuyện. Đặt các yếu tố quan trọng ở đâu? Cái gì được thể hiện to, cái gì nhỏ?'
      },
      {
        title: 'Ngôn Ngữ Hình Ảnh',
        content: 'Màu sắc, ánh sáng, và ngôn ngữ cơ thể của nhân vật đều là những công cụ để bạn kể câu chuyện của mình mà không cần đến lời thoại.'
      }
    ]
  },
  {
    id: 88,
    title: 'Nhập Môn Thiết Kế Môi Trường',
    summary: 'Tạo ra những thế giới và bối cảnh đáng tin cậy cho các nhân vật của bạn.',
    icon: '🏰',
    steps: [
      {
        title: 'Nghiên Cứu và Thu Thập Tham Khảo',
        content: 'Trước khi vẽ, hãy thu thập hình ảnh tham khảo về kiến trúc, thiên nhiên, và các vật thể liên quan đến thế giới bạn muốn tạo ra.'
      },
      {
        title: 'Kể Chuyện Qua Môi Trường',
        content: 'Một môi trường tốt không chỉ đẹp mà còn kể một câu chuyện. Một tòa lâu đài đổ nát và một tòa lâu đài tráng lệ kể hai câu chuyện hoàn toàn khác nhau.'
      }
    ]
  },
  {
    id: 89,
    title: 'Vẽ Theo Trí Tưởng Tượng',
    summary: 'Giải phóng sức sáng tạo và vẽ những gì bạn nghĩ ra.',
    icon: '🚀',
    steps: [
      {
        title: 'Xây Dựng "Thư Viện Hình Ảnh" Trong Đầu',
        content: 'Bạn càng vẽ nhiều từ thực tế, "thư viện" hình ảnh trong đầu bạn càng lớn. Điều này sẽ giúp bạn vẽ theo trí tưởng tượng một cách dễ dàng và đáng tin cậy hơn.'
      },
      {
        title: 'Thumbnails Sketching',
        content: 'Vẽ nhiều phác thảo nhỏ (thumbnail) để khám phá các bố cục và ý tưởng khác nhau một cách nhanh chóng trước khi bắt tay vào tác phẩm chính.'
      }
    ]
  },
  {
    id: 90,
    title: 'Sáng Tạo Sinh Vật',
    summary: 'Thiết kế những sinh vật độc đáo bằng cách kết hợp các yếu tố từ thế giới thực.',
    icon: '🐉',
    steps: [
      {
        title: 'Kết Hợp và Biến Đổi',
        content: 'Lấy các đặc điểm từ các loài động vật khác nhau và kết hợp chúng lại. Điều gì sẽ xảy ra nếu một con hổ có cánh của đại bàng và vảy của cá?'
      },
      {
        title: 'Giải Phẫu Hợp Lý',
        content: 'Ngay cả những sinh vật kỳ lạ nhất cũng cần có một cấu trúc giải phẫu hợp lý để trông đáng tin. Hãy nghĩ về cách nó di chuyển, ăn uống và sống sót.'
      }
    ]
  },
  {
    id: 91,
    title: 'Phát Triển Phong Cách Cá Nhân',
    summary: 'Tìm hiểu cách khám phá và nuôi dưỡng tiếng nói nghệ thuật độc đáo của bạn.',
    icon: '🧑‍🎨',
    steps: [
      {
        title: 'Học Hỏi, Đừng Sao Chép',
        content: 'Phân tích tác phẩm của các họa sĩ bạn yêu thích. Bạn thích gì ở họ? Cách họ sử dụng màu sắc, đường nét hay bố cục? Hãy học hỏi, nhưng đừng sao chép y hệt.'
      },
      {
        title: 'Sự Nhất Quán và Luyện Tập',
        content: 'Vẽ thật nhiều. Theo thời gian, bạn sẽ nhận thấy những lựa chọn và xu hướng nhất quán trong các tác phẩm của mình. Đó chính là phong cách của bạn đang dần hình thành.'
      }
    ]
  },
  {
    id: 92,
    title: 'Vượt Qua Khủng Hoảng Sáng Tạo',
    summary: 'Các chiến lược để đối phó với "artist\'s block" và tìm lại nguồn cảm hứng.',
    icon: '🧠',
    steps: [
      {
        title: 'Thay Đổi Môi Trường',
        content: 'Thử vẽ ở một nơi khác, sử dụng một chất liệu mới, hoặc vẽ một chủ đề bạn chưa bao giờ thử. Sự thay đổi có thể kích thích sự sáng tạo.'
      },
      {
        title: 'Vẽ Mà không Phán Xét',
        content: 'Cho phép bản thân vẽ những thứ "xấu xí". Mục đích là để khởi động lại động cơ sáng tạo, không phải để tạo ra một kiệt tác.'
      }
    ]
  },
  {
    id: 93,
    title: 'Thói Quen Vẽ Hàng Ngày',
    summary: 'Xây dựng kỷ luật và cải thiện kỹ năng một cách nhanh chóng thông qua việc luyện tập đều đặn.',
    icon: '🗓️',
    steps: [
      {
        title: 'Bắt Đầu Nhỏ',
        content: 'Bạn không cần phải vẽ hàng giờ mỗi ngày. Bắt đầu với 15-30 phút. Sự đều đặn quan trọng hơn thời lượng.'
      },
      {
        title: 'Luôn Mang Theo Sổ Tay',
        content: 'Tập thói quen mang theo một cuốn sổ nhỏ và bút. Tận dụng những khoảng thời gian rảnh rỗi để ký họa mọi thứ xung quanh bạn.'
      }
    ]
  },
  {
    id: 94,
    title: 'Phân Tích và Tự Phê Bình',
    summary: 'Học cách nhìn nhận tác phẩm của mình một cách khách quan để tìm ra điểm mạnh và điểm cần cải thiện.',
    icon: '🔍',
    steps: [
      {
        title: 'Đặt Câu Hỏi',
        content: 'Sau khi hoàn thành một tác phẩm, hãy tự hỏi: Bố cục đã tốt chưa? Giá trị sáng tối có rõ ràng không? Màu sắc có hài hòa không? Tôi thích nhất điểm nào và không thích điểm nào?'
      },
      {
        title: 'Nghỉ Ngơi',
        content: 'Để tác phẩm của bạn sang một bên vài ngày rồi quay lại xem. Một cái nhìn mới mẻ sẽ giúp bạn nhận ra những điều bạn không thấy trước đó.'
      }
    ]
  },
  {
    id: 95,
    title: 'Xây Dựng Portfolio',
    summary: 'Hướng dẫn chọn lọc những tác phẩm tốt nhất và trình bày chúng một cách chuyên nghiệp.',
    icon: '📂',
    steps: [
      {
        title: 'Chất Lượng Hơn Số Lượng',
        content: 'Chọn khoảng 10-15 tác phẩm tốt nhất và đa dạng nhất của bạn. Một portfolio mạnh chỉ bao gồm những tác phẩm bạn tự hào nhất.'
      },
      {
        title: 'Thể Hiện Kỹ Năng',
        content: 'Portfolio của bạn nên thể hiện được sự am hiểu về các nguyên tắc cơ bản (giải phẫu, phối cảnh, màu sắc) cũng như phong cách cá nhân của bạn.'
      }
    ]
  },
  {
    id: 96,
    title: 'Giới Thiệu Tác Phẩm Trực Tuyến',
    summary: 'Sử dụng mạng xã hội và các nền tảng nghệ thuật để chia sẻ tác phẩm của bạn với thế giới.',
    icon: '🌐',
    steps: [
      {
        title: 'Chọn Nền Tảng',
        content: 'Các nền tảng như Instagram, Behance, ArtStation rất phổ biến trong cộng đồng nghệ thuật. Chọn nền tảng phù hợp với loại hình nghệ thuật của bạn.'
      },
      {
        title: 'Chụp Ảnh Tác Phẩm',
        content: 'Học cách chụp ảnh tác phẩm của bạn một cách chuyên nghiệp với ánh sáng tốt và màu sắc chính xác. Đây là bước rất quan trọng.'
      }
    ]
  },
  {
    id: 97,
    title: 'Tìm Kiếm Nguồn Cảm Hứng',
    summary: 'Nuôi dưỡng sự sáng tạo của bạn bằng cách tìm kiếm cảm hứng từ nhiều nguồn khác nhau.',
    icon: '💡',
    steps: [
      {
        title: 'Vượt Ra Ngoài Nghệ Thuật',
        content: 'Nguồn cảm hứng có thể đến từ phim ảnh, âm nhạc, sách, thiên nhiên, khoa học, lịch sử. Hãy luôn tò mò và học hỏi.'
      },
      {
        title: 'Tạo Một "Mood Board"',
        content: 'Thu thập những hình ảnh, màu sắc, và ý tưởng bạn yêu thích vào một nơi (có thể là một thư mục trên máy tính hoặc một cuốn sổ). Đây là một công cụ tuyệt vời để khởi động các dự án mới.'
      }
    ]
  },
  {
    id: 98,
    title: 'Tham Gia Cộng Đồng Nghệ Thuật',
    summary: 'Kết nối, học hỏi và nhận phản hồi từ các họa sĩ khác.',
    icon: '🤝',
    steps: [
      {
        title: 'Trực Tuyến và Trực Tiếp',
        content: 'Tham gia các diễn đàn nghệ thuật trực tuyến, các nhóm trên mạng xã hội, hoặc các lớp học vẽ và workshop tại địa phương.'
      },
      {
        title: 'Đưa và Nhận Phản Hồi',
        content: 'Học cách đưa ra những lời phê bình mang tính xây dựng và cởi mở đón nhận phản hồi về tác phẩm của mình. Đây là cách tốt nhất để phát triển.'
      }
    ]
  },
  {
    id: 99,
    title: 'Chuẩn Bị Cho Dự Án Lớn',
    summary: 'Các bước để lên kế hoạch và thực hiện một tác phẩm hoặc một series tác phẩm phức tạp.',
    icon: '🗺️',
    steps: [
      {
        title: 'Nghiên Cứu và Lên Ý Tưởng',
        content: 'Xác định rõ chủ đề và thông điệp của bạn. Thu thập tài liệu tham khảo và vẽ nhiều phác thảo nhỏ (thumbnails).'
      },
      {
        title: 'Chia Nhỏ Công Việc',
        content: 'Chia dự án lớn thành các bước nhỏ hơn và dễ quản lý hơn: phác thảo chi tiết, vẽ nét, tô màu nền, tô màu chủ thể, hoàn thiện. Điều này giúp bạn không bị choáng ngợp.'
      }
    ]
  },
  {
    id: 100,
    title: 'Dự Án Tốt Nghiệp: Tác Phẩm Tự Do',
    summary: 'Áp dụng tất cả những gì đã học để tạo ra một tác phẩm thể hiện rõ nhất con người và kỹ năng của bạn.',
    icon: '🎓',
    steps: [
      {
        title: 'Thể Hiện Bản Thân',
        content: 'Chọn một chủ đề mà bạn thực sự đam mê. Đây là cơ hội để bạn kể câu chuyện của riêng mình qua nghệ thuật.'
      },
      {
        title: 'Đẩy Giới Hạn',
        content: 'Đừng ngại thử một kỹ thuật mới hoặc một quy mô lớn hơn bạn thường làm. Hãy biến đây thành tác phẩm tốt nhất của bạn từ trước đến nay.'
      },
      {
        title: 'Chúc Mừng!',
        content: 'Bạn đã hoàn thành một hành trình dài và đầy thử thách. Đây không phải là điểm kết thúc, mà là một sự khởi đầu mới cho con đường nghệ thuật của bạn. Hãy tiếp tục vẽ và sáng tạo!'
      }
    ]
  }
];
