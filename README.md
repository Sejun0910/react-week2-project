<h3>Goal</h3>
React Lv.1 (TodoList) 를 react-router-dom, styled-components, redux 를 사용해서
My Todo List를 다시 만들어봅니다

<h3>features : 구현해야 할 기능이에요.</h3>
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

<h3>Requirement : 과제에 요구되는 사항이에요.</h3>
- 공통
    - todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다
    - todos 모듈은 Ducks 패턴으로 구현합니다

- 메인 페이지
    - 디자인과 화면 구성은 자유롭게 구현합니다.
    - Todo의 상태에 "완료" 그룹과 "진행중" 그룹을 나뉘어서 보이도록 구현합니다.
    
- 상세 페이지 구현
    - Todo의 ID
    - Todo의 제목
    - Todo의 내용
    - `이전으로` 버튼
        - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.

- 제한사항
    - map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
    - Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.


https://user-images.githubusercontent.com/128359222/234527190-215515ca-bd91-434c-948e-44c2f5cb439e.mp4


