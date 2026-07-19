"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { catTypes, type CatCode } from "../../data/catTypes";
import { dogTypes, type DogCode } from "../../data/dogTypes";

type Species = "cat" | "dog";

interface AdminProduct {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

const CODES: (CatCode | DogCode)[] = [
  "ENTJ", "ENTP", "INTJ", "INTP",
  "ENFJ", "ENFP", "INFJ", "INFP",
  "ESTJ", "ESFJ", "ISTJ", "ISFJ",
  "ESTP", "ESFP", "ISTP", "ISFP",
];

function emptyProduct(): AdminProduct {
  return { id: crypto.randomUUID(), title: "", url: "", imageUrl: "" };
}

export default function AdminProductsPage() {
  const router = useRouter();
  const [species, setSpecies] = useState<Species>("dog");
  const [code, setCode] = useState<CatCode | DogCode>("ENTJ");
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");

  const nickname =
    species === "cat"
      ? catTypes[code as CatCode]?.nickname
      : dogTypes[code as DogCode]?.nickname;

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch("/api/admin/products");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      const list: AdminProduct[] = data?.[species]?.[code] ?? [];
      setProducts(list);
    } finally {
      setLoading(false);
    }
  }, [species, code, router]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  function updateField(id: string, field: keyof AdminProduct, value: string) {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  function addRow() {
    setProducts((prev) => [...prev, emptyProduct()]);
  }

  function removeRow(id: string) {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleSave() {
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/admin/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ species, code, products }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus(data.error ?? "저장에 실패했습니다.");
        return;
      }
      setStatus("저장되었습니다.");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[#F9F5EC] px-4 py-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-neutral-900">PBTi 상품 관리</h1>
            <p className="text-xs text-neutral-500 mt-1">
              유형별 추천 상품(상품명 / 쿠팡 파트너스 링크 / 이미지 URL)을 관리합니다.
              여기서 저장한 상품은 해당 유형의 결과 페이지에서 하드코딩된 기본 상품 대신 노출됩니다.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-neutral-500 hover:text-neutral-800 underline shrink-0"
          >
            로그아웃
          </button>
        </div>

        {/* 종 탭 */}
        <div className="inline-flex rounded-full border border-[#E5DDCF] bg-white/80 p-1 text-xs">
          {(["dog", "cat"] as Species[]).map((s) => (
            <button
              key={s}
              onClick={() => setSpecies(s)}
              className={`px-4 py-1 rounded-full transition ${
                species === s
                  ? "bg-orange-500 text-white font-semibold"
                  : "text-neutral-700"
              }`}
            >
              {s === "dog" ? "🐶 강아지" : "🐱 고양이"}
            </button>
          ))}
        </div>

        {/* 유형 그리드 */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {CODES.map((c) => (
            <button
              key={c}
              onClick={() => setCode(c)}
              className={`rounded-lg border px-2 py-2 text-[11px] font-semibold transition ${
                code === c
                  ? "border-orange-500 bg-orange-50 text-orange-600"
                  : "border-[#E5DDCF] bg-white/70 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 선택된 유형 상품 테이블/폼 */}
        <div className="rounded-2xl border border-[#E5DDCF] bg-white/90 p-4">
          <p className="text-sm font-semibold text-neutral-900 mb-4">
            {code} · {nickname}
          </p>

          {loading ? (
            <p className="text-xs text-neutral-500">불러오는 중...</p>
          ) : (
            <div className="space-y-3">
              {products.length === 0 && (
                <p className="text-xs text-neutral-400">
                  등록된 관리자 상품이 없습니다. 지금은 결과 페이지에 하드코딩된 기본
                  상품이 노출됩니다. 아래에서 추가해 보세요.
                </p>
              )}

              {products.map((p) => (
                <div
                  key={p.id}
                  className="grid gap-2 sm:grid-cols-[1fr_1fr_1fr_auto] items-start rounded-xl border border-[#E5DDCF] p-3"
                >
                  <div className="space-y-1">
                    <label className="text-[10px] text-neutral-500">상품명</label>
                    <input
                      value={p.title}
                      onChange={(e) => updateField(p.id, "title", e.target.value)}
                      placeholder="예) 지능형 캣토이"
                      className="w-full rounded-md border border-[#E5DDCF] px-2 py-1 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-neutral-500">
                      쿠팡 파트너스 링크
                    </label>
                    <input
                      value={p.url}
                      onChange={(e) => updateField(p.id, "url", e.target.value)}
                      placeholder="https://link.coupang.com/a/..."
                      className="w-full rounded-md border border-[#E5DDCF] px-2 py-1 text-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-neutral-500">이미지 URL</label>
                    <input
                      value={p.imageUrl}
                      onChange={(e) => updateField(p.id, "imageUrl", e.target.value)}
                      placeholder="https://.../image.jpg"
                      className="w-full rounded-md border border-[#E5DDCF] px-2 py-1 text-xs"
                    />
                  </div>
                  <button
                    onClick={() => removeRow(p.id)}
                    className="mt-4 sm:mt-5 text-[11px] text-red-500 hover:underline"
                  >
                    삭제
                  </button>
                </div>
              ))}

              <div className="flex items-center justify-between pt-2">
                <button onClick={addRow} className="text-xs text-orange-600 hover:underline">
                  + 상품 추가
                </button>
                <div className="flex items-center gap-3">
                  {status && (
                    <span className="text-[11px] text-neutral-500">{status}</span>
                  )}
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 transition disabled:opacity-50"
                  >
                    {saving ? "저장 중..." : "저장하기"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
