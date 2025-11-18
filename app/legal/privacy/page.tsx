// app/legal/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Soulverse PBTi",
  description: "Soulverse PBTi 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-7 text-neutral-800">
      <h1 className="text-2xl font-bold mb-3">개인정보처리방침</h1>

      <p className="text-[13px] text-neutral-500 mb-4">
        Soulverse(이하 “회사”)가 제공하는 PBTi 서비스는 회원가입 및 로그인 기능이 없으며,
        이용자의 개인정보를 직접 수집·저장하지 않습니다. 회사는 개인정보보호법 등
        관련 법령을 준수하며, 아래와 같이 개인정보 처리 방침을 안내합니다.
      </p>

      {/* 제1조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제1조 (수집하는 개인정보)</h2>
        <p>회사는 서비스를 제공함에 있어 아래와 같이 개인정보를 수집하지 않습니다.</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>이름, 이메일, 전화번호, 주소, 생년월일 등의 회원정보</li>
          <li>분석 결과 및 사용자가 입력한 답변 내용의 서버 저장</li>
        </ul>
      </section>

      {/* 제2조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제2조 (자동 수집되는 정보)</h2>
        <p>
          Netlify 등 호스팅 환경에서 서버 보호 및 서비스 품질 향상을 위해 아래와 같은
          기술적 정보가 서버 로그로 자동 생성·저장될 수 있습니다.
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>접속 IP 주소, 브라우저 종류, 접속 일시, 간단한 사용 통계 등</li>
        </ul>
        <p className="mt-1 text-[11px] text-neutral-500">
          회사는 이 정보를 이용자 개인을 식별하는 목적으로 사용하지 않습니다.
        </p>
      </section>

      {/* 제3조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제3조 (쿠키(Cookie)의 사용)</h2>
        <p>
          회사는 로그인 세션 등 개인식별을 위한 쿠키를 사용하지 않습니다. 다만,
          브라우저·플랫폼에서 제공하는 기본 쿠키 설정은 이용자의 환경에 따라 생성될 수 있습니다.
        </p>
      </section>

      {/* 제4조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제4조 (개인정보의 제3자 제공)</h2>
        <p>
          회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 서비스 내에서 제공되는
          쿠팡 파트너스 링크를 통해 외부 사이트로 이동하는 경우, 해당 사이트의 개인정보처리방침이
          적용됩니다.
        </p>
      </section>

      {/* 제5조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제5조 (개인정보 보유 및 이용기간)</h2>
        <p>
          회사는 이용자의 개인정보를 수집·저장하지 않으므로 별도의 보유 및 이용기간이 존재하지 않습니다.
        </p>
      </section>

      {/* 제6조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제6조 (개인정보 보호를 위한 조치)</h2>
        <p>
          회사는 HTTPS 적용, 서버 접근 제한 등 기본적인 보안 조치를 통해 서비스의 안정성을
          확보하기 위해 노력합니다.
        </p>
      </section>

      {/* 제7조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제7조 (문의처)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>운영자: Soulverse</li>
          <li>이메일: leedaeyoung1313@gmail.com</li>
        </ul>
      </section>

      <p className="mt-8 text-[11px] text-neutral-400">
        본 개인정보처리방침은 서비스 운영 또는 관련 법령의 변경에 따라 수정될 수 있으며,
        중요한 변경 사항은 서비스 내 공지사항을 통해 안내됩니다.
      </p>
    </main>
  );
}
