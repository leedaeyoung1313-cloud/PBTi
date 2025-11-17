/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
