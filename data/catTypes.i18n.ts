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
  (Object.keys(catTypes) as CatCode[]).map((code) => {
    const b = catTypes[code] as any;
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
        "Changing the furniture layout little by little helps them feel much more at ease.",
        "They treasure their own territory, so be sure to protect a space where they can fully rest.",
        "When something bothers them, giving them a little space to calm down on their own helps a lot.",
        "Treating them with consistency helps them feel greater trust and security.",
      ],
      ja: [
        "家具の配置を変えるときは、少しずつゆっくり変化させてあげると安心します。",
        "自分だけの縄張りを大切にするタイプなので、ゆったり休めるスペースを守ってあげましょう。",
        "気に入らない刺激があるときは、少し距離を置いて自分で落ち着く時間をあげましょう。",
        "一貫した態度で接してあげると、より大きな信頼と安心感を感じます。",
      ],
      zh: [
        "调整家具摆放时，建议一点点慢慢改变，这样它会更自在。",
        "它很珍惜属于自己的领地，请为它留出能安心休息的空间。",
        "遇到不喜欢的刺激时，建议让它先保持一点距离，给它自己冷静下来的时间。",
        "用一致的态度对待它，会让它感受到更多信任与安全感。",
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
        "Curiosity may lead them to open doors and drawers on their own, so it helps to have safety locks ready in advance.",
        "They enjoy spontaneous fun more than strict training, so approaching lessons like a game gets much better results.",
        "Exploring can lead to bumping into things, so keep precious items somewhere out of reach.",
        "Their curiosity extends to high places and tight gaps, so it helps to block off risky areas beforehand.",
      ],
      ja: [
        "好奇心旺盛でドアや引き出しも自分で開けてしまうことがあるので、あらかじめ安全ロックを用意しておきましょう。",
        "決まった訓練よりも即興的な楽しさを好むので、遊び感覚で接すると驚くほどよく応えてくれます。",
        "探検中に物に触れてしまうことがあるので、大切な物は手の届かない場所に置いておきましょう。",
        "高い場所や狭い隙間まで気になるタイプなので、危険な場所は事前に安全にふさいでおきましょう。",
      ],
      zh: [
        "好奇心很强，可能会自己打开门或抽屉，建议提前准备好安全锁。",
        "比起固定训练，它更喜欢即兴的乐趣，用游戏的方式引导会配合得更好。",
        "探索时可能会碰到物品，请把珍贵的东西放在它够不到的地方。",
        "连高处和狭窄缝隙都很好奇，建议提前把危险区域安全封住。",
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
        "Give them time with new people — it's best to wait until they choose to approach on their own.",
        "In unfamiliar spaces, give them plenty of time to get comfortable at their own pace.",
        "They don't show emotion very openly, so it helps to watch closely for small changes in behavior.",
        "Quiet time and a cozy hideout can help release any tension that's been building up inside.",
      ],
      ja: [
        "知らない人との出会いはゆっくりと、自分から近づいてくるまで待ってあげましょう。",
        "初めての場所では、慣れるまでの時間を十分に与えてあげましょう。",
        "感情表現が控えめなので、小さな行動の変化も注意深く見てあげましょう。",
        "心の中にたまった緊張は、静かな時間と隠れ家でほぐしてあげることができます。",
      ],
      zh: [
        "与陌生人见面时请慢慢来，等它自己主动靠近比较好。",
        "在陌生的空间里，请给它足够的时间慢慢熟悉。",
        "它情绪表达不太明显，建议细心留意细微的行为变化。",
        "内心积累的紧张，可以通过安静的时间和藏身处来慢慢释放。",
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
        "They just don't show affection loudly — responding warmly whenever they do approach deepens the bond.",
        "They can seem indifferent to things that don't interest them, so drawing them in with intellectual play sparks their interest.",
        "Tight gaps and high shelves are all fair game for exploration, so block off risky spots beforehand.",
        "They rarely show stress openly, so it helps to keep a steady eye on changes in appetite or behavior.",
      ],
      ja: [
        "愛情表現が少ないだけなので、近づいてきたときにしっかり応えてあげると絆が深まります。",
        "興味のない刺激には無関心なことがあるので、好きな知的遊びで興味を引き出してあげましょう。",
        "狭い隙間や高い棚も探究の対象になるので、危険な場所は事前に安全にふさいでおきましょう。",
        "ストレスをあまり表に出さないので、食欲や行動の変化をこまめに観察してあげましょう。",
      ],
      zh: [
        "它只是不太主动表达感情，当它靠近时给予充分回应，感情会更深厚。",
        "对不感兴趣的刺激可能显得冷淡，建议用它喜欢的益智游戏来激发兴趣。",
        "狭缝和高处架子都是它探索的对象，请提前把危险区域安全封住。",
        "它不太容易表现出压力，建议持续观察食欲和行为上的变化。",
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
        "They're sensitive to conflict and loud noise, so a calm, quiet environment helps them feel at ease.",
        "They deeply empathize with their owner's mood, so bonding often with a bright, cheerful voice helps a lot.",
        "Long stretches alone can make them feel lonely, so frequent short greetings and attention go a long way.",
        "Speaking to them in a warm, gentle tone helps them open up much more comfortably.",
      ],
      ja: [
        "争いや大きな音に敏感なので、落ち着いた静かな環境を作ってあげましょう。",
        "飼い主の気持ちに深く共感するタイプなので、明るい声で頻繁にコミュニケーションを取ってあげましょう。",
        "ひとりの時間が長くなると寂しくなりやすいので、短い挨拶や関心をこまめに向けてあげましょう。",
        "やさしい言葉で接してあげると、より安心して心を開いてくれます。",
      ],
      zh: [
        "对冲突或巨大声响比较敏感，请为它营造安静舒适的环境。",
        "它很能感知主人的情绪，建议常用开朗的声音多和它互动交流。",
        "独处时间太长会容易感到寂寞，建议经常给予简短的问候和关注。",
        "用温柔的语气和它说话，会让它更放心地敞开心扉。",
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
        "They crave new stimulation quickly, so rotating toys regularly keeps the fun going longer.",
        "When play gets too exciting, they may leap into risky spots, so it helps to set up a safe play area.",
        "They prefer spontaneous play over a fixed routine, so staying flexible with playtime works best.",
        "They feel much more settled in a calm atmosphere than in a noisy environment.",
      ],
      ja: [
        "すぐに新しい刺激を求めるので、おもちゃを定期的に替えてあげると楽しさが長続きします。",
        "興奮して遊びすぎると危険な場所に飛び込むことがあるので、安全な遊び場を用意してあげましょう。",
        "決まったルーティンより即興的な遊びを好むので、柔軟に遊んであげましょう。",
        "騒がしい環境よりも落ち着いた雰囲気の中でより安定します。",
      ],
      zh: [
        "很快就想要新的刺激，建议定期更换玩具，这样乐趣能维持更久。",
        "玩得太兴奋时可能会冲向危险的地方，请为它准备安全的游戏空间。",
        "比起固定作息，它更喜欢即兴玩耍，建议灵活地陪它玩。",
        "比起吵闹的环境，它在舒适的氛围中会感到更安稳。",
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
        "They value a set routine, so try to keep feeding and cleaning times consistent.",
        "When changing the environment or routine, ease them into it gradually.",
        "Broken rules can stress them out, so in multi-cat homes, respect each cat's own space.",
        "When they seem on edge, give them time and space alone to settle down.",
      ],
      ja: [
        "決まったルーティンを大切にするタイプなので、食事や掃除の時間を一定に保ってあげましょう。",
        "環境やルーティンを変えるときは、少しずつゆっくり慣らしてあげましょう。",
        "ルールが守られないとストレスを感じることがあるので、多頭飼いの場合はそれぞれの空間を尊重してあげましょう。",
        "神経質になったときは、ひとりで落ち着ける時間と空間を用意してあげましょう。",
      ],
      zh: [
        "它很重视固定的作息，请尽量保持喂食和清洁时间的规律性。",
        "改变环境或作息时，建议一点点慢慢让它适应。",
        "规则被打破可能会让它有压力，多猫家庭请尊重每只猫各自的空间。",
        "变得敏感时，请给它独自冷静下来的时间和空间。",
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
        "Being alone can be tough for them, so build a reassuring routine around going out and coming home.",
        "Being sweet to everyone can wear them out, so make sure they get some time to rest alone too.",
        "They tend to tolerate discomfort quietly, so check in on their condition often.",
        "They feel much more comfortable in a calm atmosphere than in a noisy one.",
      ],
      ja: [
        "ひとりの時間が苦手なことがあるので、外出前後に安心できるルーティンを作ってあげましょう。",
        "誰にでも優しくする分、疲れやすいので、ひとりで休める時間も確保してあげましょう。",
        "つらくても我慢しがちなので、普段の体調をこまめに確認してあげましょう。",
        "騒がしい環境よりも落ち着いた雰囲気の中でより快適に過ごせます。",
      ],
      zh: [
        "独处可能让它感到不安，建议在外出前后建立能让它安心的固定流程。",
        "对谁都很温柔，容易感到疲惫，请也留一些时间让它独自休息。",
        "即使不舒服也容易默默忍耐，建议经常留意它平时的状态。",
        "比起嘈杂的环境，它在平静的氛围中会更自在。",
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
        "They love familiar surroundings, so try to keep furniture and item placement as consistent as possible.",
        "New things take some getting used to, so introduce them slowly.",
        "They don't show much emotion, so keep an eye on even small changes in behavior.",
        "Stress can show up as changes in appetite or litter habits, so keep checking their everyday condition.",
      ],
      ja: [
        "慣れた環境を好むので、家具や物の配置はできるだけ変えないようにしましょう。",
        "新しいものには慣れる時間が必要なので、ゆっくり紹介してあげましょう。",
        "感情表現が控えめなので、些細な行動の変化にも関心を持って見てあげましょう。",
        "ストレスは食欲やトイレの変化として現れることがあるので、普段の体調をこまめにチェックしてあげましょう。",
      ],
      zh: [
        "它喜欢熟悉的环境，请尽量保持家具和物品的摆放位置不变。",
        "接触新事物需要适应时间，请慢慢地介绍给它。",
        "情绪表达不太明显，建议留意细微的行为变化。",
        "压力可能表现为食欲或排泄的变化，建议持续关注它平时的状态。",
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
        "Being apart from their owner can be hard, so create a short greeting routine for leaving and coming home.",
        "Introduce strangers and new environments slowly while staying close by their side.",
        "They don't express what they want very clearly, so reach out to them with attention often.",
        "Even on busy days, a bit of quick affection helps keep them feeling secure.",
      ],
      ja: [
        "飼い主と離れるのがつらいことがあるので、外出前後に短い挨拶ルーティンを作ってあげましょう。",
        "知らない人や環境はそばで見守りながらゆっくり紹介してあげましょう。",
        "自分の欲求をあまり表現しないので、こちらから積極的に関心を向けてあげましょう。",
        "忙しい日でも、短いスキンシップで安心感を満たしてあげましょう。",
      ],
      zh: [
        "和主人分开可能会让它不安，建议在外出前后建立简短的问候流程。",
        "介绍陌生人或新环境时，请陪在它身边慢慢来。",
        "它不太会主动表达需求，建议多主动靠近给予关注。",
        "再忙的日子，也请用短暂的亲昵互动给它安全感。",
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
        "They have excellent reflexes, so set up a safe space where they can jump freely.",
        "They love chasing things, so put fragile items away in advance.",
        "Short, high-energy play sessions suit them far better than repetitive training.",
        "After getting excited during play, give them time to calm back down.",
      ],
      ja: [
        "運動神経が優れているので、思いきりジャンプしても安全なスペースを用意してあげましょう。",
        "物を追いかけるのが好きなので、壊れやすい物は事前に片付けておきましょう。",
        "反復的な訓練よりも短くて迫力のある遊びの方がずっと合っています。",
        "興奮して遊んだあとは、落ち着く時間をあげましょう。",
      ],
      zh: [
        "它反应速度极快，请为它准备可以尽情跳跃的安全空间。",
        "喜欢追逐物品，请提前收好易碎物品。",
        "比起重复训练，短而刺激的游戏更适合它。",
        "玩得兴奋之后，请给它一些时间冷静下来。",
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
        "They love being noticed, so make eye contact and respond to them often.",
        "They're easily distracted by surrounding stimuli, so keep training sessions short and in a quiet spot.",
        "Giving rewards right away makes them join in much more enthusiastically.",
        "When their affection overflows, accept it gently and make sure they get rest time too.",
      ],
      ja: [
        "注目されるのが好きなので、よく目を合わせて反応してあげましょう。",
        "周囲の刺激で気が散りやすいので、静かな場所で短めに訓練してあげましょう。",
        "すぐにご褒美をあげると、より楽しそうに取り組んでくれます。",
        "愛情表現があふれるときはやさしく受け止め、休む時間も一緒に確保してあげましょう。",
      ],
      zh: [
        "它喜欢被关注，建议经常与它对视并给予回应。",
        "容易被周围的刺激分散注意力，建议在安静的地方进行短时间训练。",
        "如果能及时给予奖励，它会更积极地参与。",
        "当它情感外露、撒娇过度时，请温柔地接纳，也别忘了给它安排休息时间。",
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
        "They prefer doing things their own way over physical affection, so approach only as much as they want.",
        "They lose interest quickly if something doesn't grab them, so keep play short and practical.",
        "They rarely show stress openly, so pay close attention to their usual behavior patterns.",
        "They tend to make bold decisions on their own, so secure any risky spaces in advance.",
      ],
      ja: [
        "スキンシップよりも自分のやり方を好むので、猫が望む分だけ近づいてあげましょう。",
        "興味がないとすぐに関心を失うので、短くて実用的な遊びで誘ってあげましょう。",
        "ストレスをあまり表に出さないので、普段の行動パターンをよく観察してあげましょう。",
        "自分で判断して大胆に挑戦するタイプなので、危険な場所は事前に安全に整理しておきましょう。",
      ],
      zh: [
        "比起亲密接触，它更喜欢按自己的方式来，请只在它愿意的范围内靠近它。",
        "对不感兴趣的事情很快就会失去关注，建议用简短实用的游戏来吸引它。",
        "它不太容易表现出压力，建议仔细观察平时的行为模式。",
        "它喜欢自行判断、大胆尝试，请提前把危险区域安全整理好。",
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
        "Loud sounds or unfamiliar stimuli can feel overwhelming, so provide a comfortable space for them.",
        "Their love of quiet can mean less exercise, so keep offering relaxed play regularly.",
        "They don't express stress clearly, so pay closer attention if they seem quieter than usual.",
        "They feel far more comfortable in a peaceful atmosphere than in a highly stimulating one.",
      ],
      ja: [
        "大きな音や見知らぬ刺激は負担に感じやすいので、落ち着ける空間を用意してあげましょう。",
        "静かなことを好み運動量が不足しがちなので、のんびりした遊びをこまめに取り入れてあげましょう。",
        "ストレスをはっきり表現しないので、いつもより静かに見えたら気にかけてあげましょう。",
        "刺激の多い環境よりも穏やかな雰囲気の中でずっと快適に過ごせます。",
      ],
      zh: [
        "大声或陌生刺激可能让它感到有压力，请为它准备舒适的空间。",
        "它喜欢安静，运动量可能不足，建议持续安排一些悠闲的游戏。",
        "压力表现不明显，如果它看起来比平时更安静，请多加留意。",
        "比起刺激较多的环境，它在平和的氛围中会舒服得多。",
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

  /* ---------------------------------------------------
     INFJ
  --------------------------------------------------- */
  INFJ: {
    ...baseI18n.INFJ,
    weaknesses_i18n: {
      ko: baseI18n.INFJ.weaknesses_i18n.ko,
      en: [
        "They're sensitive to unfamiliar places and sounds, so introduce new stimuli gradually.",
        "Stress can make them hide or lose their appetite, so be sure to provide a safe hideout.",
        "They adapt much better to gradual change than to sudden change.",
        "They tend to mask how they're feeling, so watch their everyday behavior closely.",
      ],
      ja: [
        "見知らぬ環境や音に敏感なので、新しい刺激はゆっくり紹介してあげましょう。",
        "ストレスを受けると隠れたり食欲が落ちたりすることがあるので、安心できる隠れ家を必ず用意してあげましょう。",
        "急な変化よりも段階的な変化にずっとよく適応します。",
        "体調を隠しがちなタイプなので、普段の様子を注意深く見てあげましょう。",
      ],
      zh: [
        "对陌生环境和声音比较敏感，建议慢慢引入新的刺激。",
        "有压力时可能会躲起来或食欲下降，请务必为它准备一个安心的躲藏处。",
        "相比突然的变化，它更能适应循序渐进的调整。",
        "它比较容易隐藏状态变化，建议细心观察它平时的表现。",
      ],
    },
  },

  /* ---------------------------------------------------
     INFP
  --------------------------------------------------- */
  INFP: {
    ...baseI18n.INFP,
    weaknesses_i18n: {
      ko: baseI18n.INFP.weaknesses_i18n.ko,
      en: [
        "Introduce new people and environments slowly, giving them time to feel at ease.",
        "Guiding them gently, as if explaining things in a soft tone, helps them follow along more willingly.",
        "They tend to bottle up stress, so if they seem more sensitive than usual, give them more quiet time.",
        "Their laid-back nature can mean less activity, so keep offering light play sessions regularly.",
      ],
      ja: [
        "知らない人や環境はゆっくり紹介して、安心できる時間をあげましょう。",
        "やさしい口調で説明するように導いてあげると、より心を開いてついてきます。",
        "ストレスを内にため込みやすいタイプなので、いつもより敏感に見えたら静かな時間を増やしてあげましょう。",
        "のんびりした性格で運動量が少なくなりがちなので、軽い遊びをこまめに取り入れてあげましょう。",
      ],
      zh: [
        "请慢慢介绍陌生人和新环境，给它足够的时间安心适应。",
        "用温柔的语气像讲解一样引导它，会让它更愿意配合。",
        "它容易把压力憋在心里，如果看起来比平时敏感，建议增加安静独处的时间。",
        "性格悠闲，运动量可能偏少，建议持续安排一些轻松的游戏。",
      ],
    },
  },
};
