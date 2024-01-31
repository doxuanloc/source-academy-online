import React from "react";

const ContactFormSection = () => {
  return (
    <div className="contact-form">
      <form action="#">
        <div className="row">
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Tên" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Số Điện Thoại" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-from-input mb-20">
              <input type="text" placeholder="Email" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-select">
              <select className="mb-20">
                <option value="Subject">Khóa Học</option>
                <option value="Subject">Thanh Toán</option>
                <option value="Subject">Thông Tin Cá Nhân</option>
              </select>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="contact-from-input mb-20">
              <textarea placeholder="Tin Nhắn" name="message"></textarea>
            </div>
          </div>
          <div className="colxl-2 ">
            <div className="cont-btn mb-20">
              <a href="#" className="cont-btn">
                Hoàn Tất
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFormSection;
