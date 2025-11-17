// data/dogGlobalProducts.ts
import type { DogProduct } from "./dogProducts";

// 간단 i18n 헬퍼
const cloneText = (base: string) => ({
  ko: base,
  en: base,
  ja: base,
  zh: base,
});

// 모든 강아지 타입에 공통으로 보여줄 추천 상품
export const dogGlobalProducts: DogProduct[] = [
  {
    id: "dog-global-poop-pad",
    title: "실속형 배변패드 100매",
    description:
      "실내 배변 교육과 일상 사용에 모두 적합한 실속형 배변패드 100매 구성. 어떤 성향의 강아지에게나 꼭 필요한 기본 필수템입니다.",
    coupangUrl: "https://link.coupang.com/a/c5dxq8",
    // imageUrl: "쿠팡 썸네일 URL 나중에 추가 가능",
    tag: "배변 필수템",
    title_i18n: cloneText("실속형 배변패드 100매"),
    description_i18n: cloneText(
      "실내 배변 교육과 일상 사용에 모두 적합한 실속형 배변패드 100매 구성. 어떤 성향의 강아지에게나 꼭 필요한 기본 필수템입니다."
    ),
    tag_i18n: cloneText("배변 필수템"),
  },
  {
    id: "dog-global-jerky",
    title: "굿데이 건강한 육포 강아지 간식",
    description:
      "기본 훈련 보상부터 일상 간식까지 두루 활용하기 좋은 건강한 육포 간식. 대부분의 강아지가 좋아하는 베이직 간식으로, 클릭·구매 전환을 노리기 좋은 상품입니다.",
    coupangUrl: "https://link.coupang.com/a/c5dAkz",
    // imageUrl: "쿠팡 썸네일 URL 나중에 추가 가능",
    tag: "훈련 보상 간식",
    title_i18n: cloneText("굿데이 건강한 육포 강아지 간식"),
    description_i18n: cloneText(
      "기본 훈련 보상부터 일상 간식까지 두루 활용하기 좋은 건강한 육포 간식. 대부분의 강아지가 좋아하는 베이직 간식으로, 클릭·구매 전환을 노리기 좋은 상품입니다."
    ),
    tag_i18n: cloneText("훈련 보상 간식"),
  },
];
