---
type: paper
status: screened
source_type: report
authors: ["InterOPERA Consortium"]
year: 2025
doi: ""
url: "https://interopera.eu/wp-content/uploads/files/deliverables/20250417-D2.1-Functional-requirements-for-HVDC-grid-systems-and-subsystems.pdf"
access: full_text
review_scope: "공식 발행 페이지의 제목·발행월·요약과 PDF 공개 여부 확인; PDF 본문은 이번 선별에서 직접 검토하지 못함"
verification_methods: []
last_verified: 2026-09-09
created: 2026-09-09
updated: 2026-09-09
tags: [hvdc, interoperability, requirements]
research_questions: ["[[20_Questions/RQ-001 다중 벤더 HVDC 상호운용성 검증]]"]
topics: ["[[50_Topics/04 모델링과 검증]]", "[[50_Topics/05 다단자와 상호운용성]]"]
---

# P-2026-004 InterOPERA D2.1 HVDC 시스템·서브시스템 기능 요구사항

> [!warning] 선별 노트
> 이번 확인 범위는 공식 발행 페이지 요약까지다. 공개 PDF가 있으나 본문을 직접 검토하지 않았으므로 요구사항이나 검증 결과를 근거로 인용하지 않는다.

## 서지

- 원제: *Functional requirements for HVDC grid systems and subsystems*
- 결과물: InterOPERA Deliverable D2.1, second version, April 2025, Public
- 공식 발행 페이지: https://interopera.eu/publications/
- 공식 PDF: https://interopera.eu/wp-content/uploads/files/deliverables/20250417-D2.1-Functional-requirements-for-HVDC-grid-systems-and-subsystems.pdf
- 확인 범위: 공식 발행 목록의 제목·발행월·요약, PDF URL

## 선별 판정

- 결정: `screened` — RQ-001 포함 후보
- 이유: 공식 요약상 서로 다른 기술 해법이 공존하도록 DC 접속점에서 검증 가능한 서브시스템 기능 요구를 기술중립적으로 정의하며, DC-FRT·DC 고장 분리·동특성·안정도 요구를 다룬다.
- 제한: 위 내용은 발행 페이지 요약에 근거한 선별 이유이며, 상세 요구·시뮬레이션 조건·결과는 원문 정독 전까지 미확인이다.

## RQ-001에서 추출할 항목

1. HVDC 시스템과 서브시스템의 기능 분할 및 DC 접속점 정의
2. 제어·보호 책임 경계와 검증 가능한 요구사항 표현 방식
3. DC-FRT, DC fault separation, 동적·안정도 성능의 시험 조건과 판정 기준
4. 기능 요구가 InterOPERA demonstrator simulation으로 평가된 범위와 전이 한계

## 다음 행동

- [ ] PDF를 별도 접근 환경에서 열어 표지·버전·목차와 관련 절을 확인한다.
- [ ] D1.3의 상호작용 연구 절차와 D2.1의 서브시스템 단독 요구를 연결한다.
- [ ] 요구사항별 검증 방법·시나리오·판정 위치를 확인한 뒤 비교표에 입력한다.

연결: [[30_Literature/문헌 등록부]] · [[60_Synthesis/SYN-001 상호운용성 문헌 비교 작업판]]
