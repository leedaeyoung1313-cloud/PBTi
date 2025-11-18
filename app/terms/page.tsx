// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | Soulverse",
  description: "Soulverse - PBTi 이용약관",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-7 text-neutral-800">
      <h1 className="text-2xl font-bold mb-3">이용약관</h1>

      <p>Soulverse(PBTi) 서비스 이용에 관한 기본 약관입니다.</p>

      <section className="mt-6">
        <h2 className="font-semibold mb-1">제1조 (목적)</h2>
        <p>
          본 약관은 Soulverse가 제공하는 PetBTi 서비스 이용과 관련하여 회사와
          이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제2조 (서비스의 성격)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>본 서비스는 무료로 제공됩니다.</li>
          <li>회원가입 기능이 없으며 이용자의 개인정보를 저장하지 않습니다.</li>
          <li>서비스 내 분석 결과는 참고용 정보입니다.</li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제3조 (책임의 제한)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            제공되는 결과 및 정보는 참고용이며, 의료적·전문적 조언을 대체하지 않습니다.
          </li>
          <li>
            쿠팡 파트너스 링크 클릭 시 외부 사이트에서 발생하는 문제는 외부 사이트에
            책임이 있습니다.
          </li>
        </ul>
      </section>

      <section className="mt-5">
        <h2 className="font-semibold mb-1">제4조 (문의)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>운영자: Soulverse</li>
          <li>이메일: leedaeyoung1313@gmail.com</li>
        </ul>
      </section>

      <p className="mt-6 text-[11px] text-neutral-400">
        본 약관은 서비스 운영 정책에 따라 변경될 수 있습니다.
      </p>
    </main>
  );
}
