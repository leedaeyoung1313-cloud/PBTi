// data/catTypes.i18n.ts
// ADD-ONLY overlay to provide i18n for cat type profiles
// (dogTypes.i18n.ts와 동일한 구조, 고양이 버전)

import { catTypes, CatCode } from "./catTypes";

export type Lang = "ko" | "en" | "ja" | "zh";

export interface CatTypeProfileI18n {
  label_i_n?: never;
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

// 4개 언어 동일 복제
const cloneList = (arr: string[]) => ({
  ko: arr,
  en: arr,
  ja: arr,
  zh: arr,
});

// 원본 catTypes.ts → ko 원문을 4개 언어에 복제한 베이스 구조
const baseI18n = Object.fromEntries(
  (Object.keys(catTypes) as CatCode[]).map((code: CatCode) => {
    const b = catTypes[code];
    return [
      code,
      {
        label_i_n: undefined,
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
      } satisfies CatTypeProfileI18n,
    ];
  })
) as Record<CatCode, CatTypeProfileI18n>;

// ★★★★★ 여기서 타입별 번역 Override 적용 ★★★★★
export const catTypesI18n: Record<CatCode, CatTypeProfileI18n> = {
  ...baseI18n,

  /* ---------------------------------------------------
     ENTJ
  --------------------------------------------------- */
  ENTJ: {
    ...baseI18n.ENTJ,

    nickname_i18n: {
      ...baseI18n.ENTJ.nickname_i18n,
      en: "Charismatic Cat Leader",
      ja: "カリスマキャットリーダー",
      zh: "富有魅力的猫领导者",
    },
    summary_i18n: {
      ...baseI18n.ENTJ.summary_i18n,
      en: "A strategist-type cat that likes to overlook the whole house and control routes and layout.",
      ja: "家全体を見渡し、動線や構造をコントロールしようとする戦略家タイプの猫。",
      zh: "喜欢俯瞰整个家并试图掌控动线与结构的战略家型猫。",
    },

    strengths_i18n: {
      ko: baseI18n.ENTJ.strengths_i18n.ko,
      en: [
        "Quickly understands the layout and traffic flow of the house and creates its own routes.",
        "Observes from high places and performs the lookout role well.",
        "Likes routines and adapts well to structured environments.",
        "Observes the owner's behavior closely and judges situations well.",
      ],
      ja: [
        "家の構造や動線を素早く把握し、自分だけのルートを作る。",
        "高い場所から空間全体を観察し、見張り役をしっかりこなす。",
        "ルールやパターンが好きで、決まったルーティンになじみやすい。",
        "飼い主の行動をよく観察し、状況判断が得意である。",
      ],
      zh: [
        "能快速掌握家里的结构和动线，并规划自己的路线。",
        "喜欢待在高处观察全局，非常擅长当“警戒哨”。",
        "喜欢规则和固定模式，对稳定作息适应很好。",
        "会细致观察铲屎官的行为，并善于判断情况。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ENTJ.weaknesses_i18n.ko,
      en: [
        "May be stressed by sudden layout or environment changes.",
        "Sensitive to territorial intrusions.",
        "Can react aggressively to unwanted stimuli.",
        "Becomes unstable if the owner lacks consistency.",
      ],
      ja: [
        "家具の配置や環境の変化に敏感でストレスを感じやすい。",
        "縄張りを侵す存在に敏感に反応する。",
        "気に入らない刺激には攻撃的に反応することがある。",
        "飼い主の対応が一貫していないと不安定になりやすい。",
      ],
      zh: [
        "对家具摆放或环境变化非常敏感，容易有压力。",
        "对领地被侵犯非常敏感。",
        "对不喜欢的刺激可能有攻击性反应。",
        "如果铲屎官不够一致，会变得不稳定。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ENTJ.idealActivities_i18n.ko,
      en: [
        "Observing the house from a tall cat tower.",
        "Watching outside from a window hammock.",
        "Walking along fixed 'catwalk' routes.",
        "Mission-style treat finding games.",
      ],
      ja: [
        "高いキャットタワーから家全体を見渡す。",
        "窓辺ハンモックから外を観察する。",
        "決まったルートをキャットウォークする。",
        "おやつを隠して探すミッション遊び。",
      ],
      zh: [
        "在高处猫爬塔观察全家。",
        "从窗边吊床观察外面的世界。",
        "沿固定路线在家里巡游。",
        "寻找隐藏零食的任务型游戏。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ENTJ.careTips_i18n.ko,
      en: [
        "Introduce major environmental changes slowly.",
        "Provide enough high ground and hiding places.",
        "Introduce new cats gradually (scent → visual → meeting).",
        "Keep meals, litter box, and play routines stable.",
      ],
      ja: [
        "大きな環境変化は一度に行わず、段階的に慣らす。",
        "高い場所や隠れ家を十分に提供する。",
        "新しい猫を迎えるときは段階的に慣らす（匂い→視覚→対面）。",
        "食事・トイレ・遊びのルーティンを安定させる。",
      ],
      zh: [
        "环境变化不要一次性进行，应分阶段慢慢适应。",
        "提供足够的高处和躲藏点。",
        "引入新猫时分阶段适应（气味→视觉→见面）。",
        "保持饮食、厕所、玩耍的规律性。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ENTJ.recommendedCategories_i18n.ko,
      en: ["Tall cat tower", "Window hammock", "Pheromone spray", "Tunnels & patrol mats"],
      ja: ["高さのあるキャットタワー", "窓際ハンモック", "フェロモンスプレー", "トンネル・見回りマット"],
      zh: ["高处猫爬塔", "窗边吊床", "信息素喷雾", "隧道与巡逻垫"],
    },
  },

  /* ---------------------------------------------------
     ENTP
  --------------------------------------------------- */
  ENTP: {
    ...baseI18n.ENTP,

    nickname_i18n: {
      ...baseI18n.ENTP.nickname_i18n,
      en: "Prank Genius Hacker Cat",
      ja: "いたずら天才ハッカー猫",
      zh: "恶作剧天才黑客猫",
    },

    summary_i18n: {
      ...baseI18n.ENTP.summary_i18n,
      en: "A prank-inventor cat that studies doors, drawers, and toys to discover new ways to use them.",
      ja: "ドアや引き出し、おもちゃを研究し、新しい使い方を見つけ出す発明家タイプの猫。",
      zh: "研究门、抽屉和玩具，不断发明新玩法的恶作剧发明家型猫。",
    },

    strengths_i18n: {
      ko: baseI18n.ENTP.strengths_i18n.ko,
      en: [
        "Smart enough to open puzzle toys and drawers by themselves.",
        "Adapts quickly to new toys and environments.",
        "Repeats funny behaviors after observing owner reactions.",
        "Hates boredom and constantly seeks creative play.",
      ],
      ja: [
        "知育おもちゃや引き出しを自分で開けてしまうほど賢い。",
        "新しい環境やおもちゃに素早く適応する。",
        "飼い主の反応を見て面白い行動を繰り返す。",
        "退屈が苦手で、常に新しい遊びを求める。",
      ],
      zh: [
        "聪明到能自己打开益智玩具和抽屉。",
        "对新环境和新玩具适应得非常快。",
        "会观察铲屎官的反应并反复搞恶作剧。",
        "讨厌无聊，总是在寻找新鲜玩法。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ENTP.weaknesses_i18n.ko,
      en: [
        "May open things that should stay closed.",
        "Focuses on impulsive fun rather than consistent training.",
        "High risk of knocking over or breaking items.",
        "Curiosity makes them explore dangerous tight or high spaces.",
      ],
      ja: [
        "開けてはいけない場所まで開けようとすることがある。",
        "衝動的な楽しさを優先し、訓練が続きにくい。",
        "物を倒したり壊したりするリスクが高い。",
        "危険な狭い場所や高い所にも好奇心で挑戦してしまう。",
      ],
      zh: [
        "可能会打开不该开的东西。",
        "比起训练，更注重即时的好玩。",
        "容易弄倒东西或造成破坏。",
        "好奇心强，可能探索危险缝隙或高处。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ENTP.idealActivities_i18n.ko,
      en: [
        "Puzzle feeders and treat toys.",
        "Exploring bags, boxes, and small spaces.",
        "Laser pointer chase.",
        "Jumping and catwalking around structures at home.",
      ],
      ja: [
        "パズルフィーダーやおやつトイに挑戦する遊び。",
        "袋や箱、狭い場所の探検。",
        "レーザーポインター追いかけ遊び。",
        "家の構造を活かしたジャンプやキャットウォーク。",
      ],
      zh: [
        "挑战益智喂食器和零食玩具。",
        "探索袋子、箱子和小空间。",
        "追逐激光笔。",
        "利用家中结构进行跳跃和猫步游戏。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ENTP.careTips_i18n.ko,
      en: [
        "Install safety locks on windows and dangerous areas.",
        "Rotate toys often to prevent boredom.",
        "Keep fragile and dangerous items out of reach.",
        "Guide to a calm room if too excited.",
      ],
      ja: [
        "窓や危険な場所に安全ロックを付ける。",
        "飽きさせないためにおもちゃを頻繁に入れ替える。",
        "壊れやすいものや危険な物は片付ける。",
        "興奮しすぎたときは静かな部屋へ誘導する。",
      ],
      zh: [
        "在窗户和危险处安装安全锁。",
        "经常更换玩具避免无聊。",
        "提前收好易碎或危险物品。",
        "太兴奋时带到安静房间冷静。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ENTP.recommendedCategories_i18n.ko,
      en: ["Puzzle toys", "Automatic moving toys", "Sturdy boxes & tunnels", "Door/Window locks"],
      ja: ["知育おもちゃ", "自動おもちゃ", "丈夫な箱・トンネル", "ドア・窓ロック"],
      zh: ["益智玩具", "自动互动玩具", "结实的纸箱/隧道", "门窗安全锁"],
    },
  },
  INTJ: {
    ...baseI18n.INTJ,

    nickname_i18n: {
      ...baseI18n.INTJ.nickname_i18n,
      en: "Quiet Strategist Cat",
      ja: "静かなストラテジスト猫",
      zh: "安静的战略家猫",
    },
    summary_i18n: {
      ...baseI18n.INTJ.summary_i18n,
      en: "A cool-headed strategist cat that observes the owner and home from a distance and calculates every move.",
      ja: "少し離れた場所から飼い主や家の様子を観察し、すべての動きを計算している冷静な戦略家タイプの猫です。",
      zh: "在一旁观察主人与家庭，对每一个动作都冷静计算的战略家型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.INTJ.strengths_i18n.ko,
      en: [
        "Quickly grasps changes in the environment and people’s movement patterns.",
        "Stays calm without getting dragged into unnecessary noise or fuss.",
        "Uses hiding spots well to create a personal sense of safety.",
        "Good at sensing danger in advance and avoiding risky situations.",
      ],
      ja: [
        "環境の変化や人の動きを素早く把握する。",
        "不要な騒ぎに巻き込まれず、落ち着いていられる。",
        "隠れ家を上手に使い、自分の安心できる場所をつくる。",
        "危険な状況を事前に察知し、うまく回避する力が高い。",
      ],
      zh: [
        "能快速察觉环境变化和人的动线。",
        "不会被不必要的吵闹牵着走，始终保持冷静。",
        "善于利用躲藏点，为自己打造安全感。",
        "擅长提前察觉危险并避开高风险情况。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.INTJ.weaknesses_i18n.ko,
      en: [
        "Feels very uncomfortable with direct contact from strangers.",
        "Can easily become tense in completely new environments.",
        "Shows little emotion, so changes in condition are easy to miss.",
        "May bottle up stress and then show it all at once later.",
      ],
      ja: [
        "見知らぬ人から直接触られることを非常に負担に感じる。",
        "初めての環境では緊張しやすい。",
        "感情表現が少なく、体調の変化に気づきにくい。",
        "ストレスを溜め込み、一気に爆発してしまうことがある。",
      ],
      zh: [
        "对陌生人的直接接触非常不自在。",
        "在完全陌生的环境中很容易紧张。",
        "情绪表达很少，因此状态变化不容易被发现。",
        "习惯把压力憋在心里，之后可能一次性爆发出来。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.INTJ.idealActivities_i18n.ko,
      en: [
        "Quietly observing the surroundings from a hiding spot.",
        "Looking over the whole house from a window or high perch.",
        "Short but highly focused nosework games.",
        "Lying quietly next to the owner and resting.",
      ],
      ja: [
        "隠れ家から静かに周囲を観察すること。",
        "窓辺や高い場所から家全体を見下ろすこと。",
        "短時間でも集中度の高いノーズワーク遊び。",
        "飼い主のそばに静かに横になって休む時間。",
      ],
      zh: [
        "在藏身处安静地观察周围。",
        "从窗边或高处俯视整个家。",
        "时间虽短但非常专注的嗅闻游戏。",
        "安静地躺在主人身旁一起休息。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.INTJ.careTips_i18n.ko,
      en: [
        "Avoid forcing physical contact; wait until the cat comes on its own.",
        "Introduce strangers slowly while they stay near the owner.",
        "Reduce loud noises and sudden movements in the home as much as possible.",
        "Watch carefully for small changes in appetite, litter habits, and grooming.",
      ],
      ja: [
        "無理にスキンシップをせず、自分から来るのを待つ。",
        "知らない人は飼い主のそばで少しずつ紹介する。",
        "家の中の大きな音や急な動きをできるだけ減らす。",
        "食欲・トイレ・グルーミングなどの小さな変化をよく観察する。",
      ],
      zh: [
        "不要强行抱抱或抚摸，要等它自己靠近。",
        "介绍陌生人时，让对方先在主人身边慢慢适应。",
        "尽量减少家中的大声噪音和突然动作。",
        "密切留意食欲、排泄和梳毛习惯的细微变化。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.INTJ.recommendedCategories_i18n.ko,
      en: ["Cat cave / hiding bed", "Quiet cat tower", "Low-noise toys", "Calming pheromone spray"],
      ja: ["キャットケーブ・隠れ家ベッド", "静かなキャットタワー", "低騒音おもちゃ", "リラックス用フェロモンスプレー"],
      zh: ["猫洞/躲藏小窝", "安静型猫爬塔", "低噪音玩具", "安抚用信息素喷雾"],
    },
  },
  INTP: {
    ...baseI18n.INTP,

    nickname_i18n: {
      ...baseI18n.INTP.nickname_i18n,
      en: "Inquisitive Scientist Cat",
      ja: "探究心あふれるサイエンティスト猫",
      zh: "好奇心旺盛的科学家猫",
    },

    summary_i18n: {
      ...baseI18n.INTP.summary_i18n,
      en: "A researcher-type cat that studies toys and structures and gets deeply absorbed in its own experiments.",
      ja: "おもちゃや構造を研究し、自分だけの実験に深く没頭する探究家タイプの猫です。",
      zh: "会研究玩具与环境结构，并沉浸在自己试验中的探索型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.INTP.strengths_i18n.ko,
      en: [
        "Digs deeply into puzzle and intelligence toys.",
        "Enjoys alone time and creates its own play style.",
        "Quickly understands logical patterns.",
        "Explores the home layout as if studying how everything works.",
      ],
      ja: [
        "パズルや知育おもちゃにとことん向き合う。",
        "ひとりの時間を楽しみ、自分なりの遊びを作り出す。",
        "論理的なパターンを素早く理解する。",
        "家の構造や物の仕組みを研究するように探検する。",
      ],
      zh: [
        "会深入研究益智玩具。",
        "喜欢独处并创造自己的游戏方式。",
        "能迅速理解逻辑模式。",
        "像在研究结构一样探索家里的物品与动线。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.INTP.weaknesses_i18n.ko,
      en: [
        "Doesn’t demand much affection, which can leave the owner feeling distant.",
        "Completely indifferent to stimuli it isn’t interested in.",
        "May treat narrow gaps or high shelves as experiments.",
        "Often hides stress and may not show discomfort clearly.",
      ],
      ja: [
        "あまり愛情表現を求めないため、飼い主が距離を感じることもある。",
        "興味のない刺激にはまったく反応しない。",
        "狭い隙間や高い棚を実験対象として見てしまうことがある。",
        "ストレスや不調を表に出さず気づきにくい。",
      ],
      zh: [
        "不常主动亲昵，可能让主人觉得有点疏远。",
        "对不感兴趣的刺激完全无感。",
        "可能把狭缝、高架等危险处当作实验对象。",
        "常常隐藏压力，不会明显表现出不适。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.INTP.idealActivities_i18n.ko,
      en: [
        "Challenging high-difficulty puzzle feeders.",
        "Exploring boxes and narrow spaces.",
        "Watching the outside world from the window.",
        "Solo playtime in a quiet room.",
      ],
      ja: [
        "難易度の高いパズルフィーダーに挑戦すること。",
        "箱や狭い隙間を探検する遊び。",
        "窓から外の景色を眺めること。",
        "静かな部屋でのひとり遊び。",
      ],
      zh: [
        "挑战高难度的益智喂食器。",
        "探索纸箱与狭窄缝隙。",
        "从窗边观察户外景象。",
        "在安静房间里独自玩耍。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.INTP.careTips_i18n.ko,
      en: [
        "Provide toys with strong intellectual stimulation.",
        "Avoid forcing physical affection; respond when the cat approaches.",
        "Block dangerous heights and tight spaces in advance.",
        "Monitor changes in appetite, litter use, and grooming habits carefully.",
      ],
      ja: [
        "頭を使うおもちゃを十分に用意する。",
        "無理にスキンシップせず、猫が来たときに応える。",
        "危険な高い所や狭い隙間は事前に塞いでおく。",
        "食欲・トイレ・グルーミングの変化をよく観察する。",
      ],
      zh: [
        "准备能提供脑力刺激的玩具。",
        "不要强行抱抱，要在猫主动靠近时回应。",
        "提前封好危险的高处与狭缝。",
        "密切观察食欲、猫砂使用与梳毛习惯变化。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.INTP.recommendedCategories_i18n.ko,
      en: ["Puzzle toys", "Box/tunnel sets", "Brain-stimulating toys", "Window hammock/cushion"],
      ja: ["パズル系おもちゃ", "箱・トンネルセット", "脳刺激トイ", "窓際ハンモック・クッション"],
      zh: ["益智玩具", "纸箱/隧道组合", "脑力刺激玩具", "窗边吊床/垫子"],
    },
  },
  ENFJ: {
    ...baseI18n.ENFJ,

    nickname_i18n: {
      ...baseI18n.ENFJ.nickname_i18n,
      en: "Guardian Angel Cat",
      ja: "守護天使の猫",
      zh: "守护天使猫",
    },

    summary_i18n: {
      ...baseI18n.ENFJ.summary_i18n,
      en: "A devoted cat that deeply empathizes with the owner’s emotions and always wants to stay beside them.",
      ja: "飼い主の感情に深く寄り添い、いつもそばにいたがる献身的な猫です。",
      zh: "深切感知主人的情绪、总想守在主人身边的奉献型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ENFJ.strengths_i18n.ko,
      en: [
        "Quickly senses changes in the owner’s emotions and provides comfort.",
        "Maintains good relationships with all family members.",
        "Responds well to soft voices and gentle praise.",
        "Creates a warm, peaceful atmosphere at home.",
      ],
      ja: [
        "飼い主の感情の変化を素早く察知して寄り添う。",
        "家族全員と良好な関係を築きやすい。",
        "優しい声や褒め言葉によく反応する。",
        "家庭に温かく穏やかな雰囲気を作り出す。",
      ],
      zh: [
        "能迅速感知主人的情绪变化并给予安慰。",
        "容易与家中每个人保持良好关系。",
        "对温柔的声音和称赞反应特别好。",
        "能让家中的氛围变得温暖而安宁。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ENFJ.weaknesses_i18n.ko,
      en: [
        "Very sensitive to loud noises or conflict.",
        "Can lose energy when the owner is sad or stressed.",
        "Feels lonely easily if left alone too long.",
        "Can be emotionally hurt by rejection or scolding.",
      ],
      ja: [
        "大きな音や争い事に非常に弱い。",
        "飼い主が落ち込むと一緒に元気がなくなることがある。",
        "長時間ひとりにされると孤独を感じやすい。",
        "拒否されたり叱られたりすると傷つきやすい。",
      ],
      zh: [
        "对噪音或争吵非常敏感。",
        "当主人情绪低落时，它也容易没精神。",
        "若长时间独处，会很容易感到寂寞。",
        "对责骂或拒绝特别敏感、容易受伤。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ENFJ.idealActivities_i18n.ko,
      en: [
        "Resting on the owner's lap or right beside them.",
        "Gentle brushing and massage time.",
        "Quiet bonding time together in a calm space.",
        "Simple tricks like coming when called or giving a paw.",
      ],
      ja: [
        "飼い主の膝の上や隣でくつろぐこと。",
        "優しいブラッシングやマッサージ。",
        "静かな場所で一緒に過ごす時間。",
        "呼んだら来る、手を乗せるなどの簡単な芸。",
      ],
      zh: [
        "趴在主人腿上或身旁一起休息。",
        "享受温柔的梳理和按摩。",
        "在安静的空间与主人一同放松。",
        "做一些简单的小技巧，如被叫到就过来或伸爪握手。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ENFJ.careTips_i18n.ko,
      en: [
        "Talk to the cat often and call its name to deepen emotional connection.",
        "Practice short-alone-time training very slowly.",
        "Prepare hiding spaces if the home is noisy or stressful.",
        "Use praise-based training instead of scolding.",
      ],
      ja: [
        "よく話しかけたり名前を呼んだりして絆を深める。",
        "短時間のお留守番から徐々に慣れさせる。",
        "騒がしい環境では隠れられる場所を用意する。",
        "叱るよりも褒めるしつけの方が向いている。",
      ],
      zh: [
        "经常与猫说话、叫名字来加深情感连结。",
        "从非常短的独处训练开始，慢慢增加时间。",
        "在嘈杂或压力大的环境中要准备可躲藏的地方。",
        "比起责骂，更适合用称赞来训练它。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ENFJ.recommendedCategories_i18n.ko,
      en: ["Lap blankets", "Soft brushes", "Catnip toys", "Cozy cat house"],
      ja: ["ひざ掛け", "やわらかいブラシ", "キャットニップおもちゃ", "ふかふかキャットハウス"],
      zh: ["膝盖毯", "软毛刷", "猫薄荷玩具", "柔软猫窝"],
    },
  },
  ENFP: {
    ...baseI18n.ENFP,

    nickname_i18n: {
      ...baseI18n.ENFP.nickname_i18n,
      en: "Energy-Explosion Kitty",
      ja: "エネルギー爆発ニャン",
      zh: "能量爆发猫",
    },

    summary_i18n: {
      ...baseI18n.ENFP.summary_i18n,
      en: "A mischievous cat that livens up the home with quirky behavior and bright, playful energy.",
      ja: "突拍子のない行動と明るいエネルギーで家を賑やかにする、いたずら好きの猫です。",
      zh: "用古灵精怪与明亮能量让整个家都热闹起来的调皮猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ENFP.strengths_i18n.ko,
      en: [
        "Adapts quickly to new toys and environments and plays actively.",
        "Loves interaction with people and responds very enthusiastically.",
        "Has an entertainer-like personality that brightens the atmosphere.",
        "Eager to join in anything that looks fun.",
      ],
      ja: [
        "新しいおもちゃや環境にもすぐ慣れ、積極的に遊ぶ。",
        "人との関わりが大好きで、反応がとても良い。",
        "場の空気を明るくするエンターテイナー気質。",
        "楽しそうなことがあれば何でも参加したがる。",
      ],
      zh: [
        "能很快适应新玩具和新环境，玩得非常积极。",
        "非常喜欢和人互动，反应热烈。",
        "有像综艺艺人一样带动气氛的天赋。",
        "只要觉得好玩，什么都想参与。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ENFP.weaknesses_i18n.ko,
      en: [
        "Gets bored easily and may need toys to be changed frequently.",
        "When overexcited, may jump into dangerous places.",
        "Prefers spontaneous actions over strict routines.",
        "Too much noise and stimulation can easily build up stress.",
      ],
      ja: [
        "飽きっぽく、おもちゃを頻繁に替える必要があることもある。",
        "興奮しすぎると危険な場所に飛び込んでしまうことがある。",
        "きっちりしたルーティンより、その場のノリで動くのを好む。",
        "騒音や刺激が多いとストレスが溜まりやすい。",
      ],
      zh: [
        "容易感到无聊，可能需要经常更换玩具。",
        "过度兴奋时有可能冲到危险的地方。",
        "比起固定作息，更喜欢随性而动。",
        "噪音和刺激太多时容易累积压力。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ENFP.idealActivities_i18n.ko,
      en: [
        "Chasing feather wands or laser pointers.",
        "Hide-and-seek through cat tunnels.",
        "Exploring new rooms or rearranged spaces.",
        "Many short play sessions with the owner throughout the day.",
      ],
      ja: [
        "羽根じゃらしやレーザーポインターを追いかける遊び。",
        "キャットトンネルを使ったかくれんぼ。",
        "新しい部屋や模様替えした空間の探検。",
        "一日に何度も短い遊び時間を持つこと。",
      ],
      zh: [
        "追逐羽毛逗猫棒或激光笔。",
        "通过猫隧道玩躲猫猫。",
        "探索新房间或重新摆放后的空间。",
        "一天中和主人多次进行短时间互动游戏。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ENFP.careTips_i18n.ko,
      en: [
        "Provide short but frequent playtimes rather than one long session.",
        "Clear dangerous areas and fragile items in advance.",
        "After heavy play, guide the cat to a quiet room for rest.",
        "Use game-like training with quick, fun rewards.",
      ],
      ja: [
        "長時間よりも、短い遊びを何回もしてあげる。",
        "危険な場所や壊れやすい物は事前に片付けたり塞いでおく。",
        "激しく遊んだあとは静かな部屋で休ませる。",
        "すぐにご褒美がもらえるゲーム感覚のトレーニングが向いている。",
      ],
      zh: [
        "与其一次玩很久，不如多次短时间地陪它玩耍。",
        "提前收好危险或易碎物品。",
        "玩得很疯之后，引导它到安静的房间休息。",
        "用“小游戏+快速奖励”的方式训练最合适。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ENFP.recommendedCategories_i18n.ko,
      en: ["Automatic toys", "Cat tunnels", "Laser pointers", "Variety toy sets"],
      ja: ["自動おもちゃ", "キャットトンネル", "レーザーポインター", "さまざまな素材のおもちゃセット"],
      zh: ["自动互动玩具", "猫隧道", "激光笔", "多材质玩具套装"],
    },
  },
  ESTJ: {
    ...baseI18n.ESTJ,

    nickname_i18n: {
      ...baseI18n.ESTJ.nickname_i18n,
      en: "Perfectionist Supervisor Cat",
      ja: "完璧主義の管理官猫",
      zh: "完美主义监督官猫",
    },

    summary_i18n: {
      ...baseI18n.ESTJ.summary_i18n,
      en: "An FM-style manager cat that keenly monitors mealtimes, litter box routines, and household order.",
      ja: "食事・トイレ・家のルーティンを厳しくチェックする、FMスタイルの管理者猫です。",
      zh: "对吃饭、猫砂、家中秩序都严格把关的“FM风”管理型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ESTJ.strengths_i18n.ko,
      en: [
        "Accurately remembers mealtime and litter box cleaning routines.",
        "Carefully manages its own space and belongings.",
        "Detects unusual smells or sounds quickly.",
        "Perfectly suited for highly structured, predictable routines.",
      ],
      ja: [
        "食事やトイレ掃除の時間を正確に覚えている。",
        "自分のスペースや物を丁寧に管理する。",
        "家の異臭や物音にすぐ気づく。",
        "規則的で予測可能な生活リズムに最適なタイプ。",
      ],
      zh: [
        "能精准记住吃饭和清理猫砂的时间。",
        "非常细致地管理自己的区域和物品。",
        "迅速察觉家中异常气味或声音。",
        "非常适合结构固定、规律性的生活方式。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ESTJ.weaknesses_i18n.ko,
      en: [
        "Can become anxious when mealtime or cleaning routine changes.",
        "Slow to adapt to new environments or schedule changes.",
        "Feels stressed when other pets break ‘house rules’.",
        "Extreme sensitivity can sometimes lead to defensive behavior.",
      ],
      ja: [
        "食事や掃除の時間がズレると不安になることがある。",
        "環境やルーティンの変化に慣れるのが遅い。",
        "他の動物が“ルール破り”すると強いストレスを感じる。",
        "過度な敏感さが防御的な行動につながることもある。",
      ],
      zh: [
        "进食或清理时间稍微变化都会变得紧张。",
        "对环境或规律改变适应较慢。",
        "看到其他宠物“破坏规矩”会非常有压力。",
        "过度敏感时可能出现防御性行为。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ESTJ.idealActivities_i18n.ko,
      en: [
        "Scheduled playtime at fixed times.",
        "Repetitive climbing and descending on cat towers.",
        "Grooming or treat time in the designated spot.",
        "Short, predictable play routines.",
      ],
      ja: [
        "決まった時間の遊びタイム。",
        "キャットタワーの上り下りなどの反復運動。",
        "決まった場所でのブラッシング・おやつ時間。",
        "短くて予測可能な遊びルーティン。",
      ],
      zh: [
        "固定时间的游戏训练。",
        "反复在猫爬塔上下运动。",
        "在固定位置进行梳毛或零食时间。",
        "短而可预测的游戏流程。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ESTJ.careTips_i18n.ko,
      en: [
        "Keep mealtime, water refill, and litter routines as stable as possible.",
        "Introduce environmental changes gradually, one element at a time.",
        "Give clear praise when rules are followed.",
        "When adding a new cat, teach the basic household rules carefully.",
      ],
      ja: [
        "食事・水・トイレのルーティンはできるだけ一定に保つ。",
        "環境の変化は小さな要素から段階的に行う。",
        "ルールを守れたときはしっかり褒めてあげる。",
        "新しい猫を迎える場合、家庭の基本ルールをきちんと教える。",
      ],
      zh: [
        "尽量保持喂食、饮水、猫砂的规律稳定。",
        "环境变动时要从小部分逐步调整。",
        "遵守规则时给予明确表扬。",
        "迎接新猫时要仔细教它家里的基本规矩。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ESTJ.recommendedCategories_i18n.ko,
      en: ["Automatic feeders", "Sturdy litter boxes", "Timer-enabled toys", "Structured cat towers"],
      ja: ["自動給餌器", "丈夫な猫トイレ", "タイマー式おもちゃ", "構造が安定したキャットタワー"],
      zh: ["自动喂食器", "稳固猫砂盆", "定时玩具", "结构稳定的猫爬塔"],
    },
  },
  ESFJ: {
    ...baseI18n.ESFJ,

    nickname_i18n: {
      ...baseI18n.ESFJ.nickname_i18n,
      en: "Super Friendly Care Cat",
      ja: "スーパー・フレンドリー介護猫",
      zh: "超友善护理猫",
    },

    summary_i18n: {
      ...baseI18n.ESFJ.summary_i18n,
      en: "A friendly, caring cat that is gentle with people and animals, acting as a warm caregiver in the home.",
      ja: "人にも動物にも優しく、家のケア担当のような温かい猫です。",
      zh: "对人和动物都非常温柔，就像家里的贴心护理担当猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ESFJ.strengths_i18n.ko,
      en: [
        "Very social and friendly toward visitors and other animals.",
        "Expresses affection generously and enjoys being around people.",
        "Likes staying near family members by rotating among them.",
        "Maintains a bright temperament in stable environments.",
      ],
      ja: [
        "来客や他の動物にもフレンドリー。",
        "愛情表現が豊かで、誰かと一緒にいるのが好き。",
        "家族全員のそばを行き来しながら見守る。",
        "安定した環境では明るく穏やかな性格を保つ。",
      ],
      zh: [
        "对来访者和其他动物都非常友好。",
        "非常擅长表达爱意，喜欢和人在一起。",
        "会在家庭成员之间来回巡逻般地陪伴。",
        "在稳定的环境中保持明亮温和的性格。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ESFJ.weaknesses_i18n.ko,
      en: [
        "Weak tolerance for being alone; prone to separation anxiety.",
        "May become tired from giving too much attention to everyone.",
        "Tends to endure discomfort silently without expressing it.",
        "Easily stressed or overwhelmed in loud environments.",
      ],
      ja: [
        "ひとりの時間が苦手で、分離不安になりやすい。",
        "誰にでも優しくしようとして疲れてしまうことがある。",
        "嫌なことを我慢してしまいがち。",
        "騒がしい環境ではストレスを感じやすい。",
      ],
      zh: [
        "不耐独处，容易产生分离焦虑。",
        "因为对每个人都很好而感到疲惫。",
        "有不喜欢也不说、默默忍耐的倾向。",
        "在吵杂环境下容易疲惫和紧张。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ESFJ.idealActivities_i18n.ko,
      en: [
        "Relaxing in the living room with the whole family.",
        "Gentle toy play or light interaction.",
        "Soft greeting interactions with visitors.",
        "Following the owner around like a helper.",
      ],
      ja: [
        "家族全員がいるリビングでくつろぐこと。",
        "やさしいおもちゃ遊びや軽いふれあい。",
        "来客との軽いコミュニケーション（なでてもらう程度）。",
        "飼い主の後ろをついて回る“お手伝いごっこ”。",
      ],
      zh: [
        "和全家人一起在客厅放松。",
        "轻柔地玩玩具或温和互动。",
        "与客人的轻度互动（让人摸一摸）。",
        "像小帮手一样跟着主人四处走动。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ESFJ.careTips_i18n.ko,
      en: [
        "Ensure short but frequent bonding time throughout the day.",
        "Practice short alone-time training to reduce anxiety.",
        "Let the cat rest when it seems tired from social activity.",
        "Express affection generously but respect its boundaries.",
      ],
      ja: [
        "一日に何度も短いコミュニケーション時間を作る。",
        "短時間のお留守番からゆっくり慣れさせる。",
        "疲れていそうなときは静かに休める環境を用意する。",
        "たくさん愛情表現をしつつ、嫌がるときは尊重する。",
      ],
      zh: [
        "一天中安排多次短暂的互动时间。",
        "从非常短的独处练习慢慢延长，以减少不安。",
        "看到猫咪累了要给它安静的环境休息。",
        "尽情表达爱意，但也要尊重它不想被打扰的时候。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ESFJ.recommendedCategories_i18n.ko,
      en: ["Catnip toys", "Tower + hammock", "Wand toys", "Automatic feeder/waterer"],
      ja: ["キャットニップおもちゃ", "タワー＋ハンモック", "じゃらし系おもちゃ", "自動給餌・給水器"],
      zh: ["猫薄荷玩具", "猫爬塔+吊床", "逗猫棒", "自动喂食/饮水器"],
    },
  },
  ISTJ: {
    ...baseI18n.ISTJ,

    nickname_i18n: {
      ...baseI18n.ISTJ.nickname_i18n,
      en: "Meticulous Territory Manager",
      ja: "几帳面な領域管理人猫",
      zh: "一丝不苟的领地管理员猫",
    },

    summary_i18n: {
      ...baseI18n.ISTJ.summary_i18n,
      en: "A quiet, reliable cat that strictly keeps its routines and manages its territory with precision.",
      ja: "自分のルーティンと領域を几帳面に守る、静かで頼れる管理者タイプの猫です。",
      zh: "安静可靠、按规矩行事、精确管理自己领地的管理员型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ISTJ.strengths_i18n.ko,
      en: [
        "Maintains predictable movement patterns and routines.",
        "Keeps its litter box, scratching spots, and resting places consistent.",
        "Stays calm even in unfamiliar situations.",
        "Does well alone without causing trouble.",
      ],
      ja: [
        "動きやルーティンが予測しやすい。",
        "トイレや爪とぎ、休憩場所をきちんと守る。",
        "知らない状況でも落ち着いていられる。",
        "ひとりでも問題なく穏やかに過ごせる。",
      ],
      zh: [
        "进行活动的动线和习惯非常规律。",
        "严格遵守固定的厕所、抓板、休息位置。",
        "在陌生环境中也能保持冷静。",
        "独处也不会出问题，十分稳重。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ISTJ.weaknesses_i18n.ko,
      en: [
        "Very sensitive to environmental or positional changes.",
        "Slow to adapt to new toys, spaces, or people.",
        "Shows subtle emotional signals, making changes easy to miss.",
        "Stress often appears later through appetite or litter box issues.",
      ],
      ja: [
        "環境や場所の変化にとても敏感。",
        "新しいおもちゃや人に慣れるのが遅い。",
        "感情表現が控えめで変化に気づきにくい。",
        "ストレスが後から食欲やトイレ問題に表れやすい。",
      ],
      zh: [
        "对环境或位置变动非常敏感。",
        "对新玩具、空间或人的适应较慢。",
        "情绪表达很微妙，不易被察觉。",
        "压力会晚些表现为食欲或排泄问题。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ISTJ.idealActivities_i18n.ko,
      en: [
        "Repetitive play with familiar toys.",
        "Short indoor walks at fixed times.",
        "Resting in a favorite spot with minimal disturbance.",
        "Consistent grooming sessions.",
      ],
      ja: [
        "慣れ親しんだおもちゃでの反復遊び。",
        "決まった時間の室内散歩。",
        "お気に入りの場所で静かに休むこと。",
        "規則的なブラッシング時間。",
      ],
      zh: [
        "使用熟悉玩具进行重复性游戏。",
        "固定时间在室内小范围散步。",
        "在喜欢的位置安静休息。",
        "固定的梳毛时间。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ISTJ.careTips_i18n.ko,
      en: [
        "Minimize environmental changes and introduce adjustments gradually.",
        "Introduce new people, toys, and spaces slowly and gently.",
        "Praise consistent behavior to reinforce security.",
        "Maintain stable schedules for meals and litter box cleaning.",
      ],
      ja: [
        "環境の変化は最小限にして、少しずつ慣れさせる。",
        "新しい人やおもちゃ、場所はゆっくり紹介する。",
        "できている行動をしっかり褒めて安心感を与える。",
        "食事やトイレ掃除の時間は可能な限り一定にする。",
      ],
      zh: [
        "尽量减少环境变动，必要时要分阶段进行。",
        "新的人、玩具、区域要慢慢引入。",
        "对持续良好的行为给予表扬以增加安全感。",
        "保持喂食与猫砂清理的固定时间。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ISTJ.recommendedCategories_i18n.ko,
      en: ["Stable hideouts", "Familiar-texture toys", "Automatic feeder", "Fixed-position litter box & scratcher"],
      ja: ["安定感のあるハウス", "慣れた素材のおもちゃ", "自動給餌器", "固定位置のトイレ・爪とぎ"],
      zh: ["稳定型猫窝", "熟悉材质玩具", "自动喂食器", "固定位置猫砂盆/抓板"],
    },
  },
  ISFJ: {
    ...baseI18n.ISFJ,

    nickname_i18n: {
      ...baseI18n.ISFJ.nickname_i18n,
      en: "Devoted Shadow Cat",
      ja: "献身的な影猫",
      zh: "忠诚的影子猫",
    },

    summary_i18n: {
      ...baseI18n.ISFJ.summary_i18n,
      en: "A quiet, devoted cat that stays close to the owner like a gentle shadow, offering silent companionship.",
      ja: "飼い主のそばに静かに寄り添う、影のような献身的な相棒猫です。",
      zh: "总是静静地待在主人身边、如影随形的温柔伙伴型猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ISFJ.strengths_i18n.ko,
      en: [
        "Forms deep attachment and stays close to the owner.",
        "Quiet, calm temperament makes them easy to live with.",
        "Follows the owner at a gentle, consistent distance.",
        "Feels secure when routines are stable.",
      ],
      ja: [
        "飼い主への愛着が深く、そばに寄り添って過ごす。",
        "静かで穏やかな性格で、一緒に生活しやすい。",
        "飼い主を一定の距離でゆっくりついて回る。",
        "ルーティンが安定していると安心する。",
      ],
      zh: [
        "对主人有深厚的依恋感，喜欢待在主人身边。",
        "性格安静温和，很容易相处。",
        "会保持稳定距离跟着主人走动。",
        "在固定规律的家庭环境中感到安心。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ISFJ.weaknesses_i18n.ko,
      en: [
        "Prone to separation anxiety.",
        "Easily intimidated by unfamiliar people or environments.",
        "Tends to suppress its own needs rather than express discomfort.",
        "Can become emotionally withdrawn when the owner is busy.",
      ],
      ja: [
        "分離不安になりやすいタイプ。",
        "知らない人や環境にすぐ萎縮してしまう。",
        "自分の欲求をあまり表現せず、我慢しがち。",
        "飼い主が忙しいと感情的に引いてしまうことがある。",
      ],
      zh: [
        "容易产生分离焦虑。",
        "遇到陌生人或陌生环境很容易退缩。",
        "不太会表达自己的需求，常常选择忍耐。",
        "主人忙碌时可能变得更沉默和退缩。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ISFJ.idealActivities_i18n.ko,
      en: [
        "Resting close to the owner.",
        "Gentle petting and verbal affection.",
        "Short play sessions in a quiet room.",
        "Regular grooming routines.",
      ],
      ja: [
        "飼い主の近くでくつろぐこと。",
        "やさしい撫でや声かけ。",
        "静かな部屋での短い遊び。",
        "規則的なブラッシングの時間。",
      ],
      zh: [
        "在主人身边休息。",
        "喜欢轻柔抚摸与主人说话安抚。",
        "在安静房间里进行短时间游戏。",
        "规律性的梳毛时间。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ISFJ.careTips_i18n.ko,
      en: [
        "Train short alone-time gradually to reduce separation anxiety.",
        "Introduce new people slowly and allow the cat to stay close to the owner.",
        "Monitor subtle stress signals such as over-grooming or appetite changes.",
        "Provide gentle reassurance rather than harsh corrections.",
      ],
      ja: [
        "短時間のお留守番から少しずつ慣れさせて分離不安を軽減する。",
        "新しい人とはゆっくり慣れさせ、飼い主のそばで安心させる。",
        "過剰な毛づくろいや食欲の変化など、小さなストレスサインを観察する。",
        "強い叱責よりもやさしい安心感を与える対応が向いている。",
      ],
      zh: [
        "通过逐步延长独处时间来减少分离焦虑。",
        "介绍新人时要让猫靠近主人慢慢适应。",
        "注意观察如过度梳毛、食欲变化等细微压力信号。",
        "避免责骂，用温柔方式给予安全感。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ISFJ.recommendedCategories_i18n.ko,
      en: ["Small indoor cat house", "Soft blankets", "Relaxing sprays", "Slow-feeder bowls"],
      ja: ["小さめの室内ハウス", "やわらかいブランケット", "リラックススプレー", "スローフィーダー皿"],
      zh: ["室内小猫屋", "柔软毯子", "放松喷雾", "慢食碗"],
    },
  },
  ESTP: {
    ...baseI18n.ESTP,

    nickname_i18n: {
      ...baseI18n.ESTP.nickname_i18n,
      en: "Thrill-Seeking Hunter",
      ja: "スリル好きのハンター猫",
      zh: "追求刺激的猎手猫",
    },

    summary_i18n: {
      ...baseI18n.ESTP.summary_i18n,
      en: "An action-driven cat with strong hunting instincts, high energy, and quick reflexes.",
      ja: "狩猟本能が強く、行動的でエネルギッシュ、反射神経の鋭いアクション型の猫です。",
      zh: "狩猎本能强、行动力高、反应速度快的动作派猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ESTP.strengths_i18n.ko,
      en: [
        "Instantly reacts to moving objects.",
        "Excellent jumping and running abilities.",
        "Adapts quickly to new play environments.",
        "Enjoys short bursts of intense activity.",
      ],
      ja: [
        "動く物体に即座に反応する。",
        "ジャンプや走る動きが非常に優れている。",
        "新しい遊び環境にもすぐ適応する。",
        "短時間の激しい遊びを好む。",
      ],
      zh: [
        "对移动物体反应极快。",
        "擅长跳跃和奔跑等爆发力活动。",
        "对新游戏环境适应迅速。",
        "喜欢短时间、高强度的运动。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ESTP.weaknesses_i18n.ko,
      en: [
        "May get injured from sudden running or jumping.",
        "High chance of knocking over household items.",
        "Gets bored with repetitive or slow training.",
        "Can be difficult to calm down when overstimulated.",
      ],
      ja: [
        "突然のジャンプや走りでケガをしやすい。",
        "家の物を倒したり壊しやすい。",
        "反復的でゆっくりした訓練にはすぐ飽きる。",
        "刺激が多いと興奮が収まらないことがある。",
      ],
      zh: [
        "突然奔跑或跳跃可能导致受伤。",
        "很容易撞倒家中的物品。",
        "对慢节奏或重复性的训练容易厌倦。",
        "刺激过多时很难冷静下来。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ESTP.idealActivities_i18n.ko,
      en: [
        "Chasing feather wands or laser pointers.",
        "Jumping between cat towers and shelves.",
        "Fast sprints in open indoor spaces.",
        "Chasing moving balls or automatic toys.",
      ],
      ja: [
        "羽根じゃらしやレーザーポインター追いかけ遊び。",
        "キャットタワーや棚を使ったジャンプ遊び。",
        "家の中での短距離ダッシュ。",
        "動くボールや自動おもちゃの追いかけ遊び。",
      ],
      zh: [
        "追逐羽毛逗猫棒或激光点。",
        "在猫爬塔与柜子之间跳跃玩耍。",
        "在室内宽敞区域快速冲刺。",
        "追逐自动玩具或会滚动的球。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ESTP.careTips_i18n.ko,
      en: [
        "Ensure enough physical activity daily.",
        "Install safety screens on balconies and windows.",
        "Use non-slip mats to prevent slipping injuries.",
        "Provide a calm space for recovery after play excitement.",
      ],
      ja: [
        "毎日十分な運動時間を確保する。",
        "窓やベランダに必ず安全ネットを設置する。",
        "滑り止めマットを使ってケガを防ぐ。",
        "興奮後は落ち着ける静かな場所を用意する。",
      ],
      zh: [
        "每天确保足够的运动量。",
        "在阳台和窗户安装安全网。",
        "使用防滑垫以避免滑倒受伤。",
        "玩兴过度后提供安静空间让其恢复平静。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ESTP.recommendedCategories_i18n.ko,
      en: ["Durable cat tower", "Feather wand", "Automatic moving ball", "Anti-slip mats"],
      ja: ["丈夫なキャットタワー", "羽根じゃらし", "自動で動くボール", "滑り止めマット"],
      zh: ["耐用猫爬塔", "羽毛逗猫棒", "自动滚动球", "防滑地垫"],
    },
  },
  ESFP: {
    ...baseI18n.ESFP,

    nickname_i18n: {
      ...baseI18n.ESFP.nickname_i18n,
      en: "Everyone’s Star Cat",
      ja: "人気満点のスター猫",
      zh: "人气满满的明星猫",
    },

    summary_i18n: {
      ...baseI18n.ESFP.summary_i18n,
      en: "A charming performer cat that loves attention and naturally becomes the star wherever it goes.",
      ja: "注目されることが大好きで、どこにいても自然とスターになる魅力的な猫です。",
      zh: "喜欢成为焦点、走到哪里都自带明星光环的魅力猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ESFP.strengths_i18n.ko,
      en: [
        "Highly sociable even with strangers.",
        "Great at posing and doing cute performances.",
        "Brings bright, cheerful energy to the home.",
        "Responds well to trick and performance training.",
      ],
      ja: [
        "見知らぬ人にもフレンドリーで社交的。",
        "かわいいポーズや芸を自然にこなす。",
        "家の雰囲気を明るく、軽やかにする。",
        "芸やトリックのトレーニングに反応が良い。",
      ],
      zh: [
        "对陌生人也很友好，极具社交性。",
        "天生会摆各种可爱姿势、表演小动作。",
        "能让家的氛围变得明亮轻快。",
        "对技巧类训练反应很好。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ESFP.weaknesses_i18n.ko,
      en: [
        "Feels sad when not getting enough attention.",
        "Gets easily distracted during training.",
        "Loses motivation when immediate rewards are absent.",
        "May overwhelm people with excessive affection.",
      ],
      ja: [
        "注目されないと寂しがる。",
        "トレーニング中に周囲の刺激で気が散りやすい。",
        "すぐにご褒美がないとやる気が落ちる。",
        "愛情表現が強すぎて相手を疲れさせることもある。",
      ],
      zh: [
        "得不到关注时会感到失落。",
        "训练时很容易被外界刺激分心。",
        "没有即时奖励就容易失去动力。",
        "过度撒娇可能让人感到累。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ESFP.idealActivities_i18n.ko,
      en: [
        "Taking cute photos or videos together.",
        "Performance-style trick training (spin, high-five).",
        "Short trips to pet-friendly cafés (if stress level is low).",
        "Show-style play with stylish or cute toys.",
      ],
      ja: [
        "一緒にかわいい写真や動画を撮ること。",
        "芸の練習（スピン・ハイタッチなど）。",
        "ストレスが少なければ、ペット可カフェへのお出かけ。",
        "おしゃれなおもちゃを使ったショー風の遊び。",
      ],
      zh: [
        "一起拍可爱的照片或影片。",
        "表演类互动（旋转、击掌等）。",
        "如果不容易紧张，可以去宠物友好咖啡厅短暂外出。",
        "用漂亮或可爱的玩具进行秀场式游戏。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ESFP.careTips_i18n.ko,
      en: [
        "Give frequent praise and affection, but set basic manners.",
        "Teach expected behavior when visitors arrive.",
        "Provide quiet rest after overstimulation.",
        "Keep performance sessions short and fun.",
      ],
      ja: [
        "たくさん褒めて愛情を伝えつつ、基本マナーも教える。",
        "来客時の行動（飛びつき・爪とぎなど）を事前に練習させる。",
        "刺激が多い日は静かな休憩スペースを確保する。",
        "芸や撮影は短く、楽しい状態で行う。",
      ],
      zh: [
        "多夸奖多互动，但也要教基本礼仪。",
        "来客时的行为要提前训练（不要乱跳、不要抓）。",
        "刺激太多的日子要提供安静空间让它休息。",
        "拍照或练技巧时间要短且保持愉快。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ESFP.recommendedCategories_i18n.ko,
      en: [
        "Cat clothing (safe designs)",
        "Photo-zone rugs",
        "Training treats",
        "Cute camera-friendly toys",
      ],
      ja: [
        "猫用ウェア（安全なデザイン）",
        "フォトゾーン用ラグ",
        "トレーニングおやつ",
        "撮影向きのおもちゃ",
      ],
      zh: [
        "猫咪服饰（安全设计）",
        "拍照区地毯",
        "训练零食",
        "上镜的小玩具",
      ],
    },
  },
  ISTP: {
    ...baseI18n.ISTP,

    nickname_i18n: {
      ...baseI18n.ISTP.nickname_i18n,
      en: "My-Way Problem Solver",
      ja: "マイウェイな問題解決者猫",
      zh: "我行我素的解决者猫",
    },

    summary_i18n: {
      ...baseI18n.ISTP.summary_i18n,
      en: "A practical, independent cat that prefers minimal interference but solves problems smartly when necessary.",
      ja: "干渉されるのを好まないが、必要なときは賢く問題を解決する実用的な猫です。",
      zh: "喜欢自由不受干扰，但关键时刻又能灵巧解决问题的实用主义猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ISTP.strengths_i18n.ko,
      en: [
        "Good at entertaining itself and maintaining its own routine.",
        "Quickly understands the structure of new toys or environments.",
        "Calm and composed without excessive emotional expression.",
        "Feels most secure when left enough freedom and independence.",
      ],
      ja: [
        "ひとり遊びが得意で、自分のルーティンを保てる。",
        "新しいおもちゃや環境の構造を素早く理解する。",
        "感情表現が控えめで落ち着いている。",
        "自由度が高いほど安心して過ごせるタイプ。",
      ],
      zh: [
        "擅长自娱自乐，也能保持自己的作息规律。",
        "能迅速理解新玩具或新环境的结构。",
        "情绪表达淡定沉稳，不会大起大落。",
        "有足够自由空间时最有安全感。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ISTP.weaknesses_i18n.ko,
      en: [
        "May avoid or ignore physical affection.",
        "Uninterested in training without stimulation or rewards.",
        "Tends to hide stress until it becomes significant.",
        "May take risks after calculating danger, sometimes overly boldly.",
      ],
      ja: [
        "スキンシップを避けたり無視したりすることがある。",
        "刺激や報酬がないとトレーニングに興味を示さない。",
        "ストレスを隠しやすく、後から明らかになることがある。",
        "危険を計算したうえで挑戦するが、時に大胆すぎることも。",
      ],
      zh: [
        "可能会避免或忽视肢体接触。",
        "没有刺激或奖励时，对训练不感兴趣。",
        "容易把压力藏起来，直到明显影响状态。",
        "在经过风险计算后会尝试挑战，但有时会太大胆。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ISTP.idealActivities_i18n.ko,
      en: [
        "Solo nosework and treat-finding games.",
        "Exploring quiet structures like shelves or tunnels.",
        "Short, intense sprint or chase play.",
        "Independent play with minimal owner intervention.",
      ],
      ja: [
        "ひとりで行うノーズワーク・おやつ探し遊び。",
        "棚やトンネルなど静かな構造物の探検。",
        "短時間の激しい追いかけ・ダッシュ遊び。",
        "飼い主の干渉が少ないひとり遊び。",
      ],
      zh: [
        "独立进行嗅闻或寻找零食的游戏。",
        "探索书架、隧道等安静的结构空间。",
        "短时间的高强度追逐或冲刺游戏。",
        "不需要主人太多干预的独立游戏。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ISTP.careTips_i18n.ko,
      en: [
        "Make reward connections very clear during training.",
        "Allow the cat to approach first rather than forcing contact.",
        "Secure dangerous tight spaces or high shelves in advance.",
        "Include fun or snack elements in all training activities.",
      ],
      ja: [
        "トレーニングでは報酬の関連を明確にする。",
        "猫が自分から近づくまで触れ合いを強制しない。",
        "危険な狭い場所や高い棚を事前に安全にする。",
        "すべてのトレーニングに遊びやおやつ要素を含める。",
      ],
      zh: [
        "训练时要让奖励关系非常明确。",
        "不要强行靠近，让猫主动找你比较好。",
        "提前封好危险的狭缝或高处。",
        "所有训练中都加入趣味或小零食元素。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ISTP.recommendedCategories_i18n.ko,
      en: ["Puzzle/treat toys", "Durable cat tunnels", "Climbing boards", "Window hammocks"],
      ja: ["パズル・おやつトイ", "丈夫なキャットトンネル", "クライミングボード", "窓際ハンモック"],
      zh: ["益智零食玩具", "耐用猫隧道", "攀爬板", "窗边吊床"],
    },
  },
  ISFP: {
    ...baseI18n.ISFP,

    nickname_i18n: {
      ...baseI18n.ISFP.nickname_i18n,
      en: "Tranquil Artist Cat",
      ja: "静けさを楽しむアーティスト猫",
      zh: "享受宁静的艺术家猫",
    },

    summary_i18n: {
      ...baseI18n.ISFP.summary_i18n,
      en: "A peaceful, sensitive cat that loves gentle sensations like warmth, soft textures, and quiet sunlight.",
      ja: "日差しや柔らかな触感、静かな空間を愛する、穏やかで感性豊かな芸術家タイプの猫です。",
      zh: "热爱阳光、柔软触感和安静氛围的和平主义感性猫咪。",
    },

    strengths_i18n: {
      ko: baseI18n.ISFP.strengths_i18n.ko,
      en: [
        "Peaceful and avoids conflict.",
        "Finds deep comfort in warm sunlight and soft cushions.",
        "Often enjoys gentle physical affection.",
        "Feels comfortable in calm, quiet environments.",
      ],
      ja: [
        "平和主義で争いを避ける。",
        "日差しや柔らかいクッションに深い安らぎを感じる。",
        "やさしいスキンシップを好むことが多い。",
        "静かで穏やかな環境でとてもリラックスする。",
      ],
      zh: [
        "性格平和，喜欢避免冲突。",
        "对阳光、柔软垫子和温暖环境有强烈舒适感。",
        "通常喜欢温柔的抚摸与互动。",
        "在安静、平和的环境中最为放松。",
      ],
    },

    weaknesses_i18n: {
      ko: baseI18n.ISFP.weaknesses_i18n.ko,
      en: [
        "Easily overwhelmed by loud sounds or sudden stimuli.",
        "Prefers soft, calm activities and may lack exercise by nature.",
        "Often hides stress instead of expressing it.",
        "Becomes tired quickly in chaotic or noisy environments.",
      ],
      ja: [
        "大きな音や突然の刺激に圧倒されやすい。",
        "落ち着いた遊びを好み、運動量が少なくなりがち。",
        "ストレスを表に出さず、抱え込むことがある。",
        "騒がしい環境ではすぐ疲れてしまう。",
      ],
      zh: [
        "大声或突发刺激会让它不知所措。",
        "更喜欢安静柔和的活动，运动量偏少。",
        "不喜欢表达压力，容易憋在心里。",
        "在嘈杂混乱的环境中会很快疲倦。",
      ],
    },

    idealActivities_i18n: {
      ko: baseI18n.ISFP.idealActivities_i18n.ko,
      en: [
        "Napping under warm sunlight.",
        "Slow indoor walks while sniffing around.",
        "Soft plush-toy play.",
        "Quiet bonding time next to the owner.",
      ],
      ja: [
        "温かい日差しの下でのお昼寝。",
        "室内をゆっくり歩きながら匂いを楽しむ。",
        "柔らかいぬいぐるみのおもちゃで遊ぶ。",
        "飼い主のそばで静かに寄り添う時間。",
      ],
      zh: [
        "在温暖阳光下的小睡。",
        "在房间里慢悠悠地散步嗅闻。",
        "玩柔软的绒毛玩具。",
        "安静地待在主人身旁。",
      ],
    },

    careTips_i18n: {
      ko: baseI18n.ISFP.careTips_i18n.ko,
      en: [
        "Keep the environment quiet and stable.",
        "Provide gentle, slow-paced play sessions.",
        "Check its physical condition regularly because it hides discomfort.",
        "Offer plenty of soft bedding and warm resting spots.",
      ],
      ja: [
        "環境を静かで安定させてあげることが最優先。",
        "ゆったりした遊び時間をたっぷり与える。",
        "不調を隠しやすいので定期的に体調チェックをする。",
        "柔らかい寝床や温かい休憩場所をたくさん用意する。",
      ],
      zh: [
        "保持环境安静稳定是最重要的。",
        "提供轻松温和的游戏互动。",
        "因为不易表现不适，需要经常检查身体状况。",
        "准备足够柔软、温暖的休息空间。",
      ],
    },

    recommendedCategories_i18n: {
      ko: baseI18n.ISFP.recommendedCategories_i18n.ko,
      en: [
        "Soft cushions and blankets",
        "Plush toys",
        "Gentle walking harness",
        "Relaxing herb/catnip treats",
      ],
      ja: [
        "柔らかいクッション・ブランケット",
        "ぬいぐるみ系おもちゃ",
        "やさしい散歩用ハーネス",
        "リラックスハーブ・キャットニップおやつ",
      ],
      zh: [
        "柔软的坐垫/毛毯",
        "绒毛玩具",
        "温和散步用胸背带",
        "放松草本/猫薄荷零食",
      ],
    },
  },

  /* ---------------------------------------------------
     INTJ
     (아래 생략: 이미 위에 제공)
  --------------------------------------------------- */

  /* ---------------------------------------------------
     INTP
     (아래 생략: 이미 위에 제공)
  --------------------------------------------------- */

  /* ---------------------------------------------------
     ENFJ
     (아래 생략)
  --------------------------------------------------- */

  /* ---------------------------------------------------
     ENFP
     (아래 생략)
  --------------------------------------------------- */
};
