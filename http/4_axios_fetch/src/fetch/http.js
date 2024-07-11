/**
 * fetch
 *
 * 1. fetch가 반환하는 프로미스는기본적으로 HTTP 에러가 발생해도 reject하지 않고 ok상태를 false로 설정한 Response 객체를 resolve한다,
 * 단 오프라인이나 네트워크 장애, cors는 reject한다.
 */
