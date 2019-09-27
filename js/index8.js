
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;

    default:
        return state;
  }
};

let state = reducer(undefined, {})

state = reducer(state, { type: "INC" });
console.log(state);
state = reducer(state, { type: "INC" });
console.log(state);


// import { Directive, Element, HostListener, Renderer2 } from @angular/core;

// @Directive({
//     selector: "{myEvent]"
// })
// export class MyEventDirective {

//     constructor(private elementRef: elementRef, private renderer: Renderer){
//     }

//     @HostListener("mouseenter") 
//     onMouseEnter(){
//         this.changeColor("red");
//     }

//     @HostListener("mouseleave") 
//     onMouseLeave(){
//         this.changeColor(null);
//     }

//     private changeColor(color:string) {
//         this.renderer.setStyle(this.elementRef.nativeElement, "color", color)
//     }
// }