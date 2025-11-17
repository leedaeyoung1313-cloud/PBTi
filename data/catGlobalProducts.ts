// data/catGlobalProducts.ts
import type { CatProduct } from "./catProducts";

// 간단 i18n 헬퍼: 한글 텍스트를 4개 언어 모두에 그대로 복사
const cloneText = (base: string) => ({
  ko: base,
  en: base,
  ja: base,
  zh: base,
});

// 모든 고양이 타입에 공통으로 보여줄 추천 상품
export const catGlobalProducts: CatProduct[] = [
  {
    id: "cat-global-scratch-sofa",
    title: "코멧 펫 고양이 쇼파 스크래쳐 (타원형)",
    description:
      "긁고, 기대고, 누워 쉴 수 있는 타원형 쇼파 스크래쳐. 대부분의 고양이에게 필요한 기본 스크래쳐 역할을 해주면서, 인테리어에도 잘 어울리는 제품입니다.",
    coupangUrl: "https://link.coupang.com/a/c5dCqg",
    // imageUrl: "쿠팡 썸네일 URL 나중에 추가 가능",
    tag: "기본 스크래쳐",
    title_i18n: cloneText("코멧 펫 고양이 쇼파 스크래쳐 (타원형)"),
    description_i18n: cloneText(
      "긁고, 기대고, 누워 쉴 수 있는 타원형 쇼파 스크래쳐. 대부분의 고양이에게 필요한 기본 스크래쳐 역할을 해주면서, 인테리어에도 잘 어울리는 제품입니다."
    ),
    tag_i18n: cloneText("기본 스크래쳐"),
  },
  {
    id: "cat-global-churu-plus",
    title: "굿밸런스 고양이 짜먹는 간식 플러스",
    description:
      "약 먹이기, 브러싱, 목욕 등 싫어하는 상황에서 보상용으로 쓰기 좋은 짜먹는 간식. 어떤 성향의 고양이에게도 높은 선호도를 기대할 수 있는 베이직 간식입니다.",
    coupangUrl: "https://link.coupang.com/a/c5dGlN",
    // imageUrl: "쿠팡 썸네일 URL 나중에 추가 가능",
    tag: "짜먹는 간식",
    title_i18n: cloneText("굿밸런스 고양이 짜먹는 간식 플러스"),
    description_i18n: cloneText(
      "약 먹이기, 브러싱, 목욕 등 싫어하는 상황에서 보상용으로 쓰기 좋은 짜먹는 간식. 어떤 성향의 고양이에게도 높은 선호도를 기대할 수 있는 베이직 간식입니다."
    ),
    tag_i18n: cloneText("짜먹는 간식"),
  },
];
