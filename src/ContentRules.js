//@ts-check
export const contentRulesData = {
  introduction: {
    text: "Vui lòng tuân thủ các quy định cộng đồng trên NhomMinecraftVN để tránh bị xử lý và phạt theo quy định này của chúng tôi.",
    text2: "Để bảo đảm an toàn cho trẻ em và trẻ vị thành niên dưới 18 tuổi của chúng tôi trên NhomMinecraftVN. Chúng tôi sẽ phải yêu cầu thành viên vui lòng tuân theo quy định này cho các phụ huynh biết để phòng tránh."
  },
}

class ContentRules {
  accessable() {
    let keys = "";
    // for (const data in contentRulesData) {
    //   keys += data + '<br>';
    // }
    return keys += (`
      <p>${contentRulesData.introduction.text}</p>
      <br>
      <p>
        <h2> 🧱 <b>QUY ĐỊNH NHÓM - NHOMMINECRAFTVN</b> </h2><br/>

        Chào mừng bạn đến với <b>Nhóm Minecraft Việt Nam (NhomMinecraftVN)</b> — nơi giao lưu, chia sẻ và sáng tạo dành cho cộng đồng người chơi Minecraft Việt!<br/>
        <br/>
        Để giữ cho nhóm luôn vui vẻ, lành mạnh và hữu ích cho mọi người, <b>mọi thành viên bắt buộc phải tuân thủ các quy định sau</b> 👇

        <hr/>

        <h3>⚙️ <b>I. QUY ĐỊNH CHUNG</b></h3><br/>

        1. <b>Tôn trọng mọi người</b> — Không xúc phạm, gây hấn, phân biệt vùng miền, giới tính, tôn giáo, hoặc đả kích cá nhân.<br/>
        <br/>
        2. <b>Không spam, không quảng cáo lung tung</b> — Bài đăng lặp lại, quảng cáo server, kênh YouTube, Discord, shop… phải được admin/mod duyệt trước.<br/>
        <br/>
        3. <b>Không nội dung nhạy cảm</b> — Tuyệt đối <b>cấm</b> 18+, chính trị, tôn giáo, bạo lực, hoặc bất kỳ nội dung gây tranh cãi.<br/>
        <br/>
        4. <b>Giữ gìn ngôn ngữ lịch sự</b> — Không nói tục, chửi bậy, hoặc sử dụng ngôn ngữ gây khó chịu.<br/>
        <br/>
        5. <b>Không lừa đảo hoặc gian lận</b> — Mọi hành vi lừa đảo, chiếm đoạt tài khoản, vật phẩm, hay tiền thật đều <b>cấm tuyệt đối</b>.<br/>

        <hr/>

        <h3>💬 <b>II. BÀI ĐĂNG & BÌNH LUẬN</b></h3><br/>

        1. <b>Chia sẻ đúng chủ đề Minecraft</b> — Các nội dung được phép: ảnh công trình, mẹo chơi, map, mod, skin, texture pack, clip, meme Minecraft,...<br/>
        <br/>
        2. <b>Kèm thông tin rõ ràng</b> khi chia sẻ:<br/>
          <ul class="accesslist">
            <li class="accessdot">Đối với server: ghi rõ IP, phiên bản, mô tả ngắn, quy định server.</li>
            <li class="accessdot">Đối với mod/map/resource pack: kèm link chính chủ và ảnh minh họa.</li>
          </ul>
        3. <b>Không “đào mộ” bài cũ</b> nếu không cần thiết.<br/>
        <br/>
        4. <b>Không bình luận toxic hoặc dìm người khác</b>. Ai cần góp ý thì góp ý văn minh, có tính xây dựng.</br>

        <hr/>

        <h3>🛠️ <b>III. SERVER VÀ QUẢNG CÁO</b></h3><br/>

        <li class="accessdot">Được <b>đăng bài giới thiệu server</b> nếu:</li>
        <ul class="accesslist">
          1. Có <b>mô tả chi tiết</b> (IP, phiên bản, gameplay, ảnh/video).<br/>
          2. Không spam lặp lại trong vòng <b>7 ngày</b>.<br/>
          3. Không chèn link chứa mã độc hoặc rút gọn đáng ngờ.</br/>
        </ul>
        <li class="accessdot">Mọi quảng cáo khác (shop, page, Discord...) <b>phải được admin/mod duyệt trước.</b></li>

        <hr/>

        <h3>🚫 <b>IV. XỬ LÝ VI PHẠM</b></h3><br/>

        <li class="accessdot"><b>Nhắc nhở lần 1:</b> Cảnh cáo bằng bình luận hoặc tin nhắn.</li>
        <li class="accessdot"><b>Lần 2:</b> Xóa bài, tắt quyền đăng bài trong 7 ngày.</li>
        <li class="accessdot"><b>Lần 3:</b> Ban vĩnh viễn khỏi nhóm.</li>
        <br/>
          ⚠️ Hành vi <b>lừa đảo, xúc phạm nặng, hoặc spam bot</b> sẽ bị <b>ban ngay lập tức</b> không cần cảnh báo.

        <hr/>

        <h3>🌍 <b>V. LIÊN HỆ & ĐÓNG GÓP</b></h3><br/>

        <li class="accessdot"> Có ý kiến đóng góp, báo lỗi, tố cáo thành viên vi phạm vui lòng <b>inbox trực tiếp admin/mod</b>.</li>
        <li class="accessdot"> Nhóm luôn khuyến khích mọi người chia sẻ kiến thức, sáng tạo và giúp đỡ lẫn nhau! ❤️</li>

        <hr/>

        <b>👑 Quản lý viên:</b></br>
        <br/>
        <li class="accessdot">685551709 - Người sáng lập NhomMinecraftVN</li>
        <li class="accessdot">705196953 - Th3Cr34t0r</li>
        <li class="accessdot">664833400 - nguyen long</li>

        <b>📅 Cập nhật lần cuối:</b> 2025/11/1
      </p>
    `);
  }

