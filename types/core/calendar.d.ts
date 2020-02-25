import { el } from './../util/index';
import { IOptions } from '../interfaces/index';
export declare class HelloWeek {
    private options;
    private langs;
    private selector;
    private daysOfMonth;
    private todayDate;
    private date;
    private defaultDate?;
    private calendar;
    private days;
    private isRTL;
    private daysHighlight;
    private intervalRange;
    private daysSelected;
    private lastSelectedDay;
    constructor(options: IOptions);
    destroy(): void;
    prev(): void;
    next(): void;
    prevYear(): void;
    nextYear(): void;
    update(): void;
    goToDate(date?: string): void;
    getDaySelected(): any;
    getLastDaySelected(): Date | string;
    getDaysHighlight(): string;
    getMonth(): number;
    getYear(): number;
    setOptions(options?: Partial<IOptions>, callback?: (data: IOptions) => IOptions): void;
    setDaysHighlight(daysHighlight: [number]): void;
    setIntervalRange(value: string[] | number[]): void;
    setMinDate(date: number | string): void;
    setMaxDate(date: number | string): void;
    private beforeCreate;
    private beforeMount;
    private selectDay;
    private handleClickInteraction;
    private handleMouseInteraction;
    private creatWeek;
    private createMonth;
    private createDay;
    private disabledDays;
    private highlightDays;
    private computedAttributes;
    private monthsAsString;
    private weekAsString;
    private mounted;
    private clearCalendar;
    private removeStatesClass;
}
export { el };
