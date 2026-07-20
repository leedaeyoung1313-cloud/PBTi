// data/petProfileTypes.ts
// cat/dog 타입 프로필 공유 구조 - "전문가 리포트" 톤의 심층 분석용 확장 스키마

export interface PetStats {
  /** 활동량 0-100 */
  activity: number;
  /** 사교성 0-100 */
  sociability: number;
  /** 독립성 0-100 */
  independence: number;
  /** 예민도 0-100 */
  sensitivity: number;
}

export interface StrengthItem {
  /** 강점 키워드 */
  keyword: string;
  /** 실제 일상 행동 예시 (구체적 묘사) */
  description: string;
}

export interface VulnerabilityItem {
  /** 취약점 키워드 */
  keyword: string;
  /** 어떤 환경/상황에서 유발되는지 */
  trigger: string;
  /** 그로 인해 나타나는 문제 행동 */
  behavior: string;
}

export interface PlayTherapyItem {
  /** 놀이법 이름 (예: "노즈워크 15분") */
  name: string;
  /** 구체적 진행 방법 */
  method: string;
  /** 권장 시간 */
  duration: string;
  /** 필요 아이템 */
  items: string;
}

export interface EnvironmentTip {
  /** 환경 구성 항목 제목 */
  title: string;
  /** 구체적 가이드 */
  description: string;
  /** 주의사항 (옵션) */
  caution?: string;
}

export interface PetProfileDetails {
  strengths: StrengthItem[];
  vulnerabilities: VulnerabilityItem[];
}

export interface PetProfileSolutions {
  playTherapy: PlayTherapyItem[];
  environment: EnvironmentTip[];
}
