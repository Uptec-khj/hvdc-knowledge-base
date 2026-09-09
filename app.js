const documents = [
  { type: "question", label: "RESEARCH QUESTION", title: "RQ-001 다중 벤더 HVDC 상호운용성 검증", summary: "인터페이스·모델 교환과 검증 방법을 주축으로 시작한 파일럿 질문", status: "active", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/20_Questions/RQ-001%20%EB%8B%A4%EC%A4%91%20%EB%B2%A4%EB%8D%94%20HVDC%20%EC%83%81%ED%98%B8%EC%9A%B4%EC%84%B1%20%EA%B2%80%EC%A6%9D.md" },
  { type: "literature", label: "SCREENED REPORT", title: "InterOPERA D1.1 모델·SIL·C&P 큐비클 요구사항", summary: "벤더 모델의 형식·성능·신호·접근성과 지식재산 경계를 다루는 공식 보고서", status: "screened", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/30_Literature/P-2026-001%20InterOPERA%20D1.1%20%EB%AA%A8%EB%8D%B8%EA%B3%BC%20C%26P%20%ED%81%90%EB%B9%84%ED%81%B4%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md" },
  { type: "literature", label: "SCREENED REPORT", title: "InterOPERA D1.2 오프라인·실시간 플랫폼 요구사항", summary: "LAB-OFF·LAB-RT·LAB-COM과 EMT 도구의 최소 플랫폼 요구사항", status: "screened", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/30_Literature/P-2026-002%20InterOPERA%20D1.2%20%EC%98%A4%ED%94%84%EB%9D%BC%EC%9D%B8%C2%B7%EC%8B%A4%EC%8B%9C%EA%B0%84%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md" },
  { type: "literature", label: "SCREENED REPORT", title: "InterOPERA D1.3 다중 벤더 EMT 상호작용 연구 절차", summary: "모델 유형·검증·공유부터 프로젝트 단계별 상호작용 연구 패키지까지 제안", status: "screened", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/30_Literature/P-2026-003%20InterOPERA%20D1.3%20%EB%8B%A4%EC%A4%91%20%EB%B2%A4%EB%8D%94%20EMT%20%EC%83%81%ED%98%B8%EC%9E%91%EC%9A%A9%20%EC%97%B0%EA%B5%AC%20%EC%A0%88%EC%B0%A8.md" },
  { type: "literature", label: "SCREENED REPORT", title: "InterOPERA D2.1 HVDC 시스템·서브시스템 기능 요구사항", summary: "DC 접속점에서 검증 가능한 기술중립적 기능 요구사항을 제시하는 공식 보고서", status: "screened", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/30_Literature/P-2026-004%20InterOPERA%20D2.1%20HVDC%20%EC%8B%9C%EC%8A%A4%ED%85%9C%C2%B7%EC%84%9C%EB%B8%8C%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B8%B0%EB%8A%A5%20%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD.md" },
  { type: "synthesis", label: "SYNTHESIS", title: "SYN-001 상호운용성 문헌 비교 작업판", summary: "시스템·인터페이스·검증 환경·판정 지표의 공통 비교표", status: "draft", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/60_Synthesis/SYN-001%20%EC%83%81%ED%98%B8%EC%9A%B4%EC%9A%A9%EC%84%B1%20%EB%AC%B8%ED%97%8C%20%EB%B9%84%EA%B5%90%20%EC%9E%91%EC%97%85%ED%8C%90.md" },
  { type: "guide", label: "ROADMAP", title: "12주 구축 로드맵", summary: "주 4~6시간 기준 문헌 24건, 정독 12편, 근거 24개의 제안 목표", status: "ready", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/01_Design/12%EC%A3%BC%20%EA%B5%AC%EC%B6%95%20%EB%A1%9C%EB%93%9C%EB%A7%B5.md" },
  { type: "guide", label: "METHOD", title: "문헌 탐색과 검토 절차", summary: "중복 제거, 포함·제외·보류, 정독, 근거 추출과 비교 가능성 판정", status: "ready", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/01_Design/%EB%AC%B8%ED%97%8C%20%ED%83%90%EC%83%89%EA%B3%BC%20%EA%B2%80%ED%86%A0%20%EC%A0%88%EC%B0%A8.md" },
  { type: "guide", label: "PUBLICATION", title: "GitHub 공개 프로젝트 계획", summary: "공개 범위, 라이선스, 릴리스 단계와 기여 운영", status: "ready", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/01_Design/GitHub%20%EA%B3%B5%EA%B0%9C%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B3%84%ED%9A%8D.md" },
  { type: "operations", label: "SPRINT", title: "1-2주차 실행 계획", summary: "범위와 검색 프로토콜 고정에서 첫 추적 가능한 연구 묶음까지", status: "open", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/80_Operations/1-2%EC%A3%BC%EC%B0%A8%20%EC%8B%A4%ED%96%89%20%EA%B3%84%ED%9A%8D.md" },
  { type: "operations", label: "BACKLOG", title: "v0.1 실행 백로그", summary: "P0 차단, P1 핵심, P2 개선으로 나눈 우선순위 작업", status: "open", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/80_Operations/v0.1%20%EC%8B%A4%ED%96%89%20%EB%B0%B1%EB%A1%9C%EA%B7%B8.md" },
  { type: "operations", label: "LOG", title: "연구 운영 기록", summary: "범위·목표·일정 변경과 실제 성과를 기록하는 공개 운영 일지", status: "open", url: "https://github.com/Uptec-khj/hvdc-knowledge-base/blob/main/80_Operations/%EC%97%B0%EA%B5%AC%20%EC%9A%B4%EC%98%81%20%EA%B8%B0%EB%A1%9D.md" }
];

const list = document.querySelector("#document-list");
const empty = document.querySelector("#empty");
const search = document.querySelector("#search");
const buttons = [...document.querySelectorAll("[data-filter]")];
let filter = "all";

function render() {
  const query = search.value.trim().toLocaleLowerCase("ko");
  const shown = documents.filter((doc) => {
    const matchesType = filter === "all" || doc.type === filter;
    const haystack = `${doc.label} ${doc.title} ${doc.summary} ${doc.status}`.toLocaleLowerCase("ko");
    return matchesType && haystack.includes(query);
  });
  list.replaceChildren(...shown.map((doc) => {
    const link = document.createElement("a");
    link.className = "document";
    link.href = doc.url;
    link.innerHTML = `<span class="doc-type">${doc.label}</span><span class="doc-title">${doc.title}<small class="doc-summary">${doc.summary}</small></span><span class="doc-status">${doc.status}</span>`;
    return link;
  }));
  empty.hidden = shown.length > 0;
}

buttons.forEach((button) => button.addEventListener("click", () => {
  filter = button.dataset.filter;
  buttons.forEach((item) => item.classList.toggle("active", item === button));
  render();
}));
search.addEventListener("input", render);
document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== search) {
    event.preventDefault();
    search.focus();
  }
});
render();
