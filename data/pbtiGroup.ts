// data/pbtiGroup.ts
// 16개 PBTi 유형 코드를 4개 기질 그룹(NT/NF/SJ/SP)으로 매핑하고
// 그룹별 강조 색상 클래스를 제공하는 유틸.

export type PbtiGroup = "NT" | "NF" | "SJ" | "SP";

export type PbtiCode =
  | "ENTJ" | "ENTP" | "INTJ" | "INTP"
  | "ENFJ" | "ENFP" | "INFJ" | "INFP"
  | "ESTJ" | "ESFJ" | "ISTJ" | "ISFJ"
  | "ESTP" | "ESFP" | "ISTP" | "ISFP";

const GROUP_BY_CODE: Record<PbtiCode, PbtiGroup> = {
  ENTJ: "NT", ENTP: "NT", INTJ: "NT", INTP: "NT",
  ENFJ: "NF", ENFP: "NF", INFJ: "NF", INFP: "NF",
  ESTJ: "SJ", ESFJ: "SJ", ISTJ: "SJ", ISFJ: "SJ",
  ESTP: "SP", ESFP: "SP", ISTP: "SP", ISFP: "SP",
};

export interface PbtiGroupStyle {
  group: PbtiGroup;
  hex: string;
  text: string;
  badgeBg: string;
  border: string;
  gradientFrom: string;
  gradientTo: string;
}

const GROUP_STYLES: Record<PbtiGroup, PbtiGroupStyle> = {
  NT: {
    group: "NT",
    hex: "#6B8AF6",
    text: "text-pbti-nt",
    badgeBg: "bg-pbti-nt/10",
    border: "border-pbti-nt/40",
    gradientFrom: "from-pbti-nt/15",
    gradientTo: "to-pbti-nt/5",
  },
  NF: {
    group: "NF",
    hex: "#A379FF",
    text: "text-pbti-nf",
    badgeBg: "bg-pbti-nf/10",
    border: "border-pbti-nf/40",
    gradientFrom: "from-pbti-nf/15",
    gradientTo: "to-pbti-nf/5",
  },
  SJ: {
    group: "SJ",
    hex: "#4FC28A",
    text: "text-pbti-sj",
    badgeBg: "bg-pbti-sj/10",
    border: "border-pbti-sj/40",
    gradientFrom: "from-pbti-sj/15",
    gradientTo: "to-pbti-sj/5",
  },
  SP: {
    group: "SP",
    hex: "#FF9B52",
    text: "text-pbti-sp",
    badgeBg: "bg-pbti-sp/10",
    border: "border-pbti-sp/40",
    gradientFrom: "from-pbti-sp/15",
    gradientTo: "to-pbti-sp/5",
  },
};

export function getPbtiGroup(code: string): PbtiGroup {
  return GROUP_BY_CODE[code as PbtiCode] ?? "NF";
}

export function getPbtiGroupStyle(code: string): PbtiGroupStyle {
  return GROUP_STYLES[getPbtiGroup(code)];
}
