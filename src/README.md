
- [JSX 란?](#jsx-란?)
- [JSX 문법](#jsx-문법)
  + [1. 반드시 부모요소 하나가 감싸는 형태](#1--------------------)
  + [2. 자바스크립트 표현식](#2-----------)
  + [3. if문 대신 삼항연산자 사용](#3-if-------------)
  + [4. React DOM 은 HTML Attr 이름대신 camelCase 명명을 사용한다](#4-react-dom---html-attr------camelcase---------)
  + [5. 주석사용 방법](#5--------)

---
# JSX 란?

- 자바스크립트 안에서 html 을 쉽게 작성하게 해줌
- 자바스크립트에 XML을 추가한 확장된 문법
- 브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환됨

# JSX 문법

### 1. 반드시 부모요소 하나가 감싸는 형태

- 이런 형태는 안됨

    ```jsx
    function App () {
    	return (
    		<div>Hello</div>
    		<div>Hi</div>
    	);
    }
    ```

- 정상 형태

    ```jsx
    <div>
    	<div>Hello</div>
    	<div>Hi</div>
    </div>
    
    <>
    	<div>Hello</div>
    	<div>Hi</div>
    </>
    
    <Fragment>
    	<div>Hello</div>
    	<div>Hi</div>
    </Fragment>
    ```


### 2. 자바스크립트 표현식

- JSX 내부에서 코드를 { } 로 감싸기.

    ```jsx
    function App () {
    	const name = 'Alikwon';
    	return (
    		<div>
    			<div>Hello</div>
    			<div>{ name }</div>
    		</div>
    	);
    }
    ```


### 3. if문 대신 삼항연산자 사용

- if 구문과 for 루프는 JavaScript 표현식이 아니기 때문에 JSX 내부 자바스크립트 표현식에서는 사용할 수 없다.
- 방법 1 : 외부에서 사용

    ```jsx
    function App () {
    	const name = 'kjj';
    	const nick = '';
    	if(name == 'kjj') {
    		nick = 'pig';
    	}
    	return (
    		<div>
    			<div>Hello</div>
    			<div>{ nick }</div>
    		</div>
    	);
    }
    ```

- 방법 2 : 삼항연산자 사용

    ```jsx
    function App () {
    	const name = 'kjj';
    	return (
    		<div>
    			<div>Hello</div>
    			{
    				name == 'kjj' ? 
    					(<div>pig</div>) : (<div> {name} </div>)
    			}
    		</div>
    	);
    }
    ```

- 방법 3 : && 연산자 사용

    ```jsx
    function App () {
    	const name = 'kjj';
    	return (
    		<div>
    			<div>Hello</div>
    			{	name == 'kjj' && <div>pig</div> }
    		</div>
    	);
    }
    ```

- 방법 4 : 즉시 실행함수

    ```jsx
    function App () {
    	const name = 'kjj';
    	return (
    		<div>
    			<div>Hello</div>
    			{
    				(() => {
    					if(name == 'kjj'){
    					  return (<div>pig</div>);
    					}else{
    					  return (<div>{ name }</div>);
    					}
    			  })()
    			}
    		</div>
    	);
    }
    ```


### 4. React DOM 은 HTML Attr 이름대신 camelCase 명명을 사용한다

- JSX에서 자바스크립트 문법을 쓰려면 {}를 써야 하기 때문에, 스타일을 적용할 때에도 객체 형태로 넣어 주어야 한다.
- `class` 선언으로 볼수있기 때문에 JSX 에서는 `className` 이라고 작성한다

    ```html
    <div className="test" style = { {fontSize : 16px, color : red} }> Hello </div>
    ```


### 5. 주석사용 방법

- `{/* … */}` 의 형태로 사용
