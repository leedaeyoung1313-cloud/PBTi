// app/pbt/dog/page.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { dogQuestions } from "../../../data/dogQuestions";
import { TestProgress } from "../../components/TestProgress";
import { HybridCard } from "../../components/HybridCard";
import { useLanguage } from "../../../components/language-provider";

type Tally = {
  E: number; I: number; S: number; N: number; T: number; F: number; J: number; P: number;
};
const initialTally: Tally = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

const tDog = {
  ko: {
    badge: "🐶 강아지 PBTi · 50문항 테스트",
    title: "우리 집 강아지의 성향을 관찰해 보세요.",
    desc: "각 문항마다 우리 강아지와 더 가까운 쪽을 선택해 주세요. 왼쪽은 활동/감각/논리/계획, 오른쪽은 휴식/직관/감정/유연에 가깝습니다.",
    guide: "테스트 안내",
    g1: "총 50문항, 약 3~5분 정도 소요됩니다.",
    g2: "정답은 없으며, 평소에 더 자주 보이는 모습을 기준으로 선택해 주세요.",
    g3: "직관적으로 골라 주시면 더 정확합니다.",
    start: "테스트 시작하기",
    qPrefix: "문항",
    prompt: "우리 강아지는 아래 두 가지 중 어느 쪽에 더 가깝나요?",
    choiceA: "선택 A",
    choiceB: "선택 B",
    prev: "이전 질문으로 돌아가기",
  },
  en: {
    badge: "🐶 Dog PBTi · 50 Questions",
    title: "Observe your dog’s tendencies.",
    desc: "Choose the side that better describes your dog. Left tends to Activity/Sensing/Thinking/Judging; Right to Rest/Intuition/Feeling/Perceiving.",
    guide: "Test Guide",
    g1: "50 questions, takes about 3–5 minutes.",
    g2: "There are no right answers. Choose what you observe most often.",
    g3: "Pick intuitively rather than going back and forth for best results.",
    start: "Start the test",
    qPrefix: "Q",
    prompt: "Which side describes your dog better?",
    choiceA: "Choice A",
    choiceB: "Choice B",
    prev: "Go back to previous question",
  },
  ja: {
    badge: "🐶 ワンちゃん PBTi · 50問",
    title: "ワンちゃんの傾向を観察しましょう。",
    desc: "より近い方を選んでください。左は活動/感覚/思考/計画、右は休息/直観/感情/柔軟に近いです。",
    guide: "テスト案内",
    g1: "全50問、約3〜5分。",
    g2: "正解はありません。普段よく見られる様子を基準にしてください。",
    g3: "直感的に選ぶほど正確です。",
    start: "テストを始める",
    qPrefix: "問",
    prompt: "どちらがワンちゃんに近いですか？",
    choiceA: "選択 A",
    choiceB: "選択 B",
    prev: "前の質問に戻る",
  },
  zh: {
    badge: "🐶 狗狗 PBTi · 50题",
    title: "观察你家狗狗的性格倾向。",
    desc: "每题选择更贴近你家狗狗的一边。左侧偏向 活动/感觉/理性/计划；右侧偏向 休息/直觉/情感/灵活。",
    guide: "测试说明",
    g1: "共50题，约3–5分钟。",
    g2: "没有标准答案，请按平时更常见的样子选择。",
    g3: "凭直觉选择通常更准确。",
    start: "开始测试",
    qPrefix: "题",
    prompt: "哪一边更符合你家狗狗？",
    choiceA: "选项 A",
    choiceB: "选项 B",
    prev: "返回上一题",
  },
} as const;

type Choice = "left" | "right" | null;

