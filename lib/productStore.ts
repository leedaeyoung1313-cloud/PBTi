// lib/productStore.ts
// 상품 데이터 접근 계층(Data Access Layer).
// 지금은 로컬 JSON 파일을 읽고 쓰지만, 아래 3개 함수의 시그니처만 유지하면
// 내부 구현을 Supabase 등 실제 DB로 교체해도 API 라우트/페이지 쪽 코드는 그대로 쓸 수 있다.
//
// ⚠️ 주의: 로컬 JSON 파일 쓰기는 Netlify 같은 서버리스 배포 환경에서는
// 요청마다 새 컨테이너가 뜨거나 파일시스템이 읽기 전용이라 "저장은 되는데 배포 후 사라짐"
// 현상이 생길 수 있다. 실제 서비스에 반영하려면 Supabase 등 영속 저장소로 교체가 필요하다.

import fs from "fs";
import path from "path";

export type Species = "cat" | "dog";

export interface AdminProduct {
  id: string;
  title: string;
  url: string;
  imageUrl: string;
}

export type ProductOverrides = Record<Species, Record<string, AdminProduct[]>>;

const DATA_PATH = path.join(process.cwd(), "data", "productOverrides.json");

function readRaw(): ProductOverrides {
  try {
    const text = fs.readFileSync(DATA_PATH, "utf-8");
    const parsed = JSON.parse(text);
    return {
      cat: parsed.cat ?? {},
      dog: parsed.dog ?? {},
    };
  } catch {
    return { cat: {}, dog: {} };
  }
}

function writeRaw(data: ProductOverrides) {
  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), "utf-8");
}

export const productStore = {
  async getAll(): Promise<ProductOverrides> {
    return readRaw();
  },

  async getForType(species: Species, code: string): Promise<AdminProduct[]> {
    const all = readRaw();
    return all[species]?.[code] ?? [];
  },

  async setForType(
    species: Species,
    code: string,
    products: AdminProduct[]
  ): Promise<AdminProduct[]> {
    const all = readRaw();
    if (!all[species]) all[species] = {};
    all[species][code] = products;
    writeRaw(all);
    return products;
  },
};
