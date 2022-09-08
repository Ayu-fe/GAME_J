
type TextType = {
  content: string
  x: number
  y: number
  color?: string
}
export default class MeunScript extends Laya.Script {

  constructor() {
    super()

  }

  private content = [
    {
      content: '我这是怎么了？？？',
      x: 20,
      y: 20
    },
    {
      content: '是谁在说话？',
      x: 20,
      y: 20
    },
    {
      content: '我的头好痛',
      x: 20,
      y: 20,
      color: 'red'
    },
    {
      content: '不论如何，先找找线索吧',
      x: 20,
      y: 20
    }
  ]
  private text = null as Laya.Label

  createText(text: TextType[], target: Laya.Node) {
    if (this.text) this.text.destroy()
    if (!text.length) return
    const curText = text.shift()
    this.text = new Laya.Label(curText.content)
    this.text.x = curText.x
    this.text.y = curText.y
    this.text.fontSize = 50
    this.text.color = curText.color || '#fff'
    target.addChild(this.text)
  }


  onStart() {
    console.log('开始游戏')
    const random = ['red', 'green', 'blue', '#fff', '#ccc']
    const start_btn = this.owner.getChildByName('start_btn') as Laya.Sprite

    setInterval(function () {
      const btnLabel = start_btn.getChildAt(0) as Laya.Label
      btnLabel.color = random[Math.floor(Math.random() * 5)]
    }, 1000)

    setTimeout(() => {
      start_btn.visible = true
    }, 1000)
  }

  onClick(e: Laya.Event) {
    this.createText(this.content, this.owner)
    console.log(e.target)
  }

}