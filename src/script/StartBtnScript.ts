
type TextType = {
  content: string
  x: number
  y: number
}

export default class MeunScript extends Laya.Script {
  
  constructor() {
    super()
    
  }

  // createText(text: TextType, target: Laya.Node) {
  //   const t = new Laya.Label(text.content)
  //   t.x = text.x
  //   t.y = text.y
  //   target.addChild(t)
    
  // }


  // onClick(e: Laya.Event) {
  //   console.log(e.target)
  //   createText()
  // }

}