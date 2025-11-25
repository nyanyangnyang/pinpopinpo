import type { UniversityData } from '../types';

// 임시 데이터 - 실제 데이터는 JSON 파일에서 가져와야 합니다
export function getUniversityData(): UniversityData {
  return {
    metadata: {
      project_name: "대학 정시 합격 예측 시스템",
      total_universities: 2,
      total_departments: 24,
      data_years: [2022, 2023, 2024],
      base_year: 2024,
      last_updated: "2024-11-22",
      description: "주요 대학의 2024학년도 정시 환산점수 공식 및 3개년 합격선 데이터"
    },
    universities: [
      {
        university_id: "yonsei",
        name: "연세대학교",
        region: "서울",
        category: "최상위",
        departments: [
          {
            dept_id: "yonsei_경영학_0",
            name: "경영학과",
            track: "humanities",
            group: "A",
            quota: 60,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 688, mean: 694.5, std: 4.5, n: 60, competition_ratio: 5.2 },
              { year: 2023, min: 683.5, mean: 690.0, std: 4.8, n: 58, competition_ratio: 5.5 },
              { year: 2022, min: 685.8, mean: 692.3, std: 4.6, n: 59, competition_ratio: 5.3 }
            ]
          },
          {
            dept_id: "yonsei_경제학_1",
            name: "경제학과",
            track: "humanities",
            group: "A",
            quota: 70,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 685, mean: 691.5, std: 4.8, n: 70 },
              { year: 2023, min: 680.5, mean: 687.0, std: 5.1, n: 68 },
              { year: 2022, min: 682.8, mean: 689.3, std: 4.9, n: 69 }
            ]
          },
          {
            dept_id: "yonsei_국어국_2",
            name: "국어국문학과",
            track: "humanities",
            group: "B",
            quota: 80,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 680, mean: 686.5, std: 5.1, n: 80 },
              { year: 2023, min: 675.5, mean: 682.0, std: 5.4, n: 78 },
              { year: 2022, min: 677.8, mean: 684.3, std: 5.2, n: 79 }
            ]
          },
          {
            dept_id: "yonsei_영어영_3",
            name: "영어영문학과",
            track: "humanities",
            group: "B",
            quota: 60,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 682, mean: 688.5, std: 4.5, n: 60 },
              { year: 2023, min: 677.5, mean: 684.0, std: 4.8, n: 58 },
              { year: 2022, min: 679.8, mean: 686.3, std: 4.6, n: 59 }
            ]
          },
          {
            dept_id: "yonsei_심리학_4",
            name: "심리학과",
            track: "humanities",
            group: "A",
            quota: 70,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 686, mean: 692.5, std: 4.8, n: 70 },
              { year: 2023, min: 681.5, mean: 688.0, std: 5.1, n: 68 },
              { year: 2022, min: 683.8, mean: 690.3, std: 4.9, n: 69 }
            ]
          },
          {
            dept_id: "yonsei_컴퓨터_5",
            name: "컴퓨터과학과",
            track: "science",
            group: "A",
            quota: 55,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 690, mean: 696.8, std: 4.7, n: 55 },
              { year: 2023, min: 685.2, mean: 692.0, std: 5.0, n: 53 },
              { year: 2022, min: 687.5, mean: 694.3, std: 4.8, n: 54 }
            ]
          },
          {
            dept_id: "yonsei_전기전_6",
            name: "전기전자공학부",
            track: "science",
            group: "A",
            quota: 65,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 686, mean: 692.8, std: 5.0, n: 65 },
              { year: 2023, min: 681.2, mean: 688.0, std: 5.3, n: 63 },
              { year: 2022, min: 683.5, mean: 690.3, std: 5.1, n: 64 }
            ]
          },
          {
            dept_id: "yonsei_기계공_7",
            name: "기계공학부",
            track: "science",
            group: "A",
            quota: 75,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 684, mean: 690.8, std: 5.3, n: 75 },
              { year: 2023, min: 679.2, mean: 686.0, std: 5.6, n: 73 },
              { year: 2022, min: 681.5, mean: 688.3, std: 5.4, n: 74 }
            ]
          },
          {
            dept_id: "yonsei_화학공_8",
            name: "화학공학과",
            track: "science",
            group: "B",
            quota: 85,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 682, mean: 688.8, std: 4.7, n: 85 },
              { year: 2023, min: 677.2, mean: 684.0, std: 5.0, n: 83 },
              { year: 2022, min: 679.5, mean: 686.3, std: 4.8, n: 84 }
            ]
          },
          {
            dept_id: "yonsei_건축학_9",
            name: "건축학부",
            track: "science",
            group: "B",
            quota: 55,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 683, mean: 689.8, std: 5.0, n: 55 },
              { year: 2023, min: 678.2, mean: 685.0, std: 5.3, n: 53 },
              { year: 2022, min: 680.5, mean: 687.3, std: 5.1, n: 54 }
            ]
          },
          {
            dept_id: "yonsei_신소재_10",
            name: "신소재공학부",
            track: "science",
            group: "B",
            quota: 65,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 681, mean: 687.8, std: 5.3, n: 65 },
              { year: 2023, min: 676.2, mean: 683.0, std: 5.6, n: 63 },
              { year: 2022, min: 678.5, mean: 685.3, std: 5.4, n: 64 }
            ]
          },
          {
            dept_id: "yonsei_생명과_11",
            name: "생명과학과",
            track: "science",
            group: "A",
            quota: 75,
            formula: {
              base_total: 600,
              final_total: 860,
              weights: { korean: 200, math: 300, english: 100, inquiry: 200 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "converted" },
              english_conversion: { "1": 100, "2": 95, "3": 87.5, "4": 75, "5": 60, "6": 40, "7": 25, "8": 12.5, "9": 5 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 9, "6": 8, "7": 7, "8": 6, "9": 5 }
            },
            cutoffs: [
              { year: 2024, min: 685, mean: 691.8, std: 4.7, n: 75 },
              { year: 2023, min: 680.2, mean: 687.0, std: 5.0, n: 73 },
              { year: 2022, min: 682.5, mean: 689.3, std: 4.8, n: 74 }
            ]
          }
        ]
      },
      {
        university_id: "korea",
        name: "고려대학교",
        region: "서울",
        category: "최상위",
        departments: [
          {
            dept_id: "korea_경영학_0",
            name: "경영학과",
            track: "humanities",
            group: "A",
            quota: 60,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 652, mean: 658.5, std: 4.5, n: 60 },
              { year: 2023, min: 647.5, mean: 654.0, std: 4.8, n: 58 },
              { year: 2022, min: 649.8, mean: 656.3, std: 4.6, n: 59 }
            ]
          },
          {
            dept_id: "korea_경제학_1",
            name: "경제학과",
            track: "humanities",
            group: "A",
            quota: 70,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 649, mean: 655.5, std: 4.8, n: 70 },
              { year: 2023, min: 644.5, mean: 651.0, std: 5.1, n: 68 },
              { year: 2022, min: 646.8, mean: 653.3, std: 4.9, n: 69 }
            ]
          },
          {
            dept_id: "korea_국어국_2",
            name: "국어국문학과",
            track: "humanities",
            group: "B",
            quota: 80,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 644, mean: 650.5, std: 5.1, n: 80 },
              { year: 2023, min: 639.5, mean: 646.0, std: 5.4, n: 78 },
              { year: 2022, min: 641.8, mean: 648.3, std: 5.2, n: 79 }
            ]
          },
          {
            dept_id: "korea_영어영_3",
            name: "영어영문학과",
            track: "humanities",
            group: "B",
            quota: 60,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 646, mean: 652.5, std: 4.5, n: 60 },
              { year: 2023, min: 641.5, mean: 648.0, std: 4.8, n: 58 },
              { year: 2022, min: 643.8, mean: 650.3, std: 4.6, n: 59 }
            ]
          },
          {
            dept_id: "korea_심리학_4",
            name: "심리학과",
            track: "humanities",
            group: "A",
            quota: 70,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 650, mean: 656.5, std: 4.8, n: 70 },
              { year: 2023, min: 645.5, mean: 652.0, std: 5.1, n: 68 },
              { year: 2022, min: 647.8, mean: 654.3, std: 4.9, n: 69 }
            ]
          },
          {
            dept_id: "korea_컴퓨터_5",
            name: "컴퓨터과학과",
            track: "science",
            group: "A",
            quota: 55,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 654, mean: 660.8, std: 4.7, n: 55 },
              { year: 2023, min: 649.2, mean: 656.0, std: 5.0, n: 53 },
              { year: 2022, min: 651.5, mean: 658.3, std: 4.8, n: 54 }
            ]
          },
          {
            dept_id: "korea_전기전_6",
            name: "전기전자공학부",
            track: "science",
            group: "A",
            quota: 65,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 650, mean: 656.8, std: 5.0, n: 65 },
              { year: 2023, min: 645.2, mean: 652.0, std: 5.3, n: 63 },
              { year: 2022, min: 647.5, mean: 654.3, std: 5.1, n: 64 }
            ]
          },
          {
            dept_id: "korea_기계공_7",
            name: "기계공학부",
            track: "science",
            group: "A",
            quota: 75,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 648, mean: 654.8, std: 5.3, n: 75 },
              { year: 2023, min: 643.2, mean: 650.0, std: 5.6, n: 73 },
              { year: 2022, min: 645.5, mean: 652.3, std: 5.4, n: 74 }
            ]
          },
          {
            dept_id: "korea_화학공_8",
            name: "화학공학과",
            track: "science",
            group: "B",
            quota: 85,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 646, mean: 652.8, std: 4.7, n: 85 },
              { year: 2023, min: 641.2, mean: 648.0, std: 5.0, n: 83 },
              { year: 2022, min: 643.5, mean: 650.3, std: 4.8, n: 84 }
            ]
          },
          {
            dept_id: "korea_건축학_9",
            name: "건축학부",
            track: "science",
            group: "B",
            quota: 55,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 647, mean: 653.8, std: 5.0, n: 55 },
              { year: 2023, min: 642.2, mean: 649.0, std: 5.3, n: 53 },
              { year: 2022, min: 644.5, mean: 651.3, std: 5.1, n: 54 }
            ]
          },
          {
            dept_id: "korea_신소재_10",
            name: "신소재공학부",
            track: "science",
            group: "B",
            quota: 65,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 645, mean: 651.8, std: 5.3, n: 65 },
              { year: 2023, min: 640.2, mean: 647.0, std: 5.6, n: 63 },
              { year: 2022, min: 642.5, mean: 649.3, std: 5.4, n: 64 }
            ]
          },
          {
            dept_id: "korea_생명과_11",
            name: "생명과학과",
            track: "science",
            group: "A",
            quota: 75,
            formula: {
              base_total: 560,
              final_total: 1010,
              weights: { korean: 200, math: 200, inquiry: 160 },
              score_types: { korean: "standard", math: "standard", inquiry: "converted", english: "penalty" },
              english_penalty: { "1": 0, "2": -0.5, "3": -2, "4": -4, "5": -6, "6": -8, "7": -10, "8": -12, "9": -14 },
              korean_history_bonus: { "1": 10, "2": 10, "3": 10, "4": 10, "5": 8, "6": 6, "7": 4, "8": 2, "9": 0 }
            },
            cutoffs: [
              { year: 2024, min: 649, mean: 655.8, std: 4.7, n: 75 },
              { year: 2023, min: 644.2, mean: 651.0, std: 5.0, n: 73 },
              { year: 2022, min: 646.5, mean: 653.3, std: 4.8, n: 74 }
            ]
          }
        ]
      }
    ]
  };
}