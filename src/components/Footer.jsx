import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Cột 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Về chúng tôi</h2>
          <p className="text-gray-300 text-sm">
            Chúng tôi cung cấp dịch vụ chất lượng cao, giúp bạn kết nối và phát
            triển trong thế giới số.
          </p>
        </div>

        {/* Cột 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Liên kết nhanh</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:underline">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Hỗ trợ</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Chính sách bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Điều khoản dịch vụ
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Liên hệ</h2>
          <p className="text-sm text-gray-300">Email: contact@example.com</p>
          <p className="text-sm text-gray-300">Phone: +84 123 456 789</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">
              Facebook
            </a>
            <a href="#" className="hover:text-pink-400">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-300">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-400 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
