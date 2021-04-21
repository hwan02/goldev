# Ctrl + v 시 React ref 변수 값에 입력 안 되는 현상 

```java
//<select >...</select> 
<input type="text" ref={el => this.value = el} name="select1" onChange={(e) => Util.dataTransfer(e, this)}
onKeyPress={(e) => Util.enterKey(e, this.submit)}>
```

기존: select 아래에 input 속성으로 onChange를 사용하고 있었다. Ctrl+v로 복사 붙여넣기 했을 때 값이 업데이트 되지 않는 현상이 발생했다.


>onKeyDown : 키를 눌렀을때(shift, alt, ctrl, controll, capslock 등의 모든 키에 동작한다. 단 한영변환, 한자 등의 특수키는 인식 못한다)  
onKeyUp : 키를 눌렀다가 뗐을 때(onkeydown 에서 인식하는 키들을 인식 한다)  
onKeyPress : 키를 입력할 때(shift, tap, enter 등의 특수키는 인식 못한다)

onChange에서 ctrl+v로 데이터 입력 시 작동을 안 한다.
그래서 onKeyDown으로 바꾸고 ctrl+v로 데이터 입력을 하면 키가 눌려진 동작은 인식을 하지만 데이터를 넘겨주지 못 했다. 
onKeyUp으로 했을 때 ctrl+v 동작도 인식하고 데이터도 넘겨졌다. 

*최종적으로 onKeyUp을 통해서 복사붙여넣기 시 데이터를 넘겨줄 수 있었다.*
