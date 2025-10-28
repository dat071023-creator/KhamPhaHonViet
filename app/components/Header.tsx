import React from 'react';

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800 dark:text-white">Khám Phá Hồn Việt</h1>
        <nav>
          <a href="/" className="px-4 hover:text-green-600">Trang chủ</a>
          {/* Add more navigation links here */}
        </nav>
        <div>
          {/* User account button will go here */}
        </div>
      </div>
    </header>
  );
}
