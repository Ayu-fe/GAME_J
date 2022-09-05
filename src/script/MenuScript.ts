export default class MeunScript extends Laya.Script {
  
  constructor() {
    super()
    
  }

  onStart() {
    console.log('开始游戏')
    const random = ['red', 'green', 'blue', '#fff', '#ccc'] 
    const start_btn = this.owner.getChildByName('start_btn') as Laya.Button

    setInterval(function() {
      const btnLabel = start_btn.getChildAt(0) as Laya.Label
      btnLabel.color = random[Math.floor(Math.random() * 5)]
    }, 1000)

    setTimeout(() => {
      start_btn.visible = true
    }, 1000)

  }
}