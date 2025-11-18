// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | Soulverse",
  description: "Soulverse - PBTi 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-7 text-neutral-800">
      <h1 className="text-2xl font-bold mb-3">개인정보처리방침</h1>

      <p>
        Soulverse(이하 “회사”)는 개인정보를 일절 수집하지 않습니다. 회원가입 및 입력폼이
        존재하지 않으며, 분석 결과 및 입력 정보도 저장하지 않습니다.
      </p>

      <section className="mt-6">
        <h2 className="font-semibold mb-1">제1조 (수집하는 개인정보)</h2>
        <p>본 서비스는 아래와 같이 개인정보를 수집하지 않습니다.</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>이름 / 이메일 / 전화번호 / 생년월일 등 개인식별 정보 입력 없음</li>
          <li>분석 결과 또는 입력 내용 저장 없음</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제2조 (자동 수집 정보)</h2>
        <p>
          Netlify 호스팅 환경에서 서버 보호 목적의 기본 로그(IP, 접속 시간 등)가 
          생성될 수 있으나 이는 Soulverse가 직접 열람·식별하지 않습니다.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제3조 (쿠키 사용)</h2>
        <p>개인식별 목적의 쿠키는 사용하지 않습니다.</p>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제4조 (제3자 제공)</h2>
        <p>개인정보는 제3자에게 제공되지 않습니다.</p>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제5조 (외부 링크)</h2>
        <p>
          서비스 내 쿠팡 파트너스 링크 클릭 시 외부 사이트로 이동되며, 해당 사이트의
          개인정보처리방침이 별도로 적용됩니다.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제6조 (문의)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>운영자: Soulverse</li>
          <li>이메일: leedaeyoung1313@gmail.com</li>
        </ul>
      </section>

      <p className="mt-6 text-[11px] text-neutral-400">
        본 방침은 서비스 운영 정책에 따라 변경될 수 있습니다.
      </p>
    </main>
  );
}
