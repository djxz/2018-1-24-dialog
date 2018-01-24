class Dialog{
	constructor(title='弹框',btn='确定'){
		this.title = title || "标题";
		this.btn = btn || "按钮";
		this.init();
	}
	init(){
		this.creatMark();
		this.addEvent();
	}
	createDialog(){
		let dialogBox = document.createElement('div');
		return dialogBox;
	}
	createTit(){
		let titleBox = document.createElement('div');
		let titCon = document.createElement('span');

		//标题内容
		titCon.innerHTML = this.title;
		titleBox.append(titCon);
		return titleBox;
	}
	createClose(){
		let closeBtn = document.createElement('span');
		return closeBtn;
	}
	createBtn(){
		let btn = document.createElement('button');
		btn.className = 'btn';
		btn.innerHTML = this.btn;
		return btn;
	}
	creatMark(){
		let mark = document.createElement('div');
		let dialog = this.createDialog();
		let tit = this.createTit();
		let close = this.createClose();
		let button = this.createBtn();

		mark.className = 'mark';
		mark.id = 'markBox';
		dialog.className = 'dialog';
		tit.className = 'tit';
		close.className = 'close';
		close.id = 'closeBtn'

		mark.append(dialog);
		dialog.append(tit);
		tit.append(close);
		dialog.append(button);
		document.body.append(mark);

		// tit.innerHTML = '标题';
		close.innerHTML = '✘';
	}
	addEvent(){
		let closeBtn = document.getElementById('closeBtn');
		let markBox = document.getElementById('markBox');

		closeBtn.addEventListener('click',function(){
			markBox.style.display = 'none';
		})
	}
}
let dialogCode = new Dialog('弹出框标题');
