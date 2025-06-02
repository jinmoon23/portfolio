export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '삼성청년SW/AI아카데미 프로젝트 우수상',
    issuer: '삼성전자',
    date: '2025.02',
    description: '공통 프로젝트 우수상',
  },
  {
    title: '삼성청년SW/AI아카데미 프로젝트 우수상',
    issuer: '삼성전자',
    date: '2025.04',
    description: '특화 프로젝트 우수상',
  },
  // 추가적인 자격증이나 수상내역을 여기에 추가할 수 있습니다
];
