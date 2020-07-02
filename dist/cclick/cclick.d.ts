declare class CClick {
    private func_click;
    private func_dbClick;
    private func_longClick;
    constructor(element: HTMLElement);
    click(callback: Function | null): void;
    dbClick(callback: Function | null): void;
    longClick(callback: Function | null): void;
}
export = CClick;
