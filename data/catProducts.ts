// data/catProducts.ts
import type { CatCode } from "./catTypes";

export type Lang = "ko" | "en" | "ja" | "zh";

export interface CatProduct {
  id: string;
  title: string;
  description: string;
  coupangUrl: string;   // 쿠팡 파트너스 기본 링크(지금은 예시)
  imageUrl?: string;
  tag?: string;

  title_i18n?: { [K in Lang]: string };
  description_i18n?: { [K in Lang]: string };
  tag_i18n?: { [K in Lang]: string };
}

// 일단 4언어 모두 한국어로 복사해두기 (나중에 en/ja/zh만 바꿔도 됨)
const cloneText = (ko: string) => ({
  ko,
  en: ko,
  ja: ko,
  zh: ko,
});

export const catProducts: Partial<Record<CatCode, CatProduct[]>> = {
  ENTJ: [
    {
      id: "cat-entj-01",
      title: "대형 캣타워 고양이 관찰용",
      description:
        "집안을 한눈에 내려다볼 수 있는 높은 구조의 대형 캣타워로, 카리스마 캣 리더 ENTJ 고양이의 관찰 본능을 제대로 만족시켜 줍니다.",
      coupangUrl: "https://link.coupang.com/a/c49Bk1",
      tag: "ENTJ 관찰 타워",
      title_i18n: cloneText("대형 캣타워 고양이 관찰용"),
      description_i18n: cloneText(
        "집안을 한눈에 내려다볼 수 있는 높은 구조의 대형 캣타워로, 카리스마 캣 리더 ENTJ 고양이의 관찰 본능을 제대로 만족시켜 줍니다."
      ),
      tag_i18n: cloneText("ENTJ 관찰 타워"),
    },
      {
      id: "cat-entj-02",
      title: "고양이 창문 해먹 튼튼",
      description:
        "튼튼한 지지대로 창밖을 넓게 볼 수 있는 창문 해먹. 집안을 순찰하며 밖까지 지켜보고 싶은 ENTJ 고양이에게 최고의 관찰 포인트가 됩니다.",
      coupangUrl: "https://link.coupang.com/a/c493Wo",
      tag: "창문 관찰 스팟",
      title_i18n: cloneText("고양이 창문 해먹 튼튼"),
      description_i18n: cloneText(
        "튼튼한 지지대로 창밖을 넓게 볼 수 있는 창문 해먹. 집안을 순찰하며 밖까지 지켜보고 싶은 ENTJ 고양이에게 최고의 관찰 포인트가 됩니다."
      ),
      tag_i18n: cloneText("창문 관찰 스팟"),
    },
    {
      id: "cat-entj-03",
      title: "고양이 스트레스 완화 페로몬 스프레이",
      description:
        "가구 재배치나 새로운 고양이 입양처럼 변화에 민감한 ENTJ 고양이의 긴장을 낮춰 주는 페로몬 스프레이입니다.",
      coupangUrl: "https://link.coupang.com/a/c5atZY",
      tag: "스트레스 케어",
      title_i18n: cloneText("고양이 스트레스 완화 페로몬 스프레이"),
      description_i18n: cloneText(
        "가구 재배치나 새로운 고양이 입양처럼 변화에 민감한 ENTJ 고양이의 긴장을 낮춰 주는 페로몬 스프레이입니다."
      ),
      tag_i18n: cloneText("스트레스 케어"),
    },
  ],

  ENTP: [
    {
      id: "entp-cat-1",
      title: "지능형 캣토이 세트",
      description:
        "문·서랍·장난감을 연구하는 ENTP 타입의 호기심을 채워주는 지능형 캣토이 세트.",
      coupangUrl: "https://example.com/cat_entp_toy",
      tag: "지능형장난감",
      title_i18n: cloneText("지능형 캣토이 세트"),
      description_i18n: cloneText(
        "문·서랍·장난감을 연구하는 ENTP 타입의 호기심을 채워주는 지능형 캣토이 세트."
      ),
      tag_i18n: cloneText("지능형장난감"),
    },
  ],

  INTJ: [
    {
      id: "intj-cat-1",
      title: "조용한 캣동굴 세트",
      description:
        "집안을 멀찍이 관찰하는 INTJ 고양이를 위한 은신·관찰용 캣동굴 세트.",
      coupangUrl: "https://example.com/cat_intj_cave",
      tag: "캣동굴",
      title_i18n: cloneText("조용한 캣동굴 세트"),
      description_i18n: cloneText(
        "집안을 멀찍이 관찰하는 INTJ 고양이를 위한 은신·관찰용 캣동굴 세트."
      ),
      tag_i18n: cloneText("캣동굴"),
    },
  ],

  INTP: [
    {
      id: "intp-cat-1",
      title: "퍼즐 피더 패키지",
      description:
        "장난감과 구조를 연구하는 INTP 고양이를 위한 고난도 퍼즐 피더 패키지.",
      coupangUrl: "https://example.com/cat_intp_puzzle",
      tag: "퍼즐피더",
      title_i18n: cloneText("퍼즐 피더 패키지"),
      description_i18n: cloneText(
        "장난감과 구조를 연구하는 INTP 고양이를 위한 고난도 퍼즐 피더 패키지."
      ),
      tag_i18n: cloneText("퍼즐피더"),
    },
  ],

  ENFJ: [
    {
      id: "enfj-cat-1",
      title: "무릎담요 & 브러시 세트",
      description:
        "집사의 수호 천사 같은 ENFJ 고양이를 위한 무릎담요와 부드러운 브러시 세트.",
      coupangUrl: "https://example.com/cat_enfj_blanket",
      tag: "무릎담요",
      title_i18n: cloneText("무릎담요 & 브러시 세트"),
      description_i18n: cloneText(
        "집사의 수호 천사 같은 ENFJ 고양이를 위한 무릎담요와 부드러운 브러시 세트."
      ),
      tag_i18n: cloneText("무릎담요"),
    },
  ],

  ENFP: [
    {
      id: "enfp-cat-1",
      title: "액티브 캣터널",
      description:
        "에너지 폭발 ENFP 고양이가 마음껏 뛰어놀 수 있는 레이아웃 다양한 캣터널.",
      coupangUrl: "https://example.com/cat_enfp_tunnel",
      tag: "캣터널",
      title_i18n: cloneText("액티브 캣터널"),
      description_i18n: cloneText(
        "에너지 폭발 ENFP 고양이가 마음껏 뛰어놀 수 있는 레이아웃 다양한 캣터널."
      ),
      tag_i18n: cloneText("캣터널"),
    },
  ],

  INFJ: [
    {
      id: "infj-cat-1",
      title: "진정용 캣하우스",
      description:
        "예민한 INFJ 고양이를 위한 조용하고 안락한 진정용 캣하우스.",
      coupangUrl: "https://example.com/cat_infj_house",
      tag: "캣하우스",
      title_i18n: cloneText("진정용 캣하우스"),
      description_i18n: cloneText(
        "예민한 INFJ 고양이를 위한 조용하고 안락한 진정용 캣하우스."
      ),
      tag_i18n: cloneText("캣하우스"),
    },
  ],

  INFP: [
    {
      id: "infp-cat-1",
      title: "포근한 캣동굴",
      description:
        "조용히 숨어서 쉴 수 있는 은신처. 따뜻한 마음의 시인냥에게 딱 맞는 공간.",
      coupangUrl: "https://example.com/cat_infp_cave",
      tag: "은신처",
      title_i18n: cloneText("포근한 캣동굴"),
      description_i18n: cloneText(
        "조용히 숨어서 쉴 수 있는 은신처. 따뜻한 마음의 시인냥에게 딱 맞는 공간."
      ),
      tag_i18n: cloneText("은신처"),
    },
  ],

  ESTJ: [
    {
      id: "estj-cat-1",
      title: "자동급식기 & 정수기 세트",
      description:
        "식사와 청소 타이밍에 민감한 ESTJ 고양이를 위한 자동급식·정수 세트.",
      coupangUrl: "https://example.com/cat_estj_feeder",
      tag: "자동급식기",
      title_i18n: cloneText("자동급식기 & 정수기 세트"),
      description_i18n: cloneText(
        "식사와 청소 타이밍에 민감한 ESTJ 고양이를 위한 자동급식·정수 세트."
      ),
      tag_i18n: cloneText("자동급식기"),
    },
  ],

  ESFJ: [
    {
      id: "esfj-cat-1",
      title: "교감용 소프트 토이",
      description:
        "슈퍼 프렌들리 ESFJ 고양이와 함께 놀기 좋은 부드러운 소프트 교감 토이.",
      coupangUrl: "https://example.com/cat_esfj_softtoy",
      tag: "소프트토이",
      title_i18n: cloneText("교감용 소프트 토이"),
      description_i18n: cloneText(
        "슈퍼 프렌들리 ESFJ 고양이와 함께 놀기 좋은 부드러운 소프트 교감 토이."
      ),
      tag_i18n: cloneText("소프트토이"),
    },
  ],

  ISTJ: [
    {
      id: "istj-cat-1",
      title: "안정감 있는 캣하우스",
      description:
        "정확한 루틴과 공간을 선호하는 ISTJ 고양이에게 잘 맞는 안정감 있는 캣하우스.",
      coupangUrl: "https://example.com/cat_istj_house",
      tag: "안정하우스",
      title_i18n: cloneText("안정감 있는 캣하우스"),
      description_i18n: cloneText(
        "정확한 루틴과 공간을 선호하는 ISTJ 고양이에게 잘 맞는 안정감 있는 캣하우스."
      ),
      tag_i18n: cloneText("안정하우스"),
    },
  ],

  ISFJ: [
    {
      id: "isfj-cat-1",
      title: "무릎담요 & 작은 캣하우스",
      description:
        "집사의 그림자처럼 따라다니는 ISFJ 고양이를 위한 무릎담요와 소형 캣하우스.",
      coupangUrl: "https://example.com/cat_isfj_blanket",
      tag: "무릎담요",
      title_i18n: cloneText("무릎담요 & 작은 캣하우스"),
      description_i18n: cloneText(
        "집사의 그림자처럼 따라다니는 ISFJ 고양이를 위한 무릎담요와 소형 캣하우스."
      ),
      tag_i18n: cloneText("무릎담요"),
    },
  ],

  ESTP: [
    {
      id: "estp-cat-1",
      title: "하이점프 캣타워",
      description:
        "점프와 질주를 사랑하는 ESTP 고양이를 위한 점프용 캣타워.",
      coupangUrl: "https://example.com/cat_estp_tower",
      tag: "점프타워",
      title_i18n: cloneText("하이점프 캣타워"),
      description_i18n: cloneText(
        "점프와 질주를 사랑하는 ESTP 고양이를 위한 점프용 캣타워."
      ),
      tag_i18n: cloneText("점프타워"),
    },
  ],

  ESFP: [
    {
      id: "esfp-cat-1",
      title: "포토존 러그 & 쿠션",
      description:
        "인기 만점 스타냥 ESFP 고양이를 위한 포토존용 러그와 쿠션 세트.",
      coupangUrl: "https://example.com/cat_esfp_photo",
      tag: "포토존",
      title_i18n: cloneText("포토존 러그 & 쿠션"),
      description_i18n: cloneText(
        "인기 만점 스타냥 ESFP 고양이를 위한 포토존용 러그와 쿠션 세트."
      ),
      tag_i18n: cloneText("포토존"),
    },
  ],

  ISTP: [
    {
      id: "istp-cat-1",
      title: "실용적인 퍼즐 토이",
      description:
        "혼자서 간식 찾기를 좋아하는 ISTP 고양이를 위한 실용적인 퍼즐 토이.",
      coupangUrl: "https://example.com/cat_istp_puzzle",
      tag: "퍼즐토이",
      title_i18n: cloneText("실용적인 퍼즐 토이"),
      description_i18n: cloneText(
        "혼자서 간식 찾기를 좋아하는 ISTP 고양이를 위한 실용적인 퍼즐 토이."
      ),
      tag_i18n: cloneText("퍼즐토이"),
    },
  ],

  ISFP: [
    {
      id: "isfp-cat-1",
      title: "폭신폭신 릴랙스 세트",
      description:
        "고요함과 촉감을 사랑하는 ISFP 고양이를 위한 폭신한 방석·담요 세트.",
      coupangUrl: "https://example.com/cat_isfp_relax",
      tag: "릴랙스세트",
      title_i18n: cloneText("폭신폭신 릴랙스 세트"),
      description_i18n: cloneText(
        "고요함과 촉감을 사랑하는 ISFP 고양이를 위한 폭신한 방석·담요 세트."
      ),
      tag_i18n: cloneText("릴랙스세트"),
    },
  ],
};
