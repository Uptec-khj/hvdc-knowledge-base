---
type: paper
status: screened
source_type: report
authors: ["InterOPERA Task 1.2 Group"]
year: 2025
doi: ""
url: "https://interopera.eu/wp-content/uploads/files/deliverables/20250422-InterOPERA-D1-1.pdf"
access: full_text
review_scope: "공식 PDF의 표지, 저자·버전, 목차, Executive summary와 Context 일부를 선별 확인"
verification_methods: []
last_verified: 2026-09-09
created: 2026-09-09
updated: 2026-09-09
tags: [hvdc, interoperability, method/emt, method/sil, method/hil]
research_questions: ["[[20_Questions/RQ-001 다중 벤더 HVDC 상호운용성 검증]]"]
topics: ["[[50_Topics/04 모델링과 검증]]", "[[50_Topics/05 다단자와 상호운용성]]"]
---

# P-2026-001 InterOPERA D1.1 모델과 C&P 큐비클 요구사항

> [!warning] 선별 노트
> 정독 완료나 근거 검증을 뜻하지 않는다. 아래 내용은 지정한 확인 범위에서 후보 적합성을 판단한 기록이다.

## 서지

- 원제: *Requirements for AC/DC converter stations, DC switching stations, Power Park Modules and DC Grid controller offline models, SIL models and C&P cubicles*
- 결과물: InterOPERA Deliverable D1.1, March 2025, Final, Public
- 공식 PDF: https://interopera.eu/wp-content/uploads/files/deliverables/20250422-InterOPERA-D1-1.pdf
- 확인 범위: 표지·저자·버전·목차, Executive summary, Context 일부

## 선별 판정

- 결정: `screened` — RQ-001 포함 후보
- 이유: 오프라인 모델, SIL 모델, 제어·보호(C&P) 큐비클의 형식·성능·신호·접근성·유지관리 요구를 직접 다루며, 다중 벤더 상호작용 연구에 필요한 정보 교환 경계와 지식재산 보호 문제를 함께 제시한다.
- 중복 관계: D1.2는 플랫폼 요구, D1.3은 연구 절차, D2.1은 기능 요구이므로 별도 분석 단위로 유지한다.

## RQ-001에서 추출할 항목

1. 오프라인·SIL·C&P 큐비클별 필수 인터페이스와 문서화 요구
2. black-box 모델의 도구 독립성, 버전·업데이트·장기 사용 조건
3. 공개 가능한 신호·파라미터와 제조사 지식재산 경계
4. 모델·replica 전달 전 단독 검증 및 이후 상호작용 연구의 연결 조건

## 다음 행동

- [ ] 요구사항 번호 체계와 모델 유형별 표를 정독한다.
- [ ] 신호·파라미터·접근성·검증 요구를 RQ-001 비교 필드에 매핑한다.
- [ ] 인용할 문장은 페이지와 요구사항 번호를 대조한 뒤 근거 카드로 분리한다.

연결: [[30_Literature/문헌 등록부]] · [[60_Synthesis/SYN-001 상호운용성 문헌 비교 작업판]]
