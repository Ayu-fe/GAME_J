(function () {
  'use strict';

  class MeunScript extends Laya.Script {
      constructor() {
          super();
      }
  }

  class MeunScript$1 extends Laya.Script {
      constructor() {
          super();
          this.content = [
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
          ];
          this.text = null;
      }
      createText(text, target) {
          if (this.text)
              this.text.destroy();
          if (!text.length)
              return;
          const curText = text.shift();
          this.text = new Laya.Label(curText.content);
          this.text.x = curText.x;
          this.text.y = curText.y;
          this.text.fontSize = 50;
          this.text.color = curText.color || '#fff';
          target.addChild(this.text);
      }
      onStart() {
          console.log('开始游戏');
          const random = ['red', 'green', 'blue', '#fff', '#ccc'];
          const start_btn = this.owner.getChildByName('start_btn');
          setInterval(function () {
              const btnLabel = start_btn.getChildAt(0);
              btnLabel.color = random[Math.floor(Math.random() * 5)];
          }, 1000);
          setTimeout(() => {
              start_btn.visible = true;
          }, 1000);
      }
      onClick(e) {
          this.createText(this.content, this.owner);
          console.log(e.target);
      }
  }

  class GameConfig {
      constructor() { }
      static init() {
          var reg = Laya.ClassUtils.regClass;
          reg("script/StartBtnScript.ts", MeunScript);
          reg("script/MenuScript.ts", MeunScript$1);
      }
  }
  GameConfig.width = 1136;
  GameConfig.height = 640;
  GameConfig.scaleMode = "fixedwidth";
  GameConfig.screenMode = "none";
  GameConfig.alignV = "top";
  GameConfig.alignH = "left";
  GameConfig.startScene = "Menu.scene";
  GameConfig.sceneRoot = "";
  GameConfig.debug = false;
  GameConfig.stat = false;
  GameConfig.physicsDebug = false;
  GameConfig.exportSceneToJson = true;
  GameConfig.init();

  class Main {
      constructor() {
          if (window["Laya3D"])
              Laya3D.init(GameConfig.width, GameConfig.height);
          else
              Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
          Laya["Physics"] && Laya["Physics"].enable();
          Laya["DebugPanel"] && Laya["DebugPanel"].enable();
          Laya.stage.scaleMode = GameConfig.scaleMode;
          Laya.stage.screenMode = GameConfig.screenMode;
          Laya.stage.alignV = GameConfig.alignV;
          Laya.stage.alignH = GameConfig.alignH;
          Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
          if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
              Laya.enableDebugPanel();
          if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
              Laya["PhysicsDebugDraw"].enable();
          if (GameConfig.stat)
              Laya.Stat.show();
          Laya.alertGlobalError(true);
          Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
      }
      onVersionLoaded() {
          Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
      }
      onConfigLoaded() {
          GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
      }
  }
  new Main();

}());
