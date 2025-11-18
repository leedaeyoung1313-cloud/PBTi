// app/legal/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | Soulverse PBTi",
  description: "Soulverse PBTi 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-sm leading-7 text-neutral-800">
      <h1 className="text-2xl font-bold mb-3">이용약관</h1>

      <p className="text-[13px] text-neutral-500 mb-4">
        본 약관은 Soulverse(이하 “회사”)가 제공하는 PBTi 서비스 이용과 관련하여
        회사와 이용자 간의 권리, 의무 및 책임사항을 규정합니다.
      </p>

      {/* 제1조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제1조 (목적)</h2>
        <p>
          본 약관은 회사가 제공하는 PBTi 웹사이트(https://petbti.netlify.app)에서
          제공하는 반려동물 성향 분석 서비스의 이용 조건 및 절차, 회사와 이용자의
          권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      {/* 제2조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제2조 (서비스의 성격)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>본 서비스는 무료로 제공됩니다.</li>
          <li>회원가입 및 로그인 기능이 없으며, 개인정보를 저장하지 않습니다.</li>
          <li>
            서비스에서 제공되는 성향 분석 결과는 참고용 정보이며,
            의학적·법적·전문적 조언을 대체하지 않습니다.
          </li>
        </ul>
      </section>

      {/* 제3조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제3조 (책임의 제한)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            회사는 서비스에서 제공하는 정보의 정확성·신뢰성에 대하여 보증하지 않으며,
            이를 기반으로 한 이용자의 판단 및 행동에 대해 책임을 지지 않습니다.
          </li>
          <li>
            회사는 쿠팡 파트너스 등 외부 제휴 링크를 통하여 이동한 사이트에서
            제공되는 서비스 및 정보에 대해 책임을 지지 않습니다.
          </li>
        </ul>
      </section>

      {/* 제4조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제4조 (약관의 개정)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 개정할 수 있습니다.
          </li>
          <li>
            약관이 변경되는 경우 서비스 내 공지사항 등을 통해 변경 사실 및
            적용 시기를 사전에 공지합니다.
          </li>
        </ul>
      </section>

      {/* 제5조 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제5조 (준거법 및 분쟁 해결)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>본 약관은 대한민국 법률을 준거법으로 합니다.</li>
          <li>
            서비스 이용과 관련하여 분쟁이 발생하는 경우, 회사와 이용자는 성실한 협의를
            통해 해결하도록 노력하며, 협의가 이루어지지 않을 경우 관할 법원에 소를 제기할 수 있습니다.
          </li>
        </ul>
      </section>

      {/* 문의 */}
      <section className="mt-6">
        <h2 className="font-semibold mb-1">제6조 (문의처)</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>운영자: Soulverse</li>
          <li>이메일: leedaeyoung1313@gmail.com</li>
        </ul>
      </section>

      <p className="mt-8 text-[11px] text-neutral-400">
        본 약관은 서비스 운영 정책에 따라 변경될 수 있으며, 중요한 변경 시 서비스 내 공지사항을 통해 안내됩니다.
      </p>
    </main>
  );
}
