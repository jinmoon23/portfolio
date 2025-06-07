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
  {
    title: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2025.05',
    description: '정보처리기사 필기 합격',
  },
  {
    title: '네트워크관리사',
    issuer: '한국정보통신자격협회',
    date: '2024.12',
    description: '네트워크관리사 필기 합격',
  },
  // 추가적인 자격증이나 수상내역을 여기에 추가할 수 있습니다
];
