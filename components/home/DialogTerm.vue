<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="565">
      <v-card>
        <v-card-title class="header-dialog-red lighten-2 dialog-custom">
          <v-col cols="12" class="dialog-custom-col text-right">
            <v-btn
              icon
              light
              @click="$emit('update:dialog', false)"
              class="btn-close-dialog"
            >
              ×
            </v-btn>
          </v-col>
        </v-card-title>

        <v-card-text>
          <div class="dialog-custom-content content-term">
            <div class="form-group">
              <div id="homeDivModalDieukhoanBodyText">
                <meta
                  http-equiv="Content-Type"
                  content="text/html; charset=UTF-8"
                />

                <link
                  type="text/css"
                  rel="stylesheet"
                  href="/momo_v2/static/css/ui/roboto.css"
                />

                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-align: center;
                    font-size: 13pt;
                  "
                >
                  <strong
                    ><span
                      style="
                        font-family: 'Times New Roman';
                        letter-spacing: -0.5pt;
                      "
                      >ĐIỀU KHOẢN SỬ DỤNG</span
                    ></strong
                  >
                </p>
                <p style="margin-top: 6pt; margin-bottom: 6pt; font-size: 10pt">
                  <span style="font-family: 'Times New Roman'">&nbsp;</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Người dùng&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">vui</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;lòng đọc kỹ Điều khoản sử dụng ("Điều khoản") trước
                    khi tiến hành&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >sử dụng dịch vụ của</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;LuckyBest</span
                  ><span style="font-family: 'Times New Roman'">.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Người dùng</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;chấp thuận và đồng ý bị ràng buộc bởi các quy định và
                    điều kiện trong Điều khoản này khi thực hiện các thao tác
                    trên đây. Trường hợp&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Người dùng</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;không đồng ý với bất kỳ điều khoản sử dụng nào của
                    LuckyBest (phiên bản này và các phiên bản cập
                    nhật)&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >vui lòng thoát khỏi ứng dụng và ngưng sử dụng dịch
                    vụ.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span>
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Giới</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >thiệu về&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">dịch vụ</span>
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">1.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng có thể lựa chọn các bộ số (vé số Vietlott) theo
                    ý muốn của mình thông qua</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;dịch vụ mua hộ vé số của</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;LuckyBest, sau khi Người dùng xác nhận, LuckyBest sẽ
                    chuyển thông tin đơn hàng tới điểm bán Vietlott phù hợp
                    nhất, điểm bán sẽ in vé và&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >bàn giao chiếc vé của Người dùng cho LuckyBest bảo quản,
                    lưu trữ</span
                  ><span style="font-family: 'Times New Roman'">.</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">1.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Vé số mà người dùng lựa chọn đặt mua sẽ được</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;LuckyBest&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >lưu giữ và bảo quản</span
                  ><span style="font-family: 'Times New Roman'"
                    >, vé đã mua được ghi thông tin cá nhân của Người dùng vào
                    mặt sau và được chụp hình gửi tới Người dùng để xác định
                    quyền sở hữu (chi tiết theo Điều&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">5</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;Điều khoản này).</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">1.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trường hợp bộ số mà Người dùng lựa chọn trúng thưởng,
                    LuckyBest sẽ tự động trả thưởng và thông báo tới người dùng
                    ngay sau khi có kết quả quay số mở thưởng từ
                    Vietlott.&nbsp;</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">1.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest cung cấp những số liệu thống kê giúp Người dùng
                    có thêm cơ sở để lựa chọn các bộ số của mình.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">1.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest cung cấp dịch vụ mua hộ vé số. Dịch vụ của
                    LuckyBest là nhằm kết nối Người dùng (Người có nhu cầu mua
                    vé số), với Người cung cấp (các Công ty Xổ Số, Đại lý Xổ Số,
                    các Đơn vị, Cá nhân được phép kinh doanh Xổ Số theo quy định
                    của Pháp luật). LuckyBest không dự định trở thành Người cung
                    cấp vé số hay thực hiện các hoạt động nào có thể được xem là
                    hoạt động của Người cung cấp vé số. Việc cung cấp vé</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >số cho Người dùng là tùy thuộc vào quyết định của Người
                    cung cấp và việc sử dụng dịch vụ đó là thuộc quyền quyết
                    định của Người dùng.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Quy</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >định chung</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Người</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;dùng khi sử dụng</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;dịch vụ mua hộ vé số của</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;LuckyBest phải đáp ứng đầy đủ các điều kiện quy định
                    sau:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">2.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Là công dân Việt Nam, người Việt Nam định cư ở nước ngoài
                    hoặc người nước ngoài nhập cảnh hợp pháp vào Việt Nam;</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">2.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Là người từ đủ 18 tuổi trở lên;</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">2.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Không phải</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >là người bị hạn chế về năng lực hành vi dân sự hoặc mất
                    năng lực hành vi dân sự theo quy định của pháp luật.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quy trình mua vé</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Người dùng khi sử dụng dịch vụ mua hộ vé số của LuckyBest
                    để tham gia dự thưởng xổ</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >số điện toán tự</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >chọn sẽ tuân thủ đầy đủ theo quy trình mua vé của LuckyBest
                    như sau:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Quy</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">trình</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;mua vé:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng lựa chọn vé mua qua LuckyBest, lựa chọn các
                    thông tin về vé mua như:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.1.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Loại vé chơi (Power 6/55, Mega 6/45, Max4D, Max3D/3D+,
                    Keno).</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.1.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Loại hình chơi (Vé thường, vé bao – Power 6/55, Mega 6/45;
                    Vé thường, vé tổ hợp, vé bao, vé cuộn - Max 4D; Vé thường,
                    vé đảo số, vé ôm vị trí, vé ôm dãy số - Max3D/3D+, nhóm mua
                    chung.....)</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.1.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Kỳ quay số mở thưởng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.1.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Giá tiền .</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.1.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Sau khi lựa chọn xong vé cần mua, Người dùng cung cấp thông
                    tin cá nhân đảm bảo tính sở hữu với vé mua của mình (Họ và
                    tên, số điện thoại, số CMND/CCCD) và thực hiện thanh toán
                    cho những chiếc vé mình đã chọn.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với cách chơi Nhóm Mua Chung:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Nhóm Bao Chung: Người dùng tiến hành chọn sản phẩm cần Mua
                    Chung, chọn bộ số và cổ phần tham gia đóng góp. Dựa vào bộ
                    số và giá trị cổ phần người dùng đã tham gia đóng góp mà hệ
                    thống của LuckyBest sẽ tự động tính toán để chọn ra bộ số
                    tham gia dự thưởng dựa trên tỉ trọng của từng số đã được
                    người dùng lựa chọn. Khách hàng có thể tham gia góp cổ phần
                    nhiều lần trong cùng một nhóm đến khi nhóm hoàn thành
                    100%.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.1.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trường hợp các số đề cử có tỷ trọng bằng nhau, hệ thống sẽ
                    ưu tiên lựa chọn số có nhiều người lựa chọn hơn, nếu số
                    người lựa chọn bằng nhau sẽ ưu tiên lựa chọn số được để cử
                    trước.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.1.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trường hợp nếu các số đề cử có tỷ trọng bằng nhau, số người
                    đề cử bằng nhau, thời gian đề cử bằng nhau thì hệ thống của
                    LuckyBest sẽ lựa chọn ngẫu nhiên một số trong các số này để
                    làm số dự thưởng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.1.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trường hợp đặc biệt nếu số lượng các số đề cử chưa đủ để
                    tạo thành bộ số tham gia dự thưởng thì hệ thống của
                    LuckyBest sẽ lựa chọn ngẫu nhiên các số còn lại, số lượng
                    tương đương với số lượng còn thiếu để kết hợp với các số
                    Người dùng để cử tạo thành bộ số dự thưởng hoàn chỉnh.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.2.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Nhóm góp vé: Hệ thống của LuckyBest sẽ tạo ra các nhóm theo
                    từng sản phẩm, từng kỳ quay cụ thể để những Người dùng khác
                    có thể tham gia. Tại các nhóm này Người dùng có thể đóng góp
                    bất kỳ chiếc vé nào mà Người dùng có, vé mà người dùng đóng
                    góp phải đúng sản phẩm và đúng kỳ quay theo tiêu chí Nhóm mà
                    LuckyBest tạo ra. Cổ phần của Người dùng được xác định bằng
                    tổng giá trị vé đã góp chia cho tổng giá trị vé của nhóm.
                    Khách hàng có thể tham gia góp vé nhiều lần để tăng cổ phần
                    trong một nhóm đến khi nhóm ngừng nhận góp vé.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Quy</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >trình&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">mua</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;vé được xác nhận là thành công khi và chỉ khi Người
                    dùng</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">đã</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >nhận được hình ảnh của vé có ghi đầy đủ thông tin và
                    không</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >có phản hồi Báo lỗi vé như quy định tại</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Điều 5</span
                  ><span style="font-family: 'Times New Roman'">:</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quy định về in vé, ghi thông tin và gửi hình ảnh của
                    vé</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >của Điều khoản chính sách này.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Đối</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">với</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >những đơn hàng không thành công, LuckyBest sẽ có nghĩa vụ
                    và trách nhiệm gửi thông báo và</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >thực hiện hoàn tiền (chậm nhất sau 05 ngày làm việc) theo
                    giá trị đơn hàng cho Người dùng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Các trạng thái đơn hàng ghi nhận trên hệ thống:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.5.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Đang chờ</span
                    ></strong
                  ><span style="font-family: 'Times New Roman'"
                    >: Yêu cầu đặt vé đã được hệ thống đã ghi nhận và gửi đến
                    ĐBH phù hợp nhất để xử lý in vé. Ở trạng thái này đơn hàng
                    của người dùng được tính là chưa xử</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >lý thành công.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.5.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Đã mua</span
                    ></strong
                  ><span style="font-family: 'Times New Roman'"
                    >: Yêu cầu đặt vé đã được xử lý thành công và Khách hàng
                    nhận được hình ảnh vé đã in tại mục Lịch sử mua vé. Trường
                    hợp Khách hàng có nhu cầu nhận vé qua email, Khách hàng cập
                    nhật thông tin email tại bước Đặt vé.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.5.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Đã hủy</span
                    ></strong
                  ><span style="font-family: 'Times New Roman'"
                    >: Yêu cầu đặt vé của khách hàng gặp phải một số vấn đề lỗi
                    dẫn đến không được ghi nhận hoặc ghi nhận không thành công
                    trên hệ thống LuckyBest. Đối với các trường hợp này, khách
                    hàng sẽ được LuckyBest hoàn lại tiền trong trong thời gian
                    sớm nhất.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">3.6.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trong suốt quá trình mua vé và nhận thưởng, Người dùng phải
                    tuân thủ đầy đủ các Quy định về thanh toán; về vận chuyển và
                    giao vé; về in vé, ghi thông tin và gửi hình ảnh vé; về trả
                    thưởng như các Quy định dưới đây.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quy định về thanh toán</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng sẽ sử dụng trực tiếp số tiền trong ví điện tử để
                    thanh toán cho đơn hàng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng thanh toán giá trị đơn hàng, bao
                    gồm:&nbsp;</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.2.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Giá trị của các bộ số Vietlott (được bán đúng với giá niêm
                    yết theo quy định của Vietlott và Bộ tài chính);</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.2.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Phí chuyển tiền hoặc (và) phí dịch vụ của Ví điện tử;</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.2.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Các chi phí</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;khác (nếu có) theo quy định của LuckyBest.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">4.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đơn hàng sau khi thanh toán và được xác nhận là xử lý thành
                    công khi và chỉ khi: Khách hàng nhận được hình ảnh của vé có
                    ghi đầy đủ thông tin theo quy định tại Điều 5 của Điều khoản
                    này.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  >
                  <a name="_Quy_định_về"></a
                  ><span style="font-family: 'Times New Roman'"
                    >Quy định về in vé, ghi thông tin và gửi hình ảnh vé</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với các vé tham gia dự thưởng các kỳ quay số có giá trị
                    giải thưởng trên 10 tỷ đồng (Mega 6/45; Power 6/55), vé sau
                    khi được in ra sẽ được ghi các thông tin: Mã đơn hàng, Họ và
                    tên, CMND/CCCD/Hộ chiếu của Người dùng lên mặt sau của vé và
                    gửi hình ảnh chi tiết cả hai mặt chiếc vé trong phần lịch sử
                    đặt mua và Email mà Người dùng đã đăng ký.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với các vé tham gia dự thưởng các kỳ quay số có các
                    giải thưởng dưới 10 tỷ đồng (Max4D, Max3D/3D+, Keno), vé sau
                    khi được in ra sẽ được ghi các thông tin: Mã đơn hàng lên
                    mặt sau của vé và gửi hình ảnh mặt trước của chiếc vé trong
                    phần lịch sử đặt mua và Email mà Người dùng đã đăng
                    ký.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với nhóm Mua Chung, do đặc thù của vé thuộc sở hữu của
                    nhiều người chơi nên mặt sau của chiếc vé chỉ ghi mã của
                    nhóm, LuckyBest chỉ gửi hình ảnh mặt trước của vé đến nhóm
                    đã tham gia mua chiếc vé đó.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Sau khi nhận được hình ảnh chiếc vé</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;vật lý</span
                  ><span style="font-family: 'Times New Roman'"
                    >, Người dùng&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >cần kiểm tra kỹ lưỡng</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >các thông tin trên vé, trong trường hợp phát hiện sai
                    sót</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">cần</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">sử</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >dụng chức năng Báo lỗi vé&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >(trước khi quay thưởng đối với sản phẩm Keno và/hoặc trong
                    vòng 10 phút đối với sản phẩm quay thưởng 01 lần trong
                    ngày)</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;để LuckyBest xử lý.</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;Nếu không có sự phản hồi nào của Người dùng đến
                    LuckyBest thì mặc định các thông tin trên vé</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">vật lý</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >được xác nhận là chính xác, và</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >là sự lựa chọn cuối cùng của Người dùng</span
                  ><span style="font-family: 'Times New Roman'">.</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Chiếc vé vật lý được in ra, ghi thông tin, chụp ảnh gửi
                    Người dùng và được xác nhận là chính xác về mặt thông tin là
                    chứng từ duy nhất có giá trị pháp lý để Người dùng so thưởng
                    và nhận thưởng.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">5.6.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Không phụ thuộc vào các điều khoản tại quy định này, quyết
                    định của LuckyBest là quyết định cuối cùng.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 6.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quy định về hoàn tiền và hủy vé</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Trong các trường hợp sau, vé do Người dùng đặt mua sẽ được
                    hủy và hoàn tiền (Chậm nhất sau 5 ngày làm việc):</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">6.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với sản phẩm Keno: Một phút trước khi quay thưởng, nếu
                    đơn hàng của khách hàng vẫn ở trong mục đang chờ và khách
                    hàng vẫn chưa nhận được hình ảnh vé đặt mua thì hệ thống của
                    LuckyBest sẽ tự động hủy đơn hàng và tiến hành hoàn tiền cho
                    khách hàng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">6.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với vé thuộc nhóm Bao Chung, khi hết thời gian tham gia
                    góp cổ phần mà nhóm vẫn chưa hoàn thành 100% thì LuckyBest
                    tiến hành hủy nhóm và hoàn tiền lại cho những Người dùng đã
                    tham gia góp cổ phần .</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">6.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Bộ số mà Người dùng đặt mua đã hết ( Max4D, max3D+).</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">6.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Vé đã in, ghi thông tin và chụp ảnh gửi đến Người dùng nhận
                    được phản hồi từ Người dùng có sự sai sót thông tin (ngoại
                    trừ sản phẩm Keno).</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">6.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Vé mà Người dùng đặt mua vì những lý do bất khả kháng</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >(ví dụ: Hệ thống gặp sự cố về đường truyền)</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >mà LuckyBest không kịp ghi thông tin và chụp ảnh gửi đến
                    Người dùng.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 7.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quy định về trả thưởng</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Hệ thống của LuckyBest sẽ tự động cập nhật kết quả quay số
                    mở thưởng của Vietlott để tính thưởng cho Khách hàng, trong
                    trường hợp hệ thống cập nhật sai hoặc nhầm lẫn thì kết quả
                    quay số mở thưởng được công bố trên website chính thức của
                    Vietlott sẽ là căn cứ để tính thưởng. LuckyBest có trách
                    nhiệm trả thưởng bổ sung và/hoặc có quyền thu hồi lại số
                    tiền đã chi thưởng sai cho Khách hàng sau khi cập nhật lại
                    kết quả từ Vietlott.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Theo</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >quy định của Vietlott, Đại lý cấp 1 và các điểm bán trong
                    hệ thống được Vietlott uỷ quyền trả thưởng cho Người dùng
                    đối với các giải thưởng có giá trị từ 10 tỷ đồng trở xuống.
                    Để thuận tiện cho Người dùng, LuckyBest sẽ chủ động ứng tiền
                    trúng thưởng trước cho Người dùng trước, sau đó nộp vé trúng
                    thưởng và thanh toán với các Đại lý cấp 1 trong thời gian
                    không quá 5 ngày làm việc.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Theo đó, khi trúng thưởng, toàn bộ tiền thưởng sẽ được
                    chuyển một lần vào Tài khoản ví điện tử của Người dùng hoặc
                    được chia nhỏ thành nhiều lần chuyển (Tùy thuộc vào qui định
                    về hạn mức nhận tiền/ ngày của từng ví điện tử), sau khi
                    khấu trừ thuế thu nhập cá nhân.&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Mức phí chuyển tiền vào ví điện tử theo quy định của từng
                    ví điện tử mà Người dùng đang sử dụng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 74.7pt;
                    margin-bottom: 6pt;
                    text-indent: -18pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: Arial">-</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với vé trúng thưởng trên 50,000,000đ: Theo quy định của
                    Vielott và Đại lý</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">cấp</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">1</span
                  ><span style="font-family: 'Times New Roman'"
                    >, không quá 60 ngày kể từ ngày trúng thưởng, Người dùng cần
                    cung cấp cho LuckyBest các thông tin sau để làm thủ tục nhận
                    thưởng: CMND/CCCD/Hộ chiếu, Hộ khẩu.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 74.7pt;
                    margin-bottom: 6pt;
                    text-indent: -18pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: Arial">-</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với vé trúng thưởng trên 10 tỷ, người trúng thưởng phải
                    đến trụ sở của LuckyBest (mang theo CMND/CCCD/Hộ chiếu, Hộ
                    khẩu) để nhận lại vé trúng thưởng. LuckyBest sẽ hỗ trợ người
                    trúng thưởng hoàn thiện hồ sơ &amp; thủ tục nhận thưởng theo
                    quy định của Vietlott và Đại lý cấp</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">1</span
                  ><span style="font-family: 'Times New Roman'">.</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Đối với các vé trúng thưởng thuộc nhóm Mua Chung, do đặc
                    thù của vé thuộc sở hữu của nhiều người chơi nên LuckyBest
                    sẽ là đơn vị đại diện cho nhóm để lĩnh thưởng. Sau khi trừ
                    thuế theo quy định, số tiền trúng thưởng sẽ được chia cho
                    các thành viên trong nhóm đã mua chiếc vé trúng thưởng đó
                    dựa trên cổ phần mà từng thành viên đã đóng góp.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Thời gian nhận thưởng: không quá 05 ngày làm việc kể từ khi
                    LuckyBest nhận được yêu cầu và thông tin chuyển tiền của
                    Người dùng (đối với trường hợp Người dùng trúng thưởng từ
                    trên 50 triệu tới 10 tỷ đồng thì thời gian bắt đầu được tính
                    khi nhận được đầy đủ các giấy tờ xác minh của Người
                    dùng).</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">7.6.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Do vé của Người dùng được LuckyBest bảo quản và giữ hộ nên
                    để đảm bảo quyền lợi cho LuckyBest và Người dùng, LuckyBest
                    quyết định không công bố toàn vẹn mã vạch và serial của vé
                    số mà che đi một phần mã vạch, serial của vé số khi chụp ảnh
                    gửi lại cho Người dùng.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 8.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Giới hạn trách nhiệm</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng đồng ý bảo vệ, bồi thường và giữ cho LuckyBest
                    và các công ty liên kết của LuckyBest không bị tổn hại bởi
                    bất kỳ khiếu nại, chi phí, phán quyết của toà án, bao gồm
                    nhưng không giới hạn phí luật sư, liên quan đến hoặc phát
                    sinh từ việc vi phạm điều khoản sử dụng hoặc bất kỳ sự sử
                    dụng của Người dùng, hoặc bất kỳ người nào khác sử dụng dịnh
                    vụ thông qua Người dùng, hoặc sử dụng điện thoại, máy tính
                    của Người dùng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng đồng ý cho phép LuckyBest sử dụng dữ liệu cá
                    nhân của mình (Bao gồm Họ tên, số điện thoại) và chuyển giao
                    những dữ liệu này đến Người cung cấp phục vụ cho mục đích
                    cung cấp dịch vụ. Người dùng đồng thời cũng cho phép
                    LuckyBest được tự do chuẩn bị, thu thập, lưu trữ và cập nhật
                    dữ liệu cá nhân trong phạm vi và thời gian cần thiết trong
                    quá trình LuckyBest cung cấp dịch vụ ứng dụng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng đồng ý và chấp nhận rằng việc chuẩn bị, thu
                    thập, lưu trữ, sử dụng và truyền tải dữ liệu cá nhân của
                    mình của LuckyBest là tuân theo Chính sách Bảo mật và Thu
                    thập Dữ liệu Cá Nhân (Chính sách Bảo mật) được công bố và
                    cập nhật định kì tại Điều khoản sử dụng này. Người dùng cũng
                    chấp nhận đọc và hiểu rõ Chính sách Bảo mật trước khi đồng ý
                    với các Điều kiện sử dụng.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.4.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest có thể điều chỉnh các Điều kiện sử dụng nói trên
                    tùy theo thời gian mà không cần thông báo trước.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Trong việc cung cấp dịch vụ mua hộ vé số của LuckyBest,
                    LuckyBest không hoạt động như một đại lý hoặc đại diện cho
                    Người dùng hay Người cung cấp.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">8.6.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng chấp nhận một cách đầy đủ và vô điều kiện nội
                    dung hiện hành của các Điều kiện sử dụng cho từng lần sử
                    dụng dịch vụ.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 9.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Chính sách bảo mật</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Dịch vụ</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >mua hộ vé số của LuckyBest và trang web</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >công ty (gồm cả nền tảng website, mobile website),</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >sau đây gọi chung là “LuckyBest”, cam kết sẽ bảo mật những
                    thông tin mang tính riêng tư của Người dùng. Quý khách vui
                    lòng đọc “Chính sách bảo mật” dưới đây trước khi truy cập
                    những nội dung khác để hiểu hơn những cam kết mà LuckyBest
                    thực hiện, nhằm tôn trọng và bảo vệ quyền lợi của người truy
                    cập:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Thu&nbsp;</span
                    ></strong
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >thập</span
                    ></strong
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >&nbsp;thông tin cá nhân:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 46.5pt;
                    margin-bottom: 6pt;
                    text-indent: -25.2pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.1.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest thực hiện việc thu thập các thông tin cá nhân mà
                    Quý khách cung cấp trực tiếp cho LuckyBest bao gồm:</span
                  >
                </p>
                <ol style="margin: 0pt; padding-left: 0pt" type="a">
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Họ và tên
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Số Chứng minh nhân dân/Căn cước công dân
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Số điện thoại
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Địa chỉ email
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Địa chỉ nhận giao vé (nếu có)
                    <ol
                      class="awlist1"
                      start="2"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Các&nbsp;thông&nbsp;tin thu thập sẽ giúp LuckyBest:
                      </li>
                    </ol>
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Hỗ&nbsp;trợ Người dùng khi mua vé
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Giải đáp thắc mắc Người dùng.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Cung cấp cho quý khách thông tin mới nhất của LuckyBest.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Xem xét&nbsp;và nâng cấp nội dung và giao diện của website
                    và dịch vụ.
                    <ol
                      class="awlist2"
                      start="3"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Thực hiện các hoạt động quảng bá liên quan đến các sản
                        phẩm và dịch vụ của LuckyBest
                      </li>
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >LuckyBest cũng có thể thu thập thông tin về số lần ghé
                        thăm, bao gồm số trang quý khách xem, số liên kết
                        (links) quý khách click và những thông tin khác liên
                        quan đến việc kết nối đến LuckyBest. LuckyBest cũng thu
                        thập các thông tin mà trình duyệt web (browser) quý
                        khách sử dụng mỗi khi truy cập vào LuckyBest, bao gồm:
                        địa chỉ IP, loại browser, ngôn ngữ sử dụng, thời gian và
                        những địa chỉ mà browser truy xuất đến.
                      </li>
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Các chủ thể (Người hoặc Tổ chức) được phép tiếp cận, sử
                        dụng các thông tin cá nhân đươc thu thập ở trên được quy
                        định chi tiết tại điều 9.2 và 9.3 bên dưới.
                      </li>
                    </ol>
                  </li>
                </ol>
                <ol
                  class="awlist3"
                  start="2"
                  style="margin: 0pt; padding-left: 0pt"
                  type="1"
                >
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.7pt;
                      margin-bottom: 6pt;
                      text-indent: -28.35pt;
                      text-align: justify;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                      list-style-position: inside;
                      -aw-list-padding-sml: 5.35pt;
                    "
                  >
                    <span style="font: 7pt 'Times New Roman'"
                      >&nbsp;&nbsp;&nbsp;&nbsp;</span
                    ><strong>Sử&nbsp;</strong><strong>dụng</strong
                    ><strong>&nbsp;thông tin cá nhân:</strong>
                    <ol
                      class="awlist4"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Chỉ duy nhất LuckyBest được quyền thu thập, tiếp cận và
                        sử dụng thông tin cá nhân quý khách với mục đích phù hợp
                        và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật”
                        này.
                      </li>
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Khi cần thiết, LuckyBest có thể sử dụng những thông tin
                        này để liên hệ trực tiếp với quý khách dưới các
                        hình&nbsp;thức như email, điện thoại, tin nhắn. Quý
                        khách cũng có thể nhận được email cung cấp thông tin sản
                        phẩm, dịch vụ mới, thông tin về các sự kiện sắp tới hoặc
                        thông tin tuyển dụng nếu quý khách đăng ký nhận email
                        thông báo.
                      </li>
                    </ol>
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.7pt;
                      margin-bottom: 6pt;
                      text-indent: -28.35pt;
                      text-align: justify;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                      list-style-position: inside;
                      -aw-list-padding-sml: 5.35pt;
                    "
                  >
                    <span style="font: 7pt 'Times New Roman'"
                      >&nbsp;&nbsp;&nbsp;&nbsp;</span
                    ><strong>Chia sẻ thông tin cá nhân:</strong>
                    <ol
                      class="awlist5"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Ngoại trừ các trường hợp về "Sử dụng thông tin cá nhân"
                        như đã nêu trong chính sách này, LuckyBest cam kết sẽ
                        không tiết lộ thông tin cá nhân quý khách ra ngoài.
                      </li>
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >Trong một số trường hợp, LuckyBest có thể thuê một đơn
                        vị độc lập để tiến hành các dự án nghiên cứu thị trường
                        và khi đó thông tin của quý khách sẽ được cung cấp cho
                        đơn vị này để tiến hành dự án. Bên thứ ba này sẽ bị ràng
                        buộc bởi một thỏa thuận về bảo mật mà theo đó họ chỉ
                        được phép sử dụng những thông tin được cung cấp cho mục
                        đích hoàn thành dự án.
                      </li>
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -35.4pt;
                          -aw-list-padding-sml: 3.4pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;</span
                        >LuckyBest có thể tiết lộ hoặc cung cấp thông tin cá
                        nhân của quý khách trong các trường hợp thật sự cần
                        thiết như sau:
                      </li>
                    </ol>
                  </li>
                </ol>
                <ol style="margin: 0pt; padding-left: 0pt" type="a">
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Khi có yêu cầu của các cơ quan pháp luật;
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Trong trường hợp mà LuckyBest tin rằng điều đó sẽ giúp
                    LuckyBest bảo vệ quyền lợi chính đáng của LuckyBest trước
                    pháp luật;
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Tình huống khẩn cấp và cần thiết để bảo vệ quyền an toàn cá
                    nhân của các thành viên LuckyBest.
                    <ol
                      class="awlist6"
                      start="4"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -28.35pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 5.35pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;&nbsp;&nbsp;</span
                        ><strong>Truy xuất thông tin cá nhân:</strong
                        ><strong>&nbsp;</strong>
                      </li>
                    </ol>
                  </li>
                </ol>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Bất cứ&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">thời</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;điểm nào quý khách cũng có thể truy cập và chỉnh sửa
                    những thông tin cá nhân của mình theo các liên kết thích hợp
                    mà LuckyBest cung cấp.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.5.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Bảo mật thông tin cá nhân:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.5.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Khi</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >quý khách gửi thông tin cá nhân cho LuckyBest, quý khách đã
                    đồng ý với các điều khoản mà LuckyBest đã nêu ở trên,
                    LuckyBest cam kết bảo mật thông tin cá nhân của quý khách
                    bằng mọi cách thức có thể. Hoạt động Thương mại điện tử của
                    LuckyBest,</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >bao gồm việc đảm bảo khả năng bảo mật thông tin của Người
                    dùng trong quá trình giao dịch đã được chứng nhận bởi Bộ
                    Công Thương.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.5.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">LuckyBest</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >cũng khuyến cáo quý khách nên tuân thủ các nguyên tắc sau
                    để có thể bảo vệ thông tin cá nhân của mình, gồm:</span
                  >
                </p>
                <ol style="margin: 0pt; padding-left: 0pt" type="a">
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Không tiết lộ Tên sử dụng/Tên đăng nhập và/hoặc Mật khẩu với
                    bất kỳ ai, viết hoặc sử dụng ở nơi mà mọi người có thể nhận
                    biết và nhìn thấy được.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Khi chọn mật khẩu quý khách không nên chọn những thông tin
                    dễ xác định như họ tên, ngày sinh, số điện thoại hoặc một số
                    ký tự, con số dễ nhận biết từ tên, ngày sinh, số điện thoại
                    của quý khách.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Thoát khỏi hệ thống và trình duyệt khi rời khỏi máy tính,
                    ngay cả trong thời gian ngắn. Nếu sử dụng máy tính chung
                    nhiều người, quý khách nên đăng xuất, hoặc thoát hết tất cả
                    cửa sổ website đang mở.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 56.55pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.15pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Khi nghi ngờ mật khẩu đã bị lộ, quý khách thay đổi mật khẩu
                    ngay lập tức, trong trường hợp cần thiết quý khách lập tức
                    thông báo và đề nghị được hỗ trợ từ LuckyBest.
                  </li>
                  <li
                    style="
                      margin-top: 6pt;
                      margin-left: 55.88pt;
                      margin-bottom: 6pt;
                      text-align: justify;
                      padding-left: 0.82pt;
                      font-family: 'Times New Roman';
                      font-size: 10pt;
                    "
                  >
                    Trong&nbsp;trường hợp các giao dịch, hành vi trái pháp luật
                    được tiến hành với tài khoản hoặc thông thông tin cá nhân
                    của quý khách mà không có sự ủy quyền hoặc do sự sai sót, vô
                    ý hoặc cố ý từ phía quý khách, LuckyBest hiểu rằng quý khách
                    sẽ chịu toàn bộ tổn thất hoặc trách nhiệm theo quy định pháp
                    luật khi các giao dịch đó được thực hiện.
                    <ol
                      class="awlist7"
                      start="6"
                      style="
                        margin-right: 0pt;
                        margin-left: 0pt;
                        padding-left: 0pt;
                      "
                      type="1"
                    >
                      <li
                        style="
                          margin-top: 6pt;
                          margin-bottom: 6pt;
                          text-indent: -28.35pt;
                          list-style-position: inside;
                          -aw-list-padding-sml: 5.35pt;
                        "
                      >
                        <span style="font: 7pt 'Times New Roman'"
                          >&nbsp;&nbsp;&nbsp;&nbsp;</span
                        ><strong>Thời gian lưu trữ thông tin:</strong>
                      </li>
                    </ol>
                  </li>
                </ol>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Dữ liệu cá&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">nhân</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;của người dùng sẽ được lưu trữ cho đến khi có yêu cầu
                    hủy bỏ hoặc tự</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >người dùng đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi
                    trường hợp thông tin cá nhân của người dùng sẽ được bảo mật
                    trên máy chủ của</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">LuckyBest.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.7.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Thanh toán an toàn:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Mọi</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Người dùng tham gia giao dịch tại LuckyBest qua thẻ tín
                    dụng/thẻ ghi nợ/thẻ ATM nội địa đều được bảo mật thông tin
                    bằng mã hóa. Bên cạnh đó, khi thực hiện thanh toán qua mạng,
                    quý khách vui lòng lưu ý các chi tiết sau:</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.7.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Chỉ thanh toán trên website có chứng chỉ an toàn, bảo mật
                    hệ thống thẻ.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.7.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Tuyệt đối không cho người khác mượn thẻ tín dụng hoặc tài
                    khoản của mình để thực hiện thanh toán trên website; trong
                    trường hợp phát sinh giao dịch ngoài ý muốn, Người dùng vui
                    lòng thông báo ngay lập tức cho LuckyBest để LuckyBest có
                    thể hỗ trợ kịp thời.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.7.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Kiểm tra tài khoản ngân hàng của mình thường xuyên để đảm
                    bảo tất cả giao dịch qua thẻ đều nằm trong tầm kiểm
                    soát.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.8.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Sử dụng “cookie”:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.8.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Cookie là một file văn bản được đặt trên đĩa cứng của quý
                    khách bởi một máy chủ của trang web. Cookie không được dùng
                    để chạy chương trình hay đưa virus vào máy tính của quý
                    khách. Cookie được chỉ định vào máy tính của quý khách và
                    chỉ có thể được đọc bởi một máy chủ trang web trên miền được
                    đưa ra cookie cho quý khách.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.8.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest dùng "cookie" để giúp cá nhân hóa và nâng cao tối
                    đa hiệu quả sử dụng thời gian trực tuyến của quý khách khi
                    truy cập LuckyBest mà không cần đăng ký lại thông tin sẵn
                    có.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.8.3.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quý khách có thể chấp nhận hoặc từ chối dùng cookie. Hầu
                    hết những browser tự động chấp nhận cookie, nhưng quý khách
                    có thể thay đổi những cài đặt để từ chối tất cả những cookie
                    nếu quý khách thích. Tuy nhiên, nếu quý khách chọn từ chối
                    cookie, điều đó có thể gây cản trở và ảnh hưởng không tốt
                    đến một số dịch vụ và tính năng phụ thuộc vào cookie tại
                    LuckyBest.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -28.35pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.9.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Quy định về “spam”:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.9.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Thư rác (spam) là các email giả mạo danh tín LuckyBest gửi
                    đi. LuckyBest khẳng định chỉ gửi email đến quý khách khi và
                    chỉ khi quý khách có đăng ký hoặc sử dụng dịch vụ từ hệ
                    thống của LuckyBest.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.9.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest cam kết không bán, thuê lại hoặc cho thuê email
                    của quý khách từ bên thứ ba. Nếu quý khách vô tình nhận được
                    email không theo yêu cầu từ hệ thống LuckyBest do một nguyên
                    nhân ngoài ý muốn, xin vui lòng nhấn vào link từ chối nhận
                    email kèm theo hoặc thông báo trực tiếp đến LuckyBest.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -35.4pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.10.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><strong
                    ><span style="font-family: 'Times New Roman'"
                      >Thay đổi về chính sách:</span
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.10.1.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >LuckyBest hoàn toàn có thể thay đổi nội dung trong “Chính
                    sách bảo mật” mà không cần phải thông báo trước, để phù hợp
                    với các nhu cầu của LuckyBest cũng như nhu cầu được phản hồi
                    từ Người dùng. Khi cập nhật nội dung chính sách này,
                    LuckyBest sẽ chỉnh sửa lại thời gian “Cập nhật lần cuối” bên
                    dưới.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-indent: -42.5pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">9.10.2.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Nội dung “Chính sách bảo mật” này chỉ áp dụng tại
                    LuckyBest, không bao gồm hoặc liên quan đến các bên thứ ba
                    đặt quảng cáo hay có link tại LuckyBest. LuckyBest khuyến
                    khích quý khách đọc kỹ "Chính sách An toàn và Bảo mật" của
                    các trang web của bên thứ ba trước khi cung cấp thông tin cá
                    nhân cho các trang web đó.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 10.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Cập nhật</span>
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">khoản</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;này có thể được cập nhật thường xuyên bởi Công ty Cổ
                    phần LuckyBest Việt Nam phiên bản cập nhật sẽ được LuckyBest
                    công bố tại website công ty.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Phiên bản cập nhật sẽ thay thế cho các quy định và điều
                    khoản trong thỏa thuận ban đầu. Bạn có thể truy cập vào Ứng
                    dụng LuckyBest hoặc vào website của LuckyBest để xem nội
                    dung chi tiết các phiên bản cập nhật.</span
                  >
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 11.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Quyền sở hữu dịch vu</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Dịch vụ này được phát triển và sở hữu bởi Công ty Cổ phần
                    LuckyBest Việt Nam, tất cả các quyền sở hữu trí tuệ liên
                    quan đến dịch vụ (bao gồm nhưng không giới hạn mã nguồn,
                    hình ảnh, dữ liệu, thông tin, nội dung chứa đựng trong dịch
                    vụ; các sửa đổi bổ sung, cập nhật của dịch vụ) và các tài
                    liệu hướng dẫn liên quan (nếu có) sẽ thuộc quyền sở hữu duy
                    nhất bởi Công ty Cổ phần LuckyBest Việt Nam và không cá
                    nhân, tổ chức nào được phép sao chép, tái tạo, phân phối,
                    hoặc hình thức khác xâm phạm tới quyền của chủ sở hữu nếu
                    không có sự đồng ý và cho phép bằng văn bản của Công ty Cổ
                    phần LuckyBest Việt Nam.</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span>
                </p>
                <h1
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    page-break-inside: avoid;
                    page-break-after: avoid;
                    font-size: 13pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Điều 12.</span
                  ><span style="font: 7pt 'Times New Roman'"
                    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Xử lý vi phạm</span
                  >
                </h1>
                <p
                  style="
                    margin-top: 6pt;
                    margin-left: 56.7pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Trường</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >hợp bạn vi phạm bất kỳ Quy định nào trong Điều</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">khoản</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >này, Công ty Cổ phần LuckyBest Việt Nam có quyền ngay lập
                    tức khóa tài khoản của bạn và/ hoặc xóa bỏ toàn bộ các thông
                    tin, nội dung vi phạm, đồng thời tùy thuộc vào tính chất,
                    mức độ vi phạm bạn sẽ phải chịu trách nhiệm trước cơ quan có
                    thẩm quyền, Công ty Cổ phần LuckyBest Việt Nam và bên thứ ba
                    về mọi thiệt hại gây ra bởi hoặc xuất phát từ hành vi vi
                    phạm của bạn.</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <strong
                    ><em
                      ><span style="font-family: 'Times New Roman'"
                        >&nbsp;</span
                      ></em
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 36pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <strong
                    ><em
                      ><span style="font-family: 'Times New Roman'"
                        >Liên lạc với LuckyBest</span
                      ></em
                    ></strong
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 36pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">© 201</span
                  ><span style="font-family: 'Times New Roman'">9</span
                  ><span style="font-family: 'Times New Roman'"
                    >, Công Ty Cổ phần LuckyBest Việt Nam</span
                  >
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 36pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'"
                    >Tầng 5, Tòa nhà Elcom</span
                  ><span style="font-family: 'Times New Roman'">,</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;15 Phố Duy Tân, Dịch Vọng Hậu, Cầu Giấy,</span
                  ><span style="font-family: 'Times New Roman'"
                    >&nbsp;&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">Hà Nội</span>
                </p>
                <p
                  style="
                    margin-top: 6pt;
                    margin-bottom: 6pt;
                    text-indent: 36pt;
                    text-align: justify;
                    font-size: 10pt;
                  "
                >
                  <span style="font-family: 'Times New Roman'">Hotline:</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span>
                  <a href="mailto:086.883.7779" style="text-decoration: none"
                    ><u
                      ><span
                        style="font-family: 'Times New Roman'; color: #000000"
                        >086.883.7779</span
                      ></u
                    ></a
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'">- Email:</span
                  ><span style="font-family: 'Times New Roman'">&nbsp;</span
                  ><span style="font-family: 'Times New Roman'"
                    >Info@luckybest.vn</span
                  >
                </p>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="dialog-cusutom-footer">
          <v-col cols="12">
            <v-btn
              outlined
              rounded
              text
              class="btn-accept-term"
              @click="$emit('update:dialog', false)"
            >
              Đồng ý
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
  },
};
</script>
