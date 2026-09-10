---
type: evidence
status: checked
created: 2026-09-10
updated: 2026-09-10
last_verified: 2026-09-10
tags: [hvdc, interoperability, model-sharing]
research_questions: ["[[20_Questions/RQ-001 다중 벤더 HVDC 상호운용성 검증]]"]
topics: ["[[50_Topics/04 모델링과 검증]]", "[[50_Topics/05 다단자와 상호운용성]]"]
source_notes: ["[[30_Literature/P-2026-003 InterOPERA D1.3 다중 벤더 EMT 상호작용 연구 절차]]"]
---

# E-2026-002 모델 공유 계약은 사용 경계와 black-box 보호를 정의한다

- 핵심 주장: 다중 벤더 상호작용 연구의 모델 공유는 계약 또는 NDA에서 수신자·목적·범위·내용·형식·사용 조건을 정하고, vendor-specific 내부 구현은 부분 black-box로 보호할 수 있게 설계해야 한다.
- 근거 성격: 정보 교환과 지식재산 보호에 관한 InterOPERA D1.3의 권고다.
- 저자의 주장: 공유 모델의 사용 경계를 프로젝트 계약 문서에 명시하고, OEM에는 적어도 부분적으로 black-box 형식으로 제공할 선택지를 보장해야 한다. 역할·일정·이슈 해결 회의 절차도 함께 정의해야 한다.
- 관찰 결과: §3.3.1은 상호작용 연구에 필요한 입력·출력과 실행 가능성을 제공하면서 민감한 설계·제어 세부는 숨기는 모델 공유 방식을 설명한다.
- 내 해석: 상호운용성에 필요한 “공개”는 소스코드 전면 공개와 같지 않다. 통합자가 시험을 실행하고 결과를 해석할 최소 인터페이스와 책임 경계를 계약으로 고정하는 것이 핵심이다.
- 원문 노트: [[30_Literature/P-2026-003 InterOPERA D1.3 다중 벤더 EMT 상호작용 연구 절차]]
- 원문: https://interopera.eu/wp-content/uploads/files/deliverables/20250422-InterOPERA-D1-3-ready-for-the-consensus.pdf
- 원문 위치: PDF p.60 §3.3.1
- 적용 조건: vendor-specific EMT/SIL/HIL 모델을 프로젝트 관계자 또는 시스템 통합자에게 전달하는 MTMV HVDC 프로젝트
- 단위·기준: 정량 단위 없음. 필수 확인 항목은 수신자, 목적, 범위·내용·형식, 사용 조건, 역할과 일정이다.
- 반례·한계: 권고는 실제 계약 조항이나 공개 수준을 확정하지 않는다. 법률·보안·라이선스 조건과 후속 InterOPERA 계약 문서를 별도로 확인해야 한다.
- 확인일: 2026-09-10

사용처: [[60_Synthesis/SYN-001 상호운용성 문헌 비교 작업판]]
