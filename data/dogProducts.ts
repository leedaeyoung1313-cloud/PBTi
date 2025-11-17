// data/dogProducts.ts
import type { DogCode } from "./dogTypes";

export type Lang = "ko" | "en" | "ja" | "zh";

export interface DogProduct {
  id: string;
  title: string;
  description: string;
  coupangUrl: string;
  imageUrl?: string;
  tag?: string;

  title_i18n?: { [K in Lang]: string };
  description_i18n?: { [K in Lang]: string };
  tag_i18n?: { [K in Lang]: string };
}

// 일단 4개 언어 모두 한국어 문자열로 채워두고,
// 나중에 en/ja/zh만 번역해서 교체하면 됨.
const cloneText = (ko: string) => ({
  ko,
  en: ko,
  ja: ko,
  zh: ko,
});

export const dogProducts: Partial<Record<DogCode, DogProduct[]>> = {
  // ENTJ — 카리스마 댕대장
  ENTJ: [
    {
      id: "entj-dog-1",
      title: "어질리티 허들 세트",
      description:
        "집안 질서와 목표가 중요한 ENTJ 강아지를 위한 규칙형 어질리티 허들 세트.",
      coupangUrl: "https://example.com/dog_entj_agility",
      tag: "어질리티",
      title_i18n: cloneText("어질리티 허들 세트"),
      description_i18n: cloneText(
        "집안 질서와 목표가 중요한 ENTJ 강아지를 위한 규칙형 어질리티 허들 세트."
      ),
      tag_i18n: cloneText("어질리티"),
    },
  ],

  // ENTP — 간식 발명가
  ENTP: [
    {
      id: "entp-dog-1",
      title: "지능형 간식 퍼즐 토이",
      description:
        "간식 발명가 ENTP 강아지를 위한 다양한 난이도의 지능형 간식 퍼즐 장난감.",
      coupangUrl: "https://example.com/dog_entp_puzzle",
      tag: "지능형장난감",
      title_i18n: cloneText("지능형 간식 퍼즐 토이"),
      description_i18n: cloneText(
        "간식 발명가 ENTP 강아지를 위한 다양한 난이도의 지능형 간식 퍼즐 장난감."
      ),
      tag_i18n: cloneText("지능형장난감"),
    },
  ],

  // INTJ — 지적인 경계병
  INTJ: [
    {
      id: "intj-dog-1",
      title: "창가 관찰 쿠션",
      description:
        "집안과 바깥을 조용히 관찰하는 INTJ 강아지를 위한 창가 전용 관찰 쿠션.",
      coupangUrl: "https://example.com/dog_intj_window",
      tag: "창가쿠션",
      title_i18n: cloneText("창가 관찰 쿠션"),
      description_i18n: cloneText(
        "집안과 바깥을 조용히 관찰하는 INTJ 강아지를 위한 창가 전용 관찰 쿠션."
      ),
      tag_i18n: cloneText("창가쿠션"),
    },
  ],

  // INTP — 호기심 많은 사색가
  INTP: [
    {
      id: "intp-dog-1",
      title: "논리형 퍼즐 피더",
      description:
        "퍼즐과 구조를 탐구하는 INTP 강아지를 위한 단계별 논리형 퍼즐 피더.",
      coupangUrl: "https://example.com/dog_intp_puzzle",
      tag: "퍼즐피더",
      title_i18n: cloneText("논리형 퍼즐 피더"),
      description_i18n: cloneText(
        "퍼즐과 구조를 탐구하는 INTP 강아지를 위한 단계별 논리형 퍼즐 피더."
      ),
      tag_i18n: cloneText("퍼즐피더"),
    },
  ],

  // ENFJ — 만인의 천사
  ENFJ: [
    {
      id: "enfj-dog-1",
      title: "교감용 부드러운 리드줄",
      description:
        "가족 모두와 교감하는 ENFJ 강아지를 위한 부드럽고 편안한 산책 리드줄.",
      coupangUrl: "https://example.com/dog_enfj_leash",
      tag: "소프트리드줄",
      title_i18n: cloneText("교감용 부드러운 리드줄"),
      description_i18n: cloneText(
        "가족 모두와 교감하는 ENFJ 강아지를 위한 부드럽고 편안한 산책 리드줄."
      ),
      tag_i18n: cloneText("소프트리드줄"),
    },
  ],

  // ENFP — 행복한 분위기 메이커
  ENFP: [
    {
      id: "enfp-dog-1",
      title: "컬러풀 공놀이 세트",
      description:
        "집안 분위기를 띄우는 ENFP 강아지를 위한 다양한 질감의 컬러풀 공놀이 세트.",
      coupangUrl: "https://example.com/dog_enfp_ball",
      tag: "공놀이",
      title_i18n: cloneText("컬러풀 공놀이 세트"),
      description_i18n: cloneText(
        "집안 분위기를 띄우는 ENFP 강아지를 위한 다양한 질감의 컬러풀 공놀이 세트."
      ),
      tag_i18n: cloneText("공놀이"),
    },
  ],

  // INFJ — 섬세한 공감쟁이
  INFJ: [
    {
      id: "infj-dog-1",
      title: "릴랙스 방석 & 담요",
      description:
        "집사의 감정에 민감한 INFJ 강아지를 위한 포근한 릴랙스 방석과 담요 세트.",
      coupangUrl: "https://example.com/dog_infj_bed",
      tag: "릴랙스세트",
      title_i18n: cloneText("릴랙스 방석 & 담요"),
      description_i18n: cloneText(
        "집사의 감정에 민감한 INFJ 강아지를 위한 포근한 릴랙스 방석과 담요 세트."
      ),
      tag_i18n: cloneText("릴랙스세트"),
    },
  ],

  // INFP — 순수한 시견
  INFP: [
    {
      id: "infp-dog-1",
      title: "소프트 플러시 토이",
      description:
        "온순하고 감성적인 INFP 강아지를 위한 부드러운 플러시 인형 장난감.",
      coupangUrl: "https://example.com/dog_infp_plush",
      tag: "소프트토이",
      title_i18n: cloneText("소프트 플러시 토이"),
      description_i18n: cloneText(
        "온순하고 감성적인 INFP 강아지를 위한 부드러운 플러시 인형 장난감."
      ),
      tag_i18n: cloneText("소프트토이"),
    },
  ],

  // ESTJ — 단호박 교관
  ESTJ: [
    {
      id: "estj-dog-1",
      title: "훈련용 클릭커 & 간식 세트",
      description:
        "FM 스타일 ESTJ 강아지를 위한 규칙적인 훈련용 클릭커와 소형 간식 세트.",
      coupangUrl: "https://example.com/dog_estj_clicker",
      tag: "훈련세트",
      title_i18n: cloneText("훈련용 클릭커 & 간식 세트"),
      description_i18n: cloneText(
        "FM 스타일 ESTJ 강아지를 위한 규칙적인 훈련용 클릭커와 소형 간식 세트."
      ),
      tag_i18n: cloneText("훈련세트"),
    },
  ],

  // ESFJ — 슈퍼 케어맘
  ESFJ: [
    {
      id: "esfj-dog-1",
      title: "가족 산책 하네스",
      description:
        "가족 모두와 함께 걷는 것을 좋아하는 ESFJ 강아지를 위한 편안한 산책용 하네스.",
      coupangUrl: "https://example.com/dog_esfj_harness",
      tag: "하네스",
      title_i18n: cloneText("가족 산책 하네스"),
      description_i18n: cloneText(
        "가족 모두와 함께 걷는 것을 좋아하는 ESFJ 강아지를 위한 편안한 산책용 하네스."
      ),
      tag_i18n: cloneText("하네스"),
    },
  ],

  // ISTJ — 규칙지킴이
  ISTJ: [
    {
      id: "istj-dog-1",
      title: "정량 급식기",
      description:
        "정확한 루틴을 좋아하는 ISTJ 강아지를 위한 시간·양 조절 정량 급식기.",
      coupangUrl: "https://example.com/dog_istj_feeder",
      tag: "정량급식기",
      title_i18n: cloneText("정량 급식기"),
      description_i18n: cloneText(
        "정확한 루틴을 좋아하는 ISTJ 강아지를 위한 시간·양 조절 정량 급식기."
      ),
      tag_i18n: cloneText("정량급식기"),
    },
  ],

  // ISFJ — 헌신적인 껌딱지
  ISFJ: [
    {
      id: "isfj-dog-1",
      title: "분리불안 케어 세트",
      description:
        "집사 곁을 떠나기 힘든 ISFJ 강아지를 위한 분리불안 케어 토이 & 담요 세트.",
      coupangUrl: "https://example.com/dog_isfj_separation",
      tag: "케어세트",
      title_i18n: cloneText("분리불안 케어 세트"),
      description_i18n: cloneText(
        "집사 곁을 떠나기 힘든 ISFJ 강아지를 위한 분리불안 케어 토이 & 담요 세트."
      ),
      tag_i18n: cloneText("케어세트"),
    },
  ],

  // ESTP — 오늘만 사는 짱구
  ESTP: [
    {
      id: "estp-dog-1",
      title: "프리스비 & 러닝 토이",
      description:
        "짜릿한 사냥놀이를 좋아하는 ESTP 강아지를 위한 프리스비 & 러닝 토이 세트.",
      coupangUrl: "https://example.com/dog_estp_frizbee",
      tag: "프리스비",
      title_i18n: cloneText("프리스비 & 러닝 토이"),
      description_i18n: cloneText(
        "짜릿한 사냥놀이를 좋아하는 ESTP 강아지를 위한 프리스비 & 러닝 토이 세트."
      ),
      tag_i18n: cloneText("프리스비"),
    },
  ],

  // ESFP — 인기쟁이 재롱둥이
  ESFP: [
    {
      id: "esfp-dog-1",
      title: "쇼타임 리본 하네스",
      description:
        "사람들 앞에서 재롱을 부리는 ESFP 강아지를 위한 포인트 리본 하네스.",
      coupangUrl: "https://example.com/dog_esfp_ribbon",
      tag: "리본하네스",
      title_i18n: cloneText("쇼타임 리본 하네스"),
      description_i18n: cloneText(
        "사람들 앞에서 재롱을 부리는 ESFP 강아지를 위한 포인트 리본 하네스."
      ),
      tag_i18n: cloneText("리본하네스"),
    },
  ],

  // ISTP — 무심한 간식 발명가
  ISTP: [
    {
      id: "istp-dog-1",
      title: "실용적인 노즈워크 매트",
      description:
        "혼자 놀며 간식 찾기를 좋아하는 ISTP 강아지를 위한 실용 노즈워크 매트.",
      coupangUrl: "https://example.com/dog_istp_nosework",
      tag: "노즈워크",
      title_i18n: cloneText("실용적인 노즈워크 매트"),
      description_i18n: cloneText(
        "혼자 놀며 간식 찾기를 좋아하는 ISTP 강아지를 위한 실용 노즈워크 매트."
      ),
      tag_i18n: cloneText("노즈워크"),
    },
  ],

  // ISFP — 고요함을 즐기는 예술가
  ISFP: [
    {
      id: "isfp-dog-1",
      title: "폭신한 릴랙스 베드",
      description:
        "촉감과 고요함을 사랑하는 ISFP 강아지를 위한 폭신한 릴랙스 베드.",
      coupangUrl: "https://example.com/dog_isfp_bed",
      tag: "릴랙스베드",
      title_i18n: cloneText("폭신한 릴랙스 베드"),
      description_i18n: cloneText(
        "촉감과 고요함을 사랑하는 ISFP 강아지를 위한 폭신한 릴랙스 베드."
      ),
      tag_i18n: cloneText("릴랙스베드"),
    },
  ],
};