export default function DogTestPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = tDog[lang];

  const total = dogQuestions.length;

  const [step, setStep] = useState(0); // 0: 안내, 1~total: 질문
  const [tally, setTally] = useState<Tally>(initialTally);
  const [answers, setAnswers] = useState<Choice[]>(() =>
    Array(total).fill(null)
  );

  const currentIndex = step - 1;
  const currentQuestion =
    step >= 1 && step <= total ? dogQuestions[currentIndex] : null;

  function applyDelta(
    base: Tally,
    dim: "EI" | "SN" | "TF" | "JP",
    choice: Exclude<Choice, null>,
    delta: 1 | -1
  ): Tally {
    const next = { ...base };
    switch (dim) {
      case "EI":
        choice === "left" ? (next.E += delta) : (next.I += delta);
        break;
      case "SN":
        choice === "left" ? (next.S += delta) : (next.N += delta);
        break;
      case "TF":
        choice === "left" ? (next.T += delta) : (next.F += delta);
        break;
      case "JP":
        choice === "left" ? (next.J += delta) : (next.P += delta);
        break;
    }
    return next;
  }

  function handlePrev() {
    if (step === 0) return;
    if (step === 1) {
      // 첫 번째 문항에서 이전 → 안내 화면으로
      setStep(0);
    } else {
      setStep(step - 1);
    }
  }

  function handleChoice(choice: Exclude<Choice, null>) {
    if (!currentQuestion) return;

    const qIndex = currentIndex;
    const prevChoice = answers[qIndex];

    // 선택 기록 업데이트
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = choice;
      return next;
    });

    // tally 계산 (이전 선택이 있으면 먼저 빼고, 새 선택 더함)
    setTally((prev) => {
      let next = { ...prev };
      if (prevChoice) {
        next = applyDelta(next, currentQuestion.dimension, prevChoice, -1);
      }
      next = applyDelta(next, currentQuestion.dimension, choice, +1);
      return next;
    });

    const isLast = step === total;

    if (isLast) {
      // 마지막 문항에서의 최종 타입 계산은
      // 현재 tally(이전 state) + (이전 선택 제거, 새 선택 추가)를 반영해서 계산
      let temp = { ...tally };
      if (prevChoice) {
        temp = applyDelta(temp, currentQuestion.dimension, prevChoice, -1);
      }
      temp = applyDelta(temp, currentQuestion.dimension, choice, +1);

      const code = computeTypeCodeFromTally(temp);
      router.push(`/pbt/dog/result?type=${code}`);
      return;
    }

    // 마지막 문항이 아니면 다음 문항으로
    setStep(step + 1);
  }

  const leftText =
    (currentQuestion as any)?.eOrSOrTOrJ_i18n?.[lang] ??
    currentQuestion?.eOrSOrTOrJ ??
    "";
  const rightText =
    (currentQuestion as any)?.iOrNOrFOrP_i18n?.[lang] ??
    currentQuestion?.iOrNOrFOrP ??
    "";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <HybridCard>
        <p className="text-xs font-medium text-orange-600 mb-1">
          {t.badge}
        </p>
        <p className="text-lg font-semibold text-neutral-900 mb-1">
          {t.title}
        </p>
        <p className="text-xs text-neutral-600">{t.desc}</p>
      </HybridCard>

      {step === 0 && (
        <div className="space-y-4">
          <HybridCard title={t.guide}>
            <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
              <li>{t.g1}</li>
              <li>{t.g2}</li>
              <li>{t.g3}</li>
            </ul>
          </HybridCard>
          <button
            onClick={() => setStep(1)}
            className="w-full rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-orange-600 transition"
          >
            {t.start}
          </button>
        </div>
      )}

      {step >= 1 && step <= total && currentQuestion && (
        <div className="space-y-4 sm:space-y-6">
          <TestProgress current={step} total={total} />

          {/* 이전 질문 버튼 (상단 좌측에 작게 배치) */}
          <div className="flex items-center justify-between text-[11px] text-neutral-500">
            <button
              type="button"
              onClick={handlePrev}
              className="inline-flex items-center gap-1 rounded-full border border-[#E5DDCF] bg-white/80 px-3 py-1 hover:bg-neutral-50 transition"
            >
              <span>←</span>
              <span>{t.prev}</span>
            </button>
          </div>

          <HybridCard title={`${t.qPrefix} ${step}`}>
            <p className="text-sm text-neutral-800">{t.prompt}</p>
          </HybridCard>

          <div className="grid gap-4 sm:grid-cols-2">
            <button
              onClick={() => handleChoice("left")}
              className="rounded-3xl border border-[#E5DDCF] bg-white/90 px-4 py-4 text-sm text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 transition flex flex-col gap-2"
            >
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide">
                {t.choiceA}
              </span>
              <span className="text-neutral-800 leading-relaxed">
                {leftText}
              </span>
            </button>
            <button
              onClick={() => handleChoice("right")}
              className="rounded-3xl border border-[#E5DDCF] bg-white/90 px-4 py-4 text-sm text-left shadow-sm hover:shadow-md hover:-translate-y-0.5 transition flex flex-col gap-2"
            >
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wide">
                {t.choiceB}
              </span>
              <span className="text-neutral-800 leading-relaxed">
                {rightText}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function computeTypeCodeFromTally(temp: Tally) {
  const first = temp.E >= temp.I ? "E" : "I";
  const second = temp.S >= temp.N ? "S" : "N";
  const third = temp.T >= temp.F ? "T" : "F";
  const fourth = temp.J >= temp.P ? "J" : "P";
  return `${first}${second}${third}${fourth}`;
}
