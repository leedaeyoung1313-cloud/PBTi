// data/dogTypes.i18n.ts
// ADD-ONLY overlay to provide i18n for dog type profiles without 수정 of dogTypes.ts

import { dogTypes, DogCode } from "./dogTypes";

export type Lang = "ko" | "en" | "ja" | "zh";

export interface DogTypeProfileI18n {
  label_i_n?: never; // internal helper to avoid name clash
  label_i18n: { ko: string; en: string; ja: string; zh: string };
  nickname_i18n: { [K in Lang]: string };
  summary_i18n: { [K in Lang]: string };
  strengths_i18n: { [K in Lang]: string[] };
  weaknesses_i18n: { [K in Lang]: string[] };
  idealActivities_i18n: { [K in Lang]: string[] };
  careTips_i_n?: never;
  careTips_i18n: { [K in Lang]: string[] };
  recommendedCategories_i18n: { [K in Lang]: string[] };
}

const cloneList = (arr: string[]) => ({
  ko: arr,
  en: arr,
  ja: arr,
  zh: arr,
});

// 1) 기본 i18n: ko 원문을 4개 언어에 복제(폴백)
const baseI18n = Object.fromEntries(
  (Object.keys(dogTypes) as DogCode[]).map((code) => {
    const b = dogTypes[code] as any;
    return [
      code,
      {
        label_i18n: {
          ko: b.label,
          en: b.label,
          ja: b.label,
          zh: b.label,
        },
        nickname_i18n: {
          ko: b.nickname,
          en: b.nickname,
          ja: b.nickname,
          zh: b.nickname,
        },
        summary_i18n: {
          ko: b.summary,
          en: b.summary,
          ja: b.summary,
          zh: b.summary,
        },
        strengths_i18n: cloneList(b.strengths ?? []),
        weaknesses_i18n: cloneList(b.weaknesses ?? []),
        idealActivities_i18n: cloneList(b.idealActivities ?? []),
        careTips_i_n: undefined,
        careTips_i18n: cloneList(b.careTips ?? []),
        recommendedCategories_i18n: cloneList(b.recommendedCategories ?? []),
      } satisfies DogTypeProfileI18n,
    ];
  })
) as Record<DogCode, DogTypeProfileI18n>;

