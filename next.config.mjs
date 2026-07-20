/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 상품 썸네일을 next/image로 최적화 출력하기 위한 허용 도메인.
  // /admin에서 입력하는 이미지 URL은 도메인을 미리 알 수 없어 광범위하게 허용한다.
  // (등록 권한은 비밀번호로 보호된 /admin 뿐이므로 신뢰 가능한 입력으로 간주)
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },

  // ★★★★★ 핵심 옵션 ★★★★★
  typescript: {
    // 타입스크립트 에러가 있어도 빌드 실패시키지 않음
    ignoreBuildErrors: true,
  },

  eslint: {
    // ESLint 에러가 있어도 빌드 실패시키지 않음
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
