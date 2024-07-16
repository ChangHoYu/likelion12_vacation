/**
 * 상태 관리
 * (1) local state
 *  - 말 그대로 하나의 컴포넌트에서 관리되는 상태
 *  - useState, useReducer로 관리되어짐
 *
 * (2) cross-component state
 *  - 여러 컴포넌트에 영향을 주는 상태
 *  - 주로 props로 넘겨주며 프롭스 체이닝, 드릴링문제가 발생 할 수 있음.
 *
 * (3) App-wide(global) state
 *  - (거의) 모든 앱에 영향을 주는 상태
 *  - 권한인증(로그인), 테마(라이트,다크) 등
 *  - 리액트에서 자체 제공하는 context api
 *  - 라이브러리 (redux, recoil, zustand, Mobx, Jotai 등등 많다 많아)
 */

/**
 * Context api
 *  - 기본적으로 리액트에서 제공해주니 라이브러리 설치x
 *  - 사용법도 금방 익힐 수 있음.
 *  - 단 createContext lets you create a context that components can provide or read.(리액트 공식문서)
 *  - 읽어보면 제공 or 읽을 수 있다라고 나와있음 즉 변경 목적이 아닌 pass 목적이 맞다고 보는게 맞는듯함.
 *
 * Redux(RTK)
 *  - A JS library for predictable and maintainable global state management(공식문서)
 *  - 전역상태를 예측가능하고 유지가능하기 위한 JS라이브러리임
 *  - 리덕스는 Flux 패턴에 영감을 받아 만들어짐.
 *  - Flux는 쉽게 말하면 단방향 흐름을 유지하는 아키텍처임 (페북형님들이 발표하심, 이 양반들은 안 하는게 뭐야 대체)
 *  - 기존 mvc패턴의 복잡성이 증가하는 문제를 해결하기 위해 태어남
 *  - 사용자 입력 기반 action을 만들고 dispatcher에 전달 store 데이터 변경 view에 반영
 *  Action -> Dispatcher -> store -> view
 */