// 2) 타입별 번역 Override (ko는 base 유지, en/ja/zh만 덮어쓰기)
export const dogTypesI18n: Record<DogCode, DogTypeProfileI18n> = {
  ...baseI18n,

  // ---------- ENTJ ----------
  ENTJ: {
    ...baseI18n.ENTJ,

    nickname_i18n: {
      ...baseI18n.ENTJ.nickname_i18n,
      en: "Charismatic Pack Leader",
      ja: "カリスマ犬リーダー",
      zh: "富有魅力的犬领袖",
    },

    summary_i18n: {
      ...baseI18n.ENTJ.summary_i18n,
      en: "A leader-type dog that wants to establish household order. When given a goal, it pushes until the end.",
      ja: "家の秩序を自ら作りたがるリーダー型の犬。目標が与えられると最後までやり抜く。",
      zh: "想在家里自行建立秩序的领袖型犬。给出目标后会坚持到底。",
    },

    strengths_i18n: {
      ...baseI18n.ENTJ.strengths_i18n,
      en: [
        "Learns quickly and understands rules well",
        "Exceptional focus with clear goals",
        "Leader instinct to manage surroundings",
        "High engagement in mission-type play",
      ],
      ja: [
        "訓練習得が早くルール理解も優秀",
        "目標があると集中力が最高",
        "環境を自ら管理しようとするリーダー気質",
        "ミッション型遊びへの高い没入度",
      ],
      zh: [
        "学习快且理解规则强",
        "有目标时专注力最佳",
        "有管理环境的领袖气质",
        "高度投入任务型游戏",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ENTJ.weaknesses_i18n,
      en: [
        "Rigid with rule changes",
        "Possible rank conflict with other dogs",
        "Shows displeasure if things aren't done its way",
        "Becomes unstable if owner lacks consistency",
      ],
      ja: [
        "ルール変更に弱く柔軟性が低い",
        "ほかの犬と序列争いの可能性",
        "自分のやり方でないと不満を示す",
        "飼い主の一貫性がないと不安定に",
      ],
      zh: [
        "缺乏弹性，对规则变动敏感",
        "可能与其他狗发生地位冲突",
        "不是自己的方式就不满",
        "主人缺乏一致性时会不安",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ENTJ.idealActivities_i18n,
      en: ["Agility courses", "Mission-style nosework", "Tug games", "Fetch with return"],
      ja: ["アジリティコース", "ミッション型ノーズワーク", "引っ張り遊び", "ボール遊び"],
      zh: ["敏捷课程", "任务型嗅闻游戏", "拔河游戏", "捡球游戏"],
    },

    careTips_i18n: {
      ...baseI18n.ENTJ.careTips_i18n,
      en: [
        "Avoid changing training rules often",
        "Provide clear reward structures",
        "Control dog-to-dog introductions",
        "Offer patrol/role-play games",
      ],
      ja: [
        "訓練ルールは頻繁に変えない",
        "明確な報酬構造を提供",
        "犬同士の対面はコントロールする",
        "巡回・役割遊びを提供",
      ],
      zh: [
        "训练规则不要常变",
        "提供明确的奖励结构",
        "控制与其他狗的接触",
        "提供巡逻或角色扮演游戏",
      ],
    },
  },

  // ---------- ENTP ----------
  ENTP: {
    ...baseI18n.ENTP,

    nickname_i18n: {
      ...baseI18n.ENTP.nickname_i18n,
      en: "Treat Inventor",
      ja: "おやつ発明家",
      zh: "零食发明家",
    },

    summary_i18n: {
      ...baseI18n.ENTP.summary_i18n,
      en: "A brainy dog bursting with creativity and curiosity, preferring novelty over rules.",
      ja: "創造性と好奇心が爆発する頭脳派の犬。ルールより新しさを好む。",
      zh: "创意与好奇心爆棚的头脑型犬。相比规则更喜欢新鲜事物。",
    },

    strengths_i18n: {
      ...baseI18n.ENTP.strengths_i18n,
      en: [
        "Fast at adapting to new play",
        "Excellent puzzle-solving ability",
        "Humorous responses to owner",
        "Strong with cognitive enrichment",
      ],
      ja: [
        "新しい遊びや変化への順応が早い",
        "パズル玩具の解決能力が高い",
        "飼い主の反応を見てユーモラスな行動",
        "知能刺激に強い",
      ],
      zh: [
        "快速适应新游戏",
        "解谜玩具能力强",
        "会看主人反应搞笑互动",
        "非常擅长智力刺激",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ENTP.weaknesses_i18n,
      en: [
        "Ignores or breaks rules",
        "Very sensitive to boredom",
        "May destroy household items creatively",
        "Explores dangerous areas fearlessly",
      ],
      ja: [
        "ルールを無視・破る",
        "退屈にとても弱い",
        "家の物を創造的に破壊する可能性",
        "危険な場所でも怖がらず探索",
      ],
      zh: [
        "会无视规则或破坏规则",
        "极度不耐无聊",
        "可能创造性破坏家具",
        "无畏探索危险区域",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ENTP.idealActivities_i18n,
      en: ["Puzzle feeders", "Hidden-treat searching", "Exploring new walk routes", "Trick training"],
      ja: ["パズルフィーダー", "隠しおやつ探し", "新しい散歩ルートの探索", "トリック訓練"],
      zh: ["益智食具", "寻找隐藏零食", "探索新散步路线", "花式训练"],
    },

    careTips_i18n: {
      ...baseI18n.ENTP.careTips_i18n,
      en: ["Rotate toys often", "Short and varied play sessions", "Remove dangerous objects", "Give rewards quickly"],
      ja: ["玩具を頻繁に入れ替える", "短く多様な遊び", "危険物を片付ける", "報酬は素早く"],
      zh: ["常换玩具", "短而多样的游戏", "移除危险物品", "快速给予奖励"],
    },
  },

  // ---------- INTJ ----------
  INTJ: {
    ...baseI18n.INTJ,

    nickname_i18n: {
      ...baseI18n.INTJ.nickname_i18n,
      en: "Intellectual Sentry",
      ja: "知的な歩哨",
      zh: "智慧哨兵",
    },

    summary_i18n: {
      ...baseI18n.INTJ.summary_i18n,
      en: "An observer-type dog that analyzes the home and watches quietly.",
      ja: "家を分析し、静かに見守る観察者タイプの犬。",
      zh: "分析家庭、安静地观察的观察者型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.INTJ.strengths_i18n,
      en: [
        "Excellent at memorizing home patterns",
        "Great awareness of unfamiliar sounds",
        "Calm judgment",
        "Can rest independently",
      ],
      ja: [
        "家の構造・パターン記憶が優秀",
        "未知の音や動きに敏感",
        "落ち着いた判断力",
        "独立して休める",
      ],
      zh: ["记忆家庭结构能力强", "对陌生声音敏锐", "判断冷静", "能独立安静休息"],
    },

    weaknesses_i18n: {
      ...baseI18n.INTJ.weaknesses_i18n,
      en: [
        "Stiff around strangers",
        "Shows little emotion",
        "Gets anxious with frequent change",
        "Slow to adapt to new activities",
      ],
      ja: [
        "見知らぬ人に硬くなる",
        "感情表現が少ない",
        "変化が多いと不安",
        "新しい遊びへの適応が遅い",
      ],
      zh: ["面对陌生人会僵硬", "情绪表达少", "变化多会焦虑", "新游戏适应慢"],
    },

    idealActivities_i18n: {
      ...baseI18n.INTJ.idealActivities_i18n,
      en: ["Watching outside", "Routine walks", "Low-stim nosework", "Quiet bonding time"],
      ja: ["窓の外観察", "決まったコース散歩", "低刺激ノーズワーク", "静かな時間"],
      zh: ["看窗外", "固定路线散步", "低刺激嗅闻", "安静陪伴时间"],
    },

    careTips_i18n: {
      ...baseI18n.INTJ.careTips_i18n,
      en: [
        "Introduce changes slowly",
        "Provide predictable routines",
        "Offer stable resting space",
        "Observe emotional signals",
      ],
      ja: [
        "環境変化はゆっくり",
        "予測可能なルーティン",
        "安定した休憩場所",
        "感情サインを観察",
      ],
      zh: ["慢慢引入环境变化", "提供可预测的作息", "提供稳定休息区", "观察情绪信号"],
    },
  },

  // ---------- INTP ----------
  INTP: {
    ...baseI18n.INTP,

    nickname_i18n: {
      ...baseI18n.INTP.nickname_i18n,
      en: "Curious Thinker",
      ja: "好奇心旺盛な思索家",
      zh: "好奇的小思考家",
    },

    summary_i18n: {
      ...baseI18n.INTP.summary_i18n,
      en: "A dog that explores independently and loves brain-based play.",
      ja: "一人で探求し、頭脳系の遊びに没頭するタイプ。",
      zh: "喜欢独自探索并沉浸在动脑游戏中的类型。",
    },

    strengths_i18n: {
      ...baseI18n.INTP.strengths_i18n,
      en: [
        "Great with puzzle toys",
        "Enjoys independent play",
        "Logical behavior pattern",
        "Good at observing their owner",
      ],
      ja: [
        "パズル玩具が得意",
        "一人遊びが得意",
        "論理的な行動",
        "飼い主の観察が得意",
      ],
      zh: ["擅长益智玩具", "喜欢独处玩耍", "行为模式逻辑性强", "观察主人能力出色"],
    },

    weaknesses_i18n: {
      ...baseI18n.INTP.weaknesses_i18n,
      en: [
        "Struggles with physical affection",
        "Weaker social skills",
        "May explore risky structures",
        "Not expressive emotionally",
      ],
      ja: [
        "スキンシップが苦手",
        "社会性が弱い",
        "危険な場所を探検する可能性",
        "感情表現が苦手",
      ],
      zh: ["不喜欢肢体接触", "社交性较弱", "可能探索危险区域", "情绪表达较弱"],
    },

    idealActivities_i18n: {
      ...baseI18n.INTP.idealActivities_i18n,
      en: ["Puzzle feeders", "Deep nosework", "Window watching", "Quiet walks"],
      ja: ["パズルフィーダー", "深いノーズワーク", "窓の外を見る", "静かな散歩"],
      zh: ["益智食具", "深度嗅闻", "看窗外", "安静散步"],
    },

    careTips_i18n: {
      ...baseI18n.INTP.careTips_i18n,
      en: [
        "Respect alone time",
        "Do not force physical affection",
        "Provide cognitive toys",
        "Approach slowly",
      ],
      ja: [
        "一人の時間を尊重",
        "スキンシップを強要しない",
        "知育玩具を提供",
        "ゆっくり近づく",
      ],
      zh: ["尊重独处时间", "不要强迫肢体接触", "提供动脑玩具", "慢慢接近"],
    },
  },

  // ---------- ENFJ ----------
  ENFJ: {
    ...baseI18n.ENFJ,

    nickname_i18n: {
      ...baseI18n.ENFJ.nickname_i18n,
      en: "Everyone’s Angel",
      ja: "万人の天使",
      zh: "人人的小天使",
    },

    summary_i18n: {
      ...baseI18n.ENFJ.summary_i18n,
      en: "A devoted dog with superb emotional attunement that loves everyone.",
      ja: "感情の共感に優れ、皆を愛する献身的な犬。",
      zh: "情感共鸣力很强、喜欢所有人的奉献型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ENFJ.strengths_i18n,
      en: [
        "Friendly to people and animals",
        "Sensitive to emotional changes",
        "Excellent with praise-based training",
        "Improves home atmosphere",
      ],
      ja: [
        "人や動物に友好的",
        "感情変化を敏感に察知",
        "褒めて伸ばす訓練が得意",
        "家庭の雰囲気を良くする",
      ],
      zh: [
        "对人和动物都很友好",
        "对情绪变化敏感",
        "擅长表扬式训练",
        "能提升家庭氛围",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ENFJ.weaknesses_i18n,
      en: [
        "Gets anxious without attention",
        "Weak with conflict/noise",
        "Risk of separation anxiety",
        "Emotionally drained easily",
      ],
      ja: [
        "注目されないと不安",
        "衝突や騒音に弱い",
        "分離不安のリスク",
        "感情の消耗が早い",
      ],
      zh: [
        "没得到关注会焦虑",
        "不擅长冲突/噪音",
        "有分离焦虑风险",
        "情绪消耗快",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ENFJ.idealActivities_i18n,
      en: ["Family walks", "Praise play", "Trick training", "Cafe/park outings"],
      ja: ["家族散歩", "褒め遊び", "トリック訓練", "カフェや公園にお出かけ"],
      zh: ["家庭散步", "表扬类游戏", "花式训练", "咖啡馆/公园外出"],
    },

    careTips_i18n: {
      ...baseI18n.ENFJ.careTips_i18n,
      en: [
        "Frequent praise",
        "Practice being alone",
        "Avoid conflict environments",
        "Emotional care is important",
      ],
      ja: [
        "たくさん褒める",
        "一人時間の練習が必要",
        "衝突環境を避ける",
        "感情ケアが重要",
      ],
      zh: ["多表扬", "练习独处", "避免冲突环境", "情绪关怀很重要"],
    },
  },

  // ---------- ENFP ----------
  ENFP: {
    ...baseI18n.ENFP,

    nickname_i18n: {
      ...baseI18n.ENFP.nickname_i18n,
      en: "Happy Mood Maker",
      ja: "ハッピーなムードメーカー",
      zh: "快乐气氛制造机",
    },

    summary_i18n: {
      ...baseI18n.ENFP.summary_i18n,
      en: "An energetic dog that is bright, humorous, and loves new stimuli.",
      ja: "明るくユーモラスで、新しい刺激が大好きなエネルギー型の犬。",
      zh: "开朗幽默、喜欢新鲜刺激的能量型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ENFP.strengths_i18n,
      en: [
        "Always positive",
        "Adapts quickly to new stimuli",
        "Loves people and animals",
        "Spreads cheerful mood",
      ],
      ja: [
        "常に前向き",
        "新しい刺激へ素早く適応",
        "人も動物も大好き",
        "楽観的な雰囲気を伝える",
      ],
      zh: [
        "总是很积极",
        "对新刺激适应快",
        "喜欢人与动物",
        "能传递乐观情绪",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ENFP.weaknesses_i18n,
      en: [
        "Short training attention span",
        "Emotional ups and downs",
        "Prone to overexcitement",
        "Weak with rule consistency",
      ],
      ja: [
        "集中力が短い",
        "感情の起伏がある",
        "興奮しやすい",
        "ルール維持が苦手",
      ],
      zh: [
        "训练注意力短",
        "情绪波动大",
        "容易过度兴奋",
        "不擅长遵守规则",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ENFP.idealActivities_i18n,
      en: [
        "Spontaneous running",
        "Exploring new routes",
        "Meeting dog friends",
        "Short play sessions",
      ],
      ja: ["即興ランニング", "新しい散歩道の探索", "犬の友達と遊ぶ", "短い遊びセッション"],
      zh: ["即兴奔跑", "探索新路线", "和狗朋友见面", "短时间玩耍"],
    },

    careTips_i18n: {
      ...baseI18n.ENFP.careTips_i18n,
      en: [
        "Short and varied training",
        "Rest when overexcited",
        "Manage risky environments",
        "Maintain basic routines",
      ],
      ja: [
        "短く多様な訓練",
        "興奮したら休憩",
        "危険環境の管理",
        "基本ルーティンの維持",
      ],
      zh: ["短而多样的训练", "过度兴奋时要休息", "管理危险环境", "维持基础作息"],
    },
  },

  // ---------- INFJ ----------
  INFJ: {
    ...baseI18n.INFJ,

    nickname_i18n: {
      ...baseI18n.INFJ.nickname_i18n,
      en: "Delicate Empath",
      ja: "繊細な共感家",
      zh: "细腻的共情犬",
    },

    summary_i18n: {
      ...baseI18n.INFJ.summary_i18n,
      en: "An emotional dog that forms deep bonds with its owner and enjoys quiet bonding.",
      ja: "飼い主と深い絆を持ち、静かなスキンシップを好む感性型の犬。",
      zh: "与主人有深厚羁绊，喜欢安静互动的感性型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.INFJ.strengths_i18n,
      en: [
        "Highly empathetic",
        "Quiet and devoted",
        "Prefers subtle bonding",
        "Performs best with stable routines",
      ],
      ja: [
        "感情キャッチ能力が高い",
        "静かで献身的",
        "ささやかな交流を好む",
        "安定ルーティンで最良の状態",
      ],
      zh: [
        "情绪感知能力强",
        "安静且忠诚",
        "喜欢细腻互动",
        "在稳定作息下状态最佳",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.INFJ.weaknesses_i18n,
      en: [
        "Sensitive to unfamiliar environments",
        "Builds anxiety easily",
        "Feels loss when left alone",
        "Affected by owner's mood",
      ],
      ja: [
        "未知の環境に弱い",
        "不安が溜まりやすい",
        "一人にされると喪失感",
        "飼い主の気分に左右される",
      ],
      zh: [
        "对陌生环境敏感",
        "容易累积焦虑",
        "独处会感到失落",
        "容易被主人的情绪影响",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.INFJ.idealActivities_i18n,
      en: ["Massage/petting", "Quiet walks", "Brushing sessions", "Resting together"],
      ja: ["マッサージ・撫でる", "静かな散歩", "ブラッシング", "一緒に横になって休む"],
      zh: ["按摩/抚摸", "安静散步", "梳毛", "一起安静休息"],
    },

    careTips_i18n: {
      ...baseI18n.INFJ.careTips_i18n,
      en: [
        "Maintain routines",
        "Minimize environmental changes",
        "Catch early anxiety signs",
        "Frequent emotional care",
      ],
      ja: [
        "ルーティンが重要",
        "環境変化は最小限に",
        "不安サインを早く察知",
        "感情ケアを頻繁に",
      ],
      zh: ["保持固定作息", "减少环境变化", "及早捕捉焦虑信号", "经常情绪照顾"],
    },
  },

  // ---------- INFP ----------
  INFP: {
    ...baseI18n.INFP,

    nickname_i18n: {
      ...baseI18n.INFP.nickname_i18n,
      en: "Pure Poet Pup",
      ja: "純粋な詩人犬",
      zh: "纯真小诗犬",
    },

    summary_i18n: {
      ...baseI18n.INFP.summary_i18n,
      en: "A gentle, quiet dog that longs for praise and soft touch.",
      ja: "穏やかで静かで、褒め言葉と優しいタッチを求める感性型の犬。",
      zh: "温柔安静、渴望称赞与轻柔触碰的感性型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.INFP.strengths_i18n,
      en: [
        "Gentle and empathetic",
        "Naturally likable",
        "Creative in play",
        "Adorably expressive",
      ],
      ja: [
        "穏やかで共感力が高い",
        "人に好かれやすい",
        "創造的な遊びが得意",
        "感情表現が可愛い",
      ],
      zh: ["温和又有同理心", "讨人喜欢", "擅长创造性玩法", "情绪表达可爱"],
    },

    weaknesses_i18n: {
      ...baseI18n.INFP.weaknesses_i18n,
      en: [
        "Withdraws when anxious",
        "Remembers scolding for long",
        "Passive toward challenges",
        "Sensitive senses",
      ],
      ja: [
        "不安が溜まると萎縮",
        "叱られたことを長く覚えている",
        "新しい挑戦に消極的",
        "感覚が敏感",
      ],
      zh: ["焦虑累积会萎缩", "对责备记很久", "对新挑战被动", "感官敏感"],
    },

    idealActivities_i18n: {
      ...baseI18n.INFP.idealActivities_i18n,
      en: ["Hide-and-seek", "Quiet nosework", "Gentle walks", "Soft bonding moments"],
      ja: ["かくれんぼ", "静かなノーズワーク", "やさしい散歩", "スキンシップ"],
      zh: ["捉迷藏", "安静嗅闻", "轻松散步", "小小亲密互动"],
    },

    careTips_i18n: {
      ...baseI18n.INFP.careTips_i18n,
      en: [
        "Positive reinforcement training",
        "Frequent small wins",
        "Avoid loud noises",
        "Watch anxiety signals",
      ],
      ja: [
        "ポジティブ強化訓練",
        "小さな成功体験を多く",
        "大きな音を避ける",
        "不安サインを観察",
      ],
      zh: ["正向训练", "多给小成功经验", "避免大声环境", "观察焦虑信号"],
    },
  },

  // ---------- ESTJ ----------
  ESTJ: {
    ...baseI18n.ESTJ,

    nickname_i18n: {
      ...baseI18n.ESTJ.nickname_i18n,
      en: "No-Nonsense Drill Instructor",
      ja: "断固たる教官犬",
      zh: "干练小教官",
    },

    summary_i18n: {
      ...baseI18n.ESTJ.summary_i18n,
      en: "A principled dog that lives by the book and follows rules strictly.",
      ja: "規則をよく守り、FMスタイルで生活する原則主義の犬。",
      zh: "遵守规则、按规范生活的原则型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ESTJ.strengths_i18n,
      en: [
        "Highly trained",
        "Strict routines",
        "Predictable behaviors",
        "Very responsible",
      ],
      ja: [
        "訓練レベルが高い",
        "生活ルーティンが徹底",
        "予測可能な行動",
        "責任感が強い",
      ],
      zh: ["训练熟练", "生活规律严格", "行为可预测", "责任感强"],
    },

    weaknesses_i18n: {
      ...baseI18n.ESTJ.weaknesses_i18n,
      en: [
        "Lacks flexibility",
        "Gets unstable when rules break",
        "Can appear authoritative",
        "Slow to adapt to change",
      ],
      ja: [
        "柔軟性がない",
        "ルールが崩れると不安定",
        "権威的に見えることがある",
        "変化に適応するのが遅い",
      ],
      zh: ["缺乏弹性", "规则破坏会不安", "可能给人权威感", "适应变化慢"],
    },

    idealActivities_i18n: {
      ...baseI18n.ESTJ.idealActivities_i18n,
      en: ["Patterned walks", "Agility", "Repetitive training", "Structured fetch"],
      ja: ["決まったパターン散歩", "アジリティ", "反復訓練", "構造化されたボール遊び"],
      zh: ["固定路线散步", "敏捷训练", "重复训练", "结构化捡球"],
    },

    careTips_i18n: {
      ...baseI18n.ESTJ.careTips_i18n,
      en: [
        "Keep rules consistent",
        "Provide steady routines",
        "Introduce new things slowly",
        "Consistency matters",
      ],
      ja: [
        "ルール維持が重要",
        "一定のルーティン提供",
        "新しいことはゆっくり導入",
        "一貫性が大事",
      ],
      zh: ["保持规则一致", "提供稳定作息", "慢慢引入新事物", "保持一致性很重要"],
    },
  },

  // ---------- ESFJ ----------
  ESFJ: {
    ...baseI18n.ESFJ,

    nickname_i18n: {
      ...baseI18n.ESFJ.nickname_i18n,
      en: "Super Care Mom",
      ja: "スーパーケアママ犬",
      zh: "超级照顾妈咪狗",
    },

    summary_i18n: {
      ...baseI18n.ESFJ.summary_i18n,
      en: "A sociable, affectionate dog that brings warmth to the whole family.",
      ja: "社交性が高く、家族みんなに愛情を注ぐケア型の犬。",
      zh: "社交能力强，向全家散播爱意的照顾型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ESFJ.strengths_i18n,
      en: [
        "Good with everyone",
        "Expressive affection",
        "Warms household mood",
        "Responds quickly to praise",
      ],
      ja: [
        "誰とでも仲良くできる",
        "愛情表現豊か",
        "家庭の雰囲気を温かくする",
        "褒めに反応が早い",
      ],
      zh: ["和任何人都能相处", "表达爱意丰富", "让家庭氛围更温暖", "对称赞反应快"],
    },

    weaknesses_i18n: {
      ...baseI18n.ESFJ.weaknesses_i18n,
      en: [
        "Feels hurt without attention",
        "Can't stay alone long",
        "Has trouble refusing",
        "Sensitive to noise",
      ],
      ja: [
        "注目されないと寂しくなる",
        "一人で長時間いられない",
        "断れない性格",
        "騒音に弱い",
      ],
      zh: ["得不到关注会难过", "无法长时间独处", "不擅长拒绝别人", "对噪音敏感"],
    },

    idealActivities_i18n: {
      ...baseI18n.ESFJ.idealActivities_i18n,
      en: ["Family time", "Trick training", "Walks", "Outings to social places"],
      ja: ["家族時間", "芸の訓練", "散歩", "人が多い場所へのお出かけ"],
      zh: ["家庭时光", "花式训练", "散步", "去人多地方玩"],
    },

    careTips_i18n: {
      ...baseI18n.ESFJ.careTips_i18n,
      en: [
        "Give frequent attention",
        "Prevent separation anxiety",
        "Allow rest when tired",
        "Give lots of praise",
      ],
      ja: [
        "頻繁に関心を向ける",
        "分離不安予防",
        "疲れたら休ませる",
        "たくさん褒める",
      ],
      zh: ["经常给予关注", "预防分离焦虑", "累了就休息", "多多表扬"],
    },
  },

  // ---------- ISTJ ----------
  ISTJ: {
    ...baseI18n.ISTJ,

    nickname_i18n: {
      ...baseI18n.ISTJ.nickname_i18n,
      en: "Rule Keeper",
      ja: "ルールの守り手",
      zh: "规则守护者",
    },

    summary_i18n: {
      ...baseI18n.ISTJ.summary_i18n,
      en: "A meticulous dog that loves precise routines and structured lifestyles.",
      ja: "正確なルーティンと構造を愛する几帳面な犬。",
      zh: "热爱精确作息和结构的细致型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ISTJ.strengths_i18n,
      en: [
        "Strong routines",
        "Great memory",
        "Calm and predictable",
        "Good training endurance",
      ],
      ja: [
        "正確な生活習慣",
        "記憶力が良い",
        "落ち着いて予測可能",
        "訓練持続力が高い",
      ],
      zh: ["生活习惯规整", "记忆力强", "平静可预测", "训练持续力高"],
    },

    weaknesses_i18n: {
      ...baseI18n.ISTJ.weaknesses_i18n,
      en: [
        "Slow to adapt to novelty",
        "Stressed by environmental change",
        "Low emotional expression",
        "Lacks flexibility",
      ],
      ja: [
        "新しい刺激へ適応が遅い",
        "環境変化に弱い",
        "感情表現が少ない",
        "柔軟性がない",
      ],
      zh: ["对新刺激适应慢", "对环境变化敏感", "情绪表达少", "缺乏弹性"],
    },
  },

  // ---------- ISFJ ----------
  ISFJ: {
    ...baseI18n.ISFJ,

    strengths_i18n: {
      ...baseI18n.ISFJ.strengths_i18n,
      en: [
        "Deeply attached",
        "Gentle and quiet",
        "Caregiver-centered behavior",
        "Strong indoor adaptability",
      ],
      ja: [
        "深い愛着がある",
        "おだやかで静か",
        "飼い主中心の行動",
        "室内適応力が高い",
      ],
      zh: [
        "非常依戀主人",
        "溫順安靜",
        "以飼主為中心的行為模式",
        "室內適應能力強",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ISFJ.weaknesses_i18n,
      en: [
        "Over-attachment → risk of separation anxiety",
        "Passive toward unfamiliar stimuli",
        "Feels anxious when owner is out of sight",
        "May suppress own needs",
      ],
      ja: [
        "強すぎる愛着 → 分離不安のリスク",
        "未知の刺激に消極的",
        "飼い主の姿が見えないと不安になりやすい",
        "自分の欲求を抑えてしまうことがある",
      ],
      zh: [
        "過度依賴 → 有分離焦慮風險",
        "對陌生刺激較為消極",
        "看不到主人會不安",
        "容易壓抑自身需求",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ISFJ.idealActivities_i18n,
      en: [
        "Walking beside caregiver",
        "Gentle petting",
        "Quiet play",
        "Resting close by",
      ],
      ja: [
        "飼い主のそばを歩く散歩",
        "やさしく撫でてもらうこと",
        "静かな遊び",
        "そばでゆったり休むこと",
      ],
      zh: [
        "在主人旁邊散步",
        "被溫柔撫摸",
        "安靜的遊戲",
        "靠近主人休息",
      ],
    },

    careTips_i18n: {
      ...baseI18n.ISFJ.careTips_i18n,
      en: [
        "Practice being alone little by little",
        "Introduce new people slowly",
        "Teach that short separations always end with return",
        "Respect their need for quiet rest",
      ],
      ja: [
        "少しずつ一人の時間を練習する",
        "新しい人にはゆっくり慣れさせる",
        "短い分離でも必ず戻ってくる経験を積ませる",
        "静かに休む時間を尊重する",
      ],
      zh: [
        "逐步練習獨處",
        "慢慢認識新的人",
        "讓牠體驗主人一定會回來",
        "尊重牠需要安靜的休息時間",
      ],
    },
  },

  // ---------- ESTP ----------
  ESTP: {
    ...baseI18n.ESTP,

    nickname_i18n: {
      ...baseI18n.ESTP.nickname_i18n,
      en: "Live-for-Today Rascal",
      ja: "今日を生きるやんちゃ犬",
      zh: "活在当下的小捣蛋",
    },

    summary_i18n: {
      ...baseI18n.ESTP.summary_i18n,
      en: "An action-driven dog that seeks immediate fun and thrill; extremely agile and energetic.",
      ja: "目の前の楽しさとスリルを追い求めるアクション型の犬。とても俊敏で活動的。",
      zh: "追逐眼前刺激与乐趣的行动派犬；非常敏捷、精力充沛。",
    },

    strengths_i18n: {
      ...baseI18n.ESTP.strengths_i18n,
      en: [
        "Excellent reflexes and physical ability",
        "Adapts quickly to new places and situations",
        "Loves short, intense play",
        "Brings energetic vibe to the home",
      ],
      ja: [
        "反応速度と運動能力が非常に高い",
        "新しい状況・場所への適応が早い",
        "短く激しい遊びが大好き",
        "家庭に活気をもたらす",
      ],
      zh: [
        "反应速度与运动能力极佳",
        "对新环境适应很快",
        "喜欢短而刺激的游戏",
        "让家庭氛围更有活力",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ESTP.weaknesses_i18n,
      en: [
        "Risky impulsive behavior (e.g., sudden sprinting)",
        "May cause trouble when bored",
        "Hard to control when overexcited",
        "May damage household items while chasing excitement",
      ],
      ja: [
        "衝動的な行動（急に走り出すなど）で事故の危険",
        "退屈すると問題行動につながる可能性",
        "興奮しすぎるとコントロールが難しい",
        "家の物を追いかけて壊す危険",
      ],
      zh: [
        "冲动行为（突然冲出去等）有危险",
        "无聊时可能出现破坏行为",
        "过度兴奋时难以控制",
        "追逐刺激可能损坏家中物品",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ESTP.idealActivities_i18n,
      en: [
        "Frisbee and fetch",
        "Outdoor walks with full-speed running",
        "Spontaneous tug games",
        "Jump and agility play",
      ],
      ja: [
        "フリスビー・ボール遊び",
        "全力疾走できる屋外散歩",
        "即興の引っ張り遊び",
        "ジャンプ・敏捷性遊び",
      ],
      zh: [
        "飞盘/捡球游戏",
        "可以全速奔跑的户外散步",
        "即兴拔河游戏",
        "跳跃与敏捷训练类游戏",
      ],
    },

    careTips_i18n: {
      ...baseI18n.ESTP.careTips_i18n,
      en: [
        "Use strong harness/leash for safety",
        "Give plenty of exercise time",
        "Clarify where running is allowed",
        "Train calming/rest signals",
      ],
      ja: [
        "丈夫なハーネス・リードが必須",
        "十分な運動時間を確保",
        "走ってもよい/ダメな場所を区別",
        "興奮を落ち着かせる休息サインを訓練",
      ],
      zh: [
        "使用结实的胸背/牵引绳确保安全",
        "提供足够的运动时间",
        "明确能跑/不能跑的区域",
        "训练让其冷静的休息信号",
      ],
    },
  },

  // ---------- ESFP ----------
  ESFP: {
    ...baseI18n.ESFP,

    nickname_i18n: {
      ...baseI18n.ESFP.nickname_i18n,
      en: "Popular Crowd-Pleaser",
      ja: "人気者の芸達者犬",
      zh: "人气十足的小明星",
    },

    summary_i18n: {
      ...baseI18n.ESFP.summary_i18n,
      en: "A showy, attention-loving dog that excels at charm and tricks.",
      ja: "人の注目や視線が大好きなショーマン気質の犬。芸や愛嬌が得意。",
      zh: "喜欢成为焦点、擅长卖萌表演的小明星型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ESFP.strengths_i18n,
      en: [
        "Friendly even to strangers",
        "Creates tricks and performances naturally",
        "Brightens household mood",
        "Fast at trick-based training",
      ],
      ja: [
        "見知らぬ人にもすぐ懐く",
        "芸やパフォーマンスを自分で生み出す",
        "家庭の雰囲気を明るくする",
        "芸の訓練に素早く反応",
      ],
      zh: [
        "对陌生人也很友好",
        "天生会表演与卖萌",
        "让家里氛围变得更明亮",
        "对花式训练反应迅速",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ESFP.weaknesses_i18n,
      en: [
        "Seeks attention through mischief if ignored",
        "Gets distracted during training",
        "Loses motivation without immediate reward",
        "May jump/lick excessively",
      ],
      ja: [
        "注目されないと悪戯で気を引こうとする",
        "訓練中に注意が散漫になりやすい",
        "即時報酬がないとやる気低下",
        "ジャンプ・なめるなどマナーが崩れる可能性",
      ],
      zh: [
        "得不到关注会通过打闹来吸引注意",
        "训练中容易分心",
        "没有即时奖励会缺乏动力",
        "可能出现跳扑、舔舐等礼仪问题",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ESFP.idealActivities_i18n,
      en: [
        "Trick training",
        "Photo/video posing play",
        "Outings to social places",
        "Walks with cute outfits/accessories",
      ],
      ja: [
        "芸の訓練",
        "写真・動画のポージング遊び",
        "人が多い場所へのお出かけ",
        "可愛い服・アクセサリーを着て散歩",
      ],
      zh: [
        "花式训练",
        "拍照/拍影片姿势游戏",
        "去人多的地方玩",
        "穿可爱的衣服散步",
      ],
    },

    careTips_i18n: {
      ...baseI18n.ESFP.careTips_i18n,
      en: [
        "Give plenty of praise & attention",
        "Short, fun training to keep focus",
        "Provide rest after stimulating days",
        "Avoid overdoing photos/videos",
      ],
      ja: [
        "たっぷり褒めて関心を向ける",
        "短く楽しい訓練で集中力維持",
        "刺激の多い日は十分休ませる",
        "撮影は無理をさせない",
      ],
      zh: [
        "多给予关注和称赞",
        "用短而有趣的训练维持注意力",
        "刺激多的一天后要充分休息",
        "拍照不要过度勉强",
      ],
    },
  },

  // ---------- ISTP ----------
  ISTP: {
    ...baseI18n.ISTP,

    nickname_i18n: {
      ...baseI18n.ISTP.nickname_i18n,
      en: "Unbothered Treat Inventor",
      ja: "無頓着なおやつ発明家",
      zh: "淡定的零食发明家",
    },

    summary_i18n: {
      ...baseI18n.ISTP.summary_i18n,
      en: "A practical dog valuing independence and efficient behavior; cares about maintaining its own pace.",
      ja: "独立心が強く効率的な行動を好む実用主義の犬。自分のペースが重要。",
      zh: "独立、追求高效的实用主义犬，非常重视自己的节奏。",
    },

    strengths_i18n: {
      ...baseI18n.ISTP.strengths_i18n,
      en: [
        "Great at independent play",
        "Quick at understanding structures/toys",
        "Calm with stable emotions",
        "More stable with minimal interference",
      ],
      ja: [
        "一人遊びが得意",
        "新しい物・環境の構造理解が早い",
        "落ち着いて感情の波が少ない",
        "干渉が少ないほど安定",
      ],
      zh: [
        "擅长独处玩耍",
        "快速理解新物品/环境结构",
        "情绪稳定、波动少",
        "干涉越少越稳定",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ISTP.weaknesses_i18n,
      en: [
        "Avoids physical affection",
        "May see training as bothersome",
        "Hides stress/pain signals",
        "Avoids repeating disliked activities",
      ],
      ja: [
        "スキンシップを避けがち",
        "訓練を面倒に感じることがある",
        "ストレス・痛みのサインを隠す",
        "嫌だった行動は二度としたがらない",
      ],
      zh: [
        "可能回避肢体接触",
        "觉得训练麻烦",
        "会隐藏压力和疼痛信号",
        "不喜欢的事下次绝不做",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ISTP.idealActivities_i18n,
      en: [
        "Independent nosework",
        "Chew toys/ball play",
        "Quiet exploration walks",
        "Free play with minimal interference",
      ],
      ja: ["一人ノーズワーク", "噛むおもちゃ・ボール遊び", "静かな探索散歩", "自由遊び"],
      zh: ["独立嗅闻", "咬咬玩具/球类玩耍", "安静探索散步", "自由玩耍"],
    },

    careTips_i18n: {
      ...baseI18n.ISTP.careTips_i18n,
      en: [
        "Provide clear reward structures",
        "Give affection only when they approach",
        "Check health/stress signals regularly",
        "Train short and clearly with fun elements",
      ],
      ja: [
        "報酬構造を明確に示す",
        "犬が寄ってきたときだけスキンシップ",
        "健康・ストレス状態をこまめにチェック",
        "訓練は短く明確に",
      ],
      zh: [
        "清晰展示奖励结构",
        "只在狗狗主动靠近时给予抚摸",
        "经常检查健康/压力状态",
        "训练简短明确并加入趣味",
      ],
    },
  },

  // ---------- ISFP ----------
  ISFP: {
    ...baseI18n.ISFP,

    nickname_i18n: {
      ...baseI18n.ISFP.nickname_i18n,
      en: "Quiet-Loving Artist",
      ja: "静けさを愛するアーティスト犬",
      zh: "喜爱宁静的小艺术家",
    },

    summary_i18n: {
      ...baseI18n.ISFP.summary_i18n,
      en: "A peace-loving sensory dog that enjoys gentle, quiet bonding.",
      ja: "感覚的な心地よさを愛し、静かなスキンシップを好む穏やかな犬。",
      zh: "热爱温柔、宁静互动的和平派感官型狗狗。",
    },

    strengths_i18n: {
      ...baseI18n.ISFP.strengths_i18n,
      en: [
        "Gentle and avoids conflict",
        "Enjoys sensory comforts (sun, breeze, textures)",
        "Prefers gentle physical affection",
        "Comfortable in quiet spaces",
      ],
      ja: [
        "穏やかで争いを避ける",
        "日差し・風・触感などの感覚が好き",
        "優しいスキンシップを好む",
        "静かな場所でリラックスしやすい",
      ],
      zh: [
        "温柔、不爱冲突",
        "喜爱阳光、微风、触感等感官享受",
        "喜欢温柔抚摸",
        "在安静空间很自在",
      ],
    },

    weaknesses_i18n: {
      ...baseI18n.ISFP.weaknesses_i18n,
      en: [
        "Sensitive to loud noises/unfamiliar stimuli",
        "Dislikes competitive/rough play",
        "Tends to endure stress silently",
        "May hide discomfort or fatigue",
      ],
      ja: [
        "大きな音や未知の刺激に敏感",
        "競争・激しい遊びを好まない",
        "ストレスを黙って耐える傾向",
        "疲労や不快を表現しないことがある",
      ],
      zh: [
        "对噪音与陌生刺激敏感",
        "不喜欢竞争或激烈的游戏",
        "容易默默忍受压力",
        "可能不表达疲劳或不适",
      ],
    },

    idealActivities_i18n: {
      ...baseI18n.ISFP.idealActivities_i18n,
      en: [
        "Warm sunny naps",
        "Slow scent walks",
        "Soft toy play",
        "Quiet resting beside owner",
      ],
      ja: [
        "日向ぼっこ",
        "ゆっくり匂い嗅ぎ散歩",
        "柔らかいおもちゃ遊び",
        "飼い主のそばで静かに休む",
      ],
      zh: ["晒太阳午睡", "慢慢嗅闻散步", "柔软玩具游戏", "安静地躺在主人身旁"],
    },

    careTips_i18n: {
      ...baseI18n.ISFP.careTips_i18n,
      en: [
        "Provide calm, stable environment",
        "Avoid excessive exercise/training",
        "Observe stress signals closely",
        "Provide soft bedding and blankets",
      ],
      ja: [
        "静かで安定した環境を提供",
        "無理な運動・訓練はしない",
        "ストレスサインを丁寧に観察",
        "触り心地の良い寝具を用意",
      ],
      zh: [
        "提供安静稳定的环境",
        "避免过度运动或训练",
        "注意观察压力信号",
        "提供柔软舒适的寝具",
      ],
    },
  },
};
