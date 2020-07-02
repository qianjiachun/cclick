/* 
    CClick
    单双击/长按不冲突的解决方案 
    By: 小淳

    调用方法:
    let a = new CClick(document.getElementById(""));
    a.click((e) => {// TODO});
    a.dbClick((e) => {// TODO});
    a.longClick((e) => {// TODO});
*/
class CClick {
    private func_click: Function | null = null;
    private func_dbClick: Function | null= null;
    private func_longClick: Function | null = null;
    constructor(element: HTMLElement) {
        const CONST_LONG_TIME = 700; // 长按多少ms执行
        const CONST_DOUBLE_TIME = 250; // 双击的间隔
        let isLong: boolean = false;
        let timer_long: number;
        let clickTimes: number = 0;
        let timer_db: number;
        element.onmousedown = (event: object) => {
            isLong = false;
            timer_long = setTimeout(() => {
                isLong = true;
                if (this.func_longClick !== null) {
                    this.func_longClick(event);
                }
            }, CONST_LONG_TIME);
        };
        element.onmouseup = (event: object) => {
            if (isLong == false) {
                clearTimeout(timer_long);
                clickTimes++;
                if (clickTimes >= 2) {
                    clearTimeout(timer_db);
                    clickTimes = 0;
                    if (this.func_dbClick !== null) {
                        this.func_dbClick(event);
                    }
                    return;
                }
                timer_db = setTimeout(() => {
                    clickTimes = 0;
                    if (this.func_click !== null) {
                        this.func_click(event);
                    }
                }, CONST_DOUBLE_TIME);
            }
        };
    }
    public click(callback: Function | null) {
        this.func_click = callback;
    }
    public dbClick(callback: Function | null) {
        this.func_dbClick = callback;
    }
    public longClick(callback: Function | null) {
        this.func_longClick = callback;
    }
}

export = CClick