// data/dogQuestions.ts

// (위쪽에 Dimension 타입이 이미 있을 거라고 가정)
// type Dimension = "EI" | "SN" | "TF" | "JP";

export interface DogQuestion {
  id: number;
  dimension: Dimension;
  eOrSOrTOrJ: string; // 왼쪽 선택지 (E/S/T/J)
  iOrNOrFOrP: string; // 오른쪽 선택지 (I/N/F/P)

  // i18n (옵셔널)
  eOrSOrTOrJ_i18n?: { ko: string; en: string; ja: string; zh: string };
  iOrNOrFOrP_i18n?: { ko: string; en: string; ja: string; zh: string };
}

export const dogQuestions: DogQuestion[] = [
  // --- E vs I (에너지 방향: 8문항) ---
  {
    id: 1,
    dimension: "EI",
    eOrSOrTOrJ: "낯선 강아지를 만나면 먼저 다가가 인사를 건넨다.",
    iOrNOrFOrP: "상대방이 다가올 때까지 기다리거나 보호자 곁에 머문다.",
    eOrSOrTOrJ_i18n: {
      ko: "낯선 강아지를 만나면 먼저 다가가 인사를 건넨다.",
      en: "When meeting an unfamiliar dog, they walk up first to say hello.",
      ja: "見知らぬ犬に会うと、自分から近づいてあいさつしに行く。",
      zh: "遇到陌生的狗时，会先主动走过去打招呼。",
    },
    iOrNOrFOrP_i18n: {
      ko: "상대방이 다가올 때까지 기다리거나 보호자 곁에 머문다.",
      en: "They wait until the other dog comes closer or stay by their guardian.",
      ja: "相手の犬が近づいてくるまで待つか、飼い主のそばに留まる。",
      zh: "会等对方狗狗先靠近，或者待在饲主身边。",
    },
  },
  {
    id: 2,
    dimension: "EI",
    eOrSOrTOrJ:
      "산책 시, 앞장서서 걷며 주변의 모든 자극을 확인하려 한다.",
    iOrNOrFOrP:
      "보호자의 보폭에 맞추거나 한곳에서 진득하게 냄새 맡기를 즐긴다.",
    eOrSOrTOrJ_i18n: {
      ko: "산책 시, 앞장서서 걷며 주변의 모든 자극을 확인하려 한다.",
      en: "On walks, they lead the way and try to check every little stimulus.",
      ja: "散歩のときは先頭に立って歩き、周りの刺激を全部確認しようとする。",
      zh: "散步时喜欢走在前面，对周围的一切刺激都要确认一遍。",
    },
    iOrNOrFOrP_i18n: {
      ko: "보호자의 보폭에 맞추거나 한곳에서 진득하게 냄새 맡기를 즐긴다.",
      en: "They match their guardian’s pace or enjoy sniffing one spot for a long time.",
      ja: "飼い主の歩幅に合わせて歩いたり、一か所でじっくり匂いを嗅ぐのを好む。",
      zh: "会配合主人的步伐，或者在同一个地方慢慢闻个够。",
    },
  },
  {
    id: 3,
    dimension: "EI",
    eOrSOrTOrJ:
      "집에 손님이 오면 흥분을 가라앉히기 힘들 정도로 반긴다.",
    iOrNOrFOrP:
      "손님이 오면 냄새를 맡으며 조심스럽게 탐색전부터 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "집에 손님이 오면 흥분을 가라앉히기 힘들 정도로 반긴다.",
      en: "When guests visit, they get so excited that it’s hard to calm them down.",
      ja: "家に来客があると、落ち着かせるのが大変なほど大喜びする。",
      zh: "家里来客人时会兴奋得很难冷静下来。",
    },
    iOrNOrFOrP_i18n: {
      ko: "손님이 오면 냄새를 맡으며 조심스럽게 탐색전부터 한다.",
      en: "When guests come, they carefully sniff and observe them first.",
      ja: "来客があると、まず匂いを嗅ぎながら慎重に様子を見る。",
      zh: "有客人来时，会先小心地闻一闻、观察一阵。",
    },
  },
  {
    id: 4,
    dimension: "EI",
    eOrSOrTOrJ:
      "다른 강아지가 짖으면 같이 짖거나 그쪽으로 달려가려 한다.",
    iOrNOrFOrP:
      "다른 강아지의 소음에도 크게 동요하지 않고 제 갈 길을 간다.",
    eOrSOrTOrJ_i18n: {
      ko: "다른 강아지가 짖으면 같이 짖거나 그쪽으로 달려가려 한다.",
      en: "When another dog barks, they bark along or try to run toward it.",
      ja: "ほかの犬が吠えると、一緒に吠えたりその犬のほうへ走り寄ろうとする。",
      zh: "听到别的狗叫时，会跟着叫或者想冲过去。",
    },
    iOrNOrFOrP_i18n: {
      ko: "다른 강아지의 소음에도 크게 동요하지 않고 제 갈 길을 간다.",
      en: "Even with other dogs barking, they stay calm and continue on their way.",
      ja: "ほかの犬の鳴き声がしても、あまり動じず自分のペースで歩き続ける。",
      zh: "即使周围有狗吠声，也不太受影响，照样走自己的路。",
    },
  },
  {
    id: 5,
    dimension: "EI",
    eOrSOrTOrJ:
      "새로운 장소를 방문하는 것을 두려움보다 모험으로 즐긴다.",
    iOrNOrFOrP:
      "익숙한 동네를 산책할 때 훨씬 편안하고 안정적인 모습을 보인다.",
    eOrSOrTOrJ_i18n: {
      ko: "새로운 장소를 방문하는 것을 두려움보다 모험으로 즐긴다.",
      en: "They enjoy visiting new places more as an adventure than something to fear.",
      ja: "新しい場所に行くのを怖がるより、冒険のように楽しむタイプだ。",
      zh: "去新的地方时，比起害怕，更像是在享受冒险。",
    },
    iOrNOrFOrP_i18n: {
      ko: "익숙한 동네를 산책할 때 훨씬 편안하고 안정적인 모습을 보인다.",
      en: "They look much more relaxed and stable when walking in familiar areas.",
      ja: "よく知っている近所を散歩しているときのほうが、ずっと落ち着いて安定している。",
      zh: "在熟悉的小区散步时，显得更加放松、安定。",
    },
  },
  {
    id: 6,
    dimension: "EI",
    eOrSOrTOrJ:
      "놀이 시간이 끝나도 계속 장난감을 물고 와서 조른다.",
    iOrNOrFOrP:
      "놀이 시간이 끝나면 금방 차분해져서 휴식을 취한다.",
    eOrSOrTOrJ_i18n: {
      ko: "놀이 시간이 끝나도 계속 장난감을 물고 와서 조른다.",
      en: "Even after playtime ends, they keep bringing toys asking for more.",
      ja: "遊びの時間が終わっても、おもちゃをくわえてもっと遊ぼうとねだる。",
      zh: "玩耍时间结束了也会叼着玩具继续央求玩。",
    },
    iOrNOrFOrP_i18n: {
      ko: "놀이 시간이 끝나면 금방 차분해져서 휴식을 취한다.",
      en: "Once playtime is over, they soon calm down and take a rest.",
      ja: "遊びが終わると、すぐに落ち着いて休憩モードに入る。",
      zh: "玩耍结束后，很快就会安静下来休息。",
    },
  },
  {
    id: 7,
    dimension: "EI",
    eOrSOrTOrJ:
      "자신의 감정(좋음, 싫음)을 온몸으로 즉각 표현한다.",
    iOrNOrFOrP:
      "표정이나 행동의 변화가 크지 않아 기분을 파악하려면 자세히 봐야 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "자신의 감정(좋음, 싫음)을 온몸으로 즉각 표현한다.",
      en: "They instantly express their feelings (like or dislike) with their whole body.",
      ja: "好き・嫌いなどの感情を、全身を使ってすぐに表現する。",
      zh: "喜欢或不喜欢都会立刻用全身动作表现出来。",
    },
    iOrNOrFOrP_i18n: {
      ko: "표정이나 행동의 변화가 크지 않아 기분을 파악하려면 자세히 봐야 한다.",
      en: "Their facial and body changes are subtle, so you need to look closely to read their mood.",
      ja: "表情や動きの変化が小さく、気持ちを読み取るにはよく観察する必要がある。",
      zh: "表情和动作变化不大，需要仔细观察才能看出心情。",
    },
  },
  {
    id: 8,
    dimension: "EI",
    eOrSOrTOrJ:
      "여러 강아지가 모인 애견 운동장에서 노는 것을 선호한다.",
    iOrNOrFOrP:
      "조용한 공원에서 보호자와 단둘이 오붓하게 걷는 것을 선호한다.",
    eOrSOrTOrJ_i18n: {
      ko: "여러 강아지가 모인 애견 운동장에서 노는 것을 선호한다.",
      en: "They prefer playing at a dog park full of other dogs.",
      ja: "たくさんの犬が集まるドッグランで遊ぶほうが好きだ。",
      zh: "更喜欢在有很多狗的运动场里玩耍。",
    },
    iOrNOrFOrP_i18n: {
      ko: "조용한 공원에서 보호자와 단둘이 오붓하게 걷는 것을 선호한다.",
      en: "They prefer quiet walks alone with their guardian in a calm park.",
      ja: "静かな公園で、飼い主と二人きりでゆっくり散歩するのを好む。",
      zh: "更喜欢在安静的公园里，只和主人两个人慢慢散步。",
    },
  },

  // --- S vs N (정보 처리: 7문항) ---
  {
    id: 9,
    dimension: "SN",
    eOrSOrTOrJ:
      "간식을 찾을 때 코를 바닥에 대고 냄새(감각)에 의존해 찾는다.",
    iOrNOrFOrP:
      "간식을 찾을 때 숨기는 보호자의 손동작이나 눈치(패턴)를 살핀다.",
    eOrSOrTOrJ_i18n: {
      ko: "간식을 찾을 때 코를 바닥에 대고 냄새(감각)에 의존해 찾는다.",
      en: "When searching for treats, they rely mainly on nose-to-the-ground sniffing.",
      ja: "おやつを探すときは、床に鼻をつけて匂い（感覚）を頼りに探す。",
      zh: "找零食时，会把鼻子贴着地面，主要靠嗅觉寻找。",
    },
    iOrNOrFOrP_i18n: {
      ko: "간식을 찾을 때 숨기는 보호자의 손동작이나 눈치(패턴)를 살핀다.",
      en: "When searching for treats, they watch the guardian’s hands and subtle cues.",
      ja: "おやつを探すときは、飼い主の手の動きや気配（パターン）をよく観察する。",
      zh: "找零食时，会看主人藏在哪里、注意手部动作和眼神。",
    },
  },
  {
    id: 10,
    dimension: "SN",
    eOrSOrTOrJ:
      "장난감의 삑삑 소리나 물고 뜯는 촉감 자체에 몰입한다.",
    iOrNOrFOrP:
      "장난감을 던져줄 듯 말 듯 하는 보호자와의 심리전 놀이를 더 즐긴다.",
    eOrSOrTOrJ_i18n: {
      ko: "장난감의 삑삑 소리나 물고 뜯는 촉감 자체에 몰입한다.",
      en: "They get absorbed in the squeak and chewing feel of the toy itself.",
      ja: "おもちゃのピーピー音や、噛んだときの感触そのものに夢中になる。",
      zh: "会沉迷于玩具本身的吱吱声和咬咬的触感。",
    },
    iOrNOrFOrP_i18n: {
      ko: "장난감을 던져줄 듯 말 듯 하는 보호자와의 심리전 놀이를 더 즐긴다.",
      en: "They enjoy the mind game with their guardian who feints throwing the toy.",
      ja: "投げるふりをする飼い主との駆け引きのような遊びをより楽しむ。",
      zh: "更享受主人“要丢不丢”的心理战游戏。",
    },
  },
  {
    id: 11,
    dimension: "SN",
    eOrSOrTOrJ:
      "훈련 시, 눈앞의 간식이나 장난감 같은 뚜렷한 보상이 있을 때 집중이 잘 된다.",
    iOrNOrFOrP:
      "훈련 시, 보호자의 표정과 목소리 톤 등 분위기를 보고 스스로 행동을 맞춰가는 편이다.",
    eOrSOrTOrJ_i18n: {
      ko: "훈련 시, 눈앞의 간식이나 장난감 같은 뚜렷한 보상이 있을 때 집중이 잘 된다.",
      en: "During training, they focus best when there is a clear reward like a treat or toy.",
      ja: "トレーニングのときは、目の前におやつやおもちゃなどのはっきりしたご褒美があると集中しやすい。",
      zh: "训练时，如果眼前有零食或玩具等明确奖励，会更容易集中。",
    },
    iOrNOrFOrP_i18n: {
      ko: "훈련 시, 보호자의 표정과 목소리 톤 등 분위기를 보고 스스로 행동을 맞춰가는 편이다.",
      en: "During training, they read the guardian’s tone and expression to adjust their behavior.",
      ja: "トレーニングのときは、飼い主の表情や声のトーンなど雰囲気を読み取りながら行動を合わせていく。",
      zh: "训练时，会看主人的表情和声音氛围，自行调整行为。",
    },
  },
  {
    id: 12,
    dimension: "SN",
    eOrSOrTOrJ:
      "산책 중 만나는 고양이나 새의 움직임(시각적 자극)에 즉각 반응한다.",
    iOrNOrFOrP:
      "산책 경로의 변화나 보호자의 미세한 기분 변화(분위기)를 먼저 감지한다.",
    eOrSOrTOrJ_i18n: {
      ko: "산책 중 만나는 고양이나 새의 움직임(시각적 자극)에 즉각 반응한다.",
      en: "They react instantly to moving cats or birds they see on walks.",
      ja: "散歩中に出会う猫や鳥など、目に入る動きにすぐ反応する。",
      zh: "散步时，对猫、鸟等肉眼看到的移动会立刻做出反应。",
    },
    iOrNOrFOrP_i18n: {
      ko: "산책 경로의 변화나 보호자의 미세한 기분 변화(분위기)를 먼저 감지한다.",
      en: "They notice changes in the route or their guardian’s mood before anything else.",
      ja: "散歩コースの変化や、飼い主のちょっとした気分の変化（雰囲気）を真っ先に感じ取る。",
      zh: "更容易先察觉到散步路线的变化或主人的情绪氛围变化。",
    },
  },
  {
    id: 13,
    dimension: "SN",
    eOrSOrTOrJ:
      "새로운 장난감을 주면 바로 입으로 가져가 탐색한다.",
    iOrNOrFOrP:
      "새로운 장난감을 주면 어떻게 가지고 노는 물건인지 관찰부터 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "새로운 장난감을 주면 바로 입으로 가져가 탐색한다.",
      en: "Given a new toy, they immediately grab it with their mouth to explore.",
      ja: "新しいおもちゃをもらうと、すぐに口にくわえて確かめようとする。",
      zh: "给到新玩具时，会立刻叼在嘴里探索一番。",
    },
    iOrNOrFOrP_i18n: {
      ko: "새로운 장난감을 주면 어떻게 가지고 노는 물건인지 관찰부터 한다.",
      en: "Given a new toy, they first watch and study how it should be played with.",
      ja: "新しいおもちゃをもらうと、まずどんなふうに遊ぶものかじっくり観察する。",
      zh: "拿到新玩具时，会先观察这是怎么玩的东西。",
    },
  },
  {
    id: 14,
    dimension: "SN",
    eOrSOrTOrJ:
      "눈앞의 상황에 솔직하게 반응하는 편이다 (단순하고 직관적이다).",
    iOrNOrFOrP:
      "가끔 '사람 같다'고 느낄 정도로 눈치가 빠르고 상황 파악을 잘한다.",
    eOrSOrTOrJ_i18n: {
      ko: "눈앞의 상황에 솔직하게 반응하는 편이다 (단순하고 직관적이다).",
      en: "They react honestly to what’s right in front of them (simple and intuitive).",
      ja: "目の前の状況に素直に反応するタイプで、シンプルかつ直感的だ。",
      zh: "对眼前发生的事情反应很直接（简单又直觉）。",
    },
    iOrNOrFOrP_i18n: {
      ko: "가끔 '사람 같다'고 느낄 정도로 눈치가 빠르고 상황 파악을 잘한다.",
      en: "They read the room so well that people sometimes say they’re almost human.",
      ja: "ときどき「人間みたい」と感じるほど空気を読むのが上手い。",
      zh: "有时会被觉得“像人一样”地察言观色、判断情况。",
    },
  },
  {
    id: 15,
    dimension: "SN",
    eOrSOrTOrJ:
      "반복적인 터그 놀이나 공 던지기를 지치지 않고 계속한다.",
    iOrNOrFOrP:
      "단순 반복 놀이보다는 노즈워크나 지능 개발 장난감에 더 오래 집중한다.",
    eOrSOrTOrJ_i18n: {
      ko: "반복적인 터그 놀이나 공 던지기를 지치지 않고 계속한다.",
      en: "They can keep playing tug or fetch over and over without getting tired.",
      ja: "引っ張りっこやボール投げなど、同じ遊びを飽きずに何度でも続ける。",
      zh: "可以不停地玩拔河或丢球这类重复游戏而不厌烦。",
    },
    iOrNOrFOrP_i18n: {
      ko: "단순 반복 놀이보다는 노즈워크나 지능 개발 장난감에 더 오래 집중한다.",
      en: "They focus longer on nose work or puzzle toys than on simple repetitive games.",
      ja: "単純な繰り返し遊びより、ノーズワークや知育おもちゃのほうに長く集中する。",
      zh: "比起单纯重复的游戏，更能长时间专注在嗅闻游戏或益智玩具上。",
    },
  },

  // --- T vs F (판단 기준: 8문항) ---
  {
    id: 16,
    dimension: "TF",
    eOrSOrTOrJ:
      "자신의 밥그릇이나 장난감에 대한 애착이 강해, 누가 다가오면 먼저 지키려는 반응을 보인다.",
    iOrNOrFOrP:
      "자신의 물건이라도 보호자나 친한 강아지가 만지는 것을 크게 개의치 않는다.",
    eOrSOrTOrJ_i18n: {
      ko: "자신의 밥그릇이나 장난감에 대한 애착이 강해, 누가 다가오면 먼저 지키려는 반응을 보인다.",
      en: "They are very attached to their bowl or toys and try to guard them when others approach.",
      ja: "自分のごはん皿やおもちゃへの愛着が強く、誰かが近づくとまず守ろうとする。",
      zh: "对自己的饭碗和玩具很有占有欲，有人靠近时会先表现出守护的反应。",
    },
    iOrNOrFOrP_i18n: {
      ko: "자신의 물건이라도 보호자나 친한 강아지가 만지는 것을 크게 개의치 않는다.",
      en: "They don’t mind much if their guardian or familiar dogs touch their things.",
      ja: "自分の物でも、飼い主や仲良しの犬が触ってもあまり気にしない。",
      zh: "即使是自己的东西，被主人或熟悉的狗狗碰一碰也无所谓。",
    },
  },
  {
    id: 17,
    dimension: "TF",
    eOrSOrTOrJ:
      "혼났을 때, 억울해하거나 구석으로 가서 토라진다.",
    iOrNOrFOrP:
      "혼났을 때, 보호자의 눈치를 보며 바로 애교를 부려 풀려고 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "혼났을 때, 억울해하거나 구석으로 가서 토라진다.",
      en: "When scolded, they sulk or retreat to a corner looking upset.",
      ja: "叱られると、すねた様子で隅っこに行ったり、不満そうな顔をする。",
      zh: "被骂时会一脸委屈地躲到角落里闹小脾气。",
    },
    iOrNOrFOrP_i18n: {
      ko: "혼났을 때, 보호자의 눈치를 보며 바로 애교를 부려 풀려고 한다.",
      en: "When scolded, they quickly check their guardian’s mood and act cute to make up.",
      ja: "叱られると、すぐに飼い主の顔色を伺い、甘えたりしてその場をなごませようとする。",
      zh: "被骂之后会立刻看主人的脸色，用撒娇的方式来哄好对方。",
    },
  },
  {
    id: 18,
    dimension: "TF",
    eOrSOrTOrJ:
      "독립심이 강해 혼자만의 시간이나 공간을 즐길 줄 안다.",
    iOrNOrFOrP:
      "보호자와 잠시도 떨어지기 싫어하며 항상 붙어 있으려 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "독립심이 강해 혼자만의 시간이나 공간을 즐길 줄 안다.",
      en: "They are quite independent and enjoy their own time and space.",
      ja: "自立心が強く、一人の時間や自分だけの空間を楽しめるタイプだ。",
      zh: "独立性比较强，懂得享受自己的时间和空间。",
    },
    iOrNOrFOrP_i18n: {
      ko: "보호자와 잠시도 떨어지기 싫어하며 항상 붙어 있으려 한다.",
      en: "They dislike being apart from their guardian and want to stay close all the time.",
      ja: "飼い主と少しも離れたくなく、いつもくっついていたがる。",
      zh: "不太愿意和主人分开，总是想黏在一起。",
    },
  },
  {
    id: 19,
    dimension: "TF",
    eOrSOrTOrJ:
      "싫어하는 목욕이나 발톱 깎기를 할 때 단호하게 거부 의사를 밝힌다.",
    iOrNOrFOrP:
      "싫어하는 행동도 보호자가 달래주면 참고 견뎌주는 편이다.",
    eOrSOrTOrJ_i18n: {
      ko: "싫어하는 목욕이나 발톱 깎기를 할 때 단호하게 거부 의사를 밝힌다.",
      en: "During things they dislike, like baths or nail trims, they clearly resist.",
      ja: "苦手なシャンプーや爪切りのときは、はっきり嫌だと抵抗する。",
      zh: "遇到不喜欢的洗澡或剪指甲时，会很明确地表达抗拒。",
    },
    iOrNOrFOrP_i18n: {
      ko: "싫어하는 행동도 보호자가 달래주면 참고 견뎌주는 편이다.",
      en: "Even for things they dislike, they endure if their guardian gently reassures them.",
      ja: "苦手なことでも、飼い主に優しくなだめられると我慢してくれるほうだ。",
      zh: "即使是不喜欢的事情，只要主人安抚得好，也愿意忍耐配合。",
    },
  },
  {
    id: 20,
    dimension: "TF",
    eOrSOrTOrJ:
      "다른 강아지와의 기 싸움에서 밀리지 않으려는 편이다.",
    iOrNOrFOrP:
      "싸움이 날 것 같으면 먼저 배를 보이거나 자리를 피하는 평화주의자다.",
    eOrSOrTOrJ_i18n: {
      ko: "다른 강아지와의 기 싸움에서 밀리지 않으려는 편이다.",
      en: "They tend not to back down easily in a standoff with other dogs.",
      ja: "ほかの犬との駆け引きでも、簡単には引かないほうだ。",
      zh: "在和别的狗的气势较量中，不太愿意轻易认输。",
    },
    iOrNOrFOrP_i18n: {
      ko: "싸움이 날 것 같으면 먼저 배를 보이거나 자리를 피하는 평화주의자다.",
      en: "If a fight seems likely, they show their belly or walk away, preferring peace.",
      ja: "ケンカになりそうだと感じると、先にお腹を見せたりその場を離れる平和主義タイプだ。",
      zh: "一旦感觉要打起来，会先翻肚或离开现场，是偏向和平主义的类型。",
    },
  },
  {
    id: 21,
    dimension: "TF",
    eOrSOrTOrJ:
      "이름을 불렀을 때, 귀찮으면 귀만 쫑긋하고 반응하지 않을 때가 있다.",
    iOrNOrFOrP:
      "이름을 부르면 자다가도 꼬리를 치며 반응한다.",
    eOrSOrTOrJ_i18n: {
      ko: "이름을 불렀을 때, 귀찮으면 귀만 쫑긋하고 반응하지 않을 때가 있다.",
      en: "When called by name, they sometimes just twitch their ears and ignore it if they’re not in the mood.",
      ja: "名前を呼ばれても、気分が乗らないと耳だけピクッとさせて反応しないことがある。",
      zh: "叫名字时，如果不太想理，会只是耳朵动一动不怎么回应。",
    },
    iOrNOrFOrP_i18n: {
      ko: "이름을 부르면 자다가도 꼬리를 치며 반응한다.",
      en: "Even when asleep, they wag their tail and respond when their name is called.",
      ja: "寝ていても、名前を呼ばれると尻尾を振って反応する。",
      zh: "哪怕在睡觉，只要听到名字也会摇尾巴回应。",
    },
  },
  {
    id: 22,
    dimension: "TF",
    eOrSOrTOrJ:
      "원하는 것이 있으면 짖거나 긁어서 명확하게 요구한다.",
    iOrNOrFOrP:
      "원하는 것이 있으면 그윽하게 쳐다보거나 턱을 괴며 호소한다.",
    eOrSOrTOrJ_i18n: {
      ko: "원하는 것이 있으면 짖거나 긁어서 명확하게 요구한다.",
      en: "When they want something, they bark or scratch to make it very clear.",
      ja: "欲しいものがあると、吠えたり引っかいたりしてはっきり要求する。",
      zh: "有想要的东西时，会通过叫或抓挠来明确表达。",
    },
    iOrNOrFOrP_i18n: {
      ko: "원하는 것이 있으면 그윽하게 쳐다보거나 턱을 괴며 호소한다.",
      en: "When they want something, they gaze softly or rest their chin to appeal.",
      ja: "欲しいものがあるときは、じっと見つめたりアゴを乗せて静かにアピールする。",
      zh: "想要什么的时候，会深情地看着你或者轻轻把下巴靠在你身上示意。",
    },
  },
  {
    id: 23,
    dimension: "TF",
    eOrSOrTOrJ:
      "보호자의 감정 변화보다 자신의 현재 욕구(배고픔, 산책)가 더 우선이다.",
    iOrNOrFOrP:
      "보호자가 슬퍼 보이거나 아프면 곁을 지키며 위로하려 한다.",
    eOrSOrTOrJ_i18n: {
      ko: "보호자의 감정 변화보다 자신의 현재 욕구(배고픔, 산책)가 더 우선이다.",
      en: "Their own needs (hunger, walk time) come before their guardian’s mood.",
      ja: "飼い主の気持ちよりも、自分の今の欲求（お腹すいた、散歩したい）が優先になりやすい。",
      zh: "比起主人的情绪，更优先考虑自己当下的需求（肚子饿、想散步）。",
    },
    iOrNOrFOrP_i18n: {
      ko: "보호자가 슬퍼 보이거나 아프면 곁을 지키며 위로하려 한다.",
      en: "If their guardian looks sad or unwell, they stay close to comfort them.",
      ja: "飼い主が落ち込んでいたり体調が悪そうだと、そばに寄り添ってなぐさめようとする。",
      zh: "当主人看起来难过或不舒服时，会守在旁边安慰对方。",
    },
  },

  // --- J vs P (생활 양식: 7문항) ---
  {
    id: 24,
    dimension: "JP",
    eOrSOrTOrJ:
      "정해진 산책 시간이나 식사 시간이 늦어지면 안절부절못한다.",
    iOrNOrFOrP:
      "시간이 늦어져도 보호자가 챙겨줄 때까지 느긋하게 기다린다.",
    eOrSOrTOrJ_i18n: {
      ko: "정해진 산책 시간이나 식사 시간이 늦어지면 안절부절못한다.",
      en: "They get restless when walk or meal times are delayed.",
      ja: "決まった散歩やごはんの時間が遅れると、そわそわ落ち着かなくなる。",
      zh: "散步或吃饭时间一拖延，就会变得坐立不安。",
    },
    iOrNOrFOrP_i18n: {
      ko: "시간이 늦어져도 보호자가 챙겨줄 때까지 느긋하게 기다린다.",
      en: "Even if it’s delayed, they calmly wait until their guardian takes care of it.",
      ja: "時間が多少遅れても、飼い主が用意してくれるまでのんびり待てる。",
      zh: "就算时间晚了，也会悠哉地等到主人来照顾自己。",
    },
  },
  {
    id: 25,
    dimension: "JP",
    eOrSOrTOrJ:
      "배변은 주로 집 안 패드나 늘 가던 지정된 장소(실외)에서 해결하는 편이다.",
    iOrNOrFOrP:
      "상황과 분위기에 따라 새로운 장소에서도 배변을 시도하는 편이다.",
    eOrSOrTOrJ_i18n: {
      ko: "배변은 주로 집 안 패드나 늘 가던 지정된 장소(실외)에서 해결하는 편이다.",
      en: "They mainly relieve themselves on indoor pads or the usual outdoor spot.",
      ja: "排泄は、室内のトイレシートやいつもの決まった場所（屋外）ですることが多い。",
      zh: "大多会在家里的尿垫或固定的户外位置排泄。",
    },
    iOrNOrFOrP_i18n: {
      ko: "상황과 분위기에 따라 새로운 장소에서도 배변을 시도하는 편이다.",
      en: "Depending on the situation, they may also try using new spots to go potty.",
      ja: "状況や雰囲気によっては、新しい場所でも排泄を試すことがある。",
      zh: "也会根据当时的情况，在新的位置尝试排泄。",
    },
  },
  {
    id: 26,
    dimension: "JP",
    eOrSOrTOrJ:
      "항상 자던 자리, 자신의 방석에서 자는 것을 고집한다.",
    iOrNOrFOrP:
      "그날그날 기분과 온대에 따라 현관, 소파, 침대 등 자는 곳이 바뀐다.",
    eOrSOrTOrJ_i18n: {
      ko: "항상 자던 자리, 자신의 방석에서 자는 것을 고집한다.",
      en: "They insist on sleeping in their usual spot or on their own bed.",
      ja: "いつも決まった場所や自分のベッドで寝ることにこだわる。",
      zh: "坚持睡在自己固定的位置或专属垫子上。",
    },
    iOrNOrFOrP_i18n: {
      ko: "그날그날 기분과 온도에 따라 현관, 소파, 침대 등 자는 곳이 바뀐다.",
      en: "Where they sleep changes with their mood and the temperature—hallway, sofa, bed, etc.",
      ja: "その日の気分や温度によって、玄関・ソファ・ベッドなど寝る場所が変わる。",
      zh: "会根据当天的心情和温度，玄关、沙发、床到处换着地方睡。",
    },
  },
  {
    id: 27,
    dimension: "JP",
    eOrSOrTOrJ:
      "산책 시 늘 다니던 익숙한 코스로 가는 것을 편안해한다.",
    iOrNOrFOrP:
      "가보지 않은 새로운 길로 빠지는 것을 좋아하고 호기심을 보인다.",
    eOrSOrTOrJ_i18n: {
      ko: "산책 시 늘 다니던 익숙한 코스로 가는 것을 편안해한다.",
      en: "They feel most comfortable walking their usual familiar routes.",
      ja: "散歩では、いつもの慣れたコースを歩くのが一番落ち着く。",
      zh: "散步时走熟悉的路线会让它最安心。",
    },
    iOrNOrFOrP_i18n: {
      ko: "가보지 않은 새로운 길로 빠지는 것을 좋아하고 호기심을 보인다.",
      en: "They like exploring new paths they’ve never taken before and show curiosity.",
      ja: "まだ行ったことのない道にそれて探検するのが好きで、好奇心を見せる。",
      zh: "很喜欢走没去过的新路，对新地方充满好奇。",
    },
  },
  {
    id: 28,
    dimension: "JP",
    eOrSOrTOrJ:
      "한번 학습된 규칙(앉아, 기다려 등)은 웬만해선 어기지 않는다.",
    iOrNOrFOrP:
      "기분에 따라 잘하던 훈련도 안 하거나 꾀를 부릴 때가 있다.",
    eOrSOrTOrJ_i18n: {
      ko: "한번 학습된 규칙(앉아, 기다려 등)은 웬만해선 어기지 않는다.",
      en: "Once they learn a rule (sit, stay, etc.), they rarely break it.",
      ja: "一度覚えたルール（おすわり・待て など）は、めったに破らない。",
      zh: "一旦学会了规则（坐下、等待等），几乎不会轻易违背。",
    },
    iOrNOrFOrP_i18n: {
      ko: "기분에 따라 잘하던 훈련도 안 하거나 꾀를 부릴 때가 있다.",
      en: "Depending on their mood, they sometimes skip or play around with commands they usually do well.",
      ja: "気分によっては、普段できるはずのトレーニングもやらなかったり、ちゃかしたりすることがある。",
      zh: "有时看心情，即使平时做得很好的口令也会装作听不见或偷懒。",
    },
  },
  {
   id: 29,
    dimension: "JP",
    eOrSOrTOrJ:
      "보호자의 외출 준비 루틴(옷 입기 등)을 보면 미리 자기 자리로 간다.",
    iOrNOrFOrP:
      "보호자가 외출 준비를 하면 같이 나가자고 보채거나 현관을 막는다.",
    eOrSOrTOrJ_i18n: {
      ko: "보호자의 외출 준비 루틴(옷 입기 등)을 보면 미리 자기 자리로 간다.",
      en: "When sensing the guardian’s outing routine, they quietly go to their usual spot.",
      ja: "飼い主の外出準備（服を着るなど）を見ると、先に自分の場所へ戻る。",
      zh: "看到主人准备出门（穿外套等）时，会提前回到自己的位置。",
    },
    iOrNOrFOrP_i18n: {
      ko: "보호자가 외출 준비를 하면 같이 나가자고 보채거나 현관을 막는다.",
      en: "When the guardian prepares to go out, they beg to go along or block the doorway.",
      ja: "飼い主が外出準備をすると、一緒に行こうとせがんだり玄関をふさぐ。",
      zh: "当主人准备出门时，会央求一起出门或干脆挡在玄关口。",
    },
  },
  {
    id: 30,
    dimension: "JP",
    eOrSOrTOrJ:
      "깔끔한 성격이라 몸에 무언가 묻거나 젖는 것을 싫어한다.",
    iOrNOrFOrP:
      "진흙탕이나 물웅덩이에도 거침없이 들어가 놀 만큼 털털하다.",
    eOrSOrTOrJ_i18n: {
      ko: "깔끔한 성격이라 몸에 무언가 묻거나 젖는 것을 싫어한다.",
      en: "They dislike getting dirty or wet because they prefer staying neat.",
      ja: "きれい好きで、体が汚れたり濡れたりするのを嫌がる。",
      zh: "性格爱干净，不喜欢弄脏或弄湿自己。",
    },
    iOrNOrFOrP_i18n: {
      ko: "진흙탕이나 물웅덩이에도 거침없이 들어가 놀 만큼 털털하다.",
      en: "They don’t mind getting muddy and jump into puddles without hesitation.",
      ja: "泥んこになったり水たまりに飛び込んだりしても平気なタイプだ。",
      zh: "完全不介意变脏，甚至会毫不犹豫跳进泥巴或水坑里玩。",
    },
  },
];
// 위 코드에서 id:29, id:30의 i18n이 잘려 있으면 알려줘.  
// 메시지 길이 제한 때문에 마지막 2문항이 혹시 잘렸다면,  
// "29,30번도 마저 보내줘"라고 하면 이어서 완전본을 보내줄게.