  safetyForChildrenTeenRules() {
    let keys = "";
    return keys += (`
      <p>${contentRulesData.introduction.text2}</p>
      <br/>
      <p>
        <h1> 🛡️ QUY ĐỊNH AN TOÀN CHO TRẺ EM & TRẺ VỊ THÀNH NIÊN </h1>
        <br/>
        <b>Cộng đồng NhomMinecraftVN</b><br/>
        <br/>
        <h2> 🎯 1. Mục đích </h2>
        <br/>
        Quy định này được ban hành nhằm:<br>
        <br/>
        <li class="accessdot">Bảo vệ quyền lợi, sự an toàn và sức khỏe tinh thần của trẻ em (dưới 13 tuổi) và trẻ vị thành niên (từ 13 tuổi đến dưới 18 tuổi) khi tham gia cộng đồng NhomMinecraftVN. </li><br/>
        <li class="accessdot">Tạo một môi trường vui chơi, học hỏi và sáng tạo lành mạnh, thân thiện và không độc hại. </li>
        
        <hr/>

        <h2> 👥 2. Phạm vi áp dụng </h2>
        <br/>
        Áp dụng cho:<br/>
        <br/>
        <li class="accessdot">Tất cả thành viên trong cộng đồng (bao gồm người chơi, Quản lý viên, và các thành viên điều hành). </li><br/>
        <li class="accessdot">Tất cả nền tảng hoạt động: Minecraft server, Discord, Facebook, website, v.v. </li>

        <hr/>

        <h2> ⚖️ 3. Nguyên tắc chung </h2>
        <br/>
        1. <b>Tôn trọng người khác</b> — Không được quấy rối, xúc phạm, hoặc bắt nạt bất kỳ ai.<br/>
        <br/>
        2. <b>Không chia sẻ thông tin cá nhân</b> — Không yêu cầu, tiết lộ hoặc lan truyền thông tin cá nhân của bản thân hoặc người khác (họ tên, địa chỉ, số điện thoại, tài khoản mạng xã hội, v.v.).<br/>
        <br/>
        3. <b>Không nội dung không phù hợp</b> — Nghiêm cấm chia sẻ, bàn luận hoặc phát tán nội dung có yếu tố:<br/>
          <ul class="accesslist">
            <li class="accessdot">Bạo lực, máu me, kinh dị
            <li class="accessdot">Khiêu dâm, nhạy cảm, hoặc 18+
            <li class="accessdot">Chính trị, tôn giáo cực đoan, phân biệt chủng tộc<br/>
          </ul>
          <br/>
        4. <b>Không ngôn ngữ độc hại</b> — Không dùng ngôn ngữ chửi rủa, miệt thị, công kích cá nhân hoặc nhóm người.<br/>
        <br/>
        5. <b>Giữ môi trường tích cực</b> — Khuyến khích giúp đỡ, hướng dẫn người chơi mới; không châm chọc, dìm hàng.<br/>

        <hr/>

        <h2> 🧒 4. Quy định riêng cho trẻ em & trẻ vị thành niên</h2>
        <br/>
        <li class="accessdot"> Thành viên <b>dưới 18 tuổi</b> chỉ được tham gia với <b>sự đồng ý của phụ huynh hoặc người giám hộ</b>.<br/>
        <br/>
        <li class="accessdot"> Không khuyến khích chia sẻ giọng nói, hình ảnh cá nhân của trẻ nhỏ.<br/>
        <br/>
        <li class="accessdot"> Quản lý viên có quyền <b>ẩn, xóa hoặc hạn chế</b> các nội dung, tương tác không phù hợp với lứa tuổi.<br/>
        <br>
        <li class="accessdot"> Các hành vi dụ dỗ, làm quen ngoài phạm vi cộng đồng, hoặc gợi ý trao đổi riêng với trẻ vị thành niên <b>sẽ bị cấm tuyệt đối</b> và <b>báo cáo cho cơ quan chức năng</b> nếu cần.<br/>

        <hr/>

        <h2> 🛠️ 5. Trách nhiệm của Quản lý viên & Thành viên</h2>
        <br/>
        <h3>Đối với <b>Chủ / Quản lý viên:</b></h3><br/>

        <li class="accessdot">Theo dõi, xử lý kịp thời các hành vi vi phạm.</li><br/>
        <li class="accessdot">Giữ thái độ công bằng, minh bạch khi thực thi quy định.</li><br/>
        <li class="accessdot">Bảo mật thông tin thành viên, đặc biệt là trẻ em.</li><br/>
        <li class="accessdot">Hướng dẫn người chơi mới về quy tắc ứng xử.</li><br/>

        <h3> Đối với <b>Thành viên:</b></h3><br/>

        <li class="accessdot">Tuân thủ toàn bộ quy định cộng đồng.</li><br/>
        <li class="accessdot">Báo cáo ngay cho Quản lý viên nếu phát hiện hành vi quấy rối, dụ dỗ, hoặc vi phạm an toàn trẻ em.</li>

        <hr/>

        <h2>🚫 6. Xử lý vi phạm</h2><br/>

        <li class="accessdot"> <b>Cảnh cáo lần 1:</b> Nhắc nhở hoặc giới hạn quyền tương tác.</li><br/>
        <li class="accessdot"> <b>Lần 2:</b> Khai trừ thành viên này.</li><br/>
        <li class="accessdot"> <b>Lần 3:</b> Cấm vĩnh viễn, đồng thời đưa vào danh sách đen.</li><br/>
        <li class="accessdot"> <b>Trường hợp nghiêm trọng:</b> Báo cáo cho nền tảng hoặc cơ quan có thẩm quyền.</li>

        <hr/>

        <h2> 💬 7. Kênh liên hệ & Báo cáo</h2><br/>

        Nếu bạn thấy hành vi hoặc nội dung không an toàn, vui lòng liên hệ:<br/>
        <br/>
        <li class="accessdot">📧 Facebook: Lê Quân (NhomMinecraftVN)</li><br/>
        <li class="accessdot">📞 Hoặc nhắn tin trực tiếp cho <b>Quản lý viên</b></li>

        <hr/>

        <h2>✅ 8. Hiệu lực</h2>
        <br/>
        Bản quy định này có hiệu lực kể từ ngày 2025/11/1 và được cập nhật định kỳ để đảm bảo phù hợp với luật pháp và tiêu chuẩn cộng đồng Minecraft quốc tế.

        <hr/>

        <b>Lưu ý:</b> Khi tham gia NhomMinecraftVN, bạn <b>đồng ý tuân thủ toàn bộ quy định này</b>.<br/>
        <br/>
        <blockquote> <p>Mục tiêu của chúng ta là <b>xây dựng một thế giới Minecraft an toàn, sáng tạo và vui vẻ cho mọi lứa tuổi!</b></p></blockquote>

      </p>
    `);
  }
}

