import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Hình ảnh thiên nhiên */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80"
            alt="Phong cảnh thiên nhiên"
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>

        {/* Nội dung giới thiệu */}
        <div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Về Chúng Tôi
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Chúng tôi là một nhóm yêu thiên nhiên, mong muốn kết nối con người
            với vẻ đẹp hoang sơ của thế giới tự nhiên. Với sứ mệnh lan tỏa tình
            yêu thiên nhiên và bảo vệ môi trường, chúng tôi tổ chức các hoạt
            động du lịch sinh thái, cắm trại, trekking và giáo dục môi trường.
          </p>
          <p className="text-gray-600 text-base">
            Hành trình của chúng tôi đưa bạn đến những vùng đất tĩnh lặng, nơi
            bạn có thể tìm lại sự cân bằng và cảm nhận hơi thở của rừng, núi và
            suối nguồn. Hãy cùng chúng tôi khám phá và gìn giữ vẻ đẹp này cho
            thế hệ tương lai.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
