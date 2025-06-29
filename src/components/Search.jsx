import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    alert("Enter Me!");
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <header className="bg-white shadow-md p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo / Tên trang */}
          <h1 className="text-xl font-bold text-blue-600">MyWebsite</h1>

          {/* Menu */}
          <nav className="space-x-4 hidden md:block">
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Trang chủ
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Giới thiệu
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Liên hệ
            </a>
          </nav>

          {/* Nút menu mobile */}
          <button className="md:hidden text-gray-700 hover:text-blue-500">
            ☰
          </button>
        </div>
      </header>
      <div class="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="mt-5 flex items-center gap-2 p-2 border rounded-md shadow-md w-full max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Tìm
          </button>
        </form>

        <form class="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
          <h2 class="text-xl font-semibold mb-4 text-center">Đăng ký</h2>
          <input
            class="w-full mb-3 p-2 border rounded"
            type="text"
            placeholder="Họ tên"
            required
          />
          <input
            class="w-full mb-3 p-2 border rounded"
            type="email"
            placeholder="Email"
            required
          />
          <input
            class="w-full mb-4 p-2 border rounded"
            type="password"
            placeholder="Mật khẩu"
            required
          />
          <button class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Đăng ký
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