export function contentRules() {
  return (`
    <style>
      .nmvHeader {
        height: 1rem;
        display: flex;
        justify-content: initial;
        align-items: center;
      }

      .navMenu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
				background-color: var(--container-color);
        padding: 1rem 1rem;
				box-shadow: 0 -5px 10px 0 #00000006
      }

      .navLink {
        color: var(--text-color);
      }

			.linkDisable {
				color: var(--text-color-light);
			}

			.navLinkR {
				color: var(--text-color);
				margin-left: 5.8rem;
			}
      
      .nmv {
        margin-top: -.75rem;
        margin-bottom: 3rem;
        padding: 1rem;
      }
    </style>
    <nav class="nmvHeader">
      <div class="navMenu">
        <ul class="navList">
					<a href="#contents.CommunityGroupsRule" class="navLinkR"> <i class="ri-translate-2"></i> <span>Select language</span>  </a> 
        </ul>
      </div>
    </nav>
    <div class="nmv">
      ${(() => {
        return new ContentRules().accessable();
      })()}
    </div>
  `);
}

export function SafetyForChildrenTeenRules() {
  return (`
    <style>
      .nmvHeader {
        height: 1rem;
        display: flex;
        justify-content: initial;
        align-items: center;
      }

      .navMenu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
				background-color: var(--container-color);
        padding: 1rem 1rem;
				box-shadow: 0 -5px 10px 0 #00000006
      }

      .navLink {
        color: var(--text-color);
      }

			.linkDisable {
				color: var(--text-color-light);
			}

			.navLinkR {
				color: var(--text-color);
				margin-left: 5.8rem;
			}
      
      .nmv {
        margin-top: -.75rem;
        margin-bottom: 3rem;
        padding: 1rem;
      }
    </style>
    <nav class="nmvHeader">
      <div class="navMenu">
        <ul class="navList">
					<a href="#contents.CommunityGroupsRule" class="navLinkR"> <i class="ri-translate-2"></i> <span>Select language</span>  </a> 
        </ul>
      </div>
    </nav>
    <div class="nmv">
      ${(() => {
        return new ContentRules().safetyForChildrenTeenRules();
      })()}
    </div>
  `); 
}