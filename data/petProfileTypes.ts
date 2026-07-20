// data/petProfileTypes.ts
// cat/dog 타입 프로필이 공유하는 확장 구조 (stats, 강점/활동/케어팁 세분화)

export interface PetStats {
  /** 사교성 0-100 */
  sociability: number;
  /** 독립성 0-100 */
  independence: number;
  /** 활동량 0-100 */
  activity: number;
  /** 예민함 0-100 */
  sensitivity: number;
}

export interface StrengthItem {
  /** 강점 키워드 (짧은 제목) */
  keyword: string;
  /** 실제 일상 행동 예시 설명 */
  description: string;
}

export interface ActivityItem {
  /** 추천 놀이 이름 */
  name: string;
  /** 구체적인 놀이 방법 가이드 */
  guide: string;
  /** 권장 시간 */
  duration: string;
  /** 준비물 */
  prep: string;
}

export interface CareTipsBlock {
  /** 일반 케어 팁 */
  tips: string[];
  /** 스트레스를 받을 때 보일 수 있는 위험 신호 */
  warningSigns: string[];
  /** 위험 신호 완화 솔루션 */
  solutions: string[];
}
